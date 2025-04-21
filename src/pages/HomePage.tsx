import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import PromoSection from '../components/home/PromoSection';
import NewsletterSection from '../components/home/NewsletterSection';
import { getFeaturedProducts, getNewArrivals, getBestSellers } from '../data/products';

const HomePage = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  const bestSellers = getBestSellers();
  
  return (
    <div>
      <HeroSection />
      
      <FeaturedProducts title="Featured Products" products={featuredProducts} />
      
      <PromoSection />
      
      <FeaturedProducts title="New Arrivals" products={newArrivals} />
      
      <FeaturedProducts title="Best Sellers" products={bestSellers} />
      
      <NewsletterSection />
    </div>
  );
};

export default HomePage;