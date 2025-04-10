/**
 * Image Optimizer Script
 * Optimizes image loading on mobile devices
 */

(function() {
  // Configuration
  const config = {
    lazyLoadThreshold: 200, // Pixels before image enters viewport
    lowMemoryThreshold: 4, // GB of RAM threshold for low memory mode
    mobileMaxWidth: 768, // Mobile breakpoint
    preloadDistance: 1000, // Distance to preload images on scroll
    unloadDistance: 2000, // Distance to unload images after scrolling away
    debugMode: false // Set to true to enable console logs
  };
  
  // Check if we're on a mobile device
  const isMobile = window.innerWidth < config.mobileMaxWidth;
  
  // Only run optimizations on mobile
  if (!isMobile) return;
  
  // Debug logging
  const log = config.debugMode ? console.log.bind(console, '[ImageOptimizer]') : () => {};
  
  // Detect low memory devices
  const isLowMemoryDevice = () => {
    if ('deviceMemory' in navigator) {
      return navigator.deviceMemory < config.lowMemoryThreshold;
    }
    
    // Fallback detection based on user agent
    const ua = navigator.userAgent.toLowerCase();
    return /android 4/.test(ua) || /android 5/.test(ua) || /mobile/.test(ua) && !/iphone/.test(ua);
  };
  
  // Get all images that can be optimized
  const getOptimizableImages = () => {
    return Array.from(document.querySelectorAll('img:not([data-no-optimize])'));
  };
  
  // Check if an element is in viewport or about to enter
  const isNearViewport = (el, threshold = config.lazyLoadThreshold) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < window.innerHeight + threshold &&
      rect.bottom > -threshold &&
      rect.left < window.innerWidth + threshold &&
      rect.right > -threshold
    );
  };
  
  // Apply optimizations to images
  const optimizeImages = () => {
    const images = getOptimizableImages();
    const lowMemory = isLowMemoryDevice();
    
    log(`Optimizing ${images.length} images. Low memory mode: ${lowMemory}`);
    
    images.forEach(img => {
      // Skip already processed images
      if (img.dataset.optimized === 'true') return;
      
      // Mark as optimized
      img.dataset.optimized = 'true';
      
      // Add loading attribute if not present
      if (!img.hasAttribute('loading')) {
        img.loading = 'lazy';
      }
      
      // Add decoding attribute if not present
      if (!img.hasAttribute('decoding')) {
        img.decoding = 'async';
      }
      
      // Use WebP if available
      if (img.src.match(/\.(jpe?g|png)$/i) && 'srcset' in HTMLImageElement.prototype) {
        const webpSrc = img.src.replace(/\.(jpe?g|png)$/i, '.webp');
        
        // Create a picture element
        if (!img.parentElement.matches('picture')) {
          const picture = document.createElement('picture');
          const source = document.createElement('source');
          source.srcset = webpSrc;
          source.type = 'image/webp';
          
          // Replace the img with picture+source+img
          const parent = img.parentElement;
          img.insertAdjacentElement('beforebegin', picture);
          picture.appendChild(source);
          picture.appendChild(img);
        }
      }
      
      // For low memory devices, unload offscreen images
      if (lowMemory) {
        img.classList.add('offscreen');
        
        // Create an observer for this image
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                // Image is visible, load it
                if (img.dataset.src) {
                  img.src = img.dataset.src;
                  delete img.dataset.src;
                }
                img.classList.remove('offscreen');
              } else {
                // Image is offscreen, unload it if far away
                const rect = img.getBoundingClientRect();
                const distanceFromViewport = Math.min(
                  Math.abs(rect.top), 
                  Math.abs(rect.bottom - window.innerHeight)
                );
                
                if (distanceFromViewport > config.unloadDistance) {
                  // Save the source and replace with a tiny placeholder
                  if (!img.dataset.src && img.src) {
                    img.dataset.src = img.src;
                    img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E';
                    img.classList.add('offscreen');
                    log('Unloaded far offscreen image', img);
                  }
                }
              }
            });
          },
          { rootMargin: `${config.lazyLoadThreshold}px` }
        );
        
        observer.observe(img);
      }
    });
  };
  
  // Preload images that are about to enter the viewport
  const preloadNearbyImages = () => {
    if (isLowMemoryDevice()) return; // Skip on low memory devices
    
    const images = getOptimizableImages();
    
    images.forEach(img => {
      if (isNearViewport(img, config.preloadDistance) && !img.dataset.preloaded) {
        // Mark as preloaded
        img.dataset.preloaded = 'true';
        
        // Preload the image
        if (img.loading === 'lazy') {
          img.loading = 'eager';
          log('Preloading nearby image', img);
        }
      }
    });
  };
  
  // Initialize optimizations
  const init = () => {
    log('Initializing image optimizations for mobile');
    
    // Run initial optimization
    optimizeImages();
    
    // Set up scroll listener for preloading
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(preloadNearbyImages, 100);
    }, { passive: true });
    
    // Optimize new images when DOM changes
    if ('MutationObserver' in window) {
      const observer = new MutationObserver(mutations => {
        let hasNewImages = false;
        
        mutations.forEach(mutation => {
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(node => {
              if (node.nodeName === 'IMG' || (node.nodeType === 1 && node.querySelector('img'))) {
                hasNewImages = true;
              }
            });
          }
        });
        
        if (hasNewImages) {
          log('New images detected, optimizing');
          optimizeImages();
        }
      });
      
      observer.observe(document.body, { 
        childList: true, 
        subtree: true 
      });
    }
    
    // Re-optimize on resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(optimizeImages, 200);
    }, { passive: true });
  };
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
