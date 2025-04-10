'use client';

import React from 'react';

export default function HappySection() {
  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {/* Affichage compact des statistiques */}
        <div className="row justify-content-center">

          {/* Statistiques des clients */}
          <div className="col-4 col-md-4">
            <div className="stats-compact d-flex flex-column align-items-center">
              <i className="bi bi-emoji-smile-fill small-icon"></i>
              <div className="stats-item text-center">
                <span className="purecounter fs-5">24</span>
                <p className="small-text mb-0">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Statistiques des projets */}
          <div className="col-4 col-md-4">
            <div className="stats-compact d-flex flex-column align-items-center">
              <i className="bi bi-folder-fill small-icon"></i>
              <div className="stats-item text-center">
                <span className="purecounter fs-5">37</span>
                <p className="small-text mb-0">Projects</p>
              </div>
            </div>
          </div>

          {/* Statistiques des heures de support */}
          <div className="col-4 col-md-4">
            <div className="stats-compact d-flex flex-column align-items-center">
              <i className="bi bi-clock-fill small-icon"></i>
              <div className="stats-item text-center">
                <span className="purecounter fs-5">860</span>
                <p className="small-text mb-0">Hours Of Support</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}