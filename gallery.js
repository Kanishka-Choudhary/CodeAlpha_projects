const galleryImages = document.querySelectorAll('.gallery-image');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');
const lightboxClose = document.querySelector('.lightbox-close');

let currentIndex = 0;

galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        showLightbox();
    });
});

lightboxPrev.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }
    showLightbox();
});

lightboxNext.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }
    showLightbox();
});

lightboxClose.addEventListener('click', () => {
    hideLightbox();
});

function showLightbox() {
    lightbox.style.display = 'block';
    lightboxImage.src = galleryImages[currentIndex].src;
    lightboxCaption.textContent = galleryImages[currentIndex].alt;
}

function hideLightbox() {
    lightbox.style.display = 'none';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hideLightbox();
    } else if (e.key === 'ArrowLeft') {
        lightboxPrev.click();
    } else if (e.key === 'ArrowRight') {
        lightboxNext.click();
    }
});