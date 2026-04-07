import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../data/categories";

const CategoryCard = ({ cat, index }) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  const handleBuyNow = (e) => {
    e.stopPropagation();
    // In a real app, you'd add to cart context first
    navigate("/checkout");
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    // Trigger your cart logic here
    alert(`${cat.name} added to cart!`);
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

        {/* Top Actions (Wishlist) */}
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

        {/* Bottom Actions (Buy/Cart Overlay) */}
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
              className="w-full py-2.5 bg-[#44d62c] text-black text-xs font-black uppercase tracking-widest rounded-lg hover:bg-white transition-all shadow-lg"
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* Subtle Dark Gradient for better button visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <h4 className="mt-4 text-lg font-bold uppercase tracking-widest group-hover:text-[#44d62c] transition-colors">
        {cat.name}
      </h4>
    </div>
  );
};

export default function ExploreCategories() {
  const [showAll, setShowAll] = useState(false);
  
  const filteredCategories = categories.filter(
    (cat) => cat.section === "explore"
  );

  const visibleCategories = showAll ? filteredCategories : filteredCategories.slice(0, 4);

  return (
    <section className="py-24 bg-[#0f1115]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-[#44d62c] font-mono text-sm uppercase tracking-widest mb-2">Discover the Collection</p>
          <h2 className="text-4xl md:text-5xl font-black italic uppercase text-white tracking-tighter">
            Explore Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleCategories.map((cat, index) => (
            <CategoryCard key={cat.id} cat={cat} index={index} />
          ))}
        </div>

        {filteredCategories.length > 4 && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="px-10 py-3 border-2 border-zinc-800 text-white font-bold uppercase tracking-widest text-sm hover:border-[#44d62c] hover:text-[#44d62c] transition-all rounded-full"
            >
              {showAll ? "View Less" : "View All Categories"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}