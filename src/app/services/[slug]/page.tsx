// src/app/services/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ServicePageClient from '@/components/ServicePageClient';
import { getAllServices, getServiceBySlug, Service } from '@/lib/homepageservices';

// Force dynamic rendering for runtime data fetching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Generate static params for static site generation with error handling
export async function generateStaticParams() {
  try {
    const services = await getAllServices();
    
    // Filter out any services with invalid slugs and log warnings
    const validParams = services
      .filter(service => {
        if (!service.slug) {
          console.warn(`Service ${service.id} has no slug, skipping`);
          return false;
        }
        return true;
      })
      .map((service) => ({
        slug: service.slug,
      }));
    
    console.log(`Generated static params for ${validParams.length} services`);
    return validParams;
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    // Return empty array to prevent build failure
    return [];
  }
}

// Define the type for params
interface Props {
  params: Promise<{ slug: string }>;
}

// ServicePage component with better error handling and runtime data fetching
const ServicePage = async ({ params }: Props) => {
  let slug: string;
  
  try {
    const resolvedParams = await params;
    slug = resolvedParams.slug;
    
    if (!slug) {
      console.error('Slug parameter is undefined');
      notFound();
    }
  } catch (error) {
    console.error('Error resolving params:', error);
    notFound();
  }

  // Find matching service from Firebase at RUNTIME
  let service: Service | null = null;
  try {
    service = await getServiceBySlug(slug);
  } catch (error) {
    console.error(`Error fetching service for slug ${slug}:`, error);
    // Continue to 404 instead of throwing to prevent page crashes
  }

  // If no service found, trigger 404
  if (!service) {
    console.log(`Service not found for slug: ${slug}`);
    notFound();
  }

  // Render client component with service data from Firebase
  return <ServicePageClient service={service} />;
};

// Generate metadata for the page with error handling and runtime data
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  let slug: string;
  
  try {
    const resolvedParams = await params;
    slug = resolvedParams.slug;
    
    if (!slug) {
      return {
        title: 'Service Not Found',
        description: 'The requested service could not be found.',
      };
    }
  } catch (error) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
    };
  }

  // Find matching service from Firebase at RUNTIME
  let service: Service | null = null;
  try {
    service = await getServiceBySlug(slug);
  } catch (error) {
    console.error(`Error fetching service for metadata with slug ${slug}:`, error);
    // Fall through to not found metadata
  }

  // Fallback metadata if service not found
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
    };
  }

  // Return dynamic metadata from Firebase data
  return {
    title: `${service.title} | Lawn Care Services - Professional Dallas Landscaping`,
    description: service.heroSubtitle,
    openGraph: {
      title: `${service.title} | Lawn Care Services`,
      description: service.heroSubtitle,
      type: 'website',
      locale: 'en_US',
      images: service.image ? [service.image] : [],
    },
  };
};

export default ServicePage;