import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">MR.SURAJ YADAV</h2>
            <p className="text-gray-400 mb-5">
              Premium clothing for the modern individual. Quality materials, timeless designs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-indigo-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-indigo-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-indigo-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shopping</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=men" className="text-gray-400 hover:text-white transition-colors">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link to="/products?category=women" className="text-gray-400 hover:text-white transition-colors">
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link to="/products?category=unisex" className="text-gray-400 hover:text-white transition-colors">
                  Unisex
                </Link>
              </li>
              <li>
                <Link to="/products?tag=new" className="text-gray-400 hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/sales" className="text-gray-400 hover:text-white transition-colors">
                  Mr.Suraj yadav
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-3">
              Subscribe to our newsletter for the latest products and offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-l-md w-full text-gray-800 focus:outline-none"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 transition-colors px-4 py-2 rounded-r-md flex items-center">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} MR.SURAJXYZ. All rights reserved.
            </p>
            <div className="flex space-x-5 mt-4 md:mt-0">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/196/196578.png" 
                alt="Visa" 
                className="h-6 w-auto" 
              />
              <img 
                src="https://cdn-icons-png.flaticon.com/512/196/196561.png" 
                alt="Mastercard" 
                className="h-6 w-auto" 
              />
              <img 
                src="https://cdn-icons-png.flaticon.com/512/196/196565.png" 
                alt="PayPal" 
                className="h-6 w-auto" 
              />
              <img 
                src="https://cdn-icons-png.flaticon.com/512/196/196539.png" 
                alt="Apple Pay" 
                className="h-6 w-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;