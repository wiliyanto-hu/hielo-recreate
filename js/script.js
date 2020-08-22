var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  effect: "fade",
  speed: 700,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // Navigation arrows
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
