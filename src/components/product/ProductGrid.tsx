import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import { ShoppingBag, Heart } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: product.sizes[0],
      color: product.colors[0].name,
      quantity: 1
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div 
          key={product.id} 
          className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow"
        >
          {/* Sale/New Tag */}
          {product.originalPrice && (
            <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              SALE
            </div>
          )}
          {product.newArrival && (
            <div className="absolute top-4 left-4 z-10 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </div>
          )}
          
          {/* Product Image */}
          <Link to={`/products/${product.id}`} className="block relative h-64 overflow-hidden">
            <img 
              src={product.images[0]} 
              alt={product.name} 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Quick Action Buttons */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-3">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  handleAddToCart(product);
                }}
                className="bg-white text-gray-900 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors"
                title="Add to Cart"
              >
                <ShoppingBag size={18} />
              </button>
              <button 
                className="bg-white text-gray-900 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors"
                title="Add to Wishlist"
              >
                <Heart size={18} />
              </button>
            </div>
          </Link>
          
          {/* Product Info */}
          <div className="p-4">
            <h3 className="text-lg font-medium mb-1">
              <Link to={`/products/${product.id}`} className="hover:text-indigo-600 transition-colors">
                {product.name}
              </Link>
            </h3>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                {product.originalPrice ? (
                  <>
                    <span className="text-red-600 font-semibold">${product.price.toFixed(2)}</span>
                    <span className="text-gray-500 text-sm line-through">${product.originalPrice.toFixed(2)}</span>
                  </>
                ) : (
                  <span className="font-semibold">${product.price.toFixed(2)}</span>
                )}
              </div>
              
              {product.rating && (
                <div className="flex items-center">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1 text-sm text-gray-700">{product.rating}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;