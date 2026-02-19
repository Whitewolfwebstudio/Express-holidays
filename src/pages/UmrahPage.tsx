import React from 'react';
import { motion } from 'framer-motion';
import { UMRAH_PACKAGES } from '../constants';
import { CheckCircle2, Star, Clock, MapPin, ShieldCheck } from 'lucide-react';
import { formatCurrency } from '../utils/cn';
import { Link } from 'react-router-dom';

export function UmrahPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-slate-900 mb-6"
          >
            Our <span className="text-emerald-800">Umrah Packages</span>
          </motion.h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            We offer a variety of packages to suit every budget and preference, ensuring a comfortable and spiritually enriching experience.
          </p>
        </div>

        {/* Filters Placeholder */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All Packages', 'Economy', 'Premium', 'VIP Royal'].map((filter) => (
            <button key={filter} className="px-6 py-2 rounded-full border border-slate-200 text-sm font-medium hover:border-emerald-800 hover:text-emerald-800 transition-all">
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-12">
          {UMRAH_PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-8 bg-white p-6 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-2/5 h-[300px] lg:h-auto rounded-[32px] overflow-hidden">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
              </div>
              <div className="lg:w-3/5 p-4 lg:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {pkg.type}
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-3 h-3 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{pkg.title}</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">{pkg.description}</p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-700">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-sm font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-slate-100">
                  <div className="flex gap-8">
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Duration</p>
                      <div className="flex items-center gap-2 text-slate-900 font-bold">
                        <Clock className="w-4 h-4 text-emerald-600" />
                        {pkg.duration}
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Price</p>
                      <p className="text-2xl font-bold text-emerald-900">{formatCurrency(pkg.price)}</p>
                    </div>
                  </div>
                  <Link to={`/booking?package=${pkg.id}`} className="bg-emerald-800 text-white px-10 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/20">
                    Book This Package
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: ShieldCheck, text: 'Verified Agency' },
            { icon: MapPin, text: 'Near Haram Stays' },
            { icon: Star, text: '5-Star Service' },
            { icon: Clock, text: '24/7 Assistance' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-emerald-800">
                <item.icon className="w-6 h-6" />
              </div>
              <p className="font-bold text-slate-900 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
