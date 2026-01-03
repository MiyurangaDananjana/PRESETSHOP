"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-neutral-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity">
            PRESET<span className="text-primary-600">SHOP</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium hover:text-primary-600 transition-colors">
              Shop Presets
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary-600 transition-colors">
              About
            </Link>
            <Link href="#support" className="text-sm font-medium hover:text-primary-600 transition-colors">
              Support
            </Link>
            <button className="btn-primary text-sm px-6 py-3">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col space-y-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-neutral-950 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-neutral-950 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-neutral-950 transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-neutral-100 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-sm font-medium hover:text-primary-600 transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-sm font-medium hover:text-primary-600 transition-colors">
                Shop Presets
              </Link>
              <Link href="#about" className="text-sm font-medium hover:text-primary-600 transition-colors">
                About
              </Link>
              <Link href="#support" className="text-sm font-medium hover:text-primary-600 transition-colors">
                Support
              </Link>
              <button className="btn-primary text-sm w-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
