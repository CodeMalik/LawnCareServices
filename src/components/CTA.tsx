// src/components/CTA.tsx
export default function CTA() {
    return (
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Outdoor Space?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate. Our team is ready to bring your landscaping vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+529981234567" 
              className="bg-white text-green-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Call Us Now
            </a>
            <a 
              href="#contact" 
              className="border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-green-700 transition-colors"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
    )
  }