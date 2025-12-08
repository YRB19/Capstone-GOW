// ========================================
// 2. NAVBAR BACKGROUND ON SCROLL
// ========================================
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(10, 10, 10, 0.98)';
        nav.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
        nav.style.boxShadow = 'none';
    }
});

// ========================================
// 10. GAME CARD FAVORITE TOGGLE
// ========================================
const gameCards = document.querySelectorAll('.game-card');
gameCards.forEach(card => {
    // Create favorite button
    const favoriteBtn = document.createElement('button');
    favoriteBtn.className = 'favorite-btn';
    favoriteBtn.innerHTML = '♡';
    
    const gameInfo = card.querySelector('.game-info');
    gameInfo.style.position = 'relative';
    gameInfo.appendChild(favoriteBtn);
    
    favoriteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        favoriteBtn.classList.toggle('favorited');
        
        if (favoriteBtn.classList.contains('favorited')) {
            favoriteBtn.innerHTML = '♥';
            favoriteBtn.style.color = '#ff4444';
        } else {
            favoriteBtn.innerHTML = '♡';
            favoriteBtn.style.color = '#fff';
        }
    });
});
