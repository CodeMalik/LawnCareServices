// src/lib/data.ts

import { Service, TrustIndicator, Testimonial, ServiceArea, FAQItem, GalleryItem, MiniGalleryItem, ServiceContent } from '@/types';

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
