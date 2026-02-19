import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-slate-900 mb-6"
          >
            Get in <span className="text-emerald-800">Touch</span>
          </motion.h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Have questions about our packages or services? Our team is here to help you 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-800 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold mb-1">Office Address</p>
                    <p className="text-slate-700 font-medium">Block 4 Gulistan-e-Johar, Karachi, Pakistan</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold mb-1">Call Us</p>
                    <p className="text-slate-700 font-medium">+92 300 8224774</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold mb-1">WhatsApp</p>
                    <p className="text-slate-700 font-medium">+92 300 8224774</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold-50 flex items-center justify-center text-gold-600 flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold mb-1">Open Hours</p>
                    <p className="text-slate-700 font-medium">24 Hours / 7 Days</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-slate-100">
                <p className="text-sm text-slate-500 mb-4">Follow us on social media</p>
                <div className="flex gap-4">
                  {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                    <a key={social} href="#" className="text-slate-400 hover:text-emerald-800 transition-colors font-bold text-sm">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 md:p-16 rounded-[48px] border border-slate-100 shadow-xl">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                    <input type="text" className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input type="email" className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="Enter your email" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                  <select className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all">
                    <option>Umrah Package Inquiry</option>
                    <option>Visa Service Inquiry</option>
                    <option>Group Tour Inquiry</option>
                    <option>General Question</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Your Message</label>
                  <textarea rows={5} className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <button className="bg-emerald-800 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20">
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-24 rounded-[60px] overflow-hidden h-[500px] relative shadow-2xl border-8 border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.123456789!2d67.123456789!3d24.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDA3JzI0LjQiTiA2N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2s!4v1234567890123" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Xpress Holidays Location"
          ></iframe>
          <div className="absolute top-8 left-8 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 max-w-xs">
            <h4 className="font-bold text-slate-900 mb-2">Xpress Holidays Office</h4>
            <p className="text-sm text-slate-600 mb-4">Block 4 Gulistan-e-Johar, Karachi, Pakistan</p>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-emerald-800 font-bold text-sm hover:underline">Get Directions</a>
          </div>
        </div>
      </div>
    </div>
  );
}
