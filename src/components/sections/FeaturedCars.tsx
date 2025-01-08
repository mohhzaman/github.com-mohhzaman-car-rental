import React, { useState } from 'react';
import { CarCard } from '../ui/CarCard';
import { SectionTitle } from '../ui/SectionTitle';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FEATURED_CARS = [
  {
    id: '1',
    name: 'Tesla Model S Plaid',
    make: 'Tesla',
    model: 'Model S',
    year: 2023,
    price: 299,
    location: 'San Francisco, CA',
    type: 'ev',
    features: ['Autopilot', 'Long Range', 'Premium Interior'],
    images: ['https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80'],
    rating: 4.9,
    reviews: 124,
    owner: {
      id: 'tesla-sf',
      name: 'Tesla Rentals SF',
      type: 'company',
      verified: true,
      rating: 4.9,
      totalRentals: 1240,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80'
    },
    availability: {
      available: true,
      instantBook: true
    },
    specs: {
      horsepower: 1020,
      acceleration: '2.1s 0-60',
      transmission: 'Automatic',
      seats: 5
    }
  },
  {
    id: '2',
    name: 'Porsche 911 GT3',
    make: 'Porsche',
    model: '911',
    year: 2023,
    price: 599,
    location: 'Los Angeles, CA',
    type: 'sport',
    features: ['Sport Chrono', 'Carbon Ceramic Brakes', 'Sport Exhaust'],
    images: ['https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&q=80'],
    rating: 4.8,
    reviews: 89,
    owner: {
      id: 'exotic-la',
      name: 'Exotic Rentals LA',
      type: 'company',
      verified: true,
      rating: 4.8,
      totalRentals: 890,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80'
    },
    availability: {
      available: true,
      instantBook: false
    },
    specs: {
      horsepower: 502,
      acceleration: '3.2s 0-60',
      transmission: 'Manual',
      seats: 2
    }
  },
  {
    id: '3',
    name: 'Range Rover Autobiography',
    make: 'Land Rover',
    model: 'Range Rover',
    year: 2023,
    price: 399,
    location: 'Miami, FL',
    type: 'suv',
    features: ['Executive Seating', 'Massage Seats', 'Meridian Sound'],
    images: ['https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80'],
    rating: 4.7,
    reviews: 156,
    owner: {
      id: 'james-m',
      name: 'James Mitchell',
      type: 'individual',
      verified: true,
      rating: 4.9,
      totalRentals: 56,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
    },
    availability: {
      available: true,
      instantBook: true
    },
    specs: {
      horsepower: 523,
      acceleration: '4.4s 0-60',
      transmission: 'Automatic',
      seats: 5
    }
  }
];

export default function FeaturedCars() {
  const [filter, setFilter] = useState('all');

  const filteredCars = filter === 'all' 
    ? FEATURED_CARS 
    : FEATURED_CARS.filter(car => car.owner.type === filter);

  return (
    <section className="py-16 bg-luxury-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <SectionTitle
            title="Featured Vehicles"
            subtitle="Discover our most popular rentals"
            theme="dark"
          />
          <div className="flex gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-sm ${
                filter === 'all' 
                  ? 'bg-gold text-luxury-black' 
                  : 'border border-gold/20 text-gold'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('company')}
              className={`px-4 py-2 rounded-sm ${
                filter === 'company' 
                  ? 'bg-gold text-luxury-black' 
                  : 'border border-gold/20 text-gold'
              }`}
            >
              Companies
            </button>
            <button
              onClick={() => setFilter('individual')}
              className={`px-4 py-2 rounded-sm ${
                filter === 'individual' 
                  ? 'bg-gold text-luxury-black' 
                  : 'border border-gold/20 text-gold'
              }`}
            >
              Private Owners
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="luxury-button px-8 py-3 rounded-sm font-semibold">
            View All Vehicles
          </button>
        </div>
      </div>
    </section>
  );
}
