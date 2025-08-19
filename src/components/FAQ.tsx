'use client';

import React, { useState } from 'react';
import { faqItems } from '@/lib/data';
import Image from 'next/image';
import { SlideInBottom, SlideInTop, ScaleIn, FadeIn } from './animations/Animate';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200 py-2">
    <button
      className="w-full flex justify-between items-center text-left focus:outline-none group"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <h3 className="text-sm sm:text-lg font-medium text-gray-900 group-hover:text-green-600 transition-colors cursor-pointer">
        {question}
      </h3>
      <div className={`ml-4 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
        <svg className="h-5 w-5 text-gray-500 group-hover:text-green-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </button>
    
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-3' : 'max-h-0'}`}>
      <p className="text-xs sm:text-sm text-gray-600 pb-2">{answer}</p>
    </div>
  </div>
);

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleItemClick = (itemId: string) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20">
          {/* Left Column - Image */}
          <FadeIn>
          <div className="mb-10 lg:mb-0">
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991298/faq_jgddyu.jpg"
                alt="Beautiful landscape"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          </FadeIn>

          {/* Right Column - FAQ */}
          <FadeIn>
          <div className="max-w-2xl mx-auto lg:max-w-none">
            <div className="mb-8">
              <h2 className="text-xl text-center sm:text-left sm:text-2xl font-bold text-gray-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              {/* <p className="mt-4 text-gray-600">
                Find answers to common questions about our landscaping services.
              </p> */}
            </div>
            

            <div className="space-y-6">
              {faqItems.map((item) => (
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
      </div>
    </section>
  );
};

export default FAQ;