import { animate, inView } from "https://cdn.jsdelivr.net/npm/motion@12.29.2/+esm";


const swiperStack = new Swiper(".swiperStack", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperProjects = new Swiper(".swiperProjects", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const directionMap = {
  "fade":  { opacity: [0, 1], x: [0, 0],    y: [0, 0]  },
  "left":  { opacity: [0, 1], x: [100, 0],  y: [0, 0]  },
  "right": { opacity: [0, 1], x: [-100, 0], y: [0, 0]  },
  "up":    { opacity: [0, 1], x: [0, 0],    y: [80, 0]  },
};

document.querySelectorAll("[data-scroll-animate]").forEach((el) => {
  el.style.opacity = "0";
});

inView(
  "[data-scroll-animate]",
  (element) => {
    const direction = element.getAttribute("data-scroll-animate") || "fade";
    const from = directionMap[direction] ?? directionMap["fade"];

    animate(element, from, {
      duration: 0.9,
      easing: [0.17, 0.55, 0.55, 1],
    });

    return () => {};
  },
  { margin: "0px 0px -20% 0px" }
);