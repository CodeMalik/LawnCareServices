// types/blog.ts
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  author: string;
  createdAt: string; // ISO string format
  published?: boolean;
}
