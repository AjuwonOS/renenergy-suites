const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const lightbox = document.querySelector('#lightbox');
const lightboxImages = document.querySelector('#lightboxImages');
const closeLightbox = () => {
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};
const galleries = {
  street: ['assets/unsplash_BE9-swZtUa8.png', 'assets/unsplash_QYVarY4t49o.png'],
  living: ['assets/pexels-memory-lane-2157293172-35829896 1.png', 'assets/unsplash_1voJQ66DIDM.png'],
  bedroom: ['assets/unsplash_Id2IIl1jOB0.png', 'assets/pexels-memory-lane-2157293172-35829896 1.png'],
  bathroom: ['assets/unsplash_ckdoA-tv9uw.png', 'assets/unsplash_1voJQ66DIDM.png'],
  kitchen: ['assets/unsplash_1voJQ66DIDM.png', 'assets/unsplash_ckdoA-tv9uw.png']
};
document.querySelectorAll('[data-gallery]').forEach(button => button.addEventListener('click', () => {
  lightboxImages.innerHTML = '';
  (galleries[button.dataset.gallery] || []).forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Related apartment image';
    lightboxImages.appendChild(img);
  });
  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}));
document.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

