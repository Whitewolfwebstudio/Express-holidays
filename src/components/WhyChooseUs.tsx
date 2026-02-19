import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Award, HeartHandshake } from 'lucide-react';
import { cn } from '../utils/cn';

const FEATURES = [
  {
    icon: Shield,
    title: 'Safe & Secure',
    desc: 'Your safety is our priority. We partner with only verified hotels and transport providers.',
    color: 'bg-blue-500'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    desc: 'Our team in Karachi and Saudi Arabia is available around the clock to assist you.',
    color: 'bg-emerald-500'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    desc: 'Experience luxury with our hand-picked 5-star hotels and VIP transport services.',
    color: 'bg-gold-500'
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Care',
    desc: 'Every pilgrim is special. We provide dedicated guides to ensure a spiritual journey.',
    color: 'bg-rose-500'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Why Thousands Trust <br />
              <span className="text-emerald-800">Xpress Holidays</span>
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              With over a decade of experience, we have perfected the art of spiritual travel. Our commitment to excellence has earned us a perfect 5-star rating from our valued clients.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {FEATURES.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className={cn("w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center text-white shadow-lg", feature.color)}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-500 leading-snug">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://www.islamicarchitecturalheritage.com/wp-content/uploads/2018/05/al-masjid-al-haram.jpg" 
                alt="Masjid al-Haram" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-800">10k+</p>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Pilgrims</p>
                </div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gold-500">15+</p>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Years Exp</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
