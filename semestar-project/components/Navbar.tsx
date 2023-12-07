"use client";
import { useState } from "react";

// Define the page type
export type Page = {
  href: string;
  title: string;
};

// Get this info from some external source (e.g. CMS)
const pages: Page[] = [
  { href: "/", title: "Home" },
  { href: "/recipes", title: "Recipes" },
  { href: "/blog", title: "Get Involved" },
  { href: "/contact", title: "About us" },
  { href: "/signin", title: "Sign In" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ display: 'flex', width: '100%', maxHeight: '8vh', position: 'relative', backgroundColor: '#F8BE33' }} className="p-4 flex items-center justify-center">
      <div className="container mx-auto flex items-center justify-between w-full">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          MyLogo
        </div>

        {/* Main Navigation Links - Desktop */}
        <div className="hidden md:flex space-x-4">
          {pages.map((page) => (
            <a
              key={page.href}
              href={page.href}
              className="text-white hover:text-gray-300"
            >
              {page.title}
            </a>
          ))}
        </div>

        {/* Hamburger Menu - Mobile */}
        <div className="md:hidden">
          {/* Hamburger component goes here */}
          {/* For simplicity, you can use a basic button */}
          <button
            onClick={() => setOpen(!open)}
            className="text-white hover:text-gray-300"
          >
            ☰
          </button>
        </div> 
        {/* Mobile Navigation Links */}
        {open && (
          <div className="md:hidden absolute top-16 right-0 bg-brand-orange-50 p-4">
            {pages.map((page) => (
              <a
                key={page.href}
                href={page.href}
                className="block text-white hover:text-gray-300 py-2"
              >
                {page.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
