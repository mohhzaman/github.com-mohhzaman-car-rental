import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { FAQItem } from '../ui/FAQItem';

const FAQ_ITEMS = [
  {
    question: 'What documents do I need to rent a luxury vehicle?',
    answer: 'You will need a valid driver license, proof of full coverage insurance, a major credit card, and must be at least 25 years old. Additional documentation may be required for specific high-end vehicles.'
  },
  {
    question: 'Is insurance included with luxury rentals?',
    answer: 'Yes, all rentals include our premium insurance coverage with up to $2M liability protection. Additional coverage options are available for complete peace of mind.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We offer free cancellation up to 48 hours before your scheduled rental. Cancellations within 48 hours may be subject to a fee depending on the vehicle category.'
  },
  {
    question: 'Do you offer concierge delivery?',
    answer: 'Yes, we provide white-glove delivery service to your preferred location, including private airports, luxury hotels, or your residence within our service area.'
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-luxury-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our luxury car rental service"
          theme="dark"
        />
        
        <div className="mt-12 space-y-6">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">
            Still have questions? Our concierge team is here to help.
          </p>
          <button className="luxury-button px-8 py-3 rounded-sm font-semibold">
            Contact Concierge
          </button>
        </div>
      </div>
    </section>
  );
}
