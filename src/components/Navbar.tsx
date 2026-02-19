import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle, MapPin } from 'lucide-react';
import { cn } from '../utils/cn';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Umrah Packages', path: '/umrah' },
  { name: 'Visa Services', path: '/visa' },
  { name: 'Group Tours', path: '/tours' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className={cn(
            "text-2xl font-bold tracking-tighter leading-none",
            isScrolled ? "text-emerald-900" : "text-white"
          )}>
            XPRESS <span className="text-gold-500">HOLIDAYS</span>
          </span>
          <span className={cn(
            "text-[10px] uppercase tracking-[0.2em] font-medium",
            isScrolled ? "text-emerald-700" : "text-emerald-100"
          )}>
            Your Trusted Umrah Partner
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-gold-500',
                location.pathname === link.path
                  ? 'text-gold-500'
                  : isScrolled ? 'text-slate-700' : 'text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/booking"
            className="bg-emerald-800 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/20"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-100 p-6 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-lg font-medium py-2',
                    location.pathname === link.path ? 'text-gold-500' : 'text-slate-700'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                onClick={() => setIsOpen(false)}
                className="bg-emerald-800 text-white text-center py-3 rounded-xl font-bold"
              >
                Book Your Journey
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
