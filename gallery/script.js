const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  console.log("Hello")
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  menuToggle.textContent = open ? '×' : '☰';
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
    menuToggle.textContent = '☰';
  });
});

const gallery = [
  { src: '../assets/unsplash_BE9-swZtUa8.png', caption: 'GATED SECURITY & COMPOUND' },
  { src: '../assets/pexels-memory-lane-2157293172-35829896 1.png', caption: 'COMPLETE FULLY FURNISHED LIVING ROOM' },
  { src: '../assets/unsplash_Id2IIl1jOB0.png', caption: 'KING-SIZE BED WITH PRIVATE BED CURTAINS' },
  { src: '../assets/unsplash_ckdoA-tv9uw.png', caption: 'MODERN TOILET & BATHROOM' },
  { src: '../assets/unsplash_1voJQ66DIDM.png', caption: 'FULLY FUNCTIONAL KITCHEN' },
  { src: '../assets/unsplash_QYVarY4t49o.png', caption: 'THE APARTMENT COMPLEX' }
];

const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const lightboxCaption = document.querySelector('#lightbox-caption');
const closeButton = document.querySelector('.lightbox-close');
const previousButton = document.querySelector('.lightbox-prev');
const nextButton = document.querySelector('.lightbox-next');

let currentImage = 0;

function showImage(index) {
  currentImage = (index + gallery.length) % gallery.length;
  lightboxImage.src = gallery[currentImage].src;
  lightboxImage.alt = gallery[currentImage].caption;
  lightboxCaption.textContent = gallery[currentImage].caption;
}

function openLightbox(index) {
  showImage(index);
  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.gallery-card').forEach((card) => {
  card.addEventListener('click', () => openLightbox(Number(card.dataset.index)));
});

previousButton.addEventListener('click', () => showImage(currentImage - 1));
nextButton.addEventListener('click', () => showImage(currentImage + 1));
closeButton.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (event) => {
  if (!lightbox.classList.contains('active')) return;
  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowLeft') showImage(currentImage - 1);
  if (event.key === 'ArrowRight') showImage(currentImage + 1);
});
