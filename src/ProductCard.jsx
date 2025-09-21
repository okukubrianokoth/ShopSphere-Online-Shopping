import React from "react";

function ProductCard({product, onAddToCart}) {
    return(
        <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col items-center">
            <div className="aspect-square w-full mb-4 overflow-hidden rounded-lg">
                <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between w-full">
                    <span className="text-2xl font-bold text-blue-500">${product.price}</span>
                    <button 
                    onClick={() => onAddToCart(product)}
                    className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500">Add To Cart</button>
                    </div>
                    </div>
    );
}