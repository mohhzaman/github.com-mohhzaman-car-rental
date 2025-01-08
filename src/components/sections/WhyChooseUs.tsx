import React from 'react';
import { Shield, Clock, Headphones, Award } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

const BENEFITS = [
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Every rental includes comprehensive insurance coverage'
  },
  {
    icon: Clock,
    title: '24/7 Pickup',
    description: 'Flexible pickup and return times to fit your schedule'
  },
  {
    icon: Headphones,
    title: 'Premium Support',
    description: 'Dedicated customer service team available around the clock'
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: 'All vehicles undergo rigorous maintenance checks'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Why Choose LuxeRide"
          subtitle="Experience premium car rental service with peace of mind"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50">
              <div className="inline-flex p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
