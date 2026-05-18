import { db } from './firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

// ======================
// 🔹 Type Definitions
// ======================

export interface ServiceArea {
  id: string;
  name: string;
}

export interface ServiceAreasSection {
  title?: string;
  description?: string;
  tagline?: string;
  ctaText?: string;
  serviceAreas: ServiceArea[];
}

// ======================
// 🔹 Firebase Service Functions
// ======================

/**
 * Fetches all service areas data from Firestore
 */
export const getServiceAreasData = async (): Promise<ServiceAreasSection> => {
  try {
    // Reference to the mainsite document
    const mainsiteDocRef = doc(db, 'mainsite', 'servicesareasection');
    const mainsiteDoc = await getDoc(mainsiteDocRef);

    if (!mainsiteDoc.exists()) {
      console.warn('Service areas section document not found');
      return {
        serviceAreas: [],
        title: 'Proudly Serving Dallas & Beyond',
        description: 'Wherever you are in North Texas, Lawn Care Services brings expert lawn care, sprinkler repair, and landscaping right to your doorstep.',
        tagline: 'Local Service. Lasting Results.',
        ctaText: 'One Call To A Greener Yard!'
      };
    }

    const data = mainsiteDoc.data();
    
    return {
      title: data?.title || 'Proudly Serving Dallas & Beyond',
      description: data?.description || 'Wherever you are in North Texas, Lawn Care Services brings expert lawn care, sprinkler repair, and landscaping right to your doorstep.',
      tagline: data?.tagline || 'Local Service. Lasting Results.',
      ctaText: data?.ctaText || 'One Call To A Greener Yard!',
      serviceAreas: data?.serviceAreas || []
    };
  } catch (error) {
    console.error('Error fetching service areas data:', error);
    throw new Error('Failed to fetch service areas data');
  }
};

/**
 * Fetches only the service areas array
 */
export const getServiceAreas = async (): Promise<ServiceArea[]> => {
  try {
    const data = await getServiceAreasData();
    return data.serviceAreas || [];
  } catch (error) {
    console.error('Error fetching service areas:', error);
    return [];
  }
};

/**
 * Fetches a specific service area by ID
 */
export const getServiceAreaById = async (id: string): Promise<ServiceArea | null> => {
  try {
    const serviceAreas = await getServiceAreas();
    return serviceAreas.find(area => area.id === id) || null;
  } catch (error) {
    console.error('Error fetching service area by ID:', error);
    return null;
  }
};