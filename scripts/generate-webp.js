// Script to generate WebP versions of images
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const config = {
  inputDir: path.join(__dirname, '../public/img'),
  outputDir: path.join(__dirname, '../public/img'),
  quality: 80, // WebP quality (0-100)
  sizes: [320, 640, 1024, 1920], // Responsive sizes for large images
  skipExisting: true, // Skip if WebP already exists
  extensions: ['.jpg', '.jpeg', '.png'], // Extensions to convert
  mobileQuality: 60, // Lower quality for mobile versions
};

// Function to recursively process directories
async function processDirectory(directory) {
  try {
    const items = fs.readdirSync(directory);
    
    for (const item of items) {
      const fullPath = path.join(directory, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Recursively process subdirectories
        await processDirectory(fullPath);
      } else {
        // Process files
        const ext = path.extname(fullPath).toLowerCase();
        if (config.extensions.includes(ext)) {
          await convertToWebP(fullPath);
          
          // For larger images, create responsive versions
          const relativePath = path.relative(config.inputDir, fullPath);
          if (stat.size > 200 * 1024) { // Only for images larger than 200KB
            await createResponsiveVersions(fullPath, relativePath);
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${directory}:`, error);
  }
}

// Function to convert an image to WebP
async function convertToWebP(filePath) {
  try {
    const outputPath = filePath.replace(/\.(jpe?g|png)$/i, '.webp');
    
    // Skip if WebP already exists and skipExisting is true
    if (config.skipExisting && fs.existsSync(outputPath)) {
      console.log(`Skipping existing WebP: ${outputPath}`);
      return;
    }
    
    await sharp(filePath)
      .webp({ quality: config.quality })
      .toFile(outputPath);
    
    console.log(`Created WebP: ${outputPath}`);
  } catch (error) {
    console.error(`Error converting ${filePath} to WebP:`, error);
  }
}

// Function to create responsive versions of an image
async function createResponsiveVersions(filePath, relativePath) {
  try {
    const filename = path.basename(filePath);
    const directory = path.dirname(filePath);
    const nameWithoutExt = path.basename(filename, path.extname(filename));
    
    // Create mobile version (for the smallest size)
    const mobileSize = config.sizes[0];
    const mobileOutputPath = path.join(directory, `${nameWithoutExt}-${mobileSize}.webp`);
    
    // Skip if mobile version already exists and skipExisting is true
    if (!(config.skipExisting && fs.existsSync(mobileOutputPath))) {
      await sharp(filePath)
        .resize(mobileSize)
        .webp({ quality: config.mobileQuality })
        .toFile(mobileOutputPath);
      
      console.log(`Created mobile WebP (${mobileSize}px): ${mobileOutputPath}`);
    }
    
    // Create other responsive versions
    for (const size of config.sizes.slice(1)) {
      const outputPath = path.join(directory, `${nameWithoutExt}-${size}.webp`);
      
      // Skip if this size already exists and skipExisting is true
      if (config.skipExisting && fs.existsSync(outputPath)) {
        console.log(`Skipping existing responsive WebP (${size}px): ${outputPath}`);
        continue;
      }
      
      await sharp(filePath)
        .resize(size)
        .webp({ quality: config.quality })
        .toFile(outputPath);
      
      console.log(`Created responsive WebP (${size}px): ${outputPath}`);
    }
  } catch (error) {
    console.error(`Error creating responsive versions for ${filePath}:`, error);
  }
}

// Main function
async function main() {
  console.log('Starting WebP conversion...');
  await processDirectory(config.inputDir);
  console.log('WebP conversion complete!');
}

// Run the script
main().catch(console.error);
