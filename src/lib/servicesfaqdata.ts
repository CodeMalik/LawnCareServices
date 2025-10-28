import { collection, doc, getDocs, getDoc, DocumentData } from 'firebase/firestore';
import { db } from './firebase'; // Adjust the import path to your firebase config

// Interface for FAQ data
export interface FAQData {
  question: string;
  answer: string;
}

// Interface for service document
export interface ServiceFAQ {
  faqs: FAQData[];
}

// Service names type for type safety
export type ServiceName = 
  | 'landscaping' 
  | 'lawn-health' 
  | 'pest-control' 
  | 'sprinkler-system-installation' 
  | 'sprinkler-system-repair' 
  | 'tree-care';

/**
 * Get all FAQ data for a specific service
 * @param serviceName - Name of the service
 * @returns Promise with FAQ data array
 */
export const getServiceFAQs = async (serviceName: ServiceName): Promise<FAQData[]> => {
  try {
    const docRef = doc(db, 'mainservicescontent', serviceName);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const data = docSnap.data() as ServiceFAQ;
      return data.faqs || [];
    } else {
      console.warn(`No FAQ data found for service: ${serviceName}`);
      return [];
    }
  } catch (error) {
    console.error('Error fetching FAQ data:', error);
    throw error;
  }
};

/**
 * Get all available service names from the database
 * @returns Promise with array of service names
 */
export const getAllServiceNames = async (): Promise<ServiceName[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, 'mainservicescontent'));
    const serviceNames: ServiceName[] = [];
    
    querySnapshot.forEach((doc) => {
      // Type assertion to ensure we only get valid service names
      if (isValidServiceName(doc.id)) {
        serviceNames.push(doc.id as ServiceName);
      }
    });
    
    return serviceNames;
  } catch (error) {
    console.error('Error fetching service names:', error);
    throw error;
  }
};

/**
 * Type guard to check if a string is a valid service name
 */
const isValidServiceName = (name: string): name is ServiceName => {
  const validServices: ServiceName[] = [
    'landscaping',
    'lawn-health',
    'pest-control',
    'sprinkler-system-installation',
    'sprinkler-system-repair',
    'tree-care'
  ];
  return validServices.includes(name as ServiceName);
};

/**
 * Get FAQ data for all services at once
 * @returns Promise with object containing all services' FAQ data
 */
export const getAllServicesFAQs = async (): Promise<Record<ServiceName, FAQData[]>> => {
  try {
    const serviceNames = await getAllServiceNames();
    const allFAQs: Record<ServiceName, FAQData[]> = {} as Record<ServiceName, FAQData[]>;
    
    // Fetch data for all services in parallel
    const promises = serviceNames.map(async (serviceName) => {
      const faqs = await getServiceFAQs(serviceName);
      return { serviceName, faqs };
    });
    
    const results = await Promise.all(promises);
    
    // Convert array to object
    results.forEach(({ serviceName, faqs }) => {
      allFAQs[serviceName] = faqs;
    });
    
    return allFAQs;
  } catch (error) {
    console.error('Error fetching all services FAQs:', error);
    throw error;
  }
};