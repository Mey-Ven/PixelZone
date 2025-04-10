'use client';

import React, { useEffect } from 'react';

export default function HappySection() {
  // Charger le script de défilement pour mobile
  useEffect(() => {
    // Créer un élément script
    const script = document.createElement('script');
    script.src = '/js/happy-section-scroll.js';
    script.async = true;

    // Ajouter le script au document
    document.body.appendChild(script);

    // Nettoyer le script lors du démontage du composant
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {/* Utilisation de la classe row-cols-* pour forcer l'affichage horizontal sur mobile */}
        <div className="row row-cols-1 row-cols-sm-3 g-3 justify-content-center stats-container">

          <div className="col">
            <div className="stats-card d-flex flex-column align-items-center">
              <i className="bi bi-emoji-smile-fill"></i>
              <div className="stats-item">
                <span className="purecounter">24</span>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="stats-card d-flex flex-column align-items-center">
              <i className="bi bi-folder-fill"></i>
              <div className="stats-item">
                <span className="purecounter">37</span>
                <p>Projects</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="stats-card d-flex flex-column align-items-center">
              <i className="bi bi-clock-fill"></i>
              <div className="stats-item">
                <span className="purecounter">860</span>
                <p>Hours Of Support</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Indicateurs de défilement pour mobile */}
      <div className="stats-scroll-indicator d-block d-sm-none">
        <div className="dot active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </section>
  );
}