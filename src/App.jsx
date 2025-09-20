// App.jsx
import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import ProductCard from "./ProductCard.jsx"; // make sure this exists

function App() {
  const [user, setUser] = useState({ name: "Guest" });

  const featuredProducts = [
    { id: 1, name: "Wireless Headphones", price: 99 },
    { id: 2, name: "Smart Watch", price: 149 },
    { id: 3, name: "Gaming Mouse", price: 59 },
    { id: 4, name: "Bluetooth Speaker", price: 79 },
  ];

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  const handleNavigate = (page) => {
    console.log("Navigate to:", page);
  };

  const handleLogout = () => {
    console.log("User logged out");
    setUser(null);
  };

  return (
    <div>
      
      <Navbar
        currentPage="home"
        onNavigate={handleNavigate}
        user={user}
        onLogout={handleLogout}
      />
      <Home featuredProducts={featuredProducts} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
