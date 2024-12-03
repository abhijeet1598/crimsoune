"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="text-customViolet text-lg shadow-lg relative">
      <div className="container px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center gap-2">
          <Image src="/logo.png" width={50} height={50} alt="crimsoune logo" />
          Crimsoune
        </Link>

        {/* Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#about" className="hover:text-green-800">
            About
          </Link>
          <Link href="/contact-us" className="hover:text-green-800">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            id="mobile-menu-button"
            className="focus:outline-none"
            onClick={() => setShowMobileMenu((prev) => !prev)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div
          id="mobile-menu"
          className="md:hidden absolute left-0 w-full bg-white shadow-lg z-50"
          onClick={() => setShowMobileMenu(false)}
        >
          <Link href="/about" className="block px-4 py-2 text-customViolet">
            About
          </Link>
          <Link
            href="/contact-us"
            className="block px-4 py-2 text-customViolet"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
