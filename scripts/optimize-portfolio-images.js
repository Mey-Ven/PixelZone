// Script pour optimiser spécifiquement les images du portfolio
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const config = {
  inputDir: path.join(__dirname, '../public/img/masonry-portfolio'),
  outputDir: path.join(__dirname, '../public/img/masonry-portfolio/optimized'),
  quality: {
    jpeg: 75,
    png: 75,
    webp: 70
  },
  sizes: [320, 640], // Tailles responsives pour mobile
  skipExisting: true
};

// Créer le répertoire de sortie s'il n'existe pas
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// Fonction pour traiter récursivement les répertoires
async function processDirectory(directory) {
  try {
    const items = fs.readdirSync(directory);
    
    for (const item of items) {
      const fullPath = path.join(directory, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Ignorer le répertoire optimized pour éviter les doublons
        if (!fullPath.includes('optimized')) {
          // Créer le répertoire correspondant dans le répertoire de sortie
          const relativePath = path.relative(config.inputDir, fullPath);
          const outputSubDir = path.join(config.outputDir, relativePath);
          
          if (!fs.existsSync(outputSubDir)) {
            fs.mkdirSync(outputSubDir, { recursive: true });
          }
          
          await processDirectory(fullPath);
        }
      } else {
        // Traiter uniquement les images
        const ext = path.extname(fullPath).toLowerCase();
        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
          await optimizeImage(fullPath);
        }
      }
    }
  } catch (error) {
    console.error(`Erreur lors du traitement du répertoire ${directory}:`, error);
  }
}

// Fonction pour optimiser une image
async function optimizeImage(filePath) {
  try {
    const filename = path.basename(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const nameWithoutExt = path.basename(filename, ext);
    
    // Créer un sous-répertoire dans optimized qui reflète la structure du répertoire source
    const relativePath = path.relative(config.inputDir, path.dirname(filePath));
    const outputSubDir = path.join(config.outputDir, relativePath);
    
    if (!fs.existsSync(outputSubDir)) {
      fs.mkdirSync(outputSubDir, { recursive: true });
    }
    
    // Obtenir les dimensions de l'image
    const metadata = await sharp(filePath).metadata();
    
    // Créer des versions optimisées pour différentes tailles
    for (const size of config.sizes) {
      // Ne pas redimensionner si l'image est plus petite que la taille cible
      if (metadata.width <= size) continue;
      
      const outputFilename = `${nameWithoutExt}-${size}${ext}`;
      const outputPath = path.join(outputSubDir, outputFilename);
      
      // Vérifier si le fichier existe déjà
      if (config.skipExisting && fs.existsSync(outputPath)) {
        console.log(`Fichier existant, ignoré: ${outputPath}`);
        continue;
      }
      
      // Redimensionner et optimiser l'image
      let sharpInstance = sharp(filePath).resize(size);
      
      if (ext === '.jpg' || ext === '.jpeg') {
        sharpInstance = sharpInstance.jpeg({ quality: config.quality.jpeg });
      } else if (ext === '.png') {
        sharpInstance = sharpInstance.png({ quality: config.quality.png });
      }
      
      await sharpInstance.toFile(outputPath);
      console.log(`Image optimisée créée: ${outputPath}`);
      
      // Créer également une version WebP
      const webpOutputPath = path.join(outputSubDir, `${nameWithoutExt}-${size}.webp`);
      if (!config.skipExisting || !fs.existsSync(webpOutputPath)) {
        await sharp(filePath)
          .resize(size)
          .webp({ quality: config.quality.webp })
          .toFile(webpOutputPath);
        console.log(`Version WebP créée: ${webpOutputPath}`);
      }
    }
    
    // Créer une version WebP de l'image originale
    const webpOutputPath = path.join(outputSubDir, `${nameWithoutExt}.webp`);
    if (!config.skipExisting || !fs.existsSync(webpOutputPath)) {
      await sharp(filePath)
        .webp({ quality: config.quality.webp })
        .toFile(webpOutputPath);
      console.log(`Version WebP originale créée: ${webpOutputPath}`);
    }
  } catch (error) {
    console.error(`Erreur lors de l'optimisation de ${filePath}:`, error);
  }
}

// Fonction principale
async function main() {
  console.log('Démarrage de l\'optimisation des images du portfolio...');
  await processDirectory(config.inputDir);
  console.log('Optimisation des images du portfolio terminée!');
}

// Exécuter le script
main().catch(console.error);
