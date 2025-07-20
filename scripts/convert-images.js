const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesToConvert = [
  // Profile images (already converted)
  { input: 'public/images/originals/Sidd1.jpg', output: 'public/images/Sidd1.webp' },
  { input: 'public/images/originals/Sidd.jpg', output: 'public/images/Sidd.webp' },
  { input: 'public/images/originals/tarotpal-1.png', output: 'public/images/tarotpal-1.webp' },
  
  // Large images that need conversion
  { input: 'public/images/originals/Image1-noc.png', output: 'public/images/Image1-noc.webp' },
  { input: 'public/images/originals/404\'sinburpintrude.png', output: 'public/images/404-sinburpintrude.webp' },
  { input: 'public/images/originals/NeoVaultCTF1.png', output: 'public/images/NeoVaultCTF1.webp' },
  { input: 'public/images/originals/Pasted image 20250629133914.png', output: 'public/images/nocturnal-screenshot.webp' },
  
  // Write-up images
  { input: 'public/images/writeups/ctfflag.png', output: 'public/images/writeups/ctfflag.webp' },
  { input: 'public/images/writeups/2025-06-28_11-07.png', output: 'public/images/writeups/code-screenshot.webp' },
  { input: 'public/images/writeups/Pasted image 20250629134344.png', output: 'public/images/writeups/nocturnal-screenshot-2.webp' },
  
  // Experience images
  { input: 'public/images/logos/logo-elevenstoic.png', output: 'public/images/logos/logo-elevenstoic.webp' },
  
  // Dog write-up images
  { input: 'public/images/write-up-dog/Dognmapscan.png', output: 'public/images/write-up-dog/Dognmapscan.webp' },
  { input: 'public/images/write-up-dog/DogWebappimg.png', output: 'public/images/write-up-dog/DogWebappimg.webp' },
  { input: 'public/images/write-up-dog/Githubrepocloninggitdumper.png', output: 'public/images/write-up-dog/Githubrepocloninggitdumper.webp' },
  { input: 'public/images/write-up-dog/Revshelldog.png', output: 'public/images/write-up-dog/Revshelldog.webp' },
  { input: 'public/images/write-up-dog/shellgen.png', output: 'public/images/write-up-dog/shellgen.webp' },
  { input: 'public/images/write-up-dog/shellzipexplupload.png', output: 'public/images/write-up-dog/shellzipexplupload.webp' },
  
  // Outbound write-up images
  { input: 'public/images/write-up-outbound/2025-07-16_13-10.png', output: 'public/images/write-up-outbound/2025-07-16_13-10.webp' },
  { input: 'public/images/write-up-outbound/2025-07-16_13-12.png', output: 'public/images/write-up-outbound/2025-07-16_13-12.webp' },
  { input: 'public/images/write-up-outbound/2025-07-16_13-15.png', output: 'public/images/write-up-outbound/2025-07-16_13-15.webp' },
  { input: 'public/images/write-up-outbound/2025-07-16_13-16.png', output: 'public/images/write-up-outbound/2025-07-16_13-16.webp' },
  { input: 'public/images/write-up-outbound/2025-07-16_13-18.png', output: 'public/images/write-up-outbound/2025-07-16_13-18.webp' },
  { input: 'public/images/write-up-outbound/2025-07-16_13-19.png', output: 'public/images/write-up-outbound/2025-07-16_13-19.webp' },
];

async function convertImages() {
  for (const image of imagesToConvert) {
    try {
      // Check if input file exists
      if (!fs.existsSync(image.input)) {
        console.log(`⚠️  Skipping ${image.input} - file not found`);
        continue;
      }
      
      await sharp(image.input)
        .webp({ quality: 80 })
        .toFile(image.output);
      console.log(`✅ Converted ${image.input} to ${image.output}`);
    } catch (error) {
      console.error(`❌ Error converting ${image.input}:`, error.message);
    }
  }
}

convertImages(); 