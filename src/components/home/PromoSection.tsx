import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PromoSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {/* First Promo Card */}
          <div className="relative h-[500px] overflow-hidden rounded-3xl group">
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-out"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/31733733/pexels-photo-31733733.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-300">
              <div className="absolute bottom-0 p-10 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <span className="inline-block bg-white text-black px-4 py-2 rounded-full text-sm font-medium mb-6">New Collection</span>
                  <h3 className="text-4xl font-bold text-white mb-4">Summer Essentials</h3>
                  <p className="text-gray-200 mb-8 max-w-md text-lg">
                    Discover our curated collection of premium summer pieces designed for your comfort and style.
                  </p>
                  <Link 
                    to="/collection/summer"
                    className="bg-white text-black px-8 py-4 rounded-full inline-flex items-center group/btn hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Explore Collection
                    <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Second Promo Card */}
          <div className="relative h-[500px] overflow-hidden rounded-3xl group">
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-out"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/31733400/pexels-photo-31733400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-300">
              <div className="absolute bottom-0 p-10 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <span className="inline-block bg-white text-black px-4 py-2 rounded-full text-sm font-medium mb-6">Limited Time</span>
                  <h3 className="text-4xl font-bold text-white mb-4">Summer Sale</h3>
                  <p className="text-gray-200 mb-8 max-w-md text-lg">
                    Up to 40% off on selected summer styles. Don't miss out on these amazing deals.
                  </p>
                  <Link 
                    to="/sale"
                    className="bg-white text-black px-8 py-4 rounded-full inline-flex items-center group/btn hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Shop Sale
                    <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoSection;