const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Create optimized images directory if it doesn't exist
const optimizedDir = path.join(__dirname, '../public/img/optimized');
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Optimize hero background image
const heroImage = path.join(__dirname, '../public/img/background.jpg');
const heroImageWebp = path.join(optimizedDir, 'background.webp');
const heroImageAvif = path.join(optimizedDir, 'background.avif');

// Create WebP version
sharp(heroImage)
  .resize(1920, 1080, { fit: 'cover' })
  .webp({ quality: 80 })
  .toFile(heroImageWebp)
  .then(() => console.log('Hero WebP image created'))
  .catch(err => console.error('Error creating WebP image:', err));

// Create AVIF version
sharp(heroImage)
  .resize(1920, 1080, { fit: 'cover' })
  .avif({ quality: 65 })
  .toFile(heroImageAvif)
  .then(() => console.log('Hero AVIF image created'))
  .catch(err => console.error('Error creating AVIF image:', err));

// Create responsive versions of the hero image
const sizes = [640, 1024, 1366, 1920];
sizes.forEach(width => {
  const height = Math.round(width * (1080 / 1920)); // Maintain aspect ratio
  
  // WebP
  sharp(heroImage)
    .resize(width, height, { fit: 'cover' })
    .webp({ quality: 80 })
    .toFile(path.join(optimizedDir, `background-${width}.webp`))
    .then(() => console.log(`Hero WebP image ${width}px created`))
    .catch(err => console.error(`Error creating WebP image ${width}px:`, err));
  
  // AVIF
  sharp(heroImage)
    .resize(width, height, { fit: 'cover' })
    .avif({ quality: 65 })
    .toFile(path.join(optimizedDir, `background-${width}.avif`))
    .then(() => console.log(`Hero AVIF image ${width}px created`))
    .catch(err => console.error(`Error creating AVIF image ${width}px:`, err));
});
