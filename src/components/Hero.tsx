import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Scene3D } from './Scene3D';
import { ArrowRight, MessageCircle, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-emerald-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      {/* Animated Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/20 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold-500/10 blur-[120px] rounded-full animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-emerald-800/50 border border-emerald-700/50 text-emerald-100 text-xs font-bold tracking-widest uppercase mb-6"
          >
            5.0 Rated Umrah Agency
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
            Experience a <span className="text-gold-500 italic font-arabic">Peaceful</span> & Hassle-Free <br />
            <span className="text-gradient-gold">Umrah Journey</span>
          </h1>
          
          <p className="text-emerald-100/70 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Your trusted partner for sacred pilgrimages. We handle everything from visas to luxury stays, so you can focus on your spiritual connection.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link 
              to="/umrah" 
              className="group bg-gold-500 hover:bg-gold-400 text-emerald-950 px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 shadow-xl shadow-gold-500/20"
            >
              Get Umrah Package
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a 
              href="https://wa.me/923008224774" 
              target="_blank" 
              rel="noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-green-400" />
              WhatsApp Now
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">24+</span>
              <span className="text-sm text-emerald-200/50 uppercase tracking-wider">5-Star Reviews</span>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">100%</span>
              <span className="text-sm text-emerald-200/50 uppercase tracking-wider">Visa Success</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative h-[500px] md:h-[600px]"
        >
          <Canvas shadows>
            <Scene3D />
          </Canvas>
          
          {/* Floating Info Cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-0 glass-dark p-4 rounded-2xl border-emerald-500/30"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <MapPin className="text-emerald-400 w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-emerald-200/50 uppercase font-bold">Location</p>
                <p className="text-sm text-white font-medium">Gulistan-e-Johar, Karachi</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 left-0 glass-dark p-4 rounded-2xl border-gold-500/30"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                <Phone className="text-gold-400 w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gold-200/50 uppercase font-bold">Support</p>
                <p className="text-sm text-white font-medium">Available 24 Hours</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
