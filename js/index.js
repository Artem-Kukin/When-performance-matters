const navBar = document.querySelector(".nav");
const menuBtn = document.querySelector(".mobile-menu");
const menu = document.querySelector(".fixed-mob-menu");

menu.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  document.querySelector(".nav__links").classList.toggle("open");
});

window.onscroll = () => {
  navBar.classList.toggle("sticky", window.scrollY > 50);
};

//=== swiper ===//

var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
