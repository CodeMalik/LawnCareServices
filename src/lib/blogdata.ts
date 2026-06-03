// lib/blogdata.ts
import { db } from './firebase';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import { BlogPost } from '@/types/blog';

const COLLECTION_NAME = 'blogs';

export const getAllBlogs = async (): Promise<BlogPost[]> => {
  try {
    const blogsCollectionRef = collection(db, COLLECTION_NAME);
    // Single-field equality filter — no composite index needed.
    // Sorting is done in JS to avoid requiring a composite index.
    const q = query(
      blogsCollectionRef,
      where('published', '==', true)
    );
    const querySnapshot = await getDocs(q);
    const blogs: BlogPost[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      blogs.push({
        id: doc.id,
        slug: data.slug || '',
        title: data.title || '',
        summary: data.summary || '',
        content: data.content || '',
        image: data.image || '',
        author: data.author || 'Lawn Care Services',
        createdAt: data.createdAt || new Date().toISOString(),
        published: true,
      });
    });

    // Sort newest-first in JS (avoids Firestore composite index requirement)
    blogs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

export const getBlogBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const blogsCollectionRef = collection(db, COLLECTION_NAME);
    const q = query(
      blogsCollectionRef,
      where('slug', '==', slug),
      where('published', '==', true),
      limit(1)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const data = doc.data();
      return {
        id: doc.id,
        slug: data.slug || '',
        title: data.title || '',
        summary: data.summary || '',
        content: data.content || '',
        image: data.image || '',
        author: data.author || 'Lawn Care Services',
        createdAt: data.createdAt || new Date().toISOString(),
        published: true,
      };
    }
    return null;
  } catch (error) {
    console.error(`Error fetching blog with slug ${slug}:`, error);
    return null;
  }
};
