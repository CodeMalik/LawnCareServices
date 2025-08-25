// src/lib/data.ts

import { Service, TrustIndicator, Testimonial, ServiceArea, FAQItem, GalleryItem, MiniGalleryItem, ServiceContent, LocationService, LocationMainPage } from '@/types';

export const services: Service[] = [
  {
    id: 'sprinkler-installation',
    title: 'Sprinkler Installation',
    description: 'Smart watering — every time.',
    features: [
      'New & replacement systems',
      'Leak repairs & pressure fixes',
      'Smart controller upgrades'
    ],
    image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992705/sprinkler-installation_b4lvq6.jpg',
    link: '/services/sprinkler-installation-repair'
  },
  {
    id: 'irrigation-repair',
    title: 'Irrigation System Repair',
    description: 'Restore flow, save water.',
    features: [
      'Leak detection & fixes',
      'Valve & line repairs',
      'Pressure optimization'
    ],
    image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754998417/Irrigation-System-Repair_z8cjw0.jpg',
    link: '/services/irrigation-system-repair'
  },
  {
    id: 'landscaping',
    title: 'Landscaping Services',
    description: 'Turn Ordinary into Outstanding',
    features: [
      'Custom landscape design',
      'Garden & hardscape installs',
      'Mulching & soil prep'
    ],
    image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991870/Landscaping-Services_xupixr.jpg',
    link: '/services/landscaping-services'
  },
  {
    id: 'lawn-health',
    title: 'Lawn Health & Protection',
    description: 'Greener lawns, stronger roots.',
    features: [
      'Seasonal fertilization',
      'Aeration & soil care',
      'Disease & drought defense'
    ],
    image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991879/Lawn-Health-Protection_b11ucp.jpg',
    link: '/services/lawn-health-protection'
  },
  {
    id: 'tree-care',
    title: 'Tree & Plant Care',
    description: 'Stronger growth, vibrant life.',
    features: [
      'Tree injections',
      'Plant-specific care',
      'Pest & disease treatment'
    ],
    image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991893/Tree-Plant-Health-Management_lgtuof.jpg',
    link: '/services/tree-plant-health-management'
  },
  {
    id: 'pest-control',
    title: 'Insect & Weed Control',
    description: 'Goodbye pests, hello healthy lawn.',
    features: [
      'Weed prevention',
      'Eco-friendly insect control',
      'Seasonal protection plans'
    ],
    image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991871/Insect-Weed-Control_nsadyz.jpg',
    link: '/services/insect-weed-control'
  }
];

export const trustIndicators: TrustIndicator[] = [
  {
    id: 'reliable-service',
    title: 'Fast, Reliable Service',
    description: 'On time and done right, no delays, no excuses.'
  },
  {
    id: 'experience',
    title: '25+ Years of Experience',
    description: 'Proven expertise you can see in every yard we touch.'
  },
  {
    id: 'licensed-insured',
    title: 'Licensed & Insured',
    description: 'Honest work. Total peace of mind'
  },
  {
    id: 'eco-friendly',
    title: 'Eco-Friendly Products',
    description: 'Safe for pets & kids'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'daniel-2025',
    name: 'Daniel',
    rating: 5,
    text: 'Top notch contractor and problem solver! I would highly recommend.',
    date: '2025-07-02',
    verified: true
  },
  {
    id: 'jorge-cruz',
    name: 'Jorge Cruz',
    rating: 5,
    text: 'Highly recommended, very professional and great customer service',
    date: '2025-06-22',
    verified: true
  },
  {
    id: 'lynwood-reinhardt',
    name: 'Lynwood Reinhardt',
    rating: 5,
    text: 'Lawn Care Services is fantastic. Highly recommended.',
    date: '2025-02-22',
    verified: true
  },
  {
    id: 'eran-thompson',
    name: 'Eran Thompson',
    rating: 5,
    text: 'Jamie is very nice knowledgeable and experienced and his services have helped the overall health of my lawn and flower garden.',
    date: '2024-12-18',
    verified: true
  }
];

export const serviceAreas: ServiceArea[] = [
  { id: 'farmers-branch', name: 'Farmers Branch' },
  { id: 'universal-park', name: 'Universal Park' },
  { id: 'north-dallas', name: 'North Dallas' },
  { id: 'dallas', name: 'Dallas' },
  { id: 'coppell', name: 'Coppell' },
  { id: 'garland', name: 'Garland' },
  { id: 'plano', name: 'Plano' },
  { id: 'mckinney', name: 'McKinney' },
  { id: 'irving', name: 'Irving' },
  { id: 'arlington', name: 'Arlington' },
  { id: 'north-richland-hills', name: 'North Richland Hills' },
  { id: 'flower-mound', name: 'Flower Mound' },
  { id: 'corinth', name: 'Corinth' },
  { id: 'frisco', name: 'Frisco' },
  { id: 'denton', name: 'Denton' }
];

export const faqItems: FAQItem[] = [
  {
    id: 'watering-frequency',
    question: 'How often should I water my lawn in Dallas?',
    answer: 'For most Dallas lawns, we recommend watering 2–3 times per week, early in the morning. Our sprinkler systems are designed to optimize water use and avoid waste.'
  },
  {
    id: 'sprinkler-repair',
    question: 'Do you repair broken or leaking sprinkler systems?',
    answer: 'Yes! We specialize in sprinkler and irrigation repair. From leaks and clogs to full system diagnostics, we ensure your system runs efficiently and reliably.'
  },
  {
    id: 'service-areas',
    question: 'What areas do you serve outside of Dallas?',
    answer: 'We proudly serve a wide area, including Coppell, Frisco, Plano, Denton, McKinney, Garland, Irving, Arlington, and more.'
  },
  {
    id: 'pet-safety',
    question: 'Are your insect and weed treatments safe for pets?',
    answer: 'Absolutely. We use pet-friendly, eco-conscious products that are tough on pests and weeds but safe for your family and furry friends.'
  },
  {
    id: 'response-time',
    question: 'How soon can you start after I book a service?',
    answer: 'We offer some of the fastest landscaping response times in the Dallas area. In most cases, we can schedule your service within just a few days.'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'landscape-transformation-1',
    title: 'Complete Landscape Transformation',
    description: 'From basic lawn to stunning outdoor paradise',
    image: '/images/gallery/landscape-transformation.jpg',
    category: 'before-after'
  },
  {
    id: 'irrigation-install-1',
    title: 'Professional Irrigation Installation',
    description: 'Smart watering system with complete coverage',
    image: '/images/gallery/irrigation-install.jpg',
    category: 'irrigation'
  },
  {
    id: 'lawn-care-1',
    title: 'Lawn Health Recovery',
    description: 'Bringing damaged lawn back to life',
    image: '/images/gallery/lawn-recovery.jpg',
    category: 'lawn-care'
  }
];
// src/lib/data.ts

// Add this new data array (keep your existing galleryItems array)
export const miniGalleryItems: MiniGalleryItem[] = [
  {
    id: 'transformation-1',
    title: 'Complete Yard Makeover',
    description: 'From bare to beautiful in just 3 weeks',
    image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991713/1-4-300x202_hhdfz4.jpg',
    category: 'before-after',
    featured: true
  },
  {
    id: 'sprinkler-repair',
    title: 'Sprinkler System Repair',
    description: 'Fixed leaks and optimized water pressure',
    image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991454/1-300x202_t0pcrg.jpg',
    category: 'services'
  },
  {
    id: 'lawn-recovery',
    title: 'Lawn Health Recovery',
    description: 'Revived this damaged lawn in 60 days',
    image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991761/4-4-300x202_mvnm5b.jpg',
    category: 'results',
    featured: true
  },
  {
    id: 'irrigation-install',
    title: 'Smart Irrigation Install',
    description: 'Water-saving system with full coverage',
    image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991777/5-4-300x202_mmrkc6.jpg',
    category: 'services'
  },
  {
    id: 'landscape-design',
    title: 'Custom Landscape Design',
    description: 'Created this tropical paradise',
    image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991779/5-300x202_ejrhhr.jpg',
    category: 'before-after',
    featured: true
  },
  {
    id: 'weed-control',
    title: 'Weed Elimination',
    description: 'Completely weed-free in 30 days',
    image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991604/8-4-300x202_umwbsx.jpg',
    category: 'results'
  }
];


//adding servives content after this

export const serviceContent: ServiceContent[] = [
  {
    id: 'sprinkler-installation',
    slug: 'sprinkler-installation-repair',
    title: 'Sprinkler Installation & Repair',
    heroTitle: 'Smarter Sprinklers. Greener Lawns',
    heroSubtitle: 'Get expert sprinkler installation and repair to keep your yard green, healthy, and worry-free year-round.',
    image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519852/service-1-bg-image_bndfq1_11_11zon_spwl4k.jpg',
    stats: [
      { number: 698, description: 'Systems Installed' },
      { number: 1106, description: 'Happy Clients' },
      { number: 4469, description: 'Gallons Saved Anually' },
      { number: 754, description: 'Emergency Repairs Handled' }
    ],
    features: [
      {
        image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992707/Sprinkler-Installation-Repair_vdbdsx.jpg',
        title: 'Leaky or Clogged Sprinkler System?',
        description: 'Don\'t let a broken sprinkler system waste water or damage your lawn. We fix it fast so your yard stays lush and beautiful.',
        featuresArray: [
          { description: 'Broken or clogged sprinkler heads' },
          { description: 'Uneven water coverage' },
          { description: 'Low water pressure or leaks' },
          { description: 'Outdated, inefficient systems' }
        ],
        buttonText: 'Fix My Sprinkler Section'
      },
      {
        image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992695/service-2-bg-image_lznowy.jpg',
        title: 'Your One-Stop Sprinkler Solution',
        description: 'Everything you need to keep your irrigation system running flawlessly:',
        featuresArray: [
          { description: 'New Sprinkler System Installation' },
          { description: 'Smart Irrigation System Upgrades' },
          { description: 'Seasonal Maintenance & Tune-Ups' },
          { description: 'Water Efficiency Optimization' }
        ],
        buttonText: 'Book Now For Sprinkler Care'
      },
      {
        image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992699/service-3-bg-image_up8ftt.jpg',
        title: 'Your Sprinkler Experts',
        description: 'Uneven watering? Dead spots? We make those problems disappear.',
        featuresArray: [
          { description: '25+ Years of Local Experience' },
          { description: 'Water-Saving Technology' },
          { description: 'Custom-Designed Systems' },
          { description: 'Honest Pricing & Timely Service' }
        ],
        buttonText: 'Talk To A Sprinkler Expert'
      }
    ],
    solution: {
      title: 'Before & After: See the Difference Smart Irrigation Makes',
      description: 'Real results from homeowners who upgraded their lawns with expert sprinkler and irrigation solutions.',
      imageGallery: [
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992713/The-Cancun-Advantage-for-Lawn-Health_smgrym.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992661/Drought-Damage-Weak-Roots-We-Can-Help_tzlnsf.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992707/Sprinkler-Installation-Repair_vdbdsx.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754999051/2-2_fpawp7.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754999046/1-2_zeipb7.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754999056/3-2_eduoif.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992617/6-2_p7eoo0.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754999080/3-1_hmbj89.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754999086/8-1_hatsi9.jpg' }
      ],
      buttonText: 'View Full Project Gallery'
    },
    card: {
      title: 'Need Sprinkler Help Today?',
      description: 'Our licensed experts are ready to fix or install your system — fast, affordable, and done right.',
      buttonText: 'Let\'s Get It Flowing'
    },
    mapSection: {
      title: 'Service Coverage',
      description: 'Lawn Care Services proudly offers sprinkler installation & repair in the following areas:'
    },
    faqs: [
      {
        question: 'How much does sprinkler installation cost?',
        answer: 'Pricing depends on your lawn size and system design. We offer free estimates for all installations and repairs.'
      },
      {
        question: 'Do you install water-saving irrigation systems?',
        answer: 'Yes! Our sprinkler systems are designed to optimize water use, saving you money and protecting the environment.'
      },
      {
        question: 'How often should my sprinkler system be serviced?',
        answer: 'We recommend seasonal tune-ups (at least twice a year) to prevent leaks, clogs, and wasted water.'
      },
      {
        question: 'Can you repair my existing sprinkler system?',
        answer: 'Absolutely! From broken heads to major system overhauls, we\'ve got you covered.'
      },
      {
        question: 'Do you serve areas outside Dallas, TX?',
        answer: 'Yes! We proudly serve Farmers Branch, Plano, McKinney, Garland, Frisco, Denton, and more.'
      }
    ],
    cta: {
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992705/sprinkler-installation_b4lvq6.jpg',
      finalCta: 'Let\'s Beautify Your Lawn with Smarter Irrigation',
      finalCtaDescription: 'Whether you need fast sprinkler repairs or a full irrigation upgrade, we\'re ready to make your lawn thrive.',
      buttonText: 'Let\'s Water Smarter'
    }
  },
  {
    id: 'irrigation-repair',
    slug: 'irrigation-system-repair',
    title: 'Irrigation System Repair',
    heroTitle: 'Healthy Lawns Start with Efficient Irrigation',
    heroSubtitle: 'Restore perfect water flow, fix leaks, and keep your yard healthy, without wasting a drop.',
    image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519848/Irrigation-System-Repair_z8cjw0_5_11zon_wjdrko.jpg',
    stats: [
      {
        number: 3200,
        description: 'Irrigation Repairs Completed'
      },
      {
        number: 1000,
        description: 'Gallons Of Water Saved Weekly'
      },
      {
        number: 25,
        description: 'Years Of Experience'
      },
      {
        number: 700,
        description: 'Smart System Upgrades'
      }
    ],
    features: [
      {
        image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992710/Stop-Playing-Plumber_Call-the-Pros_ezs1ek.jpg',
        title: 'Stop Playing Plumber Call the Pros',
        description: 'A faulty irrigation system can damage your lawn and drive up your water bill. We fix problems fast so your landscape stays green and stress-free.',
        featuresArray: [
          { description: 'A faulty irrigation system can damage your lawn and drive up your water bill.' },
          { description: 'Leaky pipes or valves' },
          { description: 'Broken or clogged sprinkler heads' },
          { description: 'Outdated or inefficient irrigation systems' }
        ],
        buttonText: 'Fix My Irrigation Now'
      },
      {
        image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992617/6-2_p7eoo0.jpg',
        title: 'Everything Your Irrigation System Needs',
        description: 'Every fix and upgrade to keep your system running at peak performance:',
        featuresArray: [
          { description: 'Complete irrigation system diagnostics' },
          { description: 'Leak detection and repair' },
          { description: 'Valve and line replacements' },
          { description: 'Water pressure optimization' }
        ],
        buttonText: 'Upgrade My Irrigation'
      },
      {
        image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992659/Dallas-Go-To-Team-for-Leak-Free-Lawns_nto00l.jpg',
        title: 'Dallas’ Go-To Team for Leak-Free Lawns',
        description: 'Expert irrigation repair that saves water, money, and your landscape.',
        featuresArray: [
          { description: '25+ Years of Experience' },
          { description: 'Water Saving Technology' },
          { description: 'Quick, Honest Repairs' },
          { description: 'Full-System Diagnostics' }
        ],
        buttonText: 'Book My Irrigation Fix'
      }
    ],
    solution: {
      title: 'Before & After Lawn Recovery',
      description: 'See how our irrigation repairs turn stressed, dry yards into vibrant, healthy lawns — quickly and affordably.',
      imageGallery: [
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992597/4-3_ogrijm.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992604/5-2_lbsnq4.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992659/Dallas-Go-To-Team-for-Leak-Free-Lawns_nto00l.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992664/irrigation-repair_tapml1.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992679/Mein-Background-image_c1qys5.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992614/6-1_gamoor.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992617/6-2_p7eoo0.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992710/Stop-Playing-Plumber_Call-the-Pros_ezs1ek.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992578/1-1_acajb8.jpg' },

      ],
      buttonText: 'Explore More Transformations'
    },
    card: {
      title: 'Leaks Don\'t Wait, Why Should You?',
      description: 'Quick, reliable irrigation repair that saves water and revives your lawn.',
      buttonText: 'Stop The Leak Now'
    },
    mapSection: {
      title: 'Service Areas',
      description: 'Lawn Care Services proudly offers irrigation repair services in Dallas and nearby communities.'
    },
    faqs: [
      {
        question: 'How much does irrigation repair cost in Dallas?',
        answer: 'Costs vary by issue, but we offer free estimates before any work begins.'
      },
      {
        question: 'How do I know if my irrigation system needs repair?',
        answer: 'Look for signs like uneven watering, leaks, or higher water bills—our experts can diagnose the problem fast.'
      },
      {
        question: 'Do you upgrade old irrigation systems?',
        answer: 'Yes! We install smart, eco-friendly solutions to save water and money.'
      },
      {
        question: 'How fast can you fix an irrigation issue?',
        answer: 'Most repairs are completed the same day after your inspection.'
      },
      {
        question: 'Which areas do you serve outside Dallas?',
        answer: 'We cover Plano, Garland, Frisco, Denton, McKinney, Farmers Branch, and more.'
      }
    ],
    cta: {
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992729/Your-One-Stop-Sprinkler-Solution_zdslrh.jpg',
      finalCta: 'Let\'s Restore Your Lawn with Smarter Irrigation',
      finalCtaDescription: 'From water leaks to full system tune-ups — our irrigation specialists keep your lawn green and your water bill low.',
      buttonText: 'Restore My Lawn'
    }
  },
  {
    id: 'landscaping',
    slug: 'landscaping-services',
    title: 'Landscaping Services',
    heroTitle: 'Landscaping That Wows, Every Time',
    heroSubtitle: 'From bold designs to flawless installs, we craft landscapes that turn homes into showpieces.',
    image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519842/1_w9p5t6_10_11zon_ii2yyf.jpg',
    stats: [
      {
        number: 875,
        description: 'Custom Designs Completed'
      },
      {
        number: 650,
        description: 'Outdoor Living Areas Installed'
      },
      {
        number: 98,
        description: 'Client Satisfaction Rate'
      },
      {
        number: 1000,
        description: 'Trees & Shrubs Planted'
      }
    ],
    features: [
      {
        image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992690/Ready-for-a-Yard-That-Turns-Heads_k8l8uu.jpg',
        title: 'Ready for a Yard That Turns Heads?',
        description: 'Stop settling for a plain, lifeless yard. Our landscaping experts bring creativity, functionality, and curb appeal to every outdoor space we touch.',
        featuresArray: [
          { description: 'Outdated, dull yards lacking personality' },
          { description: 'Poor soil, drainage, and planting choices' },
          { description: 'Inefficient or hard-to-maintain designs' },
          { description: 'Lack of outdoor living spaces' }
        ],
        buttonText: 'Transform Your Yard'
      },
      {
        image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992655/Complete-Solutions-for-Stunning-Landscapes_mlsf6n.jpg',
        title: 'Complete Solutions for Stunning Landscapes',
        description: 'All-inclusive landscaping services tailored to your space and lifestyle for a beautiful, low-maintenance outdoor experience year-round:',
        featuresArray: [
          { description: 'Complete Landscape Design and Planning' },
          { description: 'Garden and Flower Bed Installation' },
          { description: 'Hardscaping (Patios, Pathways, and Stone Borders)' },
          { description: 'Tree and Shrub Planting' }
        ],
        buttonText: 'Design My Dream Yard'
      },
      {
        image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992723/What-Sets-Our-Landscaping-Apart-from-the-Rest_au5tj9.jpg',
        title: 'What Sets Our Landscaping Apart from the Rest',
        description: 'We don’t just design landscapes, we create lasting impressions.',
        featuresArray: [
          { description: 'Custom Designs for Your Style & Budget' },
          { description: 'Eco-Friendly, Sustainable Solutions' },
          { description: 'From Concept to Completion' },
          { description: 'Transparent Pricing & On-Time Delivery' }
        ],
        buttonText: 'Get Expert Advice'
      }
    ],
    solution: {
      title: 'Before & After Landscape Transformations',
      description: 'See how we turn plain lawns into lush, functional, and beautiful outdoor spaces that homeowners love.',
      imageGallery: [
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992635/8-5_f2r7f6.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992612/5-5_auncy1.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992599/4-5_ggslzn.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992581/1-5_eldnil.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992655/Complete-Solutions-for-Stunning-Landscapes_mlsf6n.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992583/2-3_ujplq4.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992581/1-3_wfrk53.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992690/Ready-for-a-Yard-That-Turns-Heads_k8l8uu.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992602/5_s0xjhu.jpg' },
      ],
      buttonText: 'Explore Makeovers'
    },
    card: {
      title: 'Turn Your Yard Into the Space You\'ve Always Wanted!',
      description: 'Custom designs, flawless installation, and lasting beauty, starting with a free consultation.',
      buttonText: 'Unlock My Dream Yard'
    },
    mapSection: {
      title: 'Proudly Serving Dallas and Nearby Cities',
      description: 'We deliver custom landscaping services across Dallas–Fort Worth and beyond'
    },
    faqs: [
      {
        question: 'How much does landscaping cost in Dallas?',
        answer: 'It depends on your design and materials. We provide custom quotes to fit your budget.'
      },
      {
        question: 'Do you handle both design and installation?',
        answer: 'Yes! We manage your entire project from concept to completion.'
      },
      {
        question: 'Can you create low-maintenance landscaping?',
        answer: 'Absolutely! We specialize in low-maintenance, sustainable designs that stay beautiful with minimal effort.'
      },
      {
        question: 'How long does a landscaping project take?',
        answer: 'Most projects are completed within a few days to a few weeks, depending on size and complexity.'
      },
      {
        question: 'Do you serve areas outside Dallas?',
        answer: 'Yes! We serve Plano, Garland, Frisco, Denton, McKinney, Farmers Branch, and more.'
      }
    ],
    cta: {
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992592/4-1_y6m47x.jpg',
      finalCta: 'Let\'s Turn Your Outdoors Into a Work of Art',
      finalCtaDescription: 'From plant selection to hardscaping and custom design, we handle every detail, all you have to do is enjoy the results.',
      buttonText: 'Begin The Transformation'
    }
  },
  {
    id: 'lawn-health',
    slug: 'lawn-health-protection',
    title: 'Lawn Health & Protection',
    heroTitle: 'Lawn Care That Goes Beyond Mowing',
    heroSubtitle: 'Keep your lawn vibrant and disease-free with expert care that goes beyond mowing.',
    image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519842/5-4_jz6vbh_14_11zon_dsm4tk.jpg',
    stats: [
      {
        number: 2450,
        description: 'Lawns Restored'
      },
      {
        number: 1050,
        description: 'Pest-Free Lawns Maintained'
      },
      {
        number: 3100,
        description: 'Soil Health Treatments Applied'
      },
      {
        number: 99,
        description: 'Satisfaction Rate'
      }
    ],
    features: [
      {
        image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992661/Drought-Damage-Weak-Roots-We-Can-Help_tzlnsf.jpg',
        title: 'Drought Damage? Weak Roots? We Can Help.',
        description: 'Brown patches, thinning grass, or insect damage can ruin the beauty of your outdoor space. Our Lawn Health & Protection services restore and maintain a lush, thriving lawn—season after season.',
        featuresArray: [
          { description: 'Patchy, uneven, or discolored grass' },
          { description: 'Seasonal stress or drought damage' },
          { description: 'Soil nutrient deficiencies' },
          { description: 'Pest and disease infestations' }
        ],
        buttonText: 'Start My Lawn Recovery'
      },
      {
        image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992688/Our-Services-Include_x6x0vs.jpg',
        title: 'Our Services Include',
        description: 'Everything your lawn needs to stay strong, healthy, and beautiful all year long.',
        featuresArray: [
          { description: 'Seasonal Fertilization and Soil Enrichment' },
          { description: 'Lawn Aeration for Stronger Root Growth' },
          { description: 'Disease Prevention and Treatment' },
          { description: 'Drought Protection and Moisture Management' }
        ],
        buttonText: 'Unleash Lawn Power'
      },
      {
        image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992713/The-Cancun-Advantage-for-Lawn-Health_smgrym.jpg',
        title: 'The Advantage for Lawn Health',
        description: 'We don’t just maintain lawns, we protect and strengthen them for long-term beauty.',
        featuresArray: [
          { description: '25+ Years of Lawn Care Expertise' },
          { description: 'Customized Treatment Plans' },
          { description: 'Eco-friendly Products' },
          { description: 'Reliable Service Every Time' }
        ],
        buttonText: 'Let The Lawn Thrive'
      }
    ],
    solution: {
      title: 'Lawn Recovery You Can See',
      description: 'Check out real results from clients who trusted us to restore, revive, and protect their lawns.',
      imageGallery: [
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992628/7-5_m7qndf.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992609/5-4_jz6vbh.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992594/4-2_miflcc.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992630/8_zppcao.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992672/Landscaping-Services_n6usqt.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992719/Tree-Plant-Health-Management_iyurev.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992588/3-4_lxdn4r.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992688/Our-Services-Include_x6x0vs.jpg' },
      ],
      buttonText: 'See More Lawn Projects'
    },
    card: {
      title: 'Let\'s Give Your Lawn the Care It Deserves',
      description: 'Book a free lawn evaluation today and get a tailored action plan from the experts.',
      buttonText: 'Fix My Lawn'
    },
    mapSection: {
      title: 'Protecting Lawns Across Dallas & Beyond',
      description: 'Our lawn health & protection plans are available in all major Dallas-Fort Worth communities'
    },
    faqs: [
      {
        question: 'How often should I treat my lawn?',
        answer: 'Most lawns benefit from seasonal treatments 2–4 times a year, depending on soil and grass type.'
      },
      {
        question: 'Can you fix a damaged lawn?',
        answer: 'Yes! We provide custom solutions to restore patchy or stressed lawns.'
      },
      {
        question: 'Do you use safe and eco-friendly products?',
        answer: 'Absolutely, we prioritize treatments that protect your family, pets, and the environment.'
      },
      {
        question: 'How long does it take to see results?',
        answer: 'You\'ll notice improvements in as little as a few weeks, with full results after regular treatments.'
      },
      {
        question: 'Do you service areas outside Dallas?',
        answer: 'Yes! We cover Plano, Garland, Frisco, Denton, McKinney, Farmers Branch, and nearby areas.'
      }
    ],
    cta: {
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg',
      finalCta: 'Let\'s Make Your Lawn the Best on the Block',
      finalCtaDescription: 'With expert care, weed control, and eco-safe treatments, we\'ll help your lawn thrive all year long.',
      buttonText: 'Refresh Your Lawn'
    }
  },
  {
    id: 'tree-care',
    slug: 'tree-plant-health-management',
    title: 'Tree & Plant Health Management',
    heroTitle: 'Strong Roots. Healthy Trees. Beautiful Landscape.',
    heroSubtitle: 'Strong roots, healthy plants, and vibrant trees, because your greenery deserves the best care.',
    image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519842/5-3_mljoxn_16_11zon_zajmzz.jpg',
    stats: [
      {
        number: 1850,
        description: 'Trees Treated & Saved'
      },
      {
        number: 1320,
        description: 'Plant Health Plans Delivered'
      },
      {
        number: 98,
        description: 'Pest/Disease Elimination Rate'
      },
      {
        number: 100,
        description: 'Eco-Safe Product Usage'
      }
    ],
    features: [
      {
        image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992588/3-4_lxdn4r.jpg',
        title: 'Sick Trees? Weak Plants? We Can Help',
        description: 'Yellow leaves or weak growth? Our Tree & Plant Health services protect your landscape and keep it thriving year-round.',
        featuresArray: [
          { description: 'Nutrient deficiencies and poor soil health' },
          { description: 'Pest infestations damaging plants and trees' },
          { description: 'Tree diseases and fungal infections' },
          { description: 'Weak growth or dead branches' }
        ],
        buttonText: 'Start Tree Recovery'
      },
      {
        image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992674/lawn-care_se24t4.jpg',
        title: 'Our Services Include',
        description: 'Comprehensive care for a stronger, healthier landscape.',
        featuresArray: [
          { description: 'Tree Injections for Nutrients and Disease Protection' },
          { description: 'Plant-Specific Fertilization and Soil Enrichment' },
          { description: 'Seasonal Pruning and Growth Management' },
          { description: 'Root Zone Treatments for Maximum Absorption' }
        ],
        buttonText: 'Book Plant Care'
      },
      {
        image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992583/2-3_ujplq4.jpg',
        title: 'Why We’re the Experts in Tree & Plant Health',
        description: 'We go beyond lawn care, our expertise keeps your entire landscape healthy.',
        featuresArray: [
          { description: '25+ Years of Experience in Tree & Plant Care' },
          { description: 'Custom Health Plans for Every Species' },
          { description: 'Eco-Friendly Treatments That Work' },
          { description: 'Professional Diagnosis and Targeted Solutions' }
        ],
        buttonText: 'Talk To A Tree Expert'
      }
    ],
    solution: {
      title: 'See the Power of Plant Recovery',
      description: 'Real results from Dallas homeowners who restored their trees and gardens with our targeted care plans.',
      imageGallery: [
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992638/about-bg_z2eu2s.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992654/Cancun-7-scaled_le4ghs.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992649/Cancun-3-scaled_hsprex.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992646/Cancun-1-GT-scaled_fnccqh.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992651/Cancun-6-scaled_qp2hb0.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992581/1-3_wfrk53.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992683/Mein-Background-image-1_vrcpxo.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992672/Landscaping-Services_n6usqt.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992633/8-4_uhokpa.jpg' },
      ],
      buttonText: 'Explore Our Projects'
    },
    card: {
      title: 'Strong Roots Start Here, Protect Your Greenery Today!',
      description: 'Expert care that keeps your trees healthy and your plants thriving season after season.',
      buttonText: 'Start Root Care Now'
    },
    mapSection: {
      title: 'Professional Tree & Plant Care Across Dallas',
      description: 'We provide expert plant and tree health management in Dallas and surrounding neighborhoods'
    },
    faqs: [
      {
        question: 'How do I know if my trees need treatment?',
        answer: 'Look for yellow leaves, dead branches, or signs of disease, our experts can diagnose and treat issues fast.'
      },
      {
        question: 'Are your treatments safe for the environment?',
        answer: 'Yes, we use eco-friendly methods that protect plants and surrounding ecosystems.'
      },
      {
        question: 'Do you handle large trees as well as small plants?',
        answer: 'Absolutely, from towering oaks to delicate shrubs, we care for them all.'
      },
      {
        question: 'How often should trees and plants be treated?',
        answer: 'Most trees and plants benefit from seasonal care for long-term health.'
      },
      {
        question: 'Which areas do you service outside Dallas?',
        answer: 'We cover Plano, Garland, Frisco, Denton, McKinney, Farmers Branch, and more.'
      }
    ],
    cta: {
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992586/3-3_qcmj9y.jpg',
      finalCta: 'Protect the Plants That Make Your Yard Beautiful',
      finalCtaDescription: 'Don\'t let disease or poor soil ruin your investment. Our expert plant and tree health services keep your landscape thriving year-round.',
      buttonText: 'Start Plant Protection Today'
    }
  },
  {
    id: 'pest-control',
    slug: 'insect-weed-control',
    title: 'Insect & Weed Control',
    heroTitle: 'Weeds Gone. Bugs Gone. Beautiful Lawn On.',
    heroSubtitle: 'Protect your yard from destructive pests and invasive weeds with safe, effective treatments.',
    image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519842/3-5_bg3s9i_15_11zon_wiiepg.jpg',
    stats: [
      {
        number: 2000,
        description: 'Lawns Protected from Insects'
      },
      {
        number: 1500,
        description: 'Weed-Free Landscapes Maintained'
      },
      {
        number: 98,
        description: 'Recurrence Reduction Rate'
      },
      {
        number: 100,
        description: 'Pet & Family-Safe Applications'
      }
    ],
    features: [
      {
        image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992583/2-5_bbcjht.jpg',
        title: 'Bugs and Weeds Wrecking Your Yard?',
        description: 'Pests and weeds aren’t just ugly; they damage roots, steal nutrients, and destroy your landscape. Our eco-conscious solutions eliminate the problem and keep your lawn looking flawless.',
        featuresArray: [
          { description: 'Invasive weeds ruining your lawn’s look' },
          { description: 'Insects damaging grass, plants, and trees' },
          { description: 'Patchy or thinning grass caused by pests' },
          { description: 'Seasonal outbreaks and recurring infestations' }
        ],
        buttonText: 'End The Infestation'
      },
      {
        image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992612/5-5_auncy1.jpg',
        title: 'Our Insect & Weed Control Services Include',
        description: 'Comprehensive protection for a healthy, beautiful outdoor space.',
        featuresArray: [
          { description: 'Targeted Weed Removal and Prevention' },
          { description: 'Grub and Lawn Pest Treatments' },
          { description: 'Eco-Friendly Insect Control Solutions' },
          { description: 'Preventive Lawn Protection Plans' }
        ],
        buttonText: 'Eliminate Pests & Weeds'
      },
      {
        image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992612/5-5_auncy1.jpg',
        title: 'Why Choose Us',
        description: 'We protect your yard without harming your family, pets, or the environment.',
        featuresArray: [
          { description: '25+ Years of Lawn Care Expertise in Dallas' },
          { description: 'Safe, Eco-Friendly Products That Work' },
          { description: 'Customized Treatment Plans for Every Lawn' },
          { description: 'Preventive Care to Stop Problems Before They Start' }
        ],
        buttonText: 'Book Trsusted Care'
      }
    ],
    solution: {
      title: 'Weed-Free, Bug-Free Lawns',
      description: 'Real lawn transformations made possible with expert insect and weed control services.',
      imageGallery: [
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992635/8-5_f2r7f6.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992727/Why-Choose-Us_tl6osl.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992583/2-5_bbcjht.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992612/5-5_auncy1.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992625/6-5_gsbxht.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992599/4-5_ggslzn.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992644/Bugs-and-Weeds-Wrecking-Your-Yard_y05kh8.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992688/Our-Services-Include_x6x0vs.jpg' },
        { image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992620/6-3_jkedr2.jpg' },
      ],
      buttonText: 'Explore Our Projects'
    },
    card: {
      title: 'Kick Out Weeds & Bugs, Take Back Your Lawn Today!',
      description: 'Book a free inspection and let our experts recommend the best plan for long-term protection.',
      buttonText: 'Protect My Lawn'
    },
    mapSection: {
      title: 'Lawn Pest & Weed Control Throughout DFW',
      description: 'We help homeowners across the metroplex protect their lawns from invaders, the safe and effective way'
    },
    faqs: [
      {
        question: 'Are your pest and weed treatments safe?',
        answer: 'Yes, we use eco-friendly methods that protect your lawn, family, and pets.'
      },
      {
        question: 'How often should I schedule pest and weed control?',
        answer: 'Most lawns benefit from seasonal treatments to prevent recurring problems.'
      },
      {
        question: 'Can you treat lawns with existing pest damage?',
        answer: 'Absolutely, we eliminate the pests and restore your lawn\'s health.'
      },
      {
        question: 'Do you offer preventive weed control?',
        answer: 'Yes, our treatments include pre-emergent applications to stop weeds before they sprout.'
      },
      {
        question: 'Which areas do you service outside Dallas?',
        answer: 'We serve Plano, Garland, Frisco, Denton, McKinney, Farmers Branch, and surrounding areas.'
      }
    ],
    cta: {
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992640/Baneer-Image_xywc9s.jpg',
      finalCta: 'Take Control of Your Lawn Starting Today',
      finalCtaDescription: 'Weeds and insects can ruin a great yard. Get the protection your lawn needs now with proven treatments and expert care.',
      buttonText: 'Get Expert Help'
    }
  },
  {
    id: 'columbia-lawn-care-services',
    slug: 'columbia-lawn-care-services',
    title: 'Lawn Care Services in Columbia',
    heroTitle: 'Transform Your Yard into a Tropical Paradise in Columbia',
    heroSubtitle: 'Fast, affordable sprinkler repair, lawn care, and landscaping — all handled by local experts in Columbia.',
    image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519842/5-4_jz6vbh_14_11zon_dsm4tk.jpg',
    features: [
      {
        image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992661/Drought-Damage-Weak-Roots-We-Can-Help_tzlnsf.jpg',
        title: 'Drought Damage? Weak Roots? We Can Help.',
        description: 'Brown patches, thinning grass, or insect damage can ruin the beauty of your outdoor space. Our Lawn Health & Protection services restore and maintain a lush, thriving lawn—season after season.',
        featuresArray: [
          { description: 'Patchy, uneven, or discolored grass' },
          { description: 'Seasonal stress or drought damage' },
          { description: 'Soil nutrient deficiencies' },
          { description: 'Pest and disease infestations' }
        ],
        buttonText: 'Start My Lawn Recovery'
      },
      {
        image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992688/Our-Services-Include_x6x0vs.jpg',
        title: 'Our Services Include',
        description: 'Everything your lawn needs to stay strong, healthy, and beautiful all year long.',
        featuresArray: [
          { description: 'Seasonal Fertilization and Soil Enrichment' },
          { description: 'Lawn Aeration for Stronger Root Growth' },
          { description: 'Disease Prevention and Treatment' },
          { description: 'Drought Protection and Moisture Management' }
        ],
        buttonText: 'Unleash Lawn Power'
      },
      {
        image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992713/The-Cancun-Advantage-for-Lawn-Health_smgrym.jpg',
        title: 'The Advantage for Lawn Health',
        description: 'We don’t just maintain lawns, we protect and strengthen them for long-term beauty.',
        featuresArray: [
          { description: '25+ Years of Lawn Care Expertise' },
          { description: 'Customized Treatment Plans' },
          { description: 'Eco-friendly Products' },
          { description: 'Reliable Service Every Time' }
        ],
        buttonText: 'Let The Lawn Thrive'
      }
    ],
    form: {
      id: "columbia-lawn-care-services",
      locationSlug: "columbia",
      serviceSlug: "lawn-care-services"
    },
    ServiceText: {
      title: "Lawn Care Services in Columbia",
      description: "Routine lawn mowing service for your Columbia, SC yard with Augusta Lawn Care include not only cutting your property’s grass but also edging along flowerbeds and concrete surfaces. Our team will keep detailed records about your property so we can provide personalized service every time.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    cta: {
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg',
      finalCta: 'Let\'s Make Your Lawn the Best on the Block',
      finalCtaDescription: 'With expert care, weed control, and eco-safe treatments, we\'ll help your lawn thrive all year long.',
      buttonText: 'Refresh Your Lawn'
    }
  },
  {
    id: "columbia-lawn-mowing",
    slug: "columbia-lawn-mowing",
    title: "Lawn Mowing in Columbia",
    heroTitle: "Keep Your Lawn Pristine with Expert Mowing in Columbia",
    heroSubtitle: "Reliable, precise lawn mowing services by local Columbia experts to maintain your yard’s beauty.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991819/Cancun-1-GT-scaled_ie7dhs.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991825/Cancun-2-GT-scaled_dtyjqf.jpg",
        title: "Perfect Cuts for Every Season",
        description: "Our mowing services ensure your lawn stays neat and healthy with tailored cuts for all weather conditions.",
        featuresArray: [
          { description: "Regular mowing schedules" },
          { description: "Adjustable cutting heights" },
          { description: "Edge trimming included" },
          { description: "Grass clipping removal" }
        ],
        buttonText: "Schedule Mowing Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
        title: "Benefits of Professional Mowing",
        description: "Enhance your lawn’s health and appearance with our expert mowing techniques.",
        featuresArray: [
          { description: "Promotes even grass growth" },
          { description: "Reduces weed proliferation" },
          { description: "Improves air circulation" },
          { description: "Maintains aesthetic appeal" }
        ],
        buttonText: "Boost Your Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Why Choose Us for Mowing",
        description: "Experience top-notch mowing with our skilled team dedicated to Columbia lawns.",
        featuresArray: [
          { description: "Certified lawn technicians" },
          { description: "Eco-friendly equipment" },
          { description: "Flexible scheduling" },
          { description: "Customer satisfaction guaranteed" }
        ],
        buttonText: "Get Started Today"
      }
    ],
    ServiceText: {
      title: "Lawn Mowing in Columbia",
      description: "Expert lawn care services to keep your yard looking its best.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "columbia-lawn-mowing",
      locationSlug: "columbia",
      serviceSlug: "lawn-mowing"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
      finalCta: "Transform Your Lawn with Expert Mowing",
      finalCtaDescription: "Let our Columbia mowing experts keep your lawn looking its best year-round with precision care.",
      buttonText: "Book Your Mowing"
    }
  },
  {
    id: "columbia-sprinkler-installation-repair",
    slug: "columbia-sprinkler-installation-repair",
    title: "Sprinkler Installation & Repair in Columbia",
    heroTitle: "Efficient Sprinkler Solutions for Your Columbia Yard",
    heroSubtitle: "Expert sprinkler installation and repair services by Columbia professionals to keep your lawn hydrated.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991825/Cancun-2-GT-scaled_dtyjqf.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
        title: "Custom Sprinkler Installation",
        description: "Design and install a sprinkler system tailored to your Columbia lawn’s unique needs.",
        featuresArray: [
          { description: "Custom layout planning" },
          { description: "Water-efficient designs" },
          { description: "Professional installation" },
          { description: "System testing" }
        ],
        buttonText: "Plan My System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Rapid Repair Services",
        description: "Fix leaks, clogs, or broken heads with our quick and reliable repair services.",
        featuresArray: [
          { description: "Leak detection and repair" },
          { description: "Head replacement" },
          { description: "Pressure adjustment" },
          { description: "Seasonal maintenance" }
        ],
        buttonText: "Fix My Sprinkler"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Why Trust Our Team",
        description: "Benefit from our expertise in sprinkler systems for a thriving Columbia lawn.",
        featuresArray: [
          { description: "Years of experience" },
          { description: "Certified technicians" },
          { description: "High-quality parts" },
          { description: "24/7 support" }
        ],
        buttonText: "Contact Us Now"
      }
    ],
    ServiceText: {
      title: "Sprinkler Installation & Repair in Columbia",
      description: "Expert sprinkler installation and repair services by Columbia professionals to keep your lawn hydrated.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "columbia-sprinkler-installation-repair",
      locationSlug: "columbia",
      serviceSlug: "sprinkler-installation-repair"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991900/Your-One-Stop-Sprinkler-Solution_u3ghig.jpg",
      finalCta: "Keep Your Lawn Green with Sprinkler Care",
      finalCtaDescription: "Trust our Columbia experts for top-tier sprinkler installation and repair services.",
      buttonText: "Get Sprinkler Help"
    }
  },
  {
    id: "columbia-lawn-sprinkler-installation",
    slug: "columbia-lawn-sprinkler-installation",
    title: "Lawn Sprinkler Installation in Columbia",
    heroTitle: "Perfect Watering with New Sprinkler Systems in Columbia",
    heroSubtitle: "Install a state-of-the-art sprinkler system with Columbia’s leading lawn care experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991825/Cancun-2-GT-scaled_dtyjqf.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Tailored Installation Process",
        description: "We design and install sprinklers to match your lawn’s size and layout.",
        featuresArray: [
          { description: "Site assessment" },
          { description: "Custom system design" },
          { description: "Efficient water usage" },
          { description: "Post-installation support" }
        ],
        buttonText: "Design My System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Benefits of New Systems",
        description: "Enjoy a healthier lawn with modern sprinkler technology.",
        featuresArray: [
          { description: "Even water distribution" },
          { description: "Reduced water waste" },
          { description: "Smart controller options" },
          { description: "Long-term durability" }
        ],
        buttonText: "Upgrade Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Expert Installation Team",
        description: "Our Columbia team ensures a seamless installation experience.",
        featuresArray: [
          { description: "Trained professionals" },
          { description: "Quality materials" },
          { description: "Timely completion" },
          { description: "Warranty included" }
        ],
        buttonText: "Book Installation"
      }
    ],
    ServiceText: {
      title: "Lawn Sprinkler Installation in Columbia",
      description: "Install a state-of-the-art sprinkler system with Columbia’s leading lawn care experts.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "columbia-lawn-sprinkler-installation",
      locationSlug: "columbia",
      serviceSlug: "lawn-sprinkler-installation"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991900/Your-One-Stop-Sprinkler-Solution_u3ghig.jpg",
      finalCta: "Install a Sprinkler System Today",
      finalCtaDescription: "Enhance your Columbia lawn with our professional sprinkler installation services.",
      buttonText: "Start Installation"
    }
  },
  {
    id: "columbia-landscaping-services",
    slug: "columbia-landscaping-services",
    title: "Landscaping Services in Columbia",
    heroTitle: "Create Your Dream Outdoor Space in Columbia",
    heroSubtitle: "Transform your yard with expert landscaping services from Columbia professionals.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Custom Landscape Design",
        description: "Craft a unique outdoor environment tailored to your Columbia property.",
        featuresArray: [
          { description: "Personalized designs" },
          { description: "Plant selection" },
          { description: "Hardscape integration" },
          { description: "3D visualization" }
        ],
        buttonText: "Design My Landscape"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Full-Service Landscaping",
        description: "From planning to execution, we handle every aspect of your project.",
        featuresArray: [
          { description: "Site preparation" },
          { description: "Planting services" },
          { description: "Maintenance planning" },
          { description: "Final touch-ups" }
        ],
        buttonText: "Start Project"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Sustainable Options",
        description: "Eco-friendly landscaping solutions for a greener Columbia yard.",
        featuresArray: [
          { description: "Native plant use" },
          { description: "Water conservation" },
          { description: "Organic materials" },
          { description: "Long-term sustainability" }
        ],
        buttonText: "Go Green"
      }
    ],
    ServiceText: {
      title: "Landscaping Services in Columbia",
      description: "Transform your yard with expert landscaping services from Columbia professionals.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "columbia-landscaping-services",
      locationSlug: "columbia",
      serviceSlug: "landscaping-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Complete-Solutions-for-Stunning-Landscapes_amu5ss.jpg",
      finalCta: "Elevate Your Outdoor Living",
      finalCtaDescription: "Let our Columbia landscaping experts turn your vision into reality.",
      buttonText: "Transform My Yard"
    }
  },
  {
    id: "columbia-lawn-health",
    slug: "columbia-lawn-health",
    title: "Lawn Health in Columbia",
    heroTitle: "Revitalize Your Lawn’s Health in Columbia",
    heroSubtitle: "Boost your lawn’s vitality with expert health services in Columbia.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Lawn Health Assessment",
        description: "Diagnose and treat lawn issues with our comprehensive health check.",
        featuresArray: [
          { description: "Soil testing" },
          { description: "Grass analysis" },
          { description: "Pest inspection" },
          { description: "Health report" }
        ],
        buttonText: "Check My Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Restoration Treatments",
        description: "Restore your lawn with targeted treatments for optimal growth.",
        featuresArray: [
          { description: "Fertilization" },
          { description: "Weed control" },
          { description: "Disease treatment" },
          { description: "Hydration support" }
        ],
        buttonText: "Restore Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Ongoing Health Care",
        description: "Maintain a healthy lawn with our regular care plans.",
        featuresArray: [
          { description: "Monthly check-ups" },
          { description: "Seasonal treatments" },
          { description: "Preventive measures" },
          { description: "Expert advice" }
        ],
        buttonText: "Maintain Health"
      }
    ],
    ServiceText: {
      title: "Lawn Health in Columbia",
      description: "Boost your lawn’s vitality with expert health services in Columbia.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "columbia-lawn-health",
      locationSlug: "columbia",
      serviceSlug: "lawn-health"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
      finalCta: "Healthy Lawns Start Here",
      finalCtaDescription: "Trust Columbia’s experts to keep your lawn thriving and green.",
      buttonText: "Improve My Lawn"
    }
  },
  {
    id: "columbia-tree-services",
    slug: "columbia-tree-services",
    title: "Tree Services in Columbia",
    heroTitle: "Enhance Your Landscape with Tree Care in Columbia",
    heroSubtitle: "Professional tree services to beautify and maintain your Columbia property.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Tree Trimming & Pruning",
        description: "Keep your trees healthy and shaped with expert trimming services.",
        featuresArray: [
          { description: "Safety pruning" },
          { description: "Aesthetic shaping" },
          { description: "Dead branch removal" },
          { description: "Growth encouragement" }
        ],
        buttonText: "Trim My Trees"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Tree Removal",
        description: "Safely remove unwanted or hazardous trees from your property.",
        featuresArray: [
          { description: "Hazard assessment" },
          { description: "Safe removal" },
          { description: "Stump grinding" },
          { description: "Cleanup services" }
        ],
        buttonText: "Remove Trees"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Tree Health Care",
        description: "Protect and nourish your trees for long-term vitality.",
        featuresArray: [
          { description: "Disease treatment" },
          { description: "Pest control" },
          { description: "Fertilization" },
          { description: "Health monitoring" }
        ],
        buttonText: "Care for Trees"
      }
    ],
    ServiceText: {
      title: "Tree Services in Columbia",
      description: "Professional tree services to beautify and maintain your Columbia property.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "columbia-tree-services",
      locationSlug: "columbia",
      serviceSlug: "tree-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991754/4-2_is52jw.jpg",
      finalCta: "Perfect Trees for Your Yard",
      finalCtaDescription: "Let our Columbia tree experts enhance your landscape with top care.",
      buttonText: "Start Tree Care"
    }
  },
  {
    id: "columbia-landscaping-maintenance",
    slug: "columbia-landscaping-maintenance",
    title: "Landscaping Maintenance in Columbia",
    heroTitle: "Sustain Your Landscape’s Beauty in Columbia",
    heroSubtitle: "Ongoing maintenance to keep your Columbia yard in top shape.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Regular Maintenance",
        description: "Keep your landscape pristine with our routine care services.",
        featuresArray: [
          { description: "Lawn mowing" },
          { description: "Weed control" },
          { description: "Pruning services" },
          { description: "Debris removal" }
        ],
        buttonText: "Schedule Maintenance"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Seasonal Upkeep",
        description: "Prepare your yard for every season with expert care.",
        featuresArray: [
          { description: "Fall cleanup" },
          { description: "Spring preparation" },
          { description: "Winter protection" },
          { description: "Summer care" }
        ],
        buttonText: "Seasonal Plan"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Custom Maintenance Plans",
        description: "Tailored plans to meet your Columbia landscape’s needs.",
        featuresArray: [
          { description: "Personalized schedules" },
          { description: "Expert oversight" },
          { description: "Flexible adjustments" },
          { description: "Year-round support" }
        ],
        buttonText: "Create My Plan"
      }
    ],
    ServiceText: {
      title: "Landscaping Maintenance in Columbia",
      description: "Keep your landscape pristine with our routine care services.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "columbia-landscaping-maintenance",
      locationSlug: "columbia",
      serviceSlug: "landscaping-maintenance"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991642/What-Sets-Our-Landscaping-Apart-from-the-Rest_libm4l.jpg",
      finalCta: "Maintain Your Landscape’s Charm",
      finalCtaDescription: "Rely on Columbia’s best for consistent landscaping maintenance.",
      buttonText: "Maintain Now"
    }
  },
  {
    id: "columbia-shrub-care",
    slug: "columbia-shrub-care",
    title: "Shrub Care in Columbia",
    heroTitle: "Nurture Your Shrubs in Columbia",
    heroSubtitle: "Expert shrub care to enhance your Columbia landscape.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Shrub Pruning",
        description: "Shape and maintain your shrubs for a polished look.",
        featuresArray: [
          { description: "Seasonal pruning" },
          { description: "Deadwood removal" },
          { description: "Shape correction" },
          { description: "Growth control" }
        ],
        buttonText: "Prune My Shrubs"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Shrub Health Care",
        description: "Protect your shrubs from pests and diseases.",
        featuresArray: [
          { description: "Pest management" },
          { description: "Disease treatment" },
          { description: "Nutrient application" },
          { description: "Health monitoring" }
        ],
        buttonText: "Heal My Shrubs"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Shrub Installation",
        description: "Add new shrubs to enhance your Columbia yard.",
        featuresArray: [
          { description: "Site selection" },
          { description: "Planting services" },
          { description: "Soil preparation" },
          { description: "Post-plant care" }
        ],
        buttonText: "Install Shrubs"
      }
    ],
    ServiceText: {
      title: "Shrub Care in Columbia",
      description: "Expert shrub care to enhance your Columbia landscape.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "columbia-shrub-care",
      locationSlug: "columbia",
      serviceSlug: "shrub-care"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991778/5-4_iqydyj.jpg",
      finalCta: "Beautiful Shrubs for Your Yard",
      finalCtaDescription: "Let our Columbia team care for your shrubs with expertise.",
      buttonText: "Start Shrub Care"
    }
  },
  {
    id: "columbia-lawn-seeding",
    slug: "columbia-lawn-seeding",
    title: "Lawn Seeding in Columbia",
    heroTitle: "Grow a Lush Lawn with Seeding in Columbia",
    heroSubtitle: "Revitalize your lawn with professional seeding services in Columbia.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Overseeding Services",
        description: "Thicken your lawn with our overseeding techniques.",
        featuresArray: [
          { description: "Seed selection" },
          { description: "Even distribution" },
          { description: "Soil preparation" },
          { description: "Post-seeding care" }
        ],
        buttonText: "Overseed My Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "New Lawn Seeding",
        description: "Start fresh with a new lawn from scratch.",
        featuresArray: [
          { description: "Site clearing" },
          { description: "Soil enrichment" },
          { description: "Seed application" },
          { description: "Growth monitoring" }
        ],
        "buttonText": "New Lawn Start"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Seeding Benefits",
        description: "Enjoy a denser, healthier lawn with our seeding expertise.",
        featuresArray: [
          { description: "Improved density" },
          { description: "Weed resistance" },
          { description: "Enhanced color" },
          { description: "Long-term growth" }
        ],
        buttonText: "Seed My Lawn"
      }
    ],
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991732/3-3_h3mwot.jpg",
      finalCta: "Grow a Greener Lawn",
      finalCtaDescription: "Trust Columbia’s seeding experts for a thriving yard.",
      buttonText: "Begin Seeding"
    }
  },
  {
    id: "columbia-lawn-aeration",
    slug: "columbia-lawn-aeration",
    title: "Lawn Aeration in Columbia",
    heroTitle: "Breathe New Life into Your Lawn in Columbia",
    heroSubtitle: "Improve lawn health with professional aeration services in Columbia.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "Core Aeration",
        description: "Enhance root growth with our core aeration process.",
        featuresArray: [
          { description: "Soil penetration" },
          { description: "Air circulation" },
          { description: "Nutrient access" },
          { description: "Moisture retention" }
        ],
        buttonText: "Aerate My Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Benefits of Aeration",
        description: "Unlock your lawn’s potential with better health and growth.",
        featuresArray: [
          { description: "Stronger roots" },
          { description: "Reduced compaction" },
          { description: "Improved drainage" },
          { description: "Enhanced beauty" }
        ],
        buttonText: "Boost Growth"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991794/7-5_opmjoc.jpg",
        title: "Expert Aeration Team",
        description: "Rely on Columbia’s pros for top-tier aeration services.",
        featuresArray: [
          { description: "Certified technicians" },
          { description: "Modern equipment" },
          { description: "Timely service" },
          { description: "Follow-up care" }
        ],
        buttonText: "Hire Experts"
      }
    ],
    ServiceText: {
      title: "Lawn Aeration in Columbia",
      description: "Improve lawn health with professional aeration services in Columbia.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "columbia-lawn-aeration",
      locationSlug: "columbia",
      serviceSlug: "lawn-aeration"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991726/2-3_xk4men.jpg",
      finalCta: "Aerate for a Healthier Lawn",
      finalCtaDescription: "Let our Columbia team aerate your lawn for optimal health.",
      buttonText: "Start Aeration"
    }
  },
  {
    id: "columbia-lawn-mosquito-control",
    slug: "columbia-lawn-mosquito-control",
    title: "Lawn Mosquito Control in Columbia",
    heroTitle: "Enjoy a Mosquito-Free Yard in Columbia",
    heroSubtitle: "Protect your family with effective mosquito control in Columbia.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Mosquito Treatment",
        description: "Eliminate mosquitoes with our targeted treatment plans.",
        featuresArray: [
          { description: "Barrier spraying" },
          { description: "Larval control" },
          { description: "Safe chemicals" },
          { description: "Regular applications" }
        ],
        buttonText: "Treat Mosquitoes"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991794/7-5_opmjoc.jpg",
        title: "Prevention Strategies",
        description: "Keep mosquitoes away with proactive measures.",
        featuresArray: [
          { description: "Standing water removal" },
          { description: "Plant management" },
          { description: "Habitat reduction" },
          { description: "Seasonal planning" }
        ],
        buttonText: "Prevent Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991804/8-3_rdingb.jpg",
        title: "Safe Control Methods",
        description: "Enjoy peace of mind with eco-friendly mosquito control.",
        featuresArray: [
          { description: "Pet-safe treatments" },
          { description: "Family-friendly" },
          { description: "Certified applicators" },
          { description: "Effective results" }
        ],
        buttonText: "Control Safely"
      }
    ],
    ServiceText: {
      title: "Lawn Mosquito Control in Columbia",
      description: "Protect your family with effective mosquito control in Columbia.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "columbia-lawn-mosquito-control",
      locationSlug: "columbia",
      serviceSlug: "lawn-mosquito-control"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
      finalCta: "Reclaim Your Outdoor Space",
      finalCtaDescription: "Let Columbia’s mosquito control experts protect your yard.",
      buttonText: "Start Control"
    }
  },
  {
    id: "minnesota-lawn-care-services",
    slug: "minnesota-lawn-care-services",
    title: "Lawn Care Services in Minnesota",
    heroTitle: "Transform Your Yard into a Winter Oasis in Minnesota",
    heroSubtitle: "Fast, affordable lawn care and landscaping — all handled by local experts in Minnesota.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991819/Cancun-1-GT-scaled_ie7dhs.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991825/Cancun-2-GT-scaled_dtyjqf.jpg",
        title: "Winter Lawn Protection",
        description: "Maintain a healthy lawn during Minnesota winters with our expert care.",
        featuresArray: [
          { description: "Snow mold prevention" },
          { description: "Winter fertilization" },
          { description: "Cold weather grass care" },
          { description: "Soil insulation" }
        ],
        buttonText: "Start Winter Care"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
        title: "Spring Lawn Recovery",
        description: "Revive your lawn after winter with our specialized recovery services.",
        featuresArray: [
          { description: "Thatch removal" },
          { description: "Early seeding" },
          { description: "Soil aeration" },
          { description: "Nutrient boost" }
        ],
        buttonText: "Recover My Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Year-Round Maintenance",
        description: "Keep your Minnesota lawn thriving with consistent care.",
        featuresArray: [
          { description: "Seasonal treatments" },
          { description: "Weed control" },
          { description: "Pest management" },
          { description: "Regular mowing" }
        ],
        buttonText: "Maintain Year-Round"
      }
    ],
    ServiceText: {
      title: "Lawn Care Services in Minnesota",
      description: "Maintain a healthy lawn during Minnesota winters with our expert care.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "minnesota-lawn-care-services",
      locationSlug: "minnesota",
      serviceSlug: "lawn-care-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991642/What-Sets-Our-Landscaping-Apart-from-the-Rest_libm4l.jpg",
      finalCta: "Lets Make Your Lawn the Best in Minnesota",
      finalCtaDescription: "With expert care and eco-safe treatments, well help your lawn thrive all year long.",
      buttonText: "Refresh Your Lawn"
    }
  },
  {
    id: "minnesota-lawn-mowing",
    slug: "minnesota-lawn-mowing",
    title: "Lawn Mowing in Minnesota",
    heroTitle: "Keep Your Lawn Pristine with Mowing in Minnesota",
    heroSubtitle: "Reliable mowing services by local Minnesota experts to maintain your yard.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991825/Cancun-2-GT-scaled_dtyjqf.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
        title: "Seasonal Mowing Adjustments",
        description: "Tailored mowing for Minnesota’s changing seasons.",
        featuresArray: [
          { description: "Spring growth cuts" },
          { description: "Summer height management" },
          { description: "Fall cleanup mowing" },
          { description: "Winter prep trimming" }
        ],
        buttonText: "Schedule Mowing"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Precision Cutting",
        description: "Achieve a perfect lawn with our precise mowing techniques.",
        featuresArray: [
          { description: "Adjustable blade heights" },
          { description: "Edge trimming" },
          { description: "Grass clipping removal" },
          { description: "Even cuts" }
        ],
        buttonText: "Get Precision Cuts"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Eco-Friendly Mowing",
        description: "Sustainable mowing options for a greener Minnesota lawn.",
        featuresArray: [
          { description: "Electric mowers" },
          { description: "Reduced emissions" },
          { description: "Organic waste reuse" },
          { description: "Expert handling" }
        ],
        buttonText: "Go Green"
      }
    ],
    ServiceText: {
      title: "Lawn Mowing in Minnesota",
      description: "Tailored mowing for Minnesota’s changing seasons.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "minnesota-lawn-mowing",
      locationSlug: "minnesota",
      serviceSlug: "lawn-mowing"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
      finalCta: "Transform Your Lawn with Expert Mowing",
      finalCtaDescription: "Let our Minnesota mowing experts keep your lawn looking its best.",
      buttonText: "Book Your Mowing"
    }
  },
  {
    id: "minnesota-sprinkler-installation-repair",
    slug: "minnesota-sprinkler-installation-repair",
    title: "Sprinkler Installation & Repair in Minnesota",
    heroTitle: "Efficient Sprinkler Solutions for Your Minnesota Yard",
    heroSubtitle: "Expert sprinkler services by Minnesota professionals to keep your lawn hydrated.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Winterized Installation",
        description: "Install sprinklers designed for Minnesota’s harsh winters.",
        featuresArray: [
          { description: "Freeze-proof systems" },
          { description: "Custom layouts" },
          { description: "Efficient water use" },
          { description: "Professional setup" }
        ],
        buttonText: "Install Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Quick Repair Services",
        description: "Fix sprinkler issues fast with our Minnesota repair team.",
        featuresArray: [
          { description: "Leak repairs" },
          { description: "Head replacements" },
          { description: "Pressure fixes" },
          { description: "System diagnostics" }
        ],
        buttonText: "Repair My System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Seasonal Maintenance",
        description: "Keep your sprinklers ready for Minnesota’s seasons.",
        featuresArray: [
          { description: "Winterization" },
          { description: "Spring startup" },
          { description: "Summer checks" },
          { description: "Fall prep" }
        ],
        buttonText: "Maintain System"
      }
    ],
    ServiceText: {
      title: "Sprinkler Installation & Repair in Minnesota",
      description: "Install sprinklers designed for Minnesota’s harsh winters.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "minnesota-sprinkler-installation-repair",
      locationSlug: "minnesota",
      serviceSlug: "sprinkler-installation-repair"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991900/Your-One-Stop-Sprinkler-Solution_u3ghig.jpg",
      finalCta: "Keep Your Lawn Green with Sprinkler Care",
      finalCtaDescription: "Trust our Minnesota experts for top-tier sprinkler services.",
      buttonText: "Get Sprinkler Help"
    }
  },
  {
    id: "minnesota-lawn-sprinkler-installation",
    slug: "minnesota-lawn-sprinkler-installation",
    title: "Lawn Sprinkler Installation in Minnesota",
    heroTitle: "Perfect Watering with New Sprinklers in Minnesota",
    heroSubtitle: "Install advanced sprinkler systems with Minnesota’s top experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Custom Design",
        description: "Tailored sprinkler systems for your Minnesota lawn.",
        featuresArray: [
          { description: "Site evaluation" },
          { description: "Custom design" },
          { description: "Water efficiency" },
          { description: "Expert installation" }
        ],
        buttonText: "Design System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Winter-Ready Systems",
        description: "Install sprinklers built for Minnesota’s cold climate.",
        featuresArray: [
          { description: "Freeze protection" },
          { description: "Durable materials" },
          { description: "Smart controls" },
          { description: "Longevity" }
        ],
        buttonText: "Install Winter System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Professional Team",
        description: "Rely on Minnesota’s best for seamless installation.",
        featuresArray: [
          { description: "Certified installers" },
          { description: "Quality equipment" },
          { description: "Timely service" },
          { description: "Warranty support" }
        ],
        buttonText: "Hire Team"
      }
    ],
    ServiceText: {
      title: "Lawn Sprinkler Installation in Minnesota",
      description: "Tailored sprinkler systems for your Minnesota lawn.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "minnesota-lawn-sprinkler-installation",
      locationSlug: "minnesota",
      serviceSlug: "lawn-sprinkler-installation"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991900/Your-One-Stop-Sprinkler-Solution_u3ghig.jpg",
      finalCta: "Install a Sprinkler System Today",
      finalCtaDescription: "Enhance your Minnesota lawn with professional installation.",
      buttonText: "Start Installation"
    }
  },
  {
    id: "minnesota-landscaping-services",
    slug: "minnesota-landscaping-services",
    title: "Landscaping Services in Minnesota",
    heroTitle: "Create Your Dream Yard in Minnesota",
    heroSubtitle: "Transform your outdoor space with Minnesota landscaping experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Custom Landscapes",
        description: "Design a unique yard tailored to Minnesota’s climate.",
        featuresArray: [
          { description: "Personalized plans" },
          { description: "Plant selection" },
          { description: "Hardscape design" },
          { description: "3D previews" }
        ],
        buttonText: "Design My Yard"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Full Project Management",
        description: "Handle every step of your landscaping project.",
        featuresArray: [
          { description: "Site prep" },
          { description: "Planting" },
          { description: "Construction" },
          { description: "Final cleanup" }
        ],
        buttonText: "Manage Project"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Cold-Climate Solutions",
        description: "Eco-friendly landscaping for Minnesota’s weather.",
        featuresArray: [
          { description: "Native plants" },
          { description: "Snow management" },
          { description: "Insulation techniques" },
          { description: "Sustainable design" }
        ],
        buttonText: "Go Eco-Friendly"
      }
    ],
    ServiceText: {
      title: "Landscaping Services in Minnesota",
      description: "Design a unique yard tailored to Minnesota’s climate.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "minnesota-landscaping-services",
      locationSlug: "minnesota",
      serviceSlug: "landscaping-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Complete-Solutions-for-Stunning-Landscapes_amu5ss.jpg",
      finalCta: "Elevate Your Outdoor Living",
      finalCtaDescription: "Let our Minnesota experts turn your vision into reality.",
      buttonText: "Transform My Yard"
    }
  },
  {
    id: "minnesota-lawn-health",
    slug: "minnesota-lawn-health",
    title: "Lawn Health in Minnesota",
    heroTitle: "Revitalize Your Lawn in Minnesota",
    heroSubtitle: "Boost your lawn’s vitality with expert care in Minnesota.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Winter Health Check",
        description: "Assess and protect your lawn during Minnesota winters.",
        featuresArray: [
          { description: "Soil testing" },
          { description: "Frost damage check" },
          { description: "Nutrient analysis" },
          { description: "Health report" }
        ],
        buttonText: "Check Health"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Recovery Treatments",
        description: "Restore your lawn with specialized Minnesota care.",
        featuresArray: [
          { description: "Spring fertilization" },
          { description: "Weed control" },
          { description: "Disease treatment" },
          { description: "Moisture management" }
        ],
        buttonText: "Restore Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Ongoing Care",
        description: "Maintain lawn health with regular Minnesota services.",
        featuresArray: [
          { description: "Monthly visits" },
          { description: "Seasonal treatments" },
          { description: "Pest prevention" },
          { description: "Expert tips" }
        ],
        buttonText: "Maintain Care"
      }
    ],
    ServiceText: {
      title: "Lawn Health in Minnesota",
      description: "Assess and protect your lawn during Minnesota winters.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "minnesota-lawn-health",
      locationSlug: "minnesota",
      serviceSlug: "lawn-health"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
      finalCta: "Healthy Lawns Start Here",
      finalCtaDescription: "Trust Minnesota’s experts to keep your lawn thriving.",
      buttonText: "Improve My Lawn"
    }
  },
  {
    id: "minnesota-tree-services",
    slug: "minnesota-tree-services",
    title: "Tree Services in Minnesota",
    heroTitle: "Enhance Your Trees in Minnesota",
    heroSubtitle: "Professional tree care to beautify your Minnesota property.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Winter Pruning",
        description: "Protect and shape trees during Minnesota winters.",
        featuresArray: [
          { description: "Snow load pruning" },
          { description: "Dead branch removal" },
          { description: "Shape maintenance" },
          { description: "Growth support" }
        ],
        buttonText: "Prune Trees"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Tree Removal",
        description: "Safely remove hazardous trees in Minnesota.",
        featuresArray: [
          { description: "Risk assessment" },
          { description: "Safe removal" },
          { description: "Stump grinding" },
          { description: "Site cleanup" }
        ],
        buttonText: "Remove Trees"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Tree Health",
        description: "Nourish and protect your trees for Minnesota’s climate.",
        featuresArray: [
          { description: "Disease control" },
          { description: "Pest management" },
          { description: "Fertilization" },
          { description: "Health monitoring" }
        ],
        buttonText: "Care for Trees"
      }
    ],
    ServiceText: {
      title: "Tree Services in Minnesota",
      description: "Protect and shape trees during Minnesota winters.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "minnesota-tree-services",
      locationSlug: "minnesota",
      serviceSlug: "tree-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991754/4-2_is52jw.jpg",
      finalCta: "Perfect Trees for Your Yard",
      finalCtaDescription: "Let our Minnesota tree experts enhance your landscape.",
      buttonText: "Start Tree Care"
    }
  },
  {
    id: "minnesota-landscaping-maintenance",
    slug: "minnesota-landscaping-maintenance",
    title: "Landscaping Maintenance in Minnesota",
    heroTitle: "Sustain Your Landscape in Minnesota",
    heroSubtitle: "Ongoing care to keep your Minnesota yard pristine.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Winter Maintenance",
        description: "Prepare and maintain your yard for Minnesota winters.",
        featuresArray: [
          { description: "Snow removal" },
          { description: "Ice management" },
          { description: "Plant protection" },
          { description: "Debris clearing" }
        ],
        buttonText: "Winter Plan"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Seasonal Upkeep",
        description: "Adapt maintenance for Minnesota’s seasons.",
        featuresArray: [
          { description: "Spring cleanup" },
          { description: "Summer trimming" },
          { description: "Fall prep" },
          { description: "Winter care" }
        ],
        buttonText: "Seasonal Care"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Custom Plans",
        description: "Tailored maintenance for your Minnesota landscape.",
        featuresArray: [
          { description: "Personalized schedules" },
          { description: "Expert supervision" },
          { description: "Flexible adjustments" },
          { description: "Year-round support" }
        ],
        buttonText: "Create Plan"
      }
    ],
    ServiceText: {
      title: "Landscaping Maintenance in Minnesota",
      description: "Prepare and maintain your yard for Minnesota winters.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "minnesota-landscaping-maintenance",
      locationSlug: "minnesota",
      serviceSlug: "landscaping-maintenance"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991642/What-Sets-Our-Landscaping-Apart-from-the-Rest_libm4l.jpg",
      finalCta: "Maintain Your Landscapes Charm",
      finalCtaDescription: "Rely on Minnesota’s best for consistent care.",
      buttonText: "Maintain Now"
    }
  },
  {
    id: "minnesota-shrub-care",
    slug: "minnesota-shrub-care",
    title: "Shrub Care in Minnesota",
    heroTitle: "Nurture Your Shrubs in Minnesota",
    heroSubtitle: "Expert shrub care to enhance your Minnesota landscape.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Winter Pruning",
        description: "Protect shrubs from Minnesota’s cold with expert pruning.",
        featuresArray: [
          { description: "Snow protection" },
          { description: "Deadwood removal" },
          { description: "Shape maintenance" },
          { description: "Growth support" }
        ],
        buttonText: "Prune Shrubs"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Health Treatments",
        description: "Keep shrubs healthy with Minnesota-specific care.",
        featuresArray: [
          { description: "Pest control" },
          { description: "Disease prevention" },
          { description: "Nutrient feeding" },
          { description: "Health checks" }
        ],
        buttonText: "Treat Shrubs"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "New Installations",
        description: "Add vibrant shrubs to your Minnesota yard.",
        featuresArray: [
          { description: "Site selection" },
          { description: "Planting" },
          { description: "Soil prep" },
          { description: "Initial care" }
        ],
        buttonText: "Install Shrubs"
      }
    ],
    ServiceText: {
      title: "Shrub Care in Minnesota",
      description: "Protect shrubs from Minnesota’s cold with expert pruning.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "minnesota-shrub-care",
      locationSlug: "minnesota",
      serviceSlug: "shrub-care"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991778/5-4_iqydyj.jpg",
      finalCta: "Beautiful Shrubs for Your Yard",
      finalCtaDescription: "Let our Minnesota team care for your shrubs.",
      buttonText: "Start Shrub Care"
    }
  },
  {
    id: "minnesota-lawn-seeding",
    slug: "minnesota-lawn-seeding",
    title: "Lawn Seeding in Minnesota",
    heroTitle: "Grow a Lush Lawn in Minnesota",
    heroSubtitle: "Revitalize your lawn with expert seeding in Minnesota.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Spring Overseeding",
        description: "Thicken your lawn with Minnesota-friendly seeding.",
        featuresArray: [
          { description: "Cold-resistant seeds" },
          { description: "Even spread" },
          { description: "Soil prep" },
          { description: "Post-care" }
        ],
        buttonText: "Overseed Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "New Lawn Seeding",
        description: "Start a fresh lawn in Minnesota’s climate.",
        featuresArray: [
          { description: "Site clearing" },
          { description: "Soil enrichment" },
          { description: "Seed application" },
          { description: "Growth tracking" }
        ],
        buttonText: "New Lawn Start"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Seeding Benefits",
        description: "Enjoy a denser lawn with Minnesota expertise.",
        featuresArray: [
          { description: "Improved density" },
          { description: "Weed resistance" },
          { description: "Rich color" },
          { description: "Long-term growth" }
        ],
        buttonText: "Seed My Lawn"
      }
    ],
    ServiceText: {
      title: "Lawn Seeding in Minnesota",
      description: "Thicken your lawn with Minnesota-friendly seeding.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "minnesota-lawn-seeding",
      locationSlug: "minnesota",
      serviceSlug: "lawn-seeding"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991732/3-3_h3mwot.jpg",
      finalCta: "Grow a Greener Lawn",
      finalCtaDescription: "Trust Minnesota’s seeding experts for a thriving yard.",
      buttonText: "Begin Seeding"
    }
  },
  {
    id: "minnesota-lawn-aeration",
    slug: "minnesota-lawn-aeration",
    title: "Lawn Aeration in Minnesota",
    heroTitle: "Breathe Life into Your Lawn in Minnesota",
    heroSubtitle: "Improve lawn health with aeration services in Minnesota.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "Core Aeration",
        description: "Enhance root growth in Minnesota’s soil.",
        featuresArray: [
          { description: "Soil loosening" },
          { description: "Air access" },
          { description: "Nutrient flow" },
          { description: "Water retention" }
        ],
        buttonText: "Aerate My Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Benefits of Aeration",
        description: "Boost your lawn’s health with aeration.",
        featuresArray: [
          { description: "Stronger roots" },
          { description: "Reduced compaction" },
          { description: "Better drainage" },
          { description: "Enhanced growth" }
        ],
        buttonText: "Boost Health"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991794/7-5_opmjoc.jpg",
        title: "Expert Service",
        description: "Trust Minnesota’s pros for top aeration.",
        featuresArray: [
          { description: "Certified team" },
          { description: "Modern tools" },
          { description: "Timely work" },
          { description: "Follow-up care" }
        ],
        buttonText: "Hire Experts"
      }
    ],
    ServiceText: {
      title: "Lawn Aeration in Minnesota",
      description: "Enhance root growth in Minnesota’s soil.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "minnesota-lawn-aeration",
      locationSlug: "minnesota",
      serviceSlug: "lawn-aeration"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991726/2-3_xk4men.jpg",
      finalCta: "Aerate for a Healthier Lawn",
      finalCtaDescription: "Let our Minnesota team aerate your lawn.",
      buttonText: "Start Aeration"
    }
  },
  {
    id: "minnesota-lawn-mosquito-control",
    slug: "minnesota-lawn-mosquito-control",
    title: "Lawn Mosquito Control in Minnesota",
    heroTitle: "Enjoy a Mosquito-Free Yard in Minnesota",
    heroSubtitle: "Protect your family with effective mosquito control in Minnesota.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Mosquito Treatment",
        description: "Eliminate mosquitoes with targeted plans for Minnesota.",
        featuresArray: [
          { description: "Barrier spraying" },
          { description: "Larval control" },
          { description: "Safe chemicals" },
          { description: "Regular applications" }
        ],
        buttonText: "Treat Mosquitoes"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991794/7-5_opmjoc.jpg",
        title: "Prevention Strategies",
        description: "Keep mosquitoes away with proactive Minnesota measures.",
        featuresArray: [
          { description: "Standing water removal" },
          { description: "Plant management" },
          { description: "Habitat reduction" },
          { description: "Seasonal planning" }
        ],
        buttonText: "Prevent Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991804/8-3_rdingb.jpg",
        title: "Safe Control Methods",
        description: "Enjoy peace of mind with eco-friendly control in Minnesota.",
        featuresArray: [
          { description: "Pet-safe treatments" },
          { description: "Family-friendly" },
          { description: "Certified applicators" },
          { description: "Effective results" }
        ],
        buttonText: "Control Safely"
      }
    ],
    ServiceText: {
      title: "Lawn Mosquito Control in Minnesota",
      description: "Eliminate mosquitoes with targeted plans for Minnesota.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "minnesota-lawn-mosquito-control",
      locationSlug: "minnesota",
      serviceSlug: "lawn-mosquito-control"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
      finalCta: "Reclaim Your Outdoor Space",
      finalCtaDescription: "Let Minnesota’s mosquito control experts protect your yard.",
      buttonText: "Start Control"
    }
  },
  {
    id: "wisconsin-lawn-care-services",
    slug: "wisconsin-lawn-care-services",
    title: "Lawn Care Services in Wisconsin",
    heroTitle: "Transform Your Yard into a Winter Haven in Wisconsin",
    heroSubtitle: "Fast, affordable lawn care and landscaping — all managed by local Wisconsin experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991819/Cancun-1-GT-scaled_ie7dhs.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991825/Cancun-2-GT-scaled_dtyjqf.jpg",
        title: "Winter Lawn Protection",
        description: "Maintain a healthy lawn during Wisconsin winters with our expert care.",
        featuresArray: [
          { description: "Snow mold prevention" },
          { description: "Winter fertilization" },
          { description: "Cold weather grass care" },
          { description: "Soil insulation" }
        ],
        buttonText: "Start Winter Care"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
        title: "Spring Lawn Recovery",
        description: "Revive your lawn after winter with our specialized recovery services.",
        featuresArray: [
          { description: "Thatch removal" },
          { description: "Early seeding" },
          { description: "Soil aeration" },
          { description: "Nutrient boost" }
        ],
        buttonText: "Recover My Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Year-Round Maintenance",
        description: "Keep your Wisconsin lawn thriving with consistent care.",
        featuresArray: [
          { description: "Seasonal treatments" },
          { description: "Weed control" },
          { description: "Pest management" },
          { description: "Regular mowing" }
        ],
        buttonText: "Maintain Year-Round"
      }
    ],
    ServiceText: {
      title: "Lawn Care Services in Wisconsin",
      description: "Maintain a healthy lawn during Wisconsin winters with our expert care.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "wisconsin-lawn-care-services",
      locationSlug: "wisconsin",
      serviceSlug: "lawn-care-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991642/What-Sets-Our-Landscaping-Apart-from-the-Rest_libm4l.jpg",
      finalCta: "Lets Make Your Lawn the Best in Wisconsin",
      finalCtaDescription: "With expert care and eco-safe treatments, well help your lawn thrive all year long.",
      buttonText: "Refresh Your Lawn"
    }
  },
  {
    id: "wisconsin-lawn-mowing",
    slug: "wisconsin-lawn-mowing",
    title: "Lawn Mowing in Wisconsin",
    heroTitle: "Keep Your Lawn Pristine with Mowing in Wisconsin",
    heroSubtitle: "Reliable mowing services by local Wisconsin experts to maintain your yard.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991825/Cancun-2-GT-scaled_dtyjqf.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
        title: "Seasonal Mowing Adjustments",
        description: "Tailored mowing for Wisconsin’s changing seasons.",
        featuresArray: [
          { description: "Spring growth cuts" },
          { description: "Summer height management" },
          { description: "Fall cleanup mowing" },
          { description: "Winter prep trimming" }
        ],
        buttonText: "Schedule Mowing"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Precision Cutting",
        description: "Achieve a perfect lawn with our precise mowing techniques.",
        featuresArray: [
          { description: "Adjustable blade heights" },
          { description: "Edge trimming" },
          { description: "Grass clipping removal" },
          { description: "Even cuts" }
        ],
        buttonText: "Get Precision Cuts"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Eco-Friendly Mowing",
        description: "Sustainable mowing options for a greener Wisconsin lawn.",
        featuresArray: [
          { description: "Electric mowers" },
          { description: "Reduced emissions" },
          { description: "Organic waste reuse" },
          { description: "Expert handling" }
        ],
        buttonText: "Go Green"
      }
    ],
    ServiceText: {
      title: "Lawn Mowing in Wisconsin",
      description: "Tailored mowing for Wisconsin’s changing seasons.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "wisconsin-lawn-mowing",
      locationSlug: "wisconsin",
      serviceSlug: "lawn-mowing"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
      finalCta: "Transform Your Lawn with Expert Mowing",
      finalCtaDescription: "Let our Wisconsin mowing experts keep your lawn looking its best.",
      buttonText: "Book Your Mowing"
    }
  },
  {
    id: "wisconsin-sprinkler-installation-repair",
    slug: "wisconsin-sprinkler-installation-repair",
    title: "Sprinkler Installation & Repair in Wisconsin",
    heroTitle: "Efficient Sprinkler Solutions for Your Wisconsin Yard",
    heroSubtitle: "Expert sprinkler services by Wisconsin professionals to keep your lawn hydrated.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Winterized Installation",
        description: "Install sprinklers designed for Wisconsin’s harsh winters.",
        featuresArray: [
          { description: "Freeze-proof systems" },
          { description: "Custom layouts" },
          { description: "Efficient water use" },
          { description: "Professional setup" }
        ],
        buttonText: "Install Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Quick Repair Services",
        description: "Fix sprinkler issues fast with our Wisconsin repair team.",
        featuresArray: [
          { description: "Leak repairs" },
          { description: "Head replacements" },
          { description: "Pressure fixes" },
          { description: "System diagnostics" }
        ],
        buttonText: "Repair My System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Seasonal Maintenance",
        description: "Keep your sprinklers ready for Wisconsin’s seasons.",
        featuresArray: [
          { description: "Winterization" },
          { description: "Spring startup" },
          { description: "Summer checks" },
          { description: "Fall prep" }
        ],
        buttonText: "Maintain System"
      }
    ],
    ServiceText: {
      title: "Sprinkler Installation & Repair in Wisconsin",
      description: "Install sprinklers designed for Wisconsin’s harsh winters.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "wisconsin-sprinkler-installation-repair",
      locationSlug: "wisconsin",
      serviceSlug: "sprinkler-installation-repair"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991900/Your-One-Stop-Sprinkler-Solution_u3ghig.jpg",
      finalCta: "Keep Your Lawn Green with Sprinkler Care",
      finalCtaDescription: "Trust our Wisconsin experts for top-tier sprinkler services.",
      buttonText: "Get Sprinkler Help"
    }
  },
  {
    id: "wisconsin-lawn-sprinkler-installation",
    slug: "wisconsin-lawn-sprinkler-installation",
    title: "Lawn Sprinkler Installation in Wisconsin",
    heroTitle: "Perfect Watering with New Sprinklers in Wisconsin",
    heroSubtitle: "Install advanced sprinkler systems with Wisconsin’s top experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Custom Design",
        description: "Tailored sprinkler systems for your Wisconsin lawn.",
        featuresArray: [
          { description: "Site evaluation" },
          { description: "Custom design" },
          { description: "Water efficiency" },
          { description: "Expert installation" }
        ],
        buttonText: "Design System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Winter-Ready Systems",
        description: "Install sprinklers built for Wisconsin’s cold climate.",
        featuresArray: [
          { description: "Freeze protection" },
          { description: "Durable materials" },
          { description: "Smart controls" },
          { description: "Longevity" }
        ],
        buttonText: "Install Winter System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Professional Team",
        description: "Rely on Wisconsin’s best for seamless installation.",
        featuresArray: [
          { description: "Certified installers" },
          { description: "Quality equipment" },
          { description: "Timely service" },
          { description: "Warranty support" }
        ],
        buttonText: "Hire Team"
      }
    ],
    ServiceText: {
      title: "Lawn Sprinkler Installation in Wisconsin",
      description: "Tailored sprinkler systems for your Wisconsin lawn.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "wisconsin-lawn-sprinkler-installation",
      locationSlug: "wisconsin",
      serviceSlug: "lawn-sprinkler-installation"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991900/Your-One-Stop-Sprinkler-Solution_u3ghig.jpg",
      finalCta: "Install a Sprinkler System Today",
      finalCtaDescription: "Enhance your Wisconsin lawn with professional installation.",
      buttonText: "Start Installation"
    }
  },
  {
    id: "wisconsin-landscaping-services",
    slug: "wisconsin-landscaping-services",
    title: "Landscaping Services in Wisconsin",
    heroTitle: "Create Your Dream Yard in Wisconsin",
    heroSubtitle: "Transform your outdoor space with Wisconsin landscaping experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Custom Landscapes",
        description: "Design a unique yard tailored to Wisconsin’s climate.",
        featuresArray: [
          { description: "Personalized plans" },
          { description: "Plant selection" },
          { description: "Hardscape design" },
          { description: "3D previews" }
        ],
        buttonText: "Design My Yard"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Full Project Management",
        description: "Handle every step of your landscaping project.",
        featuresArray: [
          { description: "Site prep" },
          { description: "Planting" },
          { description: "Construction" },
          { description: "Final cleanup" }
        ],
        buttonText: "Manage Project"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Cold-Climate Solutions",
        description: "Eco-friendly landscaping for Wisconsin’s weather.",
        featuresArray: [
          { description: "Native plants" },
          { description: "Snow management" },
          { description: "Insulation techniques" },
          { description: "Sustainable design" }
        ],
        buttonText: "Go Eco-Friendly"
      }
    ],
    ServiceText: {
      title: "Landscaping Services in Wisconsin",
      description: "Design a unique yard tailored to Wisconsin’s climate.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "wisconsin-landscaping-services",
      locationSlug: "wisconsin",
      serviceSlug: "landscaping-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Complete-Solutions-for-Stunning-Landscapes_amu5ss.jpg",
      finalCta: "Elevate Your Outdoor Living",
      finalCtaDescription: "Let our Wisconsin experts turn your vision into reality.",
      buttonText: "Transform My Yard"
    }
  },
  {
    id: "wisconsin-lawn-health",
    slug: "wisconsin-lawn-health",
    title: "Lawn Health in Wisconsin",
    heroTitle: "Revitalize Your Lawn in Wisconsin",
    heroSubtitle: "Boost your lawn’s vitality with expert care in Wisconsin.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Winter Health Check",
        description: "Assess and protect your lawn during Wisconsin winters.",
        featuresArray: [
          { description: "Soil testing" },
          { description: "Frost damage check" },
          { description: "Nutrient analysis" },
          { description: "Health report" }
        ],
        buttonText: "Check Health"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Recovery Treatments",
        description: "Restore your lawn with specialized Wisconsin care.",
        featuresArray: [
          { description: "Spring fertilization" },
          { description: "Weed control" },
          { description: "Disease treatment" },
          { description: "Moisture management" }
        ],
        buttonText: "Restore Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Ongoing Care",
        description: "Maintain lawn health with regular Wisconsin services.",
        featuresArray: [
          { description: "Monthly visits" },
          { description: "Seasonal treatments" },
          { description: "Pest prevention" },
          { description: "Expert tips" }
        ],
        buttonText: "Maintain Care"
      }
    ],
    ServiceText: {
      title: "Lawn Health in Wisconsin",
      description: "Assess and protect your lawn during Wisconsin winters.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "wisconsin-lawn-health",
      locationSlug: "wisconsin",
      serviceSlug: "lawn-health"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
      finalCta: "Healthy Lawns Start Here",
      finalCtaDescription: "Trust Wisconsin’s experts to keep your lawn thriving.",
      buttonText: "Improve My Lawn"
    }
  },
  {
    id: "wisconsin-tree-services",
    slug: "wisconsin-tree-services",
    title: "Tree Services in Wisconsin",
    heroTitle: "Enhance Your Trees in Wisconsin",
    heroSubtitle: "Professional tree care to beautify your Wisconsin property.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Winter Pruning",
        description: "Protect and shape trees during Wisconsin winters.",
        featuresArray: [
          { description: "Snow load pruning" },
          { description: "Dead branch removal" },
          { description: "Shape maintenance" },
          { description: "Growth support" }
        ],
        buttonText: "Prune Trees"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Tree Removal",
        description: "Safely remove hazardous trees in Wisconsin.",
        featuresArray: [
          { description: "Risk assessment" },
          { description: "Safe removal" },
          { description: "Stump grinding" },
          { description: "Site cleanup" }
        ],
        buttonText: "Remove Trees"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Tree Health",
        description: "Nourish and protect your trees for Wisconsin’s climate.",
        featuresArray: [
          { description: "Disease control" },
          { description: "Pest management" },
          { description: "Fertilization" },
          { description: "Health monitoring" }
        ],
        buttonText: "Care for Trees"
      }
    ],
    ServiceText: {
      title: "Tree Services in Wisconsin",
      description: "Protect and shape trees during Wisconsin winters.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "wisconsin-tree-services",
      locationSlug: "wisconsin",
      serviceSlug: "tree-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991754/4-2_is52jw.jpg",
      finalCta: "Perfect Trees for Your Yard",
      finalCtaDescription: "Let our Wisconsin tree experts enhance your landscape.",
      buttonText: "Start Tree Care"
    }
  },
  {
    id: "wisconsin-landscaping-maintenance",
    slug: "wisconsin-landscaping-maintenance",
    title: "Landscaping Maintenance in Wisconsin",
    heroTitle: "Sustain Your Landscape in Wisconsin",
    heroSubtitle: "Ongoing care to keep your Wisconsin yard pristine.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Winter Maintenance",
        description: "Prepare and maintain your yard for Wisconsin winters.",
        featuresArray: [
          { description: "Snow removal" },
          { description: "Ice management" },
          { description: "Plant protection" },
          { description: "Debris clearing" }
        ],
        buttonText: "Winter Plan"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Seasonal Upkeep",
        description: "Adapt maintenance for Wisconsin’s seasons.",
        featuresArray: [
          { description: "Spring cleanup" },
          { description: "Summer trimming" },
          { description: "Fall prep" },
          { description: "Winter care" }
        ],
        buttonText: "Seasonal Care"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Custom Plans",
        description: "Tailored maintenance for your Wisconsin landscape.",
        featuresArray: [
          { description: "Personalized schedules" },
          { description: "Expert supervision" },
          { description: "Flexible adjustments" },
          { description: "Year-round support" }
        ],
        buttonText: "Create Plan"
      }
    ],
    ServiceText: {
      title: "Landscaping Maintenance in Wisconsin",
      description: "Prepare and maintain your yard for Wisconsin winters.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "wisconsin-landscaping-maintenance",
      locationSlug: "wisconsin",
      serviceSlug: "landscaping-maintenance"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991642/What-Sets-Our-Landscaping-Apart-from-the-Rest_libm4l.jpg",
      finalCta: "Maintain Your Landscapes Charm",
      finalCtaDescription: "Rely on Wisconsin’s best for consistent care.",
      buttonText: "Maintain Now"
    }
  },
  {
    id: "wisconsin-shrub-care",
    slug: "wisconsin-shrub-care",
    title: "Shrub Care in Wisconsin",
    heroTitle: "Nurture Your Shrubs in Wisconsin",
    heroSubtitle: "Expert shrub care to enhance your Wisconsin landscape.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Winter Pruning",
        description: "Protect shrubs from Wisconsin’s cold with expert pruning.",
        featuresArray: [
          { description: "Snow protection" },
          { description: "Deadwood removal" },
          { description: "Shape maintenance" },
          { description: "Growth support" }
        ],
        buttonText: "Prune Shrubs"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Health Treatments",
        description: "Keep shrubs healthy with Wisconsin-specific care.",
        featuresArray: [
          { description: "Pest control" },
          { description: "Disease prevention" },
          { description: "Nutrient feeding" },
          { description: "Health checks" }
        ],
        buttonText: "Treat Shrubs"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "New Installations",
        description: "Add vibrant shrubs to your Wisconsin yard.",
        featuresArray: [
          { description: "Site selection" },
          { description: "Planting" },
          { description: "Soil prep" },
          { description: "Initial care" }
        ],
        buttonText: "Install Shrubs"
      }
    ],
    ServiceText: {
      title: "Shrub Care in Wisconsin",
      description: "Protect shrubs from Wisconsin’s cold with expert pruning.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "wisconsin-shrub-care",
      locationSlug: "wisconsin",
      serviceSlug: "shrub-care"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991778/5-4_iqydyj.jpg",
      finalCta: "Beautiful Shrubs for Your Yard",
      finalCtaDescription: "Let our Wisconsin team care for your shrubs.",
      buttonText: "Start Shrub Care"
    }
  },
  {
    id: "wisconsin-lawn-seeding",
    slug: "wisconsin-lawn-seeding",
    title: "Lawn Seeding in Wisconsin",
    heroTitle: "Grow a Lush Lawn in Wisconsin",
    heroSubtitle: "Revitalize your lawn with expert seeding in Wisconsin.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Spring Overseeding",
        description: "Thicken your lawn with Wisconsin-friendly seeding.",
        featuresArray: [
          { description: "Cold-resistant seeds" },
          { description: "Even spread" },
          { description: "Soil prep" },
          { description: "Post-care" }
        ],
        buttonText: "Overseed Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "New Lawn Seeding",
        description: "Start a fresh lawn in Wisconsin’s climate.",
        featuresArray: [
          { description: "Site clearing" },
          { description: "Soil enrichment" },
          { description: "Seed application" },
          { description: "Growth tracking" }
        ],
        buttonText: "New Lawn Start"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Seeding Benefits",
        description: "Enjoy a denser lawn with Wisconsin expertise.",
        featuresArray: [
          { description: "Improved density" },
          { description: "Weed resistance" },
          { description: "Rich color" },
          { description: "Long-term growth" }
        ],
        buttonText: "Seed My Lawn"
      }
    ],
    ServiceText: {
      title: "Lawn Seeding in Wisconsin",
      description: "Thicken your lawn with Wisconsin-friendly seeding.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "wisconsin-lawn-seeding",
      locationSlug: "wisconsin",
      serviceSlug: "lawn-seeding"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991732/3-3_h3mwot.jpg",
      finalCta: "Grow a Greener Lawn",
      finalCtaDescription: "Trust Wisconsin’s seeding experts for a thriving yard.",
      buttonText: "Begin Seeding"
    }
  },
  {
    id: "wisconsin-lawn-aeration",
    slug: "wisconsin-lawn-aeration",
    title: "Lawn Aeration in Wisconsin",
    heroTitle: "Breathe Life into Your Lawn in Wisconsin",
    heroSubtitle: "Improve lawn health with aeration services in Wisconsin.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "Core Aeration",
        description: "Enhance root growth in Wisconsin’s soil.",
        featuresArray: [
          { description: "Soil loosening" },
          { description: "Air access" },
          { description: "Nutrient flow" },
          { description: "Water retention" }
        ],
        buttonText: "Aerate My Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Benefits of Aeration",
        description: "Boost your lawn’s health with aeration.",
        featuresArray: [
          { description: "Stronger roots" },
          { description: "Reduced compaction" },
          { description: "Better drainage" },
          { description: "Enhanced growth" }
        ],
        buttonText: "Boost Health"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991794/7-5_opmjoc.jpg",
        title: "Expert Service",
        description: "Trust Wisconsin’s pros for top aeration.",
        featuresArray: [
          { description: "Certified team" },
          { description: "Modern tools" },
          { description: "Timely work" },
          { description: "Follow-up care" }
        ],
        buttonText: "Hire Experts"
      }
    ],
    ServiceText: {
      title: "Lawn Aeration in Wisconsin",
      description: "Enhance root growth in Wisconsin’s soil.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "wisconsin-lawn-aeration",
      locationSlug: "wisconsin",
      serviceSlug: "lawn-aeration"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991726/2-3_xk4men.jpg",
      finalCta: "Aerate for a Healthier Lawn",
      finalCtaDescription: "Let our Wisconsin team aerate your lawn.",
      buttonText: "Start Aeration"
    }
  },
  {
    id: "wisconsin-lawn-mosquito-control",
    slug: "wisconsin-lawn-mosquito-control",
    title: "Lawn Mosquito Control in Wisconsin",
    heroTitle: "Enjoy a Mosquito-Free Yard in Wisconsin",
    heroSubtitle: "Protect your family with effective mosquito control in Wisconsin.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Mosquito Treatment",
        description: "Eliminate mosquitoes with targeted plans for Wisconsin.",
        featuresArray: [
          { description: "Barrier spraying" },
          { description: "Larval control" },
          { description: "Safe chemicals" },
          { description: "Regular applications" }
        ],
        buttonText: "Treat Mosquitoes"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991794/7-5_opmjoc.jpg",
        title: "Prevention Strategies",
        description: "Keep mosquitoes away with proactive Wisconsin measures.",
        featuresArray: [
          { description: "Standing water removal" },
          { description: "Plant management" },
          { description: "Habitat reduction" },
          { description: "Seasonal planning" }
        ],
        buttonText: "Prevent Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991804/8-3_rdingb.jpg",
        title: "Safe Control Methods",
        description: "Enjoy peace of mind with eco-friendly control in Wisconsin.",
        featuresArray: [
          { description: "Pet-safe treatments" },
          { description: "Family-friendly" },
          { description: "Certified applicators" },
          { description: "Effective results" }
        ],
        buttonText: "Control Safely"
      }
    ],
    ServiceText: {
      title: "Lawn Mosquito Control in Wisconsin",
      description: "Eliminate mosquitoes with targeted plans for Wisconsin.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "wisconsin-lawn-mosquito-control",
      locationSlug: "wisconsin",
      serviceSlug: "lawn-mosquito-control"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
      finalCta: "Reclaim Your Outdoor Space",
      finalCtaDescription: "Let Wisconsin’s mosquito control experts protect your yard.",
      buttonText: "Start Control"
    }
  },
  {
    id: "virginia-lawn-care-services",
    slug: "virginia-lawn-care-services",
    title: "Lawn Care Services in Virginia",
    heroTitle: "Transform Your Yard into a Vibrant Oasis in Virginia",
    heroSubtitle: "Fast, affordable lawn care and landscaping — all managed by local Virginia experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991819/Cancun-1-GT-scaled_ie7dhs.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991825/Cancun-2-GT-scaled_dtyjqf.jpg",
        title: "Seasonal Lawn Protection",
        description: "Maintain a healthy lawn during Virginia seasons with our expert care.",
        featuresArray: [
          { description: "Heat stress prevention" },
          { description: "Seasonal fertilization" },
          { description: "Warm weather grass care" },
          { description: "Soil enrichment" }
        ],
        buttonText: "Start Seasonal Care"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
        title: "Spring Lawn Recovery",
        description: "Revive your lawn after winter with our specialized recovery services.",
        featuresArray: [
          { description: "Thatch removal" },
          { description: "Early seeding" },
          { description: "Soil aeration" },
          { description: "Nutrient boost" }
        ],
        buttonText: "Recover My Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Year-Round Maintenance",
        description: "Keep your Virginia lawn thriving with consistent care.",
        featuresArray: [
          { description: "Seasonal treatments" },
          { description: "Weed control" },
          { description: "Pest management" },
          { description: "Regular mowing" }
        ],
        buttonText: "Maintain Year-Round"
      }
    ],
    ServiceText: {
      title: "Lawn Care Services in Virginia",
      description: "Maintain a healthy lawn during Virginia seasons with our expert care.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "virginia-lawn-care-services",
      locationSlug: "virginia",
      serviceSlug: "lawn-care-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991642/What-Sets-Our-Landscaping-Apart-from-the-Rest_libm4l.jpg",
      finalCta: "Lets Make Your Lawn the Best in Virginia",
      finalCtaDescription: "With expert care and eco-safe treatments, well help your lawn thrive all year long.",
      buttonText: "Refresh Your Lawn"
    }
  },
  {
    id: "virginia-lawn-mowing",
    slug: "virginia-lawn-mowing",
    title: "Lawn Mowing in Virginia",
    heroTitle: "Keep Your Lawn Pristine with Mowing in Virginia",
    heroSubtitle: "Reliable mowing services by local Virginia experts to maintain your yard.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991825/Cancun-2-GT-scaled_dtyjqf.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
        title: "Seasonal Mowing Adjustments",
        description: "Tailored mowing for Virginia’s changing seasons.",
        featuresArray: [
          { description: "Spring growth cuts" },
          { description: "Summer height management" },
          { description: "Fall cleanup mowing" },
          { description: "Winter prep trimming" }
        ],
        buttonText: "Schedule Mowing"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Precision Cutting",
        description: "Achieve a perfect lawn with our precise mowing techniques.",
        featuresArray: [
          { description: "Adjustable blade heights" },
          { description: "Edge trimming" },
          { description: "Grass clipping removal" },
          { description: "Even cuts" }
        ],
        buttonText: "Get Precision Cuts"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Eco-Friendly Mowing",
        description: "Sustainable mowing options for a greener Virginia lawn.",
        featuresArray: [
          { description: "Electric mowers" },
          { description: "Reduced emissions" },
          { description: "Organic waste reuse" },
          { description: "Expert handling" }
        ],
        buttonText: "Go Green"
      }
    ],
    ServiceText: {
      title: "Lawn Mowing in Virginia",
      description: "Tailored mowing for Virginia’s changing seasons.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "virginia-lawn-mowing",
      locationSlug: "virginia",
      serviceSlug: "lawn-mowing"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
      finalCta: "Transform Your Lawn with Expert Mowing",
      finalCtaDescription: "Let our Virginia mowing experts keep your lawn looking its best.",
      buttonText: "Book Your Mowing"
    }
  },
  {
    id: "virginia-sprinkler-installation-repair",
    slug: "virginia-sprinkler-installation-repair",
    title: "Sprinkler Installation & Repair in Virginia",
    heroTitle: "Efficient Sprinkler Solutions for Your Virginia Yard",
    heroSubtitle: "Expert sprinkler services by Virginia professionals to keep your lawn hydrated.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Drought-Resistant Installation",
        description: "Install sprinklers designed for Virginia’s variable weather.",
        featuresArray: [
          { description: "Drought-tolerant systems" },
          { description: "Custom layouts" },
          { description: "Efficient water use" },
          { description: "Professional setup" }
        ],
        buttonText: "Install Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Quick Repair Services",
        description: "Fix sprinkler issues fast with our Virginia repair team.",
        featuresArray: [
          { description: "Leak repairs" },
          { description: "Head replacements" },
          { description: "Pressure fixes" },
          { description: "System diagnostics" }
        ],
        buttonText: "Repair My System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Seasonal Maintenance",
        description: "Keep your sprinklers ready for Virginia’s seasons.",
        featuresArray: [
          { description: "Winterization" },
          { description: "Spring startup" },
          { description: "Summer checks" },
          { description: "Fall prep" }
        ],
        buttonText: "Maintain System"
      }
    ],
    ServiceText: {
      title: "Sprinkler Installation & Repair in Virginia",
      description: "Install sprinklers designed for Virginia’s variable weather.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "virginia-sprinkler-installation-repair",
      locationSlug: "virginia",
      serviceSlug: "sprinkler-installation-repair"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991900/Your-One-Stop-Sprinkler-Solution_u3ghig.jpg",
      finalCta: "Keep Your Lawn Green with Sprinkler Care",
      finalCtaDescription: "Trust our Virginia experts for top-tier sprinkler services.",
      buttonText: "Get Sprinkler Help"
    }
  },
  {
    id: "virginia-lawn-sprinkler-installation",
    slug: "virginia-lawn-sprinkler-installation",
    title: "Lawn Sprinkler Installation in Virginia",
    heroTitle: "Perfect Watering with New Sprinklers in Virginia",
    heroSubtitle: "Install advanced sprinkler systems with Virginia’s top experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Custom Design",
        description: "Tailored sprinkler systems for your Virginia lawn.",
        featuresArray: [
          { description: "Site evaluation" },
          { description: "Custom design" },
          { description: "Water efficiency" },
          { description: "Expert installation" }
        ],
        buttonText: "Design System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Drought-Ready Systems",
        description: "Install sprinklers built for Virginia’s climate.",
        featuresArray: [
          { description: "Drought resistance" },
          { description: "Durable materials" },
          { description: "Smart controls" },
          { description: "Longevity" }
        ],
        buttonText: "Install Drought System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Professional Team",
        description: "Rely on Virginia’s best for seamless installation.",
        featuresArray: [
          { description: "Certified installers" },
          { description: "Quality equipment" },
          { description: "Timely service" },
          { description: "Warranty support" }
        ],
        buttonText: "Hire Team"
      }
    ],
    ServiceText: {
      title: "Lawn Sprinkler Installation in Virginia",
      description: "Tailored sprinkler systems for your Virginia lawn.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "virginia-lawn-sprinkler-installation",
      locationSlug: "virginia",
      serviceSlug: "lawn-sprinkler-installation"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991900/Your-One-Stop-Sprinkler-Solution_u3ghig.jpg",
      finalCta: "Install a Sprinkler System Today",
      finalCtaDescription: "Enhance your Virginia lawn with professional installation.",
      buttonText: "Start Installation"
    }
  },
  {
    id: "virginia-landscaping-services",
    slug: "virginia-landscaping-services",
    title: "Landscaping Services in Virginia",
    heroTitle: "Create Your Dream Yard in Virginia",
    heroSubtitle: "Transform your outdoor space with Virginia landscaping experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Custom Landscapes",
        description: "Design a unique yard tailored to Virginia’s climate.",
        featuresArray: [
          { description: "Personalized plans" },
          { description: "Plant selection" },
          { description: "Hardscape design" },
          { description: "3D previews" }
        ],
        buttonText: "Design My Yard"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Full Project Management",
        description: "Handle every step of your landscaping project.",
        featuresArray: [
          { description: "Site prep" },
          { description: "Planting" },
          { description: "Construction" },
          { description: "Final cleanup" }
        ],
        buttonText: "Manage Project"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Climate-Adaptive Solutions",
        description: "Eco-friendly landscaping for Virginia’s weather.",
        featuresArray: [
          { description: "Native plants" },
          { description: "Drought management" },
          { description: "Insulation techniques" },
          { description: "Sustainable design" }
        ],
        buttonText: "Go Eco-Friendly"
      }
    ],
    ServiceText: {
      title: "Landscaping Services in Virginia",
      description: "Design a unique yard tailored to Virginia’s climate.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "virginia-landscaping-services",
      locationSlug: "virginia",
      serviceSlug: "landscaping-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Complete-Solutions-for-Stunning-Landscapes_amu5ss.jpg",
      finalCta: "Elevate Your Outdoor Living",
      finalCtaDescription: "Let our Virginia experts turn your vision into reality.",
      buttonText: "Transform My Yard"
    }
  },
  {
    id: "virginia-lawn-health",
    slug: "virginia-lawn-health",
    title: "Lawn Health in Virginia",
    heroTitle: "Revitalize Your Lawn in Virginia",
    heroSubtitle: "Boost your lawn’s vitality with expert care in Virginia.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Seasonal Health Check",
        description: "Assess and protect your lawn during Virginia seasons.",
        featuresArray: [
          { description: "Soil testing" },
          { description: "Heat damage check" },
          { description: "Nutrient analysis" },
          { description: "Health report" }
        ],
        buttonText: "Check Health"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Recovery Treatments",
        description: "Restore your lawn with specialized Virginia care.",
        featuresArray: [
          { description: "Spring fertilization" },
          { description: "Weed control" },
          { description: "Disease treatment" },
          { description: "Moisture management" }
        ],
        buttonText: "Restore Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Ongoing Care",
        description: "Maintain lawn health with regular Virginia services.",
        featuresArray: [
          { description: "Monthly visits" },
          { description: "Seasonal treatments" },
          { description: "Pest prevention" },
          { description: "Expert tips" }
        ],
        buttonText: "Maintain Care"
      }
    ],
    ServiceText: {
      title: "Lawn Health in Virginia",
      description: "Assess and protect your lawn during Virginia seasons.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "virginia-lawn-health",
      locationSlug: "virginia",
      serviceSlug: "lawn-health"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
      finalCta: "Healthy Lawns Start Here",
      finalCtaDescription: "Trust Virginia’s experts to keep your lawn thriving.",
      buttonText: "Improve My Lawn"
    }
  },
  {
    id: "virginia-tree-services",
    slug: "virginia-tree-services",
    title: "Tree Services in Virginia",
    heroTitle: "Enhance Your Trees in Virginia",
    heroSubtitle: "Professional tree care to beautify your Virginia property.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Seasonal Pruning",
        description: "Protect and shape trees during Virginia seasons.",
        featuresArray: [
          { description: "Storm damage pruning" },
          { description: "Dead branch removal" },
          { description: "Shape maintenance" },
          { description: "Growth support" }
        ],
        buttonText: "Prune Trees"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Tree Removal",
        description: "Safely remove hazardous trees in Virginia.",
        featuresArray: [
          { description: "Risk assessment" },
          { description: "Safe removal" },
          { description: "Stump grinding" },
          { description: "Site cleanup" }
        ],
        buttonText: "Remove Trees"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Tree Health",
        description: "Nourish and protect your trees for Virginia’s climate.",
        featuresArray: [
          { description: "Disease control" },
          { description: "Pest management" },
          { description: "Fertilization" },
          { description: "Health monitoring" }
        ],
        buttonText: "Care for Trees"
      }
    ],
    ServiceText: {
      title: "Tree Services in Virginia",
      description: "Protect and shape trees during Virginia seasons.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "virginia-tree-services",
      locationSlug: "virginia",
      serviceSlug: "tree-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991754/4-2_is52jw.jpg",
      finalCta: "Perfect Trees for Your Yard",
      finalCtaDescription: "Let our Virginia tree experts enhance your landscape.",
      buttonText: "Start Tree Care"
    }
  },
  {
    id: "virginia-landscaping-maintenance",
    slug: "virginia-landscaping-maintenance",
    title: "Landscaping Maintenance in Virginia",
    heroTitle: "Sustain Your Landscape in Virginia",
    heroSubtitle: "Ongoing care to keep your Virginia yard pristine.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Seasonal Maintenance",
        description: "Prepare and maintain your yard for Virginia seasons.",
        featuresArray: [
          { description: "Storm debris removal" },
          { description: "Heat management" },
          { description: "Plant protection" },
          { description: "Debris clearing" }
        ],
        buttonText: "Seasonal Plan"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Seasonal Upkeep",
        description: "Adapt maintenance for Virginia’s seasons.",
        featuresArray: [
          { description: "Spring cleanup" },
          { description: "Summer trimming" },
          { description: "Fall prep" },
          { description: "Winter care" }
        ],
        buttonText: "Seasonal Care"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Custom Plans",
        description: "Tailored maintenance for your Virginia landscape.",
        featuresArray: [
          { description: "Personalized schedules" },
          { description: "Expert supervision" },
          { description: "Flexible adjustments" },
          { description: "Year-round support" }
        ],
        buttonText: "Create Plan"
      }
    ],
    ServiceText: {
      title: "Landscaping Maintenance in Virginia",
      description: "Prepare and maintain your yard for Virginia seasons.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "virginia-landscaping-maintenance",
      locationSlug: "virginia",
      serviceSlug: "landscaping-maintenance"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991642/What-Sets-Our-Landscaping-Apart-from-the-Rest_libm4l.jpg",
      finalCta: "Maintain Your Landscapes Charm",
      finalCtaDescription: "Rely on Virginia’s best for consistent care.",
      buttonText: "Maintain Now"
    }
  },
  {
    id: "virginia-shrub-care",
    slug: "virginia-shrub-care",
    title: "Shrub Care in Virginia",
    heroTitle: "Nurture Your Shrubs in Virginia",
    heroSubtitle: "Expert shrub care to enhance your Virginia landscape.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Seasonal Pruning",
        description: "Protect shrubs from Virginia’s weather with expert pruning.",
        featuresArray: [
          { description: "Heat protection" },
          { description: "Deadwood removal" },
          { description: "Shape maintenance" },
          { description: "Growth support" }
        ],
        buttonText: "Prune Shrubs"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Health Treatments",
        description: "Keep shrubs healthy with Virginia-specific care.",
        featuresArray: [
          { description: "Pest control" },
          { description: "Disease prevention" },
          { description: "Nutrient feeding" },
          { description: "Health checks" }
        ],
        buttonText: "Treat Shrubs"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "New Installations",
        description: "Add vibrant shrubs to your Virginia yard.",
        featuresArray: [
          { description: "Site selection" },
          { description: "Planting" },
          { description: "Soil prep" },
          { description: "Initial care" }
        ],
        buttonText: "Install Shrubs"
      }
    ],
    ServiceText: {
      title: "Shrub Care in Virginia",
      description: "Protect shrubs from Virginia’s weather with expert pruning.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "virginia-shrub-care",
      locationSlug: "virginia",
      serviceSlug: "shrub-care"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991778/5-4_iqydyj.jpg",
      finalCta: "Beautiful Shrubs for Your Yard",
      finalCtaDescription: "Let our Virginia team care for your shrubs.",
      buttonText: "Start Shrub Care"
    }
  },
  {
    id: "virginia-lawn-seeding",
    slug: "virginia-lawn-seeding",
    title: "Lawn Seeding in Virginia",
    heroTitle: "Grow a Lush Lawn in Virginia",
    heroSubtitle: "Revitalize your lawn with expert seeding in Virginia.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Spring Overseeding",
        description: "Thicken your lawn with Virginia-friendly seeding.",
        featuresArray: [
          { description: "Heat-resistant seeds" },
          { description: "Even spread" },
          { description: "Soil prep" },
          { description: "Post-care" }
        ],
        buttonText: "Overseed Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "New Lawn Seeding",
        description: "Start a fresh lawn in Virginia’s climate.",
        featuresArray: [
          { description: "Site clearing" },
          { description: "Soil enrichment" },
          { description: "Seed application" },
          { description: "Growth tracking" }
        ],
        buttonText: "New Lawn Start"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Seeding Benefits",
        description: "Enjoy a denser lawn with Virginia expertise.",
        featuresArray: [
          { description: "Improved density" },
          { description: "Weed resistance" },
          { description: "Rich color" },
          { description: "Long-term growth" }
        ],
        buttonText: "Seed My Lawn"
      }
    ],
    ServiceText: {
      title: "Lawn Seeding in Virginia",
      description: "Thicken your lawn with Virginia-friendly seeding.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "virginia-lawn-seeding",
      locationSlug: "virginia",
      serviceSlug: "lawn-seeding"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991732/3-3_h3mwot.jpg",
      finalCta: "Grow a Greener Lawn",
      finalCtaDescription: "Trust Virginia’s seeding experts for a thriving yard.",
      buttonText: "Begin Seeding"
    }
  },
  {
    id: "virginia-lawn-aeration",
    slug: "virginia-lawn-aeration",
    title: "Lawn Aeration in Virginia",
    heroTitle: "Breathe Life into Your Lawn in Virginia",
    heroSubtitle: "Improve lawn health with aeration services in Virginia.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "Core Aeration",
        description: "Enhance root growth in Virginia’s soil.",
        featuresArray: [
          { description: "Soil loosening" },
          { description: "Air access" },
          { description: "Nutrient flow" },
          { description: "Water retention" }
        ],
        buttonText: "Aerate My Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Benefits of Aeration",
        description: "Boost your lawn’s health with aeration.",
        featuresArray: [
          { description: "Stronger roots" },
          { description: "Reduced compaction" },
          { description: "Better drainage" },
          { description: "Enhanced growth" }
        ],
        buttonText: "Boost Health"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991794/7-5_opmjoc.jpg",
        title: "Expert Service",
        description: "Trust Virginia’s pros for top aeration.",
        featuresArray: [
          { description: "Certified team" },
          { description: "Modern tools" },
          { description: "Timely work" },
          { description: "Follow-up care" }
        ],
        buttonText: "Hire Experts"
      }
    ],
    ServiceText: {
      title: "Lawn Aeration in Virginia",
      description: "Enhance root growth in Virginia’s soil.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "virginia-lawn-aeration",
      locationSlug: "virginia",
      serviceSlug: "lawn-aeration"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991726/2-3_xk4men.jpg",
      finalCta: "Aerate for a Healthier Lawn",
      finalCtaDescription: "Let our Virginia team aerate your lawn.",
      buttonText: "Start Aeration"
    }
  },
  {
    id: "virginia-lawn-mosquito-control",
    slug: "virginia-lawn-mosquito-control",
    title: "Lawn Mosquito Control in Virginia",
    heroTitle: "Enjoy a Mosquito-Free Yard in Virginia",
    heroSubtitle: "Protect your family with effective mosquito control in Virginia.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Mosquito Treatment",
        description: "Eliminate mosquitoes with targeted plans for Virginia.",
        featuresArray: [
          { description: "Barrier spraying" },
          { description: "Larval control" },
          { description: "Safe chemicals" },
          { description: "Regular applications" }
        ],
        buttonText: "Treat Mosquitoes"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991794/7-5_opmjoc.jpg",
        title: "Prevention Strategies",
        description: "Keep mosquitoes away with proactive Virginia measures.",
        featuresArray: [
          { description: "Standing water removal" },
          { description: "Plant management" },
          { description: "Habitat reduction" },
          { description: "Seasonal planning" }
        ],
        buttonText: "Prevent Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991804/8-3_rdingb.jpg",
        title: "Safe Control Methods",
        description: "Enjoy peace of mind with eco-friendly control in Virginia.",
        featuresArray: [
          { description: "Pet-safe treatments" },
          { description: "Family-friendly" },
          { description: "Certified applicators" },
          { description: "Effective results" }
        ],
        buttonText: "Control Safely"
      }
    ],
    ServiceText: {
      title: "Lawn Mosquito Control in Virginia",
      description: "Eliminate mosquitoes with targeted plans for Virginia.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "virginia-lawn-mosquito-control",
      locationSlug: "virginia",
      serviceSlug: "lawn-mosquito-control"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
      finalCta: "Reclaim Your Outdoor Space",
      finalCtaDescription: "Let Virginia’s mosquito control experts protect your yard.",
      buttonText: "Start Control"
    }
  },
  {
    id: "michigan-lawn-care-services",
    slug: "michigan-lawn-care-services",
    title: "Lawn Care Services in Michigan",
    heroTitle: "Transform Your Yard into a Winter Retreat in Michigan",
    heroSubtitle: "Fast, affordable lawn care and landscaping — all managed by local Michigan experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991819/Cancun-1-GT-scaled_ie7dhs.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991825/Cancun-2-GT-scaled_dtyjqf.jpg",
        title: "Winter Lawn Protection",
        description: "Maintain a healthy lawn during Michigan winters with our expert care.",
        featuresArray: [
          { description: "Snow mold prevention" },
          { description: "Winter fertilization" },
          { description: "Cold weather grass care" },
          { description: "Soil insulation" }
        ],
        buttonText: "Start Winter Care"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
        title: "Spring Lawn Recovery",
        description: "Revive your lawn after winter with our specialized recovery services.",
        featuresArray: [
          { description: "Thatch removal" },
          { description: "Early seeding" },
          { description: "Soil aeration" },
          { description: "Nutrient boost" }
        ],
        buttonText: "Recover My Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Year-Round Maintenance",
        description: "Keep your Michigan lawn thriving with consistent care.",
        featuresArray: [
          { description: "Seasonal treatments" },
          { description: "Weed control" },
          { description: "Pest management" },
          { description: "Regular mowing" }
        ],
        buttonText: "Maintain Year-Round"
      }
    ],
    ServiceText: {
      title: "Lawn Care Services in Michigan",
      description: "Maintain a healthy lawn during Michigan winters with our expert care.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "michigan-lawn-care-services",
      locationSlug: "michigan",
      serviceSlug: "lawn-care-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991642/What-Sets-Our-Landscaping-Apart-from-the-Rest_libm4l.jpg",
      finalCta: "Lets Make Your Lawn the Best in Michigan",
      finalCtaDescription: "With expert care and eco-safe treatments, well help your lawn thrive all year long.",
      buttonText: "Refresh Your Lawn"
    }
  },
  {
    id: "michigan-lawn-mowing",
    slug: "michigan-lawn-mowing",
    title: "Lawn Mowing in Michigan",
    heroTitle: "Keep Your Lawn Pristine with Mowing in Michigan",
    heroSubtitle: "Reliable mowing services by local Michigan experts to maintain your yard.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991825/Cancun-2-GT-scaled_dtyjqf.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
        title: "Seasonal Mowing Adjustments",
        description: "Tailored mowing for Michigan’s changing seasons.",
        featuresArray: [
          { description: "Spring growth cuts" },
          { description: "Summer height management" },
          { description: "Fall cleanup mowing" },
          { description: "Winter prep trimming" }
        ],
        buttonText: "Schedule Mowing"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Precision Cutting",
        description: "Achieve a perfect lawn with our precise mowing techniques.",
        featuresArray: [
          { description: "Adjustable blade heights" },
          { description: "Edge trimming" },
          { description: "Grass clipping removal" },
          { description: "Even cuts" }
        ],
        buttonText: "Get Precision Cuts"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Eco-Friendly Mowing",
        description: "Sustainable mowing options for a greener Michigan lawn.",
        featuresArray: [
          { description: "Electric mowers" },
          { description: "Reduced emissions" },
          { description: "Organic waste reuse" },
          { description: "Expert handling" }
        ],
        buttonText: "Go Green"
      }
    ],
    ServiceText: {
      title: "Lawn Mowing in Michigan",
      description: "Tailored mowing for Michigan’s changing seasons.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "michigan-lawn-mowing",
      locationSlug: "michigan",
      serviceSlug: "lawn-mowing"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
      finalCta: "Transform Your Lawn with Expert Mowing",
      finalCtaDescription: "Let our Michigan mowing experts keep your lawn looking its best.",
      buttonText: "Book Your Mowing"
    }
  },
  {
    id: "michigan-sprinkler-installation-repair",
    slug: "michigan-sprinkler-installation-repair",
    title: "Sprinkler Installation & Repair in Michigan",
    heroTitle: "Efficient Sprinkler Solutions for Your Michigan Yard",
    heroSubtitle: "Expert sprinkler services by Michigan professionals to keep your lawn hydrated.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Winterized Installation",
        description: "Install sprinklers designed for Michigan’s harsh winters.",
        featuresArray: [
          { description: "Freeze-proof systems" },
          { description: "Custom layouts" },
          { description: "Efficient water use" },
          { description: "Professional setup" }
        ],
        buttonText: "Install Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Quick Repair Services",
        description: "Fix sprinkler issues fast with our Michigan repair team.",
        featuresArray: [
          { description: "Leak repairs" },
          { description: "Head replacements" },
          { description: "Pressure fixes" },
          { description: "System diagnostics" }
        ],
        buttonText: "Repair My System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Seasonal Maintenance",
        description: "Keep your sprinklers ready for Michigan’s seasons.",
        featuresArray: [
          { description: "Winterization" },
          { description: "Spring startup" },
          { description: "Summer checks" },
          { description: "Fall prep" }
        ],
        buttonText: "Maintain System"
      }
    ],
    ServiceText: {
      title: "Sprinkler Installation & Repair in Michigan",
      description: "Install sprinklers designed for Michigan’s harsh winters.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "michigan-sprinkler-installation-repair",
      locationSlug: "michigan",
      serviceSlug: "sprinkler-installation-repair"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991900/Your-One-Stop-Sprinkler-Solution_u3ghig.jpg",
      finalCta: "Keep Your Lawn Green with Sprinkler Care",
      finalCtaDescription: "Trust our Michigan experts for top-tier sprinkler services.",
      buttonText: "Get Sprinkler Help"
    }
  },
  {
    id: "michigan-lawn-sprinkler-installation",
    slug: "michigan-lawn-sprinkler-installation",
    title: "Lawn Sprinkler Installation in Michigan",
    heroTitle: "Perfect Watering with New Sprinklers in Michigan",
    heroSubtitle: "Install advanced sprinkler systems with Michigan’s top experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Custom Design",
        description: "Tailored sprinkler systems for your Michigan lawn.",
        featuresArray: [
          { description: "Site evaluation" },
          { description: "Custom design" },
          { description: "Water efficiency" },
          { description: "Expert installation" }
        ],
        buttonText: "Design System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Winter-Ready Systems",
        description: "Install sprinklers built for Michigan’s cold climate.",
        featuresArray: [
          { description: "Freeze protection" },
          { description: "Durable materials" },
          { description: "Smart controls" },
          { description: "Longevity" }
        ],
        buttonText: "Install Winter System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Professional Team",
        description: "Rely on Michigan’s best for seamless installation.",
        featuresArray: [
          { description: "Certified installers" },
          { description: "Quality equipment" },
          { description: "Timely service" },
          { description: "Warranty support" }
        ],
        buttonText: "Hire Team"
      }
    ],
    ServiceText: {
      title: "Lawn Sprinkler Installation in Michigan",
      description: "Tailored sprinkler systems for your Michigan lawn.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "michigan-lawn-sprinkler-installation",
      locationSlug: "michigan",
      serviceSlug: "lawn-sprinkler-installation"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991900/Your-One-Stop-Sprinkler-Solution_u3ghig.jpg",
      finalCta: "Install a Sprinkler System Today",
      finalCtaDescription: "Enhance your Michigan lawn with professional installation.",
      buttonText: "Start Installation"
    }
  },
  {
    id: "michigan-landscaping-services",
    slug: "michigan-landscaping-services",
    title: "Landscaping Services in Michigan",
    heroTitle: "Create Your Dream Yard in Michigan",
    heroSubtitle: "Transform your outdoor space with Michigan landscaping experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Custom Landscapes",
        description: "Design a unique yard tailored to Michigan’s climate.",
        featuresArray: [
          { description: "Personalized plans" },
          { description: "Plant selection" },
          { description: "Hardscape design" },
          { description: "3D previews" }
        ],
        buttonText: "Design My Yard"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Full Project Management",
        description: "Handle every step of your landscaping project.",
        featuresArray: [
          { description: "Site prep" },
          { description: "Planting" },
          { description: "Construction" },
          { description: "Final cleanup" }
        ],
        buttonText: "Manage Project"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Cold-Climate Solutions",
        description: "Eco-friendly landscaping for Michigan’s weather.",
        featuresArray: [
          { description: "Native plants" },
          { description: "Snow management" },
          { description: "Insulation techniques" },
          { description: "Sustainable design" }
        ],
        buttonText: "Go Eco-Friendly"
      }
    ],
    ServiceText: {
      title: "Landscaping Services in Michigan",
      description: "Design a unique yard tailored to Michigan’s climate.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "michigan-landscaping-services",
      locationSlug: "michigan",
      serviceSlug: "landscaping-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Complete-Solutions-for-Stunning-Landscapes_amu5ss.jpg",
      finalCta: "Elevate Your Outdoor Living",
      finalCtaDescription: "Let our Michigan experts turn your vision into reality.",
      buttonText: "Transform My Yard"
    }
  },
  {
    id: "michigan-lawn-health",
    slug: "michigan-lawn-health",
    title: "Lawn Health in Michigan",
    heroTitle: "Revitalize Your Lawn in Michigan",
    heroSubtitle: "Boost your lawn’s vitality with expert care in Michigan.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Winter Health Check",
        description: "Assess and protect your lawn during Michigan winters.",
        featuresArray: [
          { description: "Soil testing" },
          { description: "Frost damage check" },
          { description: "Nutrient analysis" },
          { description: "Health report" }
        ],
        buttonText: "Check Health"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Recovery Treatments",
        description: "Restore your lawn with specialized Michigan care.",
        featuresArray: [
          { description: "Spring fertilization" },
          { description: "Weed control" },
          { description: "Disease treatment" },
          { description: "Moisture management" }
        ],
        buttonText: "Restore Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Ongoing Care",
        description: "Maintain lawn health with regular Michigan services.",
        featuresArray: [
          { description: "Monthly visits" },
          { description: "Seasonal treatments" },
          { description: "Pest prevention" },
          { description: "Expert tips" }
        ],
        buttonText: "Maintain Care"
      }
    ],
    ServiceText: {
      title: "Lawn Health in Michigan",
      description: "Assess and protect your lawn during Michigan winters.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "michigan-lawn-health",
      locationSlug: "michigan",
      serviceSlug: "lawn-health"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
      finalCta: "Healthy Lawns Start Here",
      finalCtaDescription: "Trust Michigan’s experts to keep your lawn thriving.",
      buttonText: "Improve My Lawn"
    }
  },
  {
    id: "michigan-tree-services",
    slug: "michigan-tree-services",
    title: "Tree Services in Michigan",
    heroTitle: "Enhance Your Trees in Michigan",
    heroSubtitle: "Professional tree care to beautify your Michigan property.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Winter Pruning",
        description: "Protect and shape trees during Michigan winters.",
        featuresArray: [
          { description: "Snow load pruning" },
          { description: "Dead branch removal" },
          { description: "Shape maintenance" },
          { description: "Growth support" }
        ],
        buttonText: "Prune Trees"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Tree Removal",
        description: "Safely remove hazardous trees in Michigan.",
        featuresArray: [
          { description: "Risk assessment" },
          { description: "Safe removal" },
          { description: "Stump grinding" },
          { description: "Site cleanup" }
        ],
        buttonText: "Remove Trees"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Tree Health",
        description: "Nourish and protect your trees for Michigan’s climate.",
        featuresArray: [
          { description: "Disease control" },
          { description: "Pest management" },
          { description: "Fertilization" },
          { description: "Health monitoring" }
        ],
        buttonText: "Care for Trees"
      }
    ],
    ServiceText: {
      title: "Tree Services in Michigan",
      description: "Protect and shape trees during Michigan winters.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "michigan-tree-services",
      locationSlug: "michigan",
      serviceSlug: "tree-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991754/4-2_is52jw.jpg",
      finalCta: "Perfect Trees for Your Yard",
      finalCtaDescription: "Let our Michigan tree experts enhance your landscape.",
      buttonText: "Start Tree Care"
    }
  },
  {
    id: "michigan-landscaping-maintenance",
    slug: "michigan-landscaping-maintenance",
    title: "Landscaping Maintenance in Michigan",
    heroTitle: "Sustain Your Landscape in Michigan",
    heroSubtitle: "Ongoing care to keep your Michigan yard pristine.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Winter Maintenance",
        description: "Prepare and maintain your yard for Michigan winters.",
        featuresArray: [
          { description: "Snow removal" },
          { description: "Ice management" },
          { description: "Plant protection" },
          { description: "Debris clearing" }
        ],
        buttonText: "Winter Plan"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Seasonal Upkeep",
        description: "Adapt maintenance for Michigan’s seasons.",
        featuresArray: [
          { description: "Spring cleanup" },
          { description: "Summer trimming" },
          { description: "Fall prep" },
          { description: "Winter care" }
        ],
        buttonText: "Seasonal Care"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Custom Plans",
        description: "Tailored maintenance for your Michigan landscape.",
        featuresArray: [
          { description: "Personalized schedules" },
          { description: "Expert supervision" },
          { description: "Flexible adjustments" },
          { description: "Year-round support" }
        ],
        buttonText: "Create Plan"
      }
    ],
    ServiceText: {
      title: "Landscaping Maintenance in Michigan",
      description: "Prepare and maintain your yard for Michigan winters.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "michigan-landscaping-maintenance",
      locationSlug: "michigan",
      serviceSlug: "landscaping-maintenance"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991642/What-Sets-Our-Landscaping-Apart-from-the-Rest_libm4l.jpg",
      finalCta: "Maintain Your Landscapes Charm",
      finalCtaDescription: "Rely on Michigan’s best for consistent care.",
      buttonText: "Maintain Now"
    }
  },
  {
    id: "michigan-shrub-care",
    slug: "michigan-shrub-care",
    title: "Shrub Care in Michigan",
    heroTitle: "Nurture Your Shrubs in Michigan",
    heroSubtitle: "Expert shrub care to enhance your Michigan landscape.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Winter Pruning",
        description: "Protect shrubs from Michigan’s cold with expert pruning.",
        featuresArray: [
          { description: "Snow protection" },
          { description: "Deadwood removal" },
          { description: "Shape maintenance" },
          { description: "Growth support" }
        ],
        buttonText: "Prune Shrubs"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Health Treatments",
        description: "Keep shrubs healthy with Michigan-specific care.",
        featuresArray: [
          { description: "Pest control" },
          { description: "Disease prevention" },
          { description: "Nutrient feeding" },
          { description: "Health checks" }
        ],
        buttonText: "Treat Shrubs"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "New Installations",
        description: "Add vibrant shrubs to your Michigan yard.",
        featuresArray: [
          { description: "Site selection" },
          { description: "Planting" },
          { description: "Soil prep" },
          { description: "Initial care" }
        ],
        buttonText: "Install Shrubs"
      }
    ],
    ServiceText: {
      title: "Shrub Care in Michigan",
      description: "Protect shrubs from Michigan’s cold with expert pruning.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "michigan-shrub-care",
      locationSlug: "michigan",
      serviceSlug: "shrub-care"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991778/5-4_iqydyj.jpg",
      finalCta: "Beautiful Shrubs for Your Yard",
      finalCtaDescription: "Let our Michigan team care for your shrubs.",
      buttonText: "Start Shrub Care"
    }
  },
  {
    id: "michigan-lawn-seeding",
    slug: "michigan-lawn-seeding",
    title: "Lawn Seeding in Michigan",
    heroTitle: "Grow a Lush Lawn in Michigan",
    heroSubtitle: "Revitalize your lawn with expert seeding in Michigan.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Spring Overseeding",
        description: "Thicken your lawn with Michigan-friendly seeding.",
        featuresArray: [
          { description: "Cold-resistant seeds" },
          { description: "Even spread" },
          { description: "Soil prep" },
          { description: "Post-care" }
        ],
        buttonText: "Overseed Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "New Lawn Seeding",
        description: "Start a fresh lawn in Michigan’s climate.",
        featuresArray: [
          { description: "Site clearing" },
          { description: "Soil enrichment" },
          { description: "Seed application" },
          { description: "Growth tracking" }
        ],
        buttonText: "New Lawn Start"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Seeding Benefits",
        description: "Enjoy a denser lawn with Michigan expertise.",
        featuresArray: [
          { description: "Improved density" },
          { description: "Weed resistance" },
          { description: "Rich color" },
          { description: "Long-term growth" }
        ],
        buttonText: "Seed My Lawn"
      }
    ],
    ServiceText: {
      title: "Lawn Seeding in Michigan",
      description: "Thicken your lawn with Michigan-friendly seeding.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "michigan-lawn-seeding",
      locationSlug: "michigan",
      serviceSlug: "lawn-seeding"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991732/3-3_h3mwot.jpg",
      finalCta: "Grow a Greener Lawn",
      finalCtaDescription: "Trust Michigan’s seeding experts for a thriving yard.",
      buttonText: "Begin Seeding"
    }
  },
  {
    id: "michigan-lawn-aeration",
    slug: "michigan-lawn-aeration",
    title: "Lawn Aeration in Michigan",
    heroTitle: "Breathe Life into Your Lawn in Michigan",
    heroSubtitle: "Improve lawn health with aeration services in Michigan.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "Core Aeration",
        description: "Enhance root growth in Michigan’s soil.",
        featuresArray: [
          { description: "Soil loosening" },
          { description: "Air access" },
          { description: "Nutrient flow" },
          { description: "Water retention" }
        ],
        buttonText: "Aerate My Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Benefits of Aeration",
        description: "Boost your lawn’s health with aeration.",
        featuresArray: [
          { description: "Stronger roots" },
          { description: "Reduced compaction" },
          { description: "Better drainage" },
          { description: "Enhanced growth" }
        ],
        buttonText: "Boost Health"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991794/7-5_opmjoc.jpg",
        title: "Expert Service",
        description: "Trust Michigan’s pros for top aeration.",
        featuresArray: [
          { description: "Certified team" },
          { description: "Modern tools" },
          { description: "Timely work" },
          { description: "Follow-up care" }
        ],
        buttonText: "Hire Experts"
      }
    ],
    ServiceText: {
      title: "Lawn Aeration in Michigan",
      description: "Enhance root growth in Michigan’s soil.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "michigan-lawn-aeration",
      locationSlug: "michigan",
      serviceSlug: "lawn-aeration"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991726/2-3_xk4men.jpg",
      finalCta: "Aerate for a Healthier Lawn",
      finalCtaDescription: "Let our Michigan team aerate your lawn.",
      buttonText: "Start Aeration"
    }
  },
  {
    id: "michigan-lawn-mosquito-control",
    slug: "michigan-lawn-mosquito-control",
    title: "Lawn Mosquito Control in Michigan",
    heroTitle: "Enjoy a Mosquito-Free Yard in Michigan",
    heroSubtitle: "Protect your family with effective mosquito control in Michigan.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Mosquito Treatment",
        description: "Eliminate mosquitoes with targeted plans for Michigan.",
        featuresArray: [
          { description: "Barrier spraying" },
          { description: "Larval control" },
          { description: "Safe chemicals" },
          { description: "Regular applications" }
        ],
        buttonText: "Treat Mosquitoes"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991794/7-5_opmjoc.jpg",
        title: "Prevention Strategies",
        description: "Keep mosquitoes away with proactive Michigan measures.",
        featuresArray: [
          { description: "Standing water removal" },
          { description: "Plant management" },
          { description: "Habitat reduction" },
          { description: "Seasonal planning" }
        ],
        buttonText: "Prevent Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991804/8-3_rdingb.jpg",
        title: "Safe Control Methods",
        description: "Enjoy peace of mind with eco-friendly control in Michigan.",
        featuresArray: [
          { description: "Pet-safe treatments" },
          { description: "Family-friendly" },
          { description: "Certified applicators" },
          { description: "Effective results" }
        ],
        buttonText: "Control Safely"
      }
    ],
    ServiceText: {
      title: "Lawn Mosquito Control in Michigan",
      description: "Eliminate mosquitoes with targeted plans for Michigan.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "michigan-lawn-mosquito-control",
      locationSlug: "michigan",
      serviceSlug: "lawn-mosquito-control"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
      finalCta: "Reclaim Your Outdoor Space",
      finalCtaDescription: "Let Michigan’s mosquito control experts protect your yard.",
      buttonText: "Start Control"
    }
  },
  {
    id: "georgia-lawn-care-services",
    slug: "georgia-lawn-care-services",
    title: "Lawn Care Services in Georgia",
    heroTitle: "Transform Your Yard into a Vibrant Oasis in Georgia",
    heroSubtitle: "Fast, affordable lawn care and landscaping — all managed by local Georgia experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991819/Cancun-1-GT-scaled_ie7dhs.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991825/Cancun-2-GT-scaled_dtyjqf.jpg",
        title: "Seasonal Lawn Protection",
        description: "Maintain a healthy lawn during Georgia seasons with our expert care.",
        featuresArray: [
          { description: "Heat stress prevention" },
          { description: "Seasonal fertilization" },
          { description: "Warm weather grass care" },
          { description: "Soil enrichment" }
        ],
        buttonText: "Start Seasonal Care"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
        title: "Spring Lawn Recovery",
        description: "Revive your lawn after winter with our specialized recovery services.",
        featuresArray: [
          { description: "Thatch removal" },
          { description: "Early seeding" },
          { description: "Soil aeration" },
          { description: "Nutrient boost" }
        ],
        buttonText: "Recover My Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Year-Round Maintenance",
        description: "Keep your Georgia lawn thriving with consistent care.",
        featuresArray: [
          { description: "Seasonal treatments" },
          { description: "Weed control" },
          { description: "Pest management" },
          { description: "Regular mowing" }
        ],
        buttonText: "Maintain Year-Round"
      }
    ],
    ServiceText: {
      title: "Lawn Care Services in Georgia",
      description: "Maintain a healthy lawn during Georgia seasons with our expert care.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "georgia-lawn-care-services",
      locationSlug: "georgia",
      serviceSlug: "lawn-care-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991642/What-Sets-Our-Landscaping-Apart-from-the-Rest_libm4l.jpg",
      finalCta: "Lets Make Your Lawn the Best in Georgia",
      finalCtaDescription: "With expert care and eco-safe treatments, well help your lawn thrive all year long.",
      buttonText: "Refresh Your Lawn"
    }
  },
  {
    id: "georgia-lawn-mowing",
    slug: "georgia-lawn-mowing",
    title: "Lawn Mowing in Georgia",
    heroTitle: "Keep Your Lawn Pristine with Mowing in Georgia",
    heroSubtitle: "Reliable mowing services by local Georgia experts to maintain your yard.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991825/Cancun-2-GT-scaled_dtyjqf.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
        title: "Seasonal Mowing Adjustments",
        description: "Tailored mowing for Georgia’s changing seasons.",
        featuresArray: [
          { description: "Spring growth cuts" },
          { description: "Summer height management" },
          { description: "Fall cleanup mowing" },
          { description: "Winter prep trimming" }
        ],
        buttonText: "Schedule Mowing"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Precision Cutting",
        description: "Achieve a perfect lawn with our precise mowing techniques.",
        featuresArray: [
          { description: "Adjustable blade heights" },
          { description: "Edge trimming" },
          { description: "Grass clipping removal" },
          { description: "Even cuts" }
        ],
        buttonText: "Get Precision Cuts"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Eco-Friendly Mowing",
        description: "Sustainable mowing options for a greener Georgia lawn.",
        featuresArray: [
          { description: "Electric mowers" },
          { description: "Reduced emissions" },
          { description: "Organic waste reuse" },
          { description: "Expert handling" }
        ],
        buttonText: "Go Green"
      }
    ],
    ServiceText: {
      title: "Lawn Mowing in Georgia",
      description: "Tailored mowing for Georgia’s changing seasons.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "georgia-lawn-mowing",
      locationSlug: "georgia",
      serviceSlug: "lawn-mowing"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
      finalCta: "Transform Your Lawn with Expert Mowing",
      finalCtaDescription: "Let our Georgia mowing experts keep your lawn looking its best.",
      buttonText: "Book Your Mowing"
    }
  },
  {
    id: "georgia-sprinkler-installation-repair",
    slug: "georgia-sprinkler-installation-repair",
    title: "Sprinkler Installation & Repair in Georgia",
    heroTitle: "Efficient Sprinkler Solutions for Your Georgia Yard",
    heroSubtitle: "Expert sprinkler services by Georgia professionals to keep your lawn hydrated.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Drought-Resistant Installation",
        description: "Install sprinklers designed for Georgia’s variable weather.",
        featuresArray: [
          { description: "Drought-tolerant systems" },
          { description: "Custom layouts" },
          { description: "Efficient water use" },
          { description: "Professional setup" }
        ],
        buttonText: "Install Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Quick Repair Services",
        description: "Fix sprinkler issues fast with our Georgia repair team.",
        featuresArray: [
          { description: "Leak repairs" },
          { description: "Head replacements" },
          { description: "Pressure fixes" },
          { description: "System diagnostics" }
        ],
        buttonText: "Repair My System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Seasonal Maintenance",
        description: "Keep your sprinklers ready for Georgia’s seasons.",
        featuresArray: [
          { description: "Winterization" },
          { description: "Spring startup" },
          { description: "Summer checks" },
          { description: "Fall prep" }
        ],
        buttonText: "Maintain System"
      }
    ],
    ServiceText: {
      title: "Sprinkler Installation & Repair in Georgia",
      description: "Install sprinklers designed for Georgia’s variable weather.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "georgia-sprinkler-installation-repair",
      locationSlug: "georgia",
      serviceSlug: "sprinkler-installation-repair"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991900/Your-One-Stop-Sprinkler-Solution_u3ghig.jpg",
      finalCta: "Keep Your Lawn Green with Sprinkler Care",
      finalCtaDescription: "Trust our Georgia experts for top-tier sprinkler services.",
      buttonText: "Get Sprinkler Help"
    }
  },
  {
    id: "georgia-lawn-sprinkler-installation",
    slug: "georgia-lawn-sprinkler-installation",
    title: "Lawn Sprinkler Installation in Georgia",
    heroTitle: "Perfect Watering with New Sprinklers in Georgia",
    heroSubtitle: "Install advanced sprinkler systems with Georgia’s top experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Custom Design",
        description: "Tailored sprinkler systems for your Georgia lawn.",
        featuresArray: [
          { description: "Site evaluation" },
          { description: "Custom design" },
          { description: "Water efficiency" },
          { description: "Expert installation" }
        ],
        buttonText: "Design System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Drought-Ready Systems",
        description: "Install sprinklers built for Georgia’s climate.",
        featuresArray: [
          { description: "Drought resistance" },
          { description: "Durable materials" },
          { description: "Smart controls" },
          { description: "Longevity" }
        ],
        buttonText: "Install Drought System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Professional Team",
        description: "Rely on Georgia’s best for seamless installation.",
        featuresArray: [
          { description: "Certified installers" },
          { description: "Quality equipment" },
          { description: "Timely service" },
          { description: "Warranty support" }
        ],
        buttonText: "Hire Team"
      }
    ],
    ServiceText: {
      title: "Lawn Sprinkler Installation in Georgia",
      description: "Tailored sprinkler systems for your Georgia lawn.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "georgia-lawn-sprinkler-installation",
      locationSlug: "georgia",
      serviceSlug: "lawn-sprinkler-installation"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991900/Your-One-Stop-Sprinkler-Solution_u3ghig.jpg",
      finalCta: "Install a Sprinkler System Today",
      finalCtaDescription: "Enhance your Georgia lawn with professional installation.",
      buttonText: "Start Installation"
    }
  },
  
  
    // ---------------------------------------------------------------------------------------------------





  {
    id: "georgia-landscaping-services",
    slug: "georgia-landscaping-services",
    title: "Landscaping Services in Georgia",
    heroTitle: "Create Your Dream Yard in Georgia",
    heroSubtitle: "Transform your outdoor space with Georgia landscaping experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Custom Landscapes",
        description: "Design a unique yard tailored to Georgia’s climate.",
        featuresArray: [
          { description: "Personalized plans" },
          { description: "Plant selection" },
          { description: "Hardscape design" },
          { description: "3D previews" }
        ],
        buttonText: "Design My Yard"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Full Project Management",
        description: "Handle every step of your landscaping project.",
        featuresArray: [
          { description: "Site prep" },
          { description: "Planting" },
          { description: "Construction" },
          { description: "Final cleanup" }
        ],
        buttonText: "Manage Project"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Heat-Adaptive Solutions",
        description: "Eco-friendly landscaping for Georgia’s warm weather.",
        featuresArray: [
          { description: "Native plants" },
          { description: "Drought management" },
          { description: "Insulation techniques" },
          { description: "Sustainable design" }
        ],
        buttonText: "Go Eco-Friendly"
      }
    ],
    ServiceText: {
      title: "Landscaping Services in Georgia",
      description: "Design a unique yard tailored to Georgia’s climate.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "georgia-landscaping-services",
      locationSlug: "georgia",
      serviceSlug: "landscaping-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Complete-Solutions-for-Stunning-Landscapes_amu5ss.jpg",
      finalCta: "Elevate Your Outdoor Living",
      finalCtaDescription: "Let our Georgia experts turn your vision into reality.",
      buttonText: "Transform My Yard"
    }
  },
  {
    id: "georgia-lawn-health",
    slug: "georgia-lawn-health",
    title: "Lawn Health in Georgia",
    heroTitle: "Revitalize Your Lawn in Georgia",
    heroSubtitle: "Boost your lawn’s vitality with expert care in Georgia.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Summer Health Check",
        description: "Assess and protect your lawn during Georgia summers.",
        featuresArray: [
          { description: "Soil testing" },
          { description: "Heat damage check" },
          { description: "Nutrient analysis" },
          { description: "Health report" }
        ],
        buttonText: "Check Health"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Recovery Treatments",
        description: "Restore your lawn with specialized Georgia care.",
        featuresArray: [
          { description: "Spring fertilization" },
          { description: "Weed control" },
          { description: "Disease treatment" },
          { description: "Moisture management" }
        ],
        buttonText: "Restore Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Ongoing Care",
        description: "Maintain lawn health with regular Georgia services.",
        featuresArray: [
          { description: "Monthly visits" },
          { description: "Seasonal treatments" },
          { description: "Pest prevention" },
          { description: "Expert tips" }
        ],
        buttonText: "Maintain Care"
      }
    ],
    ServiceText: {
      title: "Lawn Health in Georgia",
      description: "Assess and protect your lawn during Georgia summers.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "georgia-lawn-health",
      locationSlug: "georgia",
      serviceSlug: "lawn-health"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
      finalCta: "Healthy Lawns Start Here",
      finalCtaDescription: "Trust Georgia’s experts to keep your lawn thriving.",
      buttonText: "Improve My Lawn"
    }
  },
  {
    id: "georgia-tree-services",
    slug: "georgia-tree-services",
    title: "Tree Services in Georgia",
    heroTitle: "Enhance Your Trees in Georgia",
    heroSubtitle: "Professional tree care to beautify your Georgia property.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Summer Pruning",
        description: "Protect and shape trees during Georgia summers.",
        featuresArray: [
          { description: "Heat stress pruning" },
          { description: "Dead branch removal" },
          { description: "Shape maintenance" },
          { description: "Growth support" }
        ],
        buttonText: "Prune Trees"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Tree Removal",
        description: "Safely remove hazardous trees in Georgia.",
        featuresArray: [
          { description: "Risk assessment" },
          { description: "Safe removal" },
          { description: "Stump grinding" },
          { description: "Site cleanup" }
        ],
        buttonText: "Remove Trees"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Tree Health",
        description: "Nourish and protect your trees for Georgia’s climate.",
        featuresArray: [
          { description: "Disease control" },
          { description: "Pest management" },
          { description: "Fertilization" },
          { description: "Health monitoring" }
        ],
        buttonText: "Care for Trees"
      }
    ],
    ServiceText: {
      title: "Tree Services in Georgia",
      description: "Protect and shape trees during Georgia summers.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "georgia-tree-services",
      locationSlug: "georgia",
      serviceSlug: "tree-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991754/4-2_is52jw.jpg",
      finalCta: "Perfect Trees for Your Yard",
      finalCtaDescription: "Let our Georgia tree experts enhance your landscape.",
      buttonText: "Start Tree Care"
    }
  },
  {
    id: "georgia-landscaping-maintenance",
    slug: "georgia-landscaping-maintenance",
    title: "Landscaping Maintenance in Georgia",
    heroTitle: "Sustain Your Landscape in Georgia",
    heroSubtitle: "Ongoing care to keep your Georgia yard pristine.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Summer Maintenance",
        description: "Prepare and maintain your yard for Georgia summers.",
        featuresArray: [
          { description: "Heat management" },
          { description: "Debris removal" },
          { description: "Plant protection" },
          { description: "Irrigation checks" }
        ],
        buttonText: "Summer Plan"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Seasonal Upkeep",
        description: "Adapt maintenance for Georgia’s seasons.",
        featuresArray: [
          { description: "Spring cleanup" },
          { description: "Summer trimming" },
          { description: "Fall prep" },
          { description: "Winter care" }
        ],
        buttonText: "Seasonal Care"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Custom Plans",
        description: "Tailored maintenance for your Georgia landscape.",
        featuresArray: [
          { description: "Personalized schedules" },
          { description: "Expert supervision" },
          { description: "Flexible adjustments" },
          { description: "Year-round support" }
        ],
        buttonText: "Create Plan"
      }
    ],
    ServiceText: {
      title: "Landscaping Maintenance in Georgia",
      description: "Prepare and maintain your yard for Georgia summers.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "georgia-landscaping-maintenance",
      locationSlug: "georgia",
      serviceSlug: "landscaping-maintenance"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991642/What-Sets-Our-Landscaping-Apart-from-the-Rest_libm4l.jpg",
      finalCta: "Maintain Your Landscapes Charm",
      finalCtaDescription: "Rely on Georgia’s best for consistent care.",
      buttonText: "Maintain Now"
    }
  },
  {
    id: "georgia-shrub-care",
    slug: "georgia-shrub-care",
    title: "Shrub Care in Georgia",
    heroTitle: "Nurture Your Shrubs in Georgia",
    heroSubtitle: "Expert shrub care to enhance your Georgia landscape.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Summer Pruning",
        description: "Protect shrubs from Georgia’s heat with expert pruning.",
        featuresArray: [
          { description: "Heat protection" },
          { description: "Deadwood removal" },
          { description: "Shape maintenance" },
          { description: "Growth support" }
        ],
        buttonText: "Prune Shrubs"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Health Treatments",
        description: "Keep shrubs healthy with Georgia-specific care.",
        featuresArray: [
          { description: "Pest control" },
          { description: "Disease prevention" },
          { description: "Nutrient feeding" },
          { description: "Health checks" }
        ],
        buttonText: "Treat Shrubs"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "New Installations",
        description: "Add vibrant shrubs to your Georgia yard.",
        featuresArray: [
          { description: "Site selection" },
          { description: "Planting" },
          { description: "Soil prep" },
          { description: "Initial care" }
        ],
        buttonText: "Install Shrubs"
      }
    ],
    ServiceText: {
      title: "Shrub Care in Georgia",
      description: "Protect shrubs from Georgia’s heat with expert pruning.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "georgia-shrub-care",
      locationSlug: "georgia",
      serviceSlug: "shrub-care"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991778/5-4_iqydyj.jpg",
      finalCta: "Beautiful Shrubs for Your Yard",
      finalCtaDescription: "Let our Georgia team care for your shrubs.",
      buttonText: "Start Shrub Care"
    }
  },
  {
    id: "georgia-lawn-seeding",
    slug: "georgia-lawn-seeding",
    title: "Lawn Seeding in Georgia",
    heroTitle: "Grow a Lush Lawn in Georgia",
    heroSubtitle: "Revitalize your lawn with expert seeding in Georgia.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Spring Overseeding",
        description: "Thicken your lawn with Georgia-friendly seeding.",
        featuresArray: [
          { description: "Heat-resistant seeds" },
          { description: "Even spread" },
          { description: "Soil prep" },
          { description: "Post-care" }
        ],
        buttonText: "Overseed Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "New Lawn Seeding",
        description: "Start a fresh lawn in Georgia’s climate.",
        featuresArray: [
          { description: "Site clearing" },
          { description: "Soil enrichment" },
          { description: "Seed application" },
          { description: "Growth tracking" }
        ],
        buttonText: "New Lawn Start"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Seeding Benefits",
        description: "Enjoy a denser lawn with Georgia expertise.",
        featuresArray: [
          { description: "Improved density" },
          { description: "Weed resistance" },
          { description: "Rich color" },
          { description: "Long-term growth" }
        ],
        buttonText: "Seed My Lawn"
      }
    ],
    ServiceText: {
      title: "Lawn Seeding in Georgia",
      description: "Thicken your lawn with Georgia-friendly seeding.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "georgia-lawn-seeding",
      locationSlug: "georgia",
      serviceSlug: "lawn-seeding"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991732/3-3_h3mwot.jpg",
      finalCta: "Grow a Greener Lawn",
      finalCtaDescription: "Trust Georgia’s seeding experts for a thriving yard.",
      buttonText: "Begin Seeding"
    }
  },
  {
    id: "georgia-lawn-aeration",
    slug: "georgia-lawn-aeration",
    title: "Lawn Aeration in Georgia",
    heroTitle: "Breathe Life into Your Lawn in Georgia",
    heroSubtitle: "Improve lawn health with aeration services in Georgia.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "Core Aeration",
        description: "Enhance root growth in Georgia’s soil.",
        featuresArray: [
          { description: "Soil loosening" },
          { description: "Air access" },
          { description: "Nutrient flow" },
          { description: "Water retention" }
        ],
        buttonText: "Aerate My Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Benefits of Aeration",
        description: "Boost your lawn’s health with aeration.",
        featuresArray: [
          { description: "Stronger roots" },
          { description: "Reduced compaction" },
          { description: "Better drainage" },
          { description: "Enhanced growth" }
        ],
        buttonText: "Boost Health"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991794/7-5_opmjoc.jpg",
        title: "Expert Service",
        description: "Trust Georgia’s pros for top aeration.",
        featuresArray: [
          { description: "Certified team" },
          { description: "Modern tools" },
          { description: "Timely work" },
          { description: "Follow-up care" }
        ],
        buttonText: "Hire Experts"
      }
    ],
    ServiceText: {
      title: "Lawn Aeration in Georgia",
      description: "Enhance root growth in Georgia’s soil.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "georgia-lawn-aeration",
      locationSlug: "georgia",
      serviceSlug: "lawn-aeration"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991726/2-3_xk4men.jpg",
      finalCta: "Aerate for a Healthier Lawn",
      finalCtaDescription: "Let our Georgia team aerate your lawn.",
      buttonText: "Start Aeration"
    }
  },
  {
    id: "georgia-lawn-mosquito-control",
    slug: "georgia-lawn-mosquito-control",
    title: "Lawn Mosquito Control in Georgia",
    heroTitle: "Enjoy a Mosquito-Free Yard in Georgia",
    heroSubtitle: "Protect your family with effective mosquito control in Georgia.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Mosquito Treatment",
        description: "Eliminate mosquitoes with targeted plans for Georgia.",
        featuresArray: [
          { description: "Barrier spraying" },
          { description: "Larval control" },
          { description: "Safe chemicals" },
          { description: "Regular applications" }
        ],
        buttonText: "Treat Mosquitoes"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991794/7-5_opmjoc.jpg",
        title: "Prevention Strategies",
        description: "Keep mosquitoes away with proactive Georgia measures.",
        featuresArray: [
          { description: "Standing water removal" },
          { description: "Plant management" },
          { description: "Habitat reduction" },
          { description: "Seasonal planning" }
        ],
        buttonText: "Prevent Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991804/8-3_rdingb.jpg",
        title: "Safe Control Methods",
        description: "Enjoy peace of mind with eco-friendly control in Georgia.",
        featuresArray: [
          { description: "Pet-safe treatments" },
          { description: "Family-friendly" },
          { description: "Certified applicators" },
          { description: "Effective results" }
        ],
        buttonText: "Control Safely"
      }
    ],
    ServiceText: {
      title: "Lawn Mosquito Control in Georgia",
      description: "Eliminate mosquitoes with targeted plans for Georgia.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "georgia-lawn-mosquito-control",
      locationSlug: "georgia",
      serviceSlug: "lawn-mosquito-control"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
      finalCta: "Reclaim Your Outdoor Space",
      finalCtaDescription: "Let Georgia’s mosquito control experts protect your yard.",
      buttonText: "Start Control"
    }
  },
  {
    id: "north-carolina-lawn-care-services",
    slug: "north-carolina-lawn-care-services",
    title: "Lawn Care Services in North Carolina",
    heroTitle: "Transform Your Yard into a Lush Retreat in North Carolina",
    heroSubtitle: "Fast, affordable lawn care and landscaping — all managed by local North Carolina experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991819/Cancun-1-GT-scaled_ie7dhs.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991825/Cancun-2-GT-scaled_dtyjqf.jpg",
        title: "Humid Season Lawn Care",
        description: "Maintain a healthy lawn during North Carolina’s humid seasons with our expert care.",
        featuresArray: [
          { description: "Humidity control" },
          { description: "Seasonal fertilization" },
          { description: "Warm weather grass care" },
          { description: "Soil drainage" }
        ],
        buttonText: "Start Humid Care"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
        title: "Spring Lawn Recovery",
        description: "Revive your lawn after winter with our specialized recovery services.",
        featuresArray: [
          { description: "Thatch removal" },
          { description: "Early seeding" },
          { description: "Soil aeration" },
          { description: "Nutrient boost" }
        ],
        buttonText: "Recover My Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Year-Round Maintenance",
        description: "Keep your North Carolina lawn thriving with consistent care.",
        featuresArray: [
          { description: "Seasonal treatments" },
          { description: "Weed control" },
          { description: "Pest management" },
          { description: "Regular mowing" }
        ],
        buttonText: "Maintain Year-Round"
      }
    ],
    ServiceText: {
      title: "Lawn Care Services in North Carolina",
      description: "Maintain a healthy lawn during North Carolina’s humid seasons with our expert care.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "north-carolina-lawn-care-services",
      locationSlug: "north-carolina",
      serviceSlug: "lawn-care-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991642/What-Sets-Our-Landscaping-Apart-from-the-Rest_libm4l.jpg",
      finalCta: "Lets Make Your Lawn the Best in North Carolina",
      finalCtaDescription: "With expert care and eco-safe treatments, well help your lawn thrive all year long.",
      buttonText: "Refresh Your Lawn"
    }
  },
  {
    id: "north-carolina-lawn-mowing",
    slug: "north-carolina-lawn-mowing",
    title: "Lawn Mowing in North Carolina",
    heroTitle: "Keep Your Lawn Pristine with Mowing in North Carolina",
    heroSubtitle: "Reliable mowing services by local North Carolina experts to maintain your yard.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991825/Cancun-2-GT-scaled_dtyjqf.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
        title: "Seasonal Mowing Adjustments",
        description: "Tailored mowing for North Carolina’s changing seasons.",
        featuresArray: [
          { description: "Spring growth cuts" },
          { description: "Summer height management" },
          { description: "Fall cleanup mowing" },
          { description: "Winter prep trimming" }
        ],
        buttonText: "Schedule Mowing"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Precision Cutting",
        description: "Achieve a perfect lawn with our precise mowing techniques.",
        featuresArray: [
          { description: "Adjustable blade heights" },
          { description: "Edge trimming" },
          { description: "Grass clipping removal" },
          { description: "Even cuts" }
        ],
        buttonText: "Get Precision Cuts"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Eco-Friendly Mowing",
        description: "Sustainable mowing options for a greener North Carolina lawn.",
        featuresArray: [
          { description: "Electric mowers" },
          { description: "Reduced emissions" },
          { description: "Organic waste reuse" },
          { description: "Expert handling" }
        ],
        buttonText: "Go Green"
      }
    ],
    ServiceText: {
      title: "Lawn Mowing in North Carolina",
      description: "Tailored mowing for North Carolina’s changing seasons.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "north-carolina-lawn-mowing",
      locationSlug: "north-carolina",
      serviceSlug: "lawn-mowing"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
      finalCta: "Transform Your Lawn with Expert Mowing",
      finalCtaDescription: "Let our North Carolina mowing experts keep your lawn looking its best.",
      buttonText: "Book Your Mowing"
    }
  },
  {
    id: "north-carolina-sprinkler-installation-repair",
    slug: "north-carolina-sprinkler-installation-repair",
    title: "Sprinkler Installation & Repair in North Carolina",
    heroTitle: "Efficient Sprinkler Solutions for Your North Carolina Yard",
    heroSubtitle: "Expert sprinkler services by North Carolina professionals to keep your lawn hydrated.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Humid-Ready Installation",
        description: "Install sprinklers designed for North Carolina’s humid climate.",
        featuresArray: [
          { description: "Humidity-tolerant systems" },
          { description: "Custom layouts" },
          { description: "Efficient water use" },
          { description: "Professional setup" }
        ],
        buttonText: "Install Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Quick Repair Services",
        description: "Fix sprinkler issues fast with our North Carolina repair team.",
        featuresArray: [
          { description: "Leak repairs" },
          { description: "Head replacements" },
          { description: "Pressure fixes" },
          { description: "System diagnostics" }
        ],
        buttonText: "Repair My System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Seasonal Maintenance",
        description: "Keep your sprinklers ready for North Carolina’s seasons.",
        featuresArray: [
          { description: "Winterization" },
          { description: "Spring startup" },
          { description: "Summer checks" },
          { description: "Fall prep" }
        ],
        buttonText: "Maintain System"
      }
    ],
    ServiceText: {
      title: "Sprinkler Installation & Repair in North Carolina",
      description: "Install sprinklers designed for North Carolina’s humid climate.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "north-carolina-sprinkler-installation-repair",
      locationSlug: "north-carolina",
      serviceSlug: "sprinkler-installation-repair"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991900/Your-One-Stop-Sprinkler-Solution_u3ghig.jpg",
      finalCta: "Keep Your Lawn Green with Sprinkler Care",
      finalCtaDescription: "Trust our North Carolina experts for top-tier sprinkler services.",
      buttonText: "Get Sprinkler Help"
    }
  },
  {
    id: "north-carolina-lawn-sprinkler-installation",
    slug: "north-carolina-lawn-sprinkler-installation",
    title: "Lawn Sprinkler Installation in North Carolina",
    heroTitle: "Perfect Watering with New Sprinklers in North Carolina",
    heroSubtitle: "Install advanced sprinkler systems with North Carolina’s top experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Custom Design",
        description: "Tailored sprinkler systems for your North Carolina lawn.",
        featuresArray: [
          { description: "Site evaluation" },
          { description: "Custom design" },
          { description: "Water efficiency" },
          { description: "Expert installation" }
        ],
        buttonText: "Design System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Humid-Ready Systems",
        description: "Install sprinklers built for North Carolina’s climate.",
        featuresArray: [
          { description: "Humidity resistance" },
          { description: "Durable materials" },
          { description: "Smart controls" },
          { description: "Longevity" }
        ],
        buttonText: "Install Humid System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Professional Team",
        description: "Rely on North Carolina’s best for seamless installation.",
        featuresArray: [
          { description: "Certified installers" },
          { description: "Quality equipment" },
          { description: "Timely service" },
          { description: "Warranty support" }
        ],
        buttonText: "Hire Team"
      }
    ],
    ServiceText: {
      title: "Lawn Sprinkler Installation in North Carolina",
      description: "Tailored sprinkler systems for your North Carolina lawn.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "north-carolina-lawn-sprinkler-installation",
      locationSlug: "north-carolina",
      serviceSlug: "lawn-sprinkler-installation"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991900/Your-One-Stop-Sprinkler-Solution_u3ghig.jpg",
      finalCta: "Install a Sprinkler System Today",
      finalCtaDescription: "Enhance your North Carolina lawn with professional installation.",
      buttonText: "Start Installation"
    }
  },
  {
    id: "north-carolina-landscaping-services",
    slug: "north-carolina-landscaping-services",
    title: "Landscaping Services in North Carolina",
    heroTitle: "Create Your Dream Yard in North Carolina",
    heroSubtitle: "Transform your outdoor space with North Carolina landscaping experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Custom Landscapes",
        description: "Design a unique yard tailored to North Carolina’s climate.",
        featuresArray: [
          { description: "Personalized plans" },
          { description: "Plant selection" },
          { description: "Hardscape design" },
          { description: "3D previews" }
        ],
        buttonText: "Design My Yard"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Full Project Management",
        description: "Handle every step of your landscaping project.",
        featuresArray: [
          { description: "Site prep" },
          { description: "Planting" },
          { description: "Construction" },
          { description: "Final cleanup" }
        ],
        buttonText: "Manage Project"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Humid-Climate Solutions",
        description: "Eco-friendly landscaping for North Carolina’s weather.",
        featuresArray: [
          { description: "Native plants" },
          { description: "Humidity management" },
          { description: "Drainage techniques" },
          { description: "Sustainable design" }
        ],
        buttonText: "Go Eco-Friendly"
      }
    ],
    ServiceText: {
      title: "Landscaping Services in North Carolina",
      description: "Design a unique yard tailored to North Carolina’s climate.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "north-carolina-landscaping-services",
      locationSlug: "north-carolina",
      serviceSlug: "landscaping-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Complete-Solutions-for-Stunning-Landscapes_amu5ss.jpg",
      finalCta: "Elevate Your Outdoor Living",
      finalCtaDescription: "Let our North Carolina experts turn your vision into reality.",
      buttonText: "Transform My Yard"
    }
  },
  {
    id: "north-carolina-lawn-health",
    slug: "north-carolina-lawn-health",
    title: "Lawn Health in North Carolina",
    heroTitle: "Revitalize Your Lawn in North Carolina",
    heroSubtitle: "Boost your lawn’s vitality with expert care in North Carolina.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Humid Season Health Check",
        description: "Assess and protect your lawn during North Carolina’s humid seasons.",
        featuresArray: [
          { description: "Soil testing" },
          { description: "Moisture damage check" },
          { description: "Nutrient analysis" },
          { description: "Health report" }
        ],
        buttonText: "Check Health"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Recovery Treatments",
        description: "Restore your lawn with specialized North Carolina care.",
        featuresArray: [
          { description: "Spring fertilization" },
          { description: "Weed control" },
          { description: "Disease treatment" },
          { description: "Moisture management" }
        ],
        buttonText: "Restore Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Ongoing Care",
        description: "Maintain lawn health with regular North Carolina services.",
        featuresArray: [
          { description: "Monthly visits" },
          { description: "Seasonal treatments" },
          { description: "Pest prevention" },
          { description: "Expert tips" }
        ],
        buttonText: "Maintain Care"
      }
    ],
    ServiceText: {
      title: "Lawn Health in North Carolina",
      description: "Assess and protect your lawn during North Carolina’s humid seasons.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "north-carolina-lawn-health",
      locationSlug: "north-carolina",
      serviceSlug: "lawn-health"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
      finalCta: "Healthy Lawns Start Here",
      finalCtaDescription: "Trust North Carolina’s experts to keep your lawn thriving.",
      buttonText: "Improve My Lawn"
    }
  },
  {
    id: "north-carolina-tree-services",
    slug: "north-carolina-tree-services",
    title: "Tree Services in North Carolina",
    heroTitle: "Enhance Your Trees in North Carolina",
    heroSubtitle: "Professional tree care to beautify your North Carolina property.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Humid Season Pruning",
        description: "Protect and shape trees during North Carolina’s humid seasons.",
        featuresArray: [
          { description: "Moisture stress pruning" },
          { description: "Dead branch removal" },
          { description: "Shape maintenance" },
          { description: "Growth support" }
        ],
        buttonText: "Prune Trees"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Tree Removal",
        description: "Safely remove hazardous trees in North Carolina.",
        featuresArray: [
          { description: "Risk assessment" },
          { description: "Safe removal" },
          { description: "Stump grinding" },
          { description: "Site cleanup" }
        ],
        buttonText: "Remove Trees"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Tree Health",
        description: "Nourish and protect your trees for North Carolina’s climate.",
        featuresArray: [
          { description: "Disease control" },
          { description: "Pest management" },
          { description: "Fertilization" },
          { description: "Health monitoring" }
        ],
        buttonText: "Care for Trees"
      }
    ],
    ServiceText: {
      title: "Tree Services in North Carolina",
      description: "Protect and shape trees during North Carolina’s humid seasons.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "north-carolina-tree-services",
      locationSlug: "north-carolina",
      serviceSlug: "tree-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991754/4-2_is52jw.jpg",
      finalCta: "Perfect Trees for Your Yard",
      finalCtaDescription: "Let our North Carolina tree experts enhance your landscape.",
      buttonText: "Start Tree Care"
    }
  },
  {
    id: "north-carolina-landscaping-maintenance",
    slug: "north-carolina-landscaping-maintenance",
    title: "Landscaping Maintenance in North Carolina",
    heroTitle: "Sustain Your Landscape in North Carolina",
    heroSubtitle: "Ongoing care to keep your North Carolina yard pristine.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Humid Season Maintenance",
        description: "Prepare and maintain your yard for North Carolina’s humid seasons.",
        featuresArray: [
          { description: "Moisture management" },
          { description: "Debris removal" },
          { description: "Plant protection" },
          { description: "Drainage checks" }
        ],
        buttonText: "Humid Plan"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Seasonal Upkeep",
        description: "Adapt maintenance for North Carolina’s seasons.",
        featuresArray: [
          { description: "Spring cleanup" },
          { description: "Summer trimming" },
          { description: "Fall prep" },
          { description: "Winter care" }
        ],
        buttonText: "Seasonal Care"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Custom Plans",
        description: "Tailored maintenance for your North Carolina landscape.",
        featuresArray: [
          { description: "Personalized schedules" },
          { description: "Expert supervision" },
          { description: "Flexible adjustments" },
          { description: "Year-round support" }
        ],
        buttonText: "Create Plan"
      }
    ],
    ServiceText: {
      title: "Landscaping Maintenance in North Carolina",
      description: "Prepare and maintain your yard for North Carolina’s humid seasons.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "north-carolina-landscaping-maintenance",
      locationSlug: "north-carolina",
      serviceSlug: "landscaping-maintenance"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991642/What-Sets-Our-Landscaping-Apart-from-the-Rest_libm4l.jpg",
      finalCta: "Maintain Your Landscapes Charm",
      finalCtaDescription: "Rely on North Carolina’s best for consistent care.",
      buttonText: "Maintain Now"
    }
  },
  {
    id: "north-carolina-shrub-care",
    slug: "north-carolina-shrub-care",
    title: "Shrub Care in North Carolina",
    heroTitle: "Nurture Your Shrubs in North Carolina",
    heroSubtitle: "Expert shrub care to enhance your North Carolina landscape.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Humid Season Pruning",
        description: "Protect shrubs from North Carolina’s humidity with expert pruning.",
        featuresArray: [
          { description: "Moisture protection" },
          { description: "Deadwood removal" },
          { description: "Shape maintenance" },
          { description: "Growth support" }
        ],
        buttonText: "Prune Shrubs"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Health Treatments",
        description: "Keep shrubs healthy with North Carolina-specific care.",
        featuresArray: [
          { description: "Pest control" },
          { description: "Disease prevention" },
          { description: "Nutrient feeding" },
          { description: "Health checks" }
        ],
        buttonText: "Treat Shrubs"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "New Installations",
        description: "Add vibrant shrubs to your North Carolina yard.",
        featuresArray: [
          { description: "Site selection" },
          { description: "Planting" },
          { description: "Soil prep" },
          { description: "Initial care" }
        ],
        buttonText: "Install Shrubs"
      }
    ],
    ServiceText: {
      title: "Shrub Care in North Carolina",
      description: "Protect shrubs from North Carolina’s humidity with expert pruning.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "north-carolina-shrub-care",
      locationSlug: "north-carolina",
      serviceSlug: "shrub-care"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991778/5-4_iqydyj.jpg",
      finalCta: "Beautiful Shrubs for Your Yard",
      finalCtaDescription: "Let our North Carolina team care for your shrubs.",
      buttonText: "Start Shrub Care"
    }
  },
  {
    id: "north-carolina-lawn-seeding",
    slug: "north-carolina-lawn-seeding",
    title: "Lawn Seeding in North Carolina",
    heroTitle: "Grow a Lush Lawn in North Carolina",
    heroSubtitle: "Revitalize your lawn with expert seeding in North Carolina.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Spring Overseeding",
        description: "Thicken your lawn with North Carolina-friendly seeding.",
        featuresArray: [
          { description: "Humidity-resistant seeds" },
          { description: "Even spread" },
          { description: "Soil prep" },
          { description: "Post-care" }
        ],
        buttonText: "Overseed Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "New Lawn Seeding",
        description: "Start a fresh lawn in North Carolina’s climate.",
        featuresArray: [
          { description: "Site clearing" },
          { description: "Soil enrichment" },
          { description: "Seed application" },
          { description: "Growth tracking" }
        ],
        buttonText: "New Lawn Start"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Seeding Benefits",
        description: "Enjoy a denser lawn with North Carolina expertise.",
        featuresArray: [
          { description: "Improved density" },
          { description: "Weed resistance" },
          { description: "Rich color" },
          { description: "Long-term growth" }
        ],
        buttonText: "Seed My Lawn"
      }
    ],
    ServiceText: {
      title: "Lawn Seeding in North Carolina",
      description: "Thicken your lawn with North Carolina-friendly seeding.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "north-carolina-lawn-seeding",
      locationSlug: "north-carolina",
      serviceSlug: "lawn-seeding"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991732/3-3_h3mwot.jpg",
      finalCta: "Grow a Greener Lawn",
      finalCtaDescription: "Trust North Carolina’s seeding experts for a thriving yard.",
      buttonText: "Begin Seeding"
    }
  },
  {
    id: "north-carolina-lawn-aeration",
    slug: "north-carolina-lawn-aeration",
    title: "Lawn Aeration in North Carolina",
    heroTitle: "Breathe Life into Your Lawn in North Carolina",
    heroSubtitle: "Improve lawn health with aeration services in North Carolina.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "Core Aeration",
        description: "Enhance root growth in North Carolina’s soil.",
        featuresArray: [
          { description: "Soil loosening" },
          { description: "Air access" },
          { description: "Nutrient flow" },
          { description: "Water retention" }
        ],
        buttonText: "Aerate My Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Benefits of Aeration",
        description: "Boost your lawn’s health with aeration.",
        featuresArray: [
          { description: "Stronger roots" },
          { description: "Reduced compaction" },
          { description: "Better drainage" },
          { description: "Enhanced growth" }
        ],
        buttonText: "Boost Health"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991794/7-5_opmjoc.jpg",
        title: "Expert Service",
        description: "Trust North Carolina’s pros for top aeration.",
        featuresArray: [
          { description: "Certified team" },
          { description: "Modern tools" },
          { description: "Timely work" },
          { description: "Follow-up care" }
        ],
        buttonText: "Hire Experts"
      }
    ],
    ServiceText: {
      title: "Lawn Aeration in North Carolina",
      description: "Enhance root growth in North Carolina’s soil.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "north-carolina-lawn-aeration",
      locationSlug: "north-carolina",
      serviceSlug: "lawn-aeration"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991726/2-3_xk4men.jpg",
      finalCta: "Aerate for a Healthier Lawn",
      finalCtaDescription: "Let our North Carolina team aerate your lawn.",
      buttonText: "Start Aeration"
    }
  },
  {
    id: "north-carolina-lawn-mosquito-control",
    slug: "north-carolina-lawn-mosquito-control",
    title: "Lawn Mosquito Control in North Carolina",
    heroTitle: "Enjoy a Mosquito-Free Yard in North Carolina",
    heroSubtitle: "Protect your family with effective mosquito control in North Carolina.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Mosquito Treatment",
        description: "Eliminate mosquitoes with targeted plans for North Carolina.",
        featuresArray: [
          { description: "Barrier spraying" },
          { description: "Larval control" },
          { description: "Safe chemicals" },
          { description: "Regular applications" }
        ],
        buttonText: "Treat Mosquitoes"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991794/7-5_opmjoc.jpg",
        title: "Prevention Strategies",
        description: "Keep mosquitoes away with proactive North Carolina measures.",
        featuresArray: [
          { description: "Standing water removal" },
          { description: "Plant management" },
          { description: "Habitat reduction" },
          { description: "Seasonal planning" }
        ],
        buttonText: "Prevent Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991804/8-3_rdingb.jpg",
        title: "Safe Control Methods",
        description: "Enjoy peace of mind with eco-friendly control in North Carolina.",
        featuresArray: [
          { description: "Pet-safe treatments" },
          { description: "Family-friendly" },
          { description: "Certified applicators" },
          { description: "Effective results" }
        ],
        buttonText: "Control Safely"
      }
    ],
    ServiceText: {
      title: "Lawn Mosquito Control in North Carolina",
      description: "Eliminate mosquitoes with targeted plans for North Carolina.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "north-carolina-lawn-mosquito-control",
      locationSlug: "north-carolina",
      serviceSlug: "lawn-mosquito-control"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
      finalCta: "Reclaim Your Outdoor Space",
      finalCtaDescription: "Let North Carolina’s mosquito control experts protect your yard.",
      buttonText: "Start Control"
    }
  },
  {
    id: "nebraska-lawn-care-services",
    slug: "nebraska-lawn-care-services",
    title: "Lawn Care Services in Nebraska",
    heroTitle: "Transform Your Yard into a Prairie Oasis in Nebraska",
    heroSubtitle: "Fast, affordable lawn care and landscaping — all managed by local Nebraska experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991819/Cancun-1-GT-scaled_ie7dhs.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991825/Cancun-2-GT-scaled_dtyjqf.jpg",
        title: "Wind-Resistant Lawn Care",
        description: "Maintain a healthy lawn during Nebraska’s windy seasons with our expert care.",
        featuresArray: [
          { description: "Wind erosion prevention" },
          { description: "Seasonal fertilization" },
          { description: "Drought-tolerant grass care" },
          { description: "Soil stabilization" }
        ],
        buttonText: "Start Wind Care"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
        title: "Spring Lawn Recovery",
        description: "Revive your lawn after winter with our specialized recovery services.",
        featuresArray: [
          { description: "Thatch removal" },
          { description: "Early seeding" },
          { description: "Soil aeration" },
          { description: "Nutrient boost" }
        ],
        buttonText: "Recover My Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Year-Round Maintenance",
        description: "Keep your Nebraska lawn thriving with consistent care.",
        featuresArray: [
          { description: "Seasonal treatments" },
          { description: "Weed control" },
          { description: "Pest management" },
          { description: "Regular mowing" }
        ],
        buttonText: "Maintain Year-Round"
      }
    ],
    ServiceText: {
      title: "Lawn Care Services in Nebraska",
      description: "Maintain a healthy lawn during Nebraska’s windy seasons with our expert care.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "nebraska-lawn-care-services",
      locationSlug: "nebraska",
      serviceSlug: "lawn-care-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991642/What-Sets-Our-Landscaping-Apart-from-the-Rest_libm4l.jpg",
      finalCta: "Lets Make Your Lawn the Best in Nebraska",
      finalCtaDescription: "With expert care and eco-safe treatments, well help your lawn thrive all year long.",
      buttonText: "Refresh Your Lawn"
    }
  },
  {
    id: "nebraska-lawn-mowing",
    slug: "nebraska-lawn-mowing",
    title: "Lawn Mowing in Nebraska",
    heroTitle: "Keep Your Lawn Pristine with Mowing in Nebraska",
    heroSubtitle: "Reliable mowing services by local Nebraska experts to maintain your yard.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991825/Cancun-2-GT-scaled_dtyjqf.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
        title: "Seasonal Mowing Adjustments",
        description: "Tailored mowing for Nebraska’s changing seasons.",
        featuresArray: [
          { description: "Spring growth cuts" },
          { description: "Summer height management" },
          { description: "Fall cleanup mowing" },
          { description: "Winter prep trimming" }
        ],
        buttonText: "Schedule Mowing"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Precision Cutting",
        description: "Achieve a perfect lawn with our precise mowing techniques.",
        featuresArray: [
          { description: "Adjustable blade heights" },
          { description: "Edge trimming" },
          { description: "Grass clipping removal" },
          { description: "Even cuts" }
        ],
        buttonText: "Get Precision Cuts"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Eco-Friendly Mowing",
        description: "Sustainable mowing options for a greener Nebraska lawn.",
        featuresArray: [
          { description: "Electric mowers" },
          { description: "Reduced emissions" },
          { description: "Organic waste reuse" },
          { description: "Expert handling" }
        ],
        buttonText: "Go Green"
      }
    ],
    ServiceText: {
      title: "Lawn Mowing in Nebraska",
      description: "Tailored mowing for Nebraska’s changing seasons.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "nebraska-lawn-mowing",
      locationSlug: "nebraska",
      serviceSlug: "lawn-mowing"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
      finalCta: "Transform Your Lawn with Expert Mowing",
      finalCtaDescription: "Let our Nebraska mowing experts keep your lawn looking its best.",
      buttonText: "Book Your Mowing"
    }
  },
  {
    id: "nebraska-sprinkler-installation-repair",
    slug: "nebraska-sprinkler-installation-repair",
    title: "Sprinkler Installation & Repair in Nebraska",
    heroTitle: "Efficient Sprinkler Solutions for Your Nebraska Yard",
    heroSubtitle: "Expert sprinkler services by Nebraska professionals to keep your lawn hydrated.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Wind-Resistant Installation",
        description: "Install sprinklers designed for Nebraska’s windy conditions.",
        featuresArray: [
          { description: "Wind-resistant systems" },
          { description: "Custom layouts" },
          { description: "Efficient water use" },
          { description: "Professional setup" }
        ],
        buttonText: "Install Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Quick Repair Services",
        description: "Fix sprinkler issues fast with our Nebraska repair team.",
        featuresArray: [
          { description: "Leak repairs" },
          { description: "Head replacements" },
          { description: "Pressure fixes" },
          { description: "System diagnostics" }
        ],
        buttonText: "Repair My System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Seasonal Maintenance",
        description: "Keep your sprinklers ready for Nebraska’s seasons.",
        featuresArray: [
          { description: "Winterization" },
          { description: "Spring startup" },
          { description: "Summer checks" },
          { description: "Fall prep" }
        ],
        buttonText: "Maintain System"
      }
    ],
    ServiceText: {
      title: "Sprinkler Installation & Repair in Nebraska",
      description: "Install sprinklers designed for Nebraska’s windy conditions.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "nebraska-sprinkler-installation-repair",
      locationSlug: "nebraska",
      serviceSlug: "sprinkler-installation-repair"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991900/Your-One-Stop-Sprinkler-Solution_u3ghig.jpg",
      finalCta: "Keep Your Lawn Green with Sprinkler Care",
      finalCtaDescription: "Trust our Nebraska experts for top-tier sprinkler services.",
      buttonText: "Get Sprinkler Help"
    }
  },
  {
    id: "nebraska-lawn-sprinkler-installation",
    slug: "nebraska-lawn-sprinkler-installation",
    title: "Lawn Sprinkler Installation in Nebraska",
    heroTitle: "Perfect Watering with New Sprinklers in Nebraska",
    heroSubtitle: "Install advanced sprinkler systems with Nebraska’s top experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Custom Design",
        description: "Tailored sprinkler systems for your Nebraska lawn.",
        featuresArray: [
          { description: "Site evaluation" },
          { description: "Custom design" },
          { description: "Water efficiency" },
          { description: "Expert installation" }
        ],
        buttonText: "Design System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Wind-Ready Systems",
        description: "Install sprinklers built for Nebraska’s climate.",
        featuresArray: [
          { description: "Wind resistance" },
          { description: "Durable materials" },
          { description: "Smart controls" },
          { description: "Longevity" }
        ],
        buttonText: "Install Wind System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Professional Team",
        description: "Rely on Nebraska’s best for seamless installation.",
        featuresArray: [
          { description: "Certified installers" },
          { description: "Quality equipment" },
          { description: "Timely service" },
          { description: "Warranty support" }
        ],
        buttonText: "Hire Team"
      }
    ],
    ServiceText: {
      title: "Lawn Sprinkler Installation in Nebraska",
      description: "Tailored sprinkler systems for your Nebraska lawn.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "nebraska-lawn-sprinkler-installation",
      locationSlug: "nebraska",
      serviceSlug: "lawn-sprinkler-installation"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991900/Your-One-Stop-Sprinkler-Solution_u3ghig.jpg",
      finalCta: "Install a Sprinkler System Today",
      finalCtaDescription: "Enhance your Nebraska lawn with professional installation.",
      buttonText: "Start Installation"
    }
  },
  {
    id: "nebraska-landscaping-services",
    slug: "nebraska-landscaping-services",
    title: "Landscaping Services in Nebraska",
    heroTitle: "Create Your Dream Yard in Nebraska",
    heroSubtitle: "Transform your outdoor space with Nebraska landscaping experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Custom Landscapes",
        description: "Design a unique yard tailored to Nebraska’s climate.",
        featuresArray: [
          { description: "Personalized plans" },
          { description: "Plant selection" },
          { description: "Hardscape design" },
          { description: "3D previews" }
        ],
        buttonText: "Design My Yard"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Full Project Management",
        description: "Handle every step of your landscaping project.",
        featuresArray: [
          { description: "Site prep" },
          { description: "Planting" },
          { description: "Construction" },
          { description: "Final cleanup" }
        ],
        buttonText: "Manage Project"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Wind-Climate Solutions",
        description: "Eco-friendly landscaping for Nebraska’s weather.",
        featuresArray: [
          { description: "Native plants" },
          { description: "Windbreak planting" },
          { description: "Erosion control" },
          { description: "Sustainable design" }
        ],
        buttonText: "Go Eco-Friendly"
      }
    ],
    ServiceText: {
      title: "Landscaping Services in Nebraska",
      description: "Design a unique yard tailored to Nebraska’s climate.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "nebraska-landscaping-services",
      locationSlug: "nebraska",
      serviceSlug: "landscaping-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Complete-Solutions-for-Stunning-Landscapes_amu5ss.jpg",
      finalCta: "Elevate Your Outdoor Living",
      finalCtaDescription: "Let our Nebraska experts turn your vision into reality.",
      buttonText: "Transform My Yard"
    }
  },
  {
    id: "nebraska-lawn-health",
    slug: "nebraska-lawn-health",
    title: "Lawn Health in Nebraska",
    heroTitle: "Revitalize Your Lawn in Nebraska",
    heroSubtitle: "Boost your lawn’s vitality with expert care in Nebraska.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Wind Season Health Check",
        description: "Assess and protect your lawn during Nebraska’s windy seasons.",
        featuresArray: [
          { description: "Soil testing" },
          { description: "Wind damage check" },
          { description: "Nutrient analysis" },
          { description: "Health report" }
        ],
        buttonText: "Check Health"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Recovery Treatments",
        description: "Restore your lawn with specialized Nebraska care.",
        featuresArray: [
          { description: "Spring fertilization" },
          { description: "Weed control" },
          { description: "Disease treatment" },
          { description: "Moisture management" }
        ],
        buttonText: "Restore Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Ongoing Care",
        description: "Maintain lawn health with regular Nebraska services.",
        featuresArray: [
          { description: "Monthly visits" },
          { description: "Seasonal treatments" },
          { description: "Pest prevention" },
          { description: "Expert tips" }
        ],
        buttonText: "Maintain Care"
      }
    ],
    ServiceText: {
      title: "Lawn Health in Nebraska",
      description: "Assess and protect your lawn during Nebraska’s windy seasons.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "nebraska-lawn-health",
      locationSlug: "nebraska",
      serviceSlug: "lawn-health"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
      finalCta: "Healthy Lawns Start Here",
      finalCtaDescription: "Trust Nebraska’s experts to keep your lawn thriving.",
      buttonText: "Improve My Lawn"
    }
  },
  {
    id: "nebraska-tree-services",
    slug: "nebraska-tree-services",
    title: "Tree Services in Nebraska",
    heroTitle: "Enhance Your Trees in Nebraska",
    heroSubtitle: "Professional tree care to beautify your Nebraska property.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Wind Season Pruning",
        description: "Protect and shape trees during Nebraska’s windy seasons.",
        featuresArray: [
          { description: "Wind load pruning" },
          { description: "Dead branch removal" },
          { description: "Shape maintenance" },
          { description: "Growth support" }
        ],
        buttonText: "Prune Trees"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Tree Removal",
        description: "Safely remove hazardous trees in Nebraska.",
        featuresArray: [
          { description: "Risk assessment" },
          { description: "Safe removal" },
          { description: "Stump grinding" },
          { description: "Site cleanup" }
        ],
        buttonText: "Remove Trees"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Tree Health",
        description: "Nourish and protect your trees for Nebraska’s climate.",
        featuresArray: [
          { description: "Disease control" },
          { description: "Pest management" },
          { description: "Fertilization" },
          { description: "Health monitoring" }
        ],
        buttonText: "Care for Trees"
      }
    ],
    ServiceText: {
      title: "Tree Services in Nebraska",
      description: "Protect and shape trees during Nebraska’s windy seasons.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "nebraska-tree-services",
      locationSlug: "nebraska",
      serviceSlug: "tree-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991754/4-2_is52jw.jpg",
      finalCta: "Perfect Trees for Your Yard",
      finalCtaDescription: "Let our Nebraska tree experts enhance your landscape.",
      buttonText: "Start Tree Care"
    }
  },
  {
    id: "nebraska-landscaping-maintenance",
    slug: "nebraska-landscaping-maintenance",
    title: "Landscaping Maintenance in Nebraska",
    heroTitle: "Sustain Your Landscape in Nebraska",
    heroSubtitle: "Ongoing care to keep your Nebraska yard pristine.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Wind Season Maintenance",
        description: "Prepare and maintain your yard for Nebraska’s windy seasons.",
        featuresArray: [
          { description: "Windbreak maintenance" },
          { description: "Debris removal" },
          { description: "Plant protection" },
          { description: "Erosion control" }
        ],
        buttonText: "Wind Plan"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Seasonal Upkeep",
        description: "Adapt maintenance for Nebraska’s seasons.",
        featuresArray: [
          { description: "Spring cleanup" },
          { description: "Summer trimming" },
          { description: "Fall prep" },
          { description: "Winter care" }
        ],
        buttonText: "Seasonal Care"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Custom Plans",
        description: "Tailored maintenance for your Nebraska landscape.",
        featuresArray: [
          { description: "Personalized schedules" },
          { description: "Expert supervision" },
          { description: "Flexible adjustments" },
          { description: "Year-round support" }
        ],
        buttonText: "Create Plan"
      }
    ],
    ServiceText: {
      title: "Landscaping Maintenance in Nebraska",
      description: "Prepare and maintain your yard for Nebraska’s windy seasons.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "nebraska-landscaping-maintenance",
      locationSlug: "nebraska",
      serviceSlug: "landscaping-maintenance"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991642/What-Sets-Our-Landscaping-Apart-from-the-Rest_libm4l.jpg",
      finalCta: "Maintain Your Landscapes Charm",
      finalCtaDescription: "Rely on Nebraska’s best for consistent care.",
      buttonText: "Maintain Now"
    }
  },
  {
    id: "nebraska-shrub-care",
    slug: "nebraska-shrub-care",
    title: "Shrub Care in Nebraska",
    heroTitle: "Nurture Your Shrubs in Nebraska",
    heroSubtitle: "Expert shrub care to enhance your Nebraska landscape.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Wind Season Pruning",
        description: "Protect shrubs from Nebraska’s wind with expert pruning.",
        featuresArray: [
          { description: "Wind protection" },
          { description: "Deadwood removal" },
          { description: "Shape maintenance" },
          { description: "Growth support" }
        ],
        buttonText: "Prune Shrubs"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Health Treatments",
        description: "Keep shrubs healthy with Nebraska-specific care.",
        featuresArray: [
          { description: "Pest control" },
          { description: "Disease prevention" },
          { description: "Nutrient feeding" },
          { description: "Health checks" }
        ],
        buttonText: "Treat Shrubs"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "New Installations",
        description: "Add vibrant shrubs to your Nebraska yard.",
        featuresArray: [
          { description: "Site selection" },
          { description: "Planting" },
          { description: "Soil prep" },
          { description: "Initial care" }
        ],
        buttonText: "Install Shrubs"
      }
    ],
    ServiceText: {
      title: "Shrub Care in Nebraska",
      description: "Protect shrubs from Nebraska’s wind with expert pruning.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "nebraska-shrub-care",
      locationSlug: "nebraska",
      serviceSlug: "shrub-care"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991778/5-4_iqydyj.jpg",
      finalCta: "Beautiful Shrubs for Your Yard",
      finalCtaDescription: "Let our Nebraska team care for your shrubs.",
      buttonText: "Start Shrub Care"
    }
  },
  {
    id: "nebraska-lawn-seeding",
    slug: "nebraska-lawn-seeding",
    title: "Lawn Seeding in Nebraska",
    heroTitle: "Grow a Lush Lawn in Nebraska",
    heroSubtitle: "Revitalize your lawn with expert seeding in Nebraska.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Spring Overseeding",
        description: "Thicken your lawn with Nebraska-friendly seeding.",
        featuresArray: [
          { description: "Wind-resistant seeds" },
          { description: "Even spread" },
          { description: "Soil prep" },
          { description: "Post-care" }
        ],
        buttonText: "Overseed Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "New Lawn Seeding",
        description: "Start a fresh lawn in Nebraska’s climate.",
        featuresArray: [
          { description: "Site clearing" },
          { description: "Soil enrichment" },
          { description: "Seed application" },
          { description: "Growth tracking" }
        ],
        buttonText: "New Lawn Start"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Seeding Benefits",
        description: "Enjoy a denser lawn with Nebraska expertise.",
        featuresArray: [
          { description: "Improved density" },
          { description: "Weed resistance" },
          { description: "Rich color" },
          { description: "Long-term growth" }
        ],
        buttonText: "Seed My Lawn"
      }
    ],
    ServiceText: {
      title: "Lawn Seeding in Nebraska",
      description: "Thicken your lawn with Nebraska-friendly seeding.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "nebraska-lawn-seeding",
      locationSlug: "nebraska",
      serviceSlug: "lawn-seeding"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991732/3-3_h3mwot.jpg",
      finalCta: "Grow a Greener Lawn",
      finalCtaDescription: "Trust Nebraska’s seeding experts for a thriving yard.",
      buttonText: "Begin Seeding"
    }
  },
  {
    id: "nebraska-lawn-aeration",
    slug: "nebraska-lawn-aeration",
    title: "Lawn Aeration in Nebraska",
    heroTitle: "Breathe Life into Your Lawn in Nebraska",
    heroSubtitle: "Improve lawn health with aeration services in Nebraska.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "Core Aeration",
        description: "Enhance root growth in Nebraska’s soil.",
        featuresArray: [
          { description: "Soil loosening" },
          { description: "Air access" },
          { description: "Nutrient flow" },
          { description: "Water retention" }
        ],
        buttonText: "Aerate My Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Benefits of Aeration",
        description: "Boost your lawn’s health with aeration.",
        featuresArray: [
          { description: "Stronger roots" },
          { description: "Reduced compaction" },
          { description: "Better drainage" },
          { description: "Enhanced growth" }
        ],
        buttonText: "Boost Health"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991794/7-5_opmjoc.jpg",
        title: "Expert Service",
        description: "Trust Nebraska’s pros for top aeration.",
        featuresArray: [
          { description: "Certified team" },
          { description: "Modern tools" },
          { description: "Timely work" },
          { description: "Follow-up care" }
        ],
        buttonText: "Hire Experts"
      }
    ],
    ServiceText: {
      title: "Lawn Aeration in Nebraska",
      description: "Enhance root growth in Nebraska’s soil.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "nebraska-lawn-aeration",
      locationSlug: "nebraska",
      serviceSlug: "lawn-aeration"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991726/2-3_xk4men.jpg",
      finalCta: "Aerate for a Healthier Lawn",
      finalCtaDescription: "Let our Nebraska team aerate your lawn.",
      buttonText: "Start Aeration"
    }
  },
  {
    id: "nebraska-lawn-mosquito-control",
    slug: "nebraska-lawn-mosquito-control",
    title: "Lawn Mosquito Control in Nebraska",
    heroTitle: "Enjoy a Mosquito-Free Yard in Nebraska",
    heroSubtitle: "Protect your family with effective mosquito control in Nebraska.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Mosquito Treatment",
        description: "Eliminate mosquitoes with targeted plans for Nebraska.",
        featuresArray: [
          { description: "Barrier spraying" },
          { description: "Larval control" },
          { description: "Safe chemicals" },
          { description: "Regular applications" }
        ],
        buttonText: "Treat Mosquitoes"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991794/7-5_opmjoc.jpg",
        title: "Prevention Strategies",
        description: "Keep mosquitoes away with proactive Nebraska measures.",
        featuresArray: [
          { description: "Standing water removal" },
          { description: "Plant management" },
          { description: "Habitat reduction" },
          { description: "Seasonal planning" }
        ],
        buttonText: "Prevent Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991804/8-3_rdingb.jpg",
        title: "Safe Control Methods",
        description: "Enjoy peace of mind with eco-friendly control in Nebraska.",
        featuresArray: [
          { description: "Pet-safe treatments" },
          { description: "Family-friendly" },
          { description: "Certified applicators" },
          { description: "Effective results" }
        ],
        buttonText: "Control Safely"
      }
    ],
    ServiceText: {
      title: "Lawn Mosquito Control in Nebraska",
      description: "Eliminate mosquitoes with targeted plans for Nebraska.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "nebraska-lawn-mosquito-control",
      locationSlug: "nebraska",
      serviceSlug: "lawn-mosquito-control"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
      finalCta: "Reclaim Your Outdoor Space",
      finalCtaDescription: "Let Nebraska’s mosquito control experts protect your yard.",
      buttonText: "Start Control"
    }
  },
  {
    id: "indiana-lawn-care-services",
    slug: "indiana-lawn-care-services",
    title: "Lawn Care Services in Indiana",
    heroTitle: "Transform Your Yard into a Hoosier Haven in Indiana",
    heroSubtitle: "Fast, affordable lawn care and landscaping — all managed by local Indiana experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991819/Cancun-1-GT-scaled_ie7dhs.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991825/Cancun-2-GT-scaled_dtyjqf.jpg",
        title: "Humid Season Lawn Care",
        description: "Maintain a healthy lawn during Indiana’s humid summers with our expert care.",
        featuresArray: [
          { description: "Humidity control" },
          { description: "Seasonal fertilization" },
          { description: "Warm weather grass care" },
          { description: "Soil drainage" }
        ],
        buttonText: "Start Humid Care"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
        title: "Spring Lawn Recovery",
        description: "Revive your lawn after winter with our specialized recovery services.",
        featuresArray: [
          { description: "Thatch removal" },
          { description: "Early seeding" },
          { description: "Soil aeration" },
          { description: "Nutrient boost" }
        ],
        buttonText: "Recover My Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Year-Round Maintenance",
        description: "Keep your Indiana lawn thriving with consistent care.",
        featuresArray: [
          { description: "Seasonal treatments" },
          { description: "Weed control" },
          { description: "Pest management" },
          { description: "Regular mowing" }
        ],
        buttonText: "Maintain Year-Round"
      }
    ],
    ServiceText: {
      title: "Lawn Care Services in Indiana",
      description: "Maintain a healthy lawn during Indiana’s humid summers with our expert care.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "indiana-lawn-care-services",
      locationSlug: "indiana",
      serviceSlug: "lawn-care-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991642/What-Sets-Our-Landscaping-Apart-from-the-Rest_libm4l.jpg",
      finalCta: "Lets Make Your Lawn the Best in Indiana",
      finalCtaDescription: "With expert care and eco-safe treatments, well help your lawn thrive all year long.",
      buttonText: "Refresh Your Lawn"
    }
  },
  {
    id: "indiana-lawn-mowing",
    slug: "indiana-lawn-mowing",
    title: "Lawn Mowing in Indiana",
    heroTitle: "Keep Your Lawn Pristine with Mowing in Indiana",
    heroSubtitle: "Reliable mowing services by local Indiana experts to maintain your yard.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991825/Cancun-2-GT-scaled_dtyjqf.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
        title: "Seasonal Mowing Adjustments",
        description: "Tailored mowing for Indiana’s changing seasons.",
        featuresArray: [
          { description: "Spring growth cuts" },
          { description: "Summer height management" },
          { description: "Fall cleanup mowing" },
          { description: "Winter prep trimming" }
        ],
        buttonText: "Schedule Mowing"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Precision Cutting",
        description: "Achieve a perfect lawn with our precise mowing techniques.",
        featuresArray: [
          { description: "Adjustable blade heights" },
          { description: "Edge trimming" },
          { description: "Grass clipping removal" },
          { description: "Even cuts" }
        ],
        buttonText: "Get Precision Cuts"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Eco-Friendly Mowing",
        description: "Sustainable mowing options for a greener Indiana lawn.",
        featuresArray: [
          { description: "Electric mowers" },
          { description: "Reduced emissions" },
          { description: "Organic waste reuse" },
          { description: "Expert handling" }
        ],
        buttonText: "Go Green"
      }
    ],
    ServiceText: {
      title: "Lawn Mowing in Indiana",
      description: "Tailored mowing for Indiana’s changing seasons.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "indiana-lawn-mowing",
      locationSlug: "indiana",
      serviceSlug: "lawn-mowing"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
      finalCta: "Transform Your Lawn with Expert Mowing",
      finalCtaDescription: "Let our Indiana mowing experts keep your lawn looking its best.",
      buttonText: "Book Your Mowing"
    }
  },
  {
    id: "indiana-sprinkler-installation-repair",
    slug: "indiana-sprinkler-installation-repair",
    title: "Sprinkler Installation & Repair in Indiana",
    heroTitle: "Efficient Sprinkler Solutions for Your Indiana Yard",
    heroSubtitle: "Expert sprinkler services by Indiana professionals to keep your lawn hydrated.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Humid-Ready Installation",
        description: "Install sprinklers designed for Indiana’s humid climate.",
        featuresArray: [
          { description: "Humidity-tolerant systems" },
          { description: "Custom layouts" },
          { description: "Efficient water use" },
          { description: "Professional setup" }
        ],
        buttonText: "Install Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Quick Repair Services",
        description: "Fix sprinkler issues fast with our Indiana repair team.",
        featuresArray: [
          { description: "Leak repairs" },
          { description: "Head replacements" },
          { description: "Pressure fixes" },
          { description: "System diagnostics" }
        ],
        buttonText: "Repair My System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Seasonal Maintenance",
        description: "Keep your sprinklers ready for Indiana’s seasons.",
        featuresArray: [
          { description: "Winterization" },
          { description: "Spring startup" },
          { description: "Summer checks" },
          { description: "Fall prep" }
        ],
        buttonText: "Maintain System"
      }
    ],
    ServiceText: {
      title: "Sprinkler Installation & Repair in Indiana",
      description: "Install sprinklers designed for Indiana’s humid climate.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "indiana-sprinkler-installation-repair",
      locationSlug: "indiana",
      serviceSlug: "sprinkler-installation-repair"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991900/Your-One-Stop-Sprinkler-Solution_u3ghig.jpg",
      finalCta: "Keep Your Lawn Green with Sprinkler Care",
      finalCtaDescription: "Trust our Indiana experts for top-tier sprinkler services.",
      buttonText: "Get Sprinkler Help"
    }
  },
  {
    id: "indiana-lawn-sprinkler-installation",
    slug: "indiana-lawn-sprinkler-installation",
    title: "Lawn Sprinkler Installation in Indiana",
    heroTitle: "Perfect Watering with New Sprinklers in Indiana",
    heroSubtitle: "Install advanced sprinkler systems with Indiana’s top experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Custom Design",
        description: "Tailored sprinkler systems for your Indiana lawn.",
        featuresArray: [
          { description: "Site evaluation" },
          { description: "Custom design" },
          { description: "Water efficiency" },
          { description: "Expert installation" }
        ],
        buttonText: "Design System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Humid-Ready Systems",
        description: "Install sprinklers built for Indiana’s climate.",
        featuresArray: [
          { description: "Humidity resistance" },
          { description: "Durable materials" },
          { description: "Smart controls" },
          { description: "Longevity" }
        ],
        buttonText: "Install Humid System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Professional Team",
        description: "Rely on Indiana’s best for seamless installation.",
        featuresArray: [
          { description: "Certified installers" },
          { description: "Quality equipment" },
          { description: "Timely service" },
          { description: "Warranty support" }
        ],
        buttonText: "Hire Team"
      }
    ],
    ServiceText: {
      title: "Lawn Sprinkler Installation in Indiana",
      description: "Tailored sprinkler systems for your Indiana lawn.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "indiana-lawn-sprinkler-installation",
      locationSlug: "indiana",
      serviceSlug: "lawn-sprinkler-installation"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991900/Your-One-Stop-Sprinkler-Solution_u3ghig.jpg",
      finalCta: "Install a Sprinkler System Today",
      finalCtaDescription: "Enhance your Indiana lawn with professional installation.",
      buttonText: "Start Installation"
    }
  },
  {
    id: "indiana-landscaping-services",
    slug: "indiana-landscaping-services",
    title: "Landscaping Services in Indiana",
    heroTitle: "Create Your Dream Yard in Indiana",
    heroSubtitle: "Transform your outdoor space with Indiana landscaping experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Custom Landscapes",
        description: "Design a unique yard tailored to Indiana’s climate.",
        featuresArray: [
          { description: "Personalized plans" },
          { description: "Plant selection" },
          { description: "Hardscape design" },
          { description: "3D previews" }
        ],
        buttonText: "Design My Yard"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Full Project Management",
        description: "Handle every step of your landscaping project.",
        featuresArray: [
          { description: "Site prep" },
          { description: "Planting" },
          { description: "Construction" },
          { description: "Final cleanup" }
        ],
        buttonText: "Manage Project"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Humid-Climate Solutions",
        description: "Eco-friendly landscaping for Indiana’s weather.",
        featuresArray: [
          { description: "Native plants" },
          { description: "Humidity management" },
          { description: "Drainage techniques" },
          { description: "Sustainable design" }
        ],
        buttonText: "Go Eco-Friendly"
      }
    ],
    ServiceText: {
      title: "Landscaping Services in Indiana",
      description: "Design a unique yard tailored to Indiana’s climate.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "indiana-landscaping-services",
      locationSlug: "indiana",
      serviceSlug: "landscaping-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Complete-Solutions-for-Stunning-Landscapes_amu5ss.jpg",
      finalCta: "Elevate Your Outdoor Living",
      finalCtaDescription: "Let our Indiana experts turn your vision into reality.",
      buttonText: "Transform My Yard"
    }
  },
  {
    id: "indiana-lawn-health",
    slug: "indiana-lawn-health",
    title: "Lawn Health in Indiana",
    heroTitle: "Revitalize Your Lawn in Indiana",
    heroSubtitle: "Boost your lawn’s vitality with expert care in Indiana.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Humid Season Health Check",
        description: "Assess and protect your lawn during Indiana’s humid summers.",
        featuresArray: [
          { description: "Soil testing" },
          { description: "Moisture damage check" },
          { description: "Nutrient analysis" },
          { description: "Health report" }
        ],
        buttonText: "Check Health"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Recovery Treatments",
        description: "Restore your lawn with specialized Indiana care.",
        featuresArray: [
          { description: "Spring fertilization" },
          { description: "Weed control" },
          { description: "Disease treatment" },
          { description: "Moisture management" }
        ],
        buttonText: "Restore Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Ongoing Care",
        description: "Maintain lawn health with regular Indiana services.",
        featuresArray: [
          { description: "Monthly visits" },
          { description: "Seasonal treatments" },
          { description: "Pest prevention" },
          { description: "Expert tips" }
        ],
        buttonText: "Maintain Care"
      }
    ],
    ServiceText: {
      title: "Lawn Health in Indiana",
      description: "Assess and protect your lawn during Indiana’s humid summers.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "indiana-lawn-health",
      locationSlug: "indiana",
      serviceSlug: "lawn-health"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
      finalCta: "Healthy Lawns Start Here",
      finalCtaDescription: "Trust Indiana’s experts to keep your lawn thriving.",
      buttonText: "Improve My Lawn"
    }
  },
  {
    id: "indiana-tree-services",
    slug: "indiana-tree-services",
    title: "Tree Services in Indiana",
    heroTitle: "Enhance Your Trees in Indiana",
    heroSubtitle: "Professional tree care to beautify your Indiana property.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Humid Season Pruning",
        description: "Protect and shape trees during Indiana’s humid summers.",
        featuresArray: [
          { description: "Moisture stress pruning" },
          { description: "Dead branch removal" },
          { description: "Shape maintenance" },
          { description: "Growth support" }
        ],
        buttonText: "Prune Trees"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Tree Removal",
        description: "Safely remove hazardous trees in Indiana.",
        featuresArray: [
          { description: "Risk assessment" },
          { description: "Safe removal" },
          { description: "Stump grinding" },
          { description: "Site cleanup" }
        ],
        buttonText: "Remove Trees"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Tree Health",
        description: "Nourish and protect your trees for Indiana’s climate.",
        featuresArray: [
          { description: "Disease control" },
          { description: "Pest management" },
          { description: "Fertilization" },
          { description: "Health monitoring" }
        ],
        buttonText: "Care for Trees"
      }
    ],
    ServiceText: {
      title: "Tree Services in Indiana",
      description: "Protect and shape trees during Indiana’s humid summers.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "indiana-tree-services",
      locationSlug: "indiana",
      serviceSlug: "tree-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991754/4-2_is52jw.jpg",
      finalCta: "Perfect Trees for Your Yard",
      finalCtaDescription: "Let our Indiana tree experts enhance your landscape.",
      buttonText: "Start Tree Care"
    }
  },
  {
    id: "indiana-landscaping-maintenance",
    slug: "indiana-landscaping-maintenance",
    title: "Landscaping Maintenance in Indiana",
    heroTitle: "Sustain Your Landscape in Indiana",
    heroSubtitle: "Ongoing care to keep your Indiana yard pristine.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Humid Season Maintenance",
        description: "Prepare and maintain your yard for Indiana’s humid summers.",
        featuresArray: [
          { description: "Moisture management" },
          { description: "Debris removal" },
          { description: "Plant protection" },
          { description: "Drainage checks" }
        ],
        buttonText: "Humid Plan"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Seasonal Upkeep",
        description: "Adapt maintenance for Indiana’s seasons.",
        featuresArray: [
          { description: "Spring cleanup" },
          { description: "Summer trimming" },
          { description: "Fall prep" },
          { description: "Winter care" }
        ],
        buttonText: "Seasonal Care"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Custom Plans",
        description: "Tailored maintenance for your Indiana landscape.",
        featuresArray: [
          { description: "Personalized schedules" },
          { description: "Expert supervision" },
          { description: "Flexible adjustments" },
          { description: "Year-round support" }
        ],
        buttonText: "Create Plan"
      }
    ],
    ServiceText: {
      title: "Landscaping Maintenance in Indiana",
      description: "Prepare and maintain your yard for Indiana’s humid summers.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "indiana-landscaping-maintenance",
      locationSlug: "indiana",
      serviceSlug: "landscaping-maintenance"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991642/What-Sets-Our-Landscaping-Apart-from-the-Rest_libm4l.jpg",
      finalCta: "Maintain Your Landscapes Charm",
      finalCtaDescription: "Rely on Indiana’s best for consistent care.",
      buttonText: "Maintain Now"
    }
  },
  {
    id: "indiana-shrub-care",
    slug: "indiana-shrub-care",
    title: "Shrub Care in Indiana",
    heroTitle: "Nurture Your Shrubs in Indiana",
    heroSubtitle: "Expert shrub care to enhance your Indiana landscape.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Humid Season Pruning",
        description: "Protect shrubs from Indiana’s humidity with expert pruning.",
        featuresArray: [
          { description: "Moisture protection" },
          { description: "Deadwood removal" },
          { description: "Shape maintenance" },
          { description: "Growth support" }
        ],
        buttonText: "Prune Shrubs"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Health Treatments",
        description: "Keep shrubs healthy with Indiana-specific care.",
        featuresArray: [
          { description: "Pest control" },
          { description: "Disease prevention" },
          { description: "Nutrient feeding" },
          { description: "Health checks" }
        ],
        buttonText: "Treat Shrubs"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "New Installations",
        description: "Add vibrant shrubs to your Indiana yard.",
        featuresArray: [
          { description: "Site selection" },
          { description: "Planting" },
          { description: "Soil prep" },
          { description: "Initial care" }
        ],
        buttonText: "Install Shrubs"
      }
    ],
    ServiceText: {
      title: "Shrub Care in Indiana",
      description: "Protect shrubs from Indiana’s humidity with expert pruning.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "indiana-shrub-care",
      locationSlug: "indiana",
      serviceSlug: "shrub-care"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991778/5-4_iqydyj.jpg",
      finalCta: "Beautiful Shrubs for Your Yard",
      finalCtaDescription: "Let our Indiana team care for your shrubs.",
      buttonText: "Start Shrub Care"
    }
  },
  {
    id: "indiana-lawn-seeding",
    slug: "indiana-lawn-seeding",
    title: "Lawn Seeding in Indiana",
    heroTitle: "Grow a Lush Lawn in Indiana",
    heroSubtitle: "Revitalize your lawn with expert seeding in Indiana.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Spring Overseeding",
        description: "Thicken your lawn with Indiana-friendly seeding.",
        featuresArray: [
          { description: "Humidity-resistant seeds" },
          { description: "Even spread" },
          { description: "Soil prep" },
          { description: "Post-care" }
        ],
        buttonText: "Overseed Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "New Lawn Seeding",
        description: "Start a fresh lawn in Indiana’s climate.",
        featuresArray: [
          { description: "Site clearing" },
          { description: "Soil enrichment" },
          { description: "Seed application" },
          { description: "Growth tracking" }
        ],
        buttonText: "New Lawn Start"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Seeding Benefits",
        description: "Enjoy a denser lawn with Indiana expertise.",
        featuresArray: [
          { description: "Improved density" },
          { description: "Weed resistance" },
          { description: "Rich color" },
          { description: "Long-term growth" }
        ],
        buttonText: "Seed My Lawn"
      }
    ],
    ServiceText: {
      title: "Lawn Seeding in Indiana",
      description: "Thicken your lawn with Indiana-friendly seeding.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "indiana-lawn-seeding",
      locationSlug: "indiana",
      serviceSlug: "lawn-seeding"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991732/3-3_h3mwot.jpg",
      finalCta: "Grow a Greener Lawn",
      finalCtaDescription: "Trust Indiana’s seeding experts for a thriving yard.",
      buttonText: "Begin Seeding"
    }
  },
  {
    id: "indiana-lawn-aeration",
    slug: "indiana-lawn-aeration",
    title: "Lawn Aeration in Indiana",
    heroTitle: "Breathe Life into Your Lawn in Indiana",
    heroSubtitle: "Improve lawn health with aeration services in Indiana.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "Core Aeration",
        description: "Enhance root growth in Indiana’s soil.",
        featuresArray: [
          { description: "Soil loosening" },
          { description: "Air access" },
          { description: "Nutrient flow" },
          { description: "Water retention" }
        ],
        buttonText: "Aerate My Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Benefits of Aeration",
        description: "Boost your lawn’s health with aeration.",
        featuresArray: [
          { description: "Stronger roots" },
          { description: "Reduced compaction" },
          { description: "Better drainage" },
          { description: "Enhanced growth" }
        ],
        buttonText: "Boost Health"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991794/7-5_opmjoc.jpg",
        title: "Expert Service",
        description: "Trust Indiana’s pros for top aeration.",
        featuresArray: [
          { description: "Certified team" },
          { description: "Modern tools" },
          { description: "Timely work" },
          { description: "Follow-up care" }
        ],
        buttonText: "Hire Experts"
      }
    ],
    ServiceText: {
      title: "Lawn Aeration in Indiana",
      description: "Enhance root growth in Indiana’s soil.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "indiana-lawn-aeration",
      locationSlug: "indiana",
      serviceSlug: "lawn-aeration"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991726/2-3_xk4men.jpg",
      finalCta: "Aerate for a Healthier Lawn",
      finalCtaDescription: "Let our Indiana team aerate your lawn.",
      buttonText: "Start Aeration"
    }
  },
  {
    id: "indiana-lawn-mosquito-control",
    slug: "indiana-lawn-mosquito-control",
    title: "Lawn Mosquito Control in Indiana",
    heroTitle: "Enjoy a Mosquito-Free Yard in Indiana",
    heroSubtitle: "Protect your family with effective mosquito control in Indiana.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Mosquito Treatment",
        description: "Eliminate mosquitoes with targeted plans for Indiana.",
        featuresArray: [
          { description: "Barrier spraying" },
          { description: "Larval control" },
          { description: "Safe chemicals" },
          { description: "Regular applications" }
        ],
        buttonText: "Treat Mosquitoes"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991794/7-5_opmjoc.jpg",
        title: "Prevention Strategies",
        description: "Keep mosquitoes away with proactive Indiana measures.",
        featuresArray: [
          { description: "Standing water removal" },
          { description: "Plant management" },
          { description: "Habitat reduction" },
          { description: "Seasonal planning" }
        ],
        buttonText: "Prevent Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991804/8-3_rdingb.jpg",
        title: "Safe Control Methods",
        description: "Enjoy peace of mind with eco-friendly control in Indiana.",
        featuresArray: [
          { description: "Pet-safe treatments" },
          { description: "Family-friendly" },
          { description: "Certified applicators" },
          { description: "Effective results" }
        ],
        buttonText: "Control Safely"
      }
    ],
    ServiceText: {
      title: "Lawn Mosquito Control in Indiana",
      description: "Eliminate mosquitoes with targeted plans for Indiana.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "indiana-lawn-mosquito-control",
      locationSlug: "indiana",
      serviceSlug: "lawn-mosquito-control"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
      finalCta: "Reclaim Your Outdoor Space",
      finalCtaDescription: "Let Indiana’s mosquito control experts protect your yard.",
      buttonText: "Start Control"
    }
  },
  {
    id: "delaware-lawn-care-services",
    slug: "delaware-lawn-care-services",
    title: "Lawn Care Services in Delaware",
    heroTitle: "Transform Your Yard into a Coastal Gem in Delaware",
    heroSubtitle: "Fast, affordable lawn care and landscaping — all managed by local Delaware experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991819/Cancun-1-GT-scaled_ie7dhs.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991825/Cancun-2-GT-scaled_dtyjqf.jpg",
        title: "Coastal Season Lawn Care",
        description: "Maintain a healthy lawn during Delaware’s coastal seasons with our expert care.",
        featuresArray: [
          { description: "Salt tolerance" },
          { description: "Seasonal fertilization" },
          { description: "Coastal grass care" },
          { description: "Soil drainage" }
        ],
        buttonText: "Start Coastal Care"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
        title: "Spring Lawn Recovery",
        description: "Revive your lawn after winter with our specialized recovery services.",
        featuresArray: [
          { description: "Thatch removal" },
          { description: "Early seeding" },
          { description: "Soil aeration" },
          { description: "Nutrient boost" }
        ],
        buttonText: "Recover My Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Year-Round Maintenance",
        description: "Keep your Delaware lawn thriving with consistent care.",
        featuresArray: [
          { description: "Seasonal treatments" },
          { description: "Weed control" },
          { description: "Pest management" },
          { description: "Regular mowing" }
        ],
        buttonText: "Maintain Year-Round"
      }
    ],
    ServiceText: {
      title: "Lawn Care Services in Delaware",
      description: "Maintain a healthy lawn during Delaware’s coastal seasons with our expert care.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "delaware-lawn-care-services",
      locationSlug: "delaware",
      serviceSlug: "lawn-care-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991642/What-Sets-Our-Landscaping-Apart-from-the-Rest_libm4l.jpg",
      finalCta: "Lets Make Your Lawn the Best in Delaware",
      finalCtaDescription: "With expert care and eco-safe treatments, well help your lawn thrive all year long.",
      buttonText: "Refresh Your Lawn"
    }
  },
  {
    id: "delaware-lawn-mowing",
    slug: "delaware-lawn-mowing",
    title: "Lawn Mowing in Delaware",
    heroTitle: "Keep Your Lawn Pristine with Mowing in Delaware",
    heroSubtitle: "Reliable mowing services by local Delaware experts to maintain your yard.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991825/Cancun-2-GT-scaled_dtyjqf.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
        title: "Seasonal Mowing Adjustments",
        description: "Tailored mowing for Delaware’s changing seasons.",
        featuresArray: [
          { description: "Spring growth cuts" },
          { description: "Summer height management" },
          { description: "Fall cleanup mowing" },
          { description: "Winter prep trimming" }
        ],
        buttonText: "Schedule Mowing"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Precision Cutting",
        description: "Achieve a perfect lawn with our precise mowing techniques.",
        featuresArray: [
          { description: "Adjustable blade heights" },
          { description: "Edge trimming" },
          { description: "Grass clipping removal" },
          { description: "Even cuts" }
        ],
        buttonText: "Get Precision Cuts"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Eco-Friendly Mowing",
        description: "Sustainable mowing options for a greener Delaware lawn.",
        featuresArray: [
          { description: "Electric mowers" },
          { description: "Reduced emissions" },
          { description: "Organic waste reuse" },
          { description: "Expert handling" }
        ],
        buttonText: "Go Green"
      }
    ],
    ServiceText: {
      title: "Lawn Mowing in Delaware",
      description: "Tailored mowing for Delaware’s changing seasons.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "delaware-lawn-mowing",
      locationSlug: "delaware",
      serviceSlug: "lawn-mowing"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
      finalCta: "Transform Your Lawn with Expert Mowing",
      finalCtaDescription: "Let our Delaware mowing experts keep your lawn looking its best.",
      buttonText: "Book Your Mowing"
    }
  },
  {
    id: "delaware-sprinkler-installation-repair",
    slug: "delaware-sprinkler-installation-repair",
    title: "Sprinkler Installation & Repair in Delaware",
    heroTitle: "Efficient Sprinkler Solutions for Your Delaware Yard",
    heroSubtitle: "Expert sprinkler services by Delaware professionals to keep your lawn hydrated.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
        title: "Coastal-Ready Installation",
        description: "Install sprinklers designed for Delaware’s coastal climate.",
        featuresArray: [
          { description: "Salt-tolerant systems" },
          { description: "Custom layouts" },
          { description: "Efficient water use" },
          { description: "Professional setup" }
        ],
        buttonText: "Install Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Quick Repair Services",
        description: "Fix sprinkler issues fast with our Delaware repair team.",
        featuresArray: [
          { description: "Leak repairs" },
          { description: "Head replacements" },
          { description: "Pressure fixes" },
          { description: "System diagnostics" }
        ],
        buttonText: "Repair My System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Seasonal Maintenance",
        description: "Keep your sprinklers ready for Delaware’s seasons.",
        featuresArray: [
          { description: "Winterization" },
          { description: "Spring startup" },
          { description: "Summer checks" },
          { description: "Fall prep" }
        ],
        buttonText: "Maintain System"
      }
    ],
    ServiceText: {
      title: "Sprinkler Installation & Repair in Delaware",
      description: "Install sprinklers designed for Delaware’s coastal climate.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "delaware-sprinkler-installation-repair",
      locationSlug: "delaware",
      serviceSlug: "sprinkler-installation-repair"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991900/Your-One-Stop-Sprinkler-Solution_u3ghig.jpg",
      finalCta: "Keep Your Lawn Green with Sprinkler Care",
      finalCtaDescription: "Trust our Delaware experts for top-tier sprinkler services.",
      buttonText: "Get Sprinkler Help"
    }
  },
  {
    id: "delaware-lawn-sprinkler-installation",
    slug: "delaware-lawn-sprinkler-installation",
    title: "Lawn Sprinkler Installation in Delaware",
    heroTitle: "Perfect Watering with New Sprinklers in Delaware",
    heroSubtitle: "Install advanced sprinkler systems with Delaware’s top experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
        title: "Custom Design",
        description: "Tailored sprinkler systems for your Delaware lawn.",
        featuresArray: [
          { description: "Site evaluation" },
          { description: "Custom design" },
          { description: "Water efficiency" },
          { description: "Expert installation" }
        ],
        buttonText: "Design System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Coastal-Ready Systems",
        description: "Install sprinklers built for Delaware’s climate.",
        featuresArray: [
          { description: "Salt resistance" },
          { description: "Durable materials" },
          { description: "Smart controls" },
          { description: "Longevity" }
        ],
        buttonText: "Install Coastal System"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Professional Team",
        description: "Rely on Delaware’s best for seamless installation.",
        featuresArray: [
          { description: "Certified installers" },
          { description: "Quality equipment" },
          { description: "Timely service" },
          { description: "Warranty support" }
        ],
        buttonText: "Hire Team"
      }
    ],
    ServiceText: {
      title: "Lawn Sprinkler Installation in Delaware",
      description: "Tailored sprinkler systems for your Delaware lawn.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "delaware-lawn-sprinkler-installation",
      locationSlug: "delaware",
      serviceSlug: "lawn-sprinkler-installation"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991900/Your-One-Stop-Sprinkler-Solution_u3ghig.jpg",
      finalCta: "Install a Sprinkler System Today",
      finalCtaDescription: "Enhance your Delaware lawn with professional installation.",
      buttonText: "Start Installation"
    }
  },
  {
    id: "delaware-landscaping-services",
    slug: "delaware-landscaping-services",
    title: "Landscaping Services in Delaware",
    heroTitle: "Create Your Dream Yard in Delaware",
    heroSubtitle: "Transform your outdoor space with Delaware landscaping experts.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
        title: "Custom Landscapes",
        description: "Design a unique yard tailored to Delaware’s climate.",
        featuresArray: [
          { description: "Personalized plans" },
          { description: "Plant selection" },
          { description: "Hardscape design" },
          { description: "3D previews" }
        ],
        buttonText: "Design My Yard"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Full Project Management",
        description: "Handle every step of your landscaping project.",
        featuresArray: [
          { description: "Site prep" },
          { description: "Planting" },
          { description: "Construction" },
          { description: "Final cleanup" }
        ],
        buttonText: "Manage Project"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Coastal-Climate Solutions",
        description: "Eco-friendly landscaping for Delaware’s weather.",
        featuresArray: [
          { description: "Native plants" },
          { description: "Salt tolerance" },
          { description: "Erosion control" },
          { description: "Sustainable design" }
        ],
        buttonText: "Go Eco-Friendly"
      }
    ],
    ServiceText: {
      title: "Landscaping Services in Delaware",
      description: "Design a unique yard tailored to Delaware’s climate.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "delaware-landscaping-services",
      locationSlug: "delaware",
      serviceSlug: "landscaping-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Complete-Solutions-for-Stunning-Landscapes_amu5ss.jpg",
      finalCta: "Elevate Your Outdoor Living",
      finalCtaDescription: "Let our Delaware experts turn your vision into reality.",
      buttonText: "Transform My Yard"
    }
  },
  {
    id: "delaware-lawn-health",
    slug: "delaware-lawn-health",
    title: "Lawn Health in Delaware",
    heroTitle: "Revitalize Your Lawn in Delaware",
    heroSubtitle: "Boost your lawn’s vitality with expert care in Delaware.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
        title: "Coastal Season Health Check",
        description: "Assess and protect your lawn during Delaware’s coastal seasons.",
        featuresArray: [
          { description: "Soil testing" },
          { description: "Salt damage check" },
          { description: "Nutrient analysis" },
          { description: "Health report" }
        ],
        buttonText: "Check Health"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Recovery Treatments",
        description: "Restore your lawn with specialized Delaware care.",
        featuresArray: [
          { description: "Spring fertilization" },
          { description: "Weed control" },
          { description: "Disease treatment" },
          { description: "Moisture management" }
        ],
        buttonText: "Restore Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Ongoing Care",
        description: "Maintain lawn health with regular Delaware services.",
        featuresArray: [
          { description: "Monthly visits" },
          { description: "Seasonal treatments" },
          { description: "Pest prevention" },
          { description: "Expert tips" }
        ],
        buttonText: "Maintain Care"
      }
    ],
    ServiceText: {
      title: "Lawn Health in Delaware",
      description: "Assess and protect your lawn during Delaware’s coastal seasons.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "delaware-lawn-health",
      locationSlug: "delaware",
      serviceSlug: "lawn-health"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
      finalCta: "Healthy Lawns Start Here",
      finalCtaDescription: "Trust Delaware’s experts to keep your lawn thriving.",
      buttonText: "Improve My Lawn"
    }
  },
  {
    id: "delaware-tree-services",
    slug: "delaware-tree-services",
    title: "Tree Services in Delaware",
    heroTitle: "Enhance Your Trees in Delaware",
    heroSubtitle: "Professional tree care to beautify your Delaware property.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
        title: "Coastal Season Pruning",
        description: "Protect and shape trees during Delaware’s coastal seasons.",
        featuresArray: [
          { description: "Salt spray pruning" },
          { description: "Dead branch removal" },
          { description: "Shape maintenance" },
          { description: "Growth support" }
        ],
        buttonText: "Prune Trees"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Tree Removal",
        description: "Safely remove hazardous trees in Delaware.",
        featuresArray: [
          { description: "Risk assessment" },
          { description: "Safe removal" },
          { description: "Stump grinding" },
          { description: "Site cleanup" }
        ],
        buttonText: "Remove Trees"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Tree Health",
        description: "Nourish and protect your trees for Delaware’s climate.",
        featuresArray: [
          { description: "Disease control" },
          { description: "Pest management" },
          { description: "Fertilization" },
          { description: "Health monitoring" }
        ],
        buttonText: "Care for Trees"
      }
    ],
    ServiceText: {
      title: "Tree Services in Delaware",
      description: "Protect and shape trees during Delaware’s coastal seasons.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "delaware-tree-services",
      locationSlug: "delaware",
      serviceSlug: "tree-services"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991754/4-2_is52jw.jpg",
      finalCta: "Perfect Trees for Your Yard",
      finalCtaDescription: "Let our Delaware tree experts enhance your landscape.",
      buttonText: "Start Tree Care"
    }
  },
  {
    id: "delaware-landscaping-maintenance",
    slug: "delaware-landscaping-maintenance",
    title: "Landscaping Maintenance in Delaware",
    heroTitle: "Sustain Your Landscape in Delaware",
    heroSubtitle: "Ongoing care to keep your Delaware yard pristine.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
        title: "Coastal Season Maintenance",
        description: "Prepare and maintain your yard for Delaware’s coastal seasons.",
        featuresArray: [
          { description: "Salt management" },
          { description: "Debris removal" },
          { description: "Plant protection" },
          { description: "Erosion control" }
        ],
        buttonText: "Coastal Plan"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Seasonal Upkeep",
        description: "Adapt maintenance for Delaware’s seasons.",
        featuresArray: [
          { description: "Spring cleanup" },
          { description: "Summer trimming" },
          { description: "Fall prep" },
          { description: "Winter care" }
        ],
        buttonText: "Seasonal Care"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Custom Plans",
        description: "Tailored maintenance for your Delaware landscape.",
        featuresArray: [
          { description: "Personalized schedules" },
          { description: "Expert supervision" },
          { description: "Flexible adjustments" },
          { description: "Year-round support" }
        ],
        buttonText: "Create Plan"
      }
    ],
    ServiceText: {
      title: "Landscaping Maintenance in Delaware",
      description: "Prepare and maintain your yard for Delaware’s coastal seasons.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "delaware-landscaping-maintenance",
      locationSlug: "delaware",
      serviceSlug: "landscaping-maintenance"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991642/What-Sets-Our-Landscaping-Apart-from-the-Rest_libm4l.jpg",
      finalCta: "Maintain Your Landscapes Charm",
      finalCtaDescription: "Rely on Delaware’s best for consistent care.",
      buttonText: "Maintain Now"
    }
  },
  {
    id: "delaware-shrub-care",
    slug: "delaware-shrub-care",
    title: "Shrub Care in Delaware",
    heroTitle: "Nurture Your Shrubs in Delaware",
    heroSubtitle: "Expert shrub care to enhance your Delaware landscape.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
        title: "Coastal Season Pruning",
        description: "Protect shrubs from Delaware’s coastal conditions with expert pruning.",
        featuresArray: [
          { description: "Salt protection" },
          { description: "Deadwood removal" },
          { description: "Shape maintenance" },
          { description: "Growth support" }
        ],
        buttonText: "Prune Shrubs"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Health Treatments",
        description: "Keep shrubs healthy with Delaware-specific care.",
        featuresArray: [
          { description: "Pest control" },
          { description: "Disease prevention" },
          { description: "Nutrient feeding" },
          { description: "Health checks" }
        ],
        buttonText: "Treat Shrubs"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "New Installations",
        description: "Add vibrant shrubs to your Delaware yard.",
        featuresArray: [
          { description: "Site selection" },
          { description: "Planting" },
          { description: "Soil prep" },
          { description: "Initial care" }
        ],
        buttonText: "Install Shrubs"
      }
    ],
    ServiceText: {
      title: "Shrub Care in Delaware",
      description: "Protect shrubs from Delaware’s coastal conditions with expert pruning.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "delaware-shrub-care",
      locationSlug: "delaware",
      serviceSlug: "shrub-care"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991778/5-4_iqydyj.jpg",
      finalCta: "Beautiful Shrubs for Your Yard",
      finalCtaDescription: "Let our Delaware team care for your shrubs.",
      buttonText: "Start Shrub Care"
    }
  },
  {
    id: "delaware-lawn-seeding",
    slug: "delaware-lawn-seeding",
    title: "Lawn Seeding in Delaware",
    heroTitle: "Grow a Lush Lawn in Delaware",
    heroSubtitle: "Revitalize your lawn with expert seeding in Delaware.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
        title: "Spring Overseeding",
        description: "Thicken your lawn with Delaware-friendly seeding.",
        featuresArray: [
          { description: "Salt-tolerant seeds" },
          { description: "Even spread" },
          { description: "Soil prep" },
          { description: "Post-care" }
        ],
        buttonText: "Overseed Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "New Lawn Seeding",
        description: "Start a fresh lawn in Delaware’s climate.",
        featuresArray: [
          { description: "Site clearing" },
          { description: "Soil enrichment" },
          { description: "Seed application" },
          { description: "Growth tracking" }
        ],
        buttonText: "New Lawn Start"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Seeding Benefits",
        description: "Enjoy a denser lawn with Delaware expertise.",
        featuresArray: [
          { description: "Improved density" },
          { description: "Weed resistance" },
          { description: "Rich color" },
          { description: "Long-term growth" }
        ],
        buttonText: "Seed My Lawn"
      }
    ],
    ServiceText: {
      title: "Lawn Seeding in Delaware",
      description: "Thicken your lawn with Delaware-friendly seeding.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "delaware-lawn-seeding",
      locationSlug: "delaware",
      serviceSlug: "lawn-seeding"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991732/3-3_h3mwot.jpg",
      finalCta: "Grow a Greener Lawn",
      finalCtaDescription: "Trust Delaware’s seeding experts for a thriving yard.",
      buttonText: "Begin Seeding"
    }
  },
  {
    id: "delaware-lawn-aeration",
    slug: "delaware-lawn-aeration",
    title: "Lawn Aeration in Delaware",
    heroTitle: "Breathe Life into Your Lawn in Delaware",
    heroSubtitle: "Improve lawn health with aeration services in Delaware.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
        title: "Core Aeration",
        description: "Enhance root growth in Delaware’s soil.",
        featuresArray: [
          { description: "Soil loosening" },
          { description: "Air access" },
          { description: "Nutrient flow" },
          { description: "Water retention" }
        ],
        buttonText: "Aerate My Lawn"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Benefits of Aeration",
        description: "Boost your lawn’s health with aeration.",
        featuresArray: [
          { description: "Stronger roots" },
          { description: "Reduced compaction" },
          { description: "Better drainage" },
          { description: "Enhanced growth" }
        ],
        buttonText: "Boost Health"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991794/7-5_opmjoc.jpg",
        title: "Expert Service",
        description: "Trust Delaware’s pros for top aeration.",
        featuresArray: [
          { description: "Certified team" },
          { description: "Modern tools" },
          { description: "Timely work" },
          { description: "Follow-up care" }
        ],
        buttonText: "Hire Experts"
      }
    ],
    ServiceText: {
      title: "Lawn Aeration in Delaware",
      description: "Enhance root growth in Delaware’s soil.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "delaware-lawn-aeration",
      locationSlug: "delaware",
      serviceSlug: "lawn-aeration"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991726/2-3_xk4men.jpg",
      finalCta: "Aerate for a Healthier Lawn",
      finalCtaDescription: "Let our Delaware team aerate your lawn.",
      buttonText: "Start Aeration"
    }
  },
  {
    id: "delaware-lawn-mosquito-control",
    slug: "delaware-lawn-mosquito-control",
    title: "Lawn Mosquito Control in Delaware",
    heroTitle: "Enjoy a Mosquito-Free Yard in Delaware",
    heroSubtitle: "Protect your family with effective mosquito control in Delaware.",
    image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
    features: [
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg",
        title: "Mosquito Treatment",
        description: "Eliminate mosquitoes with targeted plans for Delaware.",
        featuresArray: [
          { description: "Barrier spraying" },
          { description: "Larval control" },
          { description: "Safe chemicals" },
          { description: "Regular applications" }
        ],
        buttonText: "Treat Mosquitoes"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991794/7-5_opmjoc.jpg",
        title: "Prevention Strategies",
        description: "Keep mosquitoes away with proactive Delaware measures.",
        featuresArray: [
          { description: "Standing water removal" },
          { description: "Plant management" },
          { description: "Habitat reduction" },
          { description: "Seasonal planning" }
        ],
        buttonText: "Prevent Now"
      },
      {
        image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991804/8-3_rdingb.jpg",
        title: "Safe Control Methods",
        description: "Enjoy peace of mind with eco-friendly control in Delaware.",
        featuresArray: [
          { description: "Pet-safe treatments" },
          { description: "Family-friendly" },
          { description: "Certified applicators" },
          { description: "Effective results" }
        ],
        buttonText: "Control Safely"
      }
    ],
    ServiceText: {
      title: "Lawn Mosquito Control in Delaware",
      description: "Eliminate mosquitoes with targeted plans for Delaware.",
      buttonText: "Book a Free Inspection",
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754992621/6-4_nbw7po.jpg"
    },
    form: {
      id: "delaware-lawn-mosquito-control",
      locationSlug: "delaware",
      serviceSlug: "lawn-mosquito-control"
    },
    cta: {
      image: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
      finalCta: "Reclaim Your Outdoor Space",
      finalCtaDescription: "Let Delaware’s mosquito control experts protect your yard.",
      buttonText: "Start Control"
    }
  },



  // Adding 11 services of each page*********************************************************************************

];




//************************************************************************************* */



export const locations: LocationMainPage[] = [
  {
    id: '1',
    slug: 'columbia',
    title: 'Lawn Care Services in Columbia',
    hero: {
      title: 'Transform Your Yard into a Tropical Paradise in Columbia',
      subtitle: 'Fast, affordable sprinkler repair, lawn care, and landscaping — all handled by local experts in Columbia.',
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519842/1_w9p5t6_10_11zon_ii2yyf.jpg',
    },
    form: {
      id: 'columbia-form',
      locationSlug: 'columbia',
    },
    ServiceText: {
      title: 'Professional Landscaping & Lawn Care Services in Columbia, SC',
      description: 'We proudly provide the Columbia and Dentsville, South Carolina and surrounding areas with professional, high quality residential lawn care, landscaping and property cleanups. Our dependable lawn care team provides routine lawn mowing, landscape design and property cleanups throughout Columbia, South Carolina and surrounding communities. Worry and hassle free lawn care is our specialty!',
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519842/1_w9p5t6_10_11zon_ii2yyf.jpg',
    },
    AllServices: {
      title: 'Our Services in Columbia',
      description: 'Explore our range of services tailored for Columbia lawns.',
      ServiceArray: [
        { title: 'Lawn Care Services', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856746/Landscaping-Augusta-Lawn-Care_moqscx.jpg', features: [{ description: 'Lawn Care' }, { description: 'Lawn Mowing' }, { description: 'Lawn Edging' }, { description: 'Other Lawn Services' }], buttonText: 'Lawn Care' },
        { title: 'Lawn Mowing', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856706/Lawn_Mowing_-_Lawn_Care-1000w_ziqv7c.webp', features: [{ description: 'Regular mowing in Columbia' }, { description: 'Lawn Mowing' }, { description: 'Lawn Edging' }, { description: 'Other Lawn Services' }], buttonText: 'Landscaping' },
        { title: 'Sprinkler Installation Repair', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856745/property-cleanups-Augusta-Lawn-Care_ue17op.png', features: [{ description: 'Repairs for Columbia systems' }, { description: 'Sprinkler Installation' }, { description: 'Sprinkler Repair' }, { description: 'Other Sprinkler Services' }], buttonText: 'Sprinkler' },
      ],
    },
    services: [
      {
        slug: 'columbia-lawn-care-services',
        name: 'Lawn Care Services',
        hero: { title: 'Lawn Care Services in Columbia', image: 'lawn-columbia.jpg' },
        ServiceText: { title: 'Expert Lawn Care in Columbia', description: 'Professional lawn care tailored for Columbia yards.', buttonText: 'Book Now', image: 'lawn.jpg' },
        SpecificServices: {
          title: 'Lawn Care Options in Columbia',
          ServiceCards: [
            { bgImage: 'bg-lawn', title: 'Mowing', description: 'Weekly mowing for Columbia lawns.', image: 'mowing.jpg' },
            { bgImage: 'bg-lawn', title: 'Fertilization', description: 'Seasonal fertilization in Columbia.', image: 'fertilizer.jpg' },
            { bgImage: 'bg-lawn', title: 'Health Check', description: 'Lawn health assessment in Columbia.', image: 'health.jpg' },
          ],
          buttonText: 'Get Started',
        },
      },
      {
        slug: 'columbia-lawn-mowing',
        name: 'Lawn Mowing',
        hero: { title: 'Lawn Mowing in Columbia', image: 'mowing-columbia.jpg' },
        ServiceText: { title: 'Precision Mowing in Columbia', description: 'Keep your Columbia lawn neat and tidy.', buttonText: 'Schedule', image: 'mowing.jpg' },
        SpecificServices: {
          title: 'Mowing Packages in Columbia',
          ServiceCards: [
            { bgImage: 'bg-mow', title: 'Weekly Mowing', description: 'Weekly service for Columbia.', image: 'weekly.jpg' },
            { bgImage: 'bg-mow', title: 'Bi-Weekly', description: 'Bi-weekly mowing in Columbia.', image: 'biweekly.jpg' },
            { bgImage: 'bg-mow', title: 'Trimming', description: 'Edge trimming in Columbia.', image: 'trimming.jpg' },
          ],
          buttonText: 'Contact Us',
        },
      },
      {
        slug: 'columbia-sprinkler-installation-repair',
        name: 'Sprinkler Installation Repair',
        hero: { title: 'Sprinkler Installation & Repair in Columbia', image: 'sprinkler-columbia.jpg' },
        ServiceText: { title: 'Reliable Sprinkler Services in Columbia', description: 'Install and repair sprinklers in Columbia.', buttonText: 'Repair Now', image: 'sprinkler.jpg' },
        SpecificServices: {
          title: 'Sprinkler Services in Columbia',
          ServiceCards: [
            { bgImage: 'bg-sprinkler', title: 'Installation', description: 'New sprinkler systems in Columbia.', image: 'install.jpg' },
            { bgImage: 'bg-sprinkler', title: 'Repair', description: 'Leak fixes in Columbia.', image: 'repair.jpg' },
            { bgImage: 'bg-sprinkler', title: 'Upgrades', description: 'Smart upgrades in Columbia.', image: 'upgrade.jpg' },
          ],
          buttonText: 'Book Repair',
        },
      },
      {
        slug: 'columbia-lawn-sprinkler-installation',
        name: 'Lawn Sprinkler Installation',
        hero: { title: 'Lawn Sprinkler Installation in Columbia', image: 'sprinkler-install-columbia.jpg' },
        ServiceText: { title: 'Smart Watering in Columbia', description: 'Install smart sprinklers in Columbia.', buttonText: 'Install Now', image: 'sprinkler-install.jpg' },
        SpecificServices: {
          title: 'Sprinkler Installation in Columbia',
          ServiceCards: [
            { bgImage: 'bg-sprinkler-install', title: 'New Systems', description: 'New setups in Columbia.', image: 'new-system.jpg' },
            { bgImage: 'bg-sprinkler-install', title: 'Replacement', description: 'Replace old systems in Columbia.', image: 'replacement.jpg' },
            { bgImage: 'bg-sprinkler-install', title: 'Controllers', description: 'Smart controllers in Columbia.', image: 'controller.jpg' },
          ],
          buttonText: 'Get Quote',
        },
      },
      {
        slug: 'columbia-landscaping-services',
        name: 'Landscaping Services',
        hero: { title: 'Landscaping Services in Columbia', image: 'landscape-columbia.jpg' },
        ServiceText: { title: 'Transform Your Columbia Yard', description: 'Custom landscaping for Columbia homes.', buttonText: 'Design Now', image: 'landscape.jpg' },
        SpecificServices: {
          title: 'Landscaping in Columbia',
          ServiceCards: [
            { bgImage: 'bg-landscape', title: 'Design', description: 'Custom designs in Columbia.', image: 'design.jpg' },
            { bgImage: 'bg-landscape', title: 'Installation', description: 'Installations in Columbia.', image: 'install-landscape.jpg' },
            { bgImage: 'bg-landscape', title: 'Mulching', description: 'Mulching in Columbia.', image: 'mulch.jpg' },
          ],
          buttonText: 'Start Project',
        },
      },
      {
        slug: 'columbia-lawn-health',
        name: 'Lawn Health',
        hero: { title: 'Lawn Health in Columbia', image: 'lawn-health-columbia.jpg' },
        ServiceText: { title: 'Healthy Lawns in Columbia', description: 'Boost lawn vitality in Columbia.', buttonText: 'Improve Now', image: 'lawn-health.jpg' },
        SpecificServices: {
          title: 'Lawn Health in Columbia',
          ServiceCards: [
            { bgImage: 'bg-health', title: 'Fertilization', description: 'Seasonal care in Columbia.', image: 'fertilizer.jpg' },
            { bgImage: 'bg-health', title: 'Aeration', description: 'Soil care in Columbia.', image: 'aeration.jpg' },
            { bgImage: 'bg-health', title: 'Defense', description: 'Disease protection in Columbia.', image: 'defense.jpg' },
          ],
          buttonText: 'Book Health Check',
        },
      },
      {
        slug: 'columbia-tree-services',
        name: 'Tree Services',
        hero: { title: 'Tree Services in Columbia', image: 'tree-columbia.jpg' },
        ServiceText: { title: 'Tree Care in Columbia', description: 'Strong trees in Columbia.', buttonText: 'Trim Now', image: 'tree.jpg' },
        SpecificServices: {
          title: 'Tree Care in Columbia',
          ServiceCards: [
            { bgImage: 'bg-tree', title: 'Injections', description: 'Tree injections in Columbia.', image: 'injection.jpg' },
            { bgImage: 'bg-tree', title: 'Pruning', description: 'Pruning in Columbia.', image: 'pruning.jpg' },
            { bgImage: 'bg-tree', title: 'Pest Control', description: 'Pest treatment in Columbia.', image: 'pest.jpg' },
          ],
          buttonText: 'Get Care',
        },
      },
      {
        slug: 'columbia-landscaping-maintenance',
        name: 'Landscaping Maintenance',
        hero: { title: 'Landscaping Maintenance in Columbia', image: 'maintenance-columbia.jpg' },
        ServiceText: { title: 'Ongoing Care in Columbia', description: 'Maintain your Columbia landscape.', buttonText: 'Maintain Now', image: 'maintenance.jpg' },
        SpecificServices: {
          title: 'Maintenance in Columbia',
          ServiceCards: [
            { bgImage: 'bg-maintenance', title: 'Weeding', description: 'Weed control in Columbia.', image: 'weeding.jpg' },
            { bgImage: 'bg-maintenance', title: 'Trimming', description: 'Trimming in Columbia.', image: 'trimming.jpg' },
            { bgImage: 'bg-maintenance', title: 'Cleanup', description: 'Cleanup in Columbia.', image: 'cleanup.jpg' },
          ],
          buttonText: 'Schedule Maintenance',
        },
      },
      {
        slug: 'columbia-shrub-care',
        name: 'Shrub Care',
        hero: { title: 'Shrub Care in Columbia', image: 'shrub-columbia.jpg' },
        ServiceText: { title: 'Shrub Maintenance in Columbia', description: 'Expert shrub care in Columbia.', buttonText: 'Prune Now', image: 'shrub.jpg' },
        SpecificServices: {
          title: 'Shrub Care in Columbia',
          ServiceCards: [
            { bgImage: 'bg-shrub', title: 'Pruning', description: 'Pruning in Columbia.', image: 'pruning-shrub.jpg' },
            { bgImage: 'bg-shrub', title: 'Fertilization', description: 'Fertilizing in Columbia.', image: 'fertilizer-shrub.jpg' },
            { bgImage: 'bg-shrub', title: 'Health Check', description: 'Health checks in Columbia.', image: 'health-shrub.jpg' },
          ],
          buttonText: 'Get Care',
        },
      },
      {
        slug: 'columbia-lawn-seeding',
        name: 'Lawn Seeding',
        hero: { title: 'Lawn Seeding in Columbia', image: 'seeding-columbia.jpg' },
        ServiceText: { title: 'Lawn Seeding in Columbia', description: 'Revitalize your Columbia lawn.', buttonText: 'Seed Now', image: 'seeding.jpg' },
        SpecificServices: {
          title: 'Seeding in Columbia',
          ServiceCards: [
            { bgImage: 'bg-seeding', title: 'New Lawns', description: 'New lawns in Columbia.', image: 'new-lawn.jpg' },
            { bgImage: 'bg-seeding', title: 'Overseeding', description: 'Overseeding in Columbia.', image: 'overseed.jpg' },
            { bgImage: 'bg-seeding', title: 'Repair', description: 'Repair seeding in Columbia.', image: 'repair-seed.jpg' },
          ],
          buttonText: 'Book Seeding',
        },
      },
      {
        slug: 'columbia-lawn-aeration',
        name: 'Lawn Aeration',
        hero: { title: 'Lawn Aeration in Columbia', image: 'aeration-columbia.jpg' },
        ServiceText: { title: 'Lawn Aeration in Columbia', description: 'Improve soil health in Columbia.', buttonText: 'Aerate Now', image: 'aeration.jpg' },
        SpecificServices: {
          title: 'Aeration in Columbia',
          ServiceCards: [
            { bgImage: 'bg-aeration', title: 'Core Aeration', description: 'Core aeration in Columbia.', image: 'core.jpg' },
            { bgImage: 'bg-aeration', title: 'Liquid Aeration', description: 'Liquid aeration in Columbia.', image: 'liquid.jpg' },
            { bgImage: 'bg-aeration', title: 'Seasonal', description: 'Seasonal aeration in Columbia.', image: 'seasonal.jpg' },
          ],
          buttonText: 'Schedule Aeration',
        },
      },
      {
        slug: 'columbia-lawn-mosquito-control',
        name: 'Lawn Mosquito Control',
        hero: { title: 'Lawn Mosquito Control in Columbia', image: 'mosquito-columbia.jpg' },
        ServiceText: { title: 'Mosquito Control in Columbia', description: 'Keep mosquitoes away in Columbia.', buttonText: 'Control Now', image: 'mosquito.jpg' },
        SpecificServices: {
          title: 'Mosquito Control in Columbia',
          ServiceCards: [
            { bgImage: 'bg-mosquito', title: 'Prevention', description: 'Prevention in Columbia.', image: 'prevent.jpg' },
            { bgImage: 'bg-mosquito', title: 'Treatment', description: 'Treatment in Columbia.', image: 'treatment.jpg' },
            { bgImage: 'bg-mosquito', title: 'Seasonal Plans', description: 'Seasonal plans in Columbia.', image: 'seasonal-plan.jpg' },
          ],
          buttonText: 'Get Protection',
        },
      },
    ],
  },
  {
    id: '2',
    slug: 'minnesota',
    title: 'Lawn Care Services in Minnesota',
    hero: {
      title: 'Transform Your Yard into a Lush Retreat in Minnesota',
      subtitle: 'Fast, affordable sprinkler repair, lawn care, and landscaping — all handled by local experts in Minnesota.',
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519852/service-1-bg-image_bndfq1_11_11zon_spwl4k.jpg',
    },
    form: {
      id: 'minnesota-form',
      locationSlug: 'minnesota',
    },
    ServiceText: {
      title: 'Professional Landscaping & Lawn Care Services in Minnesota',
      description: 'We proudly provide the Minnesota and Twin Cities area with professional, high-quality residential lawn care, landscaping, and property cleanups. Our dependable lawn care team provides routine lawn mowing, landscape design, and property cleanups throughout Minnesota and surrounding communities. Worry and hassle-free lawn care is our specialty!',
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519842/3-5_bg3s9i_15_11zon_wiiepg.jpg',
    },
    AllServices: {
      title: 'Our Services in Minnesota',
      description: 'Explore our range of services tailored for Minnesota lawns.',
      ServiceArray: [
        { title: 'Lawn Care Services', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856746/Landscaping-Augusta-Lawn-Care_moqscx.jpg', features: [{ description: 'Lawn Care' }, { description: 'Lawn Mowing' }, { description: 'Lawn Edging' }, { description: 'Other Lawn Services' }], buttonText: 'Lawn Care' },
        { title: 'Lawn Mowing', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856706/Lawn_Mowing_-_Lawn_Care-1000w_ziqv7c.webp', features: [{ description: 'Regular mowing in Minnesota' }, { description: 'Lawn Mowing' }, { description: 'Lawn Edging' }, { description: 'Other Lawn Services' }], buttonText: 'Landscaping' },
        { title: 'Sprinkler Installation Repair', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856745/property-cleanups-Augusta-Lawn-Care_ue17op.png', features: [{ description: 'Repairs for Minnesota systems' }, { description: 'Sprinkler Installation' }, { description: 'Sprinkler Repair' }, { description: 'Other Sprinkler Services' }], buttonText: 'Sprinkler' },
      ],
    },
    services: [
      {
        slug: 'minnesota-lawn-care-services',
        name: 'Lawn Care Services',
        hero: { title: 'Lawn Care Services in Minnesota', image: 'minnesota-lawn-care.jpg' },
        ServiceText: { title: 'Expert Lawn Care in Minnesota', description: 'Professional lawn care tailored for Minnesota yards.', buttonText: 'Book Now', image: 'minnesota-lawn.jpg' },
        SpecificServices: {
          title: 'Lawn Care Options in Minnesota',
          ServiceCards: [
            { bgImage: 'bg-lawn', title: 'Mowing', description: 'Weekly mowing for Minnesota lawns.', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856706/Lawn_Mowing_-_Lawn_Care-1000w_ziqv7c.webp' },
            { bgImage: 'bg-lawn', title: 'Fertilization', description: 'Seasonal fertilization in Minnesota.', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856745/property-cleanups-Augusta-Lawn-Care_ue17op.png' },
            { bgImage: 'bg-lawn', title: 'Health Check', description: 'Lawn health assessment in Minnesota.', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856745/property-cleanups-Augusta-Lawn-Care_ue17op.png' },
          ],
          buttonText: 'Get Started',
        },
      },
      {
        slug: 'minnesota-lawn-mowing',
        name: 'Lawn Mowing',
        hero: { title: 'Lawn Mowing in Minnesota', image: 'minnesota-mowing-hero.jpg' },
        ServiceText: { title: 'Precision Mowing in Minnesota', description: 'Keep your Minnesota lawn neat and tidy.', buttonText: 'Schedule', image: 'minnesota-mowing.jpg' },
        SpecificServices: {
          title: 'Mowing Packages in Minnesota',
          ServiceCards: [
            { bgImage: 'bg-mow', title: 'Weekly Mowing', description: 'Weekly service for Minnesota.', image: 'minnesota-weekly.jpg' },
            { bgImage: 'bg-mow', title: 'Bi-Weekly', description: 'Bi-weekly mowing in Minnesota.', image: 'minnesota-biweekly.jpg' },
            { bgImage: 'bg-mow', title: 'Trimming', description: 'Edge trimming in Minnesota.', image: 'minnesota-trimming.jpg' },
          ],
          buttonText: 'Contact Us',
        },
      },
      {
        slug: 'minnesota-sprinkler-installation-repair',
        name: 'Sprinkler Installation Repair',
        hero: { title: 'Sprinkler Installation & Repair in Minnesota', image: 'minnesota-sprinkler-hero.jpg' },
        ServiceText: { title: 'Reliable Sprinkler Services in Minnesota', description: 'Install and repair sprinklers in Minnesota.', buttonText: 'Repair Now', image: 'minnesota-sprinkler.jpg' },
        SpecificServices: {
          title: 'Sprinkler Services in Minnesota',
          ServiceCards: [
            { bgImage: 'bg-sprinkler', title: 'Installation', description: 'New sprinkler systems in Minnesota.', image: 'minnesota-install.jpg' },
            { bgImage: 'bg-sprinkler', title: 'Repair', description: 'Leak fixes in Minnesota.', image: 'minnesota-repair.jpg' },
            { bgImage: 'bg-sprinkler', title: 'Upgrades', description: 'Smart upgrades in Minnesota.', image: 'minnesota-upgrade.jpg' },
          ],
          buttonText: 'Book Repair',
        },
      },
      {
        slug: 'minnesota-lawn-sprinkler-installation',
        name: 'Lawn Sprinkler Installation',
        hero: { title: 'Lawn Sprinkler Installation in Minnesota', image: 'minnesota-sprinkler-install-hero.jpg' },
        ServiceText: { title: 'Smart Watering in Minnesota', description: 'Install smart sprinklers in Minnesota.', buttonText: 'Install Now', image: 'minnesota-sprinkler-install.jpg' },
        SpecificServices: {
          title: 'Sprinkler Installation in Minnesota',
          ServiceCards: [
            { bgImage: 'bg-sprinkler-install', title: 'New Systems', description: 'New setups in Minnesota.', image: 'minnesota-new-system.jpg' },
            { bgImage: 'bg-sprinkler-install', title: 'Replacement', description: 'Replace old systems in Minnesota.', image: 'minnesota-replacement.jpg' },
            { bgImage: 'bg-sprinkler-install', title: 'Controllers', description: 'Smart controllers in Minnesota.', image: 'minnesota-controller.jpg' },
          ],
          buttonText: 'Get Quote',
        },
      },
      {
        slug: 'minnesota-landscaping-services',
        name: 'Landscaping Services',
        hero: { title: 'Landscaping Services in Minnesota', image: 'minnesota-landscape-hero.jpg' },
        ServiceText: { title: 'Transform Your Minnesota Yard', description: 'Custom landscaping for Minnesota homes.', buttonText: 'Design Now', image: 'minnesota-landscape.jpg' },
        SpecificServices: {
          title: 'Landscaping in Minnesota',
          ServiceCards: [
            { bgImage: 'bg-landscape', title: 'Design', description: 'Custom designs in Minnesota.', image: 'minnesota-design.jpg' },
            { bgImage: 'bg-landscape', title: 'Installation', description: 'Installations in Minnesota.', image: 'minnesota-install-landscape.jpg' },
            { bgImage: 'bg-landscape', title: 'Mulching', description: 'Mulching in Minnesota.', image: 'minnesota-mulch.jpg' },
          ],
          buttonText: 'Start Project',
        },
      },
      {
        slug: 'minnesota-lawn-health',
        name: 'Lawn Health',
        hero: { title: 'Lawn Health in Minnesota', image: 'minnesota-lawn-health-hero.jpg' },
        ServiceText: { title: 'Healthy Lawns in Minnesota', description: 'Boost lawn vitality in Minnesota.', buttonText: 'Improve Now', image: 'minnesota-lawn-health.jpg' },
        SpecificServices: {
          title: 'Lawn Health in Minnesota',
          ServiceCards: [
            { bgImage: 'bg-health', title: 'Fertilization', description: 'Seasonal care in Minnesota.', image: 'minnesota-fertilizer.jpg' },
            { bgImage: 'bg-health', title: 'Aeration', description: 'Soil care in Minnesota.', image: 'minnesota-aeration.jpg' },
            { bgImage: 'bg-health', title: 'Defense', description: 'Disease protection in Minnesota.', image: 'minnesota-defense.jpg' },
          ],
          buttonText: 'Book Health Check',
        },
      },
      {
        slug: 'minnesota-tree-services',
        name: 'Tree Services',
        hero: { title: 'Tree Services in Minnesota', image: 'minnesota-tree-hero.jpg' },
        ServiceText: { title: 'Tree Care in Minnesota', description: 'Strong trees in Minnesota.', buttonText: 'Trim Now', image: 'minnesota-tree.jpg' },
        SpecificServices: {
          title: 'Tree Care in Minnesota',
          ServiceCards: [
            { bgImage: 'bg-tree', title: 'Injections', description: 'Tree injections in Minnesota.', image: 'minnesota-injection.jpg' },
            { bgImage: 'bg-tree', title: 'Pruning', description: 'Pruning in Minnesota.', image: 'minnesota-pruning.jpg' },
            { bgImage: 'bg-tree', title: 'Pest Control', description: 'Pest treatment in Minnesota.', image: 'minnesota-pest.jpg' },
          ],
          buttonText: 'Get Care',
        },
      },
      {
        slug: 'minnesota-landscaping-maintenance',
        name: 'Landscaping Maintenance',
        hero: { title: 'Landscaping Maintenance in Minnesota', image: 'minnesota-maintenance-hero.jpg' },
        ServiceText: { title: 'Ongoing Care in Minnesota', description: 'Maintain your Minnesota landscape.', buttonText: 'Maintain Now', image: 'minnesota-maintenance.jpg' },
        SpecificServices: {
          title: 'Maintenance in Minnesota',
          ServiceCards: [
            { bgImage: 'bg-maintenance', title: 'Weeding', description: 'Weed control in Minnesota.', image: 'minnesota-weeding.jpg' },
            { bgImage: 'bg-maintenance', title: 'Trimming', description: 'Trimming in Minnesota.', image: 'minnesota-trimming.jpg' },
            { bgImage: 'bg-maintenance', title: 'Cleanup', description: 'Cleanup in Minnesota.', image: 'minnesota-cleanup.jpg' },
          ],
          buttonText: 'Schedule Maintenance',
        },
      },
      {
        slug: 'minnesota-shrub-care',
        name: 'Shrub Care',
        hero: { title: 'Shrub Care in Minnesota', image: 'minnesota-shrub-hero.jpg' },
        ServiceText: { title: 'Shrub Maintenance in Minnesota', description: 'Expert shrub care in Minnesota.', buttonText: 'Prune Now', image: 'minnesota-shrub.jpg' },
        SpecificServices: {
          title: 'Shrub Care in Minnesota',
          ServiceCards: [
            { bgImage: 'bg-shrub', title: 'Pruning', description: 'Pruning in Minnesota.', image: 'minnesota-pruning-shrub.jpg' },
            { bgImage: 'bg-shrub', title: 'Fertilization', description: 'Fertilizing in Minnesota.', image: 'minnesota-fertilizer-shrub.jpg' },
            { bgImage: 'bg-shrub', title: 'Health Check', description: 'Health checks in Minnesota.', image: 'minnesota-health-shrub.jpg' },
          ],
          buttonText: 'Get Care',
        },
      },
      {
        slug: 'minnesota-lawn-seeding',
        name: 'Lawn Seeding',
        hero: { title: 'Lawn Seeding in Minnesota', image: 'minnesota-seeding-hero.jpg' },
        ServiceText: { title: 'Lawn Seeding in Minnesota', description: 'Revitalize your Minnesota lawn.', buttonText: 'Seed Now', image: 'minnesota-seeding.jpg' },
        SpecificServices: {
          title: 'Seeding in Minnesota',
          ServiceCards: [
            { bgImage: 'bg-seeding', title: 'New Lawns', description: 'New lawns in Minnesota.', image: 'minnesota-new-lawn.jpg' },
            { bgImage: 'bg-seeding', title: 'Overseeding', description: 'Overseeding in Minnesota.', image: 'minnesota-overseed.jpg' },
            { bgImage: 'bg-seeding', title: 'Repair', description: 'Repair seeding in Minnesota.', image: 'minnesota-repair-seed.jpg' },
          ],
          buttonText: 'Book Seeding',
        },
      },
      {
        slug: 'minnesota-lawn-aeration',
        name: 'Lawn Aeration',
        hero: { title: 'Lawn Aeration in Minnesota', image: 'minnesota-aeration-hero.jpg' },
        ServiceText: { title: 'Lawn Aeration in Minnesota', description: 'Improve soil health in Minnesota.', buttonText: 'Aerate Now', image: 'minnesota-aeration.jpg' },
        SpecificServices: {
          title: 'Aeration in Minnesota',
          ServiceCards: [
            { bgImage: 'bg-aeration', title: 'Core Aeration', description: 'Core aeration in Minnesota.', image: 'minnesota-core.jpg' },
            { bgImage: 'bg-aeration', title: 'Liquid Aeration', description: 'Liquid aeration in Minnesota.', image: 'minnesota-liquid.jpg' },
            { bgImage: 'bg-aeration', title: 'Seasonal', description: 'Seasonal aeration in Minnesota.', image: 'minnesota-seasonal.jpg' },
          ],
          buttonText: 'Schedule Aeration',
        },
      },
      {
        slug: 'minnesota-lawn-mosquito-control',
        name: 'Lawn Mosquito Control',
        hero: { title: 'Lawn Mosquito Control in Minnesota', image: 'minnesota-mosquito-hero.jpg' },
        ServiceText: { title: 'Mosquito Control in Minnesota', description: 'Keep mosquitoes away in Minnesota.', buttonText: 'Control Now', image: 'minnesota-mosquito.jpg' },
        SpecificServices: {
          title: 'Mosquito Control in Minnesota',
          ServiceCards: [
            { bgImage: 'bg-mosquito', title: 'Prevention', description: 'Prevention in Minnesota.', image: 'minnesota-prevent.jpg' },
            { bgImage: 'bg-mosquito', title: 'Treatment', description: 'Treatment in Minnesota.', image: 'minnesota-treatment.jpg' },
            { bgImage: 'bg-mosquito', title: 'Seasonal Plans', description: 'Seasonal plans in Minnesota.', image: 'minnesota-seasonal-plan.jpg' },
          ],
          buttonText: 'Get Protection',
        },
      },
    ],
  },
  {
    id: '3',
    slug: 'wisconsin',
    title: 'Lawn Care Services in Wisconsin',
    hero: {
      title: 'Transform Your Yard into a Green Oasis in Wisconsin',
      subtitle: 'Fast, affordable sprinkler repair, lawn care, and landscaping — all handled by local experts in Wisconsin.',
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519848/Mein-Background-image-2_cpfbiz_17_11zon_m3cpiu.jpg',
    },
    form: {
      id: 'wisconsin-form',
      locationSlug: 'wisconsin',
    },
    ServiceText: {
      title: 'Professional Landscaping & Lawn Care Services in Wisconsin',
      description: 'We proudly provide the Wisconsin and Milwaukee area with professional, high-quality residential lawn care, landscaping, and property cleanups. Our dependable lawn care team provides routine lawn mowing, landscape design, and property cleanups throughout Wisconsin and surrounding communities. Worry and hassle-free lawn care is our specialty!',
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519842/1-3_gtvfal_3_11zon_qbqgyw.jpg',
    },
    AllServices: {
      title: 'Our Services in Wisconsin',
      description: 'Explore our range of services tailored for Wisconsin lawns.',
      ServiceArray: [
        { title: 'Lawn Care Services', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856746/Landscaping-Augusta-Lawn-Care_moqscx.jpg', features: [{ description: 'Lawn Care' }, { description: 'Lawn Mowing' }, { description: 'Lawn Edging' }, { description: 'Other Lawn Services' }], buttonText: 'Lawn Care' },
        { title: 'Lawn Mowing', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856706/Lawn_Mowing_-_Lawn_Care-1000w_ziqv7c.webp', features: [{ description: 'Regular mowing in Wisconsin' }, { description: 'Lawn Mowing' }, { description: 'Lawn Edging' }, { description: 'Other Lawn Services' }], buttonText: 'Landscaping' },
        { title: 'Sprinkler Installation Repair', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856745/property-cleanups-Augusta-Lawn-Care_ue17op.png', features: [{ description: 'Repairs for Wisconsin systems' }, { description: 'Sprinkler Installation' }, { description: 'Sprinkler Repair' }, { description: 'Other Sprinkler Services' }], buttonText: 'Sprinkler' },
      ],
    },
    services: [
      {
        slug: 'wisconsin-lawn-care-services',
        name: 'Lawn Care Services',
        hero: { title: 'Lawn Care Services in Wisconsin', image: 'wisconsin-lawn-care.jpg' },
        ServiceText: { title: 'Expert Lawn Care in Wisconsin', description: 'Professional lawn care tailored for Wisconsin yards.', buttonText: 'Book Now', image: 'wisconsin-lawn.jpg' },
        SpecificServices: {
          title: 'Lawn Care Options in Wisconsin',
          ServiceCards: [
            { bgImage: 'bg-lawn', title: 'Mowing', description: 'Weekly mowing for Wisconsin lawns.', image: 'wisconsin-mowing.jpg' },
            { bgImage: 'bg-lawn', title: 'Fertilization', description: 'Seasonal fertilization in Wisconsin.', image: 'wisconsin-fertilizer.jpg' },
            { bgImage: 'bg-lawn', title: 'Health Check', description: 'Lawn health assessment in Wisconsin.', image: 'wisconsin-health.jpg' },
          ],
          buttonText: 'Get Started',
        },
      },
      {
        slug: 'wisconsin-lawn-mowing',
        name: 'Lawn Mowing',
        hero: { title: 'Lawn Mowing in Wisconsin', image: 'wisconsin-mowing-hero.jpg' },
        ServiceText: { title: 'Precision Mowing in Wisconsin', description: 'Keep your Wisconsin lawn neat and tidy.', buttonText: 'Schedule', image: 'wisconsin-mowing.jpg' },
        SpecificServices: {
          title: 'Mowing Packages in Wisconsin',
          ServiceCards: [
            { bgImage: 'bg-mow', title: 'Weekly Mowing', description: 'Weekly service for Wisconsin.', image: 'wisconsin-weekly.jpg' },
            { bgImage: 'bg-mow', title: 'Bi-Weekly', description: 'Bi-weekly mowing in Wisconsin.', image: 'wisconsin-biweekly.jpg' },
            { bgImage: 'bg-mow', title: 'Trimming', description: 'Edge trimming in Wisconsin.', image: 'wisconsin-trimming.jpg' },
          ],
          buttonText: 'Contact Us',
        },
      },
      {
        slug: 'wisconsin-sprinkler-installation-repair',
        name: 'Sprinkler Installation Repair',
        hero: { title: 'Sprinkler Installation & Repair in Wisconsin', image: 'wisconsin-sprinkler-hero.jpg' },
        ServiceText: { title: 'Reliable Sprinkler Services in Wisconsin', description: 'Install and repair sprinklers in Wisconsin.', buttonText: 'Repair Now', image: 'wisconsin-sprinkler.jpg' },
        SpecificServices: {
          title: 'Sprinkler Services in Wisconsin',
          ServiceCards: [
            { bgImage: 'bg-sprinkler', title: 'Installation', description: 'New sprinkler systems in Wisconsin.', image: 'wisconsin-install.jpg' },
            { bgImage: 'bg-sprinkler', title: 'Repair', description: 'Leak fixes in Wisconsin.', image: 'wisconsin-repair.jpg' },
            { bgImage: 'bg-sprinkler', title: 'Upgrades', description: 'Smart upgrades in Wisconsin.', image: 'wisconsin-upgrade.jpg' },
          ],
          buttonText: 'Book Repair',
        },
      },
      {
        slug: 'wisconsin-lawn-sprinkler-installation',
        name: 'Lawn Sprinkler Installation',
        hero: { title: 'Lawn Sprinkler Installation in Wisconsin', image: 'wisconsin-sprinkler-install-hero.jpg' },
        ServiceText: { title: 'Smart Watering in Wisconsin', description: 'Install smart sprinklers in Wisconsin.', buttonText: 'Install Now', image: 'wisconsin-sprinkler-install.jpg' },
        SpecificServices: {
          title: 'Sprinkler Installation in Wisconsin',
          ServiceCards: [
            { bgImage: 'bg-sprinkler-install', title: 'New Systems', description: 'New setups in Wisconsin.', image: 'wisconsin-new-system.jpg' },
            { bgImage: 'bg-sprinkler-install', title: 'Replacement', description: 'Replace old systems in Wisconsin.', image: 'wisconsin-replacement.jpg' },
            { bgImage: 'bg-sprinkler-install', title: 'Controllers', description: 'Smart controllers in Wisconsin.', image: 'wisconsin-controller.jpg' },
          ],
          buttonText: 'Get Quote',
        },
      },
      {
        slug: 'wisconsin-landscaping-services',
        name: 'Landscaping Services',
        hero: { title: 'Landscaping Services in Wisconsin', image: 'wisconsin-landscape-hero.jpg' },
        ServiceText: { title: 'Transform Your Wisconsin Yard', description: 'Custom landscaping for Wisconsin homes.', buttonText: 'Design Now', image: 'wisconsin-landscape.jpg' },
        SpecificServices: {
          title: 'Landscaping in Wisconsin',
          ServiceCards: [
            { bgImage: 'bg-landscape', title: 'Design', description: 'Custom designs in Wisconsin.', image: 'wisconsin-design.jpg' },
            { bgImage: 'bg-landscape', title: 'Installation', description: 'Installations in Wisconsin.', image: 'wisconsin-install-landscape.jpg' },
            { bgImage: 'bg-landscape', title: 'Mulching', description: 'Mulching in Wisconsin.', image: 'wisconsin-mulch.jpg' },
          ],
          buttonText: 'Start Project',
        },
      },
      {
        slug: 'wisconsin-lawn-health',
        name: 'Lawn Health',
        hero: { title: 'Lawn Health in Wisconsin', image: 'wisconsin-lawn-health-hero.jpg' },
        ServiceText: { title: 'Healthy Lawns in Wisconsin', description: 'Boost lawn vitality in Wisconsin.', buttonText: 'Improve Now', image: 'wisconsin-lawn-health.jpg' },
        SpecificServices: {
          title: 'Lawn Health in Wisconsin',
          ServiceCards: [
            { bgImage: 'bg-health', title: 'Fertilization', description: 'Seasonal care in Wisconsin.', image: 'wisconsin-fertilizer.jpg' },
            { bgImage: 'bg-health', title: 'Aeration', description: 'Soil care in Wisconsin.', image: 'wisconsin-aeration.jpg' },
            { bgImage: 'bg-health', title: 'Defense', description: 'Disease protection in Wisconsin.', image: 'wisconsin-defense.jpg' },
          ],
          buttonText: 'Book Health Check',
        },
      },
      {
        slug: 'wisconsin-tree-services',
        name: 'Tree Services',
        hero: { title: 'Tree Services in Wisconsin', image: 'wisconsin-tree-hero.jpg' },
        ServiceText: { title: 'Tree Care in Wisconsin', description: 'Strong trees in Wisconsin.', buttonText: 'Trim Now', image: 'wisconsin-tree.jpg' },
        SpecificServices: {
          title: 'Tree Care in Wisconsin',
          ServiceCards: [
            { bgImage: 'bg-tree', title: 'Injections', description: 'Tree injections in Wisconsin.', image: 'wisconsin-injection.jpg' },
            { bgImage: 'bg-tree', title: 'Pruning', description: 'Pruning in Wisconsin.', image: 'wisconsin-pruning.jpg' },
            { bgImage: 'bg-tree', title: 'Pest Control', description: 'Pest treatment in Wisconsin.', image: 'wisconsin-pest.jpg' },
          ],
          buttonText: 'Get Care',
        },
      },
      {
        slug: 'wisconsin-landscaping-maintenance',
        name: 'Landscaping Maintenance',
        hero: { title: 'Landscaping Maintenance in Wisconsin', image: 'wisconsin-maintenance-hero.jpg' },
        ServiceText: { title: 'Ongoing Care in Wisconsin', description: 'Maintain your Wisconsin landscape.', buttonText: 'Maintain Now', image: 'wisconsin-maintenance.jpg' },
        SpecificServices: {
          title: 'Maintenance in Wisconsin',
          ServiceCards: [
            { bgImage: 'bg-maintenance', title: 'Weeding', description: 'Weed control in Wisconsin.', image: 'wisconsin-weeding.jpg' },
            { bgImage: 'bg-maintenance', title: 'Trimming', description: 'Trimming in Wisconsin.', image: 'wisconsin-trimming.jpg' },
            { bgImage: 'bg-maintenance', title: 'Cleanup', description: 'Cleanup in Wisconsin.', image: 'wisconsin-cleanup.jpg' },
          ],
          buttonText: 'Schedule Maintenance',
        },
      },
      {
        slug: 'wisconsin-shrub-care',
        name: 'Shrub Care',
        hero: { title: 'Shrub Care in Wisconsin', image: 'wisconsin-shrub-hero.jpg' },
        ServiceText: { title: 'Shrub Maintenance in Wisconsin', description: 'Expert shrub care in Wisconsin.', buttonText: 'Prune Now', image: 'wisconsin-shrub.jpg' },
        SpecificServices: {
          title: 'Shrub Care in Wisconsin',
          ServiceCards: [
            { bgImage: 'bg-shrub', title: 'Pruning', description: 'Pruning in Wisconsin.', image: 'wisconsin-pruning-shrub.jpg' },
            { bgImage: 'bg-shrub', title: 'Fertilization', description: 'Fertilizing in Wisconsin.', image: 'wisconsin-fertilizer-shrub.jpg' },
            { bgImage: 'bg-shrub', title: 'Health Check', description: 'Health checks in Wisconsin.', image: 'wisconsin-health-shrub.jpg' },
          ],
          buttonText: 'Get Care',
        },
      },
      {
        slug: 'wisconsin-lawn-seeding',
        name: 'Lawn Seeding',
        hero: { title: 'Lawn Seeding in Wisconsin', image: 'wisconsin-seeding-hero.jpg' },
        ServiceText: { title: 'Lawn Seeding in Wisconsin', description: 'Revitalize your Wisconsin lawn.', buttonText: 'Seed Now', image: 'wisconsin-seeding.jpg' },
        SpecificServices: {
          title: 'Seeding in Wisconsin',
          ServiceCards: [
            { bgImage: 'bg-seeding', title: 'New Lawns', description: 'New lawns in Wisconsin.', image: 'wisconsin-new-lawn.jpg' },
            { bgImage: 'bg-seeding', title: 'Overseeding', description: 'Overseeding in Wisconsin.', image: 'wisconsin-overseed.jpg' },
            { bgImage: 'bg-seeding', title: 'Repair', description: 'Repair seeding in Wisconsin.', image: 'wisconsin-repair-seed.jpg' },
          ],
          buttonText: 'Book Seeding',
        },
      },
      {
        slug: 'wisconsin-lawn-aeration',
        name: 'Lawn Aeration',
        hero: { title: 'Lawn Aeration in Wisconsin', image: 'wisconsin-aeration-hero.jpg' },
        ServiceText: { title: 'Lawn Aeration in Wisconsin', description: 'Improve soil health in Wisconsin.', buttonText: 'Aerate Now', image: 'wisconsin-aeration.jpg' },
        SpecificServices: {
          title: 'Aeration in Wisconsin',
          ServiceCards: [
            { bgImage: 'bg-aeration', title: 'Core Aeration', description: 'Core aeration in Wisconsin.', image: 'wisconsin-core.jpg' },
            { bgImage: 'bg-aeration', title: 'Liquid Aeration', description: 'Liquid aeration in Wisconsin.', image: 'wisconsin-liquid.jpg' },
            { bgImage: 'bg-aeration', title: 'Seasonal', description: 'Seasonal aeration in Wisconsin.', image: 'wisconsin-seasonal.jpg' },
          ],
          buttonText: 'Schedule Aeration',
        },
      },
      {
        slug: 'wisconsin-lawn-mosquito-control',
        name: 'Lawn Mosquito Control',
        hero: { title: 'Lawn Mosquito Control in Wisconsin', image: 'wisconsin-mosquito-hero.jpg' },
        ServiceText: { title: 'Mosquito Control in Wisconsin', description: 'Keep mosquitoes away in Wisconsin.', buttonText: 'Control Now', image: 'wisconsin-mosquito.jpg' },
        SpecificServices: {
          title: 'Mosquito Control in Wisconsin',
          ServiceCards: [
            { bgImage: 'bg-mosquito', title: 'Prevention', description: 'Prevention in Wisconsin.', image: 'wisconsin-prevent.jpg' },
            { bgImage: 'bg-mosquito', title: 'Treatment', description: 'Treatment in Wisconsin.', image: 'wisconsin-treatment.jpg' },
            { bgImage: 'bg-mosquito', title: 'Seasonal Plans', description: 'Seasonal plans in Wisconsin.', image: 'wisconsin-seasonal-plan.jpg' },
          ],
          buttonText: 'Get Protection',
        },
      },
    ],
  },
  {
    id: '4',
    slug: 'virginia',
    title: 'Lawn Care Services in Virginia',
    hero: {
      title: 'Transform Your Yard into a Vibrant Haven in Virginia',
      subtitle: 'Fast, affordable sprinkler repair, lawn care, and landscaping — all handled by local experts in Virginia.',
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519842/1_jrturb_13_11zon_rg1gli.jpg',
    },
    form: {
      id: 'virginia-form',
      locationSlug: 'virginia',
    },
    ServiceText: {
      title: 'Professional Landscaping & Lawn Care Services in Virginia',
      description: 'We proudly provide the Virginia and Richmond area with professional, high-quality residential lawn care, landscaping, and property cleanups. Our dependable lawn care team provides routine lawn mowing, landscape design, and property cleanups throughout Virginia and surrounding communities. Worry and hassle-free lawn care is our specialty!',
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519842/5-4_jz6vbh_14_11zon_dsm4tk.jpg',
    },
    AllServices: {
      title: 'Our Services in Virginia',
      description: 'Explore our range of services tailored for Virginia lawns.',
      ServiceArray: [
        { title: 'Lawn Care Services', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856746/Landscaping-Augusta-Lawn-Care_moqscx.jpg', features: [{ description: 'Lawn Care' }, { description: 'Lawn Mowing' }, { description: 'Lawn Edging' }, { description: 'Other Lawn Services' }], buttonText: 'Lawn Care' },
        { title: 'Lawn Mowing', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856706/Lawn_Mowing_-_Lawn_Care-1000w_ziqv7c.webp', features: [{ description: 'Regular mowing in Virginia' }, { description: 'Lawn Mowing' }, { description: 'Lawn Edging' }, { description: 'Other Lawn Services' }], buttonText: 'Landscaping' },
        { title: 'Sprinkler Installation Repair', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856745/property-cleanups-Augusta-Lawn-Care_ue17op.png', features: [{ description: 'Repairs for Virginia systems' }, { description: 'Sprinkler Installation' }, { description: 'Sprinkler Repair' }, { description: 'Other Sprinkler Services' }], buttonText: 'Sprinkler' },
      ],
    },
    services: [
      {
        slug: 'virginia-lawn-care-services',
        name: 'Lawn Care Services',
        hero: { title: 'Lawn Care Services in Virginia', image: 'virginia-lawn-care.jpg' },
        ServiceText: { title: 'Expert Lawn Care in Virginia', description: 'Professional lawn care tailored for Virginia yards.', buttonText: 'Book Now', image: 'virginia-lawn.jpg' },
        SpecificServices: {
          title: 'Lawn Care Options in Virginia',
          ServiceCards: [
            { bgImage: 'bg-lawn', title: 'Mowing', description: 'Weekly mowing for Virginia lawns.', image: 'virginia-mowing.jpg' },
            { bgImage: 'bg-lawn', title: 'Fertilization', description: 'Seasonal fertilization in Virginia.', image: 'virginia-fertilizer.jpg' },
            { bgImage: 'bg-lawn', title: 'Health Check', description: 'Lawn health assessment in Virginia.', image: 'virginia-health.jpg' },
          ],
          buttonText: 'Get Started',
        },
      },
      {
        slug: 'virginia-lawn-mowing',
        name: 'Lawn Mowing',
        hero: { title: 'Lawn Mowing in Virginia', image: 'virginia-mowing-hero.jpg' },
        ServiceText: { title: 'Precision Mowing in Virginia', description: 'Keep your Virginia lawn neat and tidy.', buttonText: 'Schedule', image: 'virginia-mowing.jpg' },
        SpecificServices: {
          title: 'Mowing Packages in Virginia',
          ServiceCards: [
            { bgImage: 'bg-mow', title: 'Weekly Mowing', description: 'Weekly service for Virginia.', image: 'virginia-weekly.jpg' },
            { bgImage: 'bg-mow', title: 'Bi-Weekly', description: 'Bi-weekly mowing in Virginia.', image: 'virginia-biweekly.jpg' },
            { bgImage: 'bg-mow', title: 'Trimming', description: 'Edge trimming in Virginia.', image: 'virginia-trimming.jpg' },
          ],
          buttonText: 'Contact Us',
        },
      },
      {
        slug: 'virginia-sprinkler-installation-repair',
        name: 'Sprinkler Installation Repair',
        hero: { title: 'Sprinkler Installation & Repair in Virginia', image: 'virginia-sprinkler-hero.jpg' },
        ServiceText: { title: 'Reliable Sprinkler Services in Virginia', description: 'Install and repair sprinklers in Virginia.', buttonText: 'Repair Now', image: 'virginia-sprinkler.jpg' },
        SpecificServices: {
          title: 'Sprinkler Services in Virginia',
          ServiceCards: [
            { bgImage: 'bg-sprinkler', title: 'Installation', description: 'New sprinkler systems in Virginia.', image: 'virginia-install.jpg' },
            { bgImage: 'bg-sprinkler', title: 'Repair', description: 'Leak fixes in Virginia.', image: 'virginia-repair.jpg' },
            { bgImage: 'bg-sprinkler', title: 'Upgrades', description: 'Smart upgrades in Virginia.', image: 'virginia-upgrade.jpg' },
          ],
          buttonText: 'Book Repair',
        },
      },
      {
        slug: 'virginia-lawn-sprinkler-installation',
        name: 'Lawn Sprinkler Installation',
        hero: { title: 'Lawn Sprinkler Installation in Virginia', image: 'virginia-sprinkler-install-hero.jpg' },
        ServiceText: { title: 'Smart Watering in Virginia', description: 'Install smart sprinklers in Virginia.', buttonText: 'Install Now', image: 'virginia-sprinkler-install.jpg' },
        SpecificServices: {
          title: 'Sprinkler Installation in Virginia',
          ServiceCards: [
            { bgImage: 'bg-sprinkler-install', title: 'New Systems', description: 'New setups in Virginia.', image: 'virginia-new-system.jpg' },
            { bgImage: 'bg-sprinkler-install', title: 'Replacement', description: 'Replace old systems in Virginia.', image: 'virginia-replacement.jpg' },
            { bgImage: 'bg-sprinkler-install', title: 'Controllers', description: 'Smart controllers in Virginia.', image: 'virginia-controller.jpg' },
          ],
          buttonText: 'Get Quote',
        },
      },
      {
        slug: 'virginia-landscaping-services',
        name: 'Landscaping Services',
        hero: { title: 'Landscaping Services in Virginia', image: 'virginia-landscape-hero.jpg' },
        ServiceText: { title: 'Transform Your Virginia Yard', description: 'Custom landscaping for Virginia homes.', buttonText: 'Design Now', image: 'virginia-landscape.jpg' },
        SpecificServices: {
          title: 'Landscaping in Virginia',
          ServiceCards: [
            { bgImage: 'bg-landscape', title: 'Design', description: 'Custom designs in Virginia.', image: 'virginia-design.jpg' },
            { bgImage: 'bg-landscape', title: 'Installation', description: 'Installations in Virginia.', image: 'virginia-install-landscape.jpg' },
            { bgImage: 'bg-landscape', title: 'Mulching', description: 'Mulching in Virginia.', image: 'virginia-mulch.jpg' },
          ],
          buttonText: 'Start Project',
        },
      },
      {
        slug: 'virginia-lawn-health',
        name: 'Lawn Health',
        hero: { title: 'Lawn Health in Virginia', image: 'virginia-lawn-health-hero.jpg' },
        ServiceText: { title: 'Healthy Lawns in Virginia', description: 'Boost lawn vitality in Virginia.', buttonText: 'Improve Now', image: 'virginia-lawn-health.jpg' },
        SpecificServices: {
          title: 'Lawn Health in Virginia',
          ServiceCards: [
            { bgImage: 'bg-health', title: 'Fertilization', description: 'Seasonal care in Virginia.', image: 'virginia-fertilizer.jpg' },
            { bgImage: 'bg-health', title: 'Aeration', description: 'Soil care in Virginia.', image: 'virginia-aeration.jpg' },
            { bgImage: 'bg-health', title: 'Defense', description: 'Disease protection in Virginia.', image: 'virginia-defense.jpg' },
          ],
          buttonText: 'Book Health Check',
        },
      },
      {
        slug: 'virginia-tree-services',
        name: 'Tree Services',
        hero: { title: 'Tree Services in Virginia', image: 'virginia-tree-hero.jpg' },
        ServiceText: { title: 'Tree Care in Virginia', description: 'Strong trees in Virginia.', buttonText: 'Trim Now', image: 'virginia-tree.jpg' },
        SpecificServices: {
          title: 'Tree Care in Virginia',
          ServiceCards: [
            { bgImage: 'bg-tree', title: 'Injections', description: 'Tree injections in Virginia.', image: 'virginia-injection.jpg' },
            { bgImage: 'bg-tree', title: 'Pruning', description: 'Pruning in Virginia.', image: 'virginia-pruning.jpg' },
            { bgImage: 'bg-tree', title: 'Pest Control', description: 'Pest treatment in Virginia.', image: 'virginia-pest.jpg' },
          ],
          buttonText: 'Get Care',
        },
      },
      {
        slug: 'virginia-landscaping-maintenance',
        name: 'Landscaping Maintenance',
        hero: { title: 'Landscaping Maintenance in Virginia', image: 'virginia-maintenance-hero.jpg' },
        ServiceText: { title: 'Ongoing Care in Virginia', description: 'Maintain your Virginia landscape.', buttonText: 'Maintain Now', image: 'virginia-maintenance.jpg' },
        SpecificServices: {
          title: 'Maintenance in Virginia',
          ServiceCards: [
            { bgImage: 'bg-maintenance', title: 'Weeding', description: 'Weed control in Virginia.', image: 'virginia-weeding.jpg' },
            { bgImage: 'bg-maintenance', title: 'Trimming', description: 'Trimming in Virginia.', image: 'virginia-trimming.jpg' },
            { bgImage: 'bg-maintenance', title: 'Cleanup', description: 'Cleanup in Virginia.', image: 'virginia-cleanup.jpg' },
          ],
          buttonText: 'Schedule Maintenance',
        },
      },
      {
        slug: 'virginia-shrub-care',
        name: 'Shrub Care',
        hero: { title: 'Shrub Care in Virginia', image: 'virginia-shrub-hero.jpg' },
        ServiceText: { title: 'Shrub Maintenance in Virginia', description: 'Expert shrub care in Virginia.', buttonText: 'Prune Now', image: 'virginia-shrub.jpg' },
        SpecificServices: {
          title: 'Shrub Care in Virginia',
          ServiceCards: [
            { bgImage: 'bg-shrub', title: 'Pruning', description: 'Pruning in Virginia.', image: 'virginia-pruning-shrub.jpg' },
            { bgImage: 'bg-shrub', title: 'Fertilization', description: 'Fertilizing in Virginia.', image: 'virginia-fertilizer-shrub.jpg' },
            { bgImage: 'bg-shrub', title: 'Health Check', description: 'Health checks in Virginia.', image: 'virginia-health-shrub.jpg' },
          ],
          buttonText: 'Get Care',
        },
      },
      {
        slug: 'virginia-lawn-seeding',
        name: 'Lawn Seeding',
        hero: { title: 'Lawn Seeding in Virginia', image: 'virginia-seeding-hero.jpg' },
        ServiceText: { title: 'Lawn Seeding in Virginia', description: 'Revitalize your Virginia lawn.', buttonText: 'Seed Now', image: 'virginia-seeding.jpg' },
        SpecificServices: {
          title: 'Seeding in Virginia',
          ServiceCards: [
            { bgImage: 'bg-seeding', title: 'New Lawns', description: 'New lawns in Virginia.', image: 'virginia-new-lawn.jpg' },
            { bgImage: 'bg-seeding', title: 'Overseeding', description: 'Overseeding in Virginia.', image: 'virginia-overseed.jpg' },
            { bgImage: 'bg-seeding', title: 'Repair', description: 'Repair seeding in Virginia.', image: 'virginia-repair-seed.jpg' },
          ],
          buttonText: 'Book Seeding',
        },
      },
      {
        slug: 'virginia-lawn-aeration',
        name: 'Lawn Aeration',
        hero: { title: 'Lawn Aeration in Virginia', image: 'virginia-aeration-hero.jpg' },
        ServiceText: { title: 'Lawn Aeration in Virginia', description: 'Improve soil health in Virginia.', buttonText: 'Aerate Now', image: 'virginia-aeration.jpg' },
        SpecificServices: {
          title: 'Aeration in Virginia',
          ServiceCards: [
            { bgImage: 'bg-aeration', title: 'Core Aeration', description: 'Core aeration in Virginia.', image: 'virginia-core.jpg' },
            { bgImage: 'bg-aeration', title: 'Liquid Aeration', description: 'Liquid aeration in Virginia.', image: 'virginia-liquid.jpg' },
            { bgImage: 'bg-aeration', title: 'Seasonal', description: 'Seasonal aeration in Virginia.', image: 'virginia-seasonal.jpg' },
          ],
          buttonText: 'Schedule Aeration',
        },
      },
      {
        slug: 'virginia-lawn-mosquito-control',
        name: 'Lawn Mosquito Control',
        hero: { title: 'Lawn Mosquito Control in Virginia', image: 'virginia-mosquito-hero.jpg' },
        ServiceText: { title: 'Mosquito Control in Virginia', description: 'Keep mosquitoes away in Virginia.', buttonText: 'Control Now', image: 'virginia-mosquito.jpg' },
        SpecificServices: {
          title: 'Mosquito Control in Virginia',
          ServiceCards: [
            { bgImage: 'bg-mosquito', title: 'Prevention', description: 'Prevention in Virginia.', image: 'virginia-prevent.jpg' },
            { bgImage: 'bg-mosquito', title: 'Treatment', description: 'Treatment in Virginia.', image: 'virginia-treatment.jpg' },
            { bgImage: 'bg-mosquito', title: 'Seasonal Plans', description: 'Seasonal plans in Virginia.', image: 'virginia-seasonal-plan.jpg' },
          ],
          buttonText: 'Get Protection',
        },
      },
    ],
  },
  {
    id: '5',
    slug: 'michigan',
    title: 'Lawn Care Services in Michigan',
    hero: {
      title: 'Transform Your Yard into a Scenic Escape in Michigan',
      subtitle: 'Fast, affordable sprinkler repair, lawn care, and landscaping — all handled by local experts in Michigan.',
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519842/5-4_jz6vbh_14_11zon_dsm4tk.jpg',
    },
    form: {
      id: 'michigan-form',
      locationSlug: 'michigan',
    },
    ServiceText: {
      title: 'Professional Landscaping & Lawn Care Services in Michigan',
      description: 'We proudly provide the Michigan and Detroit area with professional, high-quality residential lawn care, landscaping, and property cleanups. Our dependable lawn care team provides routine lawn mowing, landscape design, and property maintenance throughout Michigan and surrounding communities. Worry and hassle-free lawn care is our specialty!',
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519842/5-3_mljoxn_16_11zon_zajmzz.jpg',
    },
    AllServices: {
      title: 'Our Services in Michigan',
      description: 'Explore our range of services tailored for Michigan lawns.',
      ServiceArray: [
        { title: 'Lawn Care Services', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856746/Landscaping-Augusta-Lawn-Care_moqscx.jpg', features: [{ description: 'Lawn Care' }, { description: 'Lawn Mowing' }, { description: 'Lawn Edging' }, { description: 'Other Lawn Services' }], buttonText: 'Lawn Care' },
        { title: 'Lawn Mowing', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856706/Lawn_Mowing_-_Lawn_Care-1000w_ziqv7c.webp', features: [{ description: 'Regular mowing in Michigan' }, { description: 'Lawn Mowing' }, { description: 'Lawn Edging' }, { description: 'Other Lawn Services' }], buttonText: 'Landscaping' },
        { title: 'Sprinkler Installation Repair', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856745/property-cleanups-Augusta-Lawn-Care_ue17op.png', features: [{ description: 'Repairs for Michigan systems' }, { description: 'Sprinkler Installation' }, { description: 'Sprinkler Repair' }, { description: 'Other Sprinkler Services' }], buttonText: 'Sprinkler' },
      ],
    },
    services: [
      {
        slug: 'michigan-lawn-care-services',
        name: 'Lawn Care Services',
        hero: { title: 'Lawn Care Services in Michigan', image: 'michigan-lawn-care.jpg' },
        ServiceText: { title: 'Expert Lawn Care in Michigan', description: 'Professional lawn care tailored for Michigan yards.', buttonText: 'Book Now', image: 'michigan-lawn.jpg' },
        SpecificServices: {
          title: 'Lawn Care Options in Michigan',
          ServiceCards: [
            { bgImage: 'bg-lawn', title: 'Mowing', description: 'Weekly mowing for Michigan lawns.', image: 'michigan-mowing.jpg' },
            { bgImage: 'bg-lawn', title: 'Fertilization', description: 'Seasonal fertilization in Michigan.', image: 'michigan-fertilizer.jpg' },
            { bgImage: 'bg-lawn', title: 'Health Check', description: 'Lawn health assessment in Michigan.', image: 'michigan-health.jpg' },
          ],
          buttonText: 'Get Started',
        },
      },
      {
        slug: 'michigan-lawn-mowing',
        name: 'Lawn Mowing',
        hero: { title: 'Lawn Mowing in Michigan', image: 'michigan-mowing-columbia.jpg' },
        ServiceText: { title: 'Precision Mowing in Michigan', description: 'Keep your Michigan lawn neat and tidy.', buttonText: 'Schedule', image: 'michigan-mowing.jpg' },
        SpecificServices: {
          title: 'Mowing Packages in Michigan',
          ServiceCards: [
            { bgImage: 'bg-mow', title: 'Weekly Mowing', description: 'Weekly service for Michigan.', image: 'michigan-weekly.jpg' },
            { bgImage: 'bg-mow', title: 'Bi-Weekly', description: 'Bi-weekly mowing in Michigan.', image: 'michigan-biweekly.jpg' },
            { bgImage: 'bg-mow', title: 'Trimming', description: 'Edge trimming in Michigan.', image: 'michigan-trimming.jpg' },
          ],
          buttonText: 'Contact Us',
        },
      },
      {
        slug: 'michigan-sprinkler-installation-repair',
        name: 'Sprinkler Installation Repair',
        hero: { title: 'Sprinkler Installation & Repair in Michigan', image: 'michigan-sprinkler-columbia.jpg' },
        ServiceText: { title: 'Reliable Sprinkler Services in Michigan', description: 'Install and repair sprinklers in Michigan.', buttonText: 'Repair Now', image: 'michigan-sprinkler.jpg' },
        SpecificServices: {
          title: 'Sprinkler Services in Michigan',
          ServiceCards: [
            { bgImage: 'bg-sprinkler', title: 'Installation', description: 'New sprinkler systems in Michigan.', image: 'michigan-install.jpg' },
            { bgImage: 'bg-sprinkler', title: 'Repair', description: 'Leak fixes in Michigan.', image: 'michigan-repair.jpg' },
            { bgImage: 'bg-sprinkler', title: 'Upgrades', description: 'Smart upgrades in Michigan.', image: 'michigan-upgrade.jpg' },
          ],
          buttonText: 'Book Repair',
        },
      },
      {
        slug: 'michigan-lawn-sprinkler-installation',
        name: 'Lawn Sprinkler Installation',
        hero: { title: 'Lawn Sprinkler Installation in Michigan', image: 'michigan-sprinkler-install-columbia.jpg' },
        ServiceText: { title: 'Smart Watering in Michigan', description: 'Install smart sprinklers in Michigan.', buttonText: 'Install Now', image: 'michigan-sprinkler-install.jpg' },
        SpecificServices: {
          title: 'Sprinkler Installation in Michigan',
          ServiceCards: [
            { bgImage: 'bg-sprinkler-install', title: 'New Systems', description: 'New setups in Michigan.', image: 'michigan-new-system.jpg' },
            { bgImage: 'bg-sprinkler-install', title: 'Replacement', description: 'Replace old systems in Michigan.', image: 'michigan-replacement.jpg' },
            { bgImage: 'bg-sprinkler-install', title: 'Controllers', description: 'Smart controllers in Michigan.', image: 'michigan-controller.jpg' },
          ],
          buttonText: 'Get Quote',
        },
      },
      {
        slug: 'michigan-landscaping-services',
        name: 'Landscaping Services',
        hero: { title: 'Landscaping Services in Michigan', image: 'michigan-landscape-columbia.jpg' },
        ServiceText: { title: 'Transform Your Michigan Yard', description: 'Custom landscaping for Michigan homes.', buttonText: 'Design Now', image: 'michigan-landscape.jpg' },
        SpecificServices: {
          title: 'Landscaping in Michigan',
          ServiceCards: [
            { bgImage: 'bg-landscape', title: 'Design', description: 'Custom designs in Michigan.', image: 'michigan-design.jpg' },
            { bgImage: 'bg-landscape', title: 'Installation', description: 'Installations in Michigan.', image: 'michigan-install-landscape.jpg' },
            { bgImage: 'bg-landscape', title: 'Mulching', description: 'Mulching in Michigan.', image: 'michigan-mulch.jpg' },
          ],
          buttonText: 'Start Project',
        },
      },
      {
        slug: 'michigan-lawn-health',
        name: 'Lawn Health',
        hero: { title: 'Lawn Health in Michigan', image: 'michigan-lawn-health-columbia.jpg' },
        ServiceText: { title: 'Healthy Lawns in Michigan', description: 'Boost lawn vitality in Michigan.', buttonText: 'Improve Now', image: 'michigan-lawn-health.jpg' },
        SpecificServices: {
          title: 'Lawn Health in Michigan',
          ServiceCards: [
            { bgImage: 'bg-health', title: 'Fertilization', description: 'Seasonal care in Michigan.', image: 'michigan-fertilizer.jpg' },
            { bgImage: 'bg-health', title: 'Aeration', description: 'Soil care in Michigan.', image: 'michigan-aeration.jpg' },
            { bgImage: 'bg-health', title: 'Defense', description: 'Disease protection in Michigan.', image: 'michigan-defense.jpg' },
          ],
          buttonText: 'Book Health Check',
        },
      },
      {
        slug: 'michigan-tree-services',
        name: 'Tree Services',
        hero: { title: 'Tree Services in Michigan', image: 'michigan-tree-columbia.jpg' },
        ServiceText: { title: 'Tree Care in Michigan', description: 'Strong trees in Michigan.', buttonText: 'Trim Now', image: 'michigan-tree.jpg' },
        SpecificServices: {
          title: 'Tree Care in Michigan',
          ServiceCards: [
            { bgImage: 'bg-tree', title: 'Injections', description: 'Tree injections in Michigan.', image: 'michigan-injection.jpg' },
            { bgImage: 'bg-tree', title: 'Pruning', description: 'Pruning in Michigan.', image: 'michigan-pruning.jpg' },
            { bgImage: 'bg-tree', title: 'Pest Control', description: 'Pest treatment in Michigan.', image: 'michigan-pest.jpg' },
          ],
          buttonText: 'Get Care',
        },
      },
      {
        slug: 'michigan-landscaping-maintenance',
        name: 'Landscaping Maintenance',
        hero: { title: 'Landscaping Maintenance in Michigan', image: 'michigan-maintenance-columbia.jpg' },
        ServiceText: { title: 'Ongoing Care in Michigan', description: 'Maintain your Michigan landscape.', buttonText: 'Maintain Now', image: 'michigan-maintenance.jpg' },
        SpecificServices: {
          title: 'Maintenance in Michigan',
          ServiceCards: [
            { bgImage: 'bg-maintenance', title: 'Weeding', description: 'Weed control in Michigan.', image: 'michigan-weeding.jpg' },
            { bgImage: 'bg-maintenance', title: 'Trimming', description: 'Trimming in Michigan.', image: 'michigan-trimming.jpg' },
            { bgImage: 'bg-maintenance', title: 'Cleanup', description: 'Cleanup in Michigan.', image: 'michigan-cleanup.jpg' },
          ],
          buttonText: 'Schedule Maintenance',
        },
      },
      {
        slug: 'michigan-shrub-care',
        name: 'Shrub Care',
        hero: { title: 'Shrub Care in Michigan', image: 'michigan-shrub-columbia.jpg' },
        ServiceText: { title: 'Shrub Maintenance in Michigan', description: 'Expert shrub care in Michigan.', buttonText: 'Prune Now', image: 'michigan-shrub.jpg' },
        SpecificServices: {
          title: 'Shrub Care in Michigan',
          ServiceCards: [
            { bgImage: 'bg-shrub', title: 'Pruning', description: 'Pruning in Michigan.', image: 'michigan-pruning-shrub.jpg' },
            { bgImage: 'bg-shrub', title: 'Fertilization', description: 'Fertilizing in Michigan.', image: 'michigan-fertilizer-shrub.jpg' },
            { bgImage: 'bg-shrub', title: 'Health Check', description: 'Health checks in Michigan.', image: 'michigan-health-shrub.jpg' },
          ],
          buttonText: 'Get Care',
        },
      },
      {
        slug: 'michigan-lawn-seeding',
        name: 'Lawn Seeding',
        hero: { title: 'Lawn Seeding in Michigan', image: 'michigan-seeding-columbia.jpg' },
        ServiceText: { title: 'Lawn Seeding in Michigan', description: 'Revitalize your Michigan lawn.', buttonText: 'Seed Now', image: 'michigan-seeding.jpg' },
        SpecificServices: {
          title: 'Seeding in Michigan',
          ServiceCards: [
            { bgImage: 'bg-seeding', title: 'New Lawns', description: 'New lawns in Michigan.', image: 'michigan-new-lawn.jpg' },
            { bgImage: 'bg-seeding', title: 'Overseeding', description: 'Overseeding in Michigan.', image: 'michigan-overseed.jpg' },
            { bgImage: 'bg-seeding', title: 'Repair', description: 'Repair seeding in Michigan.', image: 'michigan-repair-seed.jpg' },
          ],
          buttonText: 'Book Seeding',
        },
      },
      {
        slug: 'michigan-lawn-aeration',
        name: 'Lawn Aeration',
        hero: { title: 'Lawn Aeration in Michigan', image: 'michigan-aeration-columbia.jpg' },
        ServiceText: { title: 'Lawn Aeration in Michigan', description: 'Improve soil health in Michigan.', buttonText: 'Aerate Now', image: 'michigan-aeration.jpg' },
        SpecificServices: {
          title: 'Aeration in Michigan',
          ServiceCards: [
            { bgImage: 'bg-aeration', title: 'Core Aeration', description: 'Core aeration in Michigan.', image: 'michigan-core.jpg' },
            { bgImage: 'bg-aeration', title: 'Liquid Aeration', description: 'Liquid aeration in Michigan.', image: 'michigan-liquid.jpg' },
            { bgImage: 'bg-aeration', title: 'Seasonal', description: 'Seasonal aeration in Michigan.', image: 'michigan-seasonal.jpg' },
          ],
          buttonText: 'Schedule Aeration',
        },
      },
      {
        slug: 'michigan-lawn-mosquito-control',
        name: 'Lawn Mosquito Control',
        hero: { title: 'Lawn Mosquito Control in Michigan', image: 'michigan-mosquito-columbia.jpg' },
        ServiceText: { title: 'Mosquito Control in Michigan', description: 'Keep mosquitoes away in Michigan.', buttonText: 'Control Now', image: 'michigan-mosquito.jpg' },
        SpecificServices: {
          title: 'Mosquito Control in Michigan',
          ServiceCards: [
            { bgImage: 'bg-mosquito', title: 'Prevention', description: 'Prevention in Michigan.', image: 'michigan-prevent.jpg' },
            { bgImage: 'bg-mosquito', title: 'Treatment', description: 'Treatment in Michigan.', image: 'michigan-treatment.jpg' },
            { bgImage: 'bg-mosquito', title: 'Seasonal Plans', description: 'Seasonal plans in Michigan.', image: 'michigan-seasonal-plan.jpg' },
          ],
          buttonText: 'Get Protection',
        },
      },
    ],
  },

  {
    id: '6',
    slug: 'georgia',
    title: 'Lawn Care Services in Georgia',
    hero: {
      title: 'Transform Your Yard into a Southern Retreat in Georgia',
      subtitle: 'Fast, affordable sprinkler repair, lawn care, and landscaping — all handled by local experts in Georgia.',
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755857928/3-3_qcmj9y_xmtmmy.jpg',
    },
    form: {
      id: 'georgia-form',
      locationSlug: 'georgia',
    },
    ServiceText: {
      title: 'Professional Landscaping & Lawn Care Services in Georgia',
      description: 'We proudly provide the Georgia and Atlanta area with professional, high-quality residential lawn care, landscaping, and property cleanups. Our dependable lawn care team provides routine lawn mowing, landscape design, and property maintenance throughout Georgia and surrounding communities. Worry and hassle-free lawn care is our specialty!',
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755857929/2-5_bbcjht_b0tgbz.jpg',
    },
    AllServices: {
      title: 'Our Services in Georgia',
      description: 'Explore our range of services tailored for Georgia lawns.',
      ServiceArray: [
        { title: 'Lawn Care Services', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856746/Landscaping-Augusta-Lawn-Care_moqscx.jpg', features: [{ description: 'Lawn Care' }, { description: 'Lawn Mowing' }, { description: 'Lawn Edging' }, { description: 'Other Lawn Services' }], buttonText: 'Lawn Care' },
        { title: 'Lawn Mowing', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856706/Lawn_Mowing_-_Lawn_Care-1000w_ziqv7c.webp', features: [{ description: 'Regular mowing in Georgia' }, { description: 'Lawn Mowing' }, { description: 'Lawn Edging' }, { description: 'Other Lawn Services' }], buttonText: 'Landscaping' },
        { title: 'Sprinkler Installation Repair', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856745/property-cleanups-Augusta-Lawn-Care_ue17op.png', features: [{ description: 'Repairs for Georgia systems' }, { description: 'Sprinkler Installation' }, { description: 'Sprinkler Repair' }, { description: 'Other Sprinkler Services' }], buttonText: 'Sprinkler' },
      ],
    },
    services: [
      {
        slug: 'georgia-lawn-care-services',
        name: 'Lawn Care Services',
        hero: { title: 'Lawn Care Services in Georgia', image: 'georgia-lawn-care.jpg' },
        ServiceText: { title: 'Expert Lawn Care in Georgia', description: 'Professional lawn care tailored for Georgia yards.', buttonText: 'Book Now', image: 'georgia-lawn.jpg' },
        SpecificServices: {
          title: 'Lawn Care Options in Georgia',
          ServiceCards: [
            { bgImage: 'bg-lawn', title: 'Mowing', description: 'Weekly mowing for Georgia lawns.', image: 'georgia-mowing.jpg' },
            { bgImage: 'bg-lawn', title: 'Fertilization', description: 'Seasonal fertilization in Georgia.', image: 'georgia-fertilizer.jpg' },
            { bgImage: 'bg-lawn', title: 'Health Check', description: 'Lawn health assessment in Georgia.', image: 'georgia-health.jpg' },
          ],
          buttonText: 'Get Started',
        },
      },
      {
        slug: 'georgia-lawn-mowing',
        name: 'Lawn Mowing',
        hero: { title: 'Lawn Mowing in Georgia', image: 'georgia-mowing-columbia.jpg' },
        ServiceText: { title: 'Precision Mowing in Georgia', description: 'Keep your Georgia lawn neat and tidy.', buttonText: 'Schedule', image: 'georgia-mowing.jpg' },
        SpecificServices: {
          title: 'Mowing Packages in Georgia',
          ServiceCards: [
            { bgImage: 'bg-mow', title: 'Weekly Mowing', description: 'Weekly service for Georgia.', image: 'georgia-weekly.jpg' },
            { bgImage: 'bg-mow', title: 'Bi-Weekly', description: 'Bi-weekly mowing in Georgia.', image: 'georgia-biweekly.jpg' },
            { bgImage: 'bg-mow', title: 'Trimming', description: 'Edge trimming in Georgia.', image: 'georgia-trimming.jpg' },
          ],
          buttonText: 'Contact Us',
        },
      },
      {
        slug: 'georgia-sprinkler-installation-repair',
        name: 'Sprinkler Installation Repair',
        hero: { title: 'Sprinkler Installation & Repair in Georgia', image: 'georgia-sprinkler-columbia.jpg' },
        ServiceText: { title: 'Reliable Sprinkler Services in Georgia', description: 'Install and repair sprinklers in Georgia.', buttonText: 'Repair Now', image: 'georgia-sprinkler.jpg' },
        SpecificServices: {
          title: 'Sprinkler Services in Georgia',
          ServiceCards: [
            { bgImage: 'bg-sprinkler', title: 'Installation', description: 'New sprinkler systems in Georgia.', image: 'georgia-install.jpg' },
            { bgImage: 'bg-sprinkler', title: 'Repair', description: 'Leak fixes in Georgia.', image: 'georgia-repair.jpg' },
            { bgImage: 'bg-sprinkler', title: 'Upgrades', description: 'Smart upgrades in Georgia.', image: 'georgia-upgrade.jpg' },
          ],
          buttonText: 'Book Repair',
        },
      },
      {
        slug: 'georgia-lawn-sprinkler-installation',
        name: 'Lawn Sprinkler Installation',
        hero: { title: 'Lawn Sprinkler Installation in Georgia', image: 'georgia-sprinkler-install-columbia.jpg' },
        ServiceText: { title: 'Smart Watering in Georgia', description: 'Install smart sprinklers in Georgia.', buttonText: 'Install Now', image: 'georgia-sprinkler-install.jpg' },
        SpecificServices: {
          title: 'Sprinkler Installation in Georgia',
          ServiceCards: [
            { bgImage: 'bg-sprinkler-install', title: 'New Systems', description: 'New setups in Georgia.', image: 'georgia-new-system.jpg' },
            { bgImage: 'bg-sprinkler-install', title: 'Replacement', description: 'Replace old systems in Georgia.', image: 'georgia-replacement.jpg' },
            { bgImage: 'bg-sprinkler-install', title: 'Controllers', description: 'Smart controllers in Georgia.', image: 'georgia-controller.jpg' },
          ],
          buttonText: 'Get Quote',
        },
      },
      {
        slug: 'georgia-landscaping-services',
        name: 'Landscaping Services',
        hero: { title: 'Landscaping Services in Georgia', image: 'georgia-landscape-columbia.jpg' },
        ServiceText: { title: 'Transform Your Georgia Yard', description: 'Custom landscaping for Georgia homes.', buttonText: 'Design Now', image: 'georgia-landscape.jpg' },
        SpecificServices: {
          title: 'Landscaping in Georgia',
          ServiceCards: [
            { bgImage: 'bg-landscape', title: 'Design', description: 'Custom designs in Georgia.', image: 'georgia-design.jpg' },
            { bgImage: 'bg-landscape', title: 'Installation', description: 'Installations in Georgia.', image: 'georgia-install-landscape.jpg' },
            { bgImage: 'bg-landscape', title: 'Mulching', description: 'Mulching in Georgia.', image: 'georgia-mulch.jpg' },
          ],
          buttonText: 'Start Project',
        },
      },
      {
        slug: 'georgia-lawn-health',
        name: 'Lawn Health',
        hero: { title: 'Lawn Health in Georgia', image: 'georgia-lawn-health-columbia.jpg' },
        ServiceText: { title: 'Healthy Lawns in Georgia', description: 'Boost lawn vitality in Georgia.', buttonText: 'Improve Now', image: 'georgia-lawn-health.jpg' },
        SpecificServices: {
          title: 'Lawn Health in Georgia',
          ServiceCards: [
            { bgImage: 'bg-health', title: 'Fertilization', description: 'Seasonal care in Georgia.', image: 'georgia-fertilizer.jpg' },
            { bgImage: 'bg-health', title: 'Aeration', description: 'Soil care in Georgia.', image: 'georgia-aeration.jpg' },
            { bgImage: 'bg-health', title: 'Defense', description: 'Disease protection in Georgia.', image: 'georgia-defense.jpg' },
          ],
          buttonText: 'Book Health Check',
        },
      },
      {
        slug: 'georgia-tree-services',
        name: 'Tree Services',
        hero: { title: 'Tree Services in Georgia', image: 'georgia-tree-columbia.jpg' },
        ServiceText: { title: 'Tree Care in Georgia', description: 'Strong trees in Georgia.', buttonText: 'Trim Now', image: 'georgia-tree.jpg' },
        SpecificServices: {
          title: 'Tree Care in Georgia',
          ServiceCards: [
            { bgImage: 'bg-tree', title: 'Injections', description: 'Tree injections in Georgia.', image: 'georgia-injection.jpg' },
            { bgImage: 'bg-tree', title: 'Pruning', description: 'Pruning in Georgia.', image: 'georgia-pruning.jpg' },
            { bgImage: 'bg-tree', title: 'Pest Control', description: 'Pest treatment in Georgia.', image: 'georgia-pest.jpg' },
          ],
          buttonText: 'Get Care',
        },
      },
      {
        slug: 'georgia-landscaping-maintenance',
        name: 'Landscaping Maintenance',
        hero: { title: 'Landscaping Maintenance in Georgia', image: 'georgia-maintenance-columbia.jpg' },
        ServiceText: { title: 'Ongoing Care in Georgia', description: 'Maintain your Georgia landscape.', buttonText: 'Maintain Now', image: 'georgia-maintenance.jpg' },
        SpecificServices: {
          title: 'Maintenance in Georgia',
          ServiceCards: [
            { bgImage: 'bg-maintenance', title: 'Weeding', description: 'Weed control in Georgia.', image: 'georgia-weeding.jpg' },
            { bgImage: 'bg-maintenance', title: 'Trimming', description: 'Trimming in Georgia.', image: 'georgia-trimming.jpg' },
            { bgImage: 'bg-maintenance', title: 'Cleanup', description: 'Cleanup in Georgia.', image: 'georgia-cleanup.jpg' },
          ],
          buttonText: 'Schedule Maintenance',
        },
      },
      {
        slug: 'georgia-shrub-care',
        name: 'Shrub Care',
        hero: { title: 'Shrub Care in Georgia', image: 'georgia-shrub-columbia.jpg' },
        ServiceText: { title: 'Shrub Maintenance in Georgia', description: 'Expert shrub care in Georgia.', buttonText: 'Prune Now', image: 'georgia-shrub.jpg' },
        SpecificServices: {
          title: 'Shrub Care in Georgia',
          ServiceCards: [
            { bgImage: 'bg-shrub', title: 'Pruning', description: 'Pruning in Georgia.', image: 'georgia-pruning-shrub.jpg' },
            { bgImage: 'bg-shrub', title: 'Fertilization', description: 'Fertilizing in Georgia.', image: 'georgia-fertilizer-shrub.jpg' },
            { bgImage: 'bg-shrub', title: 'Health Check', description: 'Health checks in Georgia.', image: 'georgia-health-shrub.jpg' },
          ],
          buttonText: 'Get Care',
        },
      },
      {
        slug: 'georgia-lawn-seeding',
        name: 'Lawn Seeding',
        hero: { title: 'Lawn Seeding in Georgia', image: 'georgia-seeding-columbia.jpg' },
        ServiceText: { title: 'Lawn Seeding in Georgia', description: 'Revitalize your Georgia lawn.', buttonText: 'Seed Now', image: 'georgia-seeding.jpg' },
        SpecificServices: {
          title: 'Seeding in Georgia',
          ServiceCards: [
            { bgImage: 'bg-seeding', title: 'New Lawns', description: 'New lawns in Georgia.', image: 'georgia-new-lawn.jpg' },
            { bgImage: 'bg-seeding', title: 'Overseeding', description: 'Overseeding in Georgia.', image: 'georgia-overseed.jpg' },
            { bgImage: 'bg-seeding', title: 'Repair', description: 'Repair seeding in Georgia.', image: 'georgia-repair-seed.jpg' },
          ],
          buttonText: 'Book Seeding',
        },
      },
      {
        slug: 'georgia-lawn-aeration',
        name: 'Lawn Aeration',
        hero: { title: 'Lawn Aeration in Georgia', image: 'georgia-aeration-columbia.jpg' },
        ServiceText: { title: 'Lawn Aeration in Georgia', description: 'Improve soil health in Georgia.', buttonText: 'Aerate Now', image: 'georgia-aeration.jpg' },
        SpecificServices: {
          title: 'Aeration in Georgia',
          ServiceCards: [
            { bgImage: 'bg-aeration', title: 'Core Aeration', description: 'Core aeration in Georgia.', image: 'georgia-core.jpg' },
            { bgImage: 'bg-aeration', title: 'Liquid Aeration', description: 'Liquid aeration in Georgia.', image: 'georgia-liquid.jpg' },
            { bgImage: 'bg-aeration', title: 'Seasonal', description: 'Seasonal aeration in Georgia.', image: 'georgia-seasonal.jpg' },
          ],
          buttonText: 'Schedule Aeration',
        },
      },
      {
        slug: 'georgia-lawn-mosquito-control',
        name: 'Lawn Mosquito Control',
        hero: { title: 'Lawn Mosquito Control in Georgia', image: 'georgia-mosquito-columbia.jpg' },
        ServiceText: { title: 'Mosquito Control in Georgia', description: 'Keep mosquitoes away in Georgia.', buttonText: 'Control Now', image: 'georgia-mosquito.jpg' },
        SpecificServices: {
          title: 'Mosquito Control in Georgia',
          ServiceCards: [
            { bgImage: 'bg-mosquito', title: 'Prevention', description: 'Prevention in Georgia.', image: 'georgia-prevent.jpg' },
            { bgImage: 'bg-mosquito', title: 'Treatment', description: 'Treatment in Georgia.', image: 'georgia-treatment.jpg' },
            { bgImage: 'bg-mosquito', title: 'Seasonal Plans', description: 'Seasonal plans in Georgia.', image: 'georgia-seasonal-plan.jpg' },
          ],
          buttonText: 'Get Protection',
        },
      },
    ],
  },

  {
    id: '7',
    slug: 'north-carolina',
    title: 'Lawn Care Services in North Carolina',
    hero: {
      title: 'Transform Your Yard into a Green Haven in North Carolina',
      subtitle: 'Fast, affordable sprinkler repair, lawn care, and landscaping — all handled by local experts in North Carolina.',
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755857928/2-3_ujplq4_f5fqgt.jpg',
    },
    form: {
      id: 'north-carolina-form',
      locationSlug: 'north-carolina',
    },
    ServiceText: {
      title: 'Professional Landscaping & Lawn Care Services in North Carolina',
      description: 'We proudly provide the North Carolina and Charlotte area with professional, high-quality residential lawn care, landscaping, and property cleanups. Our dependable lawn care team provides routine lawn mowing, landscape design, and property maintenance throughout North Carolina and surrounding communities. Worry and hassle-free lawn care is our specialty!',
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519848/lastSection_eyynym_8_11zon_ictkj0.jpg',
    },
    AllServices: {
      title: 'Our Services in North Carolina',
      description: 'Explore our range of services tailored for North Carolina lawns.',
      ServiceArray: [
        { title: 'Lawn Care Services', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856746/Landscaping-Augusta-Lawn-Care_moqscx.jpg', features: [{ description: 'Lawn Care' }, { description: 'Lawn Mowing' }, { description: 'Lawn Edging' }, { description: 'Other Lawn Services' }], buttonText: 'Lawn Care' },
        { title: 'Lawn Mowing', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856706/Lawn_Mowing_-_Lawn_Care-1000w_ziqv7c.webp', features: [{ description: 'Regular mowing in North Carolina' }, { description: 'Lawn Mowing' }, { description: 'Lawn Edging' }, { description: 'Other Lawn Services' }], buttonText: 'Landscaping' },
        { title: 'Sprinkler Installation Repair', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856745/property-cleanups-Augusta-Lawn-Care_ue17op.png', features: [{ description: 'Repairs for North Carolina systems' }, { description: 'Sprinkler Installation' }, { description: 'Sprinkler Repair' }, { description: 'Other Sprinkler Services' }], buttonText: 'Sprinkler' },
      ],
    },
    services: [
      {
        slug: 'north-carolina-lawn-care-services',
        name: 'Lawn Care Services',
        hero: { title: 'Lawn Care Services in North Carolina', image: 'north-carolina-lawn-care.jpg' },
        ServiceText: { title: 'Expert Lawn Care in North Carolina', description: 'Professional lawn care tailored for North Carolina yards.', buttonText: 'Book Now', image: 'north-carolina-lawn.jpg' },
        SpecificServices: {
          title: 'Lawn Care Options in North Carolina',
          ServiceCards: [
            { bgImage: 'bg-lawn', title: 'Mowing', description: 'Weekly mowing for North Carolina lawns.', image: 'north-carolina-mowing.jpg' },
            { bgImage: 'bg-lawn', title: 'Fertilization', description: 'Seasonal fertilization in North Carolina.', image: 'north-carolina-fertilizer.jpg' },
            { bgImage: 'bg-lawn', title: 'Health Check', description: 'Lawn health assessment in North Carolina.', image: 'north-carolina-health.jpg' },
          ],
          buttonText: 'Get Started',
        },
      },
      {
        slug: 'north-carolina-lawn-mowing',
        name: 'Lawn Mowing',
        hero: { title: 'Lawn Mowing in North Carolina', image: 'north-carolina-mowing-columbia.jpg' },
        ServiceText: { title: 'Precision Mowing in North Carolina', description: 'Keep your North Carolina lawn neat and tidy.', buttonText: 'Schedule', image: 'north-carolina-mowing.jpg' },
        SpecificServices: {
          title: 'Mowing Packages in North Carolina',
          ServiceCards: [
            { bgImage: 'bg-mow', title: 'Weekly Mowing', description: 'Weekly service for North Carolina.', image: 'north-carolina-weekly.jpg' },
            { bgImage: 'bg-mow', title: 'Bi-Weekly', description: 'Bi-weekly mowing in North Carolina.', image: 'north-carolina-biweekly.jpg' },
            { bgImage: 'bg-mow', title: 'Trimming', description: 'Edge trimming in North Carolina.', image: 'north-carolina-trimming.jpg' },
          ],
          buttonText: 'Contact Us',
        },
      },
      {
        slug: 'north-carolina-sprinkler-installation-repair',
        name: 'Sprinkler Installation Repair',
        hero: { title: 'Sprinkler Installation & Repair in North Carolina', image: 'north-carolina-sprinkler-columbia.jpg' },
        ServiceText: { title: 'Reliable Sprinkler Services in North Carolina', description: 'Install and repair sprinklers in North Carolina.', buttonText: 'Repair Now', image: 'north-carolina-sprinkler.jpg' },
        SpecificServices: {
          title: 'Sprinkler Services in North Carolina',
          ServiceCards: [
            { bgImage: 'bg-sprinkler', title: 'Installation', description: 'New sprinkler systems in North Carolina.', image: 'north-carolina-install.jpg' },
            { bgImage: 'bg-sprinkler', title: 'Repair', description: 'Leak fixes in North Carolina.', image: 'north-carolina-repair.jpg' },
            { bgImage: 'bg-sprinkler', title: 'Upgrades', description: 'Smart upgrades in North Carolina.', image: 'north-carolina-upgrade.jpg' },
          ],
          buttonText: 'Book Repair',
        },
      },
      {
        slug: 'north-carolina-lawn-sprinkler-installation',
        name: 'Lawn Sprinkler Installation',
        hero: { title: 'Lawn Sprinkler Installation in North Carolina', image: 'north-carolina-sprinkler-install-columbia.jpg' },
        ServiceText: { title: 'Smart Watering in North Carolina', description: 'Install smart sprinklers in North Carolina.', buttonText: 'Install Now', image: 'north-carolina-sprinkler-install.jpg' },
        SpecificServices: {
          title: 'Sprinkler Installation in North Carolina',
          ServiceCards: [
            { bgImage: 'bg-sprinkler-install', title: 'New Systems', description: 'New setups in North Carolina.', image: 'north-carolina-new-system.jpg' },
            { bgImage: 'bg-sprinkler-install', title: 'Replacement', description: 'Replace old systems in North Carolina.', image: 'north-carolina-replacement.jpg' },
            { bgImage: 'bg-sprinkler-install', title: 'Controllers', description: 'Smart controllers in North Carolina.', image: 'north-carolina-controller.jpg' },
          ],
          buttonText: 'Get Quote',
        },
      },
      {
        slug: 'north-carolina-landscaping-services',
        name: 'Landscaping Services',
        hero: { title: 'Landscaping Services in North Carolina', image: 'north-carolina-landscape-columbia.jpg' },
        ServiceText: { title: 'Transform Your North Carolina Yard', description: 'Custom landscaping for North Carolina homes.', buttonText: 'Design Now', image: 'north-carolina-landscape.jpg' },
        SpecificServices: {
          title: 'Landscaping in North Carolina',
          ServiceCards: [
            { bgImage: 'bg-landscape', title: 'Design', description: 'Custom designs in North Carolina.', image: 'north-carolina-design.jpg' },
            { bgImage: 'bg-landscape', title: 'Installation', description: 'Installations in North Carolina.', image: 'north-carolina-install-landscape.jpg' },
            { bgImage: 'bg-landscape', title: 'Mulching', description: 'Mulching in North Carolina.', image: 'north-carolina-mulch.jpg' },
          ],
          buttonText: 'Start Project',
        },
      },
      {
        slug: 'north-carolina-lawn-health',
        name: 'Lawn Health',
        hero: { title: 'Lawn Health in North Carolina', image: 'north-carolina-lawn-health-columbia.jpg' },
        ServiceText: { title: 'Healthy Lawns in North Carolina', description: 'Boost lawn vitality in North Carolina.', buttonText: 'Improve Now', image: 'north-carolina-lawn-health.jpg' },
        SpecificServices: {
          title: 'Lawn Health in North Carolina',
          ServiceCards: [
            { bgImage: 'bg-health', title: 'Fertilization', description: 'Seasonal care in North Carolina.', image: 'north-carolina-fertilizer.jpg' },
            { bgImage: 'bg-health', title: 'Aeration', description: 'Soil care in North Carolina.', image: 'north-carolina-aeration.jpg' },
            { bgImage: 'bg-health', title: 'Defense', description: 'Disease protection in North Carolina.', image: 'north-carolina-defense.jpg' },
          ],
          buttonText: 'Book Health Check',
        },
      },
      {
        slug: 'north-carolina-tree-services',
        name: 'Tree Services',
        hero: { title: 'Tree Services in North Carolina', image: 'north-carolina-tree-columbia.jpg' },
        ServiceText: { title: 'Tree Care in North Carolina', description: 'Strong trees in North Carolina.', buttonText: 'Trim Now', image: 'north-carolina-tree.jpg' },
        SpecificServices: {
          title: 'Tree Care in North Carolina',
          ServiceCards: [
            { bgImage: 'bg-tree', title: 'Injections', description: 'Tree injections in North Carolina.', image: 'north-carolina-injection.jpg' },
            { bgImage: 'bg-tree', title: 'Pruning', description: 'Pruning in North Carolina.', image: 'north-carolina-pruning.jpg' },
            { bgImage: 'bg-tree', title: 'Pest Control', description: 'Pest treatment in North Carolina.', image: 'north-carolina-pest.jpg' },
          ],
          buttonText: 'Get Care',
        },
      },
      {
        slug: 'north-carolina-landscaping-maintenance',
        name: 'Landscaping Maintenance',
        hero: { title: 'Landscaping Maintenance in North Carolina', image: 'north-carolina-maintenance-columbia.jpg' },
        ServiceText: { title: 'Ongoing Care in North Carolina', description: 'Maintain your North Carolina landscape.', buttonText: 'Maintain Now', image: 'north-carolina-maintenance.jpg' },
        SpecificServices: {
          title: 'Maintenance in North Carolina',
          ServiceCards: [
            { bgImage: 'bg-maintenance', title: 'Weeding', description: 'Weed control in North Carolina.', image: 'north-carolina-weeding.jpg' },
            { bgImage: 'bg-maintenance', title: 'Trimming', description: 'Trimming in North Carolina.', image: 'north-carolina-trimming.jpg' },
            { bgImage: 'bg-maintenance', title: 'Cleanup', description: 'Cleanup in North Carolina.', image: 'north-carolina-cleanup.jpg' },
          ],
          buttonText: 'Schedule Maintenance',
        },
      },
      {
        slug: 'north-carolina-shrub-care',
        name: 'Shrub Care',
        hero: { title: 'Shrub Care in North Carolina', image: 'north-carolina-shrub-columbia.jpg' },
        ServiceText: { title: 'Shrub Maintenance in North Carolina', description: 'Expert shrub care in North Carolina.', buttonText: 'Prune Now', image: 'north-carolina-shrub.jpg' },
        SpecificServices: {
          title: 'Shrub Care in North Carolina',
          ServiceCards: [
            { bgImage: 'bg-shrub', title: 'Pruning', description: 'Pruning in North Carolina.', image: 'north-carolina-pruning-shrub.jpg' },
            { bgImage: 'bg-shrub', title: 'Fertilization', description: 'Fertilizing in North Carolina.', image: 'north-carolina-fertilizer-shrub.jpg' },
            { bgImage: 'bg-shrub', title: 'Health Check', description: 'Health checks in North Carolina.', image: 'north-carolina-health-shrub.jpg' },
          ],
          buttonText: 'Get Care',
        },
      },
      {
        slug: 'north-carolina-lawn-seeding',
        name: 'Lawn Seeding',
        hero: { title: 'Lawn Seeding in North Carolina', image: 'north-carolina-seeding-columbia.jpg' },
        ServiceText: { title: 'Lawn Seeding in North Carolina', description: 'Revitalize your North Carolina lawn.', buttonText: 'Seed Now', image: 'north-carolina-seeding.jpg' },
        SpecificServices: {
          title: 'Seeding in North Carolina',
          ServiceCards: [
            { bgImage: 'bg-seeding', title: 'New Lawns', description: 'New lawns in North Carolina.', image: 'north-carolina-new-lawn.jpg' },
            { bgImage: 'bg-seeding', title: 'Overseeding', description: 'Overseeding in North Carolina.', image: 'north-carolina-overseed.jpg' },
            { bgImage: 'bg-seeding', title: 'Repair', description: 'Repair seeding in North Carolina.', image: 'north-carolina-repair-seed.jpg' },
          ],
          buttonText: 'Book Seeding',
        },
      },
      {
        slug: 'north-carolina-lawn-aeration',
        name: 'Lawn Aeration',
        hero: { title: 'Lawn Aeration in North Carolina', image: 'north-carolina-aeration-columbia.jpg' },
        ServiceText: { title: 'Lawn Aeration in North Carolina', description: 'Improve soil health in North Carolina.', buttonText: 'Aerate Now', image: 'north-carolina-aeration.jpg' },
        SpecificServices: {
          title: 'Aeration in North Carolina',
          ServiceCards: [
            { bgImage: 'bg-aeration', title: 'Core Aeration', description: 'Core aeration in North Carolina.', image: 'north-carolina-core.jpg' },
            { bgImage: 'bg-aeration', title: 'Liquid Aeration', description: 'Liquid aeration in North Carolina.', image: 'north-carolina-liquid.jpg' },
            { bgImage: 'bg-aeration', title: 'Seasonal', description: 'Seasonal aeration in North Carolina.', image: 'north-carolina-seasonal.jpg' },
          ],
          buttonText: 'Schedule Aeration',
        },
      },
      {
        slug: 'north-carolina-lawn-mosquito-control',
        name: 'Lawn Mosquito Control',
        hero: { title: 'Lawn Mosquito Control in North Carolina', image: 'north-carolina-mosquito-columbia.jpg' },
        ServiceText: { title: 'Mosquito Control in North Carolina', description: 'Keep mosquitoes away in North Carolina.', buttonText: 'Control Now', image: 'north-carolina-mosquito.jpg' },
        SpecificServices: {
          title: 'Mosquito Control in North Carolina',
          ServiceCards: [
            { bgImage: 'bg-mosquito', title: 'Prevention', description: 'Prevention in North Carolina.', image: 'north-carolina-prevent.jpg' },
            { bgImage: 'bg-mosquito', title: 'Treatment', description: 'Treatment in North Carolina.', image: 'north-carolina-treatment.jpg' },
            { bgImage: 'bg-mosquito', title: 'Seasonal Plans', description: 'Seasonal plans in North Carolina.', image: 'north-carolina-seasonal-plan.jpg' },
          ],
          buttonText: 'Get Protection',
        },
      },
    ],
  },
  {
    id: '8',
    slug: 'nebraska',
    title: 'Lawn Care Services in Nebraska',
    hero: {
      title: 'Transform Your Yard into a Prairie Paradise in Nebraska',
      subtitle: 'Fast, affordable sprinkler repair, lawn care, and landscaping — all handled by local experts in Nebraska.',
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519842/5-3_mljoxn_16_11zon_zajmzz.jpg',
    },
    form: {
      id: 'nebraska-form',
      locationSlug: 'nebraska',
    },
    ServiceText: {
      title: 'Professional Landscaping & Lawn Care Services in Nebraska',
      description: 'We proudly provide the Nebraska and Omaha area with professional, high-quality residential lawn care, landscaping, and property cleanups. Our dependable lawn care team provides routine lawn mowing, landscape design, and property maintenance throughout Nebraska and surrounding communities. Worry and hassle-free lawn care is our specialty!',
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Complete-Solutions-for-Stunning-Landscapes_amu5ss.jpg',
    },
    AllServices: {
      title: 'Our Services in Nebraska',
      description: 'Explore our range of services tailored for Nebraska lawns.',
      ServiceArray: [
        { title: 'Lawn Care Services', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856746/Landscaping-Augusta-Lawn-Care_moqscx.jpg', features: [{ description: 'Lawn Care' }, { description: 'Lawn Mowing' }, { description: 'Lawn Edging' }, { description: 'Other Lawn Services' }], buttonText: 'Lawn Care' },
        { title: 'Lawn Mowing', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856706/Lawn_Mowing_-_Lawn_Care-1000w_ziqv7c.webp', features: [{ description: 'Regular mowing in Nebraska' }, { description: 'Lawn Mowing' }, { description: 'Lawn Edging' }, { description: 'Other Lawn Services' }], buttonText: 'Landscaping' },
        { title: 'Sprinkler Installation Repair', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856745/property-cleanups-Augusta-Lawn-Care_ue17op.png', features: [{ description: 'Repairs for Nebraska systems' }, { description: 'Sprinkler Installation' }, { description: 'Sprinkler Repair' }, { description: 'Other Sprinkler Services' }], buttonText: 'Sprinkler' },
      ],
    },
    services: [
      {
        slug: 'nebraska-lawn-care-services',
        name: 'Lawn Care Services',
        hero: { title: 'Lawn Care Services in Nebraska', image: 'nebraska-lawn-care.jpg' },
        ServiceText: { title: 'Expert Lawn Care in Nebraska', description: 'Professional lawn care tailored for Nebraska yards.', buttonText: 'Book Now', image: 'nebraska-lawn.jpg' },
        SpecificServices: {
          title: 'Lawn Care Options in Nebraska',
          ServiceCards: [
            { bgImage: 'bg-lawn', title: 'Mowing', description: 'Weekly mowing for Nebraska lawns.', image: 'nebraska-mowing.jpg' },
            { bgImage: 'bg-lawn', title: 'Fertilization', description: 'Seasonal fertilization in Nebraska.', image: 'nebraska-fertilizer.jpg' },
            { bgImage: 'bg-lawn', title: 'Health Check', description: 'Lawn health assessment in Nebraska.', image: 'nebraska-health.jpg' },
          ],
          buttonText: 'Get Started',
        },
      },
      {
        slug: 'nebraska-lawn-mowing',
        name: 'Lawn Mowing',
        hero: { title: 'Lawn Mowing in Nebraska', image: 'nebraska-mowing-columbia.jpg' },
        ServiceText: { title: 'Precision Mowing in Nebraska', description: 'Keep your Nebraska lawn neat and tidy.', buttonText: 'Schedule', image: 'nebraska-mowing.jpg' },
        SpecificServices: {
          title: 'Mowing Packages in Nebraska',
          ServiceCards: [
            { bgImage: 'bg-mow', title: 'Weekly Mowing', description: 'Weekly service for Nebraska.', image: 'nebraska-weekly.jpg' },
            { bgImage: 'bg-mow', title: 'Bi-Weekly', description: 'Bi-weekly mowing in Nebraska.', image: 'nebraska-biweekly.jpg' },
            { bgImage: 'bg-mow', title: 'Trimming', description: 'Edge trimming in Nebraska.', image: 'nebraska-trimming.jpg' },
          ],
          buttonText: 'Contact Us',
        },
      },
      {
        slug: 'nebraska-sprinkler-installation-repair',
        name: 'Sprinkler Installation Repair',
        hero: { title: 'Sprinkler Installation & Repair in Nebraska', image: 'nebraska-sprinkler-columbia.jpg' },
        ServiceText: { title: 'Reliable Sprinkler Services in Nebraska', description: 'Install and repair sprinklers in Nebraska.', buttonText: 'Repair Now', image: 'nebraska-sprinkler.jpg' },
        SpecificServices: {
          title: 'Sprinkler Services in Nebraska',
          ServiceCards: [
            { bgImage: 'bg-sprinkler', title: 'Installation', description: 'New sprinkler systems in Nebraska.', image: 'nebraska-install.jpg' },
            { bgImage: 'bg-sprinkler', title: 'Repair', description: 'Leak fixes in Nebraska.', image: 'nebraska-repair.jpg' },
            { bgImage: 'bg-sprinkler', title: 'Upgrades', description: 'Smart upgrades in Nebraska.', image: 'nebraska-upgrade.jpg' },
          ],
          buttonText: 'Book Repair',
        },
      },
      {
        slug: 'nebraska-lawn-sprinkler-installation',
        name: 'Lawn Sprinkler Installation',
        hero: { title: 'Lawn Sprinkler Installation in Nebraska', image: 'nebraska-sprinkler-install-columbia.jpg' },
        ServiceText: { title: 'Smart Watering in Nebraska', description: 'Install smart sprinklers in Nebraska.', buttonText: 'Install Now', image: 'nebraska-sprinkler-install.jpg' },
        SpecificServices: {
          title: 'Sprinkler Installation in Nebraska',
          ServiceCards: [
            { bgImage: 'bg-sprinkler-install', title: 'New Systems', description: 'New setups in Nebraska.', image: 'nebraska-new-system.jpg' },
            { bgImage: 'bg-sprinkler-install', title: 'Replacement', description: 'Replace old systems in Nebraska.', image: 'nebraska-replacement.jpg' },
            { bgImage: 'bg-sprinkler-install', title: 'Controllers', description: 'Smart controllers in Nebraska.', image: 'nebraska-controller.jpg' },
          ],
          buttonText: 'Get Quote',
        },
      },
      {
        slug: 'nebraska-landscaping-services',
        name: 'Landscaping Services',
        hero: { title: 'Landscaping Services in Nebraska', image: 'nebraska-landscape-columbia.jpg' },
        ServiceText: { title: 'Transform Your Nebraska Yard', description: 'Custom landscaping for Nebraska homes.', buttonText: 'Design Now', image: 'nebraska-landscape.jpg' },
        SpecificServices: {
          title: 'Landscaping in Nebraska',
          ServiceCards: [
            { bgImage: 'bg-landscape', title: 'Design', description: 'Custom designs in Nebraska.', image: 'nebraska-design.jpg' },
            { bgImage: 'bg-landscape', title: 'Installation', description: 'Installations in Nebraska.', image: 'nebraska-install-landscape.jpg' },
            { bgImage: 'bg-landscape', title: 'Mulching', description: 'Mulching in Nebraska.', image: 'nebraska-mulch.jpg' },
          ],
          buttonText: 'Start Project',
        },
      },
      {
        slug: 'nebraska-lawn-health',
        name: 'Lawn Health',
        hero: { title: 'Lawn Health in Nebraska', image: 'nebraska-lawn-health-columbia.jpg' },
        ServiceText: { title: 'Healthy Lawns in Nebraska', description: 'Boost lawn vitality in Nebraska.', buttonText: 'Improve Now', image: 'nebraska-lawn-health.jpg' },
        SpecificServices: {
          title: 'Lawn Health in Nebraska',
          ServiceCards: [
            { bgImage: 'bg-health', title: 'Fertilization', description: 'Seasonal care in Nebraska.', image: 'nebraska-fertilizer.jpg' },
            { bgImage: 'bg-health', title: 'Aeration', description: 'Soil care in Nebraska.', image: 'nebraska-aeration.jpg' },
            { bgImage: 'bg-health', title: 'Defense', description: 'Disease protection in Nebraska.', image: 'nebraska-defense.jpg' },
          ],
          buttonText: 'Book Health Check',
        },
      },
      {
        slug: 'nebraska-tree-services',
        name: 'Tree Services',
        hero: { title: 'Tree Services in Nebraska', image: 'nebraska-tree-columbia.jpg' },
        ServiceText: { title: 'Tree Care in Nebraska', description: 'Strong trees in Nebraska.', buttonText: 'Trim Now', image: 'nebraska-tree.jpg' },
        SpecificServices: {
          title: 'Tree Care in Nebraska',
          ServiceCards: [
            { bgImage: 'bg-tree', title: 'Injections', description: 'Tree injections in Nebraska.', image: 'nebraska-injection.jpg' },
            { bgImage: 'bg-tree', title: 'Pruning', description: 'Pruning in Nebraska.', image: 'nebraska-pruning.jpg' },
            { bgImage: 'bg-tree', title: 'Pest Control', description: 'Pest treatment in Nebraska.', image: 'nebraska-pest.jpg' },
          ],
          buttonText: 'Get Care',
        },
      },
      {
        slug: 'nebraska-landscaping-maintenance',
        name: 'Landscaping Maintenance',
        hero: { title: 'Landscaping Maintenance in Nebraska', image: 'nebraska-maintenance-columbia.jpg' },
        ServiceText: { title: 'Ongoing Care in Nebraska', description: 'Maintain your Nebraska landscape.', buttonText: 'Maintain Now', image: 'nebraska-maintenance.jpg' },
        SpecificServices: {
          title: 'Maintenance in Nebraska',
          ServiceCards: [
            { bgImage: 'bg-maintenance', title: 'Weeding', description: 'Weed control in Nebraska.', image: 'nebraska-weeding.jpg' },
            { bgImage: 'bg-maintenance', title: 'Trimming', description: 'Trimming in Nebraska.', image: 'nebraska-trimming.jpg' },
            { bgImage: 'bg-maintenance', title: 'Cleanup', description: 'Cleanup in Nebraska.', image: 'nebraska-cleanup.jpg' },
          ],
          buttonText: 'Schedule Maintenance',
        },
      },
      {
        slug: 'nebraska-shrub-care',
        name: 'Shrub Care',
        hero: { title: 'Shrub Care in Nebraska', image: 'nebraska-shrub-columbia.jpg' },
        ServiceText: { title: 'Shrub Maintenance in Nebraska', description: 'Expert shrub care in Nebraska.', buttonText: 'Prune Now', image: 'nebraska-shrub.jpg' },
        SpecificServices: {
          title: 'Shrub Care in Nebraska',
          ServiceCards: [
            { bgImage: 'bg-shrub', title: 'Pruning', description: 'Pruning in Nebraska.', image: 'nebraska-pruning-shrub.jpg' },
            { bgImage: 'bg-shrub', title: 'Fertilization', description: 'Fertilizing in Nebraska.', image: 'nebraska-fertilizer-shrub.jpg' },
            { bgImage: 'bg-shrub', title: 'Health Check', description: 'Health checks in Nebraska.', image: 'nebraska-health-shrub.jpg' },
          ],
          buttonText: 'Get Care',
        },
      },
      {
        slug: 'nebraska-lawn-seeding',
        name: 'Lawn Seeding',
        hero: { title: 'Lawn Seeding in Nebraska', image: 'nebraska-seeding-columbia.jpg' },
        ServiceText: { title: 'Lawn Seeding in Nebraska', description: 'Revitalize your Nebraska lawn.', buttonText: 'Seed Now', image: 'nebraska-seeding.jpg' },
        SpecificServices: {
          title: 'Seeding in Nebraska',
          ServiceCards: [
            { bgImage: 'bg-seeding', title: 'New Lawns', description: 'New lawns in Nebraska.', image: 'nebraska-new-lawn.jpg' },
            { bgImage: 'bg-seeding', title: 'Overseeding', description: 'Overseeding in Nebraska.', image: 'nebraska-overseed.jpg' },
            { bgImage: 'bg-seeding', title: 'Repair', description: 'Repair seeding in Nebraska.', image: 'nebraska-repair-seed.jpg' },
          ],
          buttonText: 'Book Seeding',
        },
      },
      {
        slug: 'nebraska-lawn-aeration',
        name: 'Lawn Aeration',
        hero: { title: 'Lawn Aeration in Nebraska', image: 'nebraska-aeration-columbia.jpg' },
        ServiceText: { title: 'Lawn Aeration in Nebraska', description: 'Improve soil health in Nebraska.', buttonText: 'Aerate Now', image: 'nebraska-aeration.jpg' },
        SpecificServices: {
          title: 'Aeration in Nebraska',
          ServiceCards: [
            { bgImage: 'bg-aeration', title: 'Core Aeration', description: 'Core aeration in Nebraska.', image: 'nebraska-core.jpg' },
            { bgImage: 'bg-aeration', title: 'Liquid Aeration', description: 'Liquid aeration in Nebraska.', image: 'nebraska-liquid.jpg' },
            { bgImage: 'bg-aeration', title: 'Seasonal', description: 'Seasonal aeration in Nebraska.', image: 'nebraska-seasonal.jpg' },
          ],
          buttonText: 'Schedule Aeration',
        },
      },
      {
        slug: 'nebraska-lawn-mosquito-control',
        name: 'Lawn Mosquito Control',
        hero: { title: 'Lawn Mosquito Control in Nebraska', image: 'nebraska-mosquito-columbia.jpg' },
        ServiceText: { title: 'Mosquito Control in Nebraska', description: 'Keep mosquitoes away in Nebraska.', buttonText: 'Control Now', image: 'nebraska-mosquito.jpg' },
        SpecificServices: {
          title: 'Mosquito Control in Nebraska',
          ServiceCards: [
            { bgImage: 'bg-mosquito', title: 'Prevention', description: 'Prevention in Nebraska.', image: 'nebraska-prevent.jpg' },
            { bgImage: 'bg-mosquito', title: 'Treatment', description: 'Treatment in Nebraska.', image: 'nebraska-treatment.jpg' },
            { bgImage: 'bg-mosquito', title: 'Seasonal Plans', description: 'Seasonal plans in Nebraska.', image: 'nebraska-seasonal-plan.jpg' },
          ],
          buttonText: 'Get Protection',
        },
      },
    ],
  },

  {
    id: '9',
    slug: 'indiana',
    title: 'Lawn Care Services in Indiana',
    hero: {
      title: 'Transform Your Yard into a Midwest Gem in Indiana',
      subtitle: 'Fast, affordable sprinkler repair, lawn care, and landscaping — all handled by local experts in Indiana.',
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991817/Banner-Image_bzotz6.jpg',
    },
    form: {
      id: 'indiana-form',
      locationSlug: 'indiana',
    },
    ServiceText: {
      title: 'Professional Landscaping & Lawn Care Services in Indiana',
      description: 'We proudly provide the Indiana and Indianapolis area with professional, high-quality residential lawn care, landscaping, and property cleanups. Our dependable lawn care team provides routine lawn mowing, landscape design, and property maintenance throughout Indiana and surrounding communities. Worry and hassle-free lawn care is our specialty!',
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991645/Your-One-Stop-Sprinkler-Solution_smaydt.jpg',
    },
    AllServices: {
      title: 'Our Services in Indiana',
      description: 'Explore our range of services tailored for Indiana lawns.',
      ServiceArray: [
        { title: 'Lawn Care Services', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856746/Landscaping-Augusta-Lawn-Care_moqscx.jpg', features: [{ description: 'Lawn Care' }, { description: 'Lawn Mowing' }, { description: 'Lawn Edging' }, { description: 'Other Lawn Services' }], buttonText: 'Lawn Care' },
        { title: 'Lawn Mowing', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856706/Lawn_Mowing_-_Lawn_Care-1000w_ziqv7c.webp', features: [{ description: 'Regular mowing in Indiana' }, { description: 'Lawn Mowing' }, { description: 'Lawn Edging' }, { description: 'Other Lawn Services' }], buttonText: 'Landscaping' },
        { title: 'Sprinkler Installation Repair', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856745/property-cleanups-Augusta-Lawn-Care_ue17op.png', features: [{ description: 'Repairs for Indiana systems' }, { description: 'Sprinkler Installation' }, { description: 'Sprinkler Repair' }, { description: 'Other Sprinkler Services' }], buttonText: 'Sprinkler' },
      ],
    },
    services: [
      {
        slug: 'indiana-lawn-care-services',
        name: 'Lawn Care Services',
        hero: { title: 'Lawn Care Services in Indiana', image: 'indiana-lawn-care.jpg' },
        ServiceText: { title: 'Expert Lawn Care in Indiana', description: 'Professional lawn care tailored for Indiana yards.', buttonText: 'Book Now', image: 'indiana-lawn.jpg' },
        SpecificServices: {
          title: 'Lawn Care Options in Indiana',
          ServiceCards: [
            { bgImage: 'bg-lawn', title: 'Mowing', description: 'Weekly mowing for Indiana lawns.', image: 'indiana-mowing.jpg' },
            { bgImage: 'bg-lawn', title: 'Fertilization', description: 'Seasonal fertilization in Indiana.', image: 'indiana-fertilizer.jpg' },
            { bgImage: 'bg-lawn', title: 'Health Check', description: 'Lawn health assessment in Indiana.', image: 'indiana-health.jpg' },
          ],
          buttonText: 'Get Started',
        },
      },
      {
        slug: 'indiana-lawn-mowing',
        name: 'Lawn Mowing',
        hero: { title: 'Lawn Mowing in Indiana', image: 'indiana-mowing-columbia.jpg' },
        ServiceText: { title: 'Precision Mowing in Indiana', description: 'Keep your Indiana lawn neat and tidy.', buttonText: 'Schedule', image: 'indiana-mowing.jpg' },
        SpecificServices: {
          title: 'Mowing Packages in Indiana',
          ServiceCards: [
            { bgImage: 'bg-mow', title: 'Weekly Mowing', description: 'Weekly service for Indiana.', image: 'indiana-weekly.jpg' },
            { bgImage: 'bg-mow', title: 'Bi-Weekly', description: 'Bi-weekly mowing in Indiana.', image: 'indiana-biweekly.jpg' },
            { bgImage: 'bg-mow', title: 'Trimming', description: 'Edge trimming in Indiana.', image: 'indiana-trimming.jpg' },
          ],
          buttonText: 'Contact Us',
        },
      },
      {
        slug: 'indiana-sprinkler-installation-repair',
        name: 'Sprinkler Installation Repair',
        hero: { title: 'Sprinkler Installation & Repair in Indiana', image: 'indiana-sprinkler-columbia.jpg' },
        ServiceText: { title: 'Reliable Sprinkler Services in Indiana', description: 'Install and repair sprinklers in Indiana.', buttonText: 'Repair Now', image: 'indiana-sprinkler.jpg' },
        SpecificServices: {
          title: 'Sprinkler Services in Indiana',
          ServiceCards: [
            { bgImage: 'bg-sprinkler', title: 'Installation', description: 'New sprinkler systems in Indiana.', image: 'indiana-install.jpg' },
            { bgImage: 'bg-sprinkler', title: 'Repair', description: 'Leak fixes in Indiana.', image: 'indiana-repair.jpg' },
            { bgImage: 'bg-sprinkler', title: 'Upgrades', description: 'Smart upgrades in Indiana.', image: 'indiana-upgrade.jpg' },
          ],
          buttonText: 'Book Repair',
        },
      },
      {
        slug: 'indiana-lawn-sprinkler-installation',
        name: 'Lawn Sprinkler Installation',
        hero: { title: 'Lawn Sprinkler Installation in Indiana', image: 'indiana-sprinkler-install-columbia.jpg' },
        ServiceText: { title: 'Smart Watering in Indiana', description: 'Install smart sprinklers in Indiana.', buttonText: 'Install Now', image: 'indiana-sprinkler-install.jpg' },
        SpecificServices: {
          title: 'Sprinkler Installation in Indiana',
          ServiceCards: [
            { bgImage: 'bg-sprinkler-install', title: 'New Systems', description: 'New setups in Indiana.', image: 'indiana-new-system.jpg' },
            { bgImage: 'bg-sprinkler-install', title: 'Replacement', description: 'Replace old systems in Indiana.', image: 'indiana-replacement.jpg' },
            { bgImage: 'bg-sprinkler-install', title: 'Controllers', description: 'Smart controllers in Indiana.', image: 'indiana-controller.jpg' },
          ],
          buttonText: 'Get Quote',
        },
      },
      {
        slug: 'indiana-landscaping-services',
        name: 'Landscaping Services',
        hero: { title: 'Landscaping Services in Indiana', image: 'indiana-landscape-columbia.jpg' },
        ServiceText: { title: 'Transform Your Indiana Yard', description: 'Custom landscaping for Indiana homes.', buttonText: 'Design Now', image: 'indiana-landscape.jpg' },
        SpecificServices: {
          title: 'Landscaping in Indiana',
          ServiceCards: [
            { bgImage: 'bg-landscape', title: 'Design', description: 'Custom designs in Indiana.', image: 'indiana-design.jpg' },
            { bgImage: 'bg-landscape', title: 'Installation', description: 'Installations in Indiana.', image: 'indiana-install-landscape.jpg' },
            { bgImage: 'bg-landscape', title: 'Mulching', description: 'Mulching in Indiana.', image: 'indiana-mulch.jpg' },
          ],
          buttonText: 'Start Project',
        },
      },
      {
        slug: 'indiana-lawn-health',
        name: 'Lawn Health',
        hero: { title: 'Lawn Health in Indiana', image: 'indiana-lawn-health-columbia.jpg' },
        ServiceText: { title: 'Healthy Lawns in Indiana', description: 'Boost lawn vitality in Indiana.', buttonText: 'Improve Now', image: 'indiana-lawn-health.jpg' },
        SpecificServices: {
          title: 'Lawn Health in Indiana',
          ServiceCards: [
            { bgImage: 'bg-health', title: 'Fertilization', description: 'Seasonal care in Indiana.', image: 'indiana-fertilizer.jpg' },
            { bgImage: 'bg-health', title: 'Aeration', description: 'Soil care in Indiana.', image: 'indiana-aeration.jpg' },
            { bgImage: 'bg-health', title: 'Defense', description: 'Disease protection in Indiana.', image: 'indiana-defense.jpg' },
          ],
          buttonText: 'Book Health Check',
        },
      },
      {
        slug: 'indiana-tree-services',
        name: 'Tree Services',
        hero: { title: 'Tree Services in Indiana', image: 'indiana-tree-columbia.jpg' },
        ServiceText: { title: 'Tree Care in Indiana', description: 'Strong trees in Indiana.', buttonText: 'Trim Now', image: 'indiana-tree.jpg' },
        SpecificServices: {
          title: 'Tree Care in Indiana',
          ServiceCards: [
            { bgImage: 'bg-tree', title: 'Injections', description: 'Tree injections in Indiana.', image: 'indiana-injection.jpg' },
            { bgImage: 'bg-tree', title: 'Pruning', description: 'Pruning in Indiana.', image: 'indiana-pruning.jpg' },
            { bgImage: 'bg-tree', title: 'Pest Control', description: 'Pest treatment in Indiana.', image: 'indiana-pest.jpg' },
          ],
          buttonText: 'Get Care',
        },
      },
      {
        slug: 'indiana-landscaping-maintenance',
        name: 'Landscaping Maintenance',
        hero: { title: 'Landscaping Maintenance in Indiana', image: 'indiana-maintenance-columbia.jpg' },
        ServiceText: { title: 'Ongoing Care in Indiana', description: 'Maintain your Indiana landscape.', buttonText: 'Maintain Now', image: 'indiana-maintenance.jpg' },
        SpecificServices: {
          title: 'Maintenance in Indiana',
          ServiceCards: [
            { bgImage: 'bg-maintenance', title: 'Weeding', description: 'Weed control in Indiana.', image: 'indiana-weeding.jpg' },
            { bgImage: 'bg-maintenance', title: 'Trimming', description: 'Trimming in Indiana.', image: 'indiana-trimming.jpg' },
            { bgImage: 'bg-maintenance', title: 'Cleanup', description: 'Cleanup in Indiana.', image: 'indiana-cleanup.jpg' },
          ],
          buttonText: 'Schedule Maintenance',
        },
      },
      {
        slug: 'indiana-shrub-care',
        name: 'Shrub Care',
        hero: { title: 'Shrub Care in Indiana', image: 'indiana-shrub-columbia.jpg' },
        ServiceText: { title: 'Shrub Maintenance in Indiana', description: 'Expert shrub care in Indiana.', buttonText: 'Prune Now', image: 'indiana-shrub.jpg' },
        SpecificServices: {
          title: 'Shrub Care in Indiana',
          ServiceCards: [
            { bgImage: 'bg-shrub', title: 'Pruning', description: 'Pruning in Indiana.', image: 'indiana-pruning-shrub.jpg' },
            { bgImage: 'bg-shrub', title: 'Fertilization', description: 'Fertilizing in Indiana.', image: 'indiana-fertilizer-shrub.jpg' },
            { bgImage: 'bg-shrub', title: 'Health Check', description: 'Health checks in Indiana.', image: 'indiana-health-shrub.jpg' },
          ],
          buttonText: 'Get Care',
        },
      },
      {
        slug: 'indiana-lawn-seeding',
        name: 'Lawn Seeding',
        hero: { title: 'Lawn Seeding in Indiana', image: 'indiana-seeding-columbia.jpg' },
        ServiceText: { title: 'Lawn Seeding in Indiana', description: 'Revitalize your Indiana lawn.', buttonText: 'Seed Now', image: 'indiana-seeding.jpg' },
        SpecificServices: {
          title: 'Seeding in Indiana',
          ServiceCards: [
            { bgImage: 'bg-seeding', title: 'New Lawns', description: 'New lawns in Indiana.', image: 'indiana-new-lawn.jpg' },
            { bgImage: 'bg-seeding', title: 'Overseeding', description: 'Overseeding in Indiana.', image: 'indiana-overseed.jpg' },
            { bgImage: 'bg-seeding', title: 'Repair', description: 'Repair seeding in Indiana.', image: 'indiana-repair-seed.jpg' },
          ],
          buttonText: 'Book Seeding',
        },
      },
      {
        slug: 'indiana-lawn-aeration',
        name: 'Lawn Aeration',
        hero: { title: 'Lawn Aeration in Indiana', image: 'indiana-aeration-columbia.jpg' },
        ServiceText: { title: 'Lawn Aeration in Indiana', description: 'Improve soil health in Indiana.', buttonText: 'Aerate Now', image: 'indiana-aeration.jpg' },
        SpecificServices: {
          title: 'Aeration in Indiana',
          ServiceCards: [
            { bgImage: 'bg-aeration', title: 'Core Aeration', description: 'Core aeration in Indiana.', image: 'indiana-core.jpg' },
            { bgImage: 'bg-aeration', title: 'Liquid Aeration', description: 'Liquid aeration in Indiana.', image: 'indiana-liquid.jpg' },
            { bgImage: 'bg-aeration', title: 'Seasonal', description: 'Seasonal aeration in Indiana.', image: 'indiana-seasonal.jpg' },
          ],
          buttonText: 'Schedule Aeration',
        },
      },
      {
        slug: 'indiana-lawn-mosquito-control',
        name: 'Lawn Mosquito Control',
        hero: { title: 'Lawn Mosquito Control in Indiana', image: 'indiana-mosquito-columbia.jpg' },
        ServiceText: { title: 'Mosquito Control in Indiana', description: 'Keep mosquitoes away in Indiana.', buttonText: 'Control Now', image: 'indiana-mosquito.jpg' },
        SpecificServices: {
          title: 'Mosquito Control in Indiana',
          ServiceCards: [
            { bgImage: 'bg-mosquito', title: 'Prevention', description: 'Prevention in Indiana.', image: 'indiana-prevent.jpg' },
            { bgImage: 'bg-mosquito', title: 'Treatment', description: 'Treatment in Indiana.', image: 'indiana-treatment.jpg' },
            { bgImage: 'bg-mosquito', title: 'Seasonal Plans', description: 'Seasonal plans in Indiana.', image: 'indiana-seasonal-plan.jpg' },
          ],
          buttonText: 'Get Protection',
        },
      },
    ],
  },

  {
    id: '10',
    slug: 'delaware',
    title: 'Lawn Care Services in Delaware',
    hero: {
      title: 'Transform Your Yard into a Coastal Oasis in Delaware',
      subtitle: 'Fast, affordable sprinkler repair, lawn care, and landscaping — all handled by local experts in Delaware.',
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991594/6-5_qahvgt.jpg',
    },
    form: {
      id: 'delaware-form',
      locationSlug: 'delaware',
    },
    ServiceText: {
      title: 'Professional Landscaping & Lawn Care Services in Delaware',
      description: 'We proudly provide the Delaware and Wilmington area with professional, high-quality residential lawn care, landscaping, and property cleanups. Our dependable lawn care team provides routine lawn mowing, landscape design, and property maintenance throughout Delaware and surrounding communities. Worry and hassle-free lawn care is our specialty!',
      image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991624/Complete-Solutions-for-Stunning-Landscapes_yhu6gd.jpg',
    },
    AllServices: {
      title: 'Our Services in Delaware',
      description: 'Explore our range of services tailored for Delaware lawns.',
      ServiceArray: [
        { title: 'Lawn Care Services', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856746/Landscaping-Augusta-Lawn-Care_moqscx.jpg', features: [{ description: 'Lawn Care' }, { description: 'Lawn Mowing' }, { description: 'Lawn Edging' }, { description: 'Other Lawn Services' }], buttonText: 'Lawn Care' },
        { title: 'Lawn Mowing', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856706/Lawn_Mowing_-_Lawn_Care-1000w_ziqv7c.webp', features: [{ description: 'Regular mowing in Delaware' }, { description: 'Lawn Mowing' }, { description: 'Lawn Edging' }, { description: 'Other Lawn Services' }], buttonText: 'Landscaping' },
        { title: 'Sprinkler Installation Repair', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856745/property-cleanups-Augusta-Lawn-Care_ue17op.png', features: [{ description: 'Repairs for Delaware systems' }, { description: 'Sprinkler Installation' }, { description: 'Sprinkler Repair' }, { description: 'Other Sprinkler Services' }], buttonText: 'Sprinkler' },
      ],
    },
    services: [
      {
        slug: 'delaware-lawn-care-services',
        name: 'Lawn Care Services',
        hero: { title: 'Lawn Care Services in Delaware', image: 'delaware-lawn-care.jpg' },
        ServiceText: { title: 'Expert Lawn Care in Delaware', description: 'Professional lawn care tailored for Delaware yards.', buttonText: 'Book Now', image: 'delaware-lawn.jpg' },
        SpecificServices: {
          title: 'Lawn Care Options in Delaware',
          ServiceCards: [
            { bgImage: 'bg-lawn', title: 'Mowing', description: 'Weekly mowing for Delaware lawns.', image: 'delaware-mowing.jpg' },
            { bgImage: 'bg-lawn', title: 'Fertilization', description: 'Seasonal fertilization in Delaware.', image: 'delaware-fertilizer.jpg' },
            { bgImage: 'bg-lawn', title: 'Health Check', description: 'Lawn health assessment in Delaware.', image: 'delaware-health.jpg' },
          ],
          buttonText: 'Get Started',
        },
      },
      {
        slug: 'delaware-lawn-mowing',
        name: 'Lawn Mowing',
        hero: { title: 'Lawn Mowing in Delaware', image: 'delaware-mowing-columbia.jpg' },
        ServiceText: { title: 'Precision Mowing in Delaware', description: 'Keep your Delaware lawn neat and tidy.', buttonText: 'Schedule', image: 'delaware-mowing.jpg' },
        SpecificServices: {
          title: 'Mowing Packages in Delaware',
          ServiceCards: [
            { bgImage: 'bg-mow', title: 'Weekly Mowing', description: 'Weekly service for Delaware.', image: 'delaware-weekly.jpg' },
            { bgImage: 'bg-mow', title: 'Bi-Weekly', description: 'Bi-weekly mowing in Delaware.', image: 'delaware-biweekly.jpg' },
            { bgImage: 'bg-mow', title: 'Trimming', description: 'Edge trimming in Delaware.', image: 'delaware-trimming.jpg' },
          ],
          buttonText: 'Contact Us',
        },
      },
      {
        slug: 'delaware-sprinkler-installation-repair',
        name: 'Sprinkler Installation Repair',
        hero: { title: 'Sprinkler Installation & Repair in Delaware', image: 'delaware-sprinkler-columbia.jpg' },
        ServiceText: { title: 'Reliable Sprinkler Services in Delaware', description: 'Install and repair sprinklers in Delaware.', buttonText: 'Repair Now', image: 'delaware-sprinkler.jpg' },
        SpecificServices: {
          title: 'Sprinkler Services in Delaware',
          ServiceCards: [
            { bgImage: 'bg-sprinkler', title: 'Installation', description: 'New sprinkler systems in Delaware.', image: 'delaware-install.jpg' },
            { bgImage: 'bg-sprinkler', title: 'Repair', description: 'Leak fixes in Delaware.', image: 'delaware-repair.jpg' },
            { bgImage: 'bg-sprinkler', title: 'Upgrades', description: 'Smart upgrades in Delaware.', image: 'delaware-upgrade.jpg' },
          ],
          buttonText: 'Book Repair',
        },
      },
      {
        slug: 'delaware-lawn-sprinkler-installation',
        name: 'Lawn Sprinkler Installation',
        hero: { title: 'Lawn Sprinkler Installation in Delaware', image: 'delaware-sprinkler-install-columbia.jpg' },
        ServiceText: { title: 'Smart Watering in Delaware', description: 'Install smart sprinklers in Delaware.', buttonText: 'Install Now', image: 'delaware-sprinkler-install.jpg' },
        SpecificServices: {
          title: 'Sprinkler Installation in Delaware',
          ServiceCards: [
            { bgImage: 'bg-sprinkler-install', title: 'New Systems', description: 'New setups in Delaware.', image: 'delaware-new-system.jpg' },
            { bgImage: 'bg-sprinkler-install', title: 'Replacement', description: 'Replace old systems in Delaware.', image: 'delaware-replacement.jpg' },
            { bgImage: 'bg-sprinkler-install', title: 'Controllers', description: 'Smart controllers in Delaware.', image: 'delaware-controller.jpg' },
          ],
          buttonText: 'Get Quote',
        },
      },
      {
        slug: 'delaware-landscaping-services',
        name: 'Landscaping Services',
        hero: { title: 'Landscaping Services in Delaware', image: 'delaware-landscape-columbia.jpg' },
        ServiceText: { title: 'Transform Your Delaware Yard', description: 'Custom landscaping for Delaware homes.', buttonText: 'Design Now', image: 'delaware-landscape.jpg' },
        SpecificServices: {
          title: 'Landscaping in Delaware',
          ServiceCards: [
            { bgImage: 'bg-landscape', title: 'Design', description: 'Custom designs in Delaware.', image: 'delaware-design.jpg' },
            { bgImage: 'bg-landscape', title: 'Installation', description: 'Installations in Delaware.', image: 'delaware-install-landscape.jpg' },
            { bgImage: 'bg-landscape', title: 'Mulching', description: 'Mulching in Delaware.', image: 'delaware-mulch.jpg' },
          ],
          buttonText: 'Start Project',
        },
      },
      {
        slug: 'delaware-lawn-health',
        name: 'Lawn Health',
        hero: { title: 'Lawn Health in Delaware', image: 'delaware-lawn-health-columbia.jpg' },
        ServiceText: { title: 'Healthy Lawns in Delaware', description: 'Boost lawn vitality in Delaware.', buttonText: 'Improve Now', image: 'delaware-lawn-health.jpg' },
        SpecificServices: {
          title: 'Lawn Health in Delaware',
          ServiceCards: [
            { bgImage: 'bg-health', title: 'Fertilization', description: 'Seasonal care in Delaware.', image: 'delaware-fertilizer.jpg' },
            { bgImage: 'bg-health', title: 'Aeration', description: 'Soil care in Delaware.', image: 'delaware-aeration.jpg' },
            { bgImage: 'bg-health', title: 'Defense', description: 'Disease protection in Delaware.', image: 'delaware-defense.jpg' },
          ],
          buttonText: 'Book Health Check',
        },
      },
      {
        slug: 'delaware-tree-services',
        name: 'Tree Services',
        hero: { title: 'Tree Services in Delaware', image: 'delaware-tree-columbia.jpg' },
        ServiceText: { title: 'Tree Care in Delaware', description: 'Strong trees in Delaware.', buttonText: 'Trim Now', image: 'delaware-tree.jpg' },
        SpecificServices: {
          title: 'Tree Care in Delaware',
          ServiceCards: [
            { bgImage: 'bg-tree', title: 'Injections', description: 'Tree injections in Delaware.', image: 'delaware-injection.jpg' },
            { bgImage: 'bg-tree', title: 'Pruning', description: 'Pruning in Delaware.', image: 'delaware-pruning.jpg' },
            { bgImage: 'bg-tree', title: 'Pest Control', description: 'Pest treatment in Delaware.', image: 'delaware-pest.jpg' },
          ],
          buttonText: 'Get Care',
        },
      },
      {
        slug: 'delaware-landscaping-maintenance',
        name: 'Landscaping Maintenance',
        hero: { title: 'Landscaping Maintenance in Delaware', image: 'delaware-maintenance-columbia.jpg' },
        ServiceText: { title: 'Ongoing Care in Delaware', description: 'Maintain your Delaware landscape.', buttonText: 'Maintain Now', image: 'delaware-maintenance.jpg' },
        SpecificServices: {
          title: 'Maintenance in Delaware',
          ServiceCards: [
            { bgImage: 'bg-maintenance', title: 'Weeding', description: 'Weed control in Delaware.', image: 'delaware-weeding.jpg' },
            { bgImage: 'bg-maintenance', title: 'Trimming', description: 'Trimming in Delaware.', image: 'delaware-trimming.jpg' },
            { bgImage: 'bg-maintenance', title: 'Cleanup', description: 'Cleanup in Delaware.', image: 'delaware-cleanup.jpg' },
          ],
          buttonText: 'Schedule Maintenance',
        },
      },
      {
        slug: 'delaware-shrub-care',
        name: 'Shrub Care',
        hero: { title: 'Shrub Care in Delaware', image: 'delaware-shrub-columbia.jpg' },
        ServiceText: { title: 'Shrub Maintenance in Delaware', description: 'Expert shrub care in Delaware.', buttonText: 'Prune Now', image: 'delaware-shrub.jpg' },
        SpecificServices: {
          title: 'Shrub Care in Delaware',
          ServiceCards: [
            { bgImage: 'bg-shrub', title: 'Pruning', description: 'Pruning in Delaware.', image: 'delaware-pruning-shrub.jpg' },
            { bgImage: 'bg-shrub', title: 'Fertilization', description: 'Fertilizing in Delaware.', image: 'delaware-fertilizer-shrub.jpg' },
            { bgImage: 'bg-shrub', title: 'Health Check', description: 'Health checks in Delaware.', image: 'delaware-health-shrub.jpg' },
          ],
          buttonText: 'Get Care',
        },
      },
      {
        slug: 'delaware-lawn-seeding',
        name: 'Lawn Seeding',
        hero: { title: 'Lawn Seeding in Delaware', image: 'delaware-seeding-columbia.jpg' },
        ServiceText: { title: 'Lawn Seeding in Delaware', description: 'Revitalize your Delaware lawn.', buttonText: 'Seed Now', image: 'delaware-seeding.jpg' },
        SpecificServices: {
          title: 'Seeding in Delaware',
          ServiceCards: [
            { bgImage: 'bg-seeding', title: 'New Lawns', description: 'New lawns in Delaware.', image: 'delaware-new-lawn.jpg' },
            { bgImage: 'bg-seeding', title: 'Overseeding', description: 'Overseeding in Delaware.', image: 'delaware-overseed.jpg' },
            { bgImage: 'bg-seeding', title: 'Repair', description: 'Repair seeding in Delaware.', image: 'delaware-repair-seed.jpg' },
          ],
          buttonText: 'Book Seeding',
        },
      },
      {
        slug: 'delaware-lawn-aeration',
        name: 'Lawn Aeration',
        hero: { title: 'Lawn Aeration in Delaware', image: 'delaware-aeration-columbia.jpg' },
        ServiceText: { title: 'Lawn Aeration in Delaware', description: 'Improve soil health in Delaware.', buttonText: 'Aerate Now', image: 'delaware-aeration.jpg' },
        SpecificServices: {
          title: 'Aeration in Delaware',
          ServiceCards: [
            { bgImage: 'bg-aeration', title: 'Core Aeration', description: 'Core aeration in Delaware.', image: 'delaware-core.jpg' },
            { bgImage: 'bg-aeration', title: 'Liquid Aeration', description: 'Liquid aeration in Delaware.', image: 'delaware-liquid.jpg' },
            { bgImage: 'bg-aeration', title: 'Seasonal', description: 'Seasonal aeration in Delaware.', image: 'delaware-seasonal.jpg' },
          ],
          buttonText: 'Schedule Aeration',
        },
      },
      {
        slug: 'delaware-lawn-mosquito-control',
        name: 'Lawn Mosquito Control',
        hero: { title: 'Lawn Mosquito Control in Delaware', image: 'delaware-mosquito-columbia.jpg' },
        ServiceText: { title: 'Mosquito Control in Delaware', description: 'Keep mosquitoes away in Delaware.', buttonText: 'Control Now', image: 'delaware-mosquito.jpg' },
        SpecificServices: {
          title: 'Mosquito Control in Delaware',
          ServiceCards: [
            { bgImage: 'bg-mosquito', title: 'Prevention', description: 'Prevention in Delaware.', image: 'delaware-prevent.jpg' },
            { bgImage: 'bg-mosquito', title: 'Treatment', description: 'Treatment in Delaware.', image: 'delaware-treatment.jpg' },
            { bgImage: 'bg-mosquito', title: 'Seasonal Plans', description: 'Seasonal plans in Delaware.', image: 'delaware-seasonal-plan.jpg' },
          ],
          buttonText: 'Get Protection',
        },
      },
    ],
  }
];
