import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would integrate with a newsletter service here
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-20 bg-indigo-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Mail size={40} className="mx-auto mb-5" />
          <h2 className="text-3xl font-bold mb-3">Subscribe to Our Newsletter</h2>
          <p className="text-indigo-100 mb-8">
            Join our community and be the first to know about new products, exclusive offers, and style tips.
          </p>
          
          {isSubmitted ? (
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Thank you for subscribing!</h3>
              <p className="text-indigo-100">
                You've been added to our newsletter list. Watch your inbox for exclusive offers.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md flex-grow text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="bg-white text-indigo-600 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          )}
          
          <p className="text-indigo-200 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;