import React from "react";
import ProductCard from './ProductCard';

function Home({ featuredProducts, onAddToCart }) {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <section className="bg-blue-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to ShopSphere</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Discover amazing products from around the world. Quality, variety and value — all in one place.
          </p>
          <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1564572234453-6b14f6e6fcfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHNtYXJ0cGhvbmV8ZW58MXx8fHwxNzU4MTIxMDE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Featured Products"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About ShopSphere</h2>
            <p className="text-lg text-gray-600 mb-8">
              Since 2020, ShopSphere has been your trusted partner for high-quality electronics and gadgets.
              We carefully curate our selection to bring you the latest technology and timeless classics,
              all backed by our commitment to exceptional customer service and competitive pricing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">10,000+</div>
                <p className="text-gray-600">Happy Customers</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">500+</div>
                <p className="text-gray-600">Products Available</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">24/7</div>
                <p className="text-gray-600">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
