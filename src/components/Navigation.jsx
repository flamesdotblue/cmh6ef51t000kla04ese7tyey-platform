import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

export default function Navigation() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl/50 bg-black/30 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#C8A27E] to-amber-300 shadow-[0_0_40px_rgba(200,162,126,0.45)]" />
          <span className="font-semibold tracking-wide">Furniture24</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#shop" className="hover:text-white transition">Shop</a>
          <a href="#virtual-room" className="hover:text-white transition">Virtual Room</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1A]/80 hover:bg-[#1A1A1A] border border-white/10 transition shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
          <ShoppingBag className="w-4 h-4" />
          <span className="hidden sm:inline">Cart</span>
        </button>
      </div>
    </motion.header>
  );
}
