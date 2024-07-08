import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

let repairSwiper;
const screenWidth = window.window.innerWidth;
const repairShowMoreButton  = document.querySelector('.show-more-button--repair');
const repairShowMoreButtonText = repairShowMoreButton.querySelector('.show-more-button__text');
const repairListContainer = document.querySelector('.repair-list-container');
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
  repairSwiper = new Swiper('.repair-list-container', swiperOptions);
};

const resizeScreen = function (event) {
  if (repairSwiper && event.target.innerWidth >= 768) {
    repairSwiper.enable();
    repairSwiper.destroy(true, true);
    repairSwiper = null;
  } else if(!repairSwiper && event.target.innerWidth < 768) {
    repairSwiper = new Swiper('.repair-list-container', swiperOptions);
  };
};

const toggleContainer = function () {
    if (repairListContainer.classList.contains('repair-list-container')) {
        repairListContainer.classList.remove('repair-list-container');
        repairListContainer.classList.add('repair-list-container--opened');
        repairShowMoreButtonText.textContent = 'Скрыть все';
        repairShowMoreButtonText.style.backgroundImage = "url('./img/Hide.png')";
    } else {
        repairListContainer.classList.remove('repair-list-container--opened');
        repairListContainer.classList.add('repair-list-container');
        repairShowMoreButtonText.textContent = 'Показать все';
        repairShowMoreButtonText.style.backgroundImage = "url('./img/Expand.png')";
    }
};

repairShowMoreButton.addEventListener('click', toggleContainer);
window.addEventListener('resize', resizeScreen);
