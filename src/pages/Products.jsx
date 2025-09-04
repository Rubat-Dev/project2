
import React, { useState } from "react";
import ProductArray from "../data/ProductArray.js";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

const Products = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const { addToCart } = useCart();

  const visibleProducts = ProductArray.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900">
            Premium{" "}
            <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Products
            </span>
          </h1>
          <p className="text-slate-600 mt-2">
            Discover our handpicked collection of luxury and premium items.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>

        {visibleCount < ProductArray.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="px-8 py-3 border-2 border-sky-500 text-sky-500 rounded-full hover:bg-sky-500 hover:text-white hover:scale-105 transition"
            >
              View More Products <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
