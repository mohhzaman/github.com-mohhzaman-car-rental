import React from 'react';
import SearchBar from './SearchBar';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/90 via-luxury-black/70 to-luxury-black/90" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full text-center text-luxury-cream pt-20">
          <span className="text-gold uppercase tracking-widest mb-4">Premium Car Rental Service</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gold-gradient">
              Experience Pure
            </span>
            <br />
            <span className="text-luxury-cream">
              Automotive Luxury
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-300">
            Curated collection of the world's finest automobiles for the most discerning clients.
          </p>
          
          <SearchBar />

          <div className="mt-16 grid grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
            <div className="luxury-card p-6 rounded-sm">
              <div className="text-3xl font-bold text-gold">200+</div>
              <div className="text-sm text-gray-300">Luxury Vehicles</div>
            </div>
            <div className="luxury-card p-6 rounded-sm">
              <div className="text-3xl font-bold text-gold">24/7</div>
              <div className="text-sm text-gray-300">Concierge Service</div>
            </div>
            <div className="luxury-card p-6 rounded-sm">
              <div className="text-3xl font-bold text-gold">100%</div>
              <div className="text-sm text-gray-300">Satisfaction Rate</div>
            </div>
          </div>

          <div className="mt-12 flex justify-center space-x-8">
            <a href="#featured-cars" className="flex items-center text-gold hover:text-gold-light transition-colors">
              <span className="mr-2">View Collection</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Luxury Brands Ticker */}
      <div className="absolute bottom-0 w-full bg-luxury-dark/80 backdrop-blur-sm py-6">
        <div className="flex justify-around items-center max-w-7xl mx-auto px-4">
          <span className="text-gold-light opacity-50">Rolls-Royce</span>
          <span className="text-gold-light opacity-50">Bentley</span>
          <span className="text-gold-light opacity-50">Ferrari</span>
          <span className="text-gold-light opacity-50">Lamborghini</span>
          <span className="text-gold-light opacity-50">Porsche</span>
          <span className="text-gold-light opacity-50">Aston Martin</span>
        </div>
      </div>
    </div>
  );
}
