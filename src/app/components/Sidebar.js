"use client";

import React from "react";

export default function Sidebar({
  selectedCategory,
  setSelectedCategory,
  priceLimit,
  setPriceLimit,
}) {
  const categories = ["All", "Electronics", "Clothing", "Home"];

  // Custom Radio Button for Blue Card (Filters)
  const BlueRadioButton = ({ label, active }) => (
    <label className="flex items-center gap-3 cursor-pointer group py-1.5 select-none">
      <div className="relative flex items-center justify-center">
        <input
          type="radio"
          name="category-blue"
          checked={active}
          onChange={() => setSelectedCategory(label)}
          className="sr-only"
        />
        <div
          className={`h-5 w-5 rounded-full border-2 transition-all flex items-center justify-center ${
            active ? "border-white bg-transparent" : "border-white/50 group-hover:border-white"
          }`}
        >
          {active && <div className="h-2.5 w-2.5 rounded-full bg-white animate-scale-in" />}
        </div>
      </div>
      <span className={`text-sm transition-colors ${active ? "font-semibold text-white" : "text-white/80 group-hover:text-white"}`}>
        {label}
      </span>
    </label>
  );

  // Custom Radio Button for White Card (Cacyroy)
  const WhiteRadioButton = ({ label, active }) => (
    <label className="flex items-center gap-3 cursor-pointer group py-1.5 select-none">
      <div className="relative flex items-center justify-center">
        <input
          type="radio"
          name="category-white"
          checked={active}
          onChange={() => setSelectedCategory(label)}
          className="sr-only"
        />
        <div
          className={`h-5 w-5 rounded-full border-2 transition-all flex items-center justify-center ${
            active ? "border-[#0c59a3] bg-transparent" : "border-gray-300 group-hover:border-gray-400"
          }`}
        >
          {active && <div className="h-2.5 w-2.5 rounded-full bg-[#0c59a3] animate-scale-in" />}
        </div>
      </div>
      <span className={`text-sm transition-colors ${active ? "font-semibold text-gray-900" : "text-gray-600 group-hover:text-gray-900"}`}>
        {label}
      </span>
    </label>
  );

  return (
    <aside className="w-full md:w-64 flex flex-col gap-6 flex-shrink-0">
      {/* CARD 1: Filters (Blue) */}
      <div className="bg-gradient-to-b from-[#0c59a3] to-[#073f75] text-white p-6 rounded-2xl shadow-lg transition hover:shadow-xl">
        <h2 className="text-xl font-bold tracking-wide mb-4">Filters</h2>

        {/* Category section */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-3">Category</h3>
          <div className="flex flex-col gap-1">
            {categories.map((cat) => (
              <BlueRadioButton
                key={cat}
                label={cat}
                active={selectedCategory === cat}
              />
            ))}
          </div>
        </div>

        {/* Price section */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-3">Price</h3>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceLimit > 1000 ? 1000 : priceLimit}
            onChange={(e) => setPriceLimit(Number(e.target.value))}
            className="w-full accent-white bg-white/20 h-1 rounded-lg cursor-pointer transition appearance-none"
          />
          <div className="flex justify-between text-xs text-white/70 mt-2 font-medium">
            <span>0</span>
            <span className="font-bold bg-white/10 px-2 py-0.5 rounded text-white">
              {priceLimit > 1000 ? "1000+" : priceLimit}
            </span>
            <span>1000</span>
          </div>
        </div>
      </div>

      {/* CARD 2: Cacyroy (White) */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md transition hover:shadow-lg">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 mb-4">Cacyroy</h2>

        {/* Category section */}
        <div className="mb-6">
          <div className="flex flex-col gap-1">
            {categories.map((cat) => (
              <WhiteRadioButton
                key={cat}
                label={cat}
                active={selectedCategory === cat}
              />
            ))}
          </div>
        </div>

        {/* Price section */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">Price</h3>
          <div className="relative rounded-md shadow-sm">
            <input
              type="number"
              min="0"
              value={priceLimit}
              onChange={(e) => setPriceLimit(Number(e.target.value))}
              className="block w-full rounded-lg border border-gray-200 bg-gray-50/50 py-2.5 px-3.5 text-gray-900 focus:border-[#0c59a3] focus:bg-white focus:ring-1 focus:ring-[#0c59a3] focus:outline-none transition text-sm font-medium"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
