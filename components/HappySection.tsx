'use client';

import React from 'react';

export default function ServicesSection() {
  return (
<section id="stats" className="stats section">

  <div className="container" data-aos="fade-up" data-aos-delay="100">

    <div className="row gy-4 justify-content-center">

      <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center">
        <i className="bi bi-emoji-smile"></i>
        <div className="stats-item">
        <span className="purecounter">24</span>
          <p>Happy Clients</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center">
        <i className="bi bi-journal-richtext"></i>
        <div className="stats-item">
        <span className="purecounter">37</span>
          <p>Projects</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center">
        <i className="bi bi-headset"></i>
        <div className="stats-item">
          <span className="purecounter">860</span>
          <p>Hours Of Support</p>
        </div>
      </div>
    </div>

  </div>

</section>
  );
}