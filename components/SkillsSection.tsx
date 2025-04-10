'use client';

import React from 'react';

export default function ServicesSection() {
  return (
<section id="skills" className="skills section">
<div className="container section-title" data-aos="fade-up">
  <h2>Skills</h2>
  <p>Explore the key skills that empower us to turn your ideas into reality.</p>
</div>

<div className="container" data-aos="fade-up" data-aos-delay="100">
  <div className="row skills-content skills-animation">
    {/* Left Column */}
    <div className="col-lg-6">
      <div className="progress">
        <span className="skill">
          <span>HTML</span> <i className="val">100%</i>
        </span>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={100}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: '100%' }}
          ></div>
        </div>
      </div>

      <div className="progress">
        <span className="skill">
          <span>CSS</span> <i className="val">100%</i>
        </span>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={100}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: '100%' }}
          ></div>
        </div>
      </div>

      <div className="progress">
        <span className="skill">
          <span>JavaScript</span> <i className="val">55%</i>
        </span>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={55}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: '55%' }}
          ></div>
        </div>
      </div>

      <div className="progress">
        <span className="skill">
          <span>C#</span> <i className="val">80%</i>
        </span>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={80}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: '80%' }}
          ></div>
        </div>
      </div>

      <div className="progress">
        <span className="skill">
          <span>MySQL</span> <i className="val">90%</i>
        </span>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={90}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: '90%' }}
          ></div>
        </div>
      </div>

      <div className="progress">
        <span className="skill">
          <span>SQLite</span> <i className="val">90%</i>
        </span>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={90}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: '90%' }}
          ></div>
        </div>
      </div>
    </div>

    {/* Right Column */}
    <div className="col-lg-6">
      <div className="progress">
        <span className="skill">
          <span>Illustrator</span> <i className="val">100%</i>
        </span>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={100}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: '100%' }}
          ></div>
        </div>
      </div>

      <div className="progress">
        <span className="skill">
          <span>Photoshop</span> <i className="val">100%</i>
        </span>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={100}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: '100%' }}
          ></div>
        </div>
      </div>

      <div className="progress">
        <span className="skill">
          <span>PHP</span> <i className="val">85%</i>
        </span>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={85}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: '85%' }}
          ></div>
        </div>
      </div>

      <div className="progress">
        <span className="skill">
          <span>Python</span> <i className="val">80%</i>
        </span>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={80}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: '80%' }}
          ></div>
        </div>
      </div>

      <div className="progress">
        <span className="skill">
          <span>.NET</span> <i className="val">80%</i>
        </span>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={80}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: '80%' }}
          ></div>
        </div>
      </div>

      <div className="progress">
        <span className="skill">
          <span>Django</span> <i className="val">80%</i>
        </span>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={80}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: '80%' }}
          ></div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
  );
}