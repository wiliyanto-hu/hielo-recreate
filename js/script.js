const navbar = document.querySelector("nav");
const slide = document.querySelector(".swiper-container");
const scrolled = document.querySelector(".scrolled");
const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const closed = document.querySelector("#close");

menu.addEventListener("click", (e) => {
  sidebar.classList.add("sidebar-toggle");

  closed.style.opacity = 1;
  e.preventDefault();
});

closed.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-toggle");
  closed.style.opacity = 0;
});

document.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight / 2) {
    navbar.style.height = 0;
  }
  if (window.scrollY > window.innerHeight) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    navbar.style.height = "50px";
  }
});

const mySwiper = new Swiper(".swiper-container", {
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
