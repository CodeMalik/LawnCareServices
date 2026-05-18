// src/utils/locationServices.ts
import { locations } from '@/lib/data';

export const getLocationBySlug = (slug: string) => {
  return locations.find(location => location.slug === slug);
};

export const getLocationServices = (locationSlug: string) => {
  const location = getLocationBySlug(locationSlug);
  if (!location) return [];

  // Map location services with full path including location and service slugs
  return location.services.map(service => ({
    name: service.name,
    // Use the full service slug which includes location prefix
    href: `/services/${service.slug}`,
    // Keep the service slug without location prefix for reference if needed
    serviceSlug: service.slug.replace(`${locationSlug}-`, '')
  }));
};