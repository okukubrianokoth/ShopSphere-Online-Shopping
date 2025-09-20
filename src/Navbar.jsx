import React from "react";
import { ShoppingCart, User, LogOut } from "lucide-react";

export function Navbar({ currentPage, onNavigate, user, onLogout }) {

  const navItems = [
    { id: "home", label: "Home" },
    { id: "products", label: "Products" },
    { id: "categories", label: "Categories" },
  ];

  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          <div className="flex items-center space-x-8">
            <h1
              className="text-3xl font-bold text-blue-500 cursor-pointer"
              onClick={() => onNavigate("home")}
            >
              ShopSphere  
            </h1>

            <div className="flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-2 rounded-md ${
                    currentPage === item.id
                      ? "bg-blue-100 text-blue-500"
                      : "text-gray-600 hover:text-blue-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-sm text-gray-600">
                  Welcome, {user.name}
                </span>
                <button
                  onClick={() => onNavigate("cart")}
                  className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" /> Cart
                </button>
                <button
                  onClick={onLogout}
                  className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100"
                >
                  <LogOut className="w-4 h-4 mr-2" /> Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => onNavigate("login")}
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                <User className="w-4 h-4 mr-2" /> Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
