'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

// Form validation schema using Zod
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/^[\d\s\-\(\)\+]+$/, 'Please enter a valid phone number'),
  subject: z
    .string()
    .min(3, 'Subject must be at least 3 characters')
    .max(100, 'Subject must be less than 100 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

interface ContactFormProps {
  className?: string
}

const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call - replace with your actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', data)
      
      setSubmitStatus('success')
      reset()
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`w-full ${className}`} id="contact-form">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        {/* Name Field */}
        <div>
          {/* <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Your Name *
          </label> */}
          <input
            type="text"
            id="name"
            {...register('name')}
            className={`w-full px-4 py-3 border outline-none rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
              errors.name 
                ? 'border-red-300 bg-red-50' 
                : 'border-gray-300 hover:border-gray-400 focus:border-green-500'
            }`}
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Your Email *
          </label> */}
          <input
            type="email"
            id="email"
            {...register('email')}
            className={`w-full px-4 py-3 border outline-none rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
              errors.email 
                ? 'border-red-300 bg-red-50' 
                : 'border-gray-300 hover:border-gray-400 focus:border-green-500'
            }`}
            placeholder="Your Email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          {/* <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject *
          </label> */}
          <input
            type="text"
            id="subject"
            {...register('subject')}
            className={`w-full px-4 py-3 border outline-none rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
              errors.subject 
                ? 'border-red-300 bg-red-50' 
                : 'border-gray-300 hover:border-gray-400 focus:border-green-500'
            }`}
            placeholder="Subject"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          {/* <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label> */}
          <textarea
            id="message"
            rows={3}
            {...register('message')}
            className={`w-full px-4 py-3 border outline-none rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-vertical ${
              errors.message 
                ? 'border-red-300 bg-red-50' 
                : 'border-gray-300 hover:border-gray-400 focus:border-green-500'
            }`}
            placeholder="Your Message"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-5 py-2 bg-[var(--primary-color)] rounded-xl text-white font-semibold transition-all duration-300 transform ${
              isSubmitting
                ? 'bg-[var(--primary-color)] cursor-not-allowed'
                : 'bg-[var(--primary-color)] hover:bg-green-700 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl'
            } cursor-pointer`}
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

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-green-600 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-green-800 font-medium">
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-red-600 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-red-800 font-medium">
                Sorry, there was an error sending your message. Please try again or call us directly.
              </p>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

export default ContactForm