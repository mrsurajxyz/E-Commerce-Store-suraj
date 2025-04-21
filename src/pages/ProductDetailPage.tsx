import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Heart, Share2, TruckIcon, Package2, RefreshCw, Star } from 'lucide-react';
import { getProductById } from '../data/products';
import { useCart } from '../contexts/CartContext';
import ProductGallery from '../components/product/ProductGallery';
import { Product } from '../types/product';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<{ name: string; hex: string } | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedSize(foundProduct.sizes[0]);
        setSelectedColor(foundProduct.colors[0]);
      }
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product && selectedSize && selectedColor) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: selectedSize,
        color: selectedColor.name,
        quantity,
      });
      
      setIsAddedToCart(true);
      setTimeout(() => {
        setIsAddedToCart(false);
      }, 3000);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  if (!product) {
    return (
      <div className="pt-24 pb-10 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/products" 
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="pt-24 pb-10">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <nav className="text-sm">
            <ol className="flex flex-wrap items-center">
              <li className="flex items-center">
                <Link to="/" className="text-gray-500 hover:text-indigo-600">Home</Link>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li className="flex items-center">
                <Link to="/products" className="text-gray-500 hover:text-indigo-600">Products</Link>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li className="flex items-center">
                <Link to={`/products?category=${product.category}`} className="text-gray-500 hover:text-indigo-600 capitalize">
                  {product.category}
                </Link>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li className="text-gray-700 truncate max-w-[200px]">{product.name}</li>
            </ol>
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Images */}
          <div>
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            {/* Rating */}
            {product.rating && (
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            )}
            
            {/* Price */}
            <div className="mb-6">
              {product.originalPrice ? (
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-red-600 mr-2">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-lg text-gray-500 line-through mr-2">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="bg-red-100 text-red-700 text-sm font-medium px-2 py-0.5 rounded">
                    {discountPercentage}% OFF
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
            
            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>
            
            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Color: {selectedColor?.name}</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    className={`w-10 h-10 rounded-full border-2 hover:scale-110 transition-transform ${
                      selectedColor?.name === color.name ? 'border-indigo-600 ring-2 ring-indigo-200' : 'border-gray-300'
                    }`}
                    style={{ 
                      backgroundColor: color.hex,
                      boxShadow: color.name === 'White' ? 'inset 0 0 0 1px #e5e7eb' : 'none',
                    }}
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Select ${color.name} color`}
                  ></button>
                ))}
              </div>
            </div>
            
            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium">Size: {selectedSize}</h3>
                <button className="text-indigo-600 text-sm hover:text-indigo-800">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 border rounded-md text-sm ${
                      selectedSize === size
                        ? 'border-indigo-600 bg-indigo-600 text-white'
                        : 'border-gray-300 hover:border-indigo-600'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity & Add to Cart */}
            <div className="mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex border border-gray-300 rounded-md">
                  <button
                    className="px-3 py-2 border-r border-gray-300 hover:bg-gray-100"
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="w-12 px-2 py-2 text-center focus:outline-none"
                    value={quantity}
                    readOnly
                  />
                  <button
                    className="px-3 py-2 border-l border-gray-300 hover:bg-gray-100"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  className={`flex-grow flex items-center justify-center px-6 py-3 rounded-md font-medium transition-colors ${
                    isAddedToCart
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}
                >
                  {isAddedToCart ? (
                    <>
                      Added to Cart ✓
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={18} className="mr-2" />
                      Add to Cart
                    </>
                  )}
                </button>
                
                <button
                  className="p-3 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Heart size={20} />
                </button>
              </div>
            </div>
            
            {/* Additional Info */}
            <div className="border-t pt-6 space-y-4">
              <div className="flex items-start">
                <TruckIcon size={20} className="flex-shrink-0 mr-3 text-gray-600" />
                <div>
                  <h4 className="font-medium">Free Shipping</h4>
                  <p className="text-sm text-gray-600">Free shipping on orders over $75</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Package2 size={20} className="flex-shrink-0 mr-3 text-gray-600" />
                <div>
                  <h4 className="font-medium">Secure Packaging</h4>
                  <p className="text-sm text-gray-600">Your items will be carefully packaged</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <RefreshCw size={20} className="flex-shrink-0 mr-3 text-gray-600" />
                <div>
                  <h4 className="font-medium">30-Day Returns</h4>
                  <p className="text-sm text-gray-600">Shop with confidence</p>
                </div>
              </div>
              
              <div className="mt-6 flex items-center space-x-4">
                <button className="text-gray-600 hover:text-indigo-600 flex items-center text-sm">
                  <Share2 size={16} className="mr-1" /> Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;