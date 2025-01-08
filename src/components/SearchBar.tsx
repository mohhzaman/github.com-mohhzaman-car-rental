import React, { useState } from 'react';
import { Search, Calendar, Car, DollarSign, Users } from 'lucide-react';
import type { SearchParams } from '../types';

export default function SearchBar() {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    location: '',
    startDate: '',
    endDate: '',
    type: '',
    priceRange: {
      min: 0,
      max: 1000
    },
    ownerType: 'all'
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search params:', searchParams);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-4xl mx-auto">
      <div className="luxury-card p-4 rounded-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gold" />
            </div>
            <input
              type="text"
              placeholder="Location"
              className="pl-10 w-full p-3 bg-luxury-black/50 border border-gold/20 rounded-sm focus:ring-2 focus:ring-gold focus:border-transparent text-luxury-cream placeholder-gray-500"
              value={searchParams.location}
              onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gold" />
            </div>
            <input
              type="date"
              className="pl-10 w-full p-3 bg-luxury-black/50 border border-gold/20 rounded-sm focus:ring-2 focus:ring-gold focus:border-transparent text-luxury-cream"
              value={searchParams.startDate}
              onChange={(e) => setSearchParams({ ...searchParams, startDate: e.target.value })}
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Car className="h-5 w-5 text-gold" />
            </div>
            <select
              className="pl-10 w-full p-3 bg-luxury-black/50 border border-gold/20 rounded-sm focus:ring-2 focus:ring-gold focus:border-transparent text-luxury-cream appearance-none"
              value={searchParams.type}
              onChange={(e) => setSearchParams({ ...searchParams, type: e.target.value })}
            >
              <option value="">All Categories</option>
              <option value="luxury">Luxury</option>
              <option value="sport">Sports</option>
              <option value="suv">SUV</option>
              <option value="ev">Electric</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="h-5 w-5 text-gold" />
            </div>
            <select
              className="pl-10 w-full p-3 bg-luxury-black/50 border border-gold/20 rounded-sm focus:ring-2 focus:ring-gold focus:border-transparent text-luxury-cream appearance-none"
              value={`${searchParams.priceRange?.min}-${searchParams.priceRange?.max}`}
              onChange={(e) => {
                const [min, max] = e.target.value.split('-').map(Number);
                setSearchParams({ ...searchParams, priceRange: { min, max } });
              }}
            >
              <option value="0-1000">Any Price</option>
              <option value="0-100">Under $100/day</option>
              <option value="100-300">$100 - $300/day</option>
              <option value="300-500">$300 - $500/day</option>
              <option value="500-1000">$500+/day</option>
            </select>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Users className="h-5 w-5 text-gold" />
            </div>
            <select
              className="pl-10 w-full p-3 bg-luxury-black/50 border border-gold/20 rounded-sm focus:ring-2 focus:ring-gold focus:border-transparent text-luxury-cream appearance-none"
              value={searchParams.ownerType}
              onChange={(e) => setSearchParams({ ...searchParams, ownerType: e.target.value as 'company' | 'individual' | 'all' })}
            >
              <option value="all">All Providers</option>
              <option value="company">Rental Companies</option>
              <option value="individual">Private Owners</option>
            </select>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full luxury-button py-3 px-6 rounded-sm font-bold text-luxury-black hover:shadow-gold/20"
        >
          Search Available Cars
        </button>
      </div>
    </form>
  );
}
