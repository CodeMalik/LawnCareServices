'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/Animate';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase'; // Adjust import path as needed

// FAQ Item Component
interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
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

// FAQ Section Component
interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  description?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ 
  faqs, 
  title = "FAQs"
}) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImageFromFirebase = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "mainservicescontent", "faqimage");
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          setImageUrl(data.image);
        }
      } catch (err) {
        console.error("Error fetching image from Firebase:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchImageFromFirebase();
  }, []);

  // Loading state for entire component
  if (loading) {
    return (
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
            {/* Left Column - Image Loader */}
            <div className="mb-10 lg:mb-0">
              <div className="animate-pulse">
                <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-gray-200 shadow-xl"></div>
              </div>
            </div>

            {/* Right Column - FAQ Loader */}
            <div className="max-w-2xl mx-auto lg:mx-0">
              {/* Title Loader */}
              <div className="mb-8">
                <div className="animate-pulse">
                  <div className="h-10 bg-gray-300 rounded w-24 mb-4"></div>
                </div>
              </div>

              {/* FAQ Items Loader */}
              <div className="space-y-1">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="border-b border-gray-200 py-4">
                      <div className="flex justify-between items-center">
                        <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                        <div className="w-5 h-5 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left Column - Image */}
          <FadeIn>
            <div className="mb-10 lg:mb-0">
              <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt="Frequently Asked Questions"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No image available</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
          </FadeIn>

          {/* Right Column - FAQ */}
          <FadeIn>
            <div className="max-w-2xl mx-auto lg:mx-0">
              <div className="mb-8">
                <h2 className="text-center lg:text-left text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  {title}
                </h2>
              </div>

              <div className="space-y-1">
                {faqs.map((faq: FAQ, index: number) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;