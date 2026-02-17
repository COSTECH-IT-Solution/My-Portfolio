const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    // This adds/removes a class to show the menu on mobile
    navLinks.classList.toggle('active');
    
    // Quick style fix for mobile toggle
    if(navLinks.classList.contains('active')) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '60px';
        navLinks.style.width = '100%';
        navLinks.style.background = '#0f172a';
    } else {
        navLinks.style.display = 'none';
    }
});