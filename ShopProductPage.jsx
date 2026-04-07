import React, { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function ShopProductsPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Logic to show only 4 or all products
  const displayedProducts = isExpanded 
    ? products 
    : products.slice(0, 4);

  return (
    <section className="section py-24 bg-[#011222] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <p className="section-subtitle text-center">Featured Gear</p>
        <h2 className="section-title text-center text-[#44d62c] italic uppercase">
          Shop Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard
                product={product}
                showButtons={true}
              />
            </div>
          ))}
        </div>

        {/* View All / View Less Toggle Button */}
        {products.length > 4 && (
          <div className="mt-16 flex justify-center animate-in" style={{ animationDelay: '400ms' }}>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="group relative px-10 py-3 bg-transparent border border-[#44d62c] rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(68,214,44,0.4)]"
            >
              <span className="relative z-10 text-[#44d62c] font-bold uppercase tracking-widest text-sm group-hover:text-black transition-colors duration-300">
                {isExpanded ? "View Less" : "View All Products"}
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