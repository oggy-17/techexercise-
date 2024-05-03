document.addEventListener("DOMContentLoaded", function() {
  const badgeInput = document.getElementById('badgeInput');
  badgeInput.addEventListener('change', verifyBadge);
});

async function verifyBadge() {
  const input = this;
  const preview = document.getElementById('previewBadge');
  const successMessage = document.getElementById('successMessage');
  while (preview.firstChild) {
      preview.removeChild(preview.firstChild);
  }
  successMessage.textContent = ''; // Clear previous success message
  successMessage.style.display = 'none'; // Hide the success message

  if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = function(e) {
          const img = new Image();
          img.onload = function() {
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');

              canvas.width = img.width;
              canvas.height = img.height;

              ctx.drawImage(img, 0, 0);

              // Convert image to PNG format
              const pngImageData = canvas.toDataURL('image/png');

              // Process the PNG image
              processPNGImage(pngImageData, preview);
          };

          img.src = e.target.result;
      };

      reader.readAsDataURL(input.files[0]);
  }
}

function processPNGImage(pngImageData, preview) {
  const img = new Image();
  img.onload = function() {
      if (this.width === 512 && this.height === 512) {
          const canvas = document.createElement('canvas');
          canvas.width = this.width;
          canvas.height = this.height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);

          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;
          let isCircle = true;
          let hasHappyColors = false;

          const happyColors = [
              [255, 255, 0],    // Yellow
              [255, 165, 0],    // Orange
              [255, 192, 203],  // Pink
              [128, 0, 128],    // Purple
              [255, 0, 0],      // Red
              [255, 218, 185],  // Peach
              [200, 162, 200],  // Lilac
              [204, 204, 255]   // Periwinkle
          ];

          for (let i = 0; i < data.length; i += 4) {
              const alpha = data[i + 3];
              const r = data[i];
              const g = data[i + 1];
              const b = data[i + 2];
              const x = (i / 4) % canvas.width;
              const y = Math.floor((i / 4) / canvas.width);
              const distanceToCenter = Math.sqrt(Math.pow(x - 256, 2) + Math.pow(y - 256, 2));

              // Check if pixel is outside the circle and not transparent
              if (distanceToCenter > 256 && alpha !== 0) {
                  isCircle = false;
                  break;
              }

              // Check if pixel color is happy
              for (let j = 0; j < happyColors.length; j++) {
                  const happyColor = happyColors[j];
                  if (r === happyColor[0] && g === happyColor[1] && b === happyColor[2]) {
                      hasHappyColors = true;
                      break;
                  }
              }

              if (hasHappyColors) {
                  break;
              }
          }

          if (isCircle && hasHappyColors) {
              preview.appendChild(img);
              const successMessage = document.getElementById('successMessage');
              successMessage.textContent = 'Congratulations! The specified image is in png format, 512x512 pixels, Non-Transparent Pixels are within the circle, and gives the happy feeling';
              successMessage.style.display = 'block'; // Display the success message
          } else {
              if (!isCircle) {
                  alert('Please upload an image where only non-transparent pixels are within a circle.');
              } else if (!hasHappyColors) {
                  alert('Please upload an image with happy, vibrant colors such as Yellow, Orange, Pink, Purple, Red, Peach, Lilac, or Periwinkle.');
              } else {
                  alert('Please upload an image with dimensions 512x512.');
              }
          }
      } else {
          alert('Please upload an image with dimensions 512x512.');
      }
  };

  img.src = pngImageData;
}
