// Script pour optimiser les images WebP
const fs = require('fs');
const path = require('path');
const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

// Configuration
const config = {
  inputDir: path.join(__dirname, '../public/img'),
  outputDir: path.join(__dirname, '../public/img'),
  quality: 75,
  skipExisting: true
};

// Fonction pour optimiser les images WebP dans un répertoire
async function optimizeWebpInDirectory(directory) {
  try {
    const items = fs.readdirSync(directory);
    
    for (const item of items) {
      const fullPath = path.join(directory, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Traiter récursivement les sous-répertoires
        await optimizeWebpInDirectory(fullPath);
      } else if (item.endsWith('.webp')) {
        // Optimiser les fichiers WebP
        await optimizeWebp(fullPath);
      }
    }
  } catch (error) {
    console.error(`Erreur lors du traitement du répertoire ${directory}:`, error);
  }
}

// Fonction pour optimiser un fichier WebP
async function optimizeWebp(filePath) {
  try {
    const directory = path.dirname(filePath);
    const filename = path.basename(filePath);
    
    // Créer un fichier temporaire pour éviter d'écraser le fichier d'origine
    const tempOutputPath = path.join(directory, `temp_${filename}`);
    
    // Optimiser l'image WebP
    await imagemin([filePath], {
      destination: directory,
      plugins: [
        imageminWebp({
          quality: config.quality,
          method: 6, // Méthode de compression (0-6), 6 étant la plus lente mais la plus efficace
          lossless: false
        })
      ]
    });
    
    // Renommer le fichier optimisé
    if (fs.existsSync(tempOutputPath)) {
      fs.renameSync(tempOutputPath, filePath);
      console.log(`WebP optimisé: ${filePath}`);
    }
  } catch (error) {
    console.error(`Erreur lors de l'optimisation de ${filePath}:`, error);
  }
}

// Fonction principale
async function main() {
  console.log('Démarrage de l\'optimisation des images WebP...');
  await optimizeWebpInDirectory(config.inputDir);
  console.log('Optimisation des images WebP terminée!');
}

// Exécuter le script
main().catch(console.error);
