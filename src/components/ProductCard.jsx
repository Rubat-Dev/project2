import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate(); 
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
    onClick={() => navigate(`/products/${product.id}`)}>
      {/* Image */}
      <div className="relative w-full h-64 overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </div>

      {/* Info */}
      <div className="mt-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
        <p className="text-sm text-slate-500 uppercase">{product.category}</p>

        <div className="mt-2 flex items-center space-x-2">
          <span className="text-lg font-bold text-amber-600">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm line-through text-slate-400">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          onClick={(e) => {
            e.stopPropagation(); 
            onAddToCart();
          }}
          className="mt-4 w-full px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
