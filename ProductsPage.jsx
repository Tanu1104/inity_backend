import React from "react";
import { products } from "../data/products";
import { categories } from "../data/categories";

function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    (acc[item[key]] = acc[item[key]] || []).push(item);
    return acc;
  }, {});
}

// helper: pick a category image for a product type (prefer section 'shop' then 'category' then fallback)
function imageForType(type) {
  const byShop = categories.find((c) => c.type === type && c.section === "shop");
  if (byShop) return byShop.icon;
  const byCat = categories.find((c) => c.type === type && c.section === "category");
  if (byCat) return byCat.icon;
  const byExplore = categories.find((c) => c.type === type && c.section === "explore");
  return byExplore ? byExplore.icon : null;
}

export default function ProductsPage() {
  const groups = groupBy(products, "type");

  return (
    <main className="py-12 px-4 sm:px-8 lg:px-20">
      {Object.keys(groups).map((type) => (
        <section key={type} className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight">
              THE {type.replace(/s$/i, "").toUpperCase()} LINE
            </h2>
            <p className="text-sm text-zinc-400 mt-3 max-w-2xl mx-auto">
              Wireless multi-platform {type} for everyday and pro use.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {groups[type].map((product, i) => {
              const img = imageForType(product.type) || product.image;
              return (
                <article
                  key={product.id}
                  className="product-card animate-in bg-[#0b0b0c] p-6 rounded-xl text-left relative overflow-hidden"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  <div className="w-full flex items-center justify-center min-h-[160px]">
                    <div className="w-[70%] sm:w-[60%] md:w-[55%] lg:w-[45%] flex items-end justify-center">
                      <img
                        src={img}
                        alt={product.name}
                        className="product-image card-hover block mx-auto"
                      />
                    </div>
                  </div>

                  <h3 className="mt-6 font-bold uppercase text-sm">{product.name}</h3>
                  <p className="mt-2 text-xs text-zinc-400">Wireless multi-platform audio</p>

                  <button className="add-btn absolute left-1/2 transform -translate-x-1/2 bottom-6 opacity-0">
                    Add Now
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
