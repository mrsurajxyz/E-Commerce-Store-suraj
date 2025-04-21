import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            SURAJXYZ
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <Link to="/products" className="font-medium hover:text-indigo-600 transition-colors">
              Shop
            </Link>
            <div className="relative group">
              <span className="font-medium cursor-pointer hover:text-indigo-600 transition-colors">
                Categories
              </span>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-xl rounded-md overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-200 origin-top-left">
                <Link to="/products?category=men" className="block px-4 py-2 hover:bg-gray-100">
                  Men
                </Link>
                <Link to="/products?category=women" className="block px-4 py-2 hover:bg-gray-100">
                  Women
                </Link>
                <Link to="/products?category=unisex" className="block px-4 py-2 hover:bg-gray-100">
                  Unisex
                </Link>
              </div>
            </div>
            <Link to="/about" className="font-medium hover:text-indigo-600 transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="font-medium hover:text-indigo-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-5">
            <Link to="/account" className="hover:text-indigo-600 transition-colors">
              <User size={20} />
            </Link>
            <Link to="/wishlist" className="hover:text-indigo-600 transition-colors">
              <Heart size={20} />
            </Link>
            <Link to="/cart" className="relative hover:text-indigo-600 transition-colors">
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            <button 
              className="md:hidden hover:text-indigo-600 transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 md:hidden`}
        style={{ top: '60px' }}
      >
        <nav className="flex flex-col p-5 space-y-5">
          <Link to="/" className="text-lg font-medium">
            Home
          </Link>
          <Link to="/products" className="text-lg font-medium">
            Shop
          </Link>
          <div>
            <h3 className="text-lg font-medium mb-2">Categories</h3>
            <div className="ml-4 space-y-2">
              <Link to="/products?category=men" className="block">
                Men
              </Link>
              <Link to="/products?category=women" className="block">
                Women
              </Link>
              <Link to="/products?category=unisex" className="block">
                Unisex
              </Link>
            </div>
          </div>
          <Link to="/about" className="text-lg font-medium">
            About Us
          </Link>
          <Link to="/contact" className="text-lg font-medium">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;