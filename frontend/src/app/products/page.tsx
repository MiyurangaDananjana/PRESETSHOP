"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/lib/data";

export default function ProductsPage() {
  const allProducts = getAllProducts();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(allProducts.map((p) => p.category)))];

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6">Premium Preset Collections</h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Discover our complete range of professional Lightroom presets.
            Each collection is carefully crafted to help you achieve stunning results.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-neutral-200 bg-white sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-neutral-950 text-white scale-105"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-neutral-600">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? "preset" : "presets"}
            </p>
            <select className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
                presetCount={product.presetCount}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-neutral-500 text-lg">No presets found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="bg-neutral-950 rounded-3xl p-12 md:p-16 text-white text-center">
            <h2 className="heading-2 mb-4">Can&apos;t Decide?</h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
              Get our Ultimate Bundle and save 40%. Includes all current and future preset collections.
            </p>
            <button className="btn-primary">
              View Ultimate Bundle - $199
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
