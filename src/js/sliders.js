import Swiper, { Navigation, Pagination } from 'swiper';
export function swiperStart () {
  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    loop: false,
    width: 240,
    spaceBetween: 16,
    breakpoints: {
      768: {
        enabled: false,
        spaceBetween: 0,
      },
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
}