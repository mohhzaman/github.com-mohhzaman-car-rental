import type { Testimonial } from '../types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Business Executive',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    content: 'Exceptional service! The Tesla Model S was immaculate and the pickup process was seamless. Will definitely rent again.',
    rating: 5,
    date: '2024-02-15'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Travel Blogger',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    content: 'LuxeRide made my weekend getaway perfect. The Porsche 911 exceeded all expectations. Great communication throughout.',
    rating: 5,
    date: '2024-02-10'
  },
  // ... rest of the testimonials remain the same
];
