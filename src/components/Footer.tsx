import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-emerald-950 text-white pt-20 pb-10 overflow-hidden relative">
      {/* Decorative Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="flex flex-col mb-6">
              <span className="text-2xl font-bold tracking-tighter leading-none">
                XPRESS <span className="text-gold-500">HOLIDAYS</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-emerald-200/50">
                Your Trusted Umrah Partner
              </span>
            </Link>
            <p className="text-emerald-100/60 leading-relaxed mb-8">
              Providing premium Umrah and travel services from Karachi to the world. We ensure your spiritual journey is comfortable and memorable.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-emerald-950 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-500">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Umrah Packages', 'Visa Services', 'Group Tours', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-emerald-100/60 hover:text-gold-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-500">Our Services</h4>
            <ul className="space-y-4">
              {['Economy Umrah', 'Premium Umrah', 'VIP Royal Umrah', 'Iran Visa', 'Kenya Visa', 'International Tours'].map((item) => (
                <li key={item} className="text-emerald-100/60">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-500">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span className="text-emerald-100/60">Block 4 Gulistan-e-Johar, Karachi, Pakistan</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span className="text-emerald-100/60">+92 300 8224774</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span className="text-emerald-100/60">info@xpressholidays.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-emerald-100/30 text-sm">
            © 2026 Xpress Holidays. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-emerald-100/30">
            <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/923008224774" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">
          Chat with us
        </span>
        <MessageCircle className="w-6 h-6" />
      </a>
    </footer>
  );
}
