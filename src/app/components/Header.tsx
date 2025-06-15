"use client";

import Image from "next/image";
import { useState } from "react";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[rgba(255,255,255,0.1)] backdrop-blur-sm text-[var(--foreground)] w-full py-8 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full flex justify-between items-center">
        {/* Wrap image and name together */}
        <div className="flex items-center space-x-10">
          <Image
            src="profilepic.jpg"
            alt="profile"
            width={80}
            height={80}
            unoptimized
            priority
            className="rounded-full"
          />
          <p className="text-3xl leading-none">Emil Liukkonen</p>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex gap-4 text-lg scroll-smooth">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#experience" className="hover:underline">
            Experience
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden flex items-center p-2 rounded-md focus:outline-none focus:ring focus:ring-offset-1 focus:ring-[var(--foreground)]"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6 text-[var(--foreground)]"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="sm:hidden absolute top-full right-4 mt-2 w-40 bg-[var(--background)] border border-[var(--foreground)] rounded-md shadow-md z-50 flex flex-col">
            <a
              href="#about"
              className="px-4 py-2 hover:bg-[var(--foreground)] hover:text-[var(--background)] border-b border-[var(--foreground)] last:border-none"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#experience"
              className="px-4 py-2 hover:bg-[var(--foreground)] hover:text-[var(--background)] border-b border-[var(--foreground)] last:border-none"
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="px-4 py-2 hover:bg-[var(--foreground)] hover:text-[var(--background)] border-b border-[var(--foreground)] last:border-none"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-4 py-2 hover:bg-[var(--foreground)] hover:text-[var(--background)] last:border-none"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}