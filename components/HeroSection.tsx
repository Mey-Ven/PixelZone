// components/HeroSection.tsx
'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section id="hero" className="hero section light-background">
      {/* Utiliser l'élément picture pour le support WebP */}
      <picture>
        {/* Source WebP pour les navigateurs qui le supportent */}
        <source
          srcSet="/img/background.webp"
          type="image/webp"
        />
        {/* Fallback JPG pour les autres navigateurs */}
        <img
          src="/img/background.jpg"
          alt="Background"
          loading="eager"
          width="1920"
          height="1080"
        />
      </picture>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2>Pixel Zone</h2>
            <p><span className="typed" data-typed-items="Development, Design, Freelance">Development</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
            <div className="social-links">
              {/* <a href="#"><i className="bi bi-facebook"></i></a> */}
              {/* <a href="https://www.instagram.com/pixel_.zone/profilecard/?igsh=MTd4MHdiaWVxbndrNg=="><i className="bi bi-instagram"></i></a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}