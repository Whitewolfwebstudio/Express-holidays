import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

export function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            What Our <span className="text-emerald-800">Pilgrims Say</span>
          </motion.h2>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
            ))}
            <span className="ml-2 font-bold text-slate-900">5.0 Rating</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl relative group hover:bg-white hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-emerald-800/10 group-hover:text-emerald-800/20 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-xs text-slate-500">{review.date}</p>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed italic">
                "{review.comment}"
              </p>

              <div className="mt-6 flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
