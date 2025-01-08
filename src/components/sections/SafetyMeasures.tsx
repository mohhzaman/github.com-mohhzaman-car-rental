import React from 'react';
import { ShieldCheck, Sparkles, Wrench, HeartPulse } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

const SAFETY_MEASURES = [
  {
    icon: ShieldCheck,
    title: 'Insurance Coverage',
    items: [
      'Comprehensive coverage included',
      'Liability protection up to $1M',
      'Collision damage waiver',
      '24/7 roadside assistance'
    ]
  },
  {
    icon: Sparkles,
    title: 'Cleaning Protocol',
    items: [
      'Professional sanitization',
      'Deep cleaning between rentals',
      'Interior disinfection',
      'Air filtration service'
    ]
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    items: [
      'Regular safety inspections',
      'Professional maintenance',
      'Tire and brake checks',
      'Performance monitoring'
    ]
  },
  {
    icon: HeartPulse,
    title: 'Safety Features',
    items: [
      'Advanced driver assistance',
      'Emergency response system',
      'GPS tracking',
      'Anti-theft protection'
    ]
  }
];

export default function SafetyMeasures() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Your Safety is Our Priority"
          subtitle="We maintain the highest standards of safety and cleanliness"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SAFETY_MEASURES.map((measure, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="inline-flex p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
                <measure.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-4">{measure.title}</h3>
              <ul className="space-y-2">
                {measure.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
