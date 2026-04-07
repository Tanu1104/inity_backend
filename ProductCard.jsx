import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, showButtons = true }) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  const handleBuyNow = (e) => {
    e.stopPropagation();
    // Immediate checkout path
    navigate('/checkout');
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    // Cart path or context logic
    navigate('/cart');
  };

  return (
    <div className="text-center group cursor-pointer animate-in fade-in duration-500">
      <div className="relative">
        {/* Product Image Container */}
        <div className="image-inner aspect-square rounded-xl overflow-hidden flex items-center justify-center bg-zinc-900 border border-zinc-800">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Wishlist Button (Standard across all cards) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 z-20 bg-black/40 backdrop-blur-md p-2 rounded-full 
                     opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 border border-white/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isLiked ? "#44d62c" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={isLiked ? "#44d62c" : "white"}
            className="w-5 h-5 transition-colors duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        {/* Action Buttons Overlay */}
        {showButtons && (
          <>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4 rounded-xl">
              <button 
                onClick={handleBuyNow}
                className="w-full bg-[#44d62c] text-black font-black text-xs uppercase tracking-widest py-3 rounded-lg hover:bg-white transition-colors duration-300"
              >
                Buy Now
              </button>
              <button 
                onClick={handleAddToCart}
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-xs uppercase tracking-widest py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
            {/* Bottom Gradient for extra contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
          </>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-4 px-2">
        <h4 className="text-sm font-bold uppercase tracking-tight group-hover:text-[#44d62c] transition-colors truncate">
          {product.name}
        </h4>
        <div className="flex justify-center items-center gap-3 mt-1">
           <p className="font-mono text-[#44d62c] font-bold">₹{product.price}</p>
           {product.oldPrice && (
             <p className="text-zinc-500 line-through text-xs font-mono">₹{product.oldPrice}</p>
           )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;