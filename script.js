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
    "https://lh3.googleusercontent.com/pw/AP1GczMGuHHjdFe72Pm_4o6r4Kn-zK93Goq9xUflHf1mZs8DoFuEmqWPHRUAoTGDYiLRND1Zf14diYnsiYvg1T7NdJxTpJ8pZ-yt9lhAeaf2Azv_A21uFMuMmAR7f6qfPOQJLgqkXMcFoIh4ZGMkJmXYJRU=w1375-h915-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPN9tetsOrUxnDG-rWKMFE3oG1BvR2AKUUCxY-Npn82X7OlTlhcFgtBNSmEc6dFuWBmBbIf5ogV05MBLrwjAno9N_oLe1h82G_y7uLSjaI2514d6w15IGTfs46C-niKUuUHnK6Sxc0Cg4DNl4BVFEvt=w1249-h915-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMEfDfqhfcC-lphSJZGNZI-bEIv09wVKb3w4BtFWWeBseg9jhkMCrSM0zRBlt--ZAZt6WWRpM2i2GZrSVqErmvTlG6VFeA_Ole4q55WdfjAEIg-taAE5jSfvaetK1qQRCITpZFkz26csOJuRSORb7M=w1373-h915-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPZ4cmqDbFbP_2WcWs-8hujrsLYaII5XXRJMl5R3WgBmFfN7LMGFYJcIU3eB2GHJhfZ3b35izq7gNOwnjzCvasWrCJ1rw93_FKwXi11NldF2KGjsJvrYqUFVweeF6yn4_KVP0rANQsoNl9f-acSkiA=w1374-h915-s-no-gm?authuser=0",
  ],
  living: [
    "https://lh3.googleusercontent.com/pw/AP1GczNIufobdwfpSdZKZ8YgCbj_q2b8pQ8E-KRmCACFISI3myqci6WXprBD1dA24XIX30z0NgraGlErEXdCVkcaKje0Buxmra_yvj8qGmbhvRdtjt5LzHG-Oz7Ciuv2umT8E_W1ps--NIcIwuReYRV8COg=w1373-h915-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMrUwZTC3VHLA4K5oH6iux2VGi0qiDu-3pfAAkLW0DuyBIYVzWXe1ZGDuPLouSZ7-cL6CH3CVl_TuK8yCbBAwueMrUoXpAiV9fLIN5sgEH9mxdZDET5IgzQtLZ5ckZq3YzsPL5W44Pp0uzzcyr1j54=w1375-h915-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMwsWpHVvCjhWpIEPEZHOPgjFbY_f4F5kw7svq3cwcWk2OrM_S9969i_tXtVkiKAJrin-9AXvdCsA_Wj5HqdXKSDZIASYlc7slRuzbpTUEtw14-CkEyllVeWIoiVKaVl-EhYyKagwv1n_0FYewPJrU=w1373-h915-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczM5RjJvpNmpHDH7kigDc85WJ5qeQ9lDjWyExaLSwYCTbNwJbXzM8jH5EsEB-jA277uQ1BSFWUqfnkzepix3KPqWXKpHFiB6zIS6ahL1ovqc0EfwW3A61Qybj_jPkUL65enPMwG-wEnf-g9FJzKS79k=w1373-h915-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOj52LkvrEP0t8N2a1RH2pmqvWMXSS8V36l6ikMuw0uYRmTvpvDACSsNBncSdRsnC-wJPQSNen2NVq-noGzSsCSIuyyGXJMhQngPUYx0jvCqtJuUf5LRvKSsyVR2oX9WIxFuekkGa2R-ORd0lhtHBM=w1376-h915-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOFS7VgBXCITLdZ3P6s78tOF0Eq5Lw9CY5Mn2v_HzioLZm4OzNPdFYJgsD4oyhj_t557vPFU2KBCjoWUhEc8E1D60Sb-N9okAxrzz1Ybsl5SF-65YDLpsJfcW3Dpo8X3WsvFKKbADO22Zm-DsIeJvA=w610-h915-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPgXQ5nc2rT7eHqZddkPJEauqIpmK2q-Ilu2Z-BLXLiBG9CydNxaDCRiuJaEZL8JBKDaCruDWXZ6JiqJ87Y-FDp9BppHUF3Z8YF_cAKQmyN8_iLp2xAe4leCewgYXSG--eMfS1pm7VHWhBM21IhZh0=w609-h915-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPeCzISYKZS-FvVBi-JE6OSDaD1KQd0PQPhKpv8PW8a4WhX3x75iNg-vjzJiDktM3pOuWnZXSu7dU63df2ltLi6KdjT364Ke-9u7liNkKVTwbP-G45suQhVp-mYTjFKSKGEbs3_PR72ahBU45JNC2M=w1373-h915-s-no-gm?authuser=0",
  ],
  bedroom: [
    "https://lh3.googleusercontent.com/pw/AP1GczNq7RJNgiXDLfpgIPj2swt7HqOr4A8lLGy5O-wp3nwoERO3UYb5IhdO56EUEaieTlbuZrmQfszh3wGIfucueaF7ePfMWNFm3UpoMptnHYp7-ucNMopBq3tQrqfrcCUTmhydbR0DCwBeu0MNd8r5EeQ=w1373-h915-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczM0hB32vokvpxGs43U15M1R9q4azS_weX5DQ9kDefMfBihCp3eSO9X2PyPHC8g7sffJkVXqHO9U2p4FYnuT6W5ZIetXdrcC-YZTc01CQJ1cUiZB5DAPlhPK1lvH4i3VN3OzeUXth_XCvt4porQXWbo=w610-h915-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczOoh8x1IithCVlJC_vHPTodaw2k-PZD1B-kLB0x1inpLf4yyNW5VlrL5QkHiiTWjpZ-unXKV4feE2_9yvQKGCteg3vc_8WbEHqHkMtm9tPUc_azZlvpxPQooIkJFMcU93Tr61LFzlmY68OtqjsMVg8=w610-h915-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczPrENoSx-miKrYsOK4OJe15cqJmFlyE0FrPWr4rzRj4N6tmIifoMbnIMrWgZEKDYHgERwaq7Wiz0D1JHSWAyzTV9_69GMqWivrZzDxXn_4grBxV799ky70-iOSaHWMyI91-B3aT5PTocc-BKj6cPQc=w610-h915-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczOy_i7GjSnC75U2t5S0HzDlrycMTajPmwMxyMAfYbMdrosX4zsIcs6GzMDFawJl6Vx-Y7Lt61apOWWiq2SZzU7uOYF_A8kC2-hq-m5Y6iK_fgsdEpo0dBRc8bh1Ah0ixDB7EeAEw2-ZArvtOV1Iuc2F=w949-h634-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczM53vaAUbSoSonj96rRvgAfFA_NFU_vHCGM845fa2l1MkwVkJL4a99PMTJZPLWlDcWti9GvjYXz8xvyBnTbj_k3xNFMrwiStrX6U65sriq8TFwYFiGkotUeqYR-BRve88vnaxhn2qCXr6ISZ8awOmdr=w611-h915-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMpp8e8MAR3Jd6pxP25YrQrWS5AXkBQeogotjkKgfvPUQ1Gf-jNjOpM2_BkXS_L764k9GLRFlhfbAgJmWBCSsrugWaPQ_fUfP5ZRnbeAXpeGSRjrp6LUoqPSMgxnZ_CCRviy5xDLCf571nfxtKs_duZ=w611-h915-s-no-gm?authuser=0",
  ],
  bathroom: [
    "https://lh3.googleusercontent.com/pw/AP1GczMLNY3d3j0CkBLAy6CxV5mccN-1TObJB9M4oZ3ZKMKn_ZMDiGD4AGHBXxYec19rBR5KC660f3tno-GmzQe6hcJbbWCLRMF48-P3qNtEPN89O7-Rgu0X3h7GkqU-fzay7CNI3RKOxHtcwtY81-svDzgp=w611-h915-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNu7vlCWsj0S1YIVfZ6ad2h2Qpulmmmn-Z7N7Cje3f1KAi3YqbTaZpChOkKRDwfKFO1qRlOJpuwHMs7140YdPFZarUcWTIx1i6Mctm_TZZyt8TXD-D_jM6Ljvu798nw85X9DhLdsdrCHHb21I8kPHyC=w665-h915-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNuEwDZMqmE_yz9yqy3iEIriyjFgDyan6m79DL0wjr8X7CBEhHK7WI_n97TRXE5RumcY3auYcCmIuXr9_WajTtuoPUCI-0W3LxCBgSOdPEBZTV3PfLdqzwNe1X-0Vhjlh28HnCri5JNmqS-clDR98o=w609-h915-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczOVurMmmTdd1RF1ho2Xb2sAoOUanFBUHCJfpx7_xbHRp8gKRNjp8c3756B2j-WDWorbND1xrHIfunNd5dQt3foh3z55zfmwJy6nh0tsAdhBWlF1ibcIkUc7bnTRXaozzydjb2m2lZE8qW6QzePmOv64=w719-h915-s-no-gm?authuser=0",
  ],
  kitchen: [
    "https://lh3.googleusercontent.com/pw/AP1GczMBrQo4DCH0cuw2wUvKHOZVRQsPpXpG07cq2LD0baLMxQ2vLasHRRTzo3iahDi8vJZg9qV5nVZ-2vAZB-oNeZMU4IwhRHMwMgvdNCHPZC4lRCh8SM0FBrHNoaeHxgiU0WIMg54zdbR0EIlBKkS8ZN8=w1373-h915-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczOP62I6vqCge4upxZiCBkpZrbjgSg9mTWaFTWaeXe-pz0mUtD_69QK81sRaaxyhrLq4zwW-xkzL5jDw5vBtCiz8UyGBf_i633m-t9XvrNaFNK6_24qKmUCnCQzNuqK0Dcvj5LjlJJgCmR7dlyzuEEFa=w949-h644-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOKaip1psm7idDMHiPrrYzfUbI_B3jVn5xPxB62-bKOIbHFuwwduewSmcQMEtcn4euaxURrQ1Y4T7kI1bOUr6MpqP7ykXs9PgIe0J-3oMBNRzJmWgysC__IrIsGZpFD8vjkj_rszaqyJupQqZYB22Ff=w949-h644-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczP70Hkl8SAHdLPVtOkwlH7E5r7ZI-vBe64OKkzTw3JG5BM2gEYpk-xPWnaq3qVjMP5p0QE79v1v6wKX0hZYJMPZd0WdMaLjgiY1B8ihJ7E-Wdtepuhr0BwTbmtxqbX41NHslj4RJAQgYC8GoLqXTDg=w610-h915-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczN1gGVXQw6BbjOo-FuC4-iKSpEU4L6TbookG2jVfbSCWGUhC-C4qG8eMauxTbWKuuShMvS1vnHT1kt6yhM2fB2T4hHkl646_5kEespiZ1-Dpz5ybCeVvYUhz7yFComWsFcuQnCSFb6WhBnXWxZKnJc=w610-h915-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczOcwnhkXqWvmf_IdGC7XiKfsrPUOGFSmb9yfVsyXWXso__Vzwey9PH0mH-j9kvlE8IBa6ZbF2lZHSwcrL9s8UHoqc2orn0-jtit-1oyYLiUi54S6Wd9tpyjsJ3hhs9tTLWZzkRrsFKfYoqJmdWLXTw=w610-h915-s-no-gm?authuser=1",
    "https://lh3.googleusercontent.com/pw/AP1GczPTw2cYQjZRf2iKXtu1Rfb7sI0OufVPjgAz00rCuE8sUN080wqHCw2zrZFhaWB-5cMr4qTZjUjNlGWKnFsZmZFmdg5rFl9opWQezgavumDbqx3fa1QGAO-Vg7XgAnlhOct8gqVgKU7npIThVWwOcYA=w1373-h915-s-no-gm?authuser=1",
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


const images = {
  logo: [
    "https://lh3.googleusercontent.com/pw/AP1GczPuNoJo_sqTkowCDO-iEZLS8JcGvq_KxtESkbqFW5Z4HZQNtdYwlQoKVqeh99tiFHcbl7D8gULOnwjmcroBYi0l9MAbE_k9nxhVk06NGm7lbvPsMX-bpYfmopJGMJU6T5RwCUPR3GQ1EBCZR4xCxps=w915-h915-s-no-gm?authuser=1",
  ],
  livingRoom: [
    ,
    "https://drive.google.com/drive-viewer/AKGpihZDuLGabQrKOHOzyA-DjkcI6_QGn1frxqmjPoqPpzIY7fCyzS3moDKW5uBWP3wDIsSpe2pchh2NWhBnZOUluIVasAcl7Ohh1as=s1600-rw-v1",
    "https://drive.google.com/drive-viewer/AKGpihbnBipC2EluXPWlx1X6VksvtLTwdl-YmGgQ7hd5UmNotPAmSjZFkxde-Wy9uhK5C-CBpdpi_OrWjp6w4EU-ZKMy--X7HHAzlhI=s1600-rw-v1",
    "https://drive.google.com/drive-viewer/AKGpihYCpBBlABx35s7sAWqzLGi-dDLeqM-W8brNIMS-yUw0faMdmKaE1CSaXo7RQo4m_jq-v3XJ8UoZskZnciPaH1r2vJMb-tSzrDw=s1600-rw-v1",
    "https://drive.google.com/drive-viewer/AKGpihbQetk6AZSZ2n7upoPKJVr1eiACssuawXJatRHqcMj2nZF_Rz6wtEukXz6gZ8lDrL0dOCqoeWsIu96gQ2Dr8VMsfTjyHvfQ-HE=s1600-rw-v1",
  ],
  kitchen: [
    "https://drive.google.com/drive-viewer/AKGpihZiPpT60ug4bsZWso-nJakDrRHvvoN1yNK6blLJz8NN6mAKgp2Vsez9hpPa83NhtIkXkBO-VBCx4eF8MWjEP73k4Pi2HiTxL1k=s1600-rw-v1",
    "https://drive.google.com/drive-viewer/AKGpihaEXNpprTQhug5i3Q00Q1BhIQdodOcAzV_c1cHN93vAYTULlnIETSzI8jESQPtWD_0v2aMWPbA_r0x1zBHNqfE_vcFQonj9dSs=s1600-rw-v1",
    "https://drive.google.com/drive-viewer/AKGpihbYt86yQcrlinf9Xm8ipyRxkX60kdnsAxJAkfSHOpcSZ3BTEo4JMeRR9OzP5bNcYJRFw3OWAQphoDEhw_nDTfjvCh2DNs5cXwk=s1600-rw-v1",
  ],
  toilet: [
    "https://drive.google.com/drive-viewer/AKGpihbYJS0W2rOLvDE13KJxm5d7Jz_Ti-HOsqZ4kDxeoCJquGEq443G74GuPsApYN0jtndV6_u77inHs2uMhRAwfFwYyt_9-YQVRQ=s1600-rw-v1",
    "https://drive.google.com/drive-viewer/AKGpihaPJ-guIArZCIbQaDHQRPDO1RTYZ2LmhmgWV1IXQ12vEjJr19rB1Qcvs6tJ0OtbVn_FVcuut6hM8MmeUbUf6XAzLCwW9wIb7w=s1600-rw-v1",
    "https://drive.google.com/drive-viewer/AKGpihZDde8bVqcPqelKEbl0h87iRmVXN5kfdg4PyiJEuKRpNEH3Gk-PnSjtCoSF9AG2VbM3R1NV_lsdukyn4udTjDZAIDgjLfwC_Bc=s1600-rw-v1",
  ],
  outside: [
    "https://drive.google.com/drive-viewer/AKGpihby7oy1INznf_vGAMbAIYwydUyEB4RyLlcQw-IZLc-8idAb8DVZpO7kAEJsfg4YfnfawKbY59X47W3WmY-PwdYJg4Jm-Io0CDg=s1600-rw-v1",
    "https://drive.google.com/drive-viewer/AKGpihbjVM8Qf4ZUZm_nJ7eur1uxMTEgWjTPpaLMclATIapc0K5iToUhfoGIUZuqAb1_61EMR24lEpFCaPMhJb6ZMTbjpy107jYnQiM=s1600-rw-v1",
  ],
  bedRoom: [
    "https://drive.google.com/drive-viewer/AKGpihaJioD-eG0SjnrZEAbZWYK67X48ZQ0oAPskIyJk5lrgAe5U7HCpmqQG0qM2iK26L2ulVEqYNK7iopdMkacj2dp2igMS6C02zrI=s1600-rw-v1",
    "https://drive.google.com/drive-viewer/AKGpihY63ex6BF3rgNZhA-nv4mbJtyy7JwFBwdiJyf0KdJ4NZ785TJVPx22kP_xOiMZzUSQTb8oQ7qn9X1EUFpjnn8LJq31GvcRYh0k=s1600-rw-v1",
    "https://drive.google.com/drive-viewer/AKGpihaJ3MbjyIVkiMymu-58rhLcsAourRWi47gWamm_zyqcsvPvr2eInFX1PnwY0J9dbzz1KEHzbRFqA6d8EucGPuESRTqVFrtr0Qo=s1600-rw-v1",
  ],
};