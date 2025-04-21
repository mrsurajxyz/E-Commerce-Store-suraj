import React, { useState } from 'react';
import { User, Settings, ShoppingBag, Heart, LogOut } from 'lucide-react';

const AccountPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  // Mock user data - in a real app, this would come from authentication context or API
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joined: 'January 2023'
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center space-x-4 mb-6 p-2">
              <div className="bg-blue-100 rounded-full p-3">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="font-medium">{userData.name}</p>
                <p className="text-sm text-gray-500">{userData.email}</p>
              </div>
            </div>
            
            <nav className="space-y-1">
              <button 
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md text-left ${
                  activeTab === 'profile' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'
                }`}
              >
                <User className="h-5 w-5" />
                <span>Profile</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md text-left ${
                  activeTab === 'orders' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'
                }`}
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Orders</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('wishlist')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md text-left ${
                  activeTab === 'wishlist' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'
                }`}
              >
                <Heart className="h-5 w-5" />
                <span>Wishlist</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md text-left ${
                  activeTab === 'settings' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'
                }`}
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </button>
              
              <button 
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-md text-left hover:bg-red-50 text-red-600"
              >
                <LogOut className="h-5 w-5" />
                <span>Log out</span>
              </button>
            </nav>
          </div>
        </div>
        
        {/* Main content */}
        <div className="w-full md:w-3/4">
          <div className="bg-white rounded-lg shadow p-6">
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input 
                      type="text" 
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                      defaultValue={userData.name}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                      defaultValue={userData.email}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input 
                      type="tel" 
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                    />
                  </div>
                  <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
                    Save Changes
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'orders' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Order History</h2>
                <p className="text-gray-500">You haven't placed any orders yet.</p>
              </div>
            )}
            
            {activeTab === 'wishlist' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Wishlist</h2>
                <p className="text-gray-500">Your wishlist is empty.</p>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Password</h3>
                    <button className="text-blue-600 hover:text-blue-800">Change Password</button>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Notifications</h3>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="email-notifications" 
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        defaultChecked
                      />
                      <label htmlFor="email-notifications" className="ml-2 block text-sm text-gray-700">
                        Receive email notifications
                      </label>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Delete Account</h3>
                    <button className="text-red-600 hover:text-red-800">Delete my account</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;