import React from 'react';
import Image from 'next/image';
import { StaggeredContainer, StaggeredItem, ScaleIn, FadeIn } from '@/components/animations/Animate';
const GalleryImages = () => {
  // Array of gallery images with specific details
  const images = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991819/Cancun-1-GT-scaled_ie7dhs.jpg",
      alt: "Professional lawn care service",
      title: "Lawn Maintenance",
      description: "Regular lawn mowing and care"
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991825/Cancun-2-GT-scaled_dtyjqf.jpg",
      alt: "Sprinkler system installation",
      title: "Irrigation Systems",
      description: "Efficient watering solutions"
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991833/Cancun-3-scaled_psq65f.jpg",
      alt: "Custom landscape design",
      title: "Landscape Design",
      description: "Beautiful outdoor spaces"
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991836/Cancun-4-scaled_tc3sje.jpg",
      alt: "Garden transformation",
      title: "Garden Makeovers",
      description: "Complete garden renovations"
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991843/Cancun-5-scaled_itderg.jpg",
      alt: "Tree trimming service",
      title: "Tree Care",
      description: "Professional tree maintenance"
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991845/Cancun-6-scaled_cwiqbl.jpg",
      alt: "Patio installation project",
      title: "Patio Installation",
      description: "Custom outdoor living spaces"
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Cancun-7-scaled_mampez.jpg",
      alt: "Landscape lighting installation",
      title: "Outdoor Lighting",
      description: "Beautiful night-time ambiance"
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991807/8-5_zjrpiq.jpg",
      alt: "Retaining wall construction",
      title: "Retaining Walls",
      description: "Functional and decorative walls"
    },
    {
      id: 9,
      src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754995829/Our-Insect-Weed-Control-Services-Include_ovg5we.jpg",
      alt: "Garden water feature",
      title: "Water Features",
      description: "Soothing water elements"
    },
    {
      id: 10,
      src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991716/1-5_cckuof.jpg",
      alt: "Seasonal yard cleanup",
      title: "Seasonal Cleanup",
      description: "Year-round maintenance"
    },
    {
      id: 11,
      src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991747/3-5_jvjh2k.jpg",
      alt: "Hardscaping project",
      title: "Hardscaping",
      description: "Stone and paver work"
    },
    {
      id: 12,
      src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991772/4-5_kgoiby.jpg",
      alt: "Complete landscape makeover",
      title: "Complete Makeovers",
      description: "Start-to-finish transformations"
    },
    { id: 13, src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991785/6-5_g2pgk7.jpg", alt: "Garden pathway design", title: "Pathway Design", description: "Elegant walkway solutions" },
    { id: 14, src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991794/7-5_opmjoc.jpg", alt: "Outdoor kitchen installation", title: "Outdoor Kitchens", description: "Gourmet outdoor cooking spaces" },
    { id: 15, src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991778/5-4_iqydyj.jpg", alt: "Garden fencing project", title: "Garden Fencing", description: "Privacy and style combined" },
    { id: 16, src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991760/4-3_hfg9ae.jpg", alt: "Deck construction", title: "Deck Building", description: "Custom outdoor living spaces" },
    { id: 17, src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991784/6-3_em3plb.jpg", alt: "Pergola installation", title: "Pergolas", description: "Shade and architectural interest" },
    { id: 18, src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991804/8-3_rdingb.jpg", alt: "Garden bed installation", title: "Garden Beds", description: "Beautiful planting areas" },
    { id: 19, src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991726/2-3_xk4men.jpg", alt: "Lawn aeration service", title: "Lawn Aeration", description: "Healthier grass growth" },
    { id: 20, src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991732/3-3_h3mwot.jpg", alt: "Mulch installation", title: "Mulching Services", description: "Improved soil health" },
    { id: 21, src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991718/1-3_uchlgo.jpg", alt: "Garden edging project", title: "Landscape Edging", description: "Defined garden borders" },
    { id: 22, src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991642/What-Sets-Our-Landscaping-Apart-from-the-Rest_libm4l.jpg", alt: "Garden lighting project", title: "Garden Lighting", description: "Dramatic nighttime effects" },
    { id: 23, src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991637/Ready-for-a-Yard-That-Turns-Heads_xqojgt.jpg", alt: "Waterfall feature", title: "Waterfalls", description: "Soothing water sounds" },
    { id: 24, src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991855/Complete-Solutions-for-Stunning-Landscapes_amu5ss.jpg", alt: "Stone wall construction", title: "Stone Walls", description: "Timeless landscape features" },
    { id: 25, src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991754/4-2_is52jw.jpg", alt: "Fire pit installation", title: "Fire Pits", description: "Cozy outdoor gathering spots" },
    { id: 26, src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991900/Your-One-Stop-Sprinkler-Solution_u3ghig.jpg", alt: "Garden bench installation", title: "Garden Seating", description: "Relaxation in nature" },
    { id: 27, src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991608/Banner-Image_ivur98.jpg", alt: "Pond installation", title: "Garden Ponds", description: "Tranquil water features" },
    { id: 28, src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991603/8_pzij4g.jpg", alt: "Garden arbor installation", title: "Garden Arbors", description: "Charming entryways" },
    { id: 29, src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991494/4-1_qbhgdm.jpg", alt: "Garden stepping stones", title: "Stepping Stones", description: "Whimsical pathways" },
    { id: 30, src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991592/6_r8x2vx.jpg", alt: "Garden trellis installation", title: "Garden Trellises", description: "Support for climbing plants" },
    { id: 31, src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991600/7_om4k0z.jpg", alt: "Garden fountain installation", title: "Garden Fountains", description: "Elegant water displays" },
    { id: 32, src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991768/5_wv0lzw.jpg", alt: "Garden sculpture installation", title: "Garden Art", description: "Artistic focal points" },
    { id: 33, src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991493/4_ldph9f.jpg", alt: "Garden bridge installation", title: "Garden Bridges", description: "Charming crossings" },
    { id: 34, src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991770/5-3_nodylu.jpg", alt: "Garden gate installation", title: "Garden Gates", description: "Welcoming entrances" },
    { id: 35, src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991456/2_hzkxk0.jpg", alt: "Garden planter installation", title: "Garden Planters", description: "Versatile planting solutions" },
    { id: 36, src: "https://res.cloudinary.com/dfnjpfucl/image/upload/v1754991449/1_w9p5t6.jpg", alt: "Garden pergola with lights", title: "Lighted Pergolas", description: "Magical evening ambiance" }
  ];

  return (

    <div className="px-6 py-12 sm:px-6 lg:px-8 max-w-6xl mx-auto">
    <StaggeredContainer staggerChildren={0.1}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <StaggeredItem key={image.id}>
            <FadeIn>
          <div 
            key={image.id} 
            className="relative group overflow-hidden rounded-lg aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-white text-center p-4">
                {/* Hidden hover content */}
              </div>
            </div>
          </div>
          </FadeIn>
          </StaggeredItem>
        ))}
      </div>
    </StaggeredContainer>
    </div>
  );
};

export default GalleryImages