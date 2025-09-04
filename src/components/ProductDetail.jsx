import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductArray from "../data/ProductArray";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Find clicked product
  const product = ProductArray.find((p) => p.id === parseInt(id));

  // Related products (filter excluding current one)
  const related = ProductArray.filter((p) => p.id !== parseInt(id)).slice(0, 3);

  // Scroll to top when id changes 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="text-center py-20 text-red-500">Product not found</div>
    );
  }

  return (
    <div className="h-screen bg-slate-50  px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[450px] object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-slate-900">{product.name}</h1>
          <p className="text-sky-600 font-bold text-2xl mt-3">
            ${product.price}
          </p>
          <p className="mt-6 text-slate-600 leading-relaxed">
            {product.description ||
              "This is a premium product with top-notch quality and design."}
          </p>
          <button
            onClick={() => addToCart(product)}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-sky-500 to-purple-500 text-white rounded-lg shadow-lg hover:scale-105 transition"
          >
            Add to Cart
          </button>

          {/* Back button */}
          <button
            onClick={() => navigate("/products")}
            className="mt-4 px-6 py-3 border-2 border-sky-500 text-sky-500 rounded-lg hover:bg-sky-500 hover:text-white transition"
          >
            ← Back to Products
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {related.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/products/${item.id}`)} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover rounded-lg"
              />
              <h3 className="mt-4 text-lg font-semibold">{item.name}</h3>
              <p className="text-sky-600 font-bold">${item.price}</p>

              <button
                onClick={(e) => {
                  e.stopPropagation(); 
                  addToCart(item);
                }}
                className="mt-3 w-full px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;