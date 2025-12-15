// CONFIGURATION: Add your image filenames here
// Make sure these files exist in your 'images' folder
const backgroundImages = [
    'hero-bg-1.jpg',
    'hero-bg-2.jpg',
    'hero-bg-3.jpg'
];

const heroSection = document.querySelector('.hero');
let currentIndex = 0;
const rotationSpeed = 5000; // 5000ms = 5 seconds

function changeBackgroundImage() {
    if (backgroundImages.length === 0) return;
    
    // Set the background image
    const imageUrl = `images/${backgroundImages[currentIndex]}`;
    heroSection.style.backgroundImage = `url('${imageUrl}')`;
    
    // Move to the next image index, loop back to 0 if at end
    currentIndex = (currentIndex + 1) % backgroundImages.length;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Set initial image immediately
    changeBackgroundImage();
    
    // Start the rotation timer
    setInterval(changeBackgroundImage, rotationSpeed);
});