// Script pour gérer les indicateurs de défilement dans la section Happy

document.addEventListener('DOMContentLoaded', function() {
  // Sélectionner le conteneur de statistiques
  const statsContainer = document.querySelector('.stats-container');
  
  // Si le conteneur existe et que nous sommes sur mobile
  if (statsContainer && window.innerWidth < 576) {
    // Sélectionner les points indicateurs
    const dots = document.querySelectorAll('.stats-scroll-indicator .dot');
    
    // Ajouter un écouteur d'événement pour le défilement
    statsContainer.addEventListener('scroll', function() {
      // Calculer la position de défilement relative
      const scrollPosition = statsContainer.scrollLeft;
      const maxScroll = statsContainer.scrollWidth - statsContainer.clientWidth;
      const scrollRatio = scrollPosition / maxScroll;
      
      // Déterminer quel point doit être actif
      let activeIndex = 0;
      if (scrollRatio > 0.25 && scrollRatio <= 0.75) {
        activeIndex = 1;
      } else if (scrollRatio > 0.75) {
        activeIndex = 2;
      }
      
      // Mettre à jour les classes des points
      dots.forEach((dot, index) => {
        if (index === activeIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    });
    
    // Ajouter des écouteurs d'événements pour les points
    dots.forEach((dot, index) => {
      dot.addEventListener('click', function() {
        // Calculer la position de défilement cible
        const targetPosition = (statsContainer.scrollWidth - statsContainer.clientWidth) * (index / 2);
        
        // Faire défiler jusqu'à la position cible avec une animation fluide
        statsContainer.scrollTo({
          left: targetPosition,
          behavior: 'smooth'
        });
      });
    });
  }
});
