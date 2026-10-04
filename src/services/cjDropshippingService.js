/**
 * BEST Mall Fulfillment API & Catalog Engine
 * Official Integration Endpoint
 */

const CJ_API_BASE = 'https://developers.cjdropshipping.com/api2.0/v1';

// Initial Catalog tailored to BEST Group ecosystem
export const DEMO_CJ_PRODUCTS = [
  {
    id: 'CJ-PROD-9001',
    cjSku: 'CJ-HOME-SMART-01',
    name: {
      ko: '스마트 LED 무드등 & 비상 소방 조명',
      vi: 'Đèn LED Thông Minh & Chiếu Sáng Khẩn Cấp PCCC',
      en: 'Smart LED Ambient & Emergency Fire Safety Light'
    },
    category: 'interior',
    supplierPriceUSD: 14.50,
    suggestedRetailUSD: 39.90,
    weightKg: 0.45,
    rating: 4.9,
    reviewsCount: 128,
    stock: 2450,
    shippingEstDays: '4-7일',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
    tags: ['Best Seller', 'K-Design', 'QCVN Ready'],
    variants: ['Warm White', 'RGB Smart App Control', 'Emergency Battery Pack']
  },
  {
    id: 'CJ-PROD-9002',
    cjSku: 'CJ-PARK-AI-CAM02',
    name: {
      ko: '차량용 AI 블랙박스 & 주차 센서 킷',
      vi: 'Bộ Cảm Biến Đỗ Xe & Dashcam AI Ô Tô',
      en: 'AI Dashcam & Smart Vehicle Parking Sensor Kit'
    },
    category: 'parking',
    supplierPriceUSD: 28.00,
    suggestedRetailUSD: 75.00,
    weightKg: 0.85,
    rating: 4.8,
    reviewsCount: 94,
    stock: 1120,
    shippingEstDays: '5-8일',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
    tags: ['AI Smart', 'Hot Item'],
    variants: ['Front 4K + Rear 1080P', '4K + Solar Assist']
  },
  {
    id: 'CJ-PROD-9003',
    cjSku: 'CJ-SOLAR-GEN-03',
    name: {
      ko: '휴대용 3D PVT 솔라 충전 보조배터리 50,000mAh',
      vi: 'Trạm Sạc Năng Lượng Mặt Trời 3D PVT 50.000mAh',
      en: '3D PVT Solar Power Station 50,000mAh'
    },
    category: 'energy',
    supplierPriceUSD: 42.00,
    suggestedRetailUSD: 119.00,
    weightKg: 1.20,
    rating: 5.0,
    reviewsCount: 310,
    stock: 580,
    shippingEstDays: '4-6일',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80',
    tags: ['3D Solar', 'High Margin'],
    variants: ['Standard Matte Black', 'Rugged Waterproof Camo']
  },
  {
    id: 'CJ-PROD-9004',
    cjSku: 'CJ-FIRE-EXT-04',
    name: {
      ko: '차량/주택 겸용 초경량 미니 스프레이 자동 소화기',
      vi: 'Bình Chữa Cháy Mini Cầm Tay Cho Ô Tô & Gia Đình',
      en: 'Ultra-light Mini Aerosol Fire Extinguisher'
    },
    category: 'firefighting',
    supplierPriceUSD: 8.90,
    suggestedRetailUSD: 24.90,
    weightKg: 0.50,
    rating: 4.9,
    reviewsCount: 450,
    stock: 4200,
    shippingEstDays: '3-6일',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80',
    tags: ['Fire Safety', 'QCVN Approved'],
    variants: ['Red Fire Signal', 'Silver Metallic Elegance']
  },
  {
    id: 'CJ-PROD-9005',
    cjSku: 'CJ-WATER-SEAL-05',
    name: {
      ko: '초강력 나노 스프레이 방수/누수 차단 실란트 (500ml)',
      vi: 'Chai Xịt Chống Thấm NANO Siêu Cấp 500ml',
      en: 'Ultra Nano Waterproof Sealing Spray 500ml'
    },
    category: 'waterproofing',
    supplierPriceUSD: 5.20,
    suggestedRetailUSD: 18.00,
    weightKg: 0.60,
    rating: 4.7,
    reviewsCount: 520,
    stock: 8900,
    shippingEstDays: '4-7일',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    tags: ['High Volume', 'Fast Ship'],
    variants: ['Clear Transparent', 'Black Protection']
  },
  {
    id: 'CJ-PROD-9006',
    cjSku: 'CJ-ELEV-MIRROR-06',
    name: {
      ko: '스마트 승강기/건물 안심 보안 무선 서베이 카메라',
      vi: 'Camera An Ninh Thông Minh Dành Cho Thang Thang Máy',
      en: 'Wireless Smart Security Camera for Elevators & Entry'
    },
    category: 'elevator',
    supplierPriceUSD: 31.50,
    suggestedRetailUSD: 89.00,
    weightKg: 0.38,
    rating: 4.8,
    reviewsCount: 76,
    stock: 930,
    shippingEstDays: '5-9일',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80',
    tags: ['AI Security', 'Premium'],
    variants: ['Night Vision 4K', 'Dual Lens 360 Wide']
  },
  {
    id: 'CJ-PROD-9007',
    cjSku: 'CJ-HOME-DIFF-07',
    name: {
      ko: '호텔급 아로마 디퓨저 & 음이온 공기 정화기',
      vi: 'Máy Khuếch Tán Tinh Dầu Khách Sạn & Lọc Không Khí Ion',
      en: 'Luxury Hotel Aroma Diffuser & Anion Air Purifier'
    },
    category: 'interior',
    supplierPriceUSD: 19.80,
    suggestedRetailUSD: 49.90,
    weightKg: 0.70,
    rating: 4.9,
    reviewsCount: 210,
    stock: 1650,
    shippingEstDays: '3-6일',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80',
    tags: ['Luxury', 'Best Seller'],
    variants: ['Nordic White Marble', 'Walnut Wood Grain']
  },
  {
    id: 'CJ-PROD-9008',
    cjSku: 'CJ-SOLAR-WALL-08',
    name: {
      ko: '3D 태양광 벽등 Outdoor IP68 방수 옥외등',
      vi: 'Đèn Tường Năng Lượng Mặt Trời IP68 Chống Nước',
      en: '3D Solar Wall Light IP68 Waterproof Outdoor Lamp'
    },
    category: 'energy',
    supplierPriceUSD: 11.40,
    suggestedRetailUSD: 29.90,
    weightKg: 0.42,
    rating: 4.8,
    reviewsCount: 184,
    stock: 3100,
    shippingEstDays: '4-7일',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
    tags: ['Solar PVT', 'Eco Friendly'],
    variants: ['Sensor Motion Light', 'Dusk to Dawn Dusk Auto']
  }
];

