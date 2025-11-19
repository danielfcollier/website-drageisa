import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, '../src/assets');
const outputDir = path.join(__dirname, '../public/optimized');

// Image size configurations
const sizes = {
  mobile: { width: 768, quality: 80 },
  tablet: { width: 1024, quality: 85 },
  desktop: { width: 1920, quality: 90 }
};

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(inputPath, filename) {
  const ext = path.extname(filename).toLowerCase();
  const baseName = path.basename(filename, ext);
  
  // Skip if not an image
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    return;
  }

  console.log(`Optimizing ${filename}...`);

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Generate optimized versions for each size
    for (const [sizeName, config] of Object.entries(sizes)) {
      // Only resize if image is larger than target
      const shouldResize = metadata.width > config.width;
      
      // WebP version
      await image
        .clone()
        .resize(shouldResize ? config.width : null, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: config.quality })
        .toFile(path.join(outputDir, `${baseName}-${sizeName}.webp`));

      // Fallback JPEG version
      await image
        .clone()
        .resize(shouldResize ? config.width : null, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({ quality: config.quality })
        .toFile(path.join(outputDir, `${baseName}-${sizeName}.jpg`));
    }

    console.log(`✓ Optimized ${filename}`);
  } catch (error) {
    console.error(`Error optimizing ${filename}:`, error);
  }
}

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      await optimizeImage(fullPath, file);
    }
  }
}

console.log('Starting image optimization...');
processDirectory(srcDir).then(() => {
  console.log('Image optimization complete!');
});
