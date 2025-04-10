// Script pour optimiser spécifiquement les images de fond
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const config = {
  // Image de fond principale
  backgroundImage: path.join(__dirname, '../public/img/background.jpg'),
  // Répertoire de sortie
  outputDir: path.join(__dirname, '../public/img/optimized'),
  // Qualité des images
  quality: {
    jpeg: 80,
    webp: 75,
    avif: 70
  },
  // Tailles responsives
  sizes: [640, 1024, 1920],
  // Ignorer les fichiers existants
  skipExisting: true
};

// Créer le répertoire de sortie s'il n'existe pas
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// Fonction pour optimiser l'image de fond
async function optimizeBackgroundImage() {
  try {
    const filename = path.basename(config.backgroundImage);
    const ext = path.extname(config.backgroundImage).toLowerCase();
    const nameWithoutExt = path.basename(filename, ext);
    
    // Obtenir les dimensions de l'image
    const metadata = await sharp(config.backgroundImage).metadata();
    
    // Créer des versions optimisées pour différentes tailles
    for (const size of config.sizes) {
      // Ne pas redimensionner si l'image est plus petite que la taille cible
      if (metadata.width <= size) continue;
      
      // Créer une version JPEG optimisée
      const jpegOutputPath = path.join(config.outputDir, `${nameWithoutExt}-${size}.jpg`);
      if (!config.skipExisting || !fs.existsSync(jpegOutputPath)) {
        await sharp(config.backgroundImage)
          .resize(size)
          .jpeg({ quality: config.quality.jpeg })
          .toFile(jpegOutputPath);
        console.log(`Version JPEG optimisée créée: ${jpegOutputPath}`);
      }
      
      // Créer une version WebP
      const webpOutputPath = path.join(config.outputDir, `${nameWithoutExt}-${size}.webp`);
      if (!config.skipExisting || !fs.existsSync(webpOutputPath)) {
        await sharp(config.backgroundImage)
          .resize(size)
          .webp({ quality: config.quality.webp })
          .toFile(webpOutputPath);
        console.log(`Version WebP créée: ${webpOutputPath}`);
      }
      
      // Créer une version AVIF (format moderne très efficace)
      const avifOutputPath = path.join(config.outputDir, `${nameWithoutExt}-${size}.avif`);
      if (!config.skipExisting || !fs.existsSync(avifOutputPath)) {
        try {
          await sharp(config.backgroundImage)
            .resize(size)
            .avif({ quality: config.quality.avif })
            .toFile(avifOutputPath);
          console.log(`Version AVIF créée: ${avifOutputPath}`);
        } catch (error) {
          console.error(`Erreur lors de la création de la version AVIF: ${error.message}`);
        }
      }
    }
    
    // Créer des versions originales en WebP et AVIF
    const webpOutputPath = path.join(config.outputDir, `${nameWithoutExt}.webp`);
    if (!config.skipExisting || !fs.existsSync(webpOutputPath)) {
      await sharp(config.backgroundImage)
        .webp({ quality: config.quality.webp })
        .toFile(webpOutputPath);
      console.log(`Version WebP originale créée: ${webpOutputPath}`);
    }
    
    const avifOutputPath = path.join(config.outputDir, `${nameWithoutExt}.avif`);
    if (!config.skipExisting || !fs.existsSync(avifOutputPath)) {
      try {
        await sharp(config.backgroundImage)
          .avif({ quality: config.quality.avif })
          .toFile(avifOutputPath);
        console.log(`Version AVIF originale créée: ${avifOutputPath}`);
      } catch (error) {
        console.error(`Erreur lors de la création de la version AVIF originale: ${error.message}`);
      }
    }
  } catch (error) {
    console.error(`Erreur lors de l'optimisation de l'image de fond:`, error);
  }
}

// Fonction principale
async function main() {
  console.log('Démarrage de l\'optimisation de l\'image de fond...');
  await optimizeBackgroundImage();
  console.log('Optimisation de l\'image de fond terminée!');
}

// Exécuter le script
main().catch(console.error);
