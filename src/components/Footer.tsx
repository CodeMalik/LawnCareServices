// src/components/Footer.tsx
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-10 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="sm:mb-0 ">
            <Link href="/" className="flex items-center mb-6">
              <Image 
                src="https://res.cloudinary.com/dfnjpfucl/image/upload/v1756287854/output-onlinepngtools_qcy2wr.png" 
                alt="Lawn Care Services Logo"
                width={100}
                height={100}
                className=""
              />
            </Link>
            <p className="text-xs sm:text-lg leading-7  ">
            At Lawn Care Services, we blend creativity and craftsmanship to build outdoor spaces that are beautiful, functional, and easy to maintain. With years of local experience, we’re proud to be your trusted landscaping experts.            </p>  
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg sm:text-xl mt-0 font-semibold mb-4 sm:mb-7">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/sprinkler-installation-repair" className="text-xs sm:text-lg hover:text-green-400 transition-colors">Sprinkler Installation & Repair</Link></li>
              <li><Link href="/services/irrigation-system-repair" className="text-xs sm:text-lg hover:text-green-400 transition-colors">Irrigation System Repair</Link></li>
              <li><Link href="/services/landscaping-services" className="text-xs sm:text-lg hover:text-green-400 transition-colors">Landscaping Services</Link></li>
              <li><Link href="/services/lawn-health-protection" className="text-xs sm:text-lg hover:text-green-400 transition-colors">Lawn Health & Protection</Link></li>
              <li><Link href="/services/tree-plant-health-management" className="text-xs sm:text-lg hover:text-green-400 transition-colors">Tree & Plant Health</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full sm:w-auto">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-7" >Contact Info</h3>
            <address className="not-italic text-xs sm:text-lg space-y-3">
              {/* <p className="mb-2">
                <Link 
                  href="https://www.google.com/maps/search/?api=1&query=14035+Jamwood+Ln+Farmers+Branch+TX+75234" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-start hover:text-green-400 transition-colors group"
                >
                  <svg 
                    className="w-5 h-5 mr-2 text-green-500 group-hover:text-green-400 mt-0.5 flex-shrink-0" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                    />
                  </svg>
                  <span>14035 Jamwood Ln Farmers Branch, TX 75234</span>
                </Link>
              </p>
              <p className="mb-2">
                <Link 
                  href="tel:19727439021" 
                  className="hover:text-green-400 transition-colors flex items-center group"
                >
                  <svg 
                    className="w-5 h-5 mr-2 text-green-500 group-hover:text-green-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                    />
                  </svg>
                  (972) 743-9021
                </Link>
              </p>
              <p className="mb-2">
                <Link 
                  href="mailto:gardenchange@gmail.com" 
                  className="hover:text-green-400 transition-colors flex items-center group"
                >
                  <svg 
                    className="w-5 h-5 mr-2 text-green-500 group-hover:text-green-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                    />
                  </svg>
                  gardenchange@gmail.com
                </Link>
              </p> */}
              <p className="flex items-center">
                <svg 
                  className="w-5 h-5 mr-2 text-green-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                Mon – Fri: 9:00 AM – 4:00 PM
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs sm:text-md border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>Copyright © {new Date().getFullYear()} Lawn Care Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}