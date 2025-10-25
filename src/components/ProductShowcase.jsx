import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const PRODUCTS = [
  {
    id: 1,
    name: 'Aurelia Lounge Chair',
    price: '₹89,999',
    color: 'Cream',
    category: 'Chair',
    image:
      'https://images.unsplash.com/photo-1582582429416-0ef2a89ceba1?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Solace Leather Sofa',
    price: '₹2,49,000',
    color: 'Beige',
    category: 'Sofa',
    image:
      'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Halo Arc Floor Lamp',
    price: '₹39,999',
    color: 'Gold',
    category: 'Lighting',
    image:
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Opus Marble Coffee Table',
    price: '₹54,999',
    color: 'White',
    category: 'Table',
    image:
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop',
  },
];

const categories = ['All', 'Chair', 'Sofa', 'Lighting', 'Table'];
const colors = ['All', 'Cream', 'Beige', 'Gold', 'White'];

function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="group relative bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform-gpu transition-transform duration-500 group-hover:scale-105"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      </div>
      <div className="p-5 flex items-center justify-between">
        <div>
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-white/60 text-sm">{product.color} · {product.category}</p>
        </div>
        <div className="text-[#C8A27E] font-semibold">{product.price}</div>
      </div>
      <div className="p-5 pt-0">
        <button className="w-full rounded-xl px-4 py-3 bg-white/10 hover:bg-white/15 border border-white/10 transition transform-gpu [transform-style:preserve-3d] group-hover:-translate-y-0.5 group-hover:shadow-[0_20px_60px_-20px_rgba(200,162,126,0.5)]">
          360° View
        </button>
      </div>
    </motion.div>
  );
}

export default function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) =>
      (selectedCategory === 'All' || p.category === selectedCategory) &&
      (selectedColor === 'All' || p.color === selectedColor)
    );
  }, [selectedCategory, selectedColor]);

  return (
    <section id="shop" className="relative py-24 bg-[#0E0E0E]">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#C8A27E]/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Signature Collection</h2>
            <p className="text-white/70 mt-2 max-w-xl">
              Explore premium furniture with real-time depth and motion. Filter by style and color.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-2"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-2"
            >
              {colors.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
