/**
 * Script de préchargement d'images
 * Précharge les images critiques pour améliorer les performances
 */

(function() {
  // Configuration
  const config = {
    // Images critiques à précharger immédiatement
    criticalImages: [
      '/img/background.webp',
      '/img/optimized/background-1024.webp',
      '/img/mobile/background-small.webp'
    ],
    // Images à précharger après le chargement de la page
    secondaryImages: [
      '/img/profile-img.png',
      '/img/masonry-portfolio/cv.png',
      '/img/masonry-portfolio/ds1.png'
    ],
    // Délai avant de précharger les images secondaires (ms)
    secondaryDelay: 1000,
    // Activer les logs de débogage
    debug: false
  };
  
  // Fonction de log
  const log = config.debug ? console.log.bind(console, '[ImagePreloader]') : () => {};
  
  // Fonction pour précharger une image
  function preloadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        log(`Image préchargée: ${src}`);
        resolve(img);
      };
      img.onerror = () => {
        log(`Erreur de préchargement: ${src}`);
        reject(new Error(`Échec du préchargement de ${src}`));
      };
      img.src = src;
    });
  }
  
  // Fonction pour précharger un ensemble d'images
  function preloadImages(sources) {
    return Promise.all(sources.map(src => preloadImage(src).catch(() => null)));
  }
  
  // Précharger les images critiques immédiatement
  log('Préchargement des images critiques...');
  preloadImages(config.criticalImages);
  
  // Précharger les images secondaires après le chargement de la page
  window.addEventListener('load', () => {
    setTimeout(() => {
      log('Préchargement des images secondaires...');
      preloadImages(config.secondaryImages);
    }, config.secondaryDelay);
  });
  
  // Précharger les images visibles dans la fenêtre
  function preloadVisibleImages() {
    const images = Array.from(document.querySelectorAll('img[data-src]'));
    
    images.forEach(img => {
      if (isElementInViewport(img)) {
        const src = img.getAttribute('data-src');
        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
          log(`Image visible chargée: ${src}`);
        }
      }
    });
  }
  
  // Vérifier si un élément est visible dans la fenêtre
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Ajouter un écouteur d'événements pour le défilement
  window.addEventListener('scroll', debounce(preloadVisibleImages, 200), { passive: true });
  
  // Fonction debounce pour limiter les appels fréquents
  function debounce(func, wait) {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }
  
  // Exporter l'API pour une utilisation externe
  window.ImagePreloader = {
    preload: preloadImage,
    preloadBatch: preloadImages
  };
})();
