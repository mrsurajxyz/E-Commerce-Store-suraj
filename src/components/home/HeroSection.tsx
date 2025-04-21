import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative pt-20">
      <div className="w-full h-[80vh] bg-cover bg-center relative overflow-hidden" 
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                New Summer Collection
              </h1>
              <p className="text-lg text-gray-200 mb-8">
                Discover our latest collection designed to keep you stylish and comfortable all summer long.
              </p>
              <div className="flex space-x-4">
                <Link 
                  to="/products" 
                  className="bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium"
                >
                  Shop Now
                </Link>
                <Link 
                  to="/products?category=new" 
                  className="bg-transparent border border-white text-white px-6 py-3 rounded-md hover:bg-white/10 transition-colors font-medium"
                >
                  New Arrivals
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Highlight */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard 
            title="Men's Collection" 
            image="https://images.pexels.com/photos/31733400/pexels-photo-31733400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            link="/products?category=men"
          />
          <CategoryCard 
            title="Women's Collection" 
            image="https://images.pexels.com/photos/31733733/pexels-photo-31733733.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            link="/products?category=women"
          />
          <CategoryCard 
            title="Accessories" 
            image="https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg"
            link="/products?category=accessories"
          />
        </div>
      </div>
    </div>
  );
};

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
}

const CategoryCard = ({ title, image, link }: CategoryCardProps) => {
  return (
    <Link 
      to={link}
      className="block group overflow-hidden rounded-lg shadow-xl bg-white"
    >
      <div className="relative h-64 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <span className="text-gray-300 group-hover:text-white transition-colors flex items-center">
              Explore Collection
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HeroSection;