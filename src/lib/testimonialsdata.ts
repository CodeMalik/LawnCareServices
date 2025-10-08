// lib/testimonialdata.ts

import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export interface Testimonial {
  id: string;
  name: string;
  date: string;
  rating: number;
  verified?: boolean;
  text: string;
}

export interface TestimonialSection {
  heading: string;
  subheading: string;
  testimonials: Testimonial[];
}

export const fetchTestimonialData = async (): Promise<TestimonialSection | null> => {
  try {
    const docRef = doc(db, 'mainsite', 'testimonialsection');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as TestimonialSection;
    }
    return null;
  } catch (error) {
    console.error('Error fetching testimonials from Firestore:', error);
    return null;
  }
};