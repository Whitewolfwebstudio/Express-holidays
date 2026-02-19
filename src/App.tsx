import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { UmrahPage } from './pages/UmrahPage';
import { VisaPage } from './pages/VisaPage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { BookingPage } from './pages/BookingPage';
import { GalleryPage } from './pages/GalleryPage';
import { motion, AnimatePresence } from 'framer-motion';

// Placeholder for Tours Page
const ToursPage = () => <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
  <div className="text-center mb-16">
    <h1 className="text-5xl font-bold text-slate-900 mb-6">Group <span className="text-emerald-800">Tours</span></h1>
    <p className="text-slate-500 max-w-2xl mx-auto text-lg">Join our expertly guided group tours for an unforgettable travel experience.</p>
  </div>
  <div className="grid md:grid-cols-2 gap-12">
    <div className="bg-white p-8 rounded-[48px] border border-slate-100 shadow-xl overflow-hidden group">
      <div className="h-64 -mx-8 -mt-8 mb-8 overflow-hidden">
        <img src="https://southerntour.co.uk/wp-content/themes/yootheme/cache/7e/sandbanks-poole-southern-tour-7eb0ab4e.jpeg" alt="Southern Tour" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      </div>
      <h3 className="text-2xl font-bold mb-4">Weekly Southern Group Tour</h3>
      <p className="text-slate-600 mb-8">Explore the scenic beauty of the south with our guided group tour. Includes transport, meals, and expert guide.</p>
      <div className="flex items-center justify-between">
        <p className="text-3xl font-bold text-emerald-900">$38</p>
        <button className="bg-emerald-800 text-white px-8 py-3 rounded-2xl font-bold">Book Now</button>
      </div>
    </div>
  </div>
</div>;

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="relative">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/umrah" element={<UmrahPage />} />
            <Route path="/visa" element={<VisaPage />} />
            <Route path="/tours" element={<ToursPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
