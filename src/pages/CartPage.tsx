import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();
  
  if (cartItems.length === 0) {
    return (
      <div className="pt-24 pb-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
          <div className="bg-white rounded-lg shadow-sm p-10 text-center">
            <div className="flex justify-center mb-6">
              <ShoppingBag size={64} className="text-gray-300" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Link 
              to="/products" 
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">Items ({cartItems.length})</h2>
              </div>
              
              <div>
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.size}-${item.color}`} className="border-b last:border-b-0">
                    <div className="flex p-4 md:p-6">
                      {/* Product Image */}
                      <Link to={`/products/${item.id}`} className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-md overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </Link>
                      
                      {/* Product Details */}
                      <div className="ml-4 flex-grow">
                        <div className="flex flex-wrap justify-between mb-2">
                          <Link to={`/products/${item.id}`} className="font-medium hover:text-indigo-600 transition-colors">
                            {item.name}
                          </Link>
                          <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                        
                        <div className="text-sm text-gray-600 mb-3">
                          <p>Size: {item.size}</p>
                          <p>Color: {item.color}</p>
                          <p>Price: ${item.price.toFixed(2)}</p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <button
                              className="p-1 rounded-md hover:bg-gray-100 transition-colors"
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="px-3">{item.quantity}</span>
                            <button
                              className="p-1 rounded-md hover:bg-gray-100 transition-colors"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="border-b pb-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              
              <div className="py-4 border-b">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Estimated Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="pt-6 space-y-4">
                <Link 
                  to="/checkout" 
                  className="w-full block bg-indigo-600 text-white text-center px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium"
                >
                  Proceed to Checkout
                </Link>
                
                <Link 
                  to="/products" 
                  className="w-full block text-indigo-600 text-center px-6 py-3 rounded-md border border-indigo-600 hover:bg-indigo-50 transition-colors font-medium flex items-center justify-center"
                >
                  Continue Shopping
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
              
              <div className="mt-6">
                <h3 className="font-medium mb-2">We Accept</h3>
                <div className="flex space-x-2">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/196/196578.png" 
                    alt="Visa" 
                    className="h-8 w-auto" 
                  />
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/196/196561.png" 
                    alt="Mastercard" 
                    className="h-8 w-auto" 
                  />
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/196/196565.png" 
                    alt="PayPal" 
                    className="h-8 w-auto" 
                  />
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/196/196539.png" 
                    alt="Apple Pay" 
                    className="h-8 w-auto" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;