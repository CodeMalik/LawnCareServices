// src/components/CTA.tsx

import React from 'react';

/**
 * Call-to-Action section encouraging users to contact or call.
 * Fully static, no props needed.
 */
const CTA: React.FC = () => {
    return (
        <section
            className="py-16 bg-green-700 text-white"
            aria-labelledby="cta-heading"
        >
            <div className="container mx-auto px-4 text-center">
                <h2
                    id="cta-heading"
                    className="text-3xl font-bold mb-6"
                >
                    Ready to Transform Your Outdoor Space?
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Contact us today for a free consultation and estimate. Our team is ready to bring your landscaping vision to life.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="tel:+529981234567"
                        className="bg-white text-green-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700"
                        aria-label="Call us now at +52 998 123 4567"
                    >
                        Call Us Now
                    </a>
                    <a
                        href="#contact"
                        className="border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700"
                        aria-label="Scroll to contact form for a free quote"
                    >
                        Get a Free Quote
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
``