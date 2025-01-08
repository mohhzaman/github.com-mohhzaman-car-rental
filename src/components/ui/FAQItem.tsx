import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="luxury-card border border-gold/20 rounded-sm overflow-hidden">
      <button
        className="w-full px-6 py-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-luxury-cream">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gold" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gold" />
        )}
      </button>
      
      {isOpen && (
        <div className="px-6 pb-4 text-gray-400">
          <div className="pt-2 border-t border-gold/20">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
}
