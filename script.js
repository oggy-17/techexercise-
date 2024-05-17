document.addEventListener("DOMContentLoaded", function() {
    const badgeInput = document.getElementById('badgeInput');
    const preview = document.getElementById('previewBadge');
    const successMessage = document.getElementById('successMessage');

    badgeInput.addEventListener('change', verifyBadge);

    function verifyBadge() {
        clearPreviousContent();
        const input = this;
        if (!input.files || !input.files[0]) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            const image = new Image();
            image.onload = function() {
                if (image.width !== 512 || image.height !== 512) {
                    alert('Please upload an image with dimensions 512x512.');
                    return;
                }

                const canvas = createCanvas(image.width, image.height);
                const context = canvas.getContext('2d');
                context.drawImage(image, 0, 0);

                const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
                const happyColors = new Set([
                    '255,255,0',    // Yellow
                    '255,165,0',    // Orange
                    '255,192,203',  // Pink
                    '128,0,128',    // Purple
                    '255,0,0',      // Red
                    '255,218,185',  // Peach
                    '200,162,200',  // Lilac
                    '204,204,255'   // Periwinkle
                ]);

                let isCircle = true;
                let hasHappyColors = false;
                const radiusSquared = 256 ** 2;
                
                for (let i = 0; i < imageData.length; i += 4) {
                    const alpha = imageData[i + 3];
                    const rgb = `${imageData[i]},${imageData[i + 1]},${imageData[i + 2]}`;
                    const x = (i / 4) % canvas.width;
                    const y = Math.floor((i / 4) / canvas.width);
                    const distanceSquared = (x - 256) ** 2 + (y - 256) ** 2;
                    
                    if (distanceSquared > radiusSquared && alpha !== 0) {
                        isCircle = false;
                        break;
                    }
                    if (!hasHappyColors && happyColors.has(rgb)) {
                        hasHappyColors = true;
                    }
                }
                
                if (isCircle && hasHappyColors) {
                    preview.appendChild(image);
                    successMessage.textContent = 'Congratulations! The specified image is in png format, 512x512 pixels, Non-Transparent Pixels are within the circle, and gives the happy feeling.';
                    successMessage.style.display = 'block';
                } else {
                    if (!isCircle) {
                        alert('Please upload an image where only non-transparent pixels are within a circle.');
                    } else if (!hasHappyColors) {
                        alert('Please upload an image with happy, vibrant colors such as Yellow, Orange, Pink, Purple, Red, Peach, Lilac, or Periwinkles.');
                    }
                }
            };
            image.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }

    function clearPreviousContent() {
        preview.innerHTML = '';
        successMessage.textContent = '';
        successMessage.style.display = 'none';
    }

    function createCanvas(width, height) {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        return canvas;
    }
});
