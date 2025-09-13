// src/utils/navigation.ts
import { locations } from '@/lib/data';

// ✅ Define return type for navigation items
export interface NavigationItem {
    name: string;
    href: string;
}

/**
 * Generates service navigation based on current path.
 * Handles location-specific service pages and falls back to default services.
 */
export function getServiceNavigation(currentPath: string): NavigationItem[] {
    // ✅ Split and clean path segments
    const pathSegments: string[] = currentPath.split('/').filter(Boolean);

    // ✅ Handle service pages with location prefix (e.g., /services/georgia-lawn-care)
    if (pathSegments[0] === 'services' && pathSegments[1]) {
        const serviceSlug: string = pathSegments[1];

        // ✅ Extract location slug from service slug (format: locationname-servicename)
        const locationMatch: RegExpMatchArray | null = serviceSlug.match(/^([a-z]+)-/);

        if (locationMatch && locationMatch[1]) {
            const locationSlug: string = locationMatch[1];
            const location = locations.find(loc => loc.slug === locationSlug);

            if (location) {
                return location.services.map(service => ({
                    name: service.name,
                    href: `/services/${service.slug}`,
                }));
            }
        }
    }

    // ✅ Handle location landing pages (e.g., /georgia)
    const isLocationPage: boolean =
        pathSegments.length > 0 &&
        !['services', 'gallery', 'about', 'contact', 'locations'].includes(pathSegments[0]);

    if (isLocationPage) {
        const locationSlug: string = pathSegments[0];
        const location = locations.find(loc => loc.slug === locationSlug);

        if (location) {
            return location.services.map(service => ({
                name: service.name,
                href: `/services/${service.slug}`,
            }));
        }
    }

    // ✅ Fallback: default services for main website
    return [
        { name: 'Sprinkler Installation & Repair', href: '/services/sprinkler-installation-repair' },
        { name: 'Irrigation System Repair', href: '/services/irrigation-system-repair' },
        { name: 'Landscaping Services', href: '/services/landscaping-services' },
        { name: 'Lawn Health & Protection', href: '/services/lawn-health-protection' },
        { name: 'Tree & Plant Care', href: '/services/tree-plant-health-management' },
        { name: 'Insect & Weed Control', href: '/services/insect-weed-control' },
    ];
}