#!/bin/bash

# Script pour exécuter toutes les optimisations d'images

echo "Démarrage de l'optimisation complète des images..."

# Installer les dépendances nécessaires
echo "Installation des dépendances..."
bash ./scripts/install-optimization-deps.sh

# Optimiser l'image de fond
echo "Optimisation de l'image de fond..."
node ./scripts/optimize-background-images.js

# Optimiser l'image de profil
echo "Optimisation de l'image de profil..."
node ./scripts/optimize-profile-image.js

# Optimiser les images du portfolio
echo "Optimisation des images du portfolio..."
node ./scripts/optimize-portfolio-images.js

# Optimiser toutes les autres images
echo "Optimisation des autres images..."
node ./scripts/compress-images.js

# Optimiser davantage les images WebP
echo "Optimisation supplémentaire des images WebP..."
node ./scripts/optimize-webp.js

echo "Optimisation des images terminée!"
echo "Vous pouvez maintenant redémarrer le serveur de développement pour voir les améliorations."
