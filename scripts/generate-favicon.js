import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Create a canvas with a green truck icon
const createTruckIcon = () => {
  const width = 32;
  const height = 32;
  
  // Create a canvas with a green background
  return sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 16, g: 185, b: 129, alpha: 1 },
    },
  })
  .png()
  .toBuffer();
};

// Generate and save the favicon
createTruckIcon()
  .then(buffer => {
    fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), buffer);
    console.log('Favicon generated successfully!');
  })
  .catch(err => {
    console.error('Error generating favicon:', err);
  });
