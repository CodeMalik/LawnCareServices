// types/servicestypes.ts
export interface Service {
  id: string;
  slug: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  image: string;
  stats?: Array<{
    number: number;
    description: string;
  }>;
  features: Array<{
    image: string;
    title: string;
    description: string;
    featuresArray: Array<{ description: string }>;
    buttonText: string;
  }>;
  solution?: {
    title: string;
    description: string;
    imageGallery: Array<{ image: string }>;
    buttonText: string;
  };
  card?: {
    title: string;
    description: string;
    buttonText: string;
  };
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
  longDescription?: Array<{
    title: string;
    description: string;
  }>;
  form?: any;
  ServiceText?: any;
}