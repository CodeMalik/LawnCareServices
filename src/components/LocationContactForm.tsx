'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/Animate';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  service?: string;
  propertySize?: string;
  acceptedPrice?: boolean;
}

const LocationContactForm: React.FC<{ form: { id: string; locationSlug: string; serviceSlug?: string } }> = ({ form }) => {
  const params = useParams();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [status, setStatus] = useState<string | null>(null);
  const [agreed, setAgreed] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showPropertySize, setShowPropertySize] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [price, setPrice] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'service' && value) {
      setShowPropertySize(true);
    }
    if (name === 'propertySize' && value) {
      calculatePrice(value);
      setShowPrice(true);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name === 'email' && formData.email.trim()) {
      setShowService(true);
    }
  };

  const calculatePrice = (size: string) => {
    const rates = { small: 50, medium: 100, large: 200 };
    setPrice(rates[size as keyof typeof rates] || 50);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Submitting...');

    if (!agreed) {
      setStatus('Please agree to the terms and conditions.');
      return;
    }

    if (showPrice && formData.acceptedPrice === false) {
      setStatus('Price declined. Please adjust your selections or try again.');
      setShowPrice(false);
      setFormData((prev) => ({ ...prev, service: '', propertySize: '', acceptedPrice: undefined }));
      setShowService(true);
      setShowPropertySize(false);
      return;
    }

    alert('Form submitted successfully with accepted price!');
    setFormData({ name: '', email: '', phone: '', address: '' });
    setStatus(null);
    setAgreed(false);
    setShowService(false);
    setShowPropertySize(false);
    setShowPrice(false);
    setPrice(null);
  };

  return (
    <FadeIn>
      <section className="py-12 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 xl:w-1/2">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-full rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519842/1-3_gtvfal_3_11zon_qbqgyw.jpg" 
                  alt="Lawn care professional working" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Form Section */}
            <div className="w-full lg:w-1/2 xl:w-3/5 max-w-2xl mx-auto lg:mx-0">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Get Your Mowing Price Instantly</h2>
                  <p className="text-gray-600">or</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">Get A Free Estimate For All Other Services</h3>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <input type="hidden" name="locationSlug" value={form.locationSlug} />
                  {form.serviceSlug && <input type="hidden" name="serviceSlug" value={form.serviceSlug} />}
                  
                  <div className="space-y-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      placeholder="Enter your name"
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-[var(--primary-color)] focus:ring-1 p-2.5 focus:ring-[var(--primary-color)] text-sm transition-all duration-200 outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      placeholder="Enter your email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className="block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-[var(--primary-color)] focus:ring-1 p-2.5 focus:ring-[var(--primary-color)] text-sm transition-all duration-200 outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address*</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      placeholder="Enter your address"
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-[var(--primary-color)] focus:ring-1 p-2.5 focus:ring-[var(--primary-color)] text-sm transition-all duration-200 outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      placeholder="Enter your phone number"
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-[var(--primary-color)] focus:ring-1 p-2.5 focus:ring-[var(--primary-color)] text-sm transition-all duration-200 outline-none"
                    />
                  </div>
                  {showService && (
                    <div className="space-y-1">
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700">Which Service is Needed?</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service || ''}
                        onChange={handleChange}
                        required
                        className="block w-full h-12 text-base rounded-lg border-2 border-gray-300 bg-white px-4 py-3 shadow-sm transition-all duration-200 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] focus:outline-none md:text-sm"
                      >  
                        <option value="">Select a service</option>
                        <option value="mowing">Lawn Mowing</option>
                        <option value="landscaping">Landscaping</option>
                        <option value="sprinkler">Sprinkler Repair</option>
                      </select>
                    </div>
                  )}
                  {showPropertySize && (
                    <div className="space-y-1">
                      <label htmlFor="propertySize" className="block text-sm font-medium text-gray-700">Property Size</label>
                      <select
                        id="propertySize"
                        name="propertySize"
                        value={formData.propertySize || ''}
                        onChange={handleChange}
                        required
                        className="block w-full h-12 text-base rounded-lg border-2 border-gray-300 bg-white px-4 py-3 shadow-sm transition-all duration-200 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] focus:outline-none md:text-sm"
                      >  
                        <option value="">Select property size</option>
                        <option value="small">Small (0-500 sq ft)</option>
                        <option value="medium">Medium (500-2000 sq ft)</option>
                        <option value="large">Large (2000+ sq ft)</option>
                      </select>
                    </div>
                  )}
                  {showPrice && price !== null && (
                    <div>
                      <p className="text-center text-lg font-semibold text-gray-900">Instant Price: ${price}</p>
                      <div className="mt-2 flex justify-around">
                        <button
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, acceptedPrice: true }))}
                          className="bg-[var(--primary-color)] text-white py-2 px-4 rounded-md hover:bg-green-600 transition-all hover:scale-[1.02] duration-200 cursor-pointer"
                        >
                          Accept
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, acceptedPrice: false }))}
                          className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-all hover:scale-[1.02] duration-200 cursor-pointer"
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start space-x-3 pt-2">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        id="agreed"
                        name="agreed"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="h-4 w-4 text-[var(--primary-color)] focus:ring-[var(--primary-color)] border-gray-300 rounded"
                      />
                    </div>
                    <label htmlFor="agreed" className="text-sm text-gray-700">
                      I agree to the <span className="text-[var(--primary-color)] hover:underline font-medium cursor-pointer">Terms and Conditions</span> and <span className="text-[var(--primary-color)] hover:underline font-medium cursor-pointer">Privacy Policy</span>.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className={`w-full py-3 px-6 rounded-lg font-medium text-white hover:scale-[1.02] transition-all duration-300 transform cursor-pointer ${
                      !agreed || (showPrice && formData.acceptedPrice === undefined)
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-[var(--primary-color)] hover:bg-green-600 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600`}
                    disabled={!agreed || (showPrice && formData.acceptedPrice === undefined)}
                  >
                    {status === 'Submitting...' ? 'Sending...' : 'Send Message'}
                  </button>
                  {status && (
                    <div className={`text-center text-sm p-3 rounded-md ${
                      status.includes('error') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700 '
                    }`}>
                      {status}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default LocationContactForm;