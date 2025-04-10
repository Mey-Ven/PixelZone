'use client';

import { useEffect } from 'react';
import Typed from 'typed.js';

export default function ClientTyped() {
  useEffect(() => {
    const typed = new Typed('.typed', {
      strings: ['Development', 'Design', 'Freelance'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return null;
}