import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSupport() {
  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
            <h3 className="text-2xl font-semibold">Contact & Support</h3>
            <p className="text-white/70 mt-2">We are here to help you design your dream space.</p>
            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3" placeholder="Name" />
              <input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3" placeholder="Email" type="email" />
              <input className="sm:col-span-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3" placeholder="Subject" />
              <textarea className="sm:col-span-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 h-32" placeholder="Message" />
              <div className="sm:col-span-2">
                <button type="button" className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#C8A27E] text-black font-semibold shadow-[0_10px_30px_rgba(200,162,126,0.45)] hover:shadow-[0_12px_40px_rgba(200,162,126,0.6)] transition">
                  Send Message
                </button>
              </div>
              <div className="sm:col-span-2 flex flex-wrap gap-4 pt-2 text-white/80">
                <div className="inline-flex items-center gap-2"><Phone className="w-4 h-4" /> +91 80 1234 5678</div>
                <div className="inline-flex items-center gap-2"><Mail className="w-4 h-4" /> hello@furniture24.in</div>
              </div>
            </form>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <div className="flex items-center gap-2 p-4 border-b border-white/10">
              <MapPin className="w-4 h-4" />
              <span className="text-sm text-white/80">Store Locations</span>
            </div>
            <div className="aspect-video w-full bg-black/40">
              <iframe
                title="Furniture24 Locations"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31068334.22414267!2d64.40263402903888!3d20.006309561977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff98d8b5fbf%3A0x4b3b53b22c0f0b1e!2sIndia!5e0!3m2!1sen!2sin!4v1698436420000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
