"use client";

import React, { useState, useEffect } from "react";
import { navLinks } from "@/lib/data";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800 shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 z-50">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl font-heading shadow-lg">
            Q
          </div>
          <span className="font-bold text-xl md:text-2xl font-heading tracking-tight text-foreground">
            Quantum <span className="text-primary">Academy</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4 border-l border-zinc-200 dark:border-zinc-800 pl-8">
            <a href="tel:+919876543210" className="text-sm font-bold text-foreground">
              +91 98765 43210
            </a>
            <a href="#contact">
              <Button size="sm">Enroll Now</Button>
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden z-50 p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-background z-40 flex flex-col pt-24 px-6 transition-transform duration-300 lg:hidden ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-2xl font-bold font-heading text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-auto pb-12 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <p className="text-sm text-foreground/70 mb-2">Call Admissions:</p>
              <a href="tel:+919876543210" className="text-xl font-bold text-primary">
                +91 98765 43210
              </a>
            </div>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button size="lg" className="w-full">Enroll Now</Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
