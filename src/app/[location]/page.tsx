import { notFound } from 'next/navigation';
import { locations } from '@/lib/data';
import LocationHero from '@/components/LocationHero';
import LocationStats from '@/components/LocationStats';
import LocationServiceList from '@/components/LocationServiceList';
import LocationCallToAction from '@/components/LocationCallToAction';
import Testimonials from '@/components/Testimonials';
import { Metadata } from 'next';
import LocationContactForm from '@/components/LocationContactForm';
import LocationServiceText from '@/components/LocationServiceText';
import LocationAbout from '@/components/LocationAbout';
import {FadeIn} from '@/components/animations/Animate';

interface Props {
  params: Promise<{ location: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location } = await params;
  const loc = locations.find(l => l.slug === location);
  if (!loc) {
    return {
      title: 'Location Not Found',
      description: 'The requested location could not be found.',
    };
  }
  return {
    title: `${loc.title}`,
    description: `Comprehensive lawn care services in ${location.replace(/-/g, ' ')}, including landscaping, sprinkler repair, and more.`,
    keywords: [
      'lawn care',
      'landscaping services',
      'sprinkler repair',
      'lawn mowing',
      `${location.replace(/-/g, ' ')} lawn care`,
    ],
    openGraph: {
      title: `${loc.title}`,
      description: `Explore our range of lawn care services tailored for ${location.replace(/-/g, ' ')}.`,
      type: 'website',
      locale: 'en_US',
    },
  };
}

const LocationPage = async ({ params }: Props) => {
  const { location } = await params;
  const loc = locations.find(l => l.slug === location);
  if (!loc) notFound();

  return (
    <>
      <section className="relative bg-gray-900 min-h-[70vh] sm:min-h-[110vh] 2xl:min-h-[70vh] pt-24 md:pt-28">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={loc.hero.image}
              alt={`${loc.title} Landscaping Services`}
              className="w-full h-full object-cover object-center"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        {/* Content Container */}
        <div className="absolute z-10 w-full h-full flex items-center justify-center">
          <LocationHero hero={loc.hero} />
        </div>
      </section>

      <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 sm:p-12">
        <LocationStats />
      </div>
      <div id="contact-form">
        <LocationContactForm form={loc.form} />
      </div>
      <Testimonials />
      <LocationServiceText serviceText={loc.ServiceText} />

      <section id="allServices" className="py-12 px-4 sm:px-6 lg:px-8">
        <LocationServiceList AllServices={loc.AllServices} services={loc.services} />
      </section>
      <LocationAbout />
      <section className="relative py-20 md:py-28 overflow-hidden 2xl:flex 2xl:justify-center 2xl:items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 -z-10">
          <div className="relative w-full h-full">
            <img
              src="https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519842/5-3_mljoxn_16_11zon_zajmzz.jpg"
              alt="Beautiful landscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        </div>

        {/* Content */}
        <LocationCallToAction />
      </section>
    </>
  );
};

export async function generateStaticParams() {
  return locations.map(loc => ({ location: loc.slug }));
}

export default LocationPage;