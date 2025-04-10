import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  quality?: number;
  sizes?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  loading = 'lazy',
  objectFit = 'cover',
  quality = 75,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}) => {
  // Handle external URLs
  const isExternal = src.startsWith('http') || src.startsWith('//');
  
  // Determine if this is a critical image that should be prioritized
  const isPriority = priority || loading === 'eager';
  
  // For external images, use regular img tag with loading attribute
  if (isExternal) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        fetchPriority={isPriority ? 'high' : 'auto'}
        style={{ objectFit }}
        decoding={isPriority ? 'sync' : 'async'}
      />
    );
  }
  
  // For local images, use Next.js Image component
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={isPriority}
      quality={quality}
      sizes={sizes}
      style={{ objectFit }}
    />
  );
};

// Memoize the component to prevent unnecessary re-renders
export default React.memo(OptimizedImage);
