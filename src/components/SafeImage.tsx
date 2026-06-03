import Image, { ImageProps } from 'next/image';
import React from 'react';

// Extract the actual image URL if the input is a Google search image results page.
// Example: https://www.google.com/imgres?q=IMAGES&imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-photo%2Fsun-sets-behind-mountain-ranges-600nw-2479236003.jpg&imgrefurl=...
export function resolveImageUrl(src: string): string {
  if (typeof src !== 'string') return src;

  try {
    const url = new URL(src);
    // Check for Google Images URL structures
    if (url.hostname.includes('google.') && url.pathname.includes('/imgres')) {
      const imgurl = url.searchParams.get('imgurl');
      if (imgurl) {
        return decodeURIComponent(imgurl);
      }
    }
  } catch (e) {
    // Ignore URL parsing errors and return original
  }
  return src;
}

const ALLOWED_HOSTS = ['res.cloudinary.com'];

export default function SafeImage({ src, alt, fill, className, ...props }: ImageProps) {
  const resolvedSrc = typeof src === 'string' ? resolveImageUrl(src) : src;

  if (typeof resolvedSrc === 'string' && (resolvedSrc.startsWith('http://') || resolvedSrc.startsWith('https://'))) {
    try {
      const url = new URL(resolvedSrc);
      
      // If the hostname is not configured in next.config.ts, render as normal HTML <img>
      if (!ALLOWED_HOSTS.includes(url.hostname)) {
        const imgStyles = fill
          ? {
              position: 'absolute' as const,
              height: '100%',
              width: '100%',
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
            }
          : undefined;

        // eslint-disable-next-line @next/next/no-img-element
        return (
          <img
            src={resolvedSrc}
            alt={alt || ''}
            className={className}
            style={imgStyles}
          />
        );
      }
    } catch (e) {
      // Ignore URL parsing errors, fallback to Next.js Image
    }
  }

  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      fill={fill}
      className={className}
      {...props}
    />
  );
}
