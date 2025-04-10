'use client';

import { useEffect } from 'react';

// Add a type declaration for the Bootstrap global object
declare global {
  interface Window {
    bootstrap: any;
  }
}

export default function ClientBootstrap() {
  useEffect(() => {
    // Dynamically import Bootstrap's JavaScript bundle to ensure it runs only on the client
    const loadBootstrap = async () => {
      try {
        // Import the Bootstrap bundle
        // @ts-ignore - Ignore the missing type declaration for the Bootstrap bundle
        await import('bootstrap/dist/js/bootstrap.bundle.min.js');

        // Initialize any Bootstrap components that need JavaScript
        // This ensures Bootstrap's JS is fully initialized after the DOM is ready
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        if (tooltipTriggerList.length > 0) {
          Array.from(tooltipTriggerList).forEach(tooltipTriggerEl => {
            new window.bootstrap.Tooltip(tooltipTriggerEl);
          });
        }

        const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
        if (popoverTriggerList.length > 0) {
          Array.from(popoverTriggerList).forEach(popoverTriggerEl => {
            new window.bootstrap.Popover(popoverTriggerEl);
          });
        }

        // Initialize dropdowns if they exist
        const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
        if (dropdownElementList.length > 0) {
          Array.from(dropdownElementList).forEach(dropdownToggleEl => {
            new window.bootstrap.Dropdown(dropdownToggleEl);
          });
        }

        // Initialize collapse elements (like hamburger menu)
        const collapseElementList = document.querySelectorAll('.collapse');
        if (collapseElementList.length > 0) {
          Array.from(collapseElementList).forEach(collapseEl => {
            new window.bootstrap.Collapse(collapseEl, {
              toggle: false
            });
          });
        }

        console.log('Bootstrap JS initialized successfully');
      } catch (err) {
        console.error('Failed to load Bootstrap JS:', err);
      }
    };

    loadBootstrap();
  }, []);

  return null; // This component doesn't render anything
}
