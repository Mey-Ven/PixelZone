'use client';

import React from 'react';

export default function HappySection() {
  return (
    <section id="stats" className="stats section py-4">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {/* Utilisation de la classe row pour afficher tous les éléments sans défilement */}
        <div className="row justify-content-center">

          {/* Réduire la taille des colonnes pour qu'elles tiennent toutes sur l'écran */}
          <div className="col-4 col-md-4">
            <div className="stats-compact d-flex flex-column align-items-center">
              <i className="bi bi-emoji-smile-fill small-icon"></i>
              <div className="stats-item text-center">
                <span className="purecounter fs-5">24</span>
                <p className="small-text mb-0">Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="col-4 col-md-4">
            <div className="stats-compact d-flex flex-column align-items-center">
              <i className="bi bi-folder-fill small-icon"></i>
              <div className="stats-item text-center">
                <span className="purecounter fs-5">37</span>
                <p className="small-text mb-0">Projects</p>
              </div>
            </div>
          </div>

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

      <style jsx>{`
        /* Styles pour les éléments compacts */
        .stats-compact {
          padding: 10px 5px;
        }

        .small-icon {
          font-size: 1.5rem;
          margin-bottom: 5px;
        }

        .small-text {
          font-size: 0.8rem;
          white-space: nowrap;
        }

        /* Réduire l'espacement de la section */
        .stats.section {
          padding: 20px 0;
        }

        /* Styles pour les compteurs */
        .purecounter {
          font-size: 1.5rem !important;
          font-weight: bold;
          margin-bottom: 0;
        }

        @media (max-width: 576px) {
          .stats-compact {
            padding: 5px 2px;
          }

          .small-icon {
            font-size: 1.2rem;
            margin-bottom: 2px;
          }

          .small-text {
            font-size: 0.7rem;
          }

          .purecounter {
            font-size: 1.2rem !important;
          }
        }
      `}</style>
    </section>
  );
}