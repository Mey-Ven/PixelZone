// components/HeroSection.tsx
'use client';

import React, { useEffect, useState } from 'react';
import OptimizedImage from './OptimizedImage';

export default function HeroSection() {
  // État pour suivre si le composant est monté (pour le rendu côté client)
  const [isMounted, setIsMounted] = useState(false);

  // Définir l'état monté après le montage du composant
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="hero" className="hero section light-background">
      {/* Utiliser le composant OptimizedImage pour une meilleure performance */}
      <div className="hero-background">
        {isMounted ? (
          <OptimizedImage
            src="/img/optimized/background-640.avif"
            mobileSrc="/img/optimized/background-640.avif"
            alt="Background"
            width={1920}
            height={1080}
            priority={true}
            loading="eager"
            objectFit="cover"
            useLqip={true}
            quality={80}
            sizes="100vw"
          />
        ) : (
          // Pendant le SSR, utiliser une balise img simple
          <img
            src="/img/background.jpg"
            alt="Background"
            width="1920"
            height="1080"
          />
        )}
      </div>

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