import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, CreditCard, CheckCircle2 } from 'lucide-react';

export function BookingPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form Side */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-10 md:p-16 rounded-[48px] shadow-xl border border-slate-100"
            >
              <h1 className="text-4xl font-bold text-slate-900 mb-8">Book Your <span className="text-emerald-800">Journey</span></h1>
              
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input type="text" className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input type="tel" className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="+92 300 1234567" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Travel Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input type="date" className="w-full p-4 pl-12 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Number of Travelers</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input type="number" min="1" className="w-full p-4 pl-12 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="1" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Select Package / Service</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <select className="w-full p-4 pl-12 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all appearance-none">
                      <option>Economy Umrah Package (15 Days)</option>
                      <option>Premium Umrah Package (15 Days)</option>
                      <option>VIP Royal Package (10 Days)</option>
                      <option>Weekly Southern Group Tour</option>
                      <option>Visa Service Only</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Additional Notes</label>
                  <textarea rows={4} className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="Any special requirements?"></textarea>
                </div>

                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 flex gap-4">
                  <CreditCard className="w-6 h-6 text-emerald-800 flex-shrink-0" />
                  <p className="text-sm text-emerald-800 leading-relaxed">
                    <strong>Payment Note:</strong> This is a booking request. Our team will contact you within 24 hours to confirm availability and discuss payment options (Bank Transfer, Cash, or Credit Card).
                  </p>
                </div>

                <button className="w-full bg-emerald-800 text-white py-5 rounded-2xl font-bold text-xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-900/20">
                  Confirm Booking Request
                </button>
              </form>
            </motion.div>
          </div>

          {/* Info Side */}
          <div className="space-y-8">
            <div className="bg-emerald-900 p-8 rounded-[40px] text-white">
              <h3 className="text-xl font-bold mb-6">Booking Benefits</h3>
              <ul className="space-y-4">
                {[
                  'Instant Confirmation Receipt',
                  'Price Lock Guarantee',
                  '24/7 Dedicated Support',
                  'Flexible Cancellation Policy',
                  'Complimentary Travel Kit',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-emerald-100/70">
                    <CheckCircle2 className="w-5 h-5 text-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Need Help?</h3>
              <p className="text-slate-500 text-sm mb-8">Speak with our travel experts for immediate assistance with your booking.</p>
              <div className="space-y-4">
                <a href="tel:+923008224774" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-emerald-800 text-white flex items-center justify-center">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Call Us</p>
                    <p className="font-bold text-slate-900">+92 300 8224774</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
