import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';
import { db } from './firebase';

export interface ServiceStat {
  number: number;
  description: string;
}

export interface ServiceFeatureItem {
  description: string;
}

export interface ServiceFeature {
  image: string;
  title: string;
  description: string;
  featuresArray: ServiceFeatureItem[];
  buttonText: string;
}

export interface ServiceGalleryImage {
  image: string;
}

export interface ServiceSolution {
  title: string;
  description: string;
  imageGallery: ServiceGalleryImage[];
  buttonText: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  buttonText: string;
}

export interface ServiceMapSection {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceCTA {
  image: string;
  finalCta: string;
  finalCtaDescription: string;
  buttonText: string;
}

// Update these interfaces to match what the components actually expect
export interface ServiceForm {
  id: string;
  locationSlug: string;
  serviceSlug?: string;
  // Add other form properties based on your LocationContactForm component
  title?: string;
  description?: string;
}

export interface ServiceText {
  // Match the LocationServiceText component's expected props
  title?: string;
  description?: string;
  image?: string;
  // Add other properties as needed
}

export interface ServiceContent {
  id: string;
  slug: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  image: string;
  stats: ServiceStat[];
  features: ServiceFeature[];
  solution: ServiceSolution;
  card: ServiceCard;
  mapSection: ServiceMapSection;
  faqs: ServiceFAQ[];
  cta: ServiceCTA;
  // Add the missing optional properties with correct types
  form?: ServiceForm;
  ServiceText?: ServiceText;
}

// Fetch all services
export const getAllServices = async (): Promise<ServiceContent[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, 'mainsiteservices'));
    const services: ServiceContent[] = [];
    
    querySnapshot.forEach((doc) => {
      services.push({
        id: doc.id,
        ...doc.data()
      } as ServiceContent);
    });
    
    console.log(`Fetched ${services.length} services from Firebase`);
    return services;
  } catch (error) {
    console.error('Error fetching services from Firebase:', error);
    throw new Error('Failed to fetch services from database');
  }
};

// Fetch a single service by ID
export const getServiceById = async (id: string): Promise<ServiceContent | null> => {
  try {
    const docRef = doc(db, 'mainsiteservices', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as ServiceContent;
    } else {
      console.log(`No service found with ID: ${id}`);
      return null;
    }
  } catch (error) {
    console.error('Error fetching service by ID:', error);
    throw new Error('Failed to fetch service from database');
  }
};

// Fetch a single service by slug
export const getServiceBySlug = async (slug: string): Promise<ServiceContent | null> => {
  try {
    const servicesRef = collection(db, 'mainsiteservices');
    const q = query(servicesRef, where('slug', '==', slug));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return {
        id: doc.id,
        ...doc.data()
      } as ServiceContent;
    } else {
      console.log(`No service found with slug: ${slug}`);
      return null;
    }
  } catch (error) {
    console.error('Error fetching service by slug:', error);
    throw new Error('Failed to fetch service from database');
  }
};

// Fetch multiple services by IDs
export const getServicesByIds = async (ids: string[]): Promise<ServiceContent[]> => {
  try {
    const services: ServiceContent[] = [];
    
    for (const id of ids) {
      const service = await getServiceById(id);
      if (service) {
        services.push(service);
      }
    }
    
    return services;
  } catch (error) {
    console.error('Error fetching services by IDs:', error);
    throw new Error('Failed to fetch services from database');
  }
};