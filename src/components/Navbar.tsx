import React, { useState } from 'react';
import { Car, Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-luxury-black/95 border-b border-gold/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Car className="h-8 w-8 text-gold" />
            <span className="ml-2 text-2xl font-bold text-luxury-cream">LUXERIDE</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#fleet" className="text-luxury-cream hover:text-gold transition-colors">Fleet</a>
            <a href="#services" className="text-luxury-cream hover:text-gold transition-colors">Services</a>
            <a href="#membership" className="text-luxury-cream hover:text-gold transition-colors">Membership</a>
            <div className="border-l border-gold/20 h-6 mx-4" />
            <a href="tel:+1234567890" className="flex items-center text-gold hover:text-gold-light">
              <Phone className="h-4 w-4 mr-2" />
              <span>24/7 Concierge</span>
            </a>
            <button className="luxury-button px-6 py-2 rounded-sm font-semibold">
              Reserve Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-sm text-gold hover:text-gold-light"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-luxury-black/95 border-t border-gold/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#fleet" className="block px-3 py-2 text-luxury-cream hover:text-gold">Fleet</a>
            <a href="#services" className="block px-3 py-2 text-luxury-cream hover:text-gold">Services</a>
            <a href="#membership" className="block px-3 py-2 text-luxury-cream hover:text-gold">Membership</a>
            <a href="tel:+1234567890" className="block px-3 py-2 text-gold hover:text-gold-light">
              <Phone className="h-4 w-4 inline mr-2" />
              24/7 Concierge
            </a>
            <button className="w-full luxury-button mt-4 px-6 py-2 rounded-sm font-semibold">
              Reserve Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
