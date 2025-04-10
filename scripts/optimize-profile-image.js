// Script pour optimiser l'image de profil
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const config = {
  // Image de profil
  profileImage: path.join(__dirname, '../public/img/profile-img.png'),
  // Répertoire de sortie
  outputDir: path.join(__dirname, '../public/img/optimized'),
  // Qualité des images
  quality: {
    png: 80,
    webp: 75
  },
  // Tailles responsives
  sizes: [320, 640],
  // Ignorer les fichiers existants
  skipExisting: true
};

// Créer le répertoire de sortie s'il n'existe pas
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// Fonction pour optimiser l'image de profil
async function optimizeProfileImage() {
  try {
    const filename = path.basename(config.profileImage);
    const ext = path.extname(config.profileImage).toLowerCase();
    const nameWithoutExt = path.basename(filename, ext);
    
    // Obtenir les dimensions de l'image
    const metadata = await sharp(config.profileImage).metadata();
    
    // Créer des versions optimisées pour différentes tailles
    for (const size of config.sizes) {
      // Ne pas redimensionner si l'image est plus petite que la taille cible
      if (metadata.width <= size) continue;
      
      // Créer une version PNG optimisée
      const pngOutputPath = path.join(config.outputDir, `${nameWithoutExt}-${size}.png`);
      if (!config.skipExisting || !fs.existsSync(pngOutputPath)) {
        await sharp(config.profileImage)
          .resize(size)
          .png({ quality: config.quality.png })
          .toFile(pngOutputPath);
        console.log(`Version PNG optimisée créée: ${pngOutputPath}`);
      }
      
      // Créer une version WebP
      const webpOutputPath = path.join(config.outputDir, `${nameWithoutExt}-${size}.webp`);
      if (!config.skipExisting || !fs.existsSync(webpOutputPath)) {
        await sharp(config.profileImage)
          .resize(size)
          .webp({ quality: config.quality.webp })
          .toFile(webpOutputPath);
        console.log(`Version WebP créée: ${webpOutputPath}`);
      }
    }
    
    // Créer une version WebP de l'image originale
    const webpOutputPath = path.join(config.outputDir, `${nameWithoutExt}.webp`);
    if (!config.skipExisting || !fs.existsSync(webpOutputPath)) {
      await sharp(config.profileImage)
        .webp({ quality: config.quality.webp })
        .toFile(webpOutputPath);
      console.log(`Version WebP originale créée: ${webpOutputPath}`);
    }
  } catch (error) {
    console.error(`Erreur lors de l'optimisation de l'image de profil:`, error);
  }
}

// Fonction principale
async function main() {
  console.log('Démarrage de l\'optimisation de l\'image de profil...');
  await optimizeProfileImage();
  console.log('Optimisation de l\'image de profil terminée!');
}

// Exécuter le script
main().catch(console.error);
