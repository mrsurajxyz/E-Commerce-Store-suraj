import React from 'react';
import { Link } from 'react-router-dom';

const PromoSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Promo Card */}
          <div className="relative h-96 overflow-hidden rounded-lg group">
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/31733400/pexels-photo-31733400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/70 to-transparent flex items-center">
              <div className="p-8">
                <span className="inline-block bg-white text-gray-900 px-3 py-1 text-sm font-medium mb-4">Limited Time</span>
                <h3 className="text-3xl font-bold text-white mb-3">Seasonal Collection</h3>
                <p className="text-gray-200 mb-6 max-w-xs">
                  Explore our latest seasonal arrivals with premium styles for all occasions.
                </p>
                <Link 
                  to="/products?category=seasonal" 
                  className="bg-white text-gray-900 px-5 py-2 rounded inline-block hover:bg-gray-200 transition-colors font-medium"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right Promo Card */}
          <div className="relative h-96 overflow-hidden rounded-lg group">
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/31733733/pexels-photo-31733733.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/70 to-transparent flex items-center">
              <div className="p-8">
                <span className="inline-block bg-white text-gray-900 px-3 py-1 text-sm font-medium mb-4">Up to 30% Off</span>
                <h3 className="text-3xl font-bold text-white mb-3">Summer Sale</h3>
                <p className="text-gray-200 mb-6 max-w-xs">
                  Get amazing discounts on our summer collection for a limited time.
                </p>
                <Link 
                  to="/products?discount=true" 
                  className="bg-white text-gray-900 px-5 py-2 rounded inline-block hover:bg-gray-200 transition-colors font-medium"
                >
                  View Offers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;