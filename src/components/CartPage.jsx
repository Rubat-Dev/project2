import React from "react";
import { useCart } from "../context/CartContext";
import { Trash2 } from "lucide-react"; // 🗑️ Delete Icon import

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-md px-6 py-4 border-b border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900">🛒 Your Shopping Cart</h1>
        <p className="text-gray-500">Manage your items and checkout easily</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-6 py-6">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-gray-600 text-lg mb-4">Your cart is empty.</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="empty"
              className="w-32 opacity-60"
            />
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <tr>
                  <th className="p-4">Image</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`transition hover:bg-gray-100 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="p-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 object-cover rounded-lg shadow"
                      />
                    </td>
                    <td className="p-4 font-medium text-gray-800">{item.name}</td>
                    <td className="p-4 font-semibold text-gray-900">
                      ${item.price}
                    </td>
                    <td className="p-4">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, Number(e.target.value))
                        }
                        className="w-20 border rounded-lg text-center py-1 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition flex items-center justify-center mx-auto"
                      >
                        <Trash2 className="h-5 w-5" /> {/* Trash Icon */}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
