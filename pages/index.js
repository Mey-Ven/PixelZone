import { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import HappySection from '../components/HappySection';
import SkillsSection from '../components/SkillsSection';
import ResumeSection from '../components/ResumeSection';
import PortfolioSection from '../components/PortfolioSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  // Client-side only code
  useEffect(() => {
    // Load Bootstrap JS
    import('bootstrap/dist/js/bootstrap.bundle.min.js').catch((err) =>
      console.error('Failed to load Bootstrap JS:', err)
    );

    // Initialize Typed.js
    import('typed.js').then((Typed) => {
      const typed = new Typed.default('.typed', {
        strings: ['Development', 'Design', 'Freelance'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    });

    // Initialize GLightbox
    import('glightbox').then((GLightbox) => {
      const lightbox = GLightbox.default({
        selector: '.glightbox',
      });

      return () => {
        lightbox.destroy();
      };
    });
  }, []);

  return (
    <>
      <Head>
        <title>PixelZone</title>
        <meta name="description" content="Portfolio & Services" />
      </Head>
      <Header />
      <main className="main">
        <HeroSection />
        <AboutSection />
        <HappySection />
        <SkillsSection />
        <ResumeSection />
        <PortfolioSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
