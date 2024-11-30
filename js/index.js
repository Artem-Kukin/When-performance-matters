let navBar = document.querySelector(".nav");

window.onscroll = () => {
  navBar.classList.toggle("sticky", window.scrollY > 50);
};

// swiper

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
