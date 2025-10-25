import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ITEMS = [
  {
    id: 'chair',
    name: 'Luxe Chair',
    image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1600&auto=format&fit=crop',
    w: 120,
    h: 120,
  },
  {
    id: 'sofa',
    name: 'Grand Sofa',
    image: 'https://images.unsplash.com/photo-1582582429416-0ef2a89ceba1?q=80&w=1600&auto=format&fit=crop',
    w: 180,
    h: 120,
  },
  {
    id: 'lamp',
    name: 'Arc Lamp',
    image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1600&auto=format&fit=crop',
    w: 80,
    h: 140,
  },
];

export default function VirtualRoom() {
  const dropRef = useRef(null);
  const [placed, setPlaced] = useState([]);

  const onDragStart = (e, item) => {
    e.dataTransfer.setData('application/json', JSON.stringify(item));
  };

  const onDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('application/json');
    if (!data) return;
    const item = JSON.parse(data);

    const rect = dropRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - item.w / 2;
    const y = e.clientY - rect.top - item.h / 2;

    setPlaced((prev) => [...prev, { ...item, x, y }]);
  };

  const onDragOver = (e) => e.preventDefault();

  return (
    <section id="virtual-room" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Virtual Room Preview</h2>
            <p className="text-white/70 mt-2 max-w-2xl">
              Drag and drop furniture into your virtual room. Arrange and visualize your space with depth and motion.
            </p>
          </div>
          <div className="text-sm text-white/60">
            Tip: Drag items from the tray below into the room.
          </div>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-6">
          <div
            ref={dropRef}
            onDrop={onDrop}
            onDragOver={onDragOver}
            className="relative h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1A1A1A] via-[#111] to-[#0B0B0B]"
          >
            <div className="absolute inset-0 pointer-events-none" style={{background: `radial-gradient(1200px_600px_at_80%_110%, rgba(200,162,126,0.2), transparent 60%)`}} />
            <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none" style={{background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(12,12,12,0.6) 60%, rgba(12,12,12,0.9) 100%)'}} />
            {placed.map((it, idx) => (
              <motion.img
                key={idx}
                src={it.image}
                alt={it.name}
                className="absolute rounded-xl shadow-2xl object-cover"
                style={{ left: it.x, top: it.y, width: it.w, height: it.h }}
                initial={{ opacity: 0, scale: 0.8, filter: 'blur(6px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.4 }}
                draggable={false}
              />
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4">
            <div className="flex gap-4 overflow-x-auto">
              {ITEMS.map((item) => (
                <div key={item.id} className="min-w-[220px] bg-white/5 border border-white/10 rounded-xl p-3">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-white/60">Drag to Room</div>
                    </div>
                    <button
                      draggable
                      onDragStart={(e) => onDragStart(e, item)}
                      className="px-3 py-2 rounded-md bg-[#C8A27E] text-black text-sm font-semibold"
                    >
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
