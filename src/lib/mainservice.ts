// lib/mainservice.ts
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import type { Service } from '@/types';

// This matches the shape expected by the component
export interface ServicesSectionData {
  title: string;
  subtitle: string;
  services: Service[];
  cta: {
    text: string;
    href: string;
  };
}

// Keep the function name as `fetchServices` to match your import
export async function fetchServices(): Promise<ServicesSectionData | null> {
  try {
    const docRef = doc(db, 'mainsite', 'servicesection');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as ServicesSectionData;
    }
    return null;
  } catch (error) {
    console.error('Error fetching services section:', error);
    return null;
  }
}