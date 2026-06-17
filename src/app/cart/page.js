"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { Trash2, Minus, Plus, ChevronLeft, ShoppingBag, CreditCard, Sparkles } from "lucide-react";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, cartTotal, clearCart, isInitialized } = useCart();
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);

  const taxRate = 0.08; // 8% tax
  const tax = cartTotal * taxRate;
  const grandTotal = cartTotal + tax;

  const handleCheckout = () => {
    setIsCheckoutSuccess(true);
    setTimeout(() => {
      clearCart();
    }, 4000);
  };

  if (!isInitialized) {
    return (
      <div className="flex-1 flex flex-col min-h-screen bg-[#f8fafd]">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#0c59a3] border-t-transparent" />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {isCheckoutSuccess ? (
          // Checkout Success Page
          <div className="max-w-md mx-auto my-12 bg-white rounded-3xl border border-gray-100 shadow-xl p-8 text-center animate-scale-in">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-500 mx-auto mb-6">
              <Sparkles className="h-8 w-8 animate-bounce" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">Order Placed Successfully!</h2>
            <p className="text-sm text-gray-500 mt-2">
              Thank you for your purchase. We are preparing your order. Your cart has been cleared.
            </p>
            <div className="mt-8 bg-gray-50 border border-gray-100 rounded-2xl p-4 text-left text-xs text-gray-400 space-y-2">
              <div className="flex justify-between">
                <span>Order ID</span>
                <span className="font-semibold text-gray-700">#WB-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Delivery</span>
                <span className="font-semibold text-gray-700">3-5 Business Days</span>
              </div>
            </div>
            <Link
              href="/"
              onClick={() => setIsCheckoutSuccess(false)}
              className="mt-8 block w-full bg-[#0c59a3] hover:bg-[#084b8a] text-white font-bold py-3 px-4 rounded-xl shadow-md transition active:scale-98 text-sm"
            >
              Continue Shopping
            </Link>
          </div>
        ) : cart.length === 0 ? (
          // Empty Cart State
          <div className="max-w-md mx-auto my-12 bg-white rounded-3xl border border-gray-100 shadow-md p-8 text-center animate-fade-in">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-[#0c59a3] mx-auto mb-6">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">Your cart is empty</h2>
            <p className="text-sm text-gray-500 mt-2">
              Looks like you haven't added any products to your cart yet. Browse our shop to find items you love!
            </p>
            <Link
              href="/"
              className="mt-8 block w-full bg-[#0c59a3] hover:bg-[#084b8a] text-white font-bold py-3 px-4 rounded-xl shadow-md transition active:scale-98 text-sm"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          // Active Cart View
          <div className="animate-fade-in">
            {/* Breadcrumb / Back Link */}
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-gray-900 transition bg-white border border-gray-200 px-3 py-1.5 rounded-lg shadow-sm"
              >
                <ChevronLeft className="h-4 w-4" />
                Back to Shop
              </Link>
            </div>

            <h1 className="text-3xl font-extrabold text-[#002f6c] tracking-tight mb-8">
              Your Shopping Cart
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Cart Items List */}
              <div className="lg:col-span-2 space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm transition hover:shadow-md"
                  >
                    {/* Image & details */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                      <div className="h-20 w-20 flex-shrink-0 bg-gray-50/50 rounded-xl border border-gray-100 flex items-center justify-center p-2">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="max-h-full max-w-full object-contain mix-blend-multiply"
                        />
                      </div>
                      <div className="text-center sm:text-left">
                        <Link
                          href={`/product/${item.id}`}
                          className="text-base font-bold text-gray-900 hover:text-[#0c59a3] transition"
                        >
                          {item.title}
                        </Link>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mt-0.5">
                          {item.category}
                        </p>
                      </div>
                    </div>

                    {/* Price, Qty and Actions */}
                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-0 pt-4 sm:pt-0">
                      <div className="text-left sm:text-right">
                        <p className="text-xs text-gray-400 font-semibold uppercase">Price</p>
                        <p className="text-lg font-black text-gray-950 mt-0.5">${item.price}</p>
                      </div>

                      {/* Quantity Selector */}
                      <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50/50 p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 flex items-center justify-center rounded-md text-gray-500 hover:bg-white hover:text-gray-900 transition active:scale-95 cursor-pointer"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-bold text-gray-950 select-none">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 flex items-center justify-center rounded-md text-gray-500 hover:bg-white hover:text-gray-900 transition active:scale-95 cursor-pointer"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      {/* Subtotal for Item */}
                      <div className="text-left sm:text-right hidden sm:block">
                        <p className="text-xs text-gray-400 font-semibold uppercase">Total</p>
                        <p className="text-lg font-black text-gray-950 mt-0.5">${item.price * item.quantity}</p>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="h-9 w-9 flex items-center justify-center rounded-lg text-red-500 hover:bg-red-50 hover:text-red-600 transition active:scale-95 cursor-pointer border border-gray-100"
                        title="Remove product"
                      >
                        <Trash2 className="h-4.5 w-4.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary (Right Column) */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-md p-6 space-y-6">
                <h3 className="text-xl font-bold text-gray-950">Order Summary</h3>

                <div className="space-y-3 divide-y divide-gray-50">
                  <div className="flex justify-between text-sm py-2">
                    <span className="text-gray-500 font-medium">Subtotal</span>
                    <span className="font-bold text-gray-950">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm py-2 pt-3">
                    <span className="text-gray-500 font-medium">Shipping</span>
                    <span className="text-green-600 font-bold">Free</span>
                  </div>
                  <div className="flex justify-between text-sm py-2 pt-3">
                    <span className="text-gray-500 font-medium">Estimated Tax (8%)</span>
                    <span className="font-bold text-gray-950">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-base py-3 pt-4 border-t border-gray-100">
                    <span className="text-gray-900 font-bold">Order Total</span>
                    <span className="text-2xl font-black text-[#0c59a3]">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout Trigger */}
                <button
                  onClick={handleCheckout}
                  className="w-full flex items-center justify-center gap-2 bg-[#0c59a3] hover:bg-[#084b8a] text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition active:scale-98 cursor-pointer text-sm"
                >
                  <CreditCard className="h-4.5 w-4.5" />
                  Proceed to Checkout
                </button>

                <div className="text-[11px] text-center text-gray-400 font-medium leading-relaxed">
                  We accept secure credit cards, PayPal, and Apple Pay. Free standard shipping applies to all items in order.
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
