'use client';

import { useEffect } from 'react';

export default function ClientGlightbox() {
  useEffect(() => {
    const GLightbox = require('glightbox');
    const lightbox = GLightbox({
      selector: '.glightbox',
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  return null;
}