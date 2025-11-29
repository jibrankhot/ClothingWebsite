// import { IProduct } from "../types/product-type";

import { IProduct } from "./product-type";


const product_data: IProduct[] = []
//   {
//     id: "1",
//     sku: "BEIGE-STRIPE-LINEN-SHIRT",
//     img: "assets/images/new-arrival-images/beige-stripe-linen-shirt-1.webp",
//     title: "Beige Stripe Linen Shirt",
//     slug: "beige-stripe-linen-shirt",
//     unit: "10pcs",
//     badge: "none",
//     imageURLs: [
//       { color: { name: "Front View", clrCode: "#D8CAB8" }, img: "assets/images/new-arrival-images/beige-stripe-linen-shirt-1.webp" },
//       { color: { name: "Back View", clrCode: "#D8CAB8" }, img: "assets/images/new-arrival-images/beige-stripe-linen-shirt-2.webp" }
//     ],
//     parent: "Clothing",
//     children: "Women's",
//     price: 80,
//     discount: 5,
//     quantity: 10,
//     brand: { name: "Legendary Whitetails" },
//     category: { name: "Clothing" },
//     status: "in-stock",
//     productType: "newArrivalProducts",
//     description: "Stay cool and stylish with our Beige Stripe Linen Shirt – crafted from breathable, lightweight linen. This shirt offers effortless comfort and pairs perfectly with casual or semi-formal outfits.",
//     additionalInformation: [
//       { key: "Material", value: "100% Linen" },
//       { key: "Fit", value: "Relaxed fit for comfort and breathability" },
//       { key: "Colors", value: "Beige with subtle white stripes" }
//     ],
//     orderQuantity: 0,
//     featured: false,
//     sellCount: 1,
//     tags: ["linen", "shirt", "women's clothing", "lightweight"],
//     sizes: ["XS", "S", "M", "L", "XL"]
//   },
//   {
//     id: "2",
//     sku: "MINT-MIST-LINEN-SHIRT",
//     img: "assets/images/new-arrival-images/mint-mist-linen-shirt-1.webp",
//     title: "Mint Mist Linen Shirt",
//     slug: "mint-mist-linen-shirt",
//     unit: "10pcs",
//     badge: "new",
//     imageURLs: [
//       { color: { name: "Front View", clrCode: "#D4E8D3" }, img: "assets/images/new-arrival-images/mint-mist-linen-shirt-1.webp" },
//       { color: { name: "Back View", clrCode: "#D4E8D3" }, img: "assets/images/new-arrival-images/mint-mist-linen-shirt-2.webp" }
//     ],
//     parent: "Clothing",
//     children: "Women's",
//     price: 80,
//     discount: 5,
//     quantity: 10,
//     brand: { name: "Legendary Whitetails" },
//     category: { name: "Clothing" },
//     status: "in-stock",
//     productType: "newArrivalProducts",
//     description: "Experience airy comfort with the Mint Mist Linen Shirt – crafted from soft, breathable linen. Designed with a refreshing mint hue, it adds a touch of calm elegance to your wardrobe.",
//     additionalInformation: [
//       { key: "Material", value: "100% Linen" },
//       { key: "Fit", value: "Relaxed fit for breathable wear" },
//       { key: "Colors", value: "Mint Mist Green" }
//     ],
//     orderQuantity: 0,
//     featured: false,
//     sellCount: 0,
//     tags: ["linen", "shirt", "women's clothing", "mint", "green"],
//     sizes: ["XS", "S", "M", "L", "XL"]
//   },
//   {
//     id: "3",
//     sku: "MANTIS-GREEN-LINEN-SHIRT",
//     img: "assets/images/new-arrival-images/mantis-green-linen-shirt-1.webp",
//     title: "Mantis Green Linen Shirt",
//     slug: "mantis-green-linen-shirt",
//     unit: "10pcs",
//     badge: "sale",
//     imageURLs: [
//       { color: { name: "Front View", clrCode: "#7DA87B" }, img: "assets/images/new-arrival-images/mantis-green-linen-shirt-1.webp" },
//       { color: { name: "Back View", clrCode: "#7DA87B" }, img: "assets/images/new-arrival-images/mantis-green-linen-shirt-2.webp" }
//     ],
//     parent: "Clothing",
//     children: "Women's",
//     price: 80,
//     discount: 5,
//     quantity: 10,
//     brand: { name: "Legendary Whitetails" },
//     category: { name: "Clothing" },
//     status: "in-stock",
//     productType: "newArrivalProducts",
//     description: "The Mantis Green Linen Shirt brings a subtle earthy tone to your wardrobe. Lightweight, breathable, and versatile – this shirt is ideal for both everyday wear and special occasions.",
//     additionalInformation: [
//       { key: "Material", value: "100% Linen" },
//       { key: "Fit", value: "Easy relaxed fit" },
//       { key: "Colors", value: "Mantis Green" }
//     ],
//     orderQuantity: 0,
//     featured: false,
//     sellCount: 0,
//     tags: ["linen", "shirt", "women's fashion", "green", "mantis"],
//     sizes: ["XS", "S", "M", "L", "XL"]
//   },
//   {
//     id: "4",
//     sku: "CHINOISE-STRIPE-LINEN-SHIRT",
//     img: "assets/images/new-arrival-images/chinoise-stripe-linen-shirt-1.webp",
//     title: "Chinoise Stripe Linen Shirt",
//     slug: "chinoise-stripe-linen-shirt",
//     unit: "10pcs",
//     badge: "new",
//     imageURLs: [
//       { color: { name: "Front View", clrCode: "#EBDAD1" }, img: "assets/images/new-arrival-images/chinoise-stripe-linen-shirt-1.webp" },
//       { color: { name: "Back View", clrCode: "#EBDAD1" }, img: "assets/images/new-arrival-images/chinoise-stripe-linen-shirt-2.webp" }
//     ],
//     parent: "Clothing",
//     children: "Women's",
//     price: 80,
//     discount: 5,
//     quantity: 10,
//     brand: { name: "Legendary Whitetails" },
//     category: { name: "Clothing" },
//     status: "in-stock",
//     productType: "newArrivalProducts",
//     description: "Effortlessly elegant, the Chinoise Stripe Linen Shirt features a soft neutral palette with delicate stripes. Perfect for staying stylish and comfortable throughout the day.",
//     additionalInformation: [
//       { key: "Material", value: "100% Linen" },
//       { key: "Fit", value: "Straight cut, relaxed fit" },
//       { key: "Colors", value: "Cream with light chinoise stripes" }
//     ],
//     orderQuantity: 0,
//     featured: false,
//     sellCount: 0,
//     tags: ["linen", "striped", "shirt", "neutral", "women"],
//     sizes: ["XS", "S", "M", "L", "XL"]
//   },
//   {
//     id: "5",
//     sku: "CELADON-GREEN-LINEN-SHIRT",
//     img: "assets/images/new-arrival-images/celadon-green-linen-shirt-1.webp",
//     title: "Celadon Green Linen Shirt",
//     slug: "celadon-green-linen-shirt",
//     unit: "10pcs",
//     badge: "none",
//     imageURLs: [
//       { color: { name: "Front View", clrCode: "#B8D9C5" }, img: "assets/images/new-arrival-images/celadon-green-linen-shirt-1.webp" },
//       { color: { name: "Back View", clrCode: "#B8D9C5" }, img: "assets/images/new-arrival-images/celadon-green-linen-shirt-2.webp" }
//     ],
//     parent: "Clothing",
//     children: "Women's",
//     price: 80,
//     discount: 5,
//     quantity: 10,
//     brand: { name: "Legendary Whitetails" },
//     category: { name: "Clothing" },
//     status: "in-stock",
//     productType: "newArrivalProducts",
//     description: "The Celadon Green Linen Shirt delivers a serene vibe with its cool, pastel tone. Soft, airy, and perfect for summer wear.",
//     additionalInformation: [
//       { key: "Material", value: "100% Linen" },
//       { key: "Fit", value: "Loose fit with drop shoulder" },
//       { key: "Colors", value: "Celadon Green" }
//     ],
//     orderQuantity: 0,
//     featured: false,
//     sellCount: 0,
//     tags: ["linen", "green", "celadon", "women's fashion", "summer"],
//     sizes: ["XS", "S", "M", "L", "XL"]
//   }
// ];

export default product_data;
