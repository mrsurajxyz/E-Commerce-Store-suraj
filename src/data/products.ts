import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Cotton T-Shirt",
    price: 24.99,
    originalPrice: 34.99,
    description: "A comfortable and stylish t-shirt made from 100% premium cotton. Perfect for everyday wear, this classic tee features a regular fit and is available in multiple colors.",
    category: "men",
    subcategory: "t-shirts",
    images: [
      "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg",
      "https://images.pexels.com/photos/6311372/pexels-photo-6311372.jpeg",
      "https://images.pexels.com/photos/6311105/pexels-photo-6311105.jpeg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#000080" },
      { name: "Gray", hex: "#808080" }
    ],
    tags: ["casual", "cotton", "summer"],
    featured: true,
    bestSeller: true,
    stock: 150,
    rating: 4.8,
    reviews: 125
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 59.99,
    originalPrice: 79.99,
    description: "Modern slim fit jeans crafted from high-quality stretch denim. Features a comfortable waistband and tapered leg for a contemporary silhouette.",
    category: "men",
    subcategory: "jeans",
    images: [
      "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg",
      "https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg",
      "https://images.pexels.com/photos/2901178/pexels-photo-2901178.jpeg"
    ],
    sizes: ["30", "32", "34", "36", "38"],
    colors: [
      { name: "Blue", hex: "#0000FF" },
      { name: "Dark Blue", hex: "#00008B" },
      { name: "Black", hex: "#000000" }
    ],
    tags: ["denim", "casual", "everyday"],
    featured: false,
    bestSeller: true,
    stock: 85,
    rating: 4.6,
    reviews: 78
  },
  {
    id: 3,
    name: "Floral Summer Dress",
    price: 49.99,
    originalPrice: 69.99,
    description: "A beautiful floral print dress perfect for summer days. Made from lightweight fabric with a flattering silhouette and comfortable fit.",
    category: "women",
    subcategory: "dresses",
    images: [
      "https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg",
      "https://images.pexels.com/photos/6311391/pexels-photo-6311391.jpeg",
      "https://images.pexels.com/photos/6311186/pexels-photo-6311186.jpeg"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Blue Floral", hex: "#7EC0EE" },
      { name: "Pink Floral", hex: "#FFC0CB" }
    ],
    tags: ["summer", "floral", "casual", "women"],
    featured: true,
    newArrival: true,
    stock: 42,
    rating: 4.9,
    reviews: 56
  },
  {
    id: 4,
    name: "Casual Hoodie",
    price: 39.99,
    originalPrice: 54.99,
    description: "Stay cozy and stylish with this casual hoodie. Features a soft inner lining, adjustable hood, and convenient front pocket.",
    category: "unisex",
    subcategory: "hoodies",
    images: [
      "https://images.pexels.com/photos/6311184/pexels-photo-6311184.jpeg",
      "https://images.pexels.com/photos/6311379/pexels-photo-6311379.jpeg",
      "https://images.pexels.com/photos/6311089/pexels-photo-6311089.jpeg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Gray", hex: "#808080" },
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#000080" },
      { name: "Red", hex: "#FF0000" }
    ],
    tags: ["hoodie", "casual", "comfortable", "winter"],
    featured: false,
    bestSeller: false,
    stock: 110,
    rating: 4.5,
    reviews: 32
  },
  {
    id: 5,
    name: "Leather Jacket",
    price: 129.99,
    originalPrice: 179.99,
    description: "Premium quality leather jacket with a modern design. Features a comfortable fit, durable construction, and multiple pockets.",
    category: "men",
    subcategory: "jackets",
    images: [
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
      "https://images.pexels.com/photos/4721136/pexels-photo-4721136.jpeg",
      "https://images.pexels.com/photos/7691455/pexels-photo-7691455.jpeg"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Brown", hex: "#964B00" },
      { name: "Black", hex: "#000000" }
    ],
    tags: ["leather", "outerwear", "winter", "premium"],
    featured: true,
    newArrival: false,
    stock: 25,
    rating: 4.9,
    reviews: 18
  },
  {
    id: 6,
    name: "Athletic Running Shoes",
    price: 89.99,
    originalPrice: 119.99,
    description: "High-performance running shoes designed for comfort and durability. Features responsive cushioning, breathable mesh upper, and superior traction.",
    category: "unisex",
    subcategory: "shoes",
    images: [
      "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg",
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
      "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg"
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: [
      { name: "White/Blue", hex: "#FFFFFF" },
      { name: "Black/Red", hex: "#000000" },
      { name: "Gray/Green", hex: "#808080" }
    ],
    tags: ["athletic", "running", "sports", "footwear"],
    featured: true,
    bestSeller: true,
    stock: 68,
    rating: 4.7,
    reviews: 94
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.newArrival);
};

export const getBestSellers = (): Product[] => {
  return products.filter(product => product.bestSeller);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};