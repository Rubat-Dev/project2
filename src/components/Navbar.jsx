import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Info,
  Package,
  Phone,
  Quote,
  User,
  ShoppingCart,
  Search,
} from "lucide-react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  console.log(navigate);
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true); // true = login, false = signup
  const [searchOpen, setSearchOpen] = useState(false);

  const menu = [
    { name: "Home", link: "/home", icon: <Home className="w-4 h-4 mr-1 text-blue-600" /> },
    { name: "About", link: "/about", icon: <Info className="w-4 h-4 mr-1 text-blue-600" /> },
    { name: "Products", link: "/products", icon: <Package className="w-4 h-4 mr-1 text-blue-600" /> },
    { name: "Reviews", link: "/reviews", icon: <Quote className="w-4 h-4 mr-1 text-blue-600" /> },
    { name: "Contact", link: "/contact", icon: <Phone className="w-4 h-4 mr-1 text-blue-600" /> },
  ];

  return (
    <div>
      <nav className={`flex justify-between items-center w-full fixed top-0 left-0 py-2 px-10 bg-white z-50 ${mobileMenu ? "" : "shadow-lg"}`}>
        {/* Logo */}
        <div>
          <NavLink to="/">
            <img src={logo} alt="logo" className="h-[70px] w-[120px]" />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <ul className="md:flex hidden gap-8 text-lg mx-auto">
          {menu.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-semibold flex items-center" : "text-gray-700 flex items-center"
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div
            className="relative flex items-center max-sm:hidden"
            onMouseEnter={() => setSearchOpen(true)}
            onMouseLeave={() => setSearchOpen(false)}
          >
            <Search className="w-5 h-5 text-gray-700 cursor-pointer" />
            <input
              type="text"
              placeholder="Search here..."
              className={`absolute -right-4 py-2 px-4 rounded-full text-gray-700 border-2 border-gray-300 outline-none transition-all duration-300 ${
                searchOpen ? "w-[200px] opacity-100" : "w-0 opacity-0 pointer-events-none"
              }`}
            />
          </div>

          {/* Login Icon */}
          <div className="relative cursor-pointer" onClick={() => { setLoginOpen(true); setShowLoginForm(true); }}>
            <User className="w-6 h-6 text-gray-700 hover:text-blue-500 transition" />
          </div>

          {/* Cart Icon */}
          <NavLink to="/cart" className="relative cursor-pointer">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </NavLink>

          {/* Mobile Hamburger */}
          <button className="md:hidden text-gray-700" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 bg-white shadow-lg md:hidden px-10 py-5 w-full z-40 transition-transform duration-500 ${mobileMenu ? "translate-y-[86px]" : "-translate-y-full"}`}>
        <div className="flex flex-col space-y-4">
          {menu.map((item) => (
            <NavLink
              to={item.link}
              key={item.name}
              className="text-gray-700 hover:text-blue-600 transition flex items-center"
              onClick={() => setMobileMenu(false)}
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
          {/* Search Bar */}
          <div className="relative">
          <input type="text" placeholder="search here" className=" ps-12 w-full p-3 rounded-full border border-blue-600"/>
          <Search className="w-5 h-5 text-gray-700 cursor-pointer absolute bottom-3 left-5" />
          </div>
        </div>
      </div>

      {/* Login/Signup Modal */}
      {loginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md relative">
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-red-500"
              onClick={() => setLoginOpen(false)}
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              {showLoginForm ? "Login" : "Sign Up"}
            </h2>

            <form className="flex flex-col gap-4">
              {!showLoginForm && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                />
              )}
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition"
              >
                {showLoginForm ? "Login" : "Sign Up"}
              </button>
            </form>

            <p className="mt-4 text-center text-gray-500 text-sm">
              {showLoginForm ? "Don't have an account? " : "Already have an account? "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setShowLoginForm(!showLoginForm)}
              >
                {showLoginForm ? "Sign Up" : "Sign In"}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
