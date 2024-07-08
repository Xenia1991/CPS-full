import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

let pricesSwiper;
const screenWidth = window.window.innerWidth;
const swiperOptions = {
  modules: [Pagination],
  direction: 'horizontal',
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',

  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
};

if (screenWidth < 768) {
  pricesSwiper = new Swiper('.prices-list-container', swiperOptions);
};

const resizeScreen = function (event) {
  if (pricesSwiper && event.target.innerWidth >= 768) {
    pricesSwiper.enable();
    pricesSwiper.destroy(true, true);
    pricesSwiper = null;
  } else if(!pricesSwiper && event.target.innerWidth < 768) {
    pricesSwiper = new Swiper('.prices-list-container', swiperOptions);
  };
};

window.addEventListener('resize', resizeScreen);
