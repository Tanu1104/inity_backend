import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const ShopTheLatest = () => {
  return (
    <section className="py-24 bg-[#0f1115]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-[#44d62c] font-mono text-sm uppercase tracking-[0.3em] mb-4">New Arrivals</p>
            <h3 className="text-5xl font-black italic uppercase tracking-tighter text-white">
              Shop the <span className="text-[#44d62c]">Latest</span>
            </h3>
            <p className="mt-6 text-zinc-400 leading-relaxed">
              Explore our newest collection of cutting-edge audio devices, designed for premium sound and comfort. Our latest range combines sleek design with powerful performance.
            </p>
          </div>
          <button className="text-white font-bold uppercase tracking-widest text-xs border-b-2 border-[#44d62c] pb-1 hover:text-[#44d62c] transition-colors">
            View All Products
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-12 gap-x-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopTheLatest;