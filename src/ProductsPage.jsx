import React, { useMemo, useState } from "react";
import { Search } from "lucide-react";
import ProductCard from "./ProductCard.jsx";

function ProductsPage({products, onAddToCart}) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter((product) => {
        const term = searchTerm.toLocaleLowerCase();
        return(
            product.name.toLocaleLowerCase().includes(term) ||
            product.description.toLocaleLowerCase().includes(term) ||
            product.category.toLocaleLowerCase().includes(term)
        );
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Our Products</h1>

                <div className="relative mb-8 max-w-md">
                    <Search className="absolute left-3 top-1/2 translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                    tyoe="text"
                    placeholder="Search Products..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    {filteredProducts.length===0?(
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No Products match your search.</p>
                            </div>
                    ):(
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredProducts.map((product) =>(
                                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                            ))}
                            </div>
                    )}
                    </div>
                    </div>
    );
}
export default ProductsPage;