import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Eye, Users } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-emerald-800 font-bold uppercase tracking-[0.3em] text-xs mb-4">Our Story</span>
            <h1 className="text-5xl font-bold text-slate-900 mb-8">
              Your Trusted <span className="text-emerald-800">Umrah & Travel</span> Partner Since 2010
            </h1>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Xpress Holidays was founded with a single mission: to provide pilgrims from Pakistan with a seamless, spiritual, and stress-free Umrah experience. 
            </p>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Based in the heart of Karachi, we have grown from a small family business to a leading travel agency, serving thousands of satisfied clients every year. Our 5-star rating on Google is a testament to our commitment to excellence and personal care.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-bold text-emerald-900 mb-1">10k+</p>
                <p className="text-sm text-slate-500 font-medium">Happy Pilgrims</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gold-500 mb-1">15+</p>
                <p className="text-sm text-slate-500 font-medium">Years Experience</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=1000" alt="About Xpress Holidays" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gold-500 flex items-center justify-center text-emerald-950">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Government Approved</p>
                  <p className="text-sm text-slate-500">Licensed Travel Agency</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-emerald-900 p-12 rounded-[48px] text-white">
            <Target className="w-12 h-12 text-gold-500 mb-6" />
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-emerald-100/70 leading-relaxed">
              To facilitate every pilgrim's spiritual journey by providing transparent, high-quality, and affordable travel services that exceed expectations.
            </p>
          </div>
          <div className="bg-slate-900 p-12 rounded-[48px] text-white">
            <Eye className="w-12 h-12 text-gold-500 mb-6" />
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-400 leading-relaxed">
              To be the most trusted name in Islamic travel globally, known for our integrity, innovation, and unwavering support for the Ummah.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our <span className="text-emerald-800">Expert Team</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Our dedicated professionals are here to ensure your journey is perfect.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { name: 'Zubair Ahmed', role: 'CEO & Founder', img: 'https://i.pravatar.cc/150?u=zubair' },
            { name: 'Fatima Malik', role: 'Operations Manager', img: 'https://i.pravatar.cc/150?u=fatima' },
            { name: 'Omar Khan', role: 'Umrah Specialist', img: 'https://i.pravatar.cc/150?u=omar' },
            { name: 'Ayesha Siddiqui', role: 'Customer Support', img: 'https://i.pravatar.cc/150?u=ayesha' },
          ].map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm text-center"
            >
              <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-slate-50" />
              <h4 className="font-bold text-slate-900">{member.name}</h4>
              <p className="text-sm text-emerald-800 font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
