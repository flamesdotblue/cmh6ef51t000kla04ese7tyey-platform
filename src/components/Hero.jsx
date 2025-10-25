import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useTransform(my, [-150, 150], [8, -8]);
  const rotY = useTransform(mx, [-150, 150], [-8, 8]);

  const onMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - (rect.left + rect.width / 2));
    my.set(e.clientY - (rect.top + rect.height / 2));
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative h-[100svh] w-full overflow-hidden"
    >
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/oRrPvYYzPQFRFKuU/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <motion.div
          style={{ rotateX: rotX, rotateY: rotY }}
          className="w-full"
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight"
          >
            Where Luxury Meets Comfort
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 max-w-2xl text-white/80"
          >
            Experience an immersive, cinematic showroom. Explore premium designs with interactive 3D and seamless motion.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 flex items-center gap-4"
          >
            <a
              href="#shop"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#C8A27E] text-black font-semibold shadow-[0_10px_30px_rgba(200,162,126,0.45)] hover:shadow-[0_12px_40px_rgba(200,162,126,0.6)] transition"
            >
              Shop Now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#virtual-room"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
            >
              Explore Virtual Room
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        style={{ rotateX: rotX, rotateY: rotY }}
        className="pointer-events-none absolute right-10 bottom-10 hidden md:block"
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-200/50 to-[#C8A27E]/60 blur-2xl" />
      </motion.div>
    </section>
  );
}
