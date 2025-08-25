// src/utils/navigation.ts
import { locations } from '@/lib/data';

export function getServiceNavigation(currentPath: string) {
  const pathSegments = currentPath.split('/').filter(Boolean);
  
  // Check if we're on a service page with location prefix (e.g., /services/georgia-lawn-care)
  if (pathSegments[0] === 'services' && pathSegments[1]) {
    const serviceSlug = pathSegments[1];
    // Extract location slug from service slug (format: locationname-servicename)
    const locationMatch = serviceSlug.match(/^([a-z]+)-/);
    
    if (locationMatch) {
      const locationSlug = locationMatch[1];
      const location = locations.find(loc => loc.slug === locationSlug);
      
      if (location) {
        return location.services.map(service => ({
          name: service.name,
          href: `/services/${service.slug}`
        }));
      }
    }
  }
  
  // Handle location pages
  const isLocationPage = pathSegments.length > 0 && 
                       !['services', 'gallery', 'about', 'contact', 'locations'].includes(pathSegments[0]);
  
  if (isLocationPage) {
    const locationSlug = pathSegments[0];
    const location = locations.find(loc => loc.slug === locationSlug);
    
    if (location) {
      return location.services.map(service => ({
        name: service.name,
        href: `/services/${service.slug}`
      }));
    }
  }

  // Default services for main website
  return [
    { name: 'Sprinkler Installation & Repair', href: '/services/sprinkler-installation-repair' },
    { name: 'Irrigation System Repair', href: '/services/irrigation-system-repair' },
    { name: 'Landscaping Services', href: '/services/landscaping-services' },
    { name: 'Lawn Health & Protection', href: '/services/lawn-health-protection' },
    { name: 'Tree & Plant Care', href: '/services/tree-plant-health-management' },
    { name: 'Insect & Weed Control', href: '/services/insect-weed-control' },
  ];
}