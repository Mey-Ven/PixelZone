'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientBootstrap from '@/components/ClientBootstrap';
import ClientTyped from '@/components/ClientTyped';
import ClientGlightbox from '@/components/ClientGlightbox';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HappySection from '@/components/HappySection';
import SkillsSection from '@/components/SkillsSection';
import ResumeSection from '@/components/ResumeSection';
import PortfolioSection from '@/components/PortfolioSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';

// CSS imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'glightbox/dist/css/glightbox.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../public/css/main.css';

export default function HomePage() {
  return (
    <>
      <ClientBootstrap />
      <Header />
      <ClientTyped />
      <ClientGlightbox />
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
