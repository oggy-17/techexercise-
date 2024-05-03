
# Tech Exercise for Software Engineer Intern Position

## Description About This Short Tech Exercise:

This short exercise has been completed using three languages that are HTML, CSS, and JavaScript.

Let me break down the details.

### 1- HTML:

a) The HTML file contains a simple structure for a badge uploader web page.
b) It includes an input element of type file with the ID "badgeInput" and a label associated with it for selecting a badge image.
c) The selected badge image is displayed in a div with the ID "previewBadge".
d) Below the preview, there is a paragraph element with the ID "successMessage" for displaying success messages.

### 2- CSS:

a) The CSS file styles the elements in the HTML file to provide a visually appealing layout.
b) It sets the body font-family, background color, and margin.
c) The container class defines styles for the main container holding the badge uploader elements.
d) Styles are defined for the badge input, label, preview badge, and success message.

### 3- JavaScript:

a) The JavaScript file contains functionality for verifying the badge image uploaded by the user.
b) It listens for the change event on the badge input element.
c) When a file is selected, it reads the file using FileReader and converts it to a PNG format using HTML5 canvas.
d) It then processes the PNG image to ensure it meets certain conditions:
    
    i) Image dimensions are 512x512 pixels.
    ii) Only non-transparent pixels are within a circle.
    iii) The image contains any of the specified happy colors that are Yellow, Orange, Pink, Purple, Red, Peach, Lilac, or Periwinkle.

e) Based on the verification results, appropriate success or error messages are displayed.

                                    
                                        ######## IMPORTANT #########

1- You can download the image that contains the happy color, in the png format, have the 512x512 pixels, and non-transparent pixels are within the circle from here ( https://ibb.co/SNLfYbM  ) to test the functionalities.

2- You can download the that does not have the happy color, but fulfil every other condition from here ( https://ibb.co/vm1RxJb  ) to test the functionalities.
