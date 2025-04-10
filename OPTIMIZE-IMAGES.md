# Guide d'optimisation des images pour Pixel Zone

Ce guide explique comment optimiser les images du site Pixel Zone pour améliorer les performances de chargement, en particulier sur les appareils mobiles.

## Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

## Installation des dépendances

Avant d'exécuter les scripts d'optimisation, vous devez installer les dépendances nécessaires :

```bash
npm install --save-dev sharp imagemin imagemin-mozjpeg imagemin-pngquant imagemin-webp
```

Ou utilisez le script d'installation fourni :

```bash
bash ./scripts/install-optimization-deps.sh
```

## Scripts d'optimisation disponibles

Nous avons créé plusieurs scripts pour optimiser différentes parties du site :

### 1. Optimisation complète

Pour optimiser toutes les images du site en une seule commande :

```bash
npm run optimize-images
```

Ce script exécute tous les scripts d'optimisation dans l'ordre approprié.

### 2. Optimisation de l'image d'arrière-plan

Pour optimiser uniquement l'image d'arrière-plan :

```bash
npm run optimize-background
```

### 3. Optimisation de l'image de profil

Pour optimiser uniquement l'image de profil :

```bash
npm run optimize-profile
```

### 4. Optimisation des images du portfolio

Pour optimiser uniquement les images du portfolio :

```bash
npm run optimize-portfolio
```

## Formats d'images générés

Les scripts génèrent plusieurs formats et tailles d'images :

- **WebP** : Format moderne avec une meilleure compression
- **AVIF** : Format encore plus efficace (si pris en charge)
- **Versions responsives** : Différentes tailles pour différents appareils (640px, 1024px, 1920px)

## Structure des fichiers optimisés

Les images optimisées sont stockées dans les répertoires suivants :

- `/public/img/optimized/` : Images générales optimisées
- `/public/img/masonry-portfolio/optimized/` : Images du portfolio optimisées

## Utilisation des images optimisées dans le code

Pour utiliser les images optimisées, mettez à jour les composants pour utiliser l'élément `<picture>` avec plusieurs sources :

```jsx
<picture>
  <source srcSet="/img/optimized/image.webp" type="image/webp" />
  <source srcSet="/img/optimized/image-640.webp" media="(max-width: 640px)" type="image/webp" />
  <img 
    src="/img/image.jpg" 
    className="img-fluid progressive-image" 
    alt="Description" 
    loading="lazy"
    width="800"
    height="600"
  />
</picture>
```

Ou utilisez le composant `OptimizedImage` :

```jsx
<OptimizedImage
  src="/img/optimized/image-1920.jpg"
  mobileSrc="/img/optimized/image-640.jpg"
  alt="Description"
  width={1920}
  height={1080}
  priority={false}
  loading="lazy"
  objectFit="cover"
  useLqip={true}
  quality={80}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

## Scripts JavaScript pour l'optimisation côté client

Plusieurs scripts JavaScript sont inclus pour optimiser davantage le chargement des images :

- `image-optimizer.js` : Optimise les images pour les appareils mobiles
- `image-preloader.js` : Précharge les images critiques
- `progressive-loading.js` : Implémente le chargement progressif des images

Ces scripts sont automatiquement chargés dans le fichier `_document.js`.

## Conseils pour de meilleures performances

1. Utilisez `loading="lazy"` pour les images non critiques
2. Utilisez `priority={true}` ou `loading="eager"` pour les images critiques
3. Spécifiez toujours les attributs `width` et `height` pour éviter les décalages de mise en page
4. Utilisez la classe `progressive-image` pour le chargement progressif
5. Utilisez des tailles d'images appropriées pour différents appareils

## Dépannage

Si vous rencontrez des problèmes lors de l'exécution des scripts d'optimisation :

1. Vérifiez que vous avez installé toutes les dépendances
2. Assurez-vous que les répertoires d'entrée et de sortie existent
3. Vérifiez les erreurs dans la console

Pour les problèmes d'affichage des images optimisées :

1. Vérifiez que les chemins d'accès sont corrects
2. Assurez-vous que les fichiers existent dans les répertoires spécifiés
3. Vérifiez la console du navigateur pour les erreurs
