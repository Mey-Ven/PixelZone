/**
 * Optimized script loader utility
 * - Loads scripts with proper priorities
 * - Uses Intersection Observer for lazy loading
 * - Implements requestIdleCallback for non-critical scripts
 */

// Load script with configurable attributes
export const loadScript = (src, options = {}) => {
  const {
    async = true,
    defer = false,
    priority = 'low',
    id = null,
    callback = null,
    lazyLoad = false,
    threshold = 0.1,
  } = options;

  return new Promise((resolve, reject) => {
    // Check if script already exists
    if (id && document.getElementById(id)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = async;
    script.defer = defer;
    
    if (id) script.id = id;
    
    // Set fetchpriority if supported
    if ('fetchPriority' in HTMLImageElement.prototype) {
      script.fetchPriority = priority;
    }

    script.onload = () => {
      if (callback) callback();
      resolve();
    };
    
    script.onerror = (error) => {
      console.error(`Failed to load script: ${src}`, error);
      reject(error);
    };

    // If lazyLoad is true, use Intersection Observer
    if (lazyLoad && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              document.body.appendChild(script);
              observer.disconnect();
            }
          });
        },
        { threshold }
      );
      
      // Observe the bottom of the viewport to load scripts as user scrolls
      const footer = document.querySelector('footer') || document.body;
      observer.observe(footer);
    } else {
      // Load immediately
      document.body.appendChild(script);
    }
  });
};

// Load script during idle time
export const loadScriptWhenIdle = (src, options = {}) => {
  const loadWhenIdle = () => loadScript(src, options);
  
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(loadWhenIdle, { timeout: 2000 });
  } else {
    // Fallback for browsers that don't support requestIdleCallback
    setTimeout(loadWhenIdle, 1000);
  }
};

// Load multiple scripts in order
export const loadScriptsInOrder = async (scripts) => {
  for (const script of scripts) {
    await loadScript(script.src, script.options);
  }
};

// Load multiple scripts in parallel
export const loadScriptsInParallel = (scripts) => {
  return Promise.all(scripts.map(script => loadScript(script.src, script.options)));
};