// Global CJ Database Pool for Live Searching and Importing into BEST Mall
export const GLOBAL_CJ_DB_POOL = [
  ...DEMO_CJ_PRODUCTS,
  {
    id: 'CJ-DB-1001',
    cjSku: 'CJ-HOME-ROBOT-01',
    name: {
      ko: '스마트 습식 무선 로봇 청소기 5000Pa',
      vi: 'Robot Hút Bụi Thần Tốc 5000Pa Cảm Biến Laser',
      en: 'Smart Wet/Dry Robotic Vacuum 5000Pa Laser'
    },
    category: 'interior',
    supplierPriceUSD: 85.00,
    suggestedRetailUSD: 199.00,
    weightKg: 3.50,
    rating: 4.9,
    reviewsCount: 520,
    stock: 1200,
    shippingEstDays: '4-7일',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=600&q=80',
    tags: ['AI Smart', 'Top Recommended'],
    variants: ['White Ultra', 'Space Black']
  },
  {
    id: 'CJ-DB-1002',
    cjSku: 'CJ-PARK-BARRIER-02',
    name: {
      ko: '무선 스마트 주차 차단기 & 번호판 센서',
      vi: 'Cổng Barrier Đỗ Xe Tự Động & Nhận Diện Biển Số',
      en: 'Wireless Auto Barrier & License Plate Sensor'
    },
    category: 'parking',
    supplierPriceUSD: 120.00,
    suggestedRetailUSD: 299.00,
    weightKg: 6.80,
    rating: 4.8,
    reviewsCount: 65,
    stock: 450,
    shippingEstDays: '5-9일',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=600&q=80',
    tags: ['B2B Heavy', 'AI LPR'],
    variants: ['Single Gate 3M', 'Dual Gate 6M']
  },
  {
    id: 'CJ-DB-1003',
    cjSku: 'CJ-SOLAR-BALCONY-03',
    name: {
      ko: '발코니 미니 3D PVT 태양광 발전 킷 400W',
      vi: 'Bộ Năng Lượng Mặt Trời Ban Công 3D PVT 400W',
      en: 'Balcony 3D PVT Mini Solar Power Kit 400W'
    },
    category: 'energy',
    supplierPriceUSD: 145.00,
    suggestedRetailUSD: 349.00,
    weightKg: 7.20,
    rating: 5.0,
    reviewsCount: 380,
    stock: 890,
    shippingEstDays: '4-7일',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80',
    tags: ['3D Solar', 'ESG Eco'],
    variants: ['400W Standard', '800W Dual Panel']
  },
  {
    id: 'CJ-DB-1004',
    cjSku: 'CJ-FIRE-MASK-04',
    name: {
      ko: '화재 비상 대피용 방독면 & 내화 타월 킷',
      vi: 'Mặt Nạ Phòng Độc PCCC & Khăn Thảm Chống Cháy',
      en: 'Fire Smoke Escape Mask & Flame Resistant Kit'
    },
    category: 'firefighting',
    supplierPriceUSD: 9.50,
    suggestedRetailUSD: 28.00,
    weightKg: 0.60,
    rating: 4.9,
    reviewsCount: 890,
    stock: 5400,
    shippingEstDays: '3-5일',
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=600&q=80',
    tags: ['QCVN Certified', 'Essential'],
    variants: ['Single Mask Pack', 'Family 4-Pack Box']
  },
  {
    id: 'CJ-DB-1005',
    cjSku: 'CJ-WATER-TAPE-05',
    name: {
      ko: '고점착 침투형 방수 아스팔트 바인딩 테이프 10m',
      vi: 'Băng Keo Chống Thấm Mái Nhà Siêu Dính 10m',
      en: 'Super Adhesive Waterproof Asphalt Repair Tape 10m'
    },
    category: 'waterproofing',
    supplierPriceUSD: 6.80,
    suggestedRetailUSD: 22.00,
    weightKg: 0.90,
    rating: 4.7,
    reviewsCount: 1100,
    stock: 6700,
    shippingEstDays: '3-6일',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
    tags: ['Fast Seller', 'High Margin'],
    variants: ['Width 10cm x 10m', 'Width 20cm x 10m']
  }
];

// Logistics Shipping Options
export const SHIPPING_METHODS = [
  { code: 'CJPacket_Standard', name: 'CJ Packet Standard', baseFeeUSD: 4.50, costPerKgUSD: 3.20, estDays: '5-8일' },
  { code: 'CJPacket_Fast', name: 'CJ Packet Express', baseFeeUSD: 7.80, costPerKgUSD: 4.50, estDays: '3-5일' },
  { code: 'DHL_Express', name: 'DHL Air Worldwide', baseFeeUSD: 18.00, costPerKgUSD: 8.00, estDays: '2-4일' },
  { code: 'Vietnam_Post_Special', name: 'Vietnam Post Direct line', baseFeeUSD: 3.90, costPerKgUSD: 2.80, estDays: '4-7일' }
];

export class CJDropshippingService {
  /**
   * Load stored API Configs from LocalStorage
   */
  static getStoredConfig() {
    try {
      const saved = localStorage.getItem('cj_dropshipping_config');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to parse CJ config', e);
    }
    return {
      apiKey: '',
      email: '',
      accessToken: '',
      isDemoMode: true,
      marginPercent: 30,
      usdToVndRate: 25400,
      usdToKrwRate: 1350
    };
  }

  /**
   * Save API Configs to LocalStorage
   */
  static saveConfig(config) {
    try {
      const current = this.getStoredConfig();
      const updated = { ...current, ...config };
      localStorage.setItem('cj_dropshipping_config', JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.error('Error saving CJ config:', e);
      return null;
    }
  }

  /**
   * Fetch Access Token from CJ Open API 2.0
   */
  static async authenticate({ email, apiKey }) {
    if (!email || !apiKey) {
      throw new Error('Email and API Key are required for CJ Dropshipping authentication.');
    }

    try {
      const response = await fetch(`${CJ_API_BASE}/authentication/getAccessToken`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          apiKey: apiKey.trim()
        })
      });

