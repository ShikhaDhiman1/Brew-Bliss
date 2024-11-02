document.addEventListener('DOMContentLoaded', () => {
    const specialButton = document.querySelector('button');
    const specialText = document.getElementById('special');

    specialButton.addEventListener('click', () => {
        // Add a subtle fade-in effect for the special text
        specialText.style.opacity = 0;
        specialText.textContent = "Today's Special: Caramel Macchiato with a freshly baked croissant!";
        specialText.style.transition = 'opacity 1s';
        specialText.style.opacity = 1;
    });

    // Add smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
