// src/app/services/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { serviceContent } from '@/lib/data';
import { Metadata } from 'next';
import ServicePageClient from '@/components/ServicePageClient';

// Generate static params for static site generation
export async function generateStaticParams() {
  return serviceContent.map((service) => ({
    slug: service.slug,
  }));
}

// Define the type for params
interface Props {
  params: Promise<{ slug: string }>;
}

// ServicePage component
const ServicePage = async ({ params }: Props) => {
  const { slug } = await params; // Await the params to resolve the slug
  const service = serviceContent.find((service) => service.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
};

// Generate metadata for the page
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params; // Await the params to resolve the slug
  const service = serviceContent.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
    };
  }

  return {
    title: `${service.title} | Lawn Care Services - Professional Dallas Landscaping`,
    description: service.heroSubtitle,
    openGraph: {
      title: `${service.title} | Lawn Care Services`,
      description: service.heroSubtitle,
    },
  };
};

export default ServicePage;