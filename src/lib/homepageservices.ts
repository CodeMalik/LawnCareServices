// lib/homepageservices.ts
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase'; // Your Firebase config

// Service interface matching your Firebase data structure
export interface Service {
  id: string;
  slug: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  image: string;
  stats?: Array<{
    number: number;
    description: string;
  }>;
  features: Array<{
    image: string;
    title: string;
    description: string;
    featuresArray: Array<{ description: string }>;
    buttonText: string;
  }>;
  solution?: {
    title: string;
    description: string;
    imageGallery: Array<{ image: string }>;
    buttonText: string;
  };
  card?: {
    title: string;
    description: string;
    buttonText: string;
  };
  mapSection?: {
    title: string;
    description: string;
  };
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  cta: {
    image: string;
    finalCta: string;
    finalCtaDescription: string;
    buttonText: string;
  };
  longDescription?: Array<{
    title: string;
    description: string;
  }>;
  form?: any;
  ServiceText?: any;
}

// Get all services for static generation with error handling
export async function getAllServices(): Promise<Service[]> {
  try {
    console.log('Fetching services from Firebase...');
    const querySnapshot = await getDocs(collection(db, 'mainservicescontent'));
    const services: Service[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      // Validate that the document has required fields
      if (data.slug && data.title) {
        services.push({
          id: doc.id,
          ...data
        } as Service);
      } else {
        console.warn(`Skipping document ${doc.id}: missing required fields`, data);
      }
    });
    
    console.log(`Successfully fetched ${services.length} services from Firebase`);
    return services;
  } catch (error) {
    console.error('Error fetching services from Firebase:', error);
    // Return empty array instead of throwing to prevent build failures
    return [];
  }
}

// Get a single service by slug with better error handling
export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    if (!slug) {
      console.error('No slug provided to getServiceBySlug');
      return null;
    }

    console.log(`Fetching service with slug: ${slug}`);
    
    // Query Firestore directly for the specific slug
    const q = query(
      collection(db, 'mainservicescontent'),
      where('slug', '==', slug)
    );
    
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      console.log(`No service found with slug: ${slug}`);
      return null;
    }
    
    const doc = querySnapshot.docs[0];
    const service = {
      id: doc.id,
      ...doc.data()
    } as Service;
    
    console.log(`Successfully fetched service: ${service.title}`);
    return service;
  } catch (error) {
    console.error(`Error fetching service with slug ${slug}:`, error);
    return null;
  }
}