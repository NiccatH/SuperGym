import './vendor/swiper';

const swiperReviews = new Swiper('.reviews__swiper', {
  slidesPerView: 1,
  spaceBetween: -1,
  speed: 200,
  autoHeight: true,
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },
});

const swiperTrainers = new Swiper('.trainers__swiper', {
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
  spaceBetween: -1,
  autoHeight: true,
  slidesPerView: 1,
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.trainers__button-next',
    prevEl: '.trainers__button-prev',
  },
});
