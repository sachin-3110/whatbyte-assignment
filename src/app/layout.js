import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Premium E-Commerce Store - Whatbytes Product Listing",
  description: "Browse our exclusive catalog of electronics, clothing, and home accessories. Add items to your cart and enjoy seamless checkout.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f8fafd] text-gray-950">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
