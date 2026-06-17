"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Search, User } from "lucide-react";

export default function Header({ searchQuery, setSearchQuery }) {
  const { cartCount } = useCart();
  const router = useRouter();
  const [localQuery, setLocalQuery] = useState(searchQuery || "");

  // Keep local query in sync with parent search query if provided
  useEffect(() => {
    if (searchQuery !== undefined) {
      setLocalQuery(searchQuery);
    }
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setLocalQuery(val);
    if (setSearchQuery) {
      setSearchQuery(val);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!setSearchQuery) {
      // If we are not on the homepage, redirect to home with search query
      router.push(`/?search=${encodeURIComponent(localQuery)}`);
    }
  };

  const handleClear = () => {
    setLocalQuery("");
    if (setSearchQuery) {
      setSearchQuery("");
    } else {
      router.push("/");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0c59a3] px-6 py-4 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-white transition hover:opacity-90">
          Logo
        </Link>

        {/* Search Bar Form */}
        <form onSubmit={handleSearchSubmit} className="relative flex-1 max-w-xl mx-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-white/70" />
          </div>
          <input
            type="text"
            placeholder="Search for products..."
            value={localQuery}
            onChange={handleSearchChange}
            className="w-full rounded-md border-0 bg-[#084b8a] py-2 pl-10 pr-8 text-white placeholder-white/60 focus:bg-[#063f75] focus:ring-2 focus:ring-white/30 focus:outline-none transition text-sm"
          />
          {localQuery && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/60 hover:text-white text-lg cursor-pointer"
            >
              &times;
            </button>
          )}
        </form>

        {/* Right side actions: Cart & Profile */}
        <div className="flex items-center gap-4">
          {/* Cart Button */}
          <Link
            href="/cart"
            className="relative flex items-center gap-2 rounded-md bg-[#002f6c] hover:bg-[#00224d] px-4 py-2 text-sm font-semibold text-white shadow-sm transition"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-[#0c59a3]">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Profile/Avatar */}
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#084b8a] text-white hover:bg-[#063f75] transition">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
