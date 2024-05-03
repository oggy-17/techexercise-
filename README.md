## Description About This Short Tech Exercise:

This short exercise has been completed using three languages: HTML, CSS, and JavaScript.

Let's break down the details.

### 1- HTML:

- The HTML file contains a simple structure for a badge uploader web page.
- It includes an input element of type file with the ID "badgeInput" and a label associated with it for selecting a badge image.
- The selected badge image is displayed in a div with the ID "previewBadge".
- Below the preview, there is a paragraph element with the ID "successMessage" for displaying success messages.

### 2- CSS:

- The CSS file styles the elements in the HTML file to provide a visually appealing layout.
- It sets the body font-family, background color, and margin.
- The container class defines styles for the main container holding the badge uploader elements.
- Styles are defined for the badge input, label, preview badge, and success message.

### 3- JavaScript:

- The JavaScript file contains functionality for verifying the badge image uploaded by the user.
- It listens for the change event on the badge input element.
- When a file is selected, it reads the file using FileReader and converts it to a PNG format using HTML5 canvas.
- It then processes the PNG image to ensure it meets certain conditions:
    - Image dimensions are 512x512 pixels.
    - Only non-transparent pixels are within a circle.
    - The image contains any of the specified happy colors that are Yellow, Orange, Pink, Purple, Red, Peach, Lilac, or Periwinkle.
- Based on the verification results, appropriate success or error messages are displayed.

---

### IMPORTANT:

1. You can download the image that contains the happy color, in the PNG format, has 512x512 pixels, and non-transparent pixels are within the circle from [here](https://ibb.co/SNLfYbM) to test the functionalities.

2. You can download the image that does not have the happy color but fulfills every other condition from [here](https://ibb.co/vm1RxJb) to test the functionalities.

---

### SCREENSHOTS:

1. When it fulfills all the conditions: [View](https://ibb.co/0fJ1k2v)

2. When it doesn't fulfill the conditions: [View](https://ibb.co/kQ39sfT)

