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
  street: [
    "https://lh3.googleusercontent.com/pw/AP1GczP6Q7ZtVfGq1WjWl239CZq5tjz9jlmhqW2vRZzS77ZKJep2CtBKjc9MXCRTT7kskZR38GHftKYR3qjwP8KENbYxNDgs2wNcuYAzdT38f_IjpKJzGDB5A8Usl3VZxsVHKk21yhNUOhZs4gH9d7-1IX_u=w1218-h915-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPN9tetsOrUxnDG-rWKMFE3oG1BvR2AKUUCxY-Npn82X7OlTlhcFgtBNSmEc6dFuWBmBbIf5ogV05MBLrwjAno9N_oLe1h82G_y7uLSjaI2514d6w15IGTfs46C-niKUuUHnK6Sxc0Cg4DNl4BVFEvt=w1249-h915-s-no-gm?authuser=0",
  ],
  living: [
    "https://lh3.googleusercontent.com/pw/AP1GczONU3_lCCr7ld4Nlke6Y_EMkKbiGxN_b8d-HKyTjO9EI-1vBdM9bbBo4X9qfTpJyryUW15BE9WOctph9QmXuC9nD3VcsyYcwyDBL5X2hPk0DoanSOUU9K0RHw03BcV-L3eCwWQcCDpvqbicfDHIzpJV=w638-h915-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMs2x_mMjTYM033N2Xx2zLstowCHM-3dmTmL4HruhQ--aJ45lmyov-2QqU3ZY0kTlSfmgcqQRvoZqeT1xNYq3b1tTF4jfVggK210jB0eGV6oMT4Pk1JVrzL_mw9HsiMrUYMyefUJXNDtqr3cKpiW_bJ=w616-h915-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNsd7RwuWrsQSVQiCbhbUWmdk5qWTTviTMm9luIUvT7jkp8AMtQKeUX-tSErtKP8eCQPTxPD7vc0eelYRFleDR5uhHWNJYzMBuFjdyKemx7YAFL0SYZPsjJJ6bEhQ1bkOpjsZsEeII0Dq-4fI_1QPT1=w670-h915-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMTwlRSjpmbWkWjQX2fFGnM-QoVQBdojouoARx2-yDmDjGoLugBcC9z0kdRAQoqLsD7g4qdRTYZHX9XyCT52oDOJfctMEc_K3XSAOmsWhDnu-nZepGv4s8r7kz6q4A31Gh85JJzjBYdgukV7mCFbJvF=w611-h915-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMUlYSoi03vFbIESBvHWib2iV9wguwSpEVYvNCRBnXnKu3cPdphXVBpoqbiBK2qx6hp05rr69i3eR42jvZmlUJFH9OebmCVV_Q4amDXC2eY7BCVsB5v1QywIS4D0NGTPci2VOsc8PTUcBomnrAHdCgc=w683-h915-s-no-gm?authuser=0",
  ],
  bedroom: [
    "https://lh3.googleusercontent.com/pw/AP1GczOy_i7GjSnC75U2t5S0HzDlrycMTajPmwMxyMAfYbMdrosX4zsIcs6GzMDFawJl6Vx-Y7Lt61apOWWiq2SZzU7uOYF_A8kC2-hq-m5Y6iK_fgsdEpo0dBRc8bh1Ah0ixDB7EeAEw2-ZArvtOV1Iuc2F=w949-h634-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczM53vaAUbSoSonj96rRvgAfFA_NFU_vHCGM845fa2l1MkwVkJL4a99PMTJZPLWlDcWti9GvjYXz8xvyBnTbj_k3xNFMrwiStrX6U65sriq8TFwYFiGkotUeqYR-BRve88vnaxhn2qCXr6ISZ8awOmdr=w611-h915-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMpp8e8MAR3Jd6pxP25YrQrWS5AXkBQeogotjkKgfvPUQ1Gf-jNjOpM2_BkXS_L764k9GLRFlhfbAgJmWBCSsrugWaPQ_fUfP5ZRnbeAXpeGSRjrp6LUoqPSMgxnZ_CCRviy5xDLCf571nfxtKs_duZ=w611-h915-s-no-gm?authuser=0",
  ],
  bathroom: [
    "https://lh3.googleusercontent.com/pw/AP1GczPfhNPl7IgnQADVf2jEgNkfHPBA-6KIGUXdZwzT0c9spTVGKV4A21XC6r3TElf-o9ai2HWi5X76KuqpO1rnKFT6TnShHVALnx8bZR0wYk9Eh9_bNF9z_kdfMCIgYz190I3lNmE6GYIDeEyMBKcIMP4x=w611-h915-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMLNY3d3j0CkBLAy6CxV5mccN-1TObJB9M4oZ3ZKMKn_ZMDiGD4AGHBXxYec19rBR5KC660f3tno-GmzQe6hcJbbWCLRMF48-P3qNtEPN89O7-Rgu0X3h7GkqU-fzay7CNI3RKOxHtcwtY81-svDzgp=w611-h915-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNu7vlCWsj0S1YIVfZ6ad2h2Qpulmmmn-Z7N7Cje3f1KAi3YqbTaZpChOkKRDwfKFO1qRlOJpuwHMs7140YdPFZarUcWTIx1i6Mctm_TZZyt8TXD-D_jM6Ljvu798nw85X9DhLdsdrCHHb21I8kPHyC=w665-h915-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPfhNPl7IgnQADVf2jEgNkfHPBA-6KIGUXdZwzT0c9spTVGKV4A21XC6r3TElf-o9ai2HWi5X76KuqpO1rnKFT6TnShHVALnx8bZR0wYk9Eh9_bNF9z_kdfMCIgYz190I3lNmE6GYIDeEyMBKcIMP4x=w611-h915-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOVurMmmTdd1RF1ho2Xb2sAoOUanFBUHCJfpx7_xbHRp8gKRNjp8c3756B2j-WDWorbND1xrHIfunNd5dQt3foh3z55zfmwJy6nh0tsAdhBWlF1ibcIkUc7bnTRXaozzydjb2m2lZE8qW6QzePmOv64=w719-h915-s-no-gm?authuser=0",
  ],
  kitchen: [
    "https://lh3.googleusercontent.com/pw/AP1GczNbNGEPWBRyUz9Je3h5YsqumtLAPfIZVRD288kyrq59ziEiy4avCIREc27BO5Gye2JUae3ds4ecgW9J6It3e1kFSbThuYFxKsdOc7bkF5D_MtOQkZyp-9f4fvopt50rYwcH5mTs2hlINuhQ3gmNWr-D=w611-h915-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOP62I6vqCge4upxZiCBkpZrbjgSg9mTWaFTWaeXe-pz0mUtD_69QK81sRaaxyhrLq4zwW-xkzL5jDw5vBtCiz8UyGBf_i633m-t9XvrNaFNK6_24qKmUCnCQzNuqK0Dcvj5LjlJJgCmR7dlyzuEEFa=w949-h644-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOKaip1psm7idDMHiPrrYzfUbI_B3jVn5xPxB62-bKOIbHFuwwduewSmcQMEtcn4euaxURrQ1Y4T7kI1bOUr6MpqP7ykXs9PgIe0J-3oMBNRzJmWgysC__IrIsGZpFD8vjkj_rszaqyJupQqZYB22Ff=w949-h644-s-no-gm?authuser=0",
  ],
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

