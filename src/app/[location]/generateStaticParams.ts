import { locations } from '@/lib/data';

interface Location {
  slug: string;
}

export function generateStaticParams(): { location: string }[] {
  return locations.map((location: Location) => ({
    location: location.slug,
  }));
}