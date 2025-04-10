'use client';

import React from 'react';

export default function ServicesSection() {
  return (
<section id="about" className="about section">
  <div className="container section-title" data-aos="fade-up">
    <h2>About</h2>
    <p>At <strong>Pixel Zone</strong>, we are passionate about creating innovative and visually stunning digital experiences. Our team combines expertise in graphic design, web development, video editing, task digitalization, and above all, our love for crafting websites that leave a lasting impression. Our mission is to empower businesses with designs, solutions, and workflows that resonate with their audience and streamline their operations.</p>
  </div>

  <div className="container" data-aos="fade-up" data-aos-delay="100">

    <div className="row gy-4 justify-content-center">
      <div className="col-lg-4">
        <img src="/img/profile-img.png" className="img-fluid" alt="" />
      </div>
      <div className="col-lg-8 content">
        <h2>Creative Visionary & Web Solutions Expert</h2>
        <p className="fst-italic py-3">
          Crafting innovative and user-friendly digital solutions with a creative touch.
        </p>
        <div className="row">
          <div className="col-lg-6">
            <ul>
              <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+212 7 77 16 90 39</span></li>
              <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Tangier, Morocco</span></li>
              <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Engineering in Computer Science and Design</span></li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul>
              <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>pixel.zone18@gmail.com</span></li>
              <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
            </ul>
          </div>
        </div>
        <p className="py-3">
          We’re more than just a creative agency—we’re your partner in building a digital presence that stands out. At Pixel Zone, we blend passion, innovation, and expertise to craft solutions that not only look great but also drive results. Your success is our mission, and we thrive on turning your vision into reality.
        </p>
      </div>
    </div>

  </div>

</section>

  );
}