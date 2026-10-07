"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Industries", href: "#industries" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00E5FF] to-[#3B82F6] flex items-center justify-center font-bold text-black text-lg">
              V
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-lg leading-tight">
                VASRAM
              </div>
              <div className="text-[#00E5FF] text-xs tracking-widest">
                ENTERPRISES
              </div>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-[#00E5FF] transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Call Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:9502259293"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00E5FF] text-black font-bold rounded-lg hover:shadow-[0_0_25px_rgba(0,229,255,0.8)] hover:scale-105 transition-all text-sm whitespace-nowrap"
            >
              <Phone size={16} />
              95022 59293
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-lg p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-300 hover:text-[#00E5FF] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:9502259293"
              className="flex items-center justify-center gap-2 mt-4 px-4 py-2 bg-[#00E5FF] text-black font-bold rounded-lg"
            >
              <Phone size={16} />
              95022 59293
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}