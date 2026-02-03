<<<<<<< HEAD
const swiper = new Swiper('.mySwiper', {
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


import { animate, inView } from "https://cdn.jsdelivr.net/npm/motion@12.29.2/+esm";

  inView("[data-scroll-animate]", (element) => {
    animate(
      element,
      { opacity: 1, x: [-1000, 0] },
      { duration: 1, easing: [0.17, 0.55, 0.55, 1] }
    );
  });

// let lastScroll = 0;
// window.addEventListener("scroll", () => {
//   const current = window.pageYOffset;
//   if (current > lastScroll) {
//           nav.classList.add("translate-y-full","duration-300");
//           nav.classList.remove("translate-y-0");
//   } else {
//           nav.classList.add("translate-y-0");
//           nav.classList.remove("translate-y-full");
//   }
//   lastScroll = current;
// });

=======
const swiper = new Swiper('.mySwiper', {
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// let lastScroll = 0;
// window.addEventListener("scroll", () => {
//   const current = window.pageYOffset;
//   if (current > lastScroll) {
//           nav.classList.add("translate-y-full","duration-300");
//           nav.classList.remove("translate-y-0");
//   } else {
//           nav.classList.add("translate-y-0");
//           nav.classList.remove("translate-y-full");
//   }
//   lastScroll = current;
// });
>>>>>>> 42970280efd4ab1e665abf96269e6b47727fc138
