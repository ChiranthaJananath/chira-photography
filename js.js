document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lightbox Functionality ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeLightbox = document.querySelector('.close-lightbox');
    const photoCards = document.querySelectorAll('.photo-card');

    photoCards.forEach(card => {
        card.addEventListener('click', () => {
            const imgTarget = card.querySelector('img');
            const infoTarget = card.querySelector('.photo-info').innerHTML;
            
            lightboxImg.src = imgTarget.src;
            lightboxImg.alt = imgTarget.alt;
            lightboxCaption.innerHTML = infoTarget;
            
            lightbox.classList.add('active');
        });
    });

    closeLightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
        if(e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    // --- Dynamic Portfolio Filtering ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active indicator from other tabs
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const criteria = button.getAttribute('data-filter');

            photoCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (criteria === 'all' || category === criteria) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});