import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  title: string;
  subtitle: string;
  image: string;
}

const HeroSection = () => {
  return (
    <div className="relative bg-white">
      <div className="relative min-h-screen overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at center, #000 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="container mx-auto px-8 pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="inline-block bg-rose-100 px-6 py-2 rounded-xl mb-8"
              >
                <span className="text-rose-600 font-medium tracking-wider">
                  NEW ARRIVALS • UP TO 40% OFF
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-7xl md:text-8xl font-bold text-gray-900 mb-8 leading-none"
              >
                Style That <br />
                <span className="text-rose-600">Speaks</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-xl text-gray-600 mb-12 leading-relaxed max-w-xl"
              >
                Explore our latest collection featuring premium designs and exclusive offers. Shop now and transform your wardrobe.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="flex flex-wrap gap-6"
              >
                <Link
                  to="/collection"
                  className="group bg-rose-600 text-white px-12 py-5 rounded-xl hover:bg-rose-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-lg font-medium flex items-center"
                >
                  Shop Now
                  <motion.span className="ml-2 group-hover:translate-x-2 transition-transform">→</motion.span>
                </Link>
                <Link
                  to="/lookbook"
                  className="group bg-gray-100 text-gray-900 px-12 py-5 rounded-xl hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1 text-lg font-medium flex items-center"
                >
                  View Lookbook
                  <motion.span className="ml-2 group-hover:translate-x-2 transition-transform">→</motion.span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Image Grid Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative h-[700px] hidden lg:grid grid-cols-2 gap-6"
            >
              <div className="space-y-6">
                <motion.div
                  className="h-[330px] rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={categories[0].image} 
                    alt="Fashion" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="h-[330px] rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={categories[1].image} 
                    alt="Fashion" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <motion.div
                className="h-full rounded-2xl overflow-hidden mt-12"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={categories[2].image} 
                  alt="Fashion" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="container mx-auto px-8 py-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 text-white"
          >
            Shop by Category
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <CategoryCard {...category} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const categories = [
  {
    title: "Men's Collection",
    subtitle: "Spring 2024",
    image: "https://images.pexels.com/photos/31733400/pexels-photo-31733400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Women's Collection",
    subtitle: "New Arrivals",
    image: "https://images.pexels.com/photos/31733733/pexels-photo-31733733.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  },
  {
    title: "Accessories",
    subtitle: "Complete Your Look",
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg"
  }
];

const CategoryCard: React.FC<CategoryCardProps> = ({ title, subtitle, image }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl transform-gpu hover:scale-105 transition-transform duration-300">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-300">
          <div className="absolute bottom-0 p-8 w-full">
            <p className="text-gray-300 mb-2 font-light">{subtitle}</p>
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <span className="inline-flex items-center text-white text-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              Discover More
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;