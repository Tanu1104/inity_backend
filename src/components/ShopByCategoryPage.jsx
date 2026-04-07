import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../data/categories";

const CategoryCard = ({ cat, index }) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  const handleBuyNow = (e) => {
    e.stopPropagation();
    // Navigate straight to the checkout page
    navigate("/checkout");
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    // Logic for adding to cart goes here
    console.log(`${cat.name} added to cart`);
    navigate("/cart");
  };

  return (
    <div 
      className="text-center group cursor-pointer animate-in" 
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden rounded-xl">
        {/* Image Container */}
        <div className="image-inner aspect-[3/4] flex items-center justify-center bg-zinc-900">
          <img
            src={cat.icon}
            alt={cat.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Wishlist Button */}
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

        {/* Action Overlay (Slides up on Hover) */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
          <div className="flex flex-col gap-2">
            <button 
              onClick={handleAddToCart}
              className="w-full py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-white hover:text-black transition-all"
            >
              Add to Cart
            </button>
            <button 
              onClick={handleBuyNow}
              className="w-full py-2.5 bg-[#44d62c] text-black text-xs font-black uppercase tracking-widest rounded-lg hover:bg-white transition-all shadow-lg shadow-[#44d62c]/20"
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* Dark Gradient bottom overlay for button readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      <h4 className="mt-4 text-lg font-bold uppercase tracking-wider group-hover:text-[#44d62c] transition-colors">
        {cat.name}
      </h4>
    </div>
  );
};

export default function ShopByCategoryPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredCategories = categories.filter(
    (cat) => cat.section === "category"
  );

  const displayedCategories = isExpanded 
    ? filteredCategories 
    : filteredCategories.slice(0, 4);

  return (
    <section className="section py-24 bg-[#011222]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="section-subtitle text-center">Premium Selection</p>
        <h2 className="section-title text-center text-white italic uppercase">
          Shop by <span className="text-[#44d62c]">Category</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedCategories.map((cat, index) => (
            <CategoryCard key={cat.id} cat={cat} index={index} />
          ))}
        </div>

        {filteredCategories.length > 4 && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="group relative px-10 py-3 bg-transparent border border-[#44d62c] rounded-full overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10 text-[#44d62c] font-bold uppercase tracking-widest text-sm group-hover:text-black transition-colors duration-300">
                {isExpanded ? "View Less" : "View All Categories"}
              </span>
              <div 
                className={`absolute inset-0 bg-[#44d62c] transition-transform duration-300 origin-left ${
                  isExpanded ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}