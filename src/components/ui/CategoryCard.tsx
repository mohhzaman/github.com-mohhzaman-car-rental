import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  image: string;
}

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="group relative rounded-lg overflow-hidden cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 z-10" />
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <category.icon className="h-6 w-6 mb-2" />
          <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
          <p className="text-sm text-gray-200">{category.description}</p>
        </div>
      </div>
    </div>
  );
}
