export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  subcategory?: string;
  images: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  tags?: string[];
  featured?: boolean;
  newArrival?: boolean;
  bestSeller?: boolean;
  stock: number;
  rating?: number;
  reviews?: number;
}