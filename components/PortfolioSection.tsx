'use client';

import React from 'react';

export default function ServicesSection() {
  return (

    <section id="portfolio" className="portfolio section">

    <div className="container section-title" data-aos="fade-up">
      <h2>Portfolio</h2>
      <p>Explore a showcase of our most impactful projects, spanning web development, graphic design, and digital solutions. From stunning logos to responsive websites and tailored digital workflows, our portfolio highlights the creativity and expertise we bring to every collaboration.</p>
    </div>
    <div className="container">

      <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

        <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-card filter-branding" style={{ position: 'relative' }}>
            <div id="portfolioCarousel1" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/img/masonry-portfolio/cv.png" className="img-fluid portfolio-img" alt="Business Card Design" />
                </div>
                <div className="carousel-item">
                  <img src="/img/masonry-portfolio/cv1.png" className="img-fluid portfolio-img" alt="Logo Design" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#portfolioCarousel1" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </a>
              <a className="carousel-control-next" href="#portfolioCarousel1" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </a>
            </div>
            <div className="portfolio-info">
              <h4>Pixel Zone Business Card Design</h4>
            </div>
            <div className="portfolio-zoom-icon">
              <a href="/img/masonry-portfolio/cv.png" data-gallery="portfolio-gallery-carousel1" className="glightbox preview-link">
                <i className="bi bi-zoom-in"></i>
              </a>
              <a href="/img/masonry-portfolio/cv1.png" data-gallery="portfolio-gallery-carousel1" className="glightbox preview-link" style={{ display: 'none' }}></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding" style={{ position: 'relative' }}>
            <div id="portfolioCarousel2" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/img/masonry-portfolio/ds1.png" className="img-fluid portfolio-img" alt="Branding Image 1" />
                </div>
                <div className="carousel-item">
                  <img src="/img/masonry-portfolio/ds2.png" className="img-fluid portfolio-img" alt="Branding Image 2" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#portfolioCarousel2" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </a>
              <a className="carousel-control-next" href="#portfolioCarousel2" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </a>
            </div>
            <div className="portfolio-info">
              <h4>Pixel Zone Wall Design</h4>
            </div>
            <div className="portfolio-zoom-icon">
              <a href="/img/masonry-portfolio/ds1.png" data-gallery="portfolio-gallery-carousel2" className="glightbox preview-link">
                <i className="bi bi-zoom-in"></i>
              </a>
              <a href="/img/masonry-portfolio/ds2.png" data-gallery="portfolio-gallery-carousel2" className="glightbox preview-link" style={{ display: 'none' }}></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding" style={{ position: 'relative' }}>
            <div id="portfolioCarousel3" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/img/masonry-portfolio/cup.png" className="img-fluid portfolio-img" alt="Cup Design" />
                </div>
                <div className="carousel-item">
                  <img src="/img/masonry-portfolio/cup.png" className="img-fluid portfolio-img" alt="cup" />
                </div>
                <div className="carousel-item">
                  <img src="/img/masonry-portfolio/cup1.png" className="img-fluid portfolio-img" alt="cup1" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#portfolioCarousel3" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </a>
              <a className="carousel-control-next" href="#portfolioCarousel3" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </a>
            </div>
            <div className="portfolio-info">
              <h4>Pixel Zone Cup Design</h4>
            </div>
            <div className="portfolio-zoom-icon">
              <a href="/img/masonry-portfolio/cup.png" data-gallery="portfolio-gallery-carousel3" className="glightbox preview-link">
                <i className="bi bi-zoom-in"></i>
              </a>
              <a href="/img/masonry-portfolio/cup1.png" data-gallery="portfolio-gallery-carousel3" className="glightbox preview-link" style={{ display: 'none' }}></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding" style={{ position: 'relative' }}>
            <div id="portfolioCarousel4" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/img/masonry-portfolio/boxs.png" className="img-fluid portfolio-img" alt="cup" />
                </div>
                <div className="carousel-item">
                  <img src="/img/masonry-portfolio/boxtop.png" className="img-fluid portfolio-img" alt="cup1" />
                </div>
                <div className="carousel-item">
                  <img src="/img/masonry-portfolio/boxp.png" className="img-fluid portfolio-img" alt="cup1" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#portfolioCarousel4" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </a>
              <a className="carousel-control-next" href="#portfolioCarousel4" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </a>
            </div>
            <div className="portfolio-info">
              <h4>Pixel Zone Boxes Packaging Design</h4>
            </div>
            <div className="portfolio-zoom-icon">
              <a href="/img/masonry-portfolio/boxs.png" data-gallery="portfolio-gallery-carousel4" className="glightbox preview-link">
                <i className="bi bi-zoom-in"></i>
              </a>
              <a href="/img/masonry-portfolio/boxtop.png" data-gallery="portfolio-gallery-carousel4" className="glightbox preview-link" style={{ display: 'none' }}></a>
              <a href="/img/masonry-portfolio/boxp.png" data-gallery="portfolio-gallery-carousel4" className="glightbox preview-link" style={{ display: 'none' }}></a>
            </div>
          </div>

    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding filter-card">
      <img src="/img/masonry-portfolio/present.png" className="img-fluid portfolio-img" alt="Present" />
      <div className="portfolio-info">
          <h4>Pixel Zone Desktop Design</h4>
      </div>
      <div className="portfolio-zoom-icon">
          <a href="/img/masonry-portfolio/present.png" data-gallery="portfolio-gallery-present" className="glightbox preview-link">
              <i className="bi bi-zoom-in"></i>
          </a>
      </div>
    </div>


    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding filter-card">
      <img src="/img/masonry-portfolio/bdg.png" className="img-fluid portfolio-img" alt="bdg" />
      <div className="portfolio-info">
          <h4>Pixel Zone Badges Design</h4>
      </div>
      <div className="portfolio-zoom-icon">
          <a href="/img/masonry-portfolio/bdg.png" data-gallery="portfolio-gallery-bdg" className="glightbox preview-link">
              <i className="bi bi-zoom-in"></i>
          </a>
      </div>
    </div>


    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding filter-card">
      <img src="/img/masonry-portfolio/hd.png" className="img-fluid portfolio-img" alt="hd" />
      <div className="portfolio-info">
          <h4>Pixel Zone Team Hoodies Design</h4>
      </div>
      <div className="portfolio-zoom-icon">
          <a href="/img/masonry-portfolio/hd.png" data-gallery="portfolio-gallery-hd" className="glightbox preview-link">
              <i className="bi bi-zoom-in"></i>
          </a>
      </div>
    </div>

    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding filter-card">
      <img src="/img/masonry-portfolio/tsh.png" className="img-fluid portfolio-img" alt="tsh" />
      <div className="portfolio-info">
          <h4>Pixel Zone Team Sweatshirts Design</h4>
      </div>
      <div className="portfolio-zoom-icon">
          <a href="/img/masonry-portfolio/tsh.png" data-gallery="portfolio-gallery-tsh" className="glightbox preview-link">
              <i className="bi bi-zoom-in"></i>
          </a>
      </div>
    </div>


    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding filter-card">
      <img src="/img/masonry-portfolio/am1.png" className="img-fluid portfolio-img" alt="am" />
      <div className="portfolio-info">
          <h4>Construction Company WebSite</h4>
      </div>
      <div className="portfolio-zoom-icon">
          <a href="/img/masonry-portfolio/am1.png" data-gallery="portfolio-gallery-am" className="glightbox preview-link">
              <i className="bi bi-zoom-in"></i>
          </a>
      </div>
    </div>


    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding filter-card">
      <img src="/img/masonry-portfolio/bt1.png" className="img-fluid portfolio-img" alt="bt" />
      <div className="portfolio-info">
          <h4>Login System For Construction Company WebSite</h4>
      </div>
      <div className="portfolio-zoom-icon">
          <a href="/img/masonry-portfolio/bt1.png" data-gallery="portfolio-gallery-bt" className="glightbox preview-link">
              <i className="bi bi-zoom-in"></i>
          </a>
      </div>
    </div>


    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding filter-website">
      <img src="/img/masonry-portfolio/epc.png" className="img-fluid portfolio-img" alt="Elevator" />
      <div className="portfolio-info">
          <h4>Elevator Company WebSite</h4>
      </div>
      <div className="portfolio-zoom-icon">
          <a href="/img/masonry-portfolio/epc.png" data-gallery="portfolio-gallery-Elevator" className="glightbox preview-link">
              <i className="bi bi-zoom-in"></i>
          </a>
      </div>
    </div>

    <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
      <div id="portfolioCarousel5" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
              <div className="carousel-item active">
                  <img src="/img/masonry-portfolio/BuildMate/Matériaux_Disponibles.png" className="img-fluid portfolio-img" alt="Materials" />
              </div>
              <div className="carousel-item">
                  <img src="/img/masonry-portfolio/BuildMate/Ajouter_un_Matériau.png" className="img-fluid portfolio-img" alt="Materials" />
              </div>
              <div className="carousel-item">
                  <img src="/img/masonry-portfolio/BuildMate/Liste_Commandes.png" className="img-fluid portfolio-img" alt="Materials" />
              </div>
              <div className="carousel-item">
                  <img src="/img/masonry-portfolio/BuildMate/Devises.jpeg" className="img-fluid portfolio-img" alt="Materials" />
              </div>
          </div>
          <a className="carousel-control-prev" href="#portfolioCarousel5" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#portfolioCarousel5" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
          </a>
      </div>
      <div className="portfolio-info">
          <h4>Construction Materials Management Platform</h4>
      </div>
      <div className="portfolio-zoom-icon">
          <a href="/img/masonry-portfolio/BuildMate/Matériaux_Disponibles.png" data-gallery="portfolio-gallery-Materials" className="glightbox preview-link">
              <i className="bi bi-zoom-in"></i>
          </a>
          <a href="/img/masonry-portfolio/BuildMate/Ajouter_un_Matériau.png" data-gallery="portfolio-gallery-Materials" className="glightbox preview-link" style={{ display: 'none' }}></a>
          <a href="/img/masonry-portfolio/BuildMate/Liste_Commandes.png" data-gallery="portfolio-gallery-Materials" className="glightbox preview-link" style={{ display: 'none' }}></a>
          <a href="/img/masonry-portfolio/BuildMate/Devises.jpeg" data-gallery="portfolio-gallery-Materials" className="glightbox preview-link" style={{ display: 'none' }}></a>
      </div>
    </div>

        </div>
      </div>
    </div>
    </section>
  );
}