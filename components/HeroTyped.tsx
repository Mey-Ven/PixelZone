'use client';

import { useEffect, useState } from 'react';
import Typed from 'typed.js';

export default function HeroTyped() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const typed = new Typed('.typed', {
      strings: ['Development', 'Design', 'Freelance'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  if (!isClient) return null;

  return (
    <span className="typed"></span>
  );
}