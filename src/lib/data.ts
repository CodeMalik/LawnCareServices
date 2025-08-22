// src/lib/data.ts

import { Service, TrustIndicator, Testimonial, ServiceArea, FAQItem, GalleryItem, MiniGalleryItem, ServiceContent, LocationService ,LocationMainPage} from '@/types';

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
  }
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
        { title: 'Lawn Care Services', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856746/Landscaping-Augusta-Lawn-Care_moqscx.jpg', features: [{ description: 'Lawn Care' }, { description: 'Lawn Mowing' }, { description: 'Lawn Edging' }, {description: 'Other Lawn Services'}], buttonText: 'Lawn Care' },
        { title: 'Lawn Mowing', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856706/Lawn_Mowing_-_Lawn_Care-1000w_ziqv7c.webp', features: [{ description: 'Regular mowing in Columbia' }, { description: 'Lawn Mowing' }, { description: 'Lawn Edging' }, {description: 'Other Lawn Services'}], buttonText: 'Landscaping' },
        { title: 'Sprinkler Installation Repair', image: 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1755856745/property-cleanups-Augusta-Lawn-Care_ue17op.png', features: [{ description: 'Repairs for Columbia systems' }, { description: 'Sprinkler Installation' }, { description: 'Sprinkler Repair' }, {description: 'Other Sprinkler Services'}], buttonText: 'Sprinkler' },
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
  { id: '2',
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
  { id: '3',
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
  { id: '4',
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
  { id: '5',
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
  
  { id: '6',
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
  
  { id: '7',
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
  { id: '8',
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
  
  { id: '9',
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
  
  { id: '10',
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
