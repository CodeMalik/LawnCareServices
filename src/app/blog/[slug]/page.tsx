// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogBySlug } from '@/lib/blogdata';
import { Metadata } from 'next';
import { ScaleIn } from '@/components/animations/Animate';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface Props {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  let slug: string;
  try {
    const resolvedParams = await params;
    slug = resolvedParams.slug;
    if (!slug) {
      return { title: 'Article Not Found' };
    }
  } catch {
    return { title: 'Article Not Found' };
  }

  const blog = await getBlogBySlug(slug);
  if (!blog) {
    return { title: 'Article Not Found' };
  }

  return {
    title: `${blog.title} | Lawn Care Services Blog`,
    description: blog.summary || 'Read our expert landscaping tips and lawn care advice.',
    openGraph: {
      title: `${blog.title} | Lawn Care Services Blog`,
      description: blog.summary || 'Read our expert landscaping tips and lawn care advice.',
      type: 'article',
      images: blog.image ? [blog.image] : [],
    }
  };
};

export default async function BlogDetailsPage({ params }: Props) {
  let slug: string;
  try {
    const resolvedParams = await params;
    slug = resolvedParams.slug;
    if (!slug) notFound();
  } catch (error) {
    console.error('Error resolving blog slug params:', error);
    notFound();
  }

  const blog = await getBlogBySlug(slug);
  if (!blog) {
    notFound();
  }

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

  const renderContent = (content: string) => {
    const hasHTML = /<[a-z][\s\S]*>/i.test(content);
    if (hasHTML) {
      return (
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="blog-content-body text-gray-700 leading-relaxed text-base sm:text-lg"
        />
      );
    }

    // Format as paragraphs by splitting on double newlines
    const paragraphs = content.split(/\n\s*\n/).filter(Boolean);
    return (
      <div className="blog-content-body text-gray-700 leading-relaxed text-base sm:text-lg space-y-6">
        {paragraphs.map((p, i) => (
          <p key={i} className="whitespace-pre-line">{p}</p>
        ))}
      </div>
    );
  };

  const contentStyles = `
    .blog-content-body h1, .blog-content-body h2, .blog-content-body h3, .blog-content-body h4 {
      color: #111827;
      font-weight: 700;
      margin-top: 1.75em;
      margin-bottom: 0.5em;
    }
    .blog-content-body h1 { font-size: 2.25rem; }
    .blog-content-body h2 { font-size: 1.75rem; border-bottom: 1px solid #e5e7eb; padding-bottom: 0.3em; }
    .blog-content-body h3 { font-size: 1.4rem; }
    .blog-content-body p { margin-bottom: 1.25em; line-height: 1.8; }
    .blog-content-body ul { list-style-type: disc; padding-left: 1.5em; margin-bottom: 1.25em; }
    .blog-content-body ol { list-style-type: decimal; padding-left: 1.5em; margin-bottom: 1.25em; }
    .blog-content-body li { margin-bottom: 0.5em; }
    .blog-content-body blockquote { border-left: 4px solid #16a34a; padding-left: 1em; font-style: italic; color: #4b5563; margin: 1.5em 0; }
    .blog-content-body strong { color: #111827; font-weight: 600; }
    .blog-content-body a { color: #16a34a; text-decoration: underline; }
  `;

  return (
    <main className="min-h-screen bg-white pt-24 md:pt-28 pb-20">
      <style dangerouslySetInnerHTML={{ __html: contentStyles }} />
      <div className="max-w-4xl mx-auto px-6">

        {/* Navigation */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-bold text-green-600 hover:text-green-700 transition-colors gap-1 group"
          >
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Articles
          </Link>
        </div>

        <ScaleIn>
          {/* Header info */}
          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
              {blog.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-gray-500 font-semibold">
              <span className="text-green-600 font-bold uppercase tracking-wider">{blog.author}</span>
              <span>•</span>
              <span>{formatDate(blog.createdAt)}</span>
            </div>
          </header>

          {/* Cover Image */}
          {blog.image && (
            <div className="relative w-full aspect-[21/9] sm:h-[450px] rounded-2xl overflow-hidden mb-10 shadow-md border border-gray-100 bg-gray-55">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1100px"
                className="object-cover"
              />
            </div>
          )}

          {/* Excerpt Banner */}
          {blog.summary && (
            <div className="border-l-4 border-green-500 pl-4 py-1.5 mb-10 text-gray-600 text-lg sm:text-xl font-medium leading-relaxed italic bg-gray-50/50 pr-4 rounded-r-lg">
              {blog.summary}
            </div>
          )}

          {/* Blog Content */}
          <article className="prose max-w-none">
            {renderContent(blog.content)}
          </article>
        </ScaleIn>
      </div>
    </main>
  );
}
