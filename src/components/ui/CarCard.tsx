import React from 'react';
import { Star, MapPin, Clock, Gauge, Shield } from 'lucide-react';
import type { Car } from '../../types';

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  return (
    <div className="luxury-card rounded-sm overflow-hidden group">
      <div className="relative h-56">
        <img
          src={car.images[0]}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {car.availability.instantBook && (
          <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-sm text-sm font-medium flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            Instant Book
          </div>
        )}
        <div className="absolute top-4 right-4 bg-gold text-luxury-black px-3 py-1 rounded-sm font-bold">
          ${car.price}/day
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-luxury-cream mb-1">{car.name}</h3>
            <div className="text-sm text-gray-400">{car.year} • {car.make}</div>
          </div>
          <div className="flex items-center bg-luxury-black/50 px-2 py-1 rounded-sm">
            <Star className="h-4 w-4 text-gold fill-current" />
            <span className="ml-1 text-luxury-cream">{car.rating}</span>
          </div>
        </div>

        {/* Owner Info */}
        <div className="flex items-center mb-4 p-2 bg-luxury-black/30 rounded-sm">
          <img 
            src={car.owner.image} 
            alt={car.owner.name}
            className="h-8 w-8 rounded-full object-cover"
          />
          <div className="ml-2 flex-1">
            <div className="flex items-center">
              <span className="text-luxury-cream text-sm">{car.owner.name}</span>
              {car.owner.verified && (
                <Shield className="h-4 w-4 text-gold ml-1" />
              )}
            </div>
            <div className="flex items-center text-xs text-gray-400">
              <span>{car.owner.type === 'company' ? 'Rental Company' : 'Private Owner'}</span>
              <span className="mx-1">•</span>
              <span>{car.owner.totalRentals}+ trips</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div className="flex items-center text-gray-400">
            <Gauge className="h-4 w-4 mr-2" />
            {car.specs.horsepower} HP
          </div>
          <div className="flex items-center text-gray-400">
            <MapPin className="h-4 w-4 mr-2" />
            {car.location}
          </div>
        </div>

        <button className="w-full luxury-button py-3 font-bold rounded-sm">
          {car.availability.available ? 'Book Now' : 'View Details'}
        </button>
      </div>
    </div>
  );
}
