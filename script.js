// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing Animation for Header Title
const title = document.querySelector('header h1');
const text = title.textContent;
let index = 0;
title.textContent = '';

function typeEffect() {
    if (index < text.length) {
        title.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();
// Typing Animation for About Text
const aboutText = document.querySelector('#about-text');
const aboutContent = aboutText.textContent;
let aboutIndex = 0;
aboutText.textContent = ''; // Clear content for typing effect

function aboutTypeEffect() {
    if (aboutIndex < aboutContent.length) {
        aboutText.textContent += aboutContent.charAt(aboutIndex);
        aboutIndex++;
        setTimeout(aboutTypeEffect, 100);
    } else {
        aboutText.style.opacity = 1;  // Fade in after typing effect
    }
}
aboutTypeEffect();


// Hover Effect for Project Details
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseover', () => {
        const details = project.querySelector('.project-details');
        details.style.display = 'flex';
    });

    project.addEventListener('mouseout', () => {
        const details = project.querySelector('.project-details');
        details.style.display = 'none';
    });
});

// Contact Form Feedback
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    alert(`Thank you, ${name}! Your message has been sent.`);
});
