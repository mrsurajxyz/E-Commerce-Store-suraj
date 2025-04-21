import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Grid, LayoutGrid, List, SlidersHorizontal, X } from 'lucide-react';
import ProductGrid from '../components/product/ProductGrid';
import ProductFilters, { Filters } from '../components/product/ProductFilters';
import { products, getProductsByCategory } from '../data/products';
import { Product } from '../types/product';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortOption, setSortOption] = useState('newest');
  
  useEffect(() => {
    let result = [...products];
    
    if (categoryParam) {
      result = getProductsByCategory(categoryParam);
    }
    
    setFilteredProducts(result);
  }, [categoryParam]);
  
  const handleFilterChange = (filters: Filters) => {
    let filtered = [...products];
    
    // Filter by category
    if (filters.categories.length > 0) {
      filtered = filtered.filter((product) => 
        filters.categories.includes(product.category)
      );
    } else if (categoryParam) {
      filtered = filtered.filter((product) => 
        product.category === categoryParam
      );
    }
    
    // Filter by price range
    filtered = filtered.filter(
      (product) => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );
    
    // Filter by size
    if (filters.sizes.length > 0) {
      filtered = filtered.filter((product) =>
        product.sizes.some((size) => filters.sizes.includes(size))
      );
    }
    
    // Filter by color
    if (filters.colors.length > 0) {
      filtered = filtered.filter((product) =>
        product.colors.some((color) => filters.colors.includes(color.name))
      );
    }
    
    // Sort
    sortProducts(filtered, filters.sortBy);
    
    setFilteredProducts(filtered);
    setSortOption(filters.sortBy);
  };
  
  const sortProducts = (productsToSort: Product[], sortBy: string) => {
    switch (sortBy) {
      case 'price-low':
        return productsToSort.sort((a, b) => a.price - b.price);
      case 'price-high':
        return productsToSort.sort((a, b) => b.price - a.price);
      case 'popular':
        return productsToSort.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case 'newest':
      default:
        return productsToSort;
    }
  };
  
  const handleClearFilters = () => {
    if (categoryParam) {
      setFilteredProducts(getProductsByCategory(categoryParam));
    } else {
      setFilteredProducts(products);
    }
    setSortOption('newest');
  };
  
  const handleSort = (option: string) => {
    setSortOption(option);
    const sorted = [...filteredProducts];
    sortProducts(sorted, option);
    setFilteredProducts(sorted);
  };
  
  // Get unique categories and sizes for filters
  const categories = [...new Set(products.map((product) => product.category))];
  const sizes = [...new Set(products.flatMap((product) => product.sizes))];
  
  return (
    <div className="bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {categoryParam ? `${categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)} Collection` : 'All Products'}
          </h1>
          <p className="text-gray-600">
            Showing {filteredProducts.length} results
          </p>
        </div>
        
        {/* Product Listing */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <ProductFilters 
              onFilterChange={handleFilterChange}
              categories={categories}
              sizes={sizes}
              onClearFilters={handleClearFilters}
            />
          </div>
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-4 flex justify-between items-center">
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center text-gray-700 bg-white px-4 py-2 rounded-md shadow-sm"
            >
              <Filter size={18} className="mr-2" />
              Filters
            </button>
            
            <div className="flex items-center space-x-2 bg-white px-2 py-1 rounded-md shadow-sm">
              <button 
                onClick={() => setViewMode('grid')} 
                className={`p-1 rounded ${viewMode === 'grid' ? 'bg-gray-200' : ''}`}
              >
                <Grid size={18} />
              </button>
              <button 
                onClick={() => setViewMode('list')} 
                className={`p-1 rounded ${viewMode === 'list' ? 'bg-gray-200' : ''}`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
          
          {/* Products */}
          <div className="flex-grow">
            {/* Sort - Desktop */}
            <div className="hidden md:flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">View:</span>
                <button 
                  onClick={() => setViewMode('grid')} 
                  className={`p-1 rounded ${viewMode === 'grid' ? 'bg-gray-200' : ''}`}
                >
                  <LayoutGrid size={18} />
                </button>
                <button 
                  onClick={() => setViewMode('list')} 
                  className={`p-1 rounded ${viewMode === 'list' ? 'bg-gray-200' : ''}`}
                >
                  <List size={18} />
                </button>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-gray-700">Sort by:</span>
                <select
                  value={sortOption}
                  onChange={(e) => handleSort(e.target.value)}
                  className="border rounded-md px-3 py-1"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
            </div>
            
            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters to find what you're looking for.</p>
                <button 
                  onClick={handleClearFilters}
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile Filter Drawer */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
          isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsFilterOpen(false)}
      >
        <div 
          className={`absolute right-0 top-0 bottom-0 w-80 bg-white transform transition-transform duration-300 ${
            isFilterOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="font-semibold text-lg flex items-center">
              <SlidersHorizontal size={18} className="mr-2" /> Filters
            </h3>
            <button onClick={() => setIsFilterOpen(false)}>
              <X size={24} />
            </button>
          </div>
          
          <div className="p-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 60px)' }}>
            <ProductFilters 
              onFilterChange={handleFilterChange}
              categories={categories}
              sizes={sizes}
              onClearFilters={handleClearFilters}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;