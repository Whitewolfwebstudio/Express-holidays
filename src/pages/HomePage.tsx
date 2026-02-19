import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonials } from '../components/Testimonials';
import { UMRAH_PACKAGES, VISA_SERVICES } from '../constants';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/cn';

export function HomePage() {
  return (
    <div className="bg-white">
      <Hero />
      
      {/* Super Seat Sale Banner */}
      <div className="bg-gold-500 py-4 overflow-hidden relative">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-20 items-center"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-emerald-950 font-bold text-xl uppercase tracking-tighter flex items-center gap-4">
              ⚡ Super Seat Sale Live! ⚡ Up to 20% Off on Early Bookings ⚡ Limited Seats Remaining ⚡
            </span>
          ))}
        </motion.div>
      </div>

      {/* Featured Umrah Packages */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured <span className="text-emerald-800">Umrah Packages</span></h2>
              <p className="text-slate-500 max-w-xl">Choose from our carefully curated packages designed to provide comfort and spiritual peace.</p>
            </div>
            <Link to="/umrah" className="text-emerald-800 font-bold flex items-center gap-2 group">
              View All Packages
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {UMRAH_PACKAGES.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold text-emerald-900 uppercase tracking-widest">
                    {pkg.type}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2">{pkg.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {pkg.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        {feat}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold">Starting from</p>
                      <p className="text-2xl font-bold text-emerald-900">{formatCurrency(pkg.price)}</p>
                    </div>
                    <Link to={`/booking?package=${pkg.id}`} className="bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-emerald-800 transition-colors">
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Group Tour Highlight */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[48px] overflow-hidden shadow-xl border border-slate-100 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 h-[400px] lg:h-auto relative">
              <img 
                src="https://5.imimg.com/data5/SELLER/Default/2020/12/VW/MH/OD/8118956/student-group-tour.jpg" 
                alt="Southern Group Tour" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-rose-600 text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest animate-pulse">
                Hot Deal
              </div>
            </div>
            <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center">
              <span className="text-emerald-800 font-bold uppercase tracking-[0.3em] text-xs mb-4">Limited Time Offer</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Weekly Southern <br /><span className="text-emerald-800">Group Tour</span></h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Experience the breathtaking beauty of the south with our expert-guided group tours. Perfect for families and solo travelers alike.
              </p>
              <div className="flex items-center gap-8 mb-10">
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold mb-1">Price</p>
                  <p className="text-3xl font-bold text-emerald-900">{formatCurrency(38)}</p>
                </div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold mb-1">Frequency</p>
                  <p className="text-xl font-bold text-slate-800">Every Saturday</p>
                </div>
              </div>
              <Link to="/booking?tour=southern" className="bg-emerald-800 text-white px-10 py-4 rounded-2xl font-bold text-center hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/20">
                Book Your Spot
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Services Preview */}
      <section className="py-24 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'https://assets-excellenttrek.b-cdn.net/wp-content/uploads/2017/12/Mount-Everest.jpg' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">International <span className="text-gold-500">Visa Services</span></h2>
            <p className="text-emerald-100/60 max-w-2xl mx-auto">Fast, reliable, and guaranteed visa processing for popular destinations worldwide.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {VISA_SERVICES.map((visa, i) => (
              <motion.div
                key={visa.id}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[40px] text-center group"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 border-4 border-gold-500/20">
                  <img src={visa.image} alt={visa.country} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{visa.country} Visa</h3>
                <p className="text-gold-500 font-bold text-3xl mb-4">{formatCurrency(visa.price)}</p>
                <p className="text-emerald-100/40 text-sm mb-8">Processing: {visa.processingTime}</p>
                <Link to="/visa" className="inline-block w-full py-4 rounded-2xl bg-white text-emerald-950 font-bold hover:bg-gold-500 transition-colors">
                  Apply Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-emerald-800 rounded-[60px] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
            
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-8"
            >
              Ready to Begin Your <br />
              <span className="text-gold-500">Sacred Journey?</span>
            </motion.h2>
            <p className="text-emerald-100/70 text-lg mb-12 max-w-2xl mx-auto">
              Join thousands of satisfied pilgrims who have experienced the peace of mind that comes with Xpress Holidays.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/booking" className="bg-gold-500 text-emerald-950 px-10 py-5 rounded-full font-bold text-lg hover:bg-gold-400 transition-all shadow-2xl shadow-gold-500/30">
                Book Your Package Now
              </Link>
              <a href="tel:+923008224774" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                Call +92 300 8224774
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
