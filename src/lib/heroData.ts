import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

// lib/heroData.ts
export interface HeroContent {
  tagline: string;
  h1Part1: string;  
  h1Part2: string;   
  h1Part3: string;   
  subtitle: string;
  ctaText: string;
  trustIndicators: { icon: string; text: string }[];
}

export async function fetchHeroContent(): Promise<HeroContent> {
  try {
    const docRef = doc(db, "mainsite", "herosection");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as HeroContent;
    }
  } catch (error) {
    console.error("Firestore fetch error:", error);
  }

  // Fallback
  return {
    tagline: "Professional Lawn, Irrigation & Landscape Solutions",
    h1Part1: "Hire an Expert",
    h1Part2: "Lawn Care Services",
    h1Part3: "Expert within Five minutes",
    subtitle: "Smart lawn care, professional sprinkler repair, and eco-friendly landscaping designed for lasting beauty.",
    ctaText: "Fix Your Lawn Now!",
    trustIndicators: [
      { icon: '✓', text: 'Licensed & Insured' },
      { icon: '✓', text: '100% Guaranteed' },
      { icon: '✓', text: 'Local Experts' },
    ],
  };
}