import React from 'react';
import { Search, Calendar, Car, Key } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

const STEPS = [
  {
    icon: Search,
    title: 'Find Your Car',
    description: 'Browse our selection of premium vehicles and choose your perfect ride'
  },
  {
    icon: Calendar,
    title: 'Choose Dates',
    description: 'Select your pickup and return dates with flexible scheduling'
  },
  {
    icon: Car,
    title: 'Book Instantly',
    description: 'Secure your reservation with instant confirmation'
  },
  {
    icon: Key,
    title: 'Enjoy Your Ride',
    description: 'Pick up your car and enjoy your premium driving experience'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="How It Works"
          subtitle="Rent your dream car in just a few simple steps"
        />
        
        <div className="mt-12 relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex p-4 rounded-full bg-white shadow-md text-blue-600 mb-4 relative z-10">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
