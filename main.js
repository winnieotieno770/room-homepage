const heroImages = [
    {
        backgroundImage: "url('../images/desktop-image-hero-1.jpg')",
        heading: "Discover innovative ways to decorate",
        description: "We provide quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        backgroundImage: "url('../images/desktop-image-hero-2.jpg')",
        heading: "We are available all across the globe",
        description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    { 
        backgroundImage: "url('../images/desktop-image-hero-3.jpg')",
        heading: "Manufactured with the best materials",
        description: "Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
];

let currentIndex = 0;

function changeHeroContent() {
    const heroSection = document.getElementById('hero-section');
    const headingElement = document.getElementById('heading');
    const descriptionElement = document.getElementById('description');
    
    if (!heroSection || !headingElement || !descriptionElement) {
        console.error('One or more elements are missing in the DOM.');
        return;
    }

    console.log('Current index:', currentIndex);
    console.log('Updating hero section with:', heroImages[currentIndex]);

   
    heroSection.style.backgroundImage = heroImages[currentIndex].backgroundImage;
    headingElement.textContent = heroImages[currentIndex].heading;
    descriptionElement.textContent = heroImages[currentIndex].description;

    // Update index for next change
    currentIndex = (currentIndex + 1) % heroImages.length;
}

// Change content on page load
window.onload = changeHeroContent;

// Optional: Change content periodically
setInterval(changeHeroContent, 5000); // Change every 5 seconds
