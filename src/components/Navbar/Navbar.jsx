"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const menuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }, []);
  return (
    <header className="text-green-600 text-lg shadow-lg">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
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
          <button id="mobile-menu-button" className="focus:outline-none">
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
      <div id="mobile-menu" className="hidden md:hidden bg-green-600">
        <Link
          href="/about"
          className="block px-4 py-2 text-white hover:bg-green-700"
        >
          About
        </Link>
        <Link
          href="/contact-us"
          className="block px-4 py-2 text-white hover:bg-green-700"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
