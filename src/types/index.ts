export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  link: string;
}

export interface TrustIndicator {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  verified?: boolean;
}

export interface ServiceArea {
  id: string;
  name: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'before-after' | 'landscape' | 'irrigation' | 'lawn-care';
}
// Add this new interface
export interface MiniGalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category?: 'before-after' | 'services' | 'results'; // Optional category
  featured?: boolean; // To mark featured items
}


export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface ContactInfo {
  phone: string
  email: string
  address: string
  hours: {
    weekdays: string
    saturday: string
    sunday: string
  }
}

export interface ContactFormProps {
  className?: string
  onSubmit?: (data: ContactFormData) => Promise<void>
  showSuccessMessage?: boolean
  customStyles?: {
    container?: string
    input?: string
    button?: string
    errorText?: string
    successMessage?: string
  }
}

export interface ContactSectionProps {
  className?: string
  customContactInfo?: Partial<ContactInfo>
  showStats?: boolean
}

export type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export interface FormFieldError {
  message: string
  type: string
}

export interface ContactFormState {
  data: Partial<ContactFormData>
  errors: Record<keyof ContactFormData, FormFieldError | undefined>
  isSubmitting: boolean
  submitStatus: SubmitStatus
}

// Default contact information
export const DEFAULT_CONTACT_INFO: ContactInfo = {
  phone: '(972) 543-9020',
  email: 'info@cancunlandscape.com',
  address: 'Serving Dallas, TX and surrounding areas',
  hours: {
    weekdays: 'Mon - Fri: 8:00 AM - 6:00 PM',
    saturday: 'Sat: 9:00 AM - 4:00 PM',
    sunday: 'Sun: Closed'
  }
}

// Form validation patterns
export const VALIDATION_PATTERNS = {
  phone: /^[\d\s\-\(\)\+]+$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
} as const

// Form field constraints
export const FORM_CONSTRAINTS = {
  name: { min: 2, max: 50 },
  email: { min: 5, max: 100 },
  phone: { min: 10, max: 20 },
  subject: { min: 3, max: 100 },
  message: { min: 10, max: 1000 }
} as const

export interface ServiceContent {
  id: string;
  slug: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  // description: string;
  image: string;
  form?: {
    id:string;
    locationSlug: string; // To track submission origin
    serviceSlug?: string; // Optional, for service-specific forms
  };
  ServiceText?: {
    title: string;
    description: string;
    buttonText: string;
    image: string;
  };
  stats?: {
    number: number;
    description: string;
  }[];
  features:{
    image: string;
    title: string;
    description: string;
    featuresArray:{
      // icon: string;
      description: string;
    }[],
    buttonText:string;
  }[];
  
  solution?: {
    title: string;
    description: string;
    imageGallery:{
      image:string;
    }[],
    buttonText:string;
  };
  card?:{
    title:string;
    description:string;
    buttonText:string;
  };
  mapSection?:{
    title:string;
    description:string;
  };
  
  //doing this-------------------------------------------------------
  faqs?: {
    question: string;
    answer: string;
  }[];
  cta:{
    image: string;
  finalCta: string;
  finalCtaDescription: string;
  buttonText:string;
  }
}


export interface LocationMainPage {
  id: string;
  slug: string;
  title: string;
  hero :{
    title: string;
    subtitle: string;
    image: string;
  };
  form: {
    id:string;
    locationSlug: string; // To track submission origin
    serviceSlug?: string; // Optional, for service-specific forms
  };
  ServiceText:{
    title:string;
    description:string;
    image:string;
  };
  AllServices:{
    title:string;
    description:string;
    ServiceArray:{
      title:string;
      image:string;
      features:{
        description:string;
      }[],
      buttonText:string;
    }[];
  };
  services: {
    slug: string; // e.g., 'columbia-lawn-care-services'
    name: string;
  }[]; // Embed full service definitions
}

