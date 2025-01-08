import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { TestimonialCard } from '../ui/TestimonialCard';
import { TESTIMONIALS } from '../../data/testimonials';

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(TESTIMONIALS.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = TESTIMONIALS.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const averageRating = TESTIMONIALS.reduce((acc, curr) => acc + curr.rating, 0) / TESTIMONIALS.length;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <SectionTitle
            title="What Our Customers Say"
            subtitle="Based on 150+ reviews"
          />
          <div className="flex items-center mt-4">
            <div className="text-4xl font-bold text-gray-900">{averageRating.toFixed(1)}</div>
            <div className="ml-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded ${
                      i < Math.round(averageRating) ? 'bg-yellow-400' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600 mt-1">150+ reviews</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentPage * 100}%)`,
              }}
            >
              <div className="flex gap-8 min-w-full">
                {currentTestimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full md:w-1/3 flex-shrink-0">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
            aria-label="Next reviews"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2.5 h-2.5 rounded-full ${
                currentPage === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to review page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
