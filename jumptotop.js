// ========================================
// JUMP TO TOP BUTTON - BOTTOM LEFT
// ========================================

// Create the button element
const jumpToTopBtn = document.createElement('button');
jumpToTopBtn.className = 'jump-to-top-btn';
jumpToTopBtn.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 19V5M5 12l7-7 7 7"/>
    </svg>
`;
document.body.appendChild(jumpToTopBtn);

// Add styles for the button
const jumpToTopStyle = document.createElement('style');
jumpToTopStyle.textContent = `
    
`;
document.head.appendChild(jumpToTopStyle);

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        jumpToTopBtn.classList.add('visible');
    } else {
        jumpToTopBtn.classList.remove('visible');
    }
});

// Smooth scroll to top when clicked
jumpToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Optional: Add a little shake animation on click
    jumpToTopBtn.style.animation = 'shake 0.5s';
    setTimeout(() => {
        jumpToTopBtn.style.animation = '';
    }, 500);
});

// Add shake animation
const shakeAnimation = document.createElement('style');
shakeAnimation.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(shakeAnimation);

// Optional: Add keyboard shortcut (Press 'T' to go to top)
document.addEventListener('keydown', (e) => {
    if (e.key === 't' || e.key === 'T') {
        if (window.scrollY > 100) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
});
