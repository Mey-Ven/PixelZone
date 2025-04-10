// components/ServicesSection.tsx
'use client';

import React from 'react';

export default function ServicesSection() {
  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>We are dedicated to providing innovative and visually stunning digital solutions that resonate with your audience and streamline your operations.</p>
      </div>

      <div className="container">
        <div className="row gy-4">

          {[
            {
              color: 'cyan',
              icon: 'bi-code-slash',
              title: 'Web Development',
              desc: 'We build modern, interactive, and high-performing websites tailored to your business needs.'
            },
            {
              color: 'orange',
              icon: 'bi-brush',
              title: 'Graphic Design',
              desc: 'Unique and captivating designs that enhance your brand identity and engage your audience.'
            },
            {
              color: 'teal',
              icon: 'bi-laptop',
              title: 'Local Application Development',
              desc: 'Customized local applications to optimize and enhance your internal operations.'
            },
            {
              color: 'red',
              icon: 'bi-display',
              title: 'Web and Desktop Applications',
              desc: 'Development of tailored web and desktop applications combining performance and usability.'
            },
            {
              color: 'indigo',
              icon: 'bi-film',
              title: 'Video Editing',
              desc: 'Professional video production and editing to elevate your projects and captivate audiences.'
            },
            {
              color: 'pink',
              icon: 'bi-diagram-3',
              title: 'Task Digitalization',
              desc: 'Innovative solutions to automate and simplify your internal workflows for maximum efficiency.'
            }
          ].map((service, index) => (
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={(index + 1) * 100} key={index}>
              <div className={`service-item item-${service.color} position-relative`}>
                <div className="icon">
                  <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                    <path
                      stroke="none"
                      strokeWidth="0"
                      fill="#f5f5f5"
                      d="M300,520C400,520,480,470,520,400C560,330,560,270,520,200C480,130,400,80,300,80C200,80,120,130,80,200C40,270,40,330,80,400C120,470,200,520,300,520Z"
                    />
                  </svg>
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <a className="stretched-link">
                  <h3>{service.title}</h3>
                </a>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}