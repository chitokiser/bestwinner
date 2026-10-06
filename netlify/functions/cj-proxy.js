const CJ_API_BASE = 'https://developers.cjdropshipping.com/api2.0/v1';

export const handler = async (event, context) => {
  // CORS Headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, CJ-Access-Token',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const { action, email, apiKey, accessToken, keyword = '', categoryId, pageNum = 1, pageSize = 40, minPriceUSD, maxPriceUSD } = body;

    // 1. Get Access Token Action
    if (action === 'getAccessToken' || action === 'auth') {
      if (!email || !apiKey) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ code: 400, message: 'Email and API key are required' })
        };
      }

      const res = await fetch(`${CJ_API_BASE}/authentication/getAccessToken`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), apiKey: apiKey.trim() })
      });

      const data = await res.json();
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(data)
      };
    }

    // 2. Fetch / Search Product List Action (Supports both Official Token & Public CJ Search API)
    if (action === 'getProducts' || action === 'searchProducts') {
      let token = accessToken || event.headers['cj-access-token'] || event.headers['CJ-Access-Token'];
      let liveList = [];
      let isSuccess = false;
      let errorMsg = null;

      // Auto-authenticate with ENV CJ_DROPSHIPPING_API_KEY if no token provided by client
      if (!token) {
        const envApiKey = process.env.CJ_DROPSHIPPING_API_KEY || 'CJ1219247@api@2bd6eaf6d53d442faad9cf665ce1060f';
        if (envApiKey) {
          try {
            const authRes = await fetch(`${CJ_API_BASE}/authentication/getAccessToken`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: '', apiKey: envApiKey.trim() })
            });
            const authData = await authRes.json();
            if (authData.code === 200 && authData.data?.accessToken) {
              token = authData.data.accessToken;
            }
          } catch (authErr) {
            console.warn('Auto auth with ENV CJ API Key failed:', authErr.message);
          }
        }
      }

      // Helper to map Korean/short keywords to high-yield English terms for CJ Open API
      const mapSearchKeyword = (rawKw) => {
        if (!rawKw || !rawKw.trim()) return '';
        const q = rawKw.toLowerCase().trim();
        const dict = {
          'art': 'decor',
          '아트': 'decor',
          '유화': 'painting',
          '그림': 'painting',
          '액자': 'frame',
          '조형물': 'statue',
          '동상': 'statue',
          '조각상': 'sculpture',
          '조명': 'light',
          '램프': 'lamp',
          '스탠드': 'lamp',
          '인테리어': 'decor',
          '소품': 'decor',
          '화병': 'vase',
          '태양광': 'solar',
          '소방': 'fire',
          '방수': 'waterproof',
          '스마트': 'smart'
        };
        return dict[q] || q;
      };

      // Method A: Official Open API with Access Token and Automatic Retry on Rate-Limit (1600200)
      if (token) {
        try {
          const effectiveKw = mapSearchKeyword(keyword);
          const startPage = ((pageNum - 1) * 2) + 1; // Fetch 2 pages per client page (e.g. CJ pages 1&2 for client page 1)
          let fetchedList = [];

          for (let p = startPage; p <= startPage + 1; p++) {
            let queryParams = new URLSearchParams({
              pageNum: String(p),
              pageSize: String(pageSize || 50)
            });

            if (effectiveKw) {
              queryParams.append('productName', effectiveKw);
            }
            if (categoryId && categoryId !== 'all') {
              queryParams.append('categoryId', categoryId);
            }
            if (minPriceUSD !== undefined && minPriceUSD !== '' && minPriceUSD !== null) {
              queryParams.append('startSellPrice', String(minPriceUSD));
            }
            if (maxPriceUSD !== undefined && maxPriceUSD !== '' && maxPriceUSD !== null) {
              queryParams.append('endSellPrice', String(maxPriceUSD));
            }

            const url = `${CJ_API_BASE}/product/list?${queryParams.toString()}`;
            
            // Retry loop for 1600200 rate-limit
            for (let attempt = 0; attempt < 3; attempt++) {
              const res = await fetch(url, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'CJ-Access-Token': token
                }
              });

              if (res.ok) {
                const data = await res.json();
                if (data.code === 200 && data.data) {
                  const pageList = data.data.list || data.data.content || data.data.records || [];
                  if (pageList.length > 0) {
                    fetchedList.push(...pageList);
                    break;
                  }
                } else if (data.code === 1600200) {
                  errorMsg = data.message || `API Code ${data.code}`;
                  await new Promise(r => setTimeout(r, 400));
                } else {
                  break;
                }
              }
            }
            // Delay between sequential page fetches to prevent rate limits
            await new Promise(r => setTimeout(r, 350));
          }

          if (fetchedList.length > 0) {
            liveList = fetchedList;
            isSuccess = true;
          }
        } catch (err) {
          console.warn('CJ Official API proxy fetch failed:', err.message);
          errorMsg = err.message;
        }
      }

      // Method B: Fallback to CJ Public Search API if no token or official API returned empty
      if (!isSuccess && keyword && keyword.trim()) {
        try {
          const searchParams = new URLSearchParams({
            keyWord: keyword.trim(),
            page: String(pageNum),
            size: String(pageSize)
          });

          const publicRes = await fetch(`https://cjdropshipping.com/elastic-search/product/search-new-list?${searchParams.toString()}`, {
            method: 'GET',
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
              'Accept': 'application/json, text/plain, */*'
            }
          });

          if (publicRes.ok) {
            const pubData = await publicRes.json();
            const list = pubData.data?.list || pubData.result?.list || pubData.data?.content || [];
            if (Array.isArray(list) && list.length > 0) {
              liveList = list.map(item => ({
                pid: item.pid || item.id || `CJ-PUB-${Math.random().toString(36).substring(7)}`,
                productSku: item.productSku || item.sku || `SKU-PUB-${Math.random().toString(36).substring(7)}`,
                productName: item.productNameEn || item.productName || item.name || `${keyword} Product`,
                productNameEn: item.productNameEn || item.productName || item.name,
                productImage: item.productImage || item.bigImg || item.img || item.image,
                sellPrice: item.sellPrice || item.price || item.nowPrice || item.discountPrice || '15.50',
                productWeight: item.productWeight || item.weight || '0.5'
              }));
              isSuccess = true;
            }
          }
        } catch (pubErr) {
          console.warn('CJ Public Elastic search proxy failed:', pubErr.message);
        }
      }

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          code: 200,
          result: true,
          message: isSuccess ? 'Success' : (errorMsg || 'No items found'),
          data: {
            pageNum,
            pageSize,
            total: liveList.length,
            list: liveList
          }
        })
      };
    }

    // 3. Query Product Detail & Calculate Import Margin Action
    if (action === 'getProductDetail' || action === 'importProduct') {
      const pid = body.pid || body.productId;
      const marginRate = parseFloat(body.marginRate || body.marginPercent || '35') / 100;
      let token = accessToken || event.headers['cj-access-token'] || event.headers['CJ-Access-Token'];

      if (!token) {
        const envEmail = process.env.GMAIL_ACCOUNT || process.env.ADMIN_NOTIFY_EMAIL || 'daguri75@gmail.com';
        const envApiKey = process.env.CJ_DROPSHIPPING_API_KEY || 'CJ1219247@api@2bd6eaf6d53d442faad9cf665ce1060f';
        if (envApiKey && envEmail) {
          try {
            const authRes = await fetch(`${CJ_API_BASE}/authentication/getAccessToken`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: envEmail.trim(), apiKey: envApiKey.trim() })
            });
            const authData = await authRes.json();
            if (authData.code === 200 && authData.data?.accessToken) {
              token = authData.data.accessToken;
            }
          } catch (err) {
            console.warn('Auto auth for product detail failed:', err.message);
          }
        }
      }

      let detailData = null;
      if (token && pid) {
        try {
          const res = await fetch(`${CJ_API_BASE}/product/query?pid=${encodeURIComponent(pid)}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'CJ-Access-Token': token
            }
          });
          if (res.ok) {
            const data = await res.json();
            if (data.code === 200 && data.data) {
              detailData = data.data;
            }
          }
        } catch (err) {
          console.warn('CJ Product Detail Query failed:', err.message);
        }
      }

      // Calculate Margin & Currency Conversion
      const supplierPriceUSD = parseFloat(detailData?.sellPrice || body.supplierPriceUSD || '15.00') || 15.0;
      const costUSD = supplierPriceUSD + 4.50; // standard CJ packet shipping
      const sellingPriceUSD = parseFloat((costUSD * (1 + marginRate)).toFixed(2));
      const profitUSD = parseFloat((sellingPriceUSD - costUSD).toFixed(2));
      const usdToVnd = 25400;
      const usdToKrw = 1350;

      const importedProduct = {
        id: `CJ-IMPORTED-${pid || Date.now()}`,
        cjPid: pid,
        cjSku: detailData?.productSku || body.cjSku || `SKU-${Date.now()}`,
        name: {
          ko: detailData?.productName || body.name?.ko || 'CJ 연동 상품',
          vi: detailData?.productNameEn || body.name?.vi || 'Sản phẩm CJ Dropshipping',
          en: detailData?.productNameEn || body.name?.en || 'CJ Dropshipping Product',
          zh: detailData?.productNameCn || body.name?.zh || 'CJ 关联商品'
        },
        category: body.category || 'interior',
        supplierPriceUSD,
        suggestedRetailUSD: sellingPriceUSD,
        marginRatePercent: marginRate * 100,
        profitUSD,
        sellingPriceVND: Math.round(sellingPriceUSD * usdToVnd),
        profitVND: Math.round(profitUSD * usdToVnd),
        sellingPriceKRW: Math.round(sellingPriceUSD * usdToKrw),
        weightKg: parseFloat(detailData?.productWeight || body.weightKg || '0.5') || 0.5,
        image: detailData?.productImage || body.image || 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
        description: detailData?.description || detailData?.productNameEn || '',
        variants: detailData?.variants || body.variants || ['Standard Edition'],
        importedAt: new Date().toISOString(),
        isCustomRegistered: true
      };

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          code: 200,
          result: true,
          message: 'Product imported successfully',
          data: importedProduct
        })
      };
    }

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ code: 400, message: 'Invalid proxy action requested' })
    };
  } catch (error) {
    console.error('CJ Proxy Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ code: 500, message: error.message || 'Internal proxy server error' })
    };
  }
};
