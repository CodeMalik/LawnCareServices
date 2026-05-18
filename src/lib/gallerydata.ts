// lib/gallerydata.ts
import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

export interface MiniGalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category?: 'before-after' | 'services' | 'results';
  featured?: boolean;
}

export interface GalleryData {
  gallarysection: MiniGalleryItem[];
  h21?: string;
  h22?: string;
}

// Function to fetch gallery data and headings from Firestore
export const fetchGalleryData = async (): Promise<GalleryData> => {
  try {
    console.log('🔄 Starting to fetch gallery data from Firebase...');
    
    const galleryDocRef = doc(db, 'mainsite', 'galleryData');
    console.log('📁 Looking for document at: mainsite/galleryData');
    
    const galleryDoc = await getDoc(galleryDocRef);
    console.log('📄 Document exists:', galleryDoc.exists());

    if (galleryDoc.exists()) {
      const data = galleryDoc.data();
      console.log('✅ Data found:', data);
      
      const galleryData: GalleryData = {
        gallarysection: [],
        h21: 'Experience the Transformation We Bring to Every Lawn',
        h22: 'From dull, lifeless grass to vibrant, healthy landscapes, witness how we turn ordinary yards into extraordinary outdoor spaces. Let us enhance your curb appeal with expert care and precision.'
      };
      
      // Look for the gallarysection field
      if (data.gallarysection && Array.isArray(data.gallarysection)) {
        console.log(`🎉 Found ${data.gallarysection.length} gallery items`);
        galleryData.gallarysection = data.gallarysection as MiniGalleryItem[];
      } else {
        console.log('❌ gallarysection field not found or not an array');
      }
      
      // Look for headings
      if (data.h21) {
        galleryData.h21 = data.h21;
      }
      if (data.h22) {
        galleryData.h22 = data.h22;
      }
      
      return galleryData;
    } else {
      console.log('❌ Document does not exist at mainsite/galleryData');
      return {
        gallarysection: [],
        h21: 'Experience the Transformation We Bring to Every Lawn',
        h22: 'From dull, lifeless grass to vibrant, healthy landscapes, witness how we turn ordinary yards into extraordinary outdoor spaces. Let us enhance your curb appeal with expert care and precision.'
      };
    }
  } catch (error) {
    console.error('💥 Error fetching gallery data:', error);
    throw new Error('Failed to fetch gallery data');
  }
};