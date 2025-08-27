'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { getLocationServices } from '@/utils/locationService';
import { getServiceNavigation } from '@/utils/navigation';


interface ServiceItem {
  name: string;
  href: string;
  serviceSlug?: string;
}

const defaultServiceItems: ServiceItem[] = [
  { 
    name: 'Sprinkler Installation & Repair', 
    href: '/services/sprinkler-installation-repair',
    serviceSlug: 'sprinkler-installation-repair'
  },
  { 
    name: 'Irrigation System Repair', 
    href: '/services/irrigation-system-repair',
    serviceSlug: 'irrigation-system-repair'
  },
  { 
    name: 'Landscaping Services', 
    href: '/services/landscaping-services',
    serviceSlug: 'landscaping-services'
  },
  { 
    name: 'Lawn Health & Protection', 
    href: '/services/lawn-health-protection',
    serviceSlug: 'lawn-health-protection'
  },
  { 
    name: 'Tree & Plant Health Management', 
    href: '/services/tree-plant-health-management',
    serviceSlug: 'tree-plant-health-management'
  },
  { 
    name: 'Insect & Weed Control', 
    href: '/services/insect-weed-control',
    serviceSlug: 'insect-weed-control'
  }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Get navigation items based on current path
  const serviceNavItems = getServiceNavigation(pathname);
  
  // Check if we're on a location or service page
  const isLocationOrServicePage = pathname?.startsWith('/location/') || 
                               pathname?.startsWith('/services/') ||
                               pathname === '/locations' ||
                               // Check if we're on a dynamic location page (e.g., /dallas, /austin)
                               (pathname && pathname.split('/').filter(Boolean).length === 1 && 
                                !['', 'about', 'contact', 'gallery', 'services'].includes(pathname.split('/')[1]));
  
  // Close menus when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Map navigation items to service items
  const serviceItems: ServiceItem[] = useMemo(() => {
    return serviceNavItems.map(item => ({
      name: item.name,
      href: item.href,
      serviceSlug: item.href.split('/').pop()
    }));
  }, [serviceNavItems]);

  const isActivePage = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const getLinkClasses = (href: string) => {
    const isActive = isActivePage(href);
    return `text-gray-700 py-1 hover:text-green-400 cursor-pointer font-normal transition-colors duration-200 text-sm ${
      isActive ? 'text-green-400' : 'hover:text-green-400'
    }`;
  };

  // Handle navigation and menu closure
  const handleNavigation = (href: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    setMobileMenuOpen(false); // Close menu before navigation
    
    // If on mobile and clicking contact, scroll to contact form
    if (window.innerWidth < 640 && href === '/contact') {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    
    router.push(href); // Programmatic navigation
  };

  return (
    <header className="fixed w-full top-0 left-0 bg-gradient-to-r from-[rgba(20,23,14,255)] via-[rgba(29,32,24,255)] to-[rgba(14,18,10,255)] shadow-xl z-50">
      <div className="max-w-[1700px] mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
            <Image 
              src="/output-onlinepngtools.png" 
              alt="Lawn Care Services Logo"
              height={100}
              width={100}
              className="sm:ml-15 2xl:ml-0"
              priority
            />
          </Link>

          {/* Desktop Navigation & Phone */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <Link 
                href="/" 
                className={getLinkClasses('/') + ' text-white hover:text-green-400'}
              >
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <div className="flex items-center">
                  <Link 
                    href="/services"
                    className={`${getLinkClasses('/services')} text-white hover:text-green-400`}
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                  >
                    Services
                  </Link>
                  <div 
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                    onClick={(e) => {
                      if (isLocationOrServicePage) {
                        e.preventDefault();
                        return;
                      }
                      if (window.innerWidth < 1024) {
                        setServicesDropdownOpen(!servicesDropdownOpen);
                      }
                    }}
                  >
                    <svg 
                      className={`w-4 h-4 text-white cursor-pointer hover:text-green-400 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  </div>

                {/* Dropdown Menu */}
                {servicesDropdownOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-64 origin-top-left bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 overflow-hidden"
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <div className="divide-y divide-gray-100">
                      {serviceItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link 
                href="/gallery" 
                className={getLinkClasses('/gallery') + ' text-white'}
              >
                Gallery
              </Link>
              <Link 
                href="/about" 
                className={getLinkClasses('/about') + ' text-white'}
              >
                About
              </Link>
              
              {/* Hide Locations link when on location or service pages */}
              {!isLocationOrServicePage && (
                <Link 
                  href="/locations" 
                  className={getLinkClasses('/locations') + ' text-white'}
                >
                  Locations
                </Link>
              )}
              
              {/* Contact link - scrolls to form on mobile or location/service pages */}
              <a 
                href="#contact-form" 
                className={`${getLinkClasses('/contact')} text-white`}
                onClick={(e) => {
                  e.preventDefault();
                  // On mobile or location/service page, try to scroll to contact form
                  if ((window.innerWidth < 640 || isLocationOrServicePage) && document.getElementById('contact-form')) {
                    const contactForm = document.getElementById('contact-form');
                    if (contactForm) {
                      contactForm.scrollIntoView({ behavior: 'smooth' });
                      return;
                    }
                  }
                  // Otherwise navigate to contact page
                  router.push('/contact');
                }}
              >
                Contact
              </a>
            </nav>

            {/* Phone Number Button */}
            <Link 
              href="/contact" 
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              (972) 743-9021
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white bg-[rgba(84,180,53,255)] focus:outline-none p-2 cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg z-60">
          <nav className="max-w-7xl mx-auto px-4 py-2 flex flex-col divide-y divide-gray-100">
            <div 
              className={`py-2 ${getLinkClasses('/')} text-black`}
              onClick={() => handleNavigation('/')}
            >
              Home
            </div>
            
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div className="flex items-center justify-between w-full">
                <div 
                  className={`${getLinkClasses('/services')} text-gray-700 hover:text-green-400`}
                  onClick={() => handleNavigation('/services')}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                >
                  Services
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setServicesDropdownOpen(!servicesDropdownOpen);
                  }}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  className="ml-2 focus:outline-none"
                  aria-expanded={servicesDropdownOpen}
                  aria-label="Toggle services dropdown"
                >
                  <svg 
                    className={`w-4 h-4 text-gray-700 hover:text-green-400 cursor-pointer transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              {servicesDropdownOpen && (
                <div className="ml-4 mt-1 space-y-0 pl-3">
                  {serviceItems.map((item, index) => (
                    <div
                      key={index}
                      className="block py-3 px-2 -ml-2 text-gray-600 hover:text-green-500 transition-colors text-sm border-b border-gray-100 last:border-0"
                      onClick={() => handleNavigation(item.href)}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div 
              className={`py-2 ${getLinkClasses('/gallery')} text-black`}
              onClick={() => handleNavigation('/gallery')}
            >
              Gallery
            </div>
            <div 
              className={`py-2 ${getLinkClasses('/about')} text-black`}
              onClick={() => handleNavigation('/about')}
            >
              About
            </div>
            {!isLocationOrServicePage && (
              <div 
                className={`py-2 ${getLinkClasses('/locations')} text-black`}
                onClick={() => handleNavigation('/locations')}
              >
                Locations
              </div>
            )}
            <div 
              className={`py-2 ${getLinkClasses('/contact')} text-black`}
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                
                // On mobile or when on location/service page, scroll to contact form if it exists
                if ((window.innerWidth < 640 || isLocationOrServicePage) && document.getElementById('contact-form')) {
                  const contactForm = document.getElementById('contact-form');
                  if (contactForm) {
                    contactForm.scrollIntoView({ behavior: 'smooth' });
                    return;
                  }
                }
                
                // Otherwise, navigate to contact page
                router.push('/contact');
              }}
            >
              Contact
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}