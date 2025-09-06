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

let lastScroll = 0;
window.addEventListener("scroll", () => {
  const current = window.pageYOffset;
  if (current > lastScroll) {
          nav.classList.add("translate-y-full","duration-300");
          nav.classList.remove("translate-y-0");
  } else {
          nav.classList.add("translate-y-0");
          nav.classList.remove("translate-y-full");
  }
  lastScroll = current;
});
