import React from 'react';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-black/95 rounded-sm border border-amber-500/20 p-8 h-full flex flex-col">
      <div className="flex items-center mb-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-14 w-14 rounded-sm object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-white">{testimonial.name}</h4>
          <p className="text-amber-400">{testimonial.role}</p>
          <p className="text-xs text-gray-500">{testimonial.date}</p>
        </div>
      </div>

      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < testimonial.rating
                ? 'text-amber-400 fill-current'
                : 'text-gray-700'
            }`}
          />
        ))}
      </div>
      
      <p className="text-gray-300 flex-grow font-light">{testimonial.content}</p>
      
      <div className="mt-6 flex justify-between items-center border-t border-amber-500/20 pt-4">
        <button className="text-amber-400 hover:text-amber-300 text-sm">Helpful</button>
        <button className="text-amber-400 hover:text-amber-300 text-sm">Share</button>
      </div>
    </div>
  );
}
