// lib/lastsection.ts (or wherever you keep your data logic)

import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase"; // Adjust path to your firebase.ts

export interface LastSectionData {
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const fetchLastSectionData = async (): Promise<LastSectionData | null> => {
  try {
    const docRef = doc(db, "mainsite", "lastsection"); // Assumes a doc named "lastsection" inside "mainsite" collection
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data() as LastSectionData;
      return {
        heading: data.heading || "Transform Your Lawn into a Lush Oasis!",
        description: data.description || "From expert lawn care and sprinkler repair to complete landscaping services, Lawn Care Services is dedicated to making your yard thrive year-round. Let us bring your vision to life with professional care.",
        buttonText: data.buttonText || "Call Now To Get Started",
        buttonLink: data.buttonLink || "/contact",
      };
    } else {
      console.warn("No such document 'lastsection' in 'mainsite'");
      return null;
    }
  } catch (error) {
    console.error("Error fetching last section data:", error);
    return null;
  }
};