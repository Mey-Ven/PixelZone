#!/bin/bash

# Script pour installer les dépendances nécessaires à l'optimisation des images

echo "Installation des dépendances pour l'optimisation des images..."

# Installer sharp pour le traitement des images
npm install --save-dev sharp

# Installer imagemin et ses plugins pour une compression supplémentaire
npm install --save-dev imagemin imagemin-mozjpeg imagemin-pngquant imagemin-webp

echo "Dépendances installées avec succès!"
