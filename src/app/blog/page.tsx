// src/app/blog/page.tsx
import Image from 'next/image';
import SafeImage from '@/components/SafeImage';
import Link from 'next/link';
import { getAllBlogs } from '@/lib/blogdata';
import { Metadata } from 'next';
import { ScaleIn, SlideInBottom, StaggeredContainer, StaggeredItem } from '@/components/animations/Animate';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Blog & Lawn Care Tips | Lawn Care Services',
  description: "Read the latest landscaping, gardening, sprinkler repair, and lawn care articles from Dallas's experts.",
  openGraph: {
    title: 'Blog & Lawn Care Tips | Lawn Care Services',
    description: "Read the latest landscaping, gardening, sprinkler repair, and lawn care articles from Dallas's experts.",
    type: 'website',
  }
};

export default async function BlogListingPage() {
  const blogs = await getAllBlogs();

  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 min-h-[50vh] pt-24 md:pt-28 flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519843/gallery-bg-image-2_bwqtp2_1_11zon_faeyp1.jpg"
            alt="Beautiful green lawn background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 text-center md:text-left">
          <ScaleIn>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Lawn Care Tips & Insights
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed">
              Expert advice, maintenance tips, and professional landscaping ideas directly from our team in Dallas, Texas.
            </p>
          </ScaleIn>
        </div>
      </section>

      {/* Main Blog List Section */}
      <section className="py-20 bg-gray-50 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-6">
          {blogs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-lg mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">No Articles Found</h2>
              <p className="text-gray-600 mb-6">We're drafting some great lawn care and landscaping tips for you. Check back soon!</p>
              <Link href="/" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200">
                Back to Home
              </Link>
            </div>
          ) : (
            <StaggeredContainer staggerChildren={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, idx) => (
                  <StaggeredItem key={blog.id}>
                    <SlideInBottom duration={0.8} delay={idx * 0.1}>
                      <Link href={`/blog/${blog.slug}`} className="block h-full group">
                        <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                          {/* Cover Image */}
                          <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
                            <SafeImage
                              src={blog.image || 'https://res.cloudinary.com/dfnjpfucl/image/upload/v1757501915/sprinkles_ygwubq.webp'}
                              alt={blog.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>

                          {/* Card Body */}
                          <div className="p-6 flex flex-col flex-grow">
                            {/* Badges / Meta */}
                            <div className="flex items-center gap-3 text-xs font-semibold text-gray-500 mb-3">
                              <span className="text-green-600 font-bold uppercase tracking-wider">{blog.author}</span>
                              <span>•</span>
                              <span>{formatDate(blog.createdAt)}</span>
                            </div>

                            {/* Title */}
                            <h2 className="text-xl font-bold text-gray-950 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                              {blog.title}
                            </h2>

                            {/* Summary */}
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                              {blog.summary || (blog.content ? blog.content.substring(0, 150) + '...' : '')}
                            </p>

                            {/* CTA Link */}
                            <div className="mt-auto">
                              <div
                                className="inline-flex items-center text-sm font-bold text-green-600 group-hover:text-green-700 transition-colors duration-200"
                              >
                                Read Full Article
                                <svg className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </SlideInBottom>
                  </StaggeredItem>
                ))}
              </div>
            </StaggeredContainer>
          )}
        </div>
      </section>
    </main>
  );
}
