import React from 'react';
import { Car, Zap, Shield, Truck } from 'lucide-react';
import { CategoryCard } from '../ui/CategoryCard';
import { SectionTitle } from '../ui/SectionTitle';

const CATEGORIES = [
  {
    id: 'luxury',
    name: 'Luxury',
    icon: Shield,
    description: 'Premium vehicles for special occasions',
    image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?auto=format&fit=crop&q=80'
  },
  {
    id: 'ev',
    name: 'Electric',
    icon: Zap,
    description: 'Eco-friendly electric vehicles',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80'
  },
  {
    id: 'suv',
    name: 'SUVs',
    icon: Truck,
    description: 'Spacious vehicles for any adventure',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80'
  },
  {
    id: 'sport',
    name: 'Sports Cars',
    icon: Car,
    description: 'High-performance vehicles for thrill-seekers',
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80'
  }
];

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Browse by Category"
          subtitle="Find the perfect car for your needs"
        />
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
