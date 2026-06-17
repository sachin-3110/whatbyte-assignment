"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import { products } from "./data/products";
import { Inbox } from "lucide-react";

function ProductListingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceLimit, setPriceLimit] = useState(5000);
  const [searchQuery, setSearchQuery] = useState("");

  // Hydrate states from URL on mount/change
  useEffect(() => {
    const category = searchParams.get("category");
    const price = searchParams.get("price");
    const search = searchParams.get("search");

    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory("All");
    }

    if (price) {
      setPriceLimit(Number(price));
    } else {
      setPriceLimit(5000);
    }

    if (search) {
      setSearchQuery(search);
    } else {
      setSearchQuery("");
    }
  }, [searchParams]);

  // Synchronize state changes to URL
  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedCategory && selectedCategory !== "All") {
      params.set("category", selectedCategory);
    }
    if (priceLimit < 5000) {
      params.set("price", priceLimit.toString());
    }
    if (searchQuery) {
      params.set("search", searchQuery);
    }

    const query = params.toString();
    const targetUrl = query ? `${pathname}?${query}` : pathname;
    router.replace(targetUrl, { scroll: false });
  }, [selectedCategory, priceLimit, searchQuery, pathname, router]);

  // Filter products logic
  const filteredProducts = products.filter((product) => {
    // Category filter
    const matchesCategory =
      selectedCategory === "All" ||
      product.category.toLowerCase() === selectedCategory.toLowerCase();

    // Price filter
    const matchesPrice = product.price <= priceLimit;

    // Search filter
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesPrice && matchesSearch;
  });

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setPriceLimit(5000);
    setSearchQuery("");
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      {/* Header */}
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceLimit={priceLimit}
            setPriceLimit={setPriceLimit}
          />

          {/* Product Grid Area */}
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold text-[#002f6c] tracking-tight mb-6">
              Product Listing
            </h1>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              // Conditional Rendering: No products found message
              <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-2xl shadow-sm p-12 text-center animate-fade-in">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500 mb-4">
                  <Inbox className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-950">No products found</h3>
                <p className="text-sm text-gray-500 mt-1 max-w-xs mx-auto">
                  We couldn't find any products matching your current filters. Try adjusting them or resetting.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="mt-6 bg-[#0c59a3] hover:bg-[#084b8a] text-white font-semibold px-5 py-2 rounded-lg text-sm shadow-sm transition active:scale-95 cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="flex-1 flex items-center justify-center min-h-screen bg-[#f8fafd]">
          <div className="flex flex-col items-center gap-3">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#0c59a3] border-t-transparent" />
            <p className="text-sm font-semibold text-gray-500">Loading catalog...</p>
          </div>
        </div>
      }
    >
      <ProductListingContent />
    </Suspense>
  );
}
