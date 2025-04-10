'use client';
import Link from 'next/link';
import '../public/css/main.css';


export default function Header() {
  return (
    <header id="header" className="header d-flex flex-column justify-content-center">
      <i className="header-toggle d-xl-none bi bi-list"></i>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li><Link href="#hero" className="active"><i className="bi bi-house navicon"></i><span>Home</span></Link></li>
          <li><Link href="#about"><i className="bi bi-person navicon"></i><span>About</span></Link></li>
          <li><Link href="#resume"><i className="bi bi-file-earmark-text navicon"></i><span>Resume</span></Link></li>
          <li><Link href="#portfolio"><i className="bi bi-images navicon"></i><span>Portfolio</span></Link></li>
          <li><Link href="#services"><i className="bi bi-hdd-stack navicon"></i><span>Services</span></Link></li>
          <li><Link href="#contact"><i className="bi bi-envelope navicon"></i><span>Contact</span></Link></li>
        </ul>
      </nav>
    </header>
  );
}