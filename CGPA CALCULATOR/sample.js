// Array of image URLs (replace these with your actual image paths)
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
    'image9.jpg',
    'image10.jpg'
];

let currentIndex = 0;

// Function to change the background image
function changeBackgroundImage() {
    document.body.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
}

// Change the background every 5 seconds (5000 ms)
setInterval(changeBackgroundImage, 5000);

// Set the first image on page load
changeBackgroundImage();
