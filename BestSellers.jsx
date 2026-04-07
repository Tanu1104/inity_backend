import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const BestSellers = () => {
  const bestSellers = products.slice(0, 5);

  return (
    <section className="py-24 px-6 lg:px-20">
      <div className="text-center mb-16">
        <h3 className="text-4xl font-black italic mb-4">
          Best Sellers
        </h3>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          Check out our most popular products, loved by customers worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
