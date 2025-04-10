import React, { useState, useEffect } from 'react';
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
  placeholder?: 'blur' | 'empty' | 'data';
  blurDataURL?: string;
  useLqip?: boolean; // Low Quality Image Placeholder
  mobileSrc?: string; // Smaller image for mobile
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
  placeholder = 'empty',
  blurDataURL,
  useLqip = false,
  mobileSrc,
}) => {
  // State for image loading
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile on client side
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle external URLs
  const isExternal = src.startsWith('http') || src.startsWith('//');

  // Determine if this is a critical image that should be prioritized
  const isPriority = priority || loading === 'eager';

  // Choose appropriate source based on device
  const imageSrc = isMobile && mobileSrc ? mobileSrc : src;

  // Generate a simple blur data URL if needed and not provided
  const defaultBlurDataURL = `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' x='0' y='0' fill='%23f0f0f0' filter='url(%23b)'/%3E%3C/svg%3E`;

  // Use provided blur data URL or default
  const actualBlurDataURL = blurDataURL || (useLqip ? defaultBlurDataURL : undefined);

  // For external images, use regular img tag with loading attribute and picture element
  if (isExternal) {
    return (
      <div className={`optimized-image-container ${className}`} style={{ position: 'relative', width: '100%', height: 'auto', aspectRatio: `${width}/${height}` }}>
        {!isLoaded && useLqip && (
          <div
            className="image-placeholder"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${actualBlurDataURL})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(10px)',
              transform: 'scale(1.1)',
            }}
          />
        )}

        <picture>
          {/* WebP format for browsers that support it */}
          {imageSrc.endsWith('.jpg') || imageSrc.endsWith('.jpeg') || imageSrc.endsWith('.png') ? (
            <source
              srcSet={imageSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp')}
              type="image/webp"
            />
          ) : null}

          {/* Original image as fallback */}
          <img
            src={imageSrc}
            alt={alt}
            width={width}
            height={height}
            className={`optimized-image ${!isLoaded && useLqip ? 'loading' : 'loaded'}`}
            loading={loading}
            fetchPriority={isPriority ? 'high' : 'auto'}
            style={{
              objectFit,
              width: '100%',
              height: 'auto',
              transition: 'opacity 0.3s ease-in-out',
              opacity: isLoaded || !useLqip ? 1 : 0,
            }}
            decoding={isPriority ? 'sync' : 'async'}
            onLoad={() => setIsLoaded(true)}
          />
        </picture>
      </div>
    );
  }

  // For local images, use Next.js Image component with optimizations
  return (
    <div className={`optimized-image-container ${className}`} style={{ position: 'relative' }}>
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={`optimized-image ${!isLoaded && useLqip ? 'loading' : 'loaded'}`}
        priority={isPriority}
        quality={isMobile ? Math.min(quality, 60) : quality} // Lower quality on mobile
        sizes={sizes}
        style={{ objectFit }}
        placeholder={useLqip ? 'blur' : 'empty'}
        blurDataURL={actualBlurDataURL}
        onLoadingComplete={() => setIsLoaded(true)}
        loading={loading}
      />
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default React.memo(OptimizedImage);
