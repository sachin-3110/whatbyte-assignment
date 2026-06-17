"use client";

import React from "react";
import Link from "next/link";

// Custom inline SVG icons for social platforms (deprecated in newer Lucide React versions)
const Facebook = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Instagram = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#002244] text-white py-12 px-6 mt-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Filters Column */}
        <div className="flex flex-col justify-between h-full min-h-[120px]">
          <div>
            <h3 className="text-lg font-bold tracking-wider mb-4">Filters</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/?category=All" className="hover:text-white transition">
                  All
                </Link>
              </li>
              <li>
                <Link href="/?category=Electronics" className="hover:text-white transition">
                  eleΞronk
                </Link>
              </li>
            </ul>
          </div>
          <p className="text-xs text-white/50 mt-6">
            © 2024 American
          </p>
        </div>

        {/* About Us Column */}
        <div>
          <h3 className="text-lg font-bold tracking-wider mb-4">About Us</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link href="#" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us Column */}
        <div>
          <h3 className="text-lg font-bold tracking-wider mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0c59a3] hover:bg-[#084b8a] text-white shadow-sm transition active:scale-95"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0c59a3] hover:bg-[#084b8a] text-white shadow-sm transition active:scale-95"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0c59a3] hover:bg-[#084b8a] text-white shadow-sm transition active:scale-95"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
