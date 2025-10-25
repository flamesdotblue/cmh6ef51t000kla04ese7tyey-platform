import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0C0C0C] via-[#0C0C0C] to-[#141414]" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Crafted for the Future</h2>
            <p className="text-white/70 mt-4">
              Furniture24 combines artistry and engineering to create immersive experiences. From dynamic lighting to motion blur transitions, every detail is designed to feel cinematic and luxurious.
            </p>
            <p className="text-white/70 mt-4">
              Materials are ethically sourced and precision-finished. Our pieces are meant to be lived with, admired, and felt.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1600&auto=format&fit=crop',
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <img src={src} alt="Design" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
