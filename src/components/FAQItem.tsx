// src/components/FAQItem.tsx
'use client';

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-2 sm:py-4">
      <button
        className="w-full flex justify-between items-center text-left focus:outline-none group cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-sm sm:text-lg font-medium text-gray-900 group-hover:text-green-600 transition-colors cursor-pointer">
          {question}
        </h3>
        <div className={`ml-4 cursor-pointer flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="h-5 w-5 text-gray-500 group-hover:text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-3' : 'max-h-0'}`}>
        <p className="text-xs sm:text-sm text-gray-600 pb-2">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;