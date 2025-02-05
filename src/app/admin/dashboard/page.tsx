"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, Package, Plus, Trash2 } from "lucide-react";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export default function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const { data: session, status } = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    } else {
      fetchProducts();
    }
  }, [status, router]);

  const fetchProducts = async () => {
    try {
      setError("");
      const response = await fetch("/api/products");
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to fetch products");
      }
      const data = await response.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch (error: any) {
      console.error("Error fetching products:", error);
      setError(error.message);
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError("");
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create product");
      }

      setFormData({
        name: "",
        description: "",
        price: "",
        image: "",
        category: "",
      });
      fetchProducts();
    } catch (error: any) {
      console.error("Error creating product:", error);
      setError(error.message);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setError("");
      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete product");
      }

      fetchProducts();
    } catch (error: any) {
      console.error("Error deleting product:", error);
      setError(error.message);
    }
  };

  if (status === "loading" || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-foreground flex items-center">
              <Menu className="h-8 w-8 text-primary mr-2" />
              Admin Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Welcome, Admin</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="bg-destructive/10 border-l-4 border-destructive p-4 mb-8 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-destructive" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-destructive">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Add Product Form */}
        <div className="bg-card rounded-lg shadow-lg mb-8 overflow-hidden">
          <div className="px-6 py-4 bg-primary">
            <h2 className="text-xl font-semibold text-primary-foreground flex items-center">
              <Plus className="h-6 w-6 mr-2" />
              Add New Product
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-3 py-2 bg-background border rounded-md focus:ring-2 focus:ring-primary" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">Category</label>
                <input type="text" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full px-3 py-2 bg-background border rounded-md focus:ring-2 focus:ring-primary" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">Description</label>
              <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full px-3 py-2 bg-background border rounded-md focus:ring-2 focus:ring-primary" rows={3} required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">Price</label>
                <div className="relative rounded-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-muted-foreground sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full pl-7 pr-3 py-2 bg-background border rounded-md focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">Image URL</label>
                <input type="url" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} className="w-full px-3 py-2 bg-background border rounded-md focus:ring-2 focus:ring-primary" required />
              </div>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
                <Plus className="h-5 w-5 mr-2" />
                Add Product
              </button>
            </div>
          </form>
        </div>

        {/* Products List */}
        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 bg-primary">
            <h2 className="text-xl font-semibold text-primary-foreground flex items-center">
              <Package className="h-6 w-6 mr-2" />
              Products List
            </h2>
          </div>
          <div className="p-6">
            {products.length === 0 ? (
              <div className="text-center py-12">
                <Package className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-2 text-sm font-medium text-foreground">No products</h3>
                <p className="mt-1 text-sm text-muted-foreground">Get started by creating a new product.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product._id} className="bg-card rounded-lg border shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
                    <div className="relative h-48">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      <div className="absolute top-2 right-2">
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="p-1 bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-destructive transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">{product.category}</span>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
