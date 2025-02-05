"use client";

import { useState, useEffect } from "react";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      const validProducts = Array.isArray(data) ? data : [];
      setProducts(validProducts);

      // Extract unique categories
      const categorySet = new Set<string>();
      validProducts.forEach((product: Product) => {
        categorySet.add(product.category);
      });
      setCategories(Array.from(categorySet));
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
      setCategories([]);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredProducts = selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Menu</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            <button onClick={() => setSelectedCategory("all")} className={`px-4 py-2 rounded-full ${selectedCategory === "all" ? "bg-indigo-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"} transition-colors duration-200`}>
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${selectedCategory === category ? "bg-indigo-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"} transition-colors duration-200`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product._id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="mt-1 text-gray-600 text-sm">{product.description}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-indigo-600 font-semibold">${product.price.toFixed(2)}</span>
                  <span className="text-sm text-gray-500">{product.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        )}
      </main>
    </div>
  );
}
