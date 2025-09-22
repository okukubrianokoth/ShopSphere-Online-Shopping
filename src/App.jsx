// App.jsx
import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";

function App() {
  const [user, setUser] = useState({ name: "Guest" });

  const featuredProducts = [
    { 
      id: 1, 
      name: "Wireless Headphones", 
      price: 99, 
      description: "Experience amazing sound quality with noise cancellation.",
      image: "https://images.unsplash.com/photo-1583224966410-0bc9f7f43d05?w=500"
    },
    { 
      id: 2, 
      name: "Smart Watch", 
      price: 149, 
      description: "Stay connected and track your health effortlessly.",
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=500"
    },
    { 
      id: 3, 
      name: "Gaming Mouse", 
      price: 59, 
      description: "Precision and speed for competitive gaming.",
      image: "https://images.unsplash.com/photo-1610622354939-45b4e5dbf97b?w=500"
    },
    { 
      id: 4, 
      name: "Bluetooth Speaker", 
      price: 79, 
      description: "Portable speaker with deep bass and crystal clear sound.",
      image: "https://images.unsplash.com/photo-1585386959984-a4155223f96d?w=500"
    },
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
      {/* Navbar stays visible for the whole app */}
      <Navbar
        currentPage="home"
        onNavigate={handleNavigate}
        user={user}
        onLogout={handleLogout}
      />

      {/* Home content */}
      <Home 
        featuredProducts={featuredProducts} 
        onAddToCart={handleAddToCart} 
      />
    </div>
  );
}

export default App;
