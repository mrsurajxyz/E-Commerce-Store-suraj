import React from 'react';
import { Heart, Trash2, ShoppingCart } from 'lucide-react';

const WishlistPage: React.FC = () => {
  // Mock wishlist data - in a real app, this would come from a context or API
  const wishlistItems = [
    // This would be populated from WishlistContext in a real implementation
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-2">My Wishlist</h1>
      <p className="text-gray-600 mb-8">Items you've saved for later</p>
      
      {wishlistItems.length > 0 ? (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {wishlistItems.map((item) => (
              <li key={item.id} className="p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {/* This would render actual wishlist items */}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-lg shadow">
          <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">Save items you love by clicking the heart icon on any product</p>
          <a 
            href="/products" 
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Browse Products
          </a>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;