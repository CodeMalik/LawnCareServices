import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase';

// Interface for the service data structure
export interface ServiceData {
  id: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  image: string;
  stats?: Array<{
    number: number;
    description: string;
  }>;
  features: Array<{
    title: string;
    description: string;
    image: string;
    featuresArray: Array<{
      description: string;
    }>;
    buttonText: string;
  }>;
  form?: any;
  ServiceText?: any;
  solution?: {
    title: string;
    description: string;
    imageGallery: Array<{
      image: string;
    }>;
    buttonText: string;
  };
  card?: {
    title: string;
    description: string;
    buttonText: string;
  };
  map?: boolean;
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
}

// Fetch all service document names
export const getAllServiceIds = async (): Promise<string[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, 'mainservicescontent'));
    const serviceIds = querySnapshot.docs.map(doc => doc.id);
    return serviceIds;
  } catch (error) {
    console.error('Error fetching service IDs:', error);
    return [];
  }
};

// Fetch specific service data by ID
export const getServiceData = async (serviceId: string): Promise<ServiceData | null> => {
  try {
    const docRef = doc(db, 'mainservicescontent', serviceId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: serviceId,
        ...docSnap.data()
      } as ServiceData;
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching service data:', error);
    return null;
  }
};

// Fetch FAQ image from Firebase
export const getFAQImage = async (): Promise<string | null> => {
  try {
    const docRef = doc(db, 'mainservicescontent', 'faqimage');
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const data = docSnap.data();
      return data.image || null;
    }
    return null;
  } catch (error) {
    console.error('Error fetching FAQ image:', error);
    return null;
  }
};

// Fetch all services data (for sitemap or listing)
export const getAllServicesData = async (): Promise<ServiceData[]> => {
  try {
    const serviceIds = await getAllServiceIds();
    const servicesData: ServiceData[] = [];
    
    for (const id of serviceIds) {
      if (id !== 'faqimage') { // Skip faqimage document
        const serviceData = await getServiceData(id);
        if (serviceData) {
          servicesData.push(serviceData);
        }
      }
    }
    
    return servicesData;
  } catch (error) {
    console.error('Error fetching all services data:', error);
    return [];
  }
};