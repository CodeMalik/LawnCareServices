// src/app/services/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { serviceContent } from '@/lib/data';
import { Metadata } from 'next';
import ServicePageClient from '@/components/ServicePageClient';

// Define the shape of a service (if not already defined in '@/lib/data')
// You should ideally define this in your data file, but we'll define it here for completeness
export interface Service {
    slug: string;
    title: string;
    heroSubtitle: string;
    // Add other properties your service object has, e.g.:
    // description?: string;
    // features?: string[];
    // imageUrl?: string;
    // etc.
}

// Ensure serviceContent is typed (if not already)
// If your '@/lib/data' already exports `Service[]`, you can remove this re-declaration
const typedServiceContent: Service[] = serviceContent;

// Generate static params for static site generation
export async function generateStaticParams() {
    return typedServiceContent.map((service) => ({
        slug: service.slug,
    }));
}

// Define the type for params
interface Props {
    params: Promise<{ slug: string }>;
}

// Helper function to find service by slug (for reuse and type safety)
const findServiceBySlug = (slug: string): Service | undefined => {
    return typedServiceContent.find((service) => service.slug === slug);
};

// ServicePage component
const ServicePage = async ({ params }: Props) => {
    // Await params to resolve the slug
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    // Find matching service
    const service = findServiceBySlug(slug);

    // If no service found, trigger 404
    if (!service) {
        notFound();
    }

    // Render client component with service data
    return <ServicePageClient service={service} />;
};

// Generate metadata for the page
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    // Await params to resolve the slug
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    // Find matching service
    const service = findServiceBySlug(slug);

    // Fallback metadata if service not found
    if (!service) {
        return {
            title: 'Service Not Found',
            description: 'The requested service could not be found.',
        };
    }

    // Return dynamic metadata
    return {
        title: `${service.title} | Lawn Care Services - Professional Dallas Landscaping`,
        description: service.heroSubtitle,
        openGraph: {
            title: `${service.title} | Lawn Care Services`,
            description: service.heroSubtitle,
            type: 'website',
            locale: 'en_US',
        },
    };
};

export default ServicePage;