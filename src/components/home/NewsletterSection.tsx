import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-6 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our Fashion Community
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter and get exclusive offers, early access to new collections, and style inspiration delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-black transition-colors"
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-900 transition-colors"
                type="submit"
              >
                Subscribe
              </motion.button>
            </div>
          </form>

          <p className="text-sm text-gray-500 mt-6">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>

          <div className="mt-12 flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">50k+</div>
              <div className="text-gray-600">Happy Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">100+</div>
              <div className="text-gray-600">New Styles Monthly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-gray-600">Style Updates</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsletterSection;