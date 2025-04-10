// This script runs before React hydration to fix hydration errors
(function() {
  // Remove any inline styles with --main--position--
  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
      document.documentElement.removeAttribute('style');
    });
  }
})();
