import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-amber-400">
                Perform Store
              </h1>
              <p className="text-sm text-slate-300 leading-relaxed">
                Your ultimate destination for premium performance gear. Elevate
                your athletic journey with our carefully curated collection.
              </p>
              <div className="flex space-x-4">
                <NavLink className="text-slate-400 hover:text-amber-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </NavLink>
                <NavLink className="text-slate-400 hover:text-amber-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </NavLink>
                <NavLink className="text-slate-400 hover:text-amber-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </NavLink>
              </div>
            </div>
            {/* Quick Links */}
            <div className="space-y-4">
              <h1 className="font-semibold text-lg">Quick Links</h1>
              <ul className="space-y-4 text-sm">
                <li>
                  <NavLink
                    to="/home"
                    className="text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    Shop All
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className="text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    New Arrivals
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className="text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    Best Sellers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className="text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    Sale
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className="text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    Gift Cards
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* Customer Service */}
            <div className="space-y-4">
              <h1 className="text-lg font-semibold">Customer Service</h1>
              <ul className="space-y-4 text-sm">
                <li>
                  <NavLink
                    to="/home"
                    className="text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    Size Guide
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className="text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    Shipping & Returns
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className="text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    FAQ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className="text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    Track Your Order
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className="text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    Support
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* Contact Info */}
            <div className="space-y-4">
              <h1 className="text-lg font-semibold">Get In Touch</h1>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-amber-400" />
                  <span className="text-slate-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-amber-400" />
                  <span className="text-slate-300">hello@performstore.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-amber-400" />
                  <span className="text-slate-300">
                    123 Performance Ave, Athletic City, AC 12345
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>
              &copy; 2025 Perform Store. All rights reserved. | Privacy Policy |
              Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

