"use client";

import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">Artistly</h1>
      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6">
        <Link
          href="/"
          className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
        >
          Home
        </Link>
        <Link
          href="/artists"
          className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
        >
          Artists
        </Link>
        <Link
          href="/onboard"
          className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
        >
          Onboard
        </Link>
        <Link
          href="/dashboard"
          className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
        >
          Dashboard
        </Link>
      </nav>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-3xl text-blue-600 focus:outline-none"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <HiXMark /> : <HiBars3 />}
      </button>
      {/* Mobile Nav Panel */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-2/3 max-w-xs h-full bg-white shadow-lg flex flex-col p-6 space-y-6 animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-500 font-semibold text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/artists"
              className="text-gray-700 hover:text-blue-500 font-semibold text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Artists
            </Link>
            <Link
              href="/onboard"
              className="text-gray-700 hover:text-blue-500 font-semibold text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Onboard
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-blue-500 font-semibold text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </header>
  );
}
