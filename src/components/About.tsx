import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About StyleHub
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Redefining fashion through sustainability and style
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-gray-500">
                At StyleHub, we believe that fashion should be accessible, sustainable, and expressive. 
                We curate contemporary clothing that helps you tell your unique story while maintaining 
                our commitment to quality and environmental responsibility.
              </p>
            </div>

            <div className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
              <p className="text-gray-500">
                Founded in 2023, StyleHub emerged from a simple vision: to create a shopping 
                experience that combines style, sustainability, and convenience. We carefully 
                select each piece in our collection to ensure it meets our standards for both 
                quality and conscious manufacturing.
              </p>
            </div>

            <div className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">What Sets Us Apart</h2>
              <ul className="space-y-4 text-gray-500">
                <li className="flex items-start">
                  <span className="h-6 flex items-center sm:h-7">
                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="ml-2">Curated Collections: Thoughtfully selected pieces for every style</p>
                </li>
                <li className="flex items-start">
                  <span className="h-6 flex items-center sm:h-7">
                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="ml-2">Sustainable Practices: Eco-friendly packaging and responsible sourcing</p>
                </li>
                <li className="flex items-start">
                  <span className="h-6 flex items-center sm:h-7">
                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="ml-2">Quality Assurance: Rigorous quality checks on all our products</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;