// lib/faqdata.ts - UPDATE THIS FUNCTION
import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Function to fetch FAQ heading from Firestore
export const fetchFAQHeading = async (): Promise<string> => {
  try {
    // Changed from 'faqsection' to 'faqData' to match your save button
    const faqDocRef = doc(db, 'mainsite', 'faqData');
    const faqDoc = await getDoc(faqDocRef);

    if (faqDoc.exists()) {
      const data = faqDoc.data();
      
      // Try to get heading from various possible field names
      if (data.heading) {
        return data.heading as string;
      } else if (data.title) {
        return data.title as string;
      } else if (data.h2) {
        return data.h2 as string;
      } else if (data.sectionTitle) {
        return data.sectionTitle as string;
      }
    }
    
    return 'Frequently Asked Questions';
  } catch (error) {
    console.error('Error fetching FAQ heading:', error);
    return 'Frequently Asked Questions';
  }
};

// Function to fetch all FAQs from Firestore - UPDATED
export const fetchFAQData = async (): Promise<FAQItem[]> => {
  try {
    // Changed from 'faqsection' to 'faqData' to match your save button
    const faqDocRef = doc(db, 'mainsite', 'faqData');
    const faqDoc = await getDoc(faqDocRef);

    if (faqDoc.exists()) {
      const data = faqDoc.data();
      console.log('Firebase data received:', data); // Debug log
      
      // Looking for 'faqsection' field (matches your save button)
      if (data.faqsection && Array.isArray(data.faqsection)) {
        console.log('Found faqsection data:', data.faqsection);
        return data.faqsection as FAQItem[];
      } 
      // Also check other possible field names
      else if (data.faqItems && Array.isArray(data.faqItems)) {
        return data.faqItems as FAQItem[];
      } else if (data.items && Array.isArray(data.items)) {
        return data.items as FAQItem[];
      } else {
        console.warn('FAQ data not found in expected format. Available fields:', Object.keys(data));
        return [];
      }
    } else {
      console.warn('FAQ document not found at mainsite/faqData');
      return [];
    }
  } catch (error) {
    console.error('Error fetching FAQ data:', error);
    throw new Error('Failed to fetch FAQ data');
  }
};

// ... rest of your faqdata.ts code