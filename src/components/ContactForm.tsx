'use client';

import React, { useState } from 'react';

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a delay to show the loading state
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Form submission logic not implemented yet.');
    }, 1000);
  };

  return (
    <div className={`w-full ${className}`} id="contact-form">
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name Field */}
        <div>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 border-2 outline-none rounded-lg focus:ring-1 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 border-gray-300 hover:border-gray-400"
            placeholder="Your Name"
          />
        </div>

        {/* Email Field */}
        <div>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 border-2 outline-none rounded-lg focus:ring-1 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 border-gray-300 hover:border-gray-400"
            placeholder="Your Email"
          />
        </div>

        {/* Subject Field */}
        <div>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-3 border-2 outline-none rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-200 border-gray-300 hover:border-gray-400"
            placeholder="Subject"
          />
        </div>

        {/* Message Field */}
        <div>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="w-full px-4 py-3 border-2 outline-none rounded-lg focus:ring-1 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] transition-all duration-200 resize-vertical border-gray-300 hover:border-gray-400"
            placeholder="Your Message"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-5 py-2 bg-[var(--primary-color)] rounded-xl text-white font-semibold transition-all cursor-pointer duration-300 transform ${
              isSubmitting
                ? 'bg-[var(--primary-color)] cursor-not-allowed'
                : 'bg-[var(--primary-color)] hover:bg-green-700 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl'
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending Message...
              </div>
            ) : (
              'Send Message'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;