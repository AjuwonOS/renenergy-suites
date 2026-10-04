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
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPN9tetsOrUxnDG-rWKMFE3oG1BvR2AKUUCxY-Npn82X7OlTlhcFgtBNSmEc6dFuWBmBbIf5ogV05MBLrwjAno9N_oLe1h82G_y7uLSjaI2514d6w15IGTfs46C-niKUuUHnK6Sxc0Cg4DNl4BVFEvt=w949-h695-s-no-gm?authuser=0",
    caption: "GATED SECURITY & COMPOUND",
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczONU3_lCCr7ld4Nlke6Y_EMkKbiGxN_b8d-HKyTjO9EI-1vBdM9bbBo4X9qfTpJyryUW15BE9WOctph9QmXuC9nD3VcsyYcwyDBL5X2hPk0DoanSOUU9K0RHw03BcV-L3eCwWQcCDpvqbicfDHIzpJV=w638-h915-s-no-gm?authuser=0",
    caption: "COMPLETE FULLY FURNISHED LIVING ROOM",
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOy_i7GjSnC75U2t5S0HzDlrycMTajPmwMxyMAfYbMdrosX4zsIcs6GzMDFawJl6Vx-Y7Lt61apOWWiq2SZzU7uOYF_A8kC2-hq-m5Y6iK_fgsdEpo0dBRc8bh1Ah0ixDB7EeAEw2-ZArvtOV1Iuc2F=w949-h634-s-no-gm?authuser=0",
    caption: "KING-SIZE BED WITH PRIVATE BED CURTAINS",
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPfhNPl7IgnQADVf2jEgNkfHPBA-6KIGUXdZwzT0c9spTVGKV4A21XC6r3TElf-o9ai2HWi5X76KuqpO1rnKFT6TnShHVALnx8bZR0wYk9Eh9_bNF9z_kdfMCIgYz190I3lNmE6GYIDeEyMBKcIMP4x=w611-h915-s-no-gm?authuser=0",
    caption: "MODERN TOILET & BATHROOM",
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOP62I6vqCge4upxZiCBkpZrbjgSg9mTWaFTWaeXe-pz0mUtD_69QK81sRaaxyhrLq4zwW-xkzL5jDw5vBtCiz8UyGBf_i633m-t9XvrNaFNK6_24qKmUCnCQzNuqK0Dcvj5LjlJJgCmR7dlyzuEEFa=w949-h644-s-no-gm?authuser=0",
    caption: "FULLY FUNCTIONAL KITCHEN",
  },
  {
    src: "../assets/unsplash_QYVarY4t49o.png",
    caption: "THE APARTMENT COMPLEX",
  },
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
