import React from 'react';
import { motion } from 'framer-motion';
import { Play, Image as ImageIcon } from 'lucide-react';

const GALLERY_ITEMS = [
  { type: 'image', url: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&q=80&w=800', title: 'Masjid al-Haram' },
  { type: 'image', url: 'https://president.uz/uploads/45f628cd-0e9a-08aa-2d67-7fed32646b01_lists_slider_5439.jpg', title: 'Kaaba Close-up' },
  { type: 'image', url: 'https://i.dawn.com/primary/2024/06/15112350599a4ff.jpg', title: 'Pilgrims in Prayer' },
  { type: 'image', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Great_Mosque_of_Mecca.jpg', title: 'Night at the Haram' },
  { type: 'image', url: 'https://orienttrips.com/mag/wp-content/uploads/2025/03/The-Terraced-Beauty-of-Badab-e-Surt-scaled.webp', title: 'Iran Landscapes' },
  { type: 'image', url: 'https://res.cloudinary.com/enchanting/q_70,f_auto,c_fill,g_face/enchanting-web/2023/09/Enchanting-Travels-African-lion-couple-and-safari-jeep-in-Kenya-Africa-1.jpg', title: 'Kenya Safari' },
];

export function GalleryPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-slate-900 mb-6"
          >
            Our <span className="text-emerald-800">Gallery</span>
          </motion.h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Glimpses of the beautiful journeys and sacred moments shared by our pilgrims.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-square rounded-[40px] overflow-hidden cursor-pointer"
            >
              <img src={item.url} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-4">
                    <ImageIcon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-bold text-lg">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Video Testimonials</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {[1, 2].map((v) => (
              <div key={v} className="aspect-video rounded-[48px] bg-slate-900 relative overflow-hidden group">
                <img src={`https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&q=80&w=1000&seed=${v}`} alt="Video Thumbnail" className="w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-gold-500 text-emerald-950 flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
                    <Play className="w-8 h-8 fill-current" />
                  </button>
                </div>
                <div className="absolute bottom-8 left-8">
                  <p className="text-white font-bold text-xl">Pilgrim Experience {v}</p>
                  <p className="text-white/60 text-sm">Umrah Journey 2025</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
