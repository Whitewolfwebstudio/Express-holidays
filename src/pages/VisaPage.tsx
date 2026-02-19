import React from 'react';
import { motion } from 'framer-motion';
import { VISA_SERVICES } from '../constants';
import { Globe, ShieldCheck, Zap, CheckCircle } from 'lucide-react';
import { formatCurrency } from '../utils/cn';
import { Link } from 'react-router-dom';

export function VisaPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-slate-900 mb-6"
          >
            International <span className="text-emerald-800">Visa Services</span>
          </motion.h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Hassle-free visa processing for your next international adventure. We handle the paperwork, you plan the memories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {VISA_SERVICES.map((visa, i) => (
            <motion.div
              key={visa.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="h-48 relative overflow-hidden">
                <img src={visa.image} alt={visa.country} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-6 left-8 text-2xl font-bold text-white">{visa.country}</h3>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold mb-1">Visa Fee</p>
                    <p className="text-3xl font-bold text-emerald-900">{formatCurrency(visa.price)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400 uppercase font-bold mb-1">Processing</p>
                    <p className="text-sm font-bold text-slate-700">{visa.processingTime}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {['Document Assistance', 'Online Submission', 'Fast Track Option', 'Expert Consultation'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link to={`/booking?visa=${visa.id}`} className="block w-full bg-slate-900 text-white text-center py-4 rounded-2xl font-bold hover:bg-emerald-800 transition-colors">
                  Apply Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-emerald-900 rounded-[60px] p-12 md:p-20 text-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Simple <span className="text-gold-500">3-Step Process</span></h2>
            <p className="text-emerald-100/60">Getting your visa has never been easier.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Globe, title: 'Choose Destination', desc: 'Select the country you wish to visit from our list of supported destinations.' },
              { icon: ShieldCheck, title: 'Submit Documents', desc: 'Provide us with the necessary documents. Our experts will review them for accuracy.' },
              { icon: Zap, title: 'Get Your Visa', desc: 'We handle the submission and follow-up. Receive your visa within the specified timeframe.' },
            ].map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 border border-white/20">
                  <step.icon className="w-10 h-10 text-gold-500" />
                </div>
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-emerald-100/60 leading-relaxed">{step.desc}</p>
                {i < 2 && <div className="hidden lg:block absolute top-10 -right-6 w-12 h-px bg-white/20"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
