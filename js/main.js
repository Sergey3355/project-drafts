// Carousel

const owl = $(".owl-carousel");
owl.owlCarousel({
  center: true,
  loop: true,
  margin: 30,
  startPosition: 0,
  items: 1,
  smartSpeed: 500,

  responsive: {
    // 450: {
    //   items: 3,
    // },
    465: {
      startPosition: 1,
      items: 3,
    },
    850: {
      startPosition: 1,
      items: 3,
    },
    // breakpoint from 1000 up
    1000: {
      margin: 20,
      items: 3,
    },
    // breakpoint from 1200 up
    1200: {
      margin: 30,
      items: 3,
    },
  },
});

$(".slider__btn--prev").click(function () {
  owl.trigger("prev.owl.carousel");
});

$(".slider__btn--next").click(function () {
  owl.trigger("next.owl.carousel");
});

// Nav Icon

const navBtn = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");
const menuIcon = document.querySelector(".menu-icon");

navBtn.onclick = function () {
  nav.classList.toggle("nav--mobile");
  document.querySelector(".menu-icon").classList.toggle("menu-icon-active");
};

// navBtn.onclick = function () {};
