// components/ServicesSection.tsx
'use client';

import React from 'react';

export default function ServicesSection() {
  return (
    <section id="hero" className="hero section light-background">

    <img src="img/background.jpg" alt="" />
    
    <div className="container" data-aos="zoom-out">
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