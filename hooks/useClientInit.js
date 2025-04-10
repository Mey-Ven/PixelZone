import { useEffect } from 'react';
import { loadScript, loadScriptWhenIdle } from '../utils/scriptLoader';

// Custom hook for client-side initialization with performance optimizations
export function useClientInit() {
  useEffect(() => {
    // Initialize performance monitoring
    if (process.env.NODE_ENV === 'production') {
      // Report web vitals
      const reportWebVitals = () => {
        const onPerfEntry = ({ name, delta, id }) => {
          // Send to analytics or console
          console.log(`Performance: ${name} - ${Math.round(delta)}ms`);
        };
        
        if (window.performance && 'PerformanceObserver' in window) {
          try {
            // Create performance observer for LCP
            const lcpObserver = new PerformanceObserver((entryList) => {
              const entries = entryList.getEntries();
              const lastEntry = entries[entries.length - 1];
              onPerfEntry({
                name: 'LCP',
                delta: lastEntry.startTime,
                id: lastEntry.id
              });
            });
            lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
            
            // Create performance observer for FID
            const fidObserver = new PerformanceObserver((entryList) => {
              const entries = entryList.getEntries();
              const lastEntry = entries[entries.length - 1];
              onPerfEntry({
                name: 'FID',
                delta: lastEntry.processingStart - lastEntry.startTime,
                id: lastEntry.id
              });
            });
            fidObserver.observe({ type: 'first-input', buffered: true });
            
            // Create performance observer for CLS
            const clsObserver = new PerformanceObserver((entryList) => {
              let cls = 0;
              entryList.getEntries().forEach(entry => {
                if (!entry.hadRecentInput) {
                  cls += entry.value;
                }
              });
              onPerfEntry({
                name: 'CLS',
                delta: cls,
                id: 'cls'
              });
            });
            clsObserver.observe({ type: 'layout-shift', buffered: true });
          } catch (e) {
            console.error('Performance monitoring error:', e);
          }
        }
      };
      
      // Initialize performance monitoring after page load
      if (document.readyState === 'complete') {
        reportWebVitals();
      } else {
        window.addEventListener('load', reportWebVitals);
      }
    }

    // Load critical scripts immediately
    const loadCriticalScripts = async () => {
      // Load Bootstrap JS (needed for navigation)
      await loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', {
        priority: 'high',
        id: 'bootstrap-js'
      });
    };
    
    // Load non-critical scripts when idle
    const loadNonCriticalScripts = () => {
      // Load and initialize Typed.js only when needed and element is visible
      const typedElement = document.querySelector('.typed');
      if (typedElement) {
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            loadScript('https://cdn.jsdelivr.net/npm/typed.js@2.0.12/lib/typed.min.js', {
              priority: 'low',
              id: 'typed-js',
              callback: () => {
                if (window.Typed) {
                  const typed = new window.Typed('.typed', {
                    strings: ['Development', 'Design', 'Freelance'],
                    typeSpeed: 50,
                    backSpeed: 30,
                    loop: true,
                  });
                  
                  // Store instance for cleanup
                  window._typedInstance = typed;
                }
              }
            });
            observer.disconnect();
          }
        });
        observer.observe(typedElement);
      }
      
      // Load GLightbox only when needed and user scrolls near portfolio section
      const portfolioSection = document.querySelector('#portfolio');
      if (portfolioSection) {
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            loadScript('https://cdn.jsdelivr.net/npm/glightbox@3.2.0/dist/js/glightbox.min.js', {
              priority: 'low',
              id: 'glightbox-js',
              callback: () => {
                if (window.GLightbox) {
                  const lightbox = new window.GLightbox({
                    selector: '.glightbox',
                    touchNavigation: true,
                    loop: false,
                    autoplayVideos: false,
                    preload: false
                  });
                  
                  // Store instance for cleanup
                  window._glightboxInstance = lightbox;
                }
              }
            });
            observer.disconnect();
          }
        }, { threshold: 0.1 });
        observer.observe(portfolioSection);
      }
    };
    
    // Execute loading strategy
    loadCriticalScripts().then(() => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(loadNonCriticalScripts, { timeout: 2000 });
      } else {
        setTimeout(loadNonCriticalScripts, 1000);
      }
    });

    // Cleanup function
    return () => {
      // Clean up Typed.js
      if (window._typedInstance) {
        window._typedInstance.destroy();
        window._typedInstance = null;
      }

      // Clean up GLightbox
      if (window._glightboxInstance) {
        window._glightboxInstance.destroy();
        window._glightboxInstance = null;
      }
    };
  }, []); // Empty dependency array means this runs once on mount
}
