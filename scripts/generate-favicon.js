const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function generateFavicons() {
  const sizes = [16, 32, 48, 64, 96, 128, 192, 256];
  const inputSvg = path.join(process.cwd(), 'public', 'favicon.svg');
  
  try {
    // Read the SVG file
    const svgBuffer = await fs.readFile(inputSvg);
    
    // Generate different sizes
    for (const size of sizes) {
      await sharp(svgBuffer)
        .resize(size, size)
        .toFile(path.join(process.cwd(), 'public', `favicon-${size}x${size}.png`));
    }
    
    // Generate favicon.ico (16x16 and 32x32)
    await sharp(svgBuffer)
      .resize(32, 32)
      .toFile(path.join(process.cwd(), 'public', 'favicon.ico'));
    
    // Generate apple-touch-icon
    await sharp(svgBuffer)
      .resize(180, 180)
      .toFile(path.join(process.cwd(), 'public', 'apple-touch-icon.png'));
    
    console.log('Favicon generation completed successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons(); 