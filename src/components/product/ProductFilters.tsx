import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

interface ProductFiltersProps {
  onFilterChange: (filters: Filters) => void;
  categories: string[];
  sizes: string[];
  onClearFilters: () => void;
}

export interface Filters {
  categories: string[];
  priceRange: [number, number];
  sizes: string[];
  colors: string[];
  sortBy: string;
}

const ProductFilters = ({ onFilterChange, categories, sizes, onClearFilters }: ProductFiltersProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('newest');
  
  const [openSections, setOpenSections] = useState({
    categories: true,
    price: true,
    sizes: true,
    colors: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections({
      ...openSections,
      [section]: !openSections[section],
    });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) => {
      const newCategories = prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category];
      
      applyFilters({ ...getFilters(), categories: newCategories });
      return newCategories;
    });
  };

  const handleSizeChange = (size: string) => {
    setSelectedSizes((prev) => {
      const newSizes = prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size];
      
      applyFilters({ ...getFilters(), sizes: newSizes });
      return newSizes;
    });
  };

  const handleColorChange = (color: string) => {
    setSelectedColors((prev) => {
      const newColors = prev.includes(color)
        ? prev.filter((c) => c !== color)
        : [...prev, color];
      
      applyFilters({ ...getFilters(), colors: newColors });
      return newColors;
    });
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    applyFilters({ ...getFilters(), sortBy: value });
  };

  const handlePriceChange = (min: number, max: number) => {
    setPriceRange([min, max]);
    applyFilters({ ...getFilters(), priceRange: [min, max] });
  };

  const getFilters = (): Filters => {
    return {
      categories: selectedCategories,
      priceRange,
      sizes: selectedSizes,
      colors: selectedColors,
      sortBy,
    };
  };

  const applyFilters = (filters: Filters) => {
    onFilterChange(filters);
  };

  const handleClearAll = () => {
    setSelectedCategories([]);
    setSelectedSizes([]);
    setPriceRange([0, 200]);
    setSelectedColors([]);
    setSortBy('newest');
    onClearFilters();
  };

  const colors = [
    { name: 'Black', hex: '#000000' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Red', hex: '#FF0000' },
    { name: 'Blue', hex: '#0000FF' },
    { name: 'Green', hex: '#008000' },
    { name: 'Yellow', hex: '#FFFF00' },
    { name: 'Brown', hex: '#A52A2A' },
    { name: 'Grey', hex: '#808080' },
  ];

  return (
    <div className="divide-y">
      {/* Sort By - Mobile */}
      <div className="md:hidden pb-4">
        <label htmlFor="mobile-sort" className="block text-sm font-medium mb-1">Sort By</label>
        <select
          id="mobile-sort"
          value={sortBy}
          onChange={(e) => handleSortChange(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="newest">Newest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>

      {/* Clear Filters */}
      <div className="py-4 flex justify-between items-center">
        <h3 className="font-semibold">Filters</h3>
        <button 
          onClick={handleClearAll}
          className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center"
        >
          <X size={16} className="mr-1" /> 
          Clear All
        </button>
      </div>

      {/* Categories */}
      <div className="py-4">
        <button 
          className="flex justify-between items-center w-full font-medium mb-2"
          onClick={() => toggleSection('categories')}
        >
          Categories
          {openSections.categories ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        
        {openSections.categories && (
          <div className="space-y-2 mt-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center">
                <input
                  type="checkbox"
                  id={`category-${category}`}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                />
                <label htmlFor={`category-${category}`} className="ml-2 text-sm capitalize">
                  {category}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="py-4">
        <button 
          className="flex justify-between items-center w-full font-medium mb-2"
          onClick={() => toggleSection('price')}
        >
          Price Range
          {openSections.price ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        
        {openSections.price && (
          <div className="mt-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">${priceRange[0]}</span>
              <span className="text-sm">${priceRange[1]}</span>
            </div>
            <input 
              type="range"
              min="0"
              max="200"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(priceRange[0], parseInt(e.target.value))}
              className="w-full"
            />
          </div>
        )}
      </div>

      {/* Sizes */}
      <div className="py-4">
        <button 
          className="flex justify-between items-center w-full font-medium mb-2"
          onClick={() => toggleSection('sizes')}
        >
          Sizes
          {openSections.sizes ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        
        {openSections.sizes && (
          <div className="flex flex-wrap gap-2 mt-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeChange(size)}
                className={`size-btn border px-3 py-1 text-sm rounded-md ${
                  selectedSizes.includes(size)
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white text-gray-800 hover:border-indigo-600'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Colors */}
      <div className="py-4">
        <button 
          className="flex justify-between items-center w-full font-medium mb-2"
          onClick={() => toggleSection('colors')}
        >
          Colors
          {openSections.colors ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        
        {openSections.colors && (
          <div className="flex flex-wrap gap-3 mt-2">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => handleColorChange(color.name)}
                className={`w-8 h-8 rounded-full border-2 hover:scale-110 transition-transform ${
                  selectedColors.includes(color.name) ? 'border-indigo-600 ring-2 ring-indigo-200' : 'border-gray-300'
                }`}
                style={{ 
                  backgroundColor: color.hex,
                  boxShadow: color.name === 'White' ? 'inset 0 0 0 1px #e5e7eb' : 'none',
                }}
                title={color.name}
              ></button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilters;