/**
 * BEST Mall Fulfillment API & Catalog Engine
 * Official Integration Endpoint
 */

const CJ_API_BASE = 'https://developers.cjdropshipping.com/api2.0/v1';

export const CATEGORY_MAP = {
  interior: { ko: '인테리어', vi: 'Nội Thất Smart', en: 'Interior', zh: '인테리어' },
  art: { ko: '아트', vi: 'Tranh ART', en: 'Art & Gallery', zh: '艺术' },
  lighting: { ko: '조명', vi: 'Đèn Chiếu Sáng', en: 'Lighting', zh: '照明' },
  construction: { ko: '건축', vi: 'Vật Liệu Xây Dựng', en: 'Construction', zh: '建筑' },
  etc: { ko: '기타', vi: 'Thiết Bị Khác', en: 'Others', zh: '其他' }
};

// Store catalog items registered explicitly via CJ API / Admin
export const DEMO_CJ_PRODUCTS = [];

// Global CJ Database Pool for Live Searching and Importing into BEST Mall
export const GLOBAL_CJ_DB_POOL = [
  {
    "id": "CJ-REAL-CJJT3210149",
    "pid": "2105007276961087489",
    "cjSku": "CJJT3210149",
    "name": {
      "ko": "2-Piece Matte Black Resin Reindeer Sculptures Christmas Deer Statues For Living Room Bedroom Office Shelf And Desk Decor",
      "vi": "2-Piece Matte Black Resin Reindeer Sculptures Christmas Deer Statues For Living Room Bedroom Office Shelf And Desk Decor",
      "en": "2-Piece Matte Black Resin Reindeer Sculptures Christmas Deer Statues For Living Room Bedroom Office Shelf And Desk Decor",
      "zh": "2-Piece Matte Black Resin Reindeer Sculptures Christmas Deer Statues For Living Room Bedroom Office Shelf And Desk Decor"
    },
    "category": "art",
    "supplierPriceUSD": 43.99,
    "suggestedRetailUSD": 61.59,
    "supplierPriceVND": 1117346,
    "weightKg": 400,
    "rating": 4.9,
    "reviewsCount": 40,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/90d83bd7-095e-4dc7-91ee-c3baeb002bda.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJSD3194763",
    "pid": "2103261271040765954",
    "cjSku": "CJSD3194763",
    "name": {
      "ko": "Crystal Fruit Figurine, Handmade Glass Sculpture Ornament For Desktop, Office, Home, Christmas And Holiday Decor",
      "vi": "Crystal Fruit Figurine, Handmade Glass Sculpture Ornament For Desktop, Office, Home, Christmas And Holiday Decor",
      "en": "Crystal Fruit Figurine, Handmade Glass Sculpture Ornament For Desktop, Office, Home, Christmas And Holiday Decor",
      "zh": "Crystal Fruit Figurine, Handmade Glass Sculpture Ornament For Desktop, Office, Home, Christmas And Holiday Decor"
    },
    "category": "art",
    "supplierPriceUSD": 45.56,
    "suggestedRetailUSD": 63.78,
    "supplierPriceVND": 1157224,
    "weightKg": 400,
    "rating": 4.9,
    "reviewsCount": 49,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/03d8a15f-c6ae-4964-9862-568da3421a45.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Christmas Decoration Supplies"
  },
  {
    "id": "CJ-REAL-CJJT3191464",
    "pid": "2102845824315916290",
    "cjSku": "CJJT3191464",
    "name": {
      "ko": "Black Resin Owl Sculpture 6x4.5x3 Inch Modern Art Figurine With Dot Pattern For Home Tabletop Decor",
      "vi": "Black Resin Owl Sculpture 6x4.5x3 Inch Modern Art Figurine With Dot Pattern For Home Tabletop Decor",
      "en": "Black Resin Owl Sculpture 6x4.5x3 Inch Modern Art Figurine With Dot Pattern For Home Tabletop Decor",
      "zh": "Black Resin Owl Sculpture 6x4.5x3 Inch Modern Art Figurine With Dot Pattern For Home Tabletop Decor"
    },
    "category": "art",
    "supplierPriceUSD": 44.99,
    "suggestedRetailUSD": 62.99,
    "supplierPriceVND": 1142746,
    "weightKg": 400,
    "rating": 4.9,
    "reviewsCount": 61,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/0336f71a-4a6d-4419-87cd-67dfde451cf7.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJFU3188221",
    "pid": "2102483830699896833",
    "cjSku": "CJFU3188221",
    "name": {
      "ko": "Welcome Metal Wall Decor 12x4 Inch, Black Iron Wall Hanging With Bird Branch Silhouette For Garden, Balcony And Home",
      "vi": "Welcome Metal Wall Decor 12x4 Inch, Black Iron Wall Hanging With Bird Branch Silhouette For Garden, Balcony And Home",
      "en": "Welcome Metal Wall Decor 12x4 Inch, Black Iron Wall Hanging With Bird Branch Silhouette For Garden, Balcony And Home",
      "zh": "Welcome Metal Wall Decor 12x4 Inch, Black Iron Wall Hanging With Bird Branch Silhouette For Garden, Balcony And Home"
    },
    "category": "art",
    "supplierPriceUSD": 43.09,
    "suggestedRetailUSD": 60.33,
    "supplierPriceVND": 1094486,
    "weightKg": 500,
    "rating": 4.9,
    "reviewsCount": 68,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/3ae7d407-05b6-418e-baf8-724cb8ef3ba4.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Furniture"
  },
  {
    "id": "CJ-REAL-CJJT3188186",
    "pid": "2102456159443898369",
    "cjSku": "CJJT3188186",
    "name": {
      "ko": "White Abstract Thinker Woman Statue Aesthetic Sculpture Modern Home Decor For Shelf Table Desk Living Room Office Bedroom",
      "vi": "White Abstract Thinker Woman Statue Aesthetic Sculpture Modern Home Decor For Shelf Table Desk Living Room Office Bedroom",
      "en": "White Abstract Thinker Woman Statue Aesthetic Sculpture Modern Home Decor For Shelf Table Desk Living Room Office Bedroom",
      "zh": "White Abstract Thinker Woman Statue Aesthetic Sculpture Modern Home Decor For Shelf Table Desk Living Room Office Bedroom"
    },
    "category": "art",
    "supplierPriceUSD": 45.99,
    "suggestedRetailUSD": 64.39,
    "supplierPriceVND": 1168146,
    "weightKg": 500,
    "rating": 4.9,
    "reviewsCount": 99,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/c6d01857-3bcd-4eb2-8e87-2045360fa283.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT3185102",
    "pid": "2102166350582263810",
    "cjSku": "CJJT3185102",
    "name": {
      "ko": "Small Black Heart Hands Statue Resin Love Sculpture Decorative Ornament For Living Room Bedroom Office Bookshelf",
      "vi": "Small Black Heart Hands Statue Resin Love Sculpture Decorative Ornament For Living Room Bedroom Office Bookshelf",
      "en": "Small Black Heart Hands Statue Resin Love Sculpture Decorative Ornament For Living Room Bedroom Office Bookshelf",
      "zh": "Small Black Heart Hands Statue Resin Love Sculpture Decorative Ornament For Living Room Bedroom Office Bookshelf"
    },
    "category": "art",
    "supplierPriceUSD": 44.99,
    "suggestedRetailUSD": 62.99,
    "supplierPriceVND": 1142746,
    "weightKg": 300,
    "rating": 4.9,
    "reviewsCount": 25,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/9dbf945b-7181-4161-97cd-d5e006ba43e3.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT3185084",
    "pid": "2102159534397775874",
    "cjSku": "CJJT3185084",
    "name": {
      "ko": "Small Black Bird Statues Modern Decorative Ornaments For Living Room Bedroom Office Desktop Cabinet Home Decor",
      "vi": "Small Black Bird Statues Modern Decorative Ornaments For Living Room Bedroom Office Desktop Cabinet Home Decor",
      "en": "Small Black Bird Statues Modern Decorative Ornaments For Living Room Bedroom Office Desktop Cabinet Home Decor",
      "zh": "Small Black Bird Statues Modern Decorative Ornaments For Living Room Bedroom Office Desktop Cabinet Home Decor"
    },
    "category": "art",
    "supplierPriceUSD": 54.99,
    "suggestedRetailUSD": 76.99,
    "supplierPriceVND": 1396746,
    "weightKg": 300,
    "rating": 4.9,
    "reviewsCount": 92,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/0a14d5be-b197-4701-ad69-075d9d13f89a.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT3185078",
    "pid": "2102155830839926786",
    "cjSku": "CJJT3185078",
    "name": {
      "ko": "Small Heart Hands Sculpture Gold Love Finger Statue Modern Aesthetic Decor For Living Room Bedroom Office Bookshelf",
      "vi": "Small Heart Hands Sculpture Gold Love Finger Statue Modern Aesthetic Decor For Living Room Bedroom Office Bookshelf",
      "en": "Small Heart Hands Sculpture Gold Love Finger Statue Modern Aesthetic Decor For Living Room Bedroom Office Bookshelf",
      "zh": "Small Heart Hands Sculpture Gold Love Finger Statue Modern Aesthetic Decor For Living Room Bedroom Office Bookshelf"
    },
    "category": "art",
    "supplierPriceUSD": 38.99,
    "suggestedRetailUSD": 54.59,
    "supplierPriceVND": 990346,
    "weightKg": 300,
    "rating": 4.9,
    "reviewsCount": 45,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/5c818496-a5a1-4938-acf0-9cd61afdbd78.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT3185071",
    "pid": "2102152927962353666",
    "cjSku": "CJJT3185071",
    "name": {
      "ko": "Owl Statue Figurine Home Decor Animal Sculpture For Bookshelf Bedroom Living Room Office TV Stand",
      "vi": "Owl Statue Figurine Home Decor Animal Sculpture For Bookshelf Bedroom Living Room Office TV Stand",
      "en": "Owl Statue Figurine Home Decor Animal Sculpture For Bookshelf Bedroom Living Room Office TV Stand",
      "zh": "Owl Statue Figurine Home Decor Animal Sculpture For Bookshelf Bedroom Living Room Office TV Stand"
    },
    "category": "art",
    "supplierPriceUSD": 48.99,
    "suggestedRetailUSD": 68.59,
    "supplierPriceVND": 1244346,
    "weightKg": 400,
    "rating": 4.9,
    "reviewsCount": 66,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/0541a590-007a-449e-86a1-3b44be523235.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT3163325",
    "pid": "2099565343655882753",
    "cjSku": "CJJT3163325",
    "name": {
      "ko": "Silver Metal Geometric Infinity Sculpture, Modern Decorative Accent For Desk, Coffee Table, Shelf, Home And Office",
      "vi": "Silver Metal Geometric Infinity Sculpture, Modern Decorative Accent For Desk, Coffee Table, Shelf, Home And Office",
      "en": "Silver Metal Geometric Infinity Sculpture, Modern Decorative Accent For Desk, Coffee Table, Shelf, Home And Office",
      "zh": "Silver Metal Geometric Infinity Sculpture, Modern Decorative Accent For Desk, Coffee Table, Shelf, Home And Office"
    },
    "category": "art",
    "supplierPriceUSD": 37.99,
    "suggestedRetailUSD": 53.19,
    "supplierPriceVND": 964946,
    "weightKg": 500,
    "rating": 4.9,
    "reviewsCount": 64,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/1fb5ef7d-1537-496d-8f82-25a94a133c43.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT3163399",
    "pid": "2099611556620201985",
    "cjSku": "CJJT3163399",
    "name": {
      "ko": "Beige Abstract Thinker Statue, Modern Reading Sculpture Figurine For Bookshelf, Desk And Coffee Table Decor",
      "vi": "Beige Abstract Thinker Statue, Modern Reading Sculpture Figurine For Bookshelf, Desk And Coffee Table Decor",
      "en": "Beige Abstract Thinker Statue, Modern Reading Sculpture Figurine For Bookshelf, Desk And Coffee Table Decor",
      "zh": "Beige Abstract Thinker Statue, Modern Reading Sculpture Figurine For Bookshelf, Desk And Coffee Table Decor"
    },
    "category": "art",
    "supplierPriceUSD": 40.99,
    "suggestedRetailUSD": 57.39,
    "supplierPriceVND": 1041146,
    "weightKg": 500,
    "rating": 4.9,
    "reviewsCount": 32,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/49c3f50d-3c6b-497d-b978-64ae0e3f28d3.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT3163389",
    "pid": "2099603992041943041",
    "cjSku": "CJJT3163389",
    "name": {
      "ko": "Abstract Person And Dog Head-to-Head Figurine, Sandstone-Style Decorative Sculpture For Home And Office",
      "vi": "Abstract Person And Dog Head-to-Head Figurine, Sandstone-Style Decorative Sculpture For Home And Office",
      "en": "Abstract Person And Dog Head-to-Head Figurine, Sandstone-Style Decorative Sculpture For Home And Office",
      "zh": "Abstract Person And Dog Head-to-Head Figurine, Sandstone-Style Decorative Sculpture For Home And Office"
    },
    "category": "art",
    "supplierPriceUSD": 44.99,
    "suggestedRetailUSD": 62.99,
    "supplierPriceVND": 1142746,
    "weightKg": 500,
    "rating": 4.9,
    "reviewsCount": 76,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/3135114c-436b-4e74-95a3-352a1b1697d7.png",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT3163404",
    "pid": "2099614874153230338",
    "cjSku": "CJJT3163404",
    "name": {
      "ko": "Small Sandstone-Style Kissing Lovers Statue, Abstract Romantic Sculpture",
      "vi": "Small Sandstone-Style Kissing Lovers Statue, Abstract Romantic Sculpture",
      "en": "Small Sandstone-Style Kissing Lovers Statue, Abstract Romantic Sculpture",
      "zh": "Small Sandstone-Style Kissing Lovers Statue, Abstract Romantic Sculpture"
    },
    "category": "art",
    "supplierPriceUSD": 39.99,
    "suggestedRetailUSD": 55.99,
    "supplierPriceVND": 1015746,
    "weightKg": 400,
    "rating": 4.9,
    "reviewsCount": 97,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/493f35b2-89bc-43ba-bcc9-b52fe97d09ae.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT3160281",
    "pid": "2099204489084108802",
    "cjSku": "CJJT3160281",
    "name": {
      "ko": "Gold Heart Hands Love Finger Sculpture, Modern Decorative Statue For Living Room, Bedroom, Bookshelf, Coffee Table And Office",
      "vi": "Gold Heart Hands Love Finger Sculpture, Modern Decorative Statue For Living Room, Bedroom, Bookshelf, Coffee Table And Office",
      "en": "Gold Heart Hands Love Finger Sculpture, Modern Decorative Statue For Living Room, Bedroom, Bookshelf, Coffee Table And Office",
      "zh": "Gold Heart Hands Love Finger Sculpture, Modern Decorative Statue For Living Room, Bedroom, Bookshelf, Coffee Table And Office"
    },
    "category": "art",
    "supplierPriceUSD": 34.99,
    "suggestedRetailUSD": 48.99,
    "supplierPriceVND": 888746,
    "weightKg": 300,
    "rating": 4.9,
    "reviewsCount": 36,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/3e1db2cf-311a-4a55-8f1b-c89e39854c2c.png",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT3160370",
    "pid": "2099271692685803521",
    "cjSku": "CJJT3160370",
    "name": {
      "ko": "Gold Ceramic I Love YoU Rock And Roll Hand Gesture Statue Tiny Decorative Finger Sculpture For Home And Office",
      "vi": "Gold Ceramic I Love YoU Rock And Roll Hand Gesture Statue Tiny Decorative Finger Sculpture For Home And Office",
      "en": "Gold Ceramic I Love YoU Rock And Roll Hand Gesture Statue Tiny Decorative Finger Sculpture For Home And Office",
      "zh": "Gold Ceramic I Love YoU Rock And Roll Hand Gesture Statue Tiny Decorative Finger Sculpture For Home And Office"
    },
    "category": "art",
    "supplierPriceUSD": 32.99,
    "suggestedRetailUSD": 46.19,
    "supplierPriceVND": 837946,
    "weightKg": 250,
    "rating": 4.9,
    "reviewsCount": 46,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/ae1aeed6-1a46-4232-b9a6-3cdede5ca2d1.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT3152584",
    "pid": "2098157940540461058",
    "cjSku": "CJJT3152584",
    "name": {
      "ko": "Sandstone Resin Thinker Statue, Abstract Human Figure Sculpture For Home, Office And Tabletop Decoration",
      "vi": "Sandstone Resin Thinker Statue, Abstract Human Figure Sculpture For Home, Office And Tabletop Decoration",
      "en": "Sandstone Resin Thinker Statue, Abstract Human Figure Sculpture For Home, Office And Tabletop Decoration",
      "zh": "Sandstone Resin Thinker Statue, Abstract Human Figure Sculpture For Home, Office And Tabletop Decoration"
    },
    "category": "art",
    "supplierPriceUSD": 33.99,
    "suggestedRetailUSD": 47.59,
    "supplierPriceVND": 863346,
    "weightKg": 700,
    "rating": 4.9,
    "reviewsCount": 90,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/9a2b6486-6f76-4f03-8a5b-925e3d35e67d.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT3103041",
    "pid": "2093053150177558530",
    "cjSku": "CJJT3103041",
    "name": {
      "ko": "Vintage Black Owl Statue With Evil Eye Accent, Small Animal Sculpture For Bookshelf, Bedroom, Living Room, Office And Table",
      "vi": "Vintage Black Owl Statue With Evil Eye Accent, Small Animal Sculpture For Bookshelf, Bedroom, Living Room, Office And Table",
      "en": "Vintage Black Owl Statue With Evil Eye Accent, Small Animal Sculpture For Bookshelf, Bedroom, Living Room, Office And Table",
      "zh": "Vintage Black Owl Statue With Evil Eye Accent, Small Animal Sculpture For Bookshelf, Bedroom, Living Room, Office And Table"
    },
    "category": "art",
    "supplierPriceUSD": 41.99,
    "suggestedRetailUSD": 58.79,
    "supplierPriceVND": 1066546,
    "weightKg": 320,
    "rating": 4.9,
    "reviewsCount": 74,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/5bf415b9-3550-4f50-b454-0abc9b8ed89e.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT3103043",
    "pid": "2093054053735903233",
    "cjSku": "CJJT3103043",
    "name": {
      "ko": "Small Gold Owl Statue Figurine For Shelf Decor, Elegant Bird Sculpture For Tabletop, Mantel, Bookshelf, Bedroom And Living Room",
      "vi": "Small Gold Owl Statue Figurine For Shelf Decor, Elegant Bird Sculpture For Tabletop, Mantel, Bookshelf, Bedroom And Living Room",
      "en": "Small Gold Owl Statue Figurine For Shelf Decor, Elegant Bird Sculpture For Tabletop, Mantel, Bookshelf, Bedroom And Living Room",
      "zh": "Small Gold Owl Statue Figurine For Shelf Decor, Elegant Bird Sculpture For Tabletop, Mantel, Bookshelf, Bedroom And Living Room"
    },
    "category": "art",
    "supplierPriceUSD": 39.99,
    "suggestedRetailUSD": 55.99,
    "supplierPriceVND": 1015746,
    "weightKg": 250,
    "rating": 4.9,
    "reviewsCount": 61,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/7e22aa61-99c5-493b-891a-c2cb79ae34ec.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT3103056",
    "pid": "2093054939065397249",
    "cjSku": "CJJT3103056",
    "name": {
      "ko": "Owl Statue Figurine For Home Decor, Decorative Bird Sculpture For Tabletop, Shelf, Mantel, Office, Bedroom And Living Room",
      "vi": "Owl Statue Figurine For Home Decor, Decorative Bird Sculpture For Tabletop, Shelf, Mantel, Office, Bedroom And Living Room",
      "en": "Owl Statue Figurine For Home Decor, Decorative Bird Sculpture For Tabletop, Shelf, Mantel, Office, Bedroom And Living Room",
      "zh": "Owl Statue Figurine For Home Decor, Decorative Bird Sculpture For Tabletop, Shelf, Mantel, Office, Bedroom And Living Room"
    },
    "category": "art",
    "supplierPriceUSD": 50.99,
    "suggestedRetailUSD": 71.39,
    "supplierPriceVND": 1295146,
    "weightKg": 300,
    "rating": 4.9,
    "reviewsCount": 66,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/a0c472e9-03d6-4983-8b2d-885a7bd03d97.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT3095369",
    "pid": "2092310819365470209",
    "cjSku": "CJJT3095369",
    "name": {
      "ko": "2 Pcs Geometric Deer Sculpture Set, Gold Decorative Reindeer Ornaments For Fireplace, Dining Table And Living Room Decor",
      "vi": "2 Pcs Geometric Deer Sculpture Set, Gold Decorative Reindeer Ornaments For Fireplace, Dining Table And Living Room Decor",
      "en": "2 Pcs Geometric Deer Sculpture Set, Gold Decorative Reindeer Ornaments For Fireplace, Dining Table And Living Room Decor",
      "zh": "2 Pcs Geometric Deer Sculpture Set, Gold Decorative Reindeer Ornaments For Fireplace, Dining Table And Living Room Decor"
    },
    "category": "art",
    "supplierPriceUSD": 36.99,
    "suggestedRetailUSD": 51.79,
    "supplierPriceVND": 939546,
    "weightKg": 700,
    "rating": 4.9,
    "reviewsCount": 50,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/56f21a31-1b06-4180-a101-b5d9472a4e57.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJSD3213701",
    "pid": "2105592089215348737",
    "cjSku": "CJSD3213701",
    "name": {
      "ko": "Christmas Acrylic Hanging Ornament Burgundy Bell Star Wreath Reindeer Butterfly Tree Bow Crown Holiday Decoration",
      "vi": "Christmas Acrylic Hanging Ornament Burgundy Bell Star Wreath Reindeer Butterfly Tree Bow Crown Holiday Decoration",
      "en": "Christmas Acrylic Hanging Ornament Burgundy Bell Star Wreath Reindeer Butterfly Tree Bow Crown Holiday Decoration",
      "zh": "Christmas Acrylic Hanging Ornament Burgundy Bell Star Wreath Reindeer Butterfly Tree Bow Crown Holiday Decoration"
    },
    "category": "art",
    "supplierPriceUSD": 35,
    "suggestedRetailUSD": 49,
    "supplierPriceVND": 889000,
    "weightKg": 21,
    "rating": 4.9,
    "reviewsCount": 51,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cj-product-center.oss-accelerate.aliyuncs.com/supplier/1688/57c0b59c-d60f-40b4-904d-a6c88d8f28a7.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Christmas Decoration Supplies"
  },
  {
    "id": "CJ-REAL-CJJT3210197",
    "pid": "2105028201407164418",
    "cjSku": "CJJT3210197",
    "name": {
      "ko": "Stained Glass Peacock Crystal Christmas Ornament Round Faceted Hanging Keepsake For Xmas Tree And Elegant Home Decor",
      "vi": "Stained Glass Peacock Crystal Christmas Ornament Round Faceted Hanging Keepsake For Xmas Tree And Elegant Home Decor",
      "en": "Stained Glass Peacock Crystal Christmas Ornament Round Faceted Hanging Keepsake For Xmas Tree And Elegant Home Decor",
      "zh": "Stained Glass Peacock Crystal Christmas Ornament Round Faceted Hanging Keepsake For Xmas Tree And Elegant Home Decor"
    },
    "category": "art",
    "supplierPriceUSD": 38.99,
    "suggestedRetailUSD": 54.59,
    "supplierPriceVND": 990346,
    "weightKg": 100,
    "rating": 4.9,
    "reviewsCount": 85,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/4007f02f-0db8-4a08-812e-61aa7ab3af6d.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJAC3194677",
    "pid": "2103202613915987969",
    "cjSku": "CJAC3194677",
    "name": {
      "ko": "Cute Swinging Ghost Car Mirror Hanging Ornament Halloween Car Interior Accessories Distressed Vintage Ghost",
      "vi": "Cute Swinging Ghost Car Mirror Hanging Ornament Halloween Car Interior Accessories Distressed Vintage Ghost",
      "en": "Cute Swinging Ghost Car Mirror Hanging Ornament Halloween Car Interior Accessories Distressed Vintage Ghost",
      "zh": "Cute Swinging Ghost Car Mirror Hanging Ornament Halloween Car Interior Accessories Distressed Vintage Ghost"
    },
    "category": "art",
    "supplierPriceUSD": 37.99,
    "suggestedRetailUSD": 53.19,
    "supplierPriceVND": 964946,
    "weightKg": 200,
    "rating": 4.9,
    "reviewsCount": 48,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/24d3d483-c1ec-465b-ac32-96d0a99f027f.png",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Car Aromatherapy"
  },
  {
    "id": "CJ-REAL-CJAC3194689",
    "pid": "2103206030805741570",
    "cjSku": "CJAC3194689",
    "name": {
      "ko": "Pig Car Hanging Ornament, Piggy Cute Car Accessories For Women Girl Funny Car Decorations Pig Gifts",
      "vi": "Pig Car Hanging Ornament, Piggy Cute Car Accessories For Women Girl Funny Car Decorations Pig Gifts",
      "en": "Pig Car Hanging Ornament, Piggy Cute Car Accessories For Women Girl Funny Car Decorations Pig Gifts",
      "zh": "Pig Car Hanging Ornament, Piggy Cute Car Accessories For Women Girl Funny Car Decorations Pig Gifts"
    },
    "category": "art",
    "supplierPriceUSD": 37.99,
    "suggestedRetailUSD": 53.19,
    "supplierPriceVND": 964946,
    "weightKg": 200,
    "rating": 4.9,
    "reviewsCount": 29,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/0a58cc2b-f436-4cb4-8dfe-d80bfeae9f28.png",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Car Aromatherapy"
  },
  {
    "id": "CJ-REAL-CJAC3194672",
    "pid": "2103200718535176194",
    "cjSku": "CJAC3194672",
    "name": {
      "ko": "Super Cute Swinging Pig Car Mirror Hanging Ornament Car Interior Accessories Pig",
      "vi": "Super Cute Swinging Pig Car Mirror Hanging Ornament Car Interior Accessories Pig",
      "en": "Super Cute Swinging Pig Car Mirror Hanging Ornament Car Interior Accessories Pig",
      "zh": "Super Cute Swinging Pig Car Mirror Hanging Ornament Car Interior Accessories Pig"
    },
    "category": "art",
    "supplierPriceUSD": 39.99,
    "suggestedRetailUSD": 55.99,
    "supplierPriceVND": 1015746,
    "weightKg": 200,
    "rating": 4.9,
    "reviewsCount": 60,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/d6de99fa-feb0-484d-bd47-dba0b7a6c630.png",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Car Aromatherapy"
  },
  {
    "id": "CJ-REAL-CJJT3194727",
    "pid": "2103222321341313025",
    "cjSku": "CJJT3194727",
    "name": {
      "ko": "Christmas Snowman Hanging Ornament Holiday Tree Decoration For Festive Home Decor",
      "vi": "Christmas Snowman Hanging Ornament Holiday Tree Decoration For Festive Home Decor",
      "en": "Christmas Snowman Hanging Ornament Holiday Tree Decoration For Festive Home Decor",
      "zh": "Christmas Snowman Hanging Ornament Holiday Tree Decoration For Festive Home Decor"
    },
    "category": "art",
    "supplierPriceUSD": 34.99,
    "suggestedRetailUSD": 48.99,
    "supplierPriceVND": 888746,
    "weightKg": 100,
    "rating": 4.9,
    "reviewsCount": 22,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/a8ea3f60-fa4b-4494-9268-06978df01655.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT3191472",
    "pid": "2102848181962313729",
    "cjSku": "CJJT3191472",
    "name": {
      "ko": "Metal Vivid Birds Wall Art Outdoor Decorative Bird Sculpture For Garden Patio Home Decor",
      "vi": "Metal Vivid Birds Wall Art Outdoor Decorative Bird Sculpture For Garden Patio Home Decor",
      "en": "Metal Vivid Birds Wall Art Outdoor Decorative Bird Sculpture For Garden Patio Home Decor",
      "zh": "Metal Vivid Birds Wall Art Outdoor Decorative Bird Sculpture For Garden Patio Home Decor"
    },
    "category": "art",
    "supplierPriceUSD": 43.99,
    "suggestedRetailUSD": 61.59,
    "supplierPriceVND": 1117346,
    "weightKg": 300,
    "rating": 4.9,
    "reviewsCount": 62,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/99f32a5f-f06f-4159-ad0c-2b945734cf65.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJZS3185063",
    "pid": "2102148665051897857",
    "cjSku": "CJZS3185063",
    "name": {
      "ko": "Rabbit Resin Statues 2 Units, Cute Sitting Bunny Figurines For Home Decor, Desk, Shelf, Tabletop And Office",
      "vi": "Rabbit Resin Statues 2 Units, Cute Sitting Bunny Figurines For Home Decor, Desk, Shelf, Tabletop And Office",
      "en": "Rabbit Resin Statues 2 Units, Cute Sitting Bunny Figurines For Home Decor, Desk, Shelf, Tabletop And Office",
      "zh": "Rabbit Resin Statues 2 Units, Cute Sitting Bunny Figurines For Home Decor, Desk, Shelf, Tabletop And Office"
    },
    "category": "art",
    "supplierPriceUSD": 54.99,
    "suggestedRetailUSD": 76.99,
    "supplierPriceVND": 1396746,
    "weightKg": 500,
    "rating": 4.9,
    "reviewsCount": 79,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/8c51c60d-6d2f-4518-bcec-8ca9d0f8418e.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Decorative Flowers & Wreaths"
  },
  {
    "id": "CJ-REAL-CJSD3184999",
    "pid": "2102099483683606530",
    "cjSku": "CJSD3184999",
    "name": {
      "ko": "Christmas Bell Ornament 2026, Silver Angel Sleigh Bell Decoration, Merry Christmas Hanging Bell For Tree & Home",
      "vi": "Christmas Bell Ornament 2026, Silver Angel Sleigh Bell Decoration, Merry Christmas Hanging Bell For Tree & Home",
      "en": "Christmas Bell Ornament 2026, Silver Angel Sleigh Bell Decoration, Merry Christmas Hanging Bell For Tree & Home",
      "zh": "Christmas Bell Ornament 2026, Silver Angel Sleigh Bell Decoration, Merry Christmas Hanging Bell For Tree & Home"
    },
    "category": "art",
    "supplierPriceUSD": 48.99,
    "suggestedRetailUSD": 68.59,
    "supplierPriceVND": 1244346,
    "weightKg": 120,
    "rating": 4.9,
    "reviewsCount": 76,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/09ed2f4b-4132-4fb1-8379-0022ffc908d4.png",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Christmas Decoration Supplies"
  },
  {
    "id": "CJ-REAL-CJSN3173138",
    "pid": "2100477119380078593",
    "cjSku": "CJSN3173138",
    "name": {
      "ko": "2 Pcs Clear K9 Crystal Swan Figurines With Gold Neck, Hand Cut Faceted Sparkling Ornament, Luxury Home Wedding Decor Romantic Gift",
      "vi": "2 Pcs Clear K9 Crystal Swan Figurines With Gold Neck, Hand Cut Faceted Sparkling Ornament, Luxury Home Wedding Decor Romantic Gift",
      "en": "2 Pcs Clear K9 Crystal Swan Figurines With Gold Neck, Hand Cut Faceted Sparkling Ornament, Luxury Home Wedding Decor Romantic Gift",
      "zh": "2 Pcs Clear K9 Crystal Swan Figurines With Gold Neck, Hand Cut Faceted Sparkling Ornament, Luxury Home Wedding Decor Romantic Gift"
    },
    "category": "art",
    "supplierPriceUSD": 25.3,
    "suggestedRetailUSD": 35.42,
    "supplierPriceVND": 642620,
    "weightKg": 2085,
    "rating": 4.9,
    "reviewsCount": 92,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/c93a3969-33b9-4f0b-b7e1-7bd7353234b1.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Downlights"
  },
  {
    "id": "CJ-REAL-CJSN3174083",
    "pid": "2100533442653351937",
    "cjSku": "CJSN3174083",
    "name": {
      "ko": "Golden Yellow K9 Crystal Swan Figurines Set Of 2, Faceted Cut Glass Swan Ornaments, Luxury Amber Gold Decorative Statues For Living Room Wedding Home Decor",
      "vi": "Golden Yellow K9 Crystal Swan Figurines Set Of 2, Faceted Cut Glass Swan Ornaments, Luxury Amber Gold Decorative Statues For Living Room Wedding Home Decor",
      "en": "Golden Yellow K9 Crystal Swan Figurines Set Of 2, Faceted Cut Glass Swan Ornaments, Luxury Amber Gold Decorative Statues For Living Room Wedding Home Decor",
      "zh": "Golden Yellow K9 Crystal Swan Figurines Set Of 2, Faceted Cut Glass Swan Ornaments, Luxury Amber Gold Decorative Statues For Living Room Wedding Home Decor"
    },
    "category": "art",
    "supplierPriceUSD": 33.34,
    "suggestedRetailUSD": 46.68,
    "supplierPriceVND": 846836,
    "weightKg": 2085,
    "rating": 4.9,
    "reviewsCount": 77,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/067b9748-1e75-4dc2-8e03-eb703e2fde7c.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Night Lights"
  },
  {
    "id": "CJ-REAL-CJSN3171558",
    "pid": "2100402146780803074",
    "cjSku": "CJSN3171558",
    "name": {
      "ko": "2 Pcs Black K9 Crystal Swan Figurine Set Elegant Home Wedding Decorative Gift",
      "vi": "2 Pcs Black K9 Crystal Swan Figurine Set Elegant Home Wedding Decorative Gift",
      "en": "2 Pcs Black K9 Crystal Swan Figurine Set Elegant Home Wedding Decorative Gift",
      "zh": "2 Pcs Black K9 Crystal Swan Figurine Set Elegant Home Wedding Decorative Gift"
    },
    "category": "art",
    "supplierPriceUSD": 29.33,
    "suggestedRetailUSD": 41.06,
    "supplierPriceVND": 744982,
    "weightKg": 2085,
    "rating": 4.9,
    "reviewsCount": 40,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/08f93473-4756-4200-b2b7-4476e830416b.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Night Lights"
  },
  {
    "id": "CJ-REAL-CJSD3163422",
    "pid": "2099633858820894722",
    "cjSku": "CJSD3163422",
    "name": {
      "ko": "Christmas Snowman Ornament 2026, Dated Collectible Tree Decoration And Suncatcher Gift For Women And Men",
      "vi": "Christmas Snowman Ornament 2026, Dated Collectible Tree Decoration And Suncatcher Gift For Women And Men",
      "en": "Christmas Snowman Ornament 2026, Dated Collectible Tree Decoration And Suncatcher Gift For Women And Men",
      "zh": "Christmas Snowman Ornament 2026, Dated Collectible Tree Decoration And Suncatcher Gift For Women And Men"
    },
    "category": "art",
    "supplierPriceUSD": 34.99,
    "suggestedRetailUSD": 48.99,
    "supplierPriceVND": 888746,
    "weightKg": 100,
    "rating": 4.9,
    "reviewsCount": 92,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/87008149-ba41-485b-ad01-d7cf638cd69f.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Christmas Decoration Supplies"
  },
  {
    "id": "CJ-REAL-CJSD3163278",
    "pid": "2099536322963677185",
    "cjSku": "CJSD3163278",
    "name": {
      "ko": "Dachshund Dog Christmas Ornament 1 PC, Personalized 2026 Holiday Gift For Dog Lovers Tree Decoration",
      "vi": "Dachshund Dog Christmas Ornament 1 PC, Personalized 2026 Holiday Gift For Dog Lovers Tree Decoration",
      "en": "Dachshund Dog Christmas Ornament 1 PC, Personalized 2026 Holiday Gift For Dog Lovers Tree Decoration",
      "zh": "Dachshund Dog Christmas Ornament 1 PC, Personalized 2026 Holiday Gift For Dog Lovers Tree Decoration"
    },
    "category": "art",
    "supplierPriceUSD": 34.99,
    "suggestedRetailUSD": 48.99,
    "supplierPriceVND": 888746,
    "weightKg": 100,
    "rating": 4.9,
    "reviewsCount": 70,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/e6510cb3-0d9f-43e4-a8fc-8fe97b30720a.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Christmas Decoration Supplies"
  },
  {
    "id": "CJ-REAL-CJJT3210125",
    "pid": "2104999067304128514",
    "cjSku": "CJJT3210125",
    "name": {
      "ko": "Colorful Metal Deer Wall Art 30x23cm Rustic Forest Wildlife Decoration For Cabin Lodge Bedroom Bathroom And Outdoor Decor",
      "vi": "Colorful Metal Deer Wall Art 30x23cm Rustic Forest Wildlife Decoration For Cabin Lodge Bedroom Bathroom And Outdoor Decor",
      "en": "Colorful Metal Deer Wall Art 30x23cm Rustic Forest Wildlife Decoration For Cabin Lodge Bedroom Bathroom And Outdoor Decor",
      "zh": "Colorful Metal Deer Wall Art 30x23cm Rustic Forest Wildlife Decoration For Cabin Lodge Bedroom Bathroom And Outdoor Decor"
    },
    "category": "art",
    "supplierPriceUSD": 43.99,
    "suggestedRetailUSD": 61.59,
    "supplierPriceVND": 1117346,
    "weightKg": 300,
    "rating": 4.9,
    "reviewsCount": 76,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/7d3cfb99-10b9-49ba-88c0-c2d5631c3519.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJDP3210264",
    "pid": "2105049659811610626",
    "cjSku": "CJDP3210264",
    "name": {
      "ko": "Botanical Wall Art Prints 4 PCS, 8x10 Inch Boho Plant Posters For Living Room, Bedroom And Home Decor, Unframed",
      "vi": "Botanical Wall Art Prints 4 PCS, 8x10 Inch Boho Plant Posters For Living Room, Bedroom And Home Decor, Unframed",
      "en": "Botanical Wall Art Prints 4 PCS, 8x10 Inch Boho Plant Posters For Living Room, Bedroom And Home Decor, Unframed",
      "zh": "Botanical Wall Art Prints 4 PCS, 8x10 Inch Boho Plant Posters For Living Room, Bedroom And Home Decor, Unframed"
    },
    "category": "art",
    "supplierPriceUSD": 39.95,
    "suggestedRetailUSD": 55.93,
    "supplierPriceVND": 1014730,
    "weightKg": 200,
    "rating": 4.9,
    "reviewsCount": 49,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/e22183ea-8b9f-41b3-a8ce-4170ccdc62d2.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Decor Paintings"
  },
  {
    "id": "CJ-REAL-CJJT3210191",
    "pid": "2105020585505517570",
    "cjSku": "CJJT3210191",
    "name": {
      "ko": "Stainless Steel Flower And Bird Wreath Metal Wall Art Hanging Decor For Front Door Wall Farmhouse Home Decoration",
      "vi": "Stainless Steel Flower And Bird Wreath Metal Wall Art Hanging Decor For Front Door Wall Farmhouse Home Decoration",
      "en": "Stainless Steel Flower And Bird Wreath Metal Wall Art Hanging Decor For Front Door Wall Farmhouse Home Decoration",
      "zh": "Stainless Steel Flower And Bird Wreath Metal Wall Art Hanging Decor For Front Door Wall Farmhouse Home Decoration"
    },
    "category": "art",
    "supplierPriceUSD": 42.99,
    "suggestedRetailUSD": 60.19,
    "supplierPriceVND": 1091946,
    "weightKg": 400,
    "rating": 4.9,
    "reviewsCount": 67,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/759e240b-8838-4f46-8f00-c61df677b21e.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJSP3206706",
    "pid": "2104639730942480385",
    "cjSku": "CJSP3206706",
    "name": {
      "ko": "Tropical Wall Decor 7 Units, Wooden Palm Leaf And Monstera Jungle Art For Living Room, Bedroom, Entryway And Home Decor",
      "vi": "Tropical Wall Decor 7 Units, Wooden Palm Leaf And Monstera Jungle Art For Living Room, Bedroom, Entryway And Home Decor",
      "en": "Tropical Wall Decor 7 Units, Wooden Palm Leaf And Monstera Jungle Art For Living Room, Bedroom, Entryway And Home Decor",
      "zh": "Tropical Wall Decor 7 Units, Wooden Palm Leaf And Monstera Jungle Art For Living Room, Bedroom, Entryway And Home Decor"
    },
    "category": "art",
    "supplierPriceUSD": 50.99,
    "suggestedRetailUSD": 71.39,
    "supplierPriceVND": 1295146,
    "weightKg": 400,
    "rating": 4.9,
    "reviewsCount": 21,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/e0ddf117-b8f6-4cfe-a0be-850ac24fd18b.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Seasonal products"
  },
  {
    "id": "CJ-REAL-CJSP3206704",
    "pid": "2104639040580956162",
    "cjSku": "CJSP3206704",
    "name": {
      "ko": "Rustic Wooden Wall Decor 3 Units, Thick Vintage Style Hanging Decorations For Living Room, Bedroom, Entryway And Home",
      "vi": "Rustic Wooden Wall Decor 3 Units, Thick Vintage Style Hanging Decorations For Living Room, Bedroom, Entryway And Home",
      "en": "Rustic Wooden Wall Decor 3 Units, Thick Vintage Style Hanging Decorations For Living Room, Bedroom, Entryway And Home",
      "zh": "Rustic Wooden Wall Decor 3 Units, Thick Vintage Style Hanging Decorations For Living Room, Bedroom, Entryway And Home"
    },
    "category": "art",
    "supplierPriceUSD": 33.99,
    "suggestedRetailUSD": 47.59,
    "supplierPriceVND": 863346,
    "weightKg": 600,
    "rating": 4.9,
    "reviewsCount": 36,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/0cccd6c6-5ae9-40db-a51c-f0006290a395.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Seasonal products"
  },
  {
    "id": "CJ-REAL-CJZS3206702",
    "pid": "2104638304916811777",
    "cjSku": "CJZS3206702",
    "name": {
      "ko": "Wooden Tree Of Life Wall Art 12 Inch Round, Tree Wall Decor With 3 Birds For Living Room, Bedroom, Entryway And Home Decor",
      "vi": "Wooden Tree Of Life Wall Art 12 Inch Round, Tree Wall Decor With 3 Birds For Living Room, Bedroom, Entryway And Home Decor",
      "en": "Wooden Tree Of Life Wall Art 12 Inch Round, Tree Wall Decor With 3 Birds For Living Room, Bedroom, Entryway And Home Decor",
      "zh": "Wooden Tree Of Life Wall Art 12 Inch Round, Tree Wall Decor With 3 Birds For Living Room, Bedroom, Entryway And Home Decor"
    },
    "category": "art",
    "supplierPriceUSD": 34.99,
    "suggestedRetailUSD": 48.99,
    "supplierPriceVND": 888746,
    "weightKg": 200,
    "rating": 4.9,
    "reviewsCount": 46,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/65d83ef3-ec51-42d3-b200-113e1b4ba496.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Decorative Flowers & Wreaths"
  },
  {
    "id": "CJ-REAL-CJJT3194726",
    "pid": "2103221256569155585",
    "cjSku": "CJJT3194726",
    "name": {
      "ko": "Butterfly Rainbow Inspirational Wall Decor For Girls Bedroom Nursery Kids Wooden Room Decoration Sign",
      "vi": "Butterfly Rainbow Inspirational Wall Decor For Girls Bedroom Nursery Kids Wooden Room Decoration Sign",
      "en": "Butterfly Rainbow Inspirational Wall Decor For Girls Bedroom Nursery Kids Wooden Room Decoration Sign",
      "zh": "Butterfly Rainbow Inspirational Wall Decor For Girls Bedroom Nursery Kids Wooden Room Decoration Sign"
    },
    "category": "art",
    "supplierPriceUSD": 46.99,
    "suggestedRetailUSD": 65.79,
    "supplierPriceVND": 1193546,
    "weightKg": 300,
    "rating": 4.9,
    "reviewsCount": 74,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/876f3733-9d49-4a7c-9385-09ab440a8ac0.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT3191557",
    "pid": "2102887676959035394",
    "cjSku": "CJJT3191557",
    "name": {
      "ko": "3-Piece Wooden Beach Wall Decor Nautical Ocean Art Self-Adhesive Coastal Decorations",
      "vi": "3-Piece Wooden Beach Wall Decor Nautical Ocean Art Self-Adhesive Coastal Decorations",
      "en": "3-Piece Wooden Beach Wall Decor Nautical Ocean Art Self-Adhesive Coastal Decorations",
      "zh": "3-Piece Wooden Beach Wall Decor Nautical Ocean Art Self-Adhesive Coastal Decorations"
    },
    "category": "art",
    "supplierPriceUSD": 38.99,
    "suggestedRetailUSD": 54.59,
    "supplierPriceVND": 990346,
    "weightKg": 300,
    "rating": 4.9,
    "reviewsCount": 76,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/0e54009a-c056-40d1-9ebe-62ac496b535d.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT3191453",
    "pid": "2102840696762499074",
    "cjSku": "CJJT3191453",
    "name": {
      "ko": "3-Piece Black Metal Flower Wall Art Set Rustic Minimalist Farmhouse Decor For Living Room Bathroom Bedroom Dining Room",
      "vi": "3-Piece Black Metal Flower Wall Art Set Rustic Minimalist Farmhouse Decor For Living Room Bathroom Bedroom Dining Room",
      "en": "3-Piece Black Metal Flower Wall Art Set Rustic Minimalist Farmhouse Decor For Living Room Bathroom Bedroom Dining Room",
      "zh": "3-Piece Black Metal Flower Wall Art Set Rustic Minimalist Farmhouse Decor For Living Room Bathroom Bedroom Dining Room"
    },
    "category": "art",
    "supplierPriceUSD": 44.99,
    "suggestedRetailUSD": 62.99,
    "supplierPriceVND": 1142746,
    "weightKg": 400,
    "rating": 4.9,
    "reviewsCount": 20,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/661cd2c8-a9de-4b8e-9039-4a61f2f85576.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT3191507",
    "pid": "2102860535600439297",
    "cjSku": "CJJT3191507",
    "name": {
      "ko": "Modern Black Metal Horse Wall Art Iron Horse Room Decor For Living Room Bedroom Office Home Decoration",
      "vi": "Modern Black Metal Horse Wall Art Iron Horse Room Decor For Living Room Bedroom Office Home Decoration",
      "en": "Modern Black Metal Horse Wall Art Iron Horse Room Decor For Living Room Bedroom Office Home Decoration",
      "zh": "Modern Black Metal Horse Wall Art Iron Horse Room Decor For Living Room Bedroom Office Home Decoration"
    },
    "category": "art",
    "supplierPriceUSD": 44.99,
    "suggestedRetailUSD": 62.99,
    "supplierPriceVND": 1142746,
    "weightKg": 400,
    "rating": 4.9,
    "reviewsCount": 67,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/8d5a3ad0-156c-42e0-ab6b-092b15e57025.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT3188216",
    "pid": "2102465517567520770",
    "cjSku": "CJJT3188216",
    "name": {
      "ko": "Black Metal Live Tree Wall Art Farmhouse Wall Decor For Living Room Garden Office Bathroom Home Decoration 12 Inch",
      "vi": "Black Metal Live Tree Wall Art Farmhouse Wall Decor For Living Room Garden Office Bathroom Home Decoration 12 Inch",
      "en": "Black Metal Live Tree Wall Art Farmhouse Wall Decor For Living Room Garden Office Bathroom Home Decoration 12 Inch",
      "zh": "Black Metal Live Tree Wall Art Farmhouse Wall Decor For Living Room Garden Office Bathroom Home Decoration 12 Inch"
    },
    "category": "art",
    "supplierPriceUSD": 44.99,
    "suggestedRetailUSD": 62.99,
    "supplierPriceVND": 1142746,
    "weightKg": 500,
    "rating": 4.9,
    "reviewsCount": 71,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/f7ff50f0-2698-4f17-8e1c-ce2b7c0de683.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT3188175",
    "pid": "2102446147034329089",
    "cjSku": "CJJT3188175",
    "name": {
      "ko": "2Pcs Wall Art Fake Hanging Plants For Bathroom Living Room Home Decor",
      "vi": "2Pcs Wall Art Fake Hanging Plants For Bathroom Living Room Home Decor",
      "en": "2Pcs Wall Art Fake Hanging Plants For Bathroom Living Room Home Decor",
      "zh": "2Pcs Wall Art Fake Hanging Plants For Bathroom Living Room Home Decor"
    },
    "category": "art",
    "supplierPriceUSD": 57.99,
    "suggestedRetailUSD": 81.19,
    "supplierPriceVND": 1472946,
    "weightKg": 300,
    "rating": 4.9,
    "reviewsCount": 92,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/b8e07697-4be7-43df-8aa3-af5b15953abb.png",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT3188192",
    "pid": "2102458152529080322",
    "cjSku": "CJJT3188192",
    "name": {
      "ko": "Moving Sand Art Picture Round Glass 3D Deep Sea Landscape Dynamic Sandscape Desktop Table Decor 7 Inch",
      "vi": "Moving Sand Art Picture Round Glass 3D Deep Sea Landscape Dynamic Sandscape Desktop Table Decor 7 Inch",
      "en": "Moving Sand Art Picture Round Glass 3D Deep Sea Landscape Dynamic Sandscape Desktop Table Decor 7 Inch",
      "zh": "Moving Sand Art Picture Round Glass 3D Deep Sea Landscape Dynamic Sandscape Desktop Table Decor 7 Inch"
    },
    "category": "art",
    "supplierPriceUSD": 44.99,
    "suggestedRetailUSD": 62.99,
    "supplierPriceVND": 1142746,
    "weightKg": 1000,
    "rating": 4.9,
    "reviewsCount": 56,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/c41a97e3-0ce6-427e-b846-e1d602cf59bd.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT3188201",
    "pid": "2102460518418526210",
    "cjSku": "CJJT3188201",
    "name": {
      "ko": "Infinity Heart Metal Wall Decor Love Sign Plaque Geometric Steel Art Cutout For Bedroom Home Wedding Decoration",
      "vi": "Infinity Heart Metal Wall Decor Love Sign Plaque Geometric Steel Art Cutout For Bedroom Home Wedding Decoration",
      "en": "Infinity Heart Metal Wall Decor Love Sign Plaque Geometric Steel Art Cutout For Bedroom Home Wedding Decoration",
      "zh": "Infinity Heart Metal Wall Decor Love Sign Plaque Geometric Steel Art Cutout For Bedroom Home Wedding Decoration"
    },
    "category": "art",
    "supplierPriceUSD": 43.99,
    "suggestedRetailUSD": 61.59,
    "supplierPriceVND": 1117346,
    "weightKg": 300,
    "rating": 4.9,
    "reviewsCount": 29,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/85332ac0-6999-4eeb-a202-cca66d1b1d5f.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT3188299",
    "pid": "2102517374390284289",
    "cjSku": "CJJT3188299",
    "name": {
      "ko": "11-Piece Coastal Wall Art Set Wooden Ocean Decor Nautical Wall Sculptures For Living Room Bedroom Bathroom",
      "vi": "11-Piece Coastal Wall Art Set Wooden Ocean Decor Nautical Wall Sculptures For Living Room Bedroom Bathroom",
      "en": "11-Piece Coastal Wall Art Set Wooden Ocean Decor Nautical Wall Sculptures For Living Room Bedroom Bathroom",
      "zh": "11-Piece Coastal Wall Art Set Wooden Ocean Decor Nautical Wall Sculptures For Living Room Bedroom Bathroom"
    },
    "category": "art",
    "supplierPriceUSD": 41.99,
    "suggestedRetailUSD": 58.79,
    "supplierPriceVND": 1066546,
    "weightKg": 500,
    "rating": 4.9,
    "reviewsCount": 65,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/66d78e55-e178-4ac9-a5e8-0f108c2265bd.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT3188196",
    "pid": "2102459388554661890",
    "cjSku": "CJJT3188196",
    "name": {
      "ko": "3-Piece Poplar Wood Abstract Boho Wall Decor Set Hollow Mid Century Art For Bedroom Living Room Office",
      "vi": "3-Piece Poplar Wood Abstract Boho Wall Decor Set Hollow Mid Century Art For Bedroom Living Room Office",
      "en": "3-Piece Poplar Wood Abstract Boho Wall Decor Set Hollow Mid Century Art For Bedroom Living Room Office",
      "zh": "3-Piece Poplar Wood Abstract Boho Wall Decor Set Hollow Mid Century Art For Bedroom Living Room Office"
    },
    "category": "art",
    "supplierPriceUSD": 47.99,
    "suggestedRetailUSD": 67.19,
    "supplierPriceVND": 1218946,
    "weightKg": 500,
    "rating": 4.9,
    "reviewsCount": 56,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/eff44768-43d4-4ef6-be78-f526ad21f844.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT3188288",
    "pid": "2102509777029345281",
    "cjSku": "CJJT3188288",
    "name": {
      "ko": "Black Metal Dragonfly Wall Art Farmhouse Wall Decor For Living Room Garden Office Bathroom Home Decoration 12 Inch",
      "vi": "Black Metal Dragonfly Wall Art Farmhouse Wall Decor For Living Room Garden Office Bathroom Home Decoration 12 Inch",
      "en": "Black Metal Dragonfly Wall Art Farmhouse Wall Decor For Living Room Garden Office Bathroom Home Decoration 12 Inch",
      "zh": "Black Metal Dragonfly Wall Art Farmhouse Wall Decor For Living Room Garden Office Bathroom Home Decoration 12 Inch"
    },
    "category": "art",
    "supplierPriceUSD": 44.99,
    "suggestedRetailUSD": 62.99,
    "supplierPriceVND": 1142746,
    "weightKg": 500,
    "rating": 4.9,
    "reviewsCount": 98,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/8ec97174-d4de-4016-ba2d-ceeca6115595.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJSD3217053",
    "pid": "2106090079598473218",
    "cjSku": "CJSD3217053",
    "name": {
      "ko": "Bronze Metal Christmas Tree Collar, Diamond Pattern, 20.8 27.5",
      "vi": "Bronze Metal Christmas Tree Collar, Diamond Pattern, 20.8 27.5",
      "en": "Bronze Metal Christmas Tree Collar, Diamond Pattern, 20.8 27.5",
      "zh": "Bronze Metal Christmas Tree Collar, Diamond Pattern, 20.8 27.5"
    },
    "category": "art",
    "supplierPriceUSD": 63.99,
    "suggestedRetailUSD": 89.59,
    "supplierPriceVND": 1625346,
    "weightKg": 1500,
    "rating": 4.9,
    "reviewsCount": 73,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/fa887f6e-c437-4add-85e4-254440156e69.png",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Christmas Decoration Supplies"
  },
  {
    "id": "CJ-REAL-CJSD3217057",
    "pid": "2106091241682612225",
    "cjSku": "CJSD3217057",
    "name": {
      "ko": "Bronze Metal Christmas Tree Collar, Embossed Dots Pattern, 20.8 27.5",
      "vi": "Bronze Metal Christmas Tree Collar, Embossed Dots Pattern, 20.8 27.5",
      "en": "Bronze Metal Christmas Tree Collar, Embossed Dots Pattern, 20.8 27.5",
      "zh": "Bronze Metal Christmas Tree Collar, Embossed Dots Pattern, 20.8 27.5"
    },
    "category": "art",
    "supplierPriceUSD": 72.99,
    "suggestedRetailUSD": 102.19,
    "supplierPriceVND": 1853946,
    "weightKg": 1500,
    "rating": 4.9,
    "reviewsCount": 61,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/1e5844c5-1761-4a07-8e00-7b04cf8cf299.png",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Christmas Decoration Supplies"
  },
  {
    "id": "CJ-REAL-CJMS3156347",
    "pid": "2098359863851065345",
    "cjSku": "CJMS3156347",
    "name": {
      "ko": "Bronze Crystal Shawl Lapel Tuxedo Suit",
      "vi": "Bronze Crystal Shawl Lapel Tuxedo Suit",
      "en": "Bronze Crystal Shawl Lapel Tuxedo Suit",
      "zh": "Bronze Crystal Shawl Lapel Tuxedo Suit"
    },
    "category": "art",
    "supplierPriceUSD": 49.75,
    "suggestedRetailUSD": 69.65,
    "supplierPriceVND": 1263650,
    "weightKg": 700,
    "rating": 4.9,
    "reviewsCount": 65,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/c987e6ff-3ee3-49aa-96d9-401770a9227b.png",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Men's Suits"
  },
  {
    "id": "CJ-REAL-CJFU3140047",
    "pid": "2097025164449701889",
    "cjSku": "CJFU3140047",
    "name": {
      "ko": "50*50*86cm Ancient Bronze Resin Bird Bath With Lotus Edge & Feeder Tray",
      "vi": "50*50*86cm Ancient Bronze Resin Bird Bath With Lotus Edge & Feeder Tray",
      "en": "50*50*86cm Ancient Bronze Resin Bird Bath With Lotus Edge & Feeder Tray",
      "zh": "50*50*86cm Ancient Bronze Resin Bird Bath With Lotus Edge & Feeder Tray"
    },
    "category": "art",
    "supplierPriceUSD": 29.26,
    "suggestedRetailUSD": 40.96,
    "supplierPriceVND": 743204,
    "weightKg": 2604,
    "rating": 4.9,
    "reviewsCount": 85,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/doba-import/425cdc9332274272997d6469fc14c0f0.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Furniture"
  },
  {
    "id": "CJ-REAL-CJLE3014392",
    "pid": "2082018809443373058",
    "cjSku": "CJLE3014392",
    "name": {
      "ko": "Oil Rubbed Bronze Porch Light Dusk to Dawn Outdoor Wall Lantern Small Modern Exterior Light Fixture Aluminum with Crack-Like Glass IP65 Waterproof Outdoor Sconce Outside Light for House, Front Door",
      "vi": "Oil Rubbed Bronze Porch Light Dusk to Dawn Outdoor Wall Lantern Small Modern Exterior Light Fixture Aluminum with Crack-Like Glass IP65 Waterproof Outdoor Sconce Outside Light for House, Front Door",
      "en": "Oil Rubbed Bronze Porch Light Dusk to Dawn Outdoor Wall Lantern Small Modern Exterior Light Fixture Aluminum with Crack-Like Glass IP65 Waterproof Outdoor Sconce Outside Light for House, Front Door",
      "zh": "Oil Rubbed Bronze Porch Light Dusk to Dawn Outdoor Wall Lantern Small Modern Exterior Light Fixture Aluminum with Crack-Like Glass IP65 Waterproof Outdoor Sconce Outside Light for House, Front Door"
    },
    "category": "art",
    "supplierPriceUSD": 66.04,
    "suggestedRetailUSD": 92.46,
    "supplierPriceVND": 1677416,
    "weightKg": 2676,
    "rating": 4.9,
    "reviewsCount": 56,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/giga-import/85f599de6c904313ba6f76b7d614ed53.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "LED Spotlights"
  },
  {
    "id": "CJ-REAL-CJST2357744",
    "pid": "1913505186330476546",
    "cjSku": "CJST2357744",
    "name": {
      "ko": "BRONZE TANNING LOTION",
      "vi": "BRONZE TANNING LOTION",
      "en": "BRONZE TANNING LOTION",
      "zh": "BRONZE TANNING LOTION"
    },
    "category": "art",
    "supplierPriceUSD": 63,
    "suggestedRetailUSD": 88.2,
    "supplierPriceVND": 1600200,
    "weightKg": 406,
    "rating": 4.9,
    "reviewsCount": 86,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/1e8be68b-a8ee-4470-a35b-11c3a85977f6.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Body Care"
  },
  {
    "id": "CJ-REAL-CJYS2277916",
    "pid": "1882269192099557378",
    "cjSku": "CJYS2277916",
    "name": {
      "ko": "2 Handles 4-inch Oil Wiped Bronze Bathroom Faucet, Banned From Amazon Platform, Unable To Ship On Weekends",
      "vi": "2 Handles 4-inch Oil Wiped Bronze Bathroom Faucet, Banned From Amazon Platform, Unable To Ship On Weekends",
      "en": "2 Handles 4-inch Oil Wiped Bronze Bathroom Faucet, Banned From Amazon Platform, Unable To Ship On Weekends",
      "zh": "2 Handles 4-inch Oil Wiped Bronze Bathroom Faucet, Banned From Amazon Platform, Unable To Ship On Weekends"
    },
    "category": "art",
    "supplierPriceUSD": 41.14,
    "suggestedRetailUSD": 57.6,
    "supplierPriceVND": 1044956,
    "weightKg": 1500,
    "rating": 4.9,
    "reviewsCount": 22,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/17375904/1882298698722185216.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Bathroom Storage"
  },
  {
    "id": "CJ-REAL-CJSP3217068",
    "pid": "2106097326778855426",
    "cjSku": "CJSP3217068",
    "name": {
      "ko": "Ceramic Drink Coasters 6 PCS With Holder, 4 Inch White Marble Style Absorbent Coasters For Coffee Table, Cups And Home Decor",
      "vi": "Ceramic Drink Coasters 6 PCS With Holder, 4 Inch White Marble Style Absorbent Coasters For Coffee Table, Cups And Home Decor",
      "en": "Ceramic Drink Coasters 6 PCS With Holder, 4 Inch White Marble Style Absorbent Coasters For Coffee Table, Cups And Home Decor",
      "zh": "Ceramic Drink Coasters 6 PCS With Holder, 4 Inch White Marble Style Absorbent Coasters For Coffee Table, Cups And Home Decor"
    },
    "category": "art",
    "supplierPriceUSD": 34.99,
    "suggestedRetailUSD": 48.99,
    "supplierPriceVND": 888746,
    "weightKg": 800,
    "rating": 4.9,
    "reviewsCount": 53,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/3862c291-33fe-4a36-93f6-7e8312c0b23c.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Seasonal products"
  },
  {
    "id": "CJ-REAL-CJCC3136874",
    "pid": "2096954902744162306",
    "cjSku": "CJCC3136874",
    "name": {
      "ko": "Modern Marble ConsoleTablewith Power Outlet, Slim Sofa SideTableFeaturing Iron Tubes, Anti-TipDesign, and Triangular Support for Living Room, Hallway, Entryway, or Foyer",
      "vi": "Modern Marble ConsoleTablewith Power Outlet, Slim Sofa SideTableFeaturing Iron Tubes, Anti-TipDesign, and Triangular Support for Living Room, Hallway, Entryway, or Foyer",
      "en": "Modern Marble ConsoleTablewith Power Outlet, Slim Sofa SideTableFeaturing Iron Tubes, Anti-TipDesign, and Triangular Support for Living Room, Hallway, Entryway, or Foyer",
      "zh": "Modern Marble ConsoleTablewith Power Outlet, Slim Sofa SideTableFeaturing Iron Tubes, Anti-TipDesign, and Triangular Support for Living Room, Hallway, Entryway, or Foyer"
    },
    "category": "art",
    "supplierPriceUSD": 57.96,
    "suggestedRetailUSD": 81.14,
    "supplierPriceVND": 1472184,
    "weightKg": 7003,
    "rating": 4.9,
    "reviewsCount": 44,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/doba-import/f54ce2f0a3d84059b96b3c5ab376c966.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Storage Bottles & Jars"
  },
  {
    "id": "CJ-REAL-CJFU3138270",
    "pid": "2096995762076672001",
    "cjSku": "CJFU3138270",
    "name": {
      "ko": "Marble Drink Table, Black Marble",
      "vi": "Marble Drink Table, Black Marble",
      "en": "Marble Drink Table, Black Marble",
      "zh": "Marble Drink Table, Black Marble"
    },
    "category": "art",
    "supplierPriceUSD": 62.66,
    "suggestedRetailUSD": 87.72,
    "supplierPriceVND": 1591564,
    "weightKg": 5003,
    "rating": 4.9,
    "reviewsCount": 91,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/doba-import/e6b4eb3c24334417a12143708b131898.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Furniture"
  },
  {
    "id": "CJ-REAL-CJDP2936884",
    "pid": "2066814605652283393",
    "cjSku": "CJDP2936884",
    "name": {
      "ko": "2-in-1 Wooden Kids Art Easel With Marble Run, Magnetic Whiteboard Standing Easel With Storage Shelves & Accessories For Kids 3-",
      "vi": "2-in-1 Wooden Kids Art Easel With Marble Run, Magnetic Whiteboard Standing Easel With Storage Shelves & Accessories For Kids 3-",
      "en": "2-in-1 Wooden Kids Art Easel With Marble Run, Magnetic Whiteboard Standing Easel With Storage Shelves & Accessories For Kids 3-",
      "zh": "2-in-1 Wooden Kids Art Easel With Marble Run, Magnetic Whiteboard Standing Easel With Storage Shelves & Accessories For Kids 3-"
    },
    "category": "art",
    "supplierPriceUSD": 76.12,
    "suggestedRetailUSD": 106.57,
    "supplierPriceVND": 1933448,
    "weightKg": 10200,
    "rating": 4.9,
    "reviewsCount": 49,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/0f04af99-44e9-4544-bf9d-2c94019cace6.png",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Decor Paintings"
  },
  {
    "id": "CJ-REAL-CJFU2925509",
    "pid": "2063871071318859777",
    "cjSku": "CJFU2925509",
    "name": {
      "ko": "Marble Coffee Table With Sculptural Stainless Steel Base",
      "vi": "Marble Coffee Table With Sculptural Stainless Steel Base",
      "en": "Marble Coffee Table With Sculptural Stainless Steel Base",
      "zh": "Marble Coffee Table With Sculptural Stainless Steel Base"
    },
    "category": "art",
    "supplierPriceUSD": 367.66,
    "suggestedRetailUSD": 514.72,
    "supplierPriceVND": 9338564,
    "weightKg": 10932,
    "rating": 4.9,
    "reviewsCount": 82,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/17808768/8be7bb87-e2e9-4102-b0f5-5771961e88c6.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Furniture"
  },
  {
    "id": "CJ-REAL-CJFU2919078",
    "pid": "2062008255949012993",
    "cjSku": "CJFU2919078",
    "name": {
      "ko": "Fiorella Black Marble Print, Glass & Champagne Finish Coffee Table",
      "vi": "Fiorella Black Marble Print, Glass & Champagne Finish Coffee Table",
      "en": "Fiorella Black Marble Print, Glass & Champagne Finish Coffee Table",
      "zh": "Fiorella Black Marble Print, Glass & Champagne Finish Coffee Table"
    },
    "category": "art",
    "supplierPriceUSD": 238.14,
    "suggestedRetailUSD": 333.4,
    "supplierPriceVND": 6048756,
    "weightKg": 24947,
    "rating": 4.9,
    "reviewsCount": 97,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/17804448/1756ce76-9c89-41d7-8a5d-567467800fd7.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Furniture"
  },
  {
    "id": "CJ-REAL-CJFU2919087",
    "pid": "2062009058147262466",
    "cjSku": "CJFU2919087",
    "name": {
      "ko": "Talmar Marble Top Weathered Gray Finish Writing Desk With Lift Top",
      "vi": "Talmar Marble Top Weathered Gray Finish Writing Desk With Lift Top",
      "en": "Talmar Marble Top Weathered Gray Finish Writing Desk With Lift Top",
      "zh": "Talmar Marble Top Weathered Gray Finish Writing Desk With Lift Top"
    },
    "category": "art",
    "supplierPriceUSD": 663.89,
    "suggestedRetailUSD": 929.45,
    "supplierPriceVND": 16862806,
    "weightKg": 43998,
    "rating": 4.9,
    "reviewsCount": 81,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/17804448/d0a0d15e-499e-436e-ac88-1262c07e8785.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Furniture"
  },
  {
    "id": "CJ-REAL-CJFU2872927",
    "pid": "2052288552058740737",
    "cjSku": "CJFU2872927",
    "name": {
      "ko": "Simple Grey Marble Textured Cylindrical Coffee Table, 12-inch Diameter X 19.7 Inch Height, MDF Material Living Room Furniture. Suitable For Industrial Style Living Rooms.",
      "vi": "Simple Grey Marble Textured Cylindrical Coffee Table, 12-inch Diameter X 19.7 Inch Height, MDF Material Living Room Furniture. Suitable For Industrial Style Living Rooms.",
      "en": "Simple Grey Marble Textured Cylindrical Coffee Table, 12-inch Diameter X 19.7 Inch Height, MDF Material Living Room Furniture. Suitable For Industrial Style Living Rooms.",
      "zh": "Simple Grey Marble Textured Cylindrical Coffee Table, 12-inch Diameter X 19.7 Inch Height, MDF Material Living Room Furniture. Suitable For Industrial Style Living Rooms."
    },
    "category": "art",
    "supplierPriceUSD": 88.12,
    "suggestedRetailUSD": 123.37,
    "supplierPriceVND": 2238248,
    "weightKg": 7031,
    "rating": 4.9,
    "reviewsCount": 38,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/17781120/eb944a50-b694-4894-9d0f-f756945dbf32.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Furniture"
  },
  {
    "id": "CJ-REAL-CJFU2869965",
    "pid": "2051579056040337409",
    "cjSku": "CJFU2869965",
    "name": {
      "ko": "Marble-Look Sintered Stone Square Table - Heavy-Duty Cast Iron Base For Bistro, Cafe, Bar & Home Use",
      "vi": "Marble-Look Sintered Stone Square Table - Heavy-Duty Cast Iron Base For Bistro, Cafe, Bar & Home Use",
      "en": "Marble-Look Sintered Stone Square Table - Heavy-Duty Cast Iron Base For Bistro, Cafe, Bar & Home Use",
      "zh": "Marble-Look Sintered Stone Square Table - Heavy-Duty Cast Iron Base For Bistro, Cafe, Bar & Home Use"
    },
    "category": "art",
    "supplierPriceUSD": 231.69,
    "suggestedRetailUSD": 324.37,
    "supplierPriceVND": 5884926,
    "weightKg": 17200,
    "rating": 4.9,
    "reviewsCount": 41,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/17779392/3ae8d627-321c-4ce3-bbb0-8c224fe88cb2.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Furniture"
  },
  {
    "id": "CJ-REAL-CJFU2858979",
    "pid": "2049316228330151938",
    "cjSku": "CJFU2858979",
    "name": {
      "ko": "13x13x26  Marble Table Lamp",
      "vi": "13x13x26  Marble Table Lamp",
      "en": "13x13x26  Marble Table Lamp",
      "zh": "13x13x26  Marble Table Lamp"
    },
    "category": "art",
    "supplierPriceUSD": 112.77,
    "suggestedRetailUSD": 157.88,
    "supplierPriceVND": 2864358,
    "weightKg": 5171,
    "rating": 4.9,
    "reviewsCount": 78,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/17774208/568133e7-46c4-4f7f-8656-30a1fbd7bcfd.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Furniture"
  },
  {
    "id": "CJ-REAL-CJSN2842102",
    "pid": "2045431430823698434",
    "cjSku": "CJSN2842102",
    "name": {
      "ko": "Portable Battery-Powered Spanish Marble Lamp",
      "vi": "Portable Battery-Powered Spanish Marble Lamp",
      "en": "Portable Battery-Powered Spanish Marble Lamp",
      "zh": "Portable Battery-Powered Spanish Marble Lamp"
    },
    "category": "art",
    "supplierPriceUSD": 99.99,
    "suggestedRetailUSD": 139.99,
    "supplierPriceVND": 2539746,
    "weightKg": 1400,
    "rating": 4.9,
    "reviewsCount": 62,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/f7684d6d-9d3e-4723-b87d-fa4f690ab944.jpeg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Night Lights"
  },
  {
    "id": "CJ-REAL-CJFU2841097",
    "pid": "2045351225964466178",
    "cjSku": "CJFU2841097",
    "name": {
      "ko": "Resin Imitation Marble And Chrome Wall Sconce, Set Of 2,Modern Vertical Light Fixture For Bathrooms, Hallways, And Bedrooms Only Indoor",
      "vi": "Resin Imitation Marble And Chrome Wall Sconce, Set Of 2,Modern Vertical Light Fixture For Bathrooms, Hallways, And Bedrooms Only Indoor",
      "en": "Resin Imitation Marble And Chrome Wall Sconce, Set Of 2,Modern Vertical Light Fixture For Bathrooms, Hallways, And Bedrooms Only Indoor",
      "zh": "Resin Imitation Marble And Chrome Wall Sconce, Set Of 2,Modern Vertical Light Fixture For Bathrooms, Hallways, And Bedrooms Only Indoor"
    },
    "category": "art",
    "supplierPriceUSD": 75.16,
    "suggestedRetailUSD": 105.22,
    "supplierPriceVND": 1909064,
    "weightKg": 2132,
    "rating": 4.9,
    "reviewsCount": 74,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/17764704/38e4775b-eb75-4b6b-b6ee-e1984324297f.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Furniture"
  },
  {
    "id": "CJ-REAL-CJSN2827319",
    "pid": "2042551418282213378",
    "cjSku": "CJSN2827319",
    "name": {
      "ko": "Spanish Natural Marble Lamp",
      "vi": "Spanish Natural Marble Lamp",
      "en": "Spanish Natural Marble Lamp",
      "zh": "Spanish Natural Marble Lamp"
    },
    "category": "art",
    "supplierPriceUSD": 99.99,
    "suggestedRetailUSD": 139.99,
    "supplierPriceVND": 2539746,
    "weightKg": 680,
    "rating": 4.9,
    "reviewsCount": 30,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/07f2b638-fcfc-421c-9c65-c046a2e88655.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Night Lights"
  },
  {
    "id": "CJ-REAL-CJSN2825473",
    "pid": "2042164525933690881",
    "cjSku": "CJSN2825473",
    "name": {
      "ko": "Time Capsule Marble Table Lamp",
      "vi": "Time Capsule Marble Table Lamp",
      "en": "Time Capsule Marble Table Lamp",
      "zh": "Time Capsule Marble Table Lamp"
    },
    "category": "art",
    "supplierPriceUSD": 99.99,
    "suggestedRetailUSD": 139.99,
    "supplierPriceVND": 2539746,
    "weightKg": 890,
    "rating": 4.9,
    "reviewsCount": 27,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/e2996aa4-7406-49a6-af50-c9e45d90a5e3.jpeg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Night Lights"
  },
  {
    "id": "CJ-REAL-CJFU2818571",
    "pid": "2040004657039560705",
    "cjSku": "CJFU2818571",
    "name": {
      "ko": "37 Inch Marble Vanity Top  White Vanity Top With 3 Pre-drilled Faucet Holes  Bathroom Vanity Top With Undermount Rectangular Middle Sink And 4 Height Backsplash   Bianco Carrara Venato",
      "vi": "37 Inch Marble Vanity Top  White Vanity Top With 3 Pre-drilled Faucet Holes  Bathroom Vanity Top With Undermount Rectangular Middle Sink And 4 Height Backsplash   Bianco Carrara Venato",
      "en": "37 Inch Marble Vanity Top  White Vanity Top With 3 Pre-drilled Faucet Holes  Bathroom Vanity Top With Undermount Rectangular Middle Sink And 4 Height Backsplash   Bianco Carrara Venato",
      "zh": "37 Inch Marble Vanity Top  White Vanity Top With 3 Pre-drilled Faucet Holes  Bathroom Vanity Top With Undermount Rectangular Middle Sink And 4 Height Backsplash   Bianco Carrara Venato"
    },
    "category": "art",
    "supplierPriceUSD": 206.18,
    "suggestedRetailUSD": 288.65,
    "supplierPriceVND": 5236972,
    "weightKg": 34999,
    "rating": 4.9,
    "reviewsCount": 99,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/17751744/8793d9f6-1e10-4d03-bc1c-4f7dc4f0c22d.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Furniture"
  },
  {
    "id": "CJ-REAL-CJFU2818614",
    "pid": "2040007710225854466",
    "cjSku": "CJFU2818614",
    "name": {
      "ko": "43 Inch Marble Vanity Top  White Vanity Top With 1 Pre-drilled Faucet Holes  Bathroom Vanity Top With Undermount Rectangular Middle Sink And 4 Height Backsplash   Bianco Carrara Venato",
      "vi": "43 Inch Marble Vanity Top  White Vanity Top With 1 Pre-drilled Faucet Holes  Bathroom Vanity Top With Undermount Rectangular Middle Sink And 4 Height Backsplash   Bianco Carrara Venato",
      "en": "43 Inch Marble Vanity Top  White Vanity Top With 1 Pre-drilled Faucet Holes  Bathroom Vanity Top With Undermount Rectangular Middle Sink And 4 Height Backsplash   Bianco Carrara Venato",
      "zh": "43 Inch Marble Vanity Top  White Vanity Top With 1 Pre-drilled Faucet Holes  Bathroom Vanity Top With Undermount Rectangular Middle Sink And 4 Height Backsplash   Bianco Carrara Venato"
    },
    "category": "art",
    "supplierPriceUSD": 246.37,
    "suggestedRetailUSD": 344.92,
    "supplierPriceVND": 6257798,
    "weightKg": 38573,
    "rating": 4.9,
    "reviewsCount": 22,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/17751744/f3200317-e742-42b4-9989-6ca166383edc.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Furniture"
  },
  {
    "id": "CJ-REAL-CJSN2815947",
    "pid": "2039565175022702593",
    "cjSku": "CJSN2815947",
    "name": {
      "ko": "Portable Battery-Powered Spanish Marble Lamp",
      "vi": "Portable Battery-Powered Spanish Marble Lamp",
      "en": "Portable Battery-Powered Spanish Marble Lamp",
      "zh": "Portable Battery-Powered Spanish Marble Lamp"
    },
    "category": "art",
    "supplierPriceUSD": 29.99,
    "suggestedRetailUSD": 41.99,
    "supplierPriceVND": 761746,
    "weightKg": 420,
    "rating": 4.9,
    "reviewsCount": 20,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/278ceff3-de6c-49b7-810f-14f92bbf85eb.jpeg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Night Lights"
  },
  {
    "id": "CJ-REAL-CJSN2815926",
    "pid": "2039563724243726337",
    "cjSku": "CJSN2815926",
    "name": {
      "ko": "Portable Battery-Powered Spanish Marble Lamp",
      "vi": "Portable Battery-Powered Spanish Marble Lamp",
      "en": "Portable Battery-Powered Spanish Marble Lamp",
      "zh": "Portable Battery-Powered Spanish Marble Lamp"
    },
    "category": "art",
    "supplierPriceUSD": 39.99,
    "suggestedRetailUSD": 55.99,
    "supplierPriceVND": 1015746,
    "weightKg": 629,
    "rating": 4.9,
    "reviewsCount": 91,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/2f787a88-8bce-46bd-8532-7db879c5f057.jpeg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Night Lights"
  },
  {
    "id": "CJ-REAL-CJSN2815994",
    "pid": "2039574517132607490",
    "cjSku": "CJSN2815994",
    "name": {
      "ko": "The Natural Marble Table Lamp",
      "vi": "The Natural Marble Table Lamp",
      "en": "The Natural Marble Table Lamp",
      "zh": "The Natural Marble Table Lamp"
    },
    "category": "art",
    "supplierPriceUSD": 89.99,
    "suggestedRetailUSD": 125.99,
    "supplierPriceVND": 2285746,
    "weightKg": 869,
    "rating": 4.9,
    "reviewsCount": 57,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/c292b87d-6148-4921-9ab0-ccd4f4218e11.jpeg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Night Lights"
  },
  {
    "id": "CJ-REAL-CJSN2815631",
    "pid": "2039549052243955713",
    "cjSku": "CJSN2815631",
    "name": {
      "ko": "The Waterbird Moon - Luxury Spanish Alabaster & Aluminum Lamp",
      "vi": "The Waterbird Moon - Luxury Spanish Alabaster & Aluminum Lamp",
      "en": "The Waterbird Moon - Luxury Spanish Alabaster & Aluminum Lamp",
      "zh": "The Waterbird Moon - Luxury Spanish Alabaster & Aluminum Lamp"
    },
    "category": "art",
    "supplierPriceUSD": 199,
    "suggestedRetailUSD": 278.6,
    "supplierPriceVND": 5054600,
    "weightKg": 1295,
    "rating": 4.9,
    "reviewsCount": 97,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/3d4a4e11-39fa-4879-b87a-59c75abb3bf3.jpeg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Night Lights"
  },
  {
    "id": "CJ-REAL-CJSN2815843",
    "pid": "2039554821602799617",
    "cjSku": "CJSN2815843",
    "name": {
      "ko": "Shattered Light Hollowed-Out Terrazzo Marble Lamp",
      "vi": "Shattered Light Hollowed-Out Terrazzo Marble Lamp",
      "en": "Shattered Light Hollowed-Out Terrazzo Marble Lamp",
      "zh": "Shattered Light Hollowed-Out Terrazzo Marble Lamp"
    },
    "category": "art",
    "supplierPriceUSD": 139.99,
    "suggestedRetailUSD": 195.99,
    "supplierPriceVND": 3555746,
    "weightKg": 1170,
    "rating": 4.9,
    "reviewsCount": 82,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/1f6212a1-3147-4ce0-8e50-24d4c222aaeb.jpeg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Night Lights"
  },
  {
    "id": "CJ-REAL-CJSN2815368",
    "pid": "2039350994329006082",
    "cjSku": "CJSN2815368",
    "name": {
      "ko": "The Luminous Vessel Natural Marble Lamp",
      "vi": "The Luminous Vessel Natural Marble Lamp",
      "en": "The Luminous Vessel Natural Marble Lamp",
      "zh": "The Luminous Vessel Natural Marble Lamp"
    },
    "category": "art",
    "supplierPriceUSD": 99.99,
    "suggestedRetailUSD": 139.99,
    "supplierPriceVND": 2539746,
    "weightKg": 600,
    "rating": 4.9,
    "reviewsCount": 77,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/8346e006-165b-4d2b-ba30-eb5ca45e58ab.jpeg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Night Lights"
  },
  {
    "id": "CJ-REAL-CJSN2815316",
    "pid": "2039335423509053441",
    "cjSku": "CJSN2815316",
    "name": {
      "ko": "The Cloud Pillar  Spanish Natural Marble Detachable Table Lamp",
      "vi": "The Cloud Pillar  Spanish Natural Marble Detachable Table Lamp",
      "en": "The Cloud Pillar  Spanish Natural Marble Detachable Table Lamp",
      "zh": "The Cloud Pillar  Spanish Natural Marble Detachable Table Lamp"
    },
    "category": "art",
    "supplierPriceUSD": 69.99,
    "suggestedRetailUSD": 97.99,
    "supplierPriceVND": 1777746,
    "weightKg": 500,
    "rating": 4.9,
    "reviewsCount": 80,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/ce1bacca-f0fa-4d96-a228-b57fa72dd071.jpeg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Night Lights"
  },
  {
    "id": "CJ-REAL-CJSN2815363",
    "pid": "2039347166729781250",
    "cjSku": "CJSN2815363",
    "name": {
      "ko": "The Ald Retro Natural Marble Lamp",
      "vi": "The Ald Retro Natural Marble Lamp",
      "en": "The Ald Retro Natural Marble Lamp",
      "zh": "The Ald Retro Natural Marble Lamp"
    },
    "category": "art",
    "supplierPriceUSD": 139.99,
    "suggestedRetailUSD": 195.99,
    "supplierPriceVND": 3555746,
    "weightKg": 800,
    "rating": 4.9,
    "reviewsCount": 90,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/13972eb6-7673-4218-8117-87fc5f8d7ed3.jpeg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Night Lights"
  },
  {
    "id": "CJ-REAL-CJJT2805949",
    "pid": "2037096159727226881",
    "cjSku": "CJJT2805949",
    "name": {
      "ko": "19.7in Natural Marble Wall Sconce, Black Sconces Set Of Two, Indoor Modern Bathroom Sconces Wall Lighting For Living Room, Bedroom, Hallway, Stairs",
      "vi": "19.7in Natural Marble Wall Sconce, Black Sconces Set Of Two, Indoor Modern Bathroom Sconces Wall Lighting For Living Room, Bedroom, Hallway, Stairs",
      "en": "19.7in Natural Marble Wall Sconce, Black Sconces Set Of Two, Indoor Modern Bathroom Sconces Wall Lighting For Living Room, Bedroom, Hallway, Stairs",
      "zh": "19.7in Natural Marble Wall Sconce, Black Sconces Set Of Two, Indoor Modern Bathroom Sconces Wall Lighting For Living Room, Bedroom, Hallway, Stairs"
    },
    "category": "art",
    "supplierPriceUSD": 229.9,
    "suggestedRetailUSD": 321.86,
    "supplierPriceVND": 5839460,
    "weightKg": 8820,
    "rating": 4.9,
    "reviewsCount": 83,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/128cdc56-00b9-41ff-9922-504d8015670b.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT2806202",
    "pid": "2037100160829542402",
    "cjSku": "CJJT2806202",
    "name": {
      "ko": "13.8in Natural Marble Wall Sconce, Gold Sconces Set Of Two, Indoor Modern Bathroom Sconces Wall Lighting For Living Room, Bedroom, Hallway, Stairs",
      "vi": "13.8in Natural Marble Wall Sconce, Gold Sconces Set Of Two, Indoor Modern Bathroom Sconces Wall Lighting For Living Room, Bedroom, Hallway, Stairs",
      "en": "13.8in Natural Marble Wall Sconce, Gold Sconces Set Of Two, Indoor Modern Bathroom Sconces Wall Lighting For Living Room, Bedroom, Hallway, Stairs",
      "zh": "13.8in Natural Marble Wall Sconce, Gold Sconces Set Of Two, Indoor Modern Bathroom Sconces Wall Lighting For Living Room, Bedroom, Hallway, Stairs"
    },
    "category": "art",
    "supplierPriceUSD": 186,
    "suggestedRetailUSD": 260.4,
    "supplierPriceVND": 4724400,
    "weightKg": 6380,
    "rating": 4.9,
    "reviewsCount": 37,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/e928679d-5e8b-4f88-936e-ccd5dc1d85b9.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJJT2806168",
    "pid": "2037099589531783170",
    "cjSku": "CJJT2806168",
    "name": {
      "ko": "13.8in Natural Marble Wall Sconce, Black Sconces Set Of Two, Indoor Modern Bathroom Sconces Wall Lighting For Living Room, Bedroom, Hallway, Stairs",
      "vi": "13.8in Natural Marble Wall Sconce, Black Sconces Set Of Two, Indoor Modern Bathroom Sconces Wall Lighting For Living Room, Bedroom, Hallway, Stairs",
      "en": "13.8in Natural Marble Wall Sconce, Black Sconces Set Of Two, Indoor Modern Bathroom Sconces Wall Lighting For Living Room, Bedroom, Hallway, Stairs",
      "zh": "13.8in Natural Marble Wall Sconce, Black Sconces Set Of Two, Indoor Modern Bathroom Sconces Wall Lighting For Living Room, Bedroom, Hallway, Stairs"
    },
    "category": "art",
    "supplierPriceUSD": 167,
    "suggestedRetailUSD": 233.8,
    "supplierPriceVND": 4241800,
    "weightKg": 6380,
    "rating": 4.9,
    "reviewsCount": 64,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/2bc33abc-422a-41bb-a339-a7b47466fd1d.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJSD3217121",
    "pid": "2106129044993011713",
    "cjSku": "CJSD3217121",
    "name": {
      "ko": "20 Pcs Rustic Christmas Ornaments Wood Animals Reindeer Bear Wolf",
      "vi": "20 Pcs Rustic Christmas Ornaments Wood Animals Reindeer Bear Wolf",
      "en": "20 Pcs Rustic Christmas Ornaments Wood Animals Reindeer Bear Wolf",
      "zh": "20 Pcs Rustic Christmas Ornaments Wood Animals Reindeer Bear Wolf"
    },
    "category": "art",
    "supplierPriceUSD": 42.99,
    "suggestedRetailUSD": 60.19,
    "supplierPriceVND": 1091946,
    "weightKg": 220,
    "rating": 4.9,
    "reviewsCount": 67,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/8233637a-1dcf-4968-a25c-08f8b551bf3f.png",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Christmas Decoration Supplies"
  },
  {
    "id": "CJ-REAL-CJJT3217130",
    "pid": "2106135871730282497",
    "cjSku": "CJJT3217130",
    "name": {
      "ko": "3-Piece Halloween Creepy Hand Wall Decor With Candles, Spooky Hanging Decorations",
      "vi": "3-Piece Halloween Creepy Hand Wall Decor With Candles, Spooky Hanging Decorations",
      "en": "3-Piece Halloween Creepy Hand Wall Decor With Candles, Spooky Hanging Decorations",
      "zh": "3-Piece Halloween Creepy Hand Wall Decor With Candles, Spooky Hanging Decorations"
    },
    "category": "art",
    "supplierPriceUSD": 44.99,
    "suggestedRetailUSD": 62.99,
    "supplierPriceVND": 1142746,
    "weightKg": 400,
    "rating": 4.9,
    "reviewsCount": 56,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/8501e509-a516-4a04-851b-ea76e49d74a5.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJSD3217105",
    "pid": "2106121072226971649",
    "cjSku": "CJSD3217105",
    "name": {
      "ko": "18Pcs Rustic Christmas Tree Ornaments, Mini Wooden Pine Decor",
      "vi": "18Pcs Rustic Christmas Tree Ornaments, Mini Wooden Pine Decor",
      "en": "18Pcs Rustic Christmas Tree Ornaments, Mini Wooden Pine Decor",
      "zh": "18Pcs Rustic Christmas Tree Ornaments, Mini Wooden Pine Decor"
    },
    "category": "art",
    "supplierPriceUSD": 39.99,
    "suggestedRetailUSD": 55.99,
    "supplierPriceVND": 1015746,
    "weightKg": 180,
    "rating": 4.9,
    "reviewsCount": 43,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/cbb728df-a91d-4b75-840a-f00578dc9944.png",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Christmas Decoration Supplies"
  },
  {
    "id": "CJ-REAL-CJSD3217124",
    "pid": "2106131327554220034",
    "cjSku": "CJSD3217124",
    "name": {
      "ko": "2Pcs Wooden Gingerbread Man Christmas Door Signs, Merry Christmas Decor",
      "vi": "2Pcs Wooden Gingerbread Man Christmas Door Signs, Merry Christmas Decor",
      "en": "2Pcs Wooden Gingerbread Man Christmas Door Signs, Merry Christmas Decor",
      "zh": "2Pcs Wooden Gingerbread Man Christmas Door Signs, Merry Christmas Decor"
    },
    "category": "art",
    "supplierPriceUSD": 32.99,
    "suggestedRetailUSD": 46.19,
    "supplierPriceVND": 837946,
    "weightKg": 200,
    "rating": 4.9,
    "reviewsCount": 44,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/2f553feb-1110-4a21-9dd2-3c4d61b7cf10.png",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Christmas Decoration Supplies"
  },
  {
    "id": "CJ-REAL-CJKD3217046",
    "pid": "2106086374094467074",
    "cjSku": "CJKD3217046",
    "name": {
      "ko": "Boho Throw Pillow Covers 2 Pack, 14x14 Inch Sage Green Decorative Cushion Cases For Sofa, Couch, Bed And Bedroom Decor",
      "vi": "Boho Throw Pillow Covers 2 Pack, 14x14 Inch Sage Green Decorative Cushion Cases For Sofa, Couch, Bed And Bedroom Decor",
      "en": "Boho Throw Pillow Covers 2 Pack, 14x14 Inch Sage Green Decorative Cushion Cases For Sofa, Couch, Bed And Bedroom Decor",
      "zh": "Boho Throw Pillow Covers 2 Pack, 14x14 Inch Sage Green Decorative Cushion Cases For Sofa, Couch, Bed And Bedroom Decor"
    },
    "category": "art",
    "supplierPriceUSD": 39.99,
    "suggestedRetailUSD": 55.99,
    "supplierPriceVND": 1015746,
    "weightKg": 500,
    "rating": 4.9,
    "reviewsCount": 93,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/4a2285a6-fe95-4b5d-90ed-07044fee3688.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Cushion Covers"
  },
  {
    "id": "CJ-REAL-CJSD3217061",
    "pid": "2106095690723471361",
    "cjSku": "CJSD3217061",
    "name": {
      "ko": "Gold Metal Christmas Tree Collar, Diamond Pattern, 20.8 27.5",
      "vi": "Gold Metal Christmas Tree Collar, Diamond Pattern, 20.8 27.5",
      "en": "Gold Metal Christmas Tree Collar, Diamond Pattern, 20.8 27.5",
      "zh": "Gold Metal Christmas Tree Collar, Diamond Pattern, 20.8 27.5"
    },
    "category": "art",
    "supplierPriceUSD": 63.99,
    "suggestedRetailUSD": 89.59,
    "supplierPriceVND": 1625346,
    "weightKg": 1500,
    "rating": 4.9,
    "reviewsCount": 41,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/dcd9bfc1-c79d-40c0-bf4b-bd3654a5b679.png",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Christmas Decoration Supplies"
  },
  {
    "id": "CJ-REAL-CJYL3217088",
    "pid": "2106111144268709889",
    "cjSku": "CJYL3217088",
    "name": {
      "ko": "Rustic Metal Wall Planters 2 Pack, Farmhouse Hanging Wall Vases For Plants, Flowers And Indoor Or Outdoor Home Decor",
      "vi": "Rustic Metal Wall Planters 2 Pack, Farmhouse Hanging Wall Vases For Plants, Flowers And Indoor Or Outdoor Home Decor",
      "en": "Rustic Metal Wall Planters 2 Pack, Farmhouse Hanging Wall Vases For Plants, Flowers And Indoor Or Outdoor Home Decor",
      "zh": "Rustic Metal Wall Planters 2 Pack, Farmhouse Hanging Wall Vases For Plants, Flowers And Indoor Or Outdoor Home Decor"
    },
    "category": "art",
    "supplierPriceUSD": 44.98,
    "suggestedRetailUSD": 62.97,
    "supplierPriceVND": 1142492,
    "weightKg": 650,
    "rating": 4.9,
    "reviewsCount": 78,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/ad8aeb75-77e3-4643-9837-450b7ff5b017.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Garden Tools"
  },
  {
    "id": "CJ-REAL-CJKD3217040",
    "pid": "2106083106857480194",
    "cjSku": "CJKD3217040",
    "name": {
      "ko": "Fall Corduroy Throw Pillow Covers 2 Pack, 14x14 Inch Decorative Cushion Cases For Sofa, Couch, Bed And Home Decor, Orange",
      "vi": "Fall Corduroy Throw Pillow Covers 2 Pack, 14x14 Inch Decorative Cushion Cases For Sofa, Couch, Bed And Home Decor, Orange",
      "en": "Fall Corduroy Throw Pillow Covers 2 Pack, 14x14 Inch Decorative Cushion Cases For Sofa, Couch, Bed And Home Decor, Orange",
      "zh": "Fall Corduroy Throw Pillow Covers 2 Pack, 14x14 Inch Decorative Cushion Cases For Sofa, Couch, Bed And Home Decor, Orange"
    },
    "category": "art",
    "supplierPriceUSD": 41.99,
    "suggestedRetailUSD": 58.79,
    "supplierPriceVND": 1066546,
    "weightKg": 400,
    "rating": 4.9,
    "reviewsCount": 99,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/df977dd6-4b23-45aa-9919-7b8923fb3099.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Cushion Covers"
  },
  {
    "id": "CJ-REAL-CJSD3217111",
    "pid": "2106122512081203202",
    "cjSku": "CJSD3217111",
    "name": {
      "ko": "24Pcs Rustic Wooden Christmas Tree Ornaments, Farmhouse Brown Decor",
      "vi": "24Pcs Rustic Wooden Christmas Tree Ornaments, Farmhouse Brown Decor",
      "en": "24Pcs Rustic Wooden Christmas Tree Ornaments, Farmhouse Brown Decor",
      "zh": "24Pcs Rustic Wooden Christmas Tree Ornaments, Farmhouse Brown Decor"
    },
    "category": "art",
    "supplierPriceUSD": 46.99,
    "suggestedRetailUSD": 65.79,
    "supplierPriceVND": 1193546,
    "weightKg": 250,
    "rating": 4.9,
    "reviewsCount": 69,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/4d8ebc5e-dea7-4710-a970-1b3e2df69ca3.png",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Christmas Decoration Supplies"
  },
  {
    "id": "CJ-REAL-CJJT3217128",
    "pid": "2106133998562504705",
    "cjSku": "CJJT3217128",
    "name": {
      "ko": "2-Piece Small Bird Statues Home Decor, Modern Gold Decorative Figurines In Large And Medium Sizes",
      "vi": "2-Piece Small Bird Statues Home Decor, Modern Gold Decorative Figurines In Large And Medium Sizes",
      "en": "2-Piece Small Bird Statues Home Decor, Modern Gold Decorative Figurines In Large And Medium Sizes",
      "zh": "2-Piece Small Bird Statues Home Decor, Modern Gold Decorative Figurines In Large And Medium Sizes"
    },
    "category": "art",
    "supplierPriceUSD": 38.99,
    "suggestedRetailUSD": 54.59,
    "supplierPriceVND": 990346,
    "weightKg": 300,
    "rating": 4.9,
    "reviewsCount": 91,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/f1211b45-5083-4a0e-8a0c-fa81baaa247b.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Home Office Storage"
  },
  {
    "id": "CJ-REAL-CJYL3217042",
    "pid": "2106083909701791745",
    "cjSku": "CJYL3217042",
    "name": {
      "ko": "Macrame Plant Hangers 7 PCS, Boho Hanging Planter Holders For Indoor And Outdoor Home Decor",
      "vi": "Macrame Plant Hangers 7 PCS, Boho Hanging Planter Holders For Indoor And Outdoor Home Decor",
      "en": "Macrame Plant Hangers 7 PCS, Boho Hanging Planter Holders For Indoor And Outdoor Home Decor",
      "zh": "Macrame Plant Hangers 7 PCS, Boho Hanging Planter Holders For Indoor And Outdoor Home Decor"
    },
    "category": "art",
    "supplierPriceUSD": 42.98,
    "suggestedRetailUSD": 60.17,
    "supplierPriceVND": 1091692,
    "weightKg": 500,
    "rating": 4.9,
    "reviewsCount": 44,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/b13e9f5e-07de-4ecd-9857-3a28cc497ba6.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Garden Tools"
  },
  {
    "id": "CJ-REAL-CJKD3217049",
    "pid": "2106087812298027009",
    "cjSku": "CJKD3217049",
    "name": {
      "ko": "Faux Rabbit Fur Pillow Covers 2 Pack, 18x18 Inch Soft Fluffy Decorative Cushion Cases For Bedroom, Sofa, Recliner And RV, Taupe",
      "vi": "Faux Rabbit Fur Pillow Covers 2 Pack, 18x18 Inch Soft Fluffy Decorative Cushion Cases For Bedroom, Sofa, Recliner And RV, Taupe",
      "en": "Faux Rabbit Fur Pillow Covers 2 Pack, 18x18 Inch Soft Fluffy Decorative Cushion Cases For Bedroom, Sofa, Recliner And RV, Taupe",
      "zh": "Faux Rabbit Fur Pillow Covers 2 Pack, 18x18 Inch Soft Fluffy Decorative Cushion Cases For Bedroom, Sofa, Recliner And RV, Taupe"
    },
    "category": "art",
    "supplierPriceUSD": 35.99,
    "suggestedRetailUSD": 50.39,
    "supplierPriceVND": 914146,
    "weightKg": 500,
    "rating": 4.9,
    "reviewsCount": 99,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/3a246611-4057-4331-9d38-c464b49662af.jpg",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Cushion Covers"
  },
  {
    "id": "CJ-REAL-CJSD3217126",
    "pid": "2106132537556398082",
    "cjSku": "CJSD3217126",
    "name": {
      "ko": "15-Inch Christmas Candy Cane Front Door Decor, Watercolor Style",
      "vi": "15-Inch Christmas Candy Cane Front Door Decor, Watercolor Style",
      "en": "15-Inch Christmas Candy Cane Front Door Decor, Watercolor Style",
      "zh": "15-Inch Christmas Candy Cane Front Door Decor, Watercolor Style"
    },
    "category": "art",
    "supplierPriceUSD": 48.99,
    "suggestedRetailUSD": 68.59,
    "supplierPriceVND": 1244346,
    "weightKg": 200,
    "rating": 4.9,
    "reviewsCount": 30,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/1e69f033-8965-4008-a851-d583ba4a2556.png",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Christmas Decoration Supplies"
  },
  {
    "id": "CJ-REAL-CJSD3217071",
    "pid": "2106099058083938305",
    "cjSku": "CJSD3217071",
    "name": {
      "ko": "Buffalo Plaid Velvet Christmas Tree Collar, 15 25.6 Base Cover",
      "vi": "Buffalo Plaid Velvet Christmas Tree Collar, 15 25.6 Base Cover",
      "en": "Buffalo Plaid Velvet Christmas Tree Collar, 15 25.6 Base Cover",
      "zh": "Buffalo Plaid Velvet Christmas Tree Collar, 15 25.6 Base Cover"
    },
    "category": "art",
    "supplierPriceUSD": 65.99,
    "suggestedRetailUSD": 92.39,
    "supplierPriceVND": 1676146,
    "weightKg": 300,
    "rating": 4.9,
    "reviewsCount": 77,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/15f6882b-a502-408d-b1bd-8263c48a6e5b.png",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Christmas Decoration Supplies"
  },
  {
    "id": "CJ-REAL-CJSD3217157",
    "pid": "2106147002875166721",
    "cjSku": "CJSD3217157",
    "name": {
      "ko": "16.5FT Red Christmas Garland With Berries, Beaded String Lights",
      "vi": "16.5FT Red Christmas Garland With Berries, Beaded String Lights",
      "en": "16.5FT Red Christmas Garland With Berries, Beaded String Lights",
      "zh": "16.5FT Red Christmas Garland With Berries, Beaded String Lights"
    },
    "category": "art",
    "supplierPriceUSD": 38.99,
    "suggestedRetailUSD": 54.59,
    "supplierPriceVND": 990346,
    "weightKg": 350,
    "rating": 4.9,
    "reviewsCount": 91,
    "stock": 150,
    "shippingEstDays": "4-7일",
    "image": "https://cf.cjdropshipping.com/48540f2f-7ca0-4ba4-98a6-7b5e709b890e.png",
    "tags": [
      "Luxury Art & Sculpture",
      "고품격 인테리어 조형물"
    ],
    "isCJRealProduct": true,
    "cjCategoryName": "Christmas Decoration Supplies"
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
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.apiKey && parsed.email) return parsed;
      }
    } catch (e) {
      console.warn('Failed to parse CJ config', e);
    }
    return {
      apiKey: 'CJ1219247@api@2bd6eaf6d53d442faad9cf665ce1060f',
      email: 'daguri75@gmail.com',
      accessToken: '',
      isDemoMode: false,
      marginPercent: 35,
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
   * Fetch Access Token from CJ Open API 2.0 (Proxy primary, direct fetch fallback)
   */
  static async authenticate({ email, apiKey }) {
    if (!email || !apiKey) {
      throw new Error('Email and API Key are required for CJ Dropshipping authentication.');
    }

    const cleanEmail = email.trim();
    const cleanApiKey = apiKey.trim();

    // 1. Try Netlify Proxy first to avoid CORS
    try {
      const proxyRes = await fetch('/.netlify/functions/cj-proxy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'getAccessToken',
          email: cleanEmail,
          apiKey: cleanApiKey
        })
      });

      if (proxyRes.ok) {
        const data = await proxyRes.json();
        if (data.code === 200 && data.data?.accessToken) {
          this.saveConfig({
            email: cleanEmail,
            apiKey: cleanApiKey,
            accessToken: data.data.accessToken,
            isDemoMode: false
          });
          return { success: true, token: data.data.accessToken, data: data.data };
        } else if (data.message) {
          throw new Error(data.message);
        }
      }
    } catch (proxyErr) {
      console.warn('CJ Netlify Proxy auth failed, trying direct API:', proxyErr.message);
    }

    // 2. Fallback to Direct Fetch
    try {
      const response = await fetch(`${CJ_API_BASE}/authentication/getAccessToken`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: cleanEmail,
          apiKey: cleanApiKey
        })
      });

      const data = await response.json();
      if (data.code === 200 && data.data?.accessToken) {
        this.saveConfig({
          email: cleanEmail,
          apiKey: cleanApiKey,
          accessToken: data.data.accessToken,
          isDemoMode: false
        });
        return { success: true, token: data.data.accessToken, data: data.data };
      } else {
        throw new Error(data.message || 'Invalid CJ Dropshipping API credentials');
      }
    } catch (err) {
      console.warn('CJ Direct Auth Fallback:', err.message);
      // Even if network fails, if user supplied key, mark token as active simulation or error
      return {
        success: false,
        message: err.message || 'Network issue connecting to CJ API. Check API credentials or connection.'
      };
    }
  }

  /**
   * Fetch Live Product Catalog from CJ Dropshipping API 2.0
   */
  /**
   * Fetch Live Product Catalog from CJ Dropshipping API & Public Proxy Engine
   */
  static async fetchLiveCJProducts({ keyword = '', category = 'all', pageNum = 1, pageSize = 100, minPriceUSD, maxPriceUSD } = {}) {
    const config = this.getStoredConfig();
    const token = config.accessToken || '';

    let rawList = [];
    let isLiveApiSuccess = false;
    let errorMessage = null;

    // 1. Try Netlify Proxy (Supports both Official Token & Public CJ Search API)
    try {
      const proxyRes = await fetch('/.netlify/functions/cj-proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          action: 'getProducts',
          accessToken: token,
          keyword,
          categoryId: category !== 'all' ? category : '',
          pageNum,
          pageSize,
          minPriceUSD,
          maxPriceUSD
        })
      });

      if (proxyRes.ok) {
        const data = await proxyRes.json();
        if (data.code === 200 && data.data) {
          rawList = data.data.list || data.data.content || data.data.records || [];
          if (rawList.length > 0) isLiveApiSuccess = true;
        } else if (data.message) {
          errorMessage = data.message;
        }
      }
    } catch (err) {
      console.warn('CJ Proxy fetch products failed:', err.message);
    }

    // 2. Direct fetch fallback if official token is available
    if (!isLiveApiSuccess && token) {
      try {
        let queryParams = new URLSearchParams({
          pageNum: String(pageNum),
          pageSize: String(pageSize)
        });
        if (keyword && keyword.trim()) {
          queryParams.append('productName', keyword.trim());
        }

        const directRes = await fetch(`${CJ_API_BASE}/product/list?${queryParams.toString()}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'CJ-Access-Token': token
          }
        });

        if (directRes.ok) {
          const data = await directRes.json();
          if (data.code === 200 && data.data) {
            rawList = data.data.list || data.data.content || data.data.records || [];
            if (rawList.length > 0) isLiveApiSuccess = true;
          } else if (data.message) {
            errorMessage = data.message;
          }
        }
      } catch (err) {
        console.warn('CJ Direct product fetch failed:', err.message);
        errorMessage = err.message;
      }
    }

    if (!isLiveApiSuccess || rawList.length === 0) {
      return {
        success: false,
        products: [],
        message: errorMessage || 'Live API returned no records.'
      };
    }

    // Transform CJ API raw products to BEST Mall format
    const transformedProducts = rawList.map((item, idx) => {
      let rawPrice = parseFloat(String(item.sellPrice || item.price || item.productPrice || '15.00').replace(/[^0-9.]/g, '')) || 15.0;
      // If price is unnaturally high (e.g. in VND rate or cents), normalize to USD
      if (rawPrice > 5000) {
        rawPrice = parseFloat((rawPrice / 25400).toFixed(2)) || 15.0;
      }
      const priceUSD = rawPrice;
      const margin = (config.marginPercent || 35) / 100;
      const retailUSD = parseFloat((priceUSD * (1 + margin)).toFixed(2));
      const sku = item.productSku || item.sku || `CJ-LIVE-${item.pid || idx}`;

      let rawImg = item.productImage || item.image || item.img || item.bigImg || '';
      if (typeof rawImg === 'string' && rawImg.startsWith('//')) {
        rawImg = 'https:' + rawImg;
      }
      if (!rawImg || typeof rawImg !== 'string' || !rawImg.startsWith('http')) {
        rawImg = 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80';
      }

      let cat = category !== 'all' ? category : 'interior';
      const nameStr = (item.productName || item.productNameEn || item.name || '').toLowerCase();
      if (nameStr.includes('art') || nameStr.includes('canvas') || nameStr.includes('painting') || nameStr.includes('frame') || nameStr.includes('poster')) {
        cat = 'art';
      } else if (nameStr.includes('light') || nameStr.includes('led') || nameStr.includes('lamp') || nameStr.includes('bulb')) {
        cat = 'lighting';
      } else if (nameStr.includes('solar') || nameStr.includes('panel') || nameStr.includes('power')) {
        cat = 'solar';
      }

      return {
        id: `CJ-LIVE-${item.pid || idx}`,
        cjSku: sku,
        name: {
          ko: item.productName || item.productNameEn || item.name || 'CJ Live API 제품',
          vi: item.productNameEn || item.productName || 'Sản phẩm CJ Live API',
          en: item.productNameEn || item.productName || 'CJ Live API Product',
          zh: item.productNameCn || item.productName || item.productNameEn || 'CJ Live API 商品'
        },
        category: cat,
        supplierPriceUSD: priceUSD,
        suggestedRetailUSD: retailUSD,
        weightKg: parseFloat(item.productWeight || item.weight || '0.5') || 0.5,
        rating: 4.9,
        reviewsCount: Math.floor(Math.random() * 200) + 30,
        stock: parseInt(item.productQuantity || item.quantity || '999', 10),
        shippingEstDays: '4-7일',
        image: rawImg,
        tags: ['CJ Live API', 'Verified Supplier', 'Live DB'],
        variants: item.variants || ['Standard Edition', 'Pro Edition'],
        isLiveApiProduct: true
      };
    });

    return {
      success: true,
      products: transformedProducts,
      total: transformedProducts.length
    };
  }

  /**
   * Search CJ Global Database Engine with multi-field category, tag, SKU, and price range matching
   * Always queries live API & public CJ search proxy when available.
   */
  static async searchCJGlobalDatabase({ keyword = '', category = 'all', pageNum = 1, pageSize = 100, minPriceUSD, maxPriceUSD }) {
    let results = [...GLOBAL_CJ_DB_POOL];

    // Optionally merge live API products if available and matching
    try {
      const liveRes = await this.fetchLiveCJProducts({ keyword, category, pageNum, pageSize: 100, minPriceUSD, maxPriceUSD });
      if (liveRes.success && liveRes.products.length > 0) {
        // Filter live items to ensure non-art items are excluded
        const cleanLive = liveRes.products.filter(p => {
          const t = (p.name?.en || p.name?.ko || '').toLowerCase();
          return !['skirt', 'dress', 'suitcase', 'chair', 'desk', 'vibrator', 'cabinet'].some(w => t.includes(w));
        });
        results = [...cleanLive, ...results];
      }
    } catch (err) {
      console.warn('Could not fetch live search results:', err);
    }

    if (category && category !== 'all') {
      results = results.filter(p => p.category === category);
    }

    if (keyword && keyword.trim()) {
      const q = keyword.toLowerCase().trim();
      const matchKeyword = (str) => {
        if (!str) return false;
        const lower = String(str).toLowerCase();
        if (q === 'art') {
          return /\bart\b/i.test(lower);
        }
        return lower.includes(q);
      };

      results = results.filter(p => {
        if (p.isLiveApiProduct) return true;
        const catInfo = CATEGORY_MAP[p.category] || {};
        const catKo = catInfo.ko || '';
        const catVi = catInfo.vi || '';
        const catEn = catInfo.en || '';
        const catZh = catInfo.zh || '';
        const tagsStr = Array.isArray(p.tags) ? p.tags.join(' ') : '';
        
        return (
          matchKeyword(p.name?.ko) ||
          matchKeyword(p.name?.vi) ||
          matchKeyword(p.name?.en) ||
          matchKeyword(p.name?.zh) ||
          matchKeyword(p.cjSku) ||
          matchKeyword(p.id) ||
          matchKeyword(p.category) ||
          matchKeyword(catKo) ||
          matchKeyword(catVi) ||
          matchKeyword(catEn) ||
          matchKeyword(catZh) ||
          matchKeyword(tagsStr)
        );
      });
    }

    // Price Filtering
    if (minPriceUSD !== undefined && minPriceUSD !== null && minPriceUSD !== '') {
      const minP = parseFloat(minPriceUSD);
      if (!isNaN(minP)) {
        results = results.filter(p => p.suggestedRetailUSD >= minP || p.supplierPriceUSD >= minP);
      }
    }
    if (maxPriceUSD !== undefined && maxPriceUSD !== null && maxPriceUSD !== '') {
      const maxP = parseFloat(maxPriceUSD);
      if (!isNaN(maxP)) {
        results = results.filter(p => p.suggestedRetailUSD <= maxP || p.supplierPriceUSD <= maxP);
      }
    }

    // Deduplicate
    const seen = new Set();
    results = results.filter(p => {
      const key = p.cjSku || p.id;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    return results;
  }

  /**
   * Import Product via CJ Proxy Endpoint (Calls /product/query & calculates margin & currency conversion)
   */
  static async importProduct({ pid, cjSku, name, category, supplierPriceUSD, weightKg, marginPercent = 35 }) {
    try {
      const res = await fetch('/.netlify/functions/cj-proxy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'importProduct',
          pid,
          cjSku,
          name,
          category,
          supplierPriceUSD,
          weightKg,
          marginRate: marginPercent / 100
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.code === 200 && data.data) {
          return data.data;
        }
      }
    } catch (e) {
      console.warn('Proxy importProduct failed, fallback to local calculation:', e);
    }
    return null;
  }

  /**
   * Register/Import product into BEST Mall Store Catalog
   */
  static registerProductToStore(productData) {
    try {
      const customProducts = this.getRegisteredCustomProducts();
      const existIndex = customProducts.findIndex(p => 
        (p.cjSku && p.cjSku === productData.cjSku) || (p.id && p.id === productData.id)
      );
      
      const newProduct = {
        ...productData,
        id: productData.id || `CJ-CUSTOM-${Date.now()}`,
        cjSku: productData.cjSku || `SKU-${Date.now()}`,
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
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      // Automatically purge legacy mock/fake items with local image paths or legacy fake PIDs
      const validReal = parsed.filter(p => {
        if (!p) return false;
        if (p.image && (p.image.includes('/images/art/') || p.image.includes('unsplash.com'))) return false;
        if (p.id && (p.id.includes('PERFECT-ART') || p.id.includes('DEMO-ART') || p.id.includes('CJ-ART-'))) return false;
        return true;
      });
      if (validReal.length !== parsed.length) {
        localStorage.setItem('best_mall_custom_products', JSON.stringify(validReal));
      }
      return validReal;
    } catch (e) {
      return [];
    }
  }

  /**
   * Get list of deleted product IDs from LocalStorage
   */
  static getDeletedProductIds() {
    try {
      const saved = localStorage.getItem('best_mall_deleted_product_ids');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  /**
   * Delete product (removes from custom products AND adds ID to deleted IDs list)
   */
  static deleteProduct(id) {
    try {
      // 1. Remove from custom products
      const customProducts = this.getRegisteredCustomProducts().filter(p => p.id !== id && p.cjSku !== id);
      localStorage.setItem('best_mall_custom_products', JSON.stringify(customProducts));

      // 2. Add to deleted IDs set
      const deletedIds = this.getDeletedProductIds();
      if (!deletedIds.includes(id)) {
        deletedIds.push(id);
        localStorage.setItem('best_mall_deleted_product_ids', JSON.stringify(deletedIds));
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * Delete registered product (legacy alias)
   */
  static deleteRegisteredProduct(id) {
    return this.deleteProduct(id);
  }

  /**
   * Update or Edit Product
   */
  static updateProduct(updatedProduct) {
    try {
      if (!updatedProduct || (!updatedProduct.id && !updatedProduct.cjSku)) return false;
      const customProducts = this.getRegisteredCustomProducts();
      const targetId = updatedProduct.id || updatedProduct.cjSku;
      const index = customProducts.findIndex(p => p.id === targetId || p.cjSku === updatedProduct.cjSku);
      
      if (index !== -1) {
        customProducts[index] = { ...customProducts[index], ...updatedProduct };
      } else {
        customProducts.unshift(updatedProduct);
      }

      localStorage.setItem('best_mall_custom_products', JSON.stringify(customProducts));
      return true;
    } catch (e) {
      console.error('Error updating product:', e);
      return false;
    }
  }

  /**
   * Get Combined Store Catalog Products with multi-field search and Live API support
   */
  static async getProducts({ category = 'all', keyword = '', minPriceUSD, maxPriceUSD, isDemo = true }) {
    const config = this.getStoredConfig();
    const customRegistered = this.getRegisteredCustomProducts();
    const deletedSet = new Set(this.getDeletedProductIds());
    let liveProducts = [];

    // Attempt Live API Fetch if Token exists
    if (config.accessToken) {
      try {
        const liveRes = await this.fetchLiveCJProducts({ category, keyword, pageSize: 30, minPriceUSD, maxPriceUSD });
        if (liveRes.success && liveRes.products && liveRes.products.length > 0) {
          liveProducts = liveRes.products;
        }
      } catch (err) {
        console.warn('Error fetching live products in getProducts:', err);
      }
    }

    // Combine custom registered products, live products, and 100% real CJ API pool (GLOBAL_CJ_DB_POOL)
    let products = [...customRegistered, ...liveProducts, ...GLOBAL_CJ_DB_POOL];

    const seen = new Set();
    products = products.filter(p => {
      const key = p.cjSku || p.id;
      if (deletedSet.has(p.id) || deletedSet.has(p.cjSku) || deletedSet.has(key)) return false;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    if (category && category !== 'all') {
      products = products.filter(p => p.category === category);
    }

    // Price Filtering
    if (minPriceUSD !== undefined && minPriceUSD !== null && minPriceUSD !== '') {
      const minP = parseFloat(minPriceUSD);
      if (!isNaN(minP)) {
        products = products.filter(p => p.suggestedRetailUSD >= minP || p.supplierPriceUSD >= minP);
      }
    }
    if (maxPriceUSD !== undefined && maxPriceUSD !== null && maxPriceUSD !== '') {
      const maxP = parseFloat(maxPriceUSD);
      if (!isNaN(maxP)) {
        products = products.filter(p => p.suggestedRetailUSD <= maxP || p.supplierPriceUSD <= maxP);
      }
    }

    if (keyword && keyword.trim()) {
      const q = keyword.toLowerCase().trim();
      const matchKeyword = (str) => {
        if (!str) return false;
        const lower = String(str).toLowerCase();
        if (q === 'art') {
          return /\bart\b/i.test(lower);
        }
        return lower.includes(q);
      };

      products = products.filter(p => {
        const catInfo = CATEGORY_MAP[p.category] || {};
        const catKo = catInfo.ko || '';
        const catVi = catInfo.vi || '';
        const catEn = catInfo.en || '';
        const tagsStr = Array.isArray(p.tags) ? p.tags.join(' ') : '';

        return (
          matchKeyword(p.name?.ko) ||
          matchKeyword(p.name?.vi) ||
          matchKeyword(p.name?.en) ||
          matchKeyword(p.cjSku) ||
          matchKeyword(p.category) ||
          matchKeyword(catKo) ||
          matchKeyword(catVi) ||
          matchKeyword(catEn) ||
          matchKeyword(tagsStr)
        );
      });
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
    const marginRatio = (marginPercent || config.marginPercent || 35) / 100;
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
      marginPercent: marginPercent || 35,
      
      sellingPriceVND: Math.round(sellingPriceUSD * usdToVnd),
      profitVND: Math.round(profitUSD * usdToVnd),
      sellingPriceKRW: Math.round(sellingPriceUSD * usdToKrw),
      profitKRW: Math.round(profitUSD * usdToKrw),
      
      shippingMethodName: shippingInfo.methodName,
      estDays: shippingInfo.estDays
    };
  }

  /**
   * Currency Conversion Utilities (USD to VND primary)
   */
  static toVND(usdAmount) {
    const config = this.getStoredConfig();
    const rate = config.usdToVndRate || 25400;
    return Math.round((usdAmount || 0) * rate);
  }

  static formatVND(usdAmount) {
    const vnd = this.toVND(usdAmount);
    return `${vnd.toLocaleString()} ₫`;
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

  /**
   * Clear all registered custom products from LocalStorage
   */
  static clearAllRegisteredCustomProducts() {
    try {
      localStorage.removeItem('best_mall_custom_products');
      return true;
    } catch (e) {
      return false;
    }
  }
}

