'use client';

import React, { useState } from 'react';

// ✅ Define props for FAQItem component
interface FAQItemProps {
  question: string;
  answer: string;
}

// ✅ FAQ Item Component — self-contained, accessible, reusable
const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Generate a safe, URL-friendly ID for aria-controls
  const answerId = `faq-answer-${question.substring(0, 10).replace(/\W+/g, '-')}`;

  return (
    <div className="border-b border-gray-200 py-2" role="region">
      <button
        className="w-full flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        <h3 className="text-sm sm:text-lg font-medium text-gray-900 group-hover:text-green-600 transition-colors cursor-pointer">
          {question}
        </h3>
        <div
          className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <svg
            className="h-5 w-5 text-gray-500 group-hover:text-green-600 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-label={isOpen ? 'Collapse answer' : 'Expand answer'}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      <div
        id={answerId}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!isOpen}
        role="region"
      >
        <p className="text-xs sm:text-sm text-gray-600 pb-2">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;