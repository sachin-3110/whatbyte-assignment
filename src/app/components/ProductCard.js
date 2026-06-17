"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { Star } from "lucide-react";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  // Handle clicking "Add to Cart" without triggering the link navigation
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  // Render a standard 5-star rating display
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} className="h-4 w-4 fill-[#0c59a3] text-[#0c59a3]" />);
      } else {
        stars.push(<Star key={i} className="h-4 w-4 text-gray-300" />);
      }
    }
    return <div className="flex gap-0.5">{stars}</div>;
  };

  if (product.isFeatured) {
    // Smartphone / Featured Card: Horizontal layout, takes 2 columns on desktop
    return (
      <Link
        href={`/product/${product.id}`}
        className="col-span-1 md:col-span-2 flex flex-col sm:flex-row bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      >
        {/* Left Side: Product Image */}
        <div className="w-full sm:w-1/2 bg-gray-50/50 flex items-center justify-center p-6 min-h-[260px] sm:min-h-auto">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-56 object-contain mix-blend-multiply transition duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Right Side: Product Details */}
        <div className="w-full sm:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{product.title}</h3>
            <p className="text-xl font-bold text-gray-950 mt-1">${product.price}</p>

            {/* Stars */}
            <div className="mt-3">
              {renderStars(product.rating)}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 mt-4 leading-relaxed font-normal">
              {product.description}
            </p>

            {/* Category */}
            <div className="mt-6 flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Category</span>
              <span className="text-sm font-medium text-gray-700">{product.category}</span>
            </div>
          </div>

          {/* Add to Cart Button (Bottom Right) */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleAddToCart}
              className="bg-[#0c59a3] hover:bg-[#084b8a] text-white font-semibold px-6 py-2.5 rounded-lg shadow-sm transition active:scale-95 cursor-pointer text-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    );
  }

  // Standard Product Card (1 column)
  return (
    <Link
      href={`/product/${product.id}`}
      className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full justify-between"
    >
      {/* Product Image */}
      <div className="bg-gray-50/50 flex items-center justify-center p-6 h-48">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-36 object-contain mix-blend-multiply transition duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-gray-800 tracking-tight leading-tight">{product.title}</h3>
          <p className="text-lg font-bold text-gray-950 mt-1">${product.price}</p>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-[#0c59a3] hover:bg-[#084b8a] text-white font-semibold py-2 px-4 rounded-lg shadow-sm transition active:scale-95 cursor-pointer text-sm"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
}
