import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#C8A27E] to-amber-300" />
          <span className="font-semibold">Furniture24</span>
        </div>
        <div className="text-sm text-white/60">© {new Date().getFullYear()} Furniture24. All rights reserved.</div>
        <div className="flex items-center gap-4 text-sm text-white/70">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Careers</a>
        </div>
      </div>
    </footer>
  );
}
