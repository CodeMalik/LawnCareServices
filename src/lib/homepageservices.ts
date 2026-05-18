// lib/homepageservices.ts
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase';
import { Service } from '@/types/servicestypes';

// Caching mechanism
let servicesCache: Service[] | null = null;
let cacheTimestamp: number | null = null;
const CACHE_DURATION = process.env.NODE_ENV === 'development' ? 0 : 5 * 60 * 1000;

// Get all services for static generation with error handling
export async function getAllServices(): Promise<Service[]> {
  // Return cached data if valid
  if (process.env.NODE_ENV !== 'development' && 
      servicesCache && 
      cacheTimestamp && 
      Date.now() - cacheTimestamp < CACHE_DURATION) {
    console.log('Returning services from cache');
    return servicesCache;
  }

  try {
    console.log('Fetching services from Firebase...');
    const querySnapshot = await getDocs(collection(db, 'mainservicescontent'));
    const services: Service[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      // Validate that the document has required fields
      if (data.slug && data.title) {
        const service: Service = {
          id: doc.id,
          slug: data.slug,
          title: data.title,
          heroTitle: data.heroTitle || data.title,
          heroSubtitle: data.heroSubtitle || '',
          image: data.image || '/default-service-image.jpg',
          features: data.features || [],
          cta: data.cta || {
            image: '/default-cta-image.jpg',
            finalCta: 'Get Started Today',
            finalCtaDescription: 'Contact us for professional service',
            buttonText: 'Contact Us'
          },
          stats: data.stats || [],
          solution: data.solution,
          card: data.card,
          mapSection: data.mapSection,
          faqs: data.faqs || [],
          longDescription: data.longDescription,
          form: data.form,
          ServiceText: data.ServiceText
        };
        services.push(service);
      } else {
        console.warn(`Skipping document ${doc.id}: missing required fields`, data);
      }
    });
    
    // Update cache (only in production)
    if (process.env.NODE_ENV !== 'development') {
      servicesCache = services;
      cacheTimestamp = Date.now();
    }
    
    console.log(`Successfully fetched ${services.length} services from Firebase`);
    return services;
  } catch (error) {
    console.error('Error fetching services from Firebase:', error);
    // Return cached data if available, even if stale (production only)
    if (process.env.NODE_ENV !== 'development' && servicesCache) {
      console.log('Returning cached services due to error');
      return servicesCache;
    }
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
    
    // Try to get from cache first (production only)
    if (process.env.NODE_ENV !== 'development' && servicesCache) {
      const cachedService = servicesCache.find(s => s.slug === slug);
      if (cachedService) {
        console.log('Returning service from cache');
        return cachedService;
      }
    }

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
    const data = doc.data();
    
    // Create complete Service object with all required fields
    const service: Service = {
      id: doc.id,
      slug: data.slug,
      title: data.title,
      heroTitle: data.heroTitle || data.title,
      heroSubtitle: data.heroSubtitle || '',
      image: data.image || '/default-service-image.jpg',
      features: data.features || [],
      cta: data.cta || {
        image: '/default-cta-image.jpg',
        finalCta: 'Get Started Today',
        finalCtaDescription: 'Contact us for professional service',
        buttonText: 'Contact Us'
      },
      stats: data.stats,
      solution: data.solution,
      card: data.card,
      mapSection: data.mapSection,
      faqs: data.faqs,
      longDescription: data.longDescription,
      form: data.form,
      ServiceText: data.ServiceText
    };
    
    console.log(`Successfully fetched service: ${service.title}`);
    return service;
  } catch (error) {
    console.error(`Error fetching service with slug ${slug}:`, error);
    
    // Try cache as fallback (production only)
    if (process.env.NODE_ENV !== 'development' && servicesCache) {
      const cachedService = servicesCache.find(s => s.slug === slug);
      if (cachedService) {
        console.log('Returning cached service as fallback due to error');
        return cachedService;
      }
    }
    
    return null;
  }
}

// Utility function to clear cache (useful for development)
export function clearServicesCache(): void {
  servicesCache = null;
  cacheTimestamp = null;
  console.log('Services cache cleared');
}