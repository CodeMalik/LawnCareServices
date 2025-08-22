import { locations } from '@/lib/data';

export function generateStaticParams() {
  return locations.map((location) => ({
    location: location.slug,
  }));
}
