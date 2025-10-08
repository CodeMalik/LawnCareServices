// src/lib/trustedIndicators.ts
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { TrustIndicator } from '@/types';

/**
 * Fetches trust indicators section data from Firestore:
 * Path: mainsite → trustIndicatorsSection
 * Includes: title, subtitle, and indicators array
 */
export interface TrustedIndicatorsSection {
  title: string;
  subtitle: string;
  indicators: TrustIndicator[];
}

export const fetchTrustedIndicators = async (): Promise<TrustedIndicatorsSection> => {
  try {
    const docRef = doc(db, 'mainsite', 'trustIndicatorsSection');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        title: data.title || 'Why Business and Homeowners Trust Us',
        subtitle: data.subtitle || 'With over 18 years of experience, we’re a trusted lawn care contractor offering consistent, reliable service across the United States, backed by all-season craftsmanship you can count on.',
        indicators: Array.isArray(data.indicators) ? data.indicators as TrustIndicator[] : [],
      };
    } else {
      console.warn('Document "trustIndicatorsSection" does not exist in mainsite');
      return {
        title: 'Why Business and Homeowners Trust Us',
        subtitle: 'With over 18 years of experience, we’re a trusted lawn care contractor offering consistent, reliable service across the United States, backed by all-season craftsmanship you can count on.',
        indicators: [],
      };
    }
  } catch (error) {
    console.error('Error fetching trusted indicators:', error);
    throw new Error('Failed to load trust indicators');
  }
};