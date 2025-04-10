/**
 * Script de chargement progressif des images
 * Améliore l'expérience utilisateur pendant le chargement des images
 */

(function() {
  // Configuration
  const config = {
    // Sélecteur pour les images à charger progressivement
    selector: 'img.progressive-image',
    // Attribut contenant l'URL de l'image haute qualité
    srcAttribute: 'data-src',
    // Attribut contenant l'URL de l'image basse qualité
    placeholderAttribute: 'src',
    // Classe à ajouter pendant le chargement
    loadingClass: 'loading',
    // Classe à ajouter une fois chargée
    loadedClass: 'loaded',
    // Seuil d'intersection (0 à 1)
    threshold: 0.1,
    // Marge autour de l'élément pour déclencher le chargement
    rootMargin: '50px 0px',
    // Activer les logs de débogage
    debug: false
  };
  
  // Fonction de log
  const log = config.debug ? console.log.bind(console, '[ProgressiveLoader]') : () => {};
  
  // Fonction pour initialiser le chargement progressif
  function initProgressiveLoading() {
    // Vérifier si IntersectionObserver est disponible
    if (!('IntersectionObserver' in window)) {
      loadAllImages();
      return;
    }
    
    // Créer un observateur d'intersection
    const observer = new IntersectionObserver(onIntersection, {
      rootMargin: config.rootMargin,
      threshold: config.threshold
    });
    
    // Sélectionner toutes les images progressives
    const images = document.querySelectorAll(config.selector);
    
    // Observer chaque image
    images.forEach(image => {
      if (image.hasAttribute(config.srcAttribute)) {
        observer.observe(image);
        image.classList.add(config.loadingClass);
      }
    });
    
    log(`Observation de ${images.length} images`);
  }
  
  // Fonction appelée lorsqu'une image entre dans la zone visible
  function onIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target;
        loadImage(image);
        this.unobserve(image);
      }
    });
  }
  
  // Fonction pour charger une image
  function loadImage(image) {
    const src = image.getAttribute(config.srcAttribute);
    if (!src) return;
    
    // Créer une nouvelle image pour le préchargement
    const img = new Image();
    
    img.onload = () => {
      // Remplacer l'image basse qualité par l'image haute qualité
      image.src = src;
      image.classList.remove(config.loadingClass);
      image.classList.add(config.loadedClass);
      image.removeAttribute(config.srcAttribute);
      log(`Image chargée: ${src}`);
    };
    
    img.onerror = () => {
      log(`Erreur de chargement: ${src}`);
      image.classList.remove(config.loadingClass);
    };
    
    img.src = src;
  }
  
  // Fonction de secours pour charger toutes les images
  function loadAllImages() {
    const images = document.querySelectorAll(config.selector);
    
    images.forEach(image => {
      if (image.hasAttribute(config.srcAttribute)) {
        loadImage(image);
      }
    });
    
    log(`Chargement de secours pour ${images.length} images`);
  }
  
  // Initialiser le chargement progressif au chargement du DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProgressiveLoading);
  } else {
    initProgressiveLoading();
  }
  
  // Exporter l'API pour une utilisation externe
  window.ProgressiveLoader = {
    init: initProgressiveLoading,
    load: loadImage
  };
})();