      const data = await response.json();
      if (data.code === 200 && data.data?.accessToken) {
        this.saveConfig({
          email,
          apiKey,
          accessToken: data.data.accessToken,
          isDemoMode: false
        });
        return { success: true, token: data.data.accessToken, data: data.data };
      } else {
        throw new Error(data.message || 'Invalid CJ Dropshipping API credentials');
      }
    } catch (err) {
      console.warn('CJ Auth Fallback to simulation:', err.message);
      return {
        success: false,
        message: err.message || 'Network issue connecting to CJ API. Switching to Sandbox Simulation Mode.'
      };
    }
  }

  /**
   * Search CJ Global Database Engine
   */
  static async searchCJGlobalDatabase({ keyword = '', category = 'all' }) {
    let results = [...GLOBAL_CJ_DB_POOL];

    if (category && category !== 'all') {
      results = results.filter(p => p.category === category);
    }

    if (keyword && keyword.trim()) {
      const q = keyword.toLowerCase().trim();
      results = results.filter(p =>
        p.name.ko.toLowerCase().includes(q) ||
        p.name.vi.toLowerCase().includes(q) ||
        p.name.en.toLowerCase().includes(q) ||
        p.cjSku.toLowerCase().includes(q)
      );
    }

    return results;
  }

  /**
   * Register/Import product into BEST Mall Store Catalog
   */
  static registerProductToStore(productData) {
    try {
      const customProducts = this.getRegisteredCustomProducts();
      const existIndex = customProducts.findIndex(p => p.cjSku === productData.cjSku || p.id === productData.id);
      
      const newProduct = {
        ...productData,
        id: productData.id || `CJ-CUSTOM-${Date.now()}`,
        registeredAt: new Date().toISOString(),
        isCustomRegistered: true
      };

      if (existIndex >= 0) {
        customProducts[existIndex] = newProduct;
      } else {
        customProducts.unshift(newProduct);
      }

      localStorage.setItem('best_mall_custom_products', JSON.stringify(customProducts));
      return newProduct;
    } catch (e) {
      console.error('Failed to register product to store:', e);
      return null;
    }
  }

  /**
   * Get custom registered products from LocalStorage
   */
  static getRegisteredCustomProducts() {
    try {
      const saved = localStorage.getItem('best_mall_custom_products');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  /**
   * Delete registered product
   */
  static deleteRegisteredProduct(id) {
    try {
      const customProducts = this.getRegisteredCustomProducts().filter(p => p.id !== id);
      localStorage.setItem('best_mall_custom_products', JSON.stringify(customProducts));
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * Get Combined Store Catalog Products
   */
  static async getProducts({ category = 'all', keyword = '', isDemo = true }) {
    const customRegistered = this.getRegisteredCustomProducts();
    let products = [...customRegistered, ...DEMO_CJ_PRODUCTS];

    const seen = new Set();
    products = products.filter(p => {
      const key = p.cjSku || p.id;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    if (category && category !== 'all') {
      products = products.filter(p => p.category === category);
    }

    if (keyword && keyword.trim()) {
      const q = keyword.toLowerCase().trim();
      products = products.filter(p => 
        p.name.ko.toLowerCase().includes(q) ||
        p.name.vi.toLowerCase().includes(q) ||
        p.name.en.toLowerCase().includes(q) ||
        p.cjSku.toLowerCase().includes(q)
      );
    }

    return products;
  }

  /**
   * Calculate Shipping Fee
   */
  static calculateShippingFee(weightKg, shippingMethodCode = 'CJPacket_Standard') {
    const method = SHIPPING_METHODS.find(m => m.code === shippingMethodCode) || SHIPPING_METHODS[0];
    const feeUSD = method.baseFeeUSD + (weightKg * method.costPerKgUSD);
    return {
      methodName: method.name,
      estDays: method.estDays,
      feeUSD: Number(feeUSD.toFixed(2))
    };
  }

  /**
   * Calculate Selling Price and Profit Margin
   */
  static calculateMargin({ supplierPriceUSD, weightKg, shippingMethodCode, marginPercent, currency = 'USD' }) {
    const config = this.getStoredConfig();
    const marginRatio = (marginPercent || config.marginPercent || 30) / 100;
    const shippingInfo = this.calculateShippingFee(weightKg, shippingMethodCode);
    
    const costUSD = supplierPriceUSD + shippingInfo.feeUSD;
    const sellingPriceUSD = Number((costUSD * (1 + marginRatio)).toFixed(2));
    const profitUSD = Number((sellingPriceUSD - costUSD).toFixed(2));

    const usdToVnd = config.usdToVndRate || 25400;
    const usdToKrw = config.usdToKrwRate || 1350;

    return {
      supplierPriceUSD,
      shippingFeeUSD: shippingInfo.feeUSD,
      totalCostUSD: Number(costUSD.toFixed(2)),
      sellingPriceUSD,
      profitUSD,
      marginPercent: marginPercent || 30,
      
      sellingPriceVND: Math.round(sellingPriceUSD * usdToVnd),
      profitVND: Math.round(profitUSD * usdToVnd),
      sellingPriceKRW: Math.round(sellingPriceUSD * usdToKrw),
      profitKRW: Math.round(profitUSD * usdToKrw),
      
      shippingMethodName: shippingInfo.methodName,
      estDays: shippingInfo.estDays
    };
  }

  /**
   * Create Dropshipping Order Simulation
   */
  static async createOrderSimulation(orderData) {
    const config = this.getStoredConfig();
    const orderId = `CJ-ORD-${Date.now().toString().slice(-6)}`;
    const trackingNumber = `CJVN${Math.floor(100000000 + Math.random() * 900000000)}`;

    const orderRecord = {
      orderId,
      trackingNumber,
      createdAt: new Date().toISOString(),
      customerName: orderData.customerName || 'Nguyen Van A',
      phone: orderData.phone || '0988-123-456',
      address: orderData.address || 'Hanoi, Vietnam',
      items: orderData.items || [],
      totalUSD: orderData.totalUSD || 0,
      status: 'CJ Processing (주문 발송 대기)',
      courier: orderData.courier || 'CJ Packet Standard'
    };

    try {
      const existing = JSON.parse(localStorage.getItem('cj_orders_history') || '[]');
      existing.unshift(orderRecord);
      localStorage.setItem('cj_orders_history', JSON.stringify(existing));
    } catch (e) {
      console.error('Failed to save order history', e);
    }

    return orderRecord;
  }

  /**
   * Get Orders History
   */
  static getOrdersHistory() {
    try {
      return JSON.parse(localStorage.getItem('cj_orders_history') || '[]');
    } catch (e) {
      return [];
    }
  }
}
