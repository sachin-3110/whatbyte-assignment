"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useCart } from "../../context/CartContext";
import { products } from "../../data/products";
import { Star, ChevronLeft, Minus, Plus, ShoppingBag, Check } from "lucide-react";

export default function ProductDetailPage({ params }) {
  const router = useRouter();
  const resolvedParams = React.use(params);
  const productId = resolvedParams.id;

  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  // Find product
  const product = products.find((p) => p.id === productId);

  // Image gallery state (we use the main image and mock variants for thumbnails)
  const [activeImage, setActiveImage] = useState(product?.image);

  if (!product) {
    return (
      <div className="flex-1 flex flex-col min-h-screen bg-[#f8fafd]">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center p-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Product Not Found</h2>
          <p className="text-gray-500 mt-2">The product you are looking for does not exist or has been removed.</p>
          <Link
            href="/"
            className="mt-6 bg-[#0c59a3] hover:bg-[#084b8a] text-white font-semibold px-6 py-2.5 rounded-lg shadow-sm transition active:scale-95 text-sm"
          >
            Back to Catalog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Gallery images list (1 real and 2 placeholder styled variants for visual carousel experience)
  const galleryImages = [
    product.image,
    product.image.replace("q=85", "q=85&hue=200"), // slight color shift for visual mockup variety
    product.image.replace("q=85", "q=85&sat=-50"), // desaturated variant
  ];

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  const incrementQty = () => setQuantity((q) => q + 1);
  const decrementQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  // Render stars helper
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />);
      } else {
        stars.push(<Star key={i} className="h-4 w-4 text-gray-300" />);
      }
    }
    return <div className="flex gap-0.5">{stars}</div>;
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Back Button & Breadcrumbs */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-gray-900 transition bg-white border border-gray-200 px-3 py-1.5 rounded-lg shadow-sm cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </button>
          <div className="text-xs text-gray-400 font-medium">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-500 uppercase tracking-wider">{product.category}</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-semibold">{product.title}</span>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-md p-6 sm:p-8 md:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery (Left) */}
            <div className="flex flex-col gap-6">
              {/* Active Image Frame */}
              <div className="bg-gray-50/50 border border-gray-100 rounded-2xl flex items-center justify-center p-8 h-80 sm:h-96 relative group overflow-hidden">
                <img
                  src={activeImage || product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain mix-blend-multiply transition duration-500 hover:scale-105"
                />
              </div>

              {/* Thumbnails list */}
              <div className="flex gap-4 justify-center">
                {galleryImages.map((imgSrc, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(imgSrc)}
                    className={`h-16 w-16 rounded-xl border-2 p-1.5 flex items-center justify-center bg-white transition hover:scale-105 ${
                      (activeImage || product.image) === imgSrc
                        ? "border-[#0c59a3] shadow-md"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={imgSrc}
                      alt={`Thumbnail ${index + 1}`}
                      className="max-h-full max-w-full object-contain mix-blend-multiply"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section (Right) */}
            <div className="flex flex-col justify-between">
              <div>
                {/* Category Tag */}
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-[#0c59a3] mb-4">
                  {product.category}
                </span>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  {product.title}
                </h1>

                <div className="flex items-center gap-4 mt-3">
                  <span className="text-3xl font-black text-gray-950">${product.price}</span>
                  <div className="h-5 w-px bg-gray-200" />
                  <div className="flex items-center gap-1.5">
                    {renderStars(product.rating)}
                    <span className="text-xs font-semibold text-gray-500 mt-0.5">({product.rating})</span>
                  </div>
                </div>

                <p className="text-gray-600 mt-6 leading-relaxed font-normal">
                  {product.description}
                </p>

                {/* Additional Spec Detail */}
                <div className="border-t border-gray-100 pt-6 mt-6 space-y-3">
                  <div className="flex text-sm">
                    <span className="w-28 text-gray-400 font-medium">Availability</span>
                    <span className="text-green-600 font-semibold">In Stock</span>
                  </div>
                  <div className="flex text-sm">
                    <span className="w-28 text-gray-400 font-medium">Shipping</span>
                    <span className="text-gray-700 font-medium">Free Standard Shipping</span>
                  </div>
                </div>
              </div>

              {/* Add to Cart Area */}
              <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-4">
                {/* Quantity Selector */}
                <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50/50 p-1">
                  <button
                    onClick={decrementQty}
                    className="h-9 w-9 flex items-center justify-center rounded-md text-gray-500 hover:bg-white hover:text-gray-900 transition active:scale-95 cursor-pointer"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center text-sm font-bold text-gray-950 select-none">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQty}
                    className="h-9 w-9 flex items-center justify-center rounded-md text-gray-500 hover:bg-white hover:text-gray-900 transition active:scale-95 cursor-pointer"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  disabled={addedToCart}
                  className={`flex-1 w-full flex items-center justify-center gap-2 font-bold px-8 py-3.5 rounded-lg text-white shadow-md transition active:scale-98 cursor-pointer ${
                    addedToCart
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-[#0c59a3] hover:bg-[#084b8a]"
                  }`}
                >
                  {addedToCart ? (
                    <>
                      <Check className="h-5 w-5 animate-pulse" />
                      Added!
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-5 w-5" />
                      Add to Cart
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-md p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Customer Reviews</h2>
          {product.reviews && product.reviews.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {product.reviews.map((rev) => (
                <div key={rev.id} className="py-6 first:pt-0 last:pb-0">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <div>
                      <h4 className="font-bold text-gray-950">{rev.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        {renderStars(rev.rating)}
                        <span className="text-[10px] text-gray-400 font-semibold">{rev.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">{rev.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 italic">No reviews yet for this product. Be the first to review!</p>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
