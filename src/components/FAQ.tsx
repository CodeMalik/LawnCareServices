'use client';

import React, { useState } from 'react';
import { faqItems } from '@/lib/data';
import { FadeIn } from './animations/Animate';

interface FAQItemType {
  id: string;
  question: string;
  answer: string;
}

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  const answerId = `faq-answer-${question.substring(0, 10).replace(/\W+/g, '-')}`;

  return (
    <div className="border-b border-gray-200 py-2" role="region">
      <button
        className="w-full flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md group"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        <h3 className="text-sm sm:text-lg font-medium text-gray-900 group-hover:text-green-600 transition-colors cursor-pointer">
          {question}
        </h3>
        <div
          className={`ml-4 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <svg
            className="h-5 w-5 text-gray-500 group-hover:text-green-600 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-label={isOpen ? 'Collapse answer' : 'Expand answer'}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div
        id={answerId}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-3' : 'max-h-0'}`}
        aria-hidden={!isOpen}
        role="region"
      >
        <p className="text-xs sm:text-sm text-gray-600 pb-2">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleItemClick = (itemId: string): void => {
    setOpenItem(prev => (prev === itemId ? null : itemId));
  };

  return (
    <section className="py-16 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 text-center">
              <h2
                id="faq-heading"
                className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900"
              >
                Frequently Asked Questions
              </h2>
            </div>

            {/* Two-column grid for FAQs */}
            <div
              className="grid gap-6 sm:grid-cols-2"
              role="tablist"
              aria-label="Frequently Asked Questions"
            >
              {faqItems.map((item: FAQItemType) => (
                <FAQItem
                  key={item.id}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openItem === item.id}
                  onClick={() => handleItemClick(item.id)}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FAQ;
