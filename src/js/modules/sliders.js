// import { containerEl, bodyEl, pageTransInterval } from './common.js';

// init sliders
// init Swiper Plugin
import Swiper from 'swiper/bundle';
// add slide index
function showSlideIndex(sliderName, indxEl) {
  const slideIndxEl = indxEl;
  const slideIndxNum = `0${String(sliderName.realIndex + 1)}`;
  slideIndxEl.textContent = slideIndxNum;
}

// add  double slider
function addDoubleSlider(pageNameStr) {
  const sliderTxt = new Swiper(`.js_${pageNameStr}-double-slider-info`, {
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    noSwipingClass: 'swiper-no-swiping',
  });

  const sliderBg = new Swiper(`.js_${pageNameStr}-double-slider-bg`, {
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    speed: 1000,
    touchStartPreventDefault: false,
    pagination: {
      el: `.js_${pageNameStr}-double-slider-pagination`,
      clickable: true,
    },

  });
  sliderBg.on('slideChange', () => {
    const slideIndxEl = document.querySelector(`.js_${pageNameStr}-double-slider-indx`);
    showSlideIndex(this, slideIndxEl);
  });
  sliderBg.controller.control = sliderTxt;
}
// add links slider
function addLinksSlider() {
  const lnksSlider = new Swiper('.js_lnks-slider', {
    // Optional parameters
    slidesPerView: 6.5,
    touchStartPreventDefault: false,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    breakpoints: {
      640: {
        spaceBetween: 15,
        slidesPerView: 6,
      },
    },
  });
}

// add sliders for main page
function addMainSliders(pageName) {
  const mainSlider = new Swiper('.js_main-slider', {
    // Optional parameters
    loop: true,
    effect: 'fade',
    speed: 1000,
    touchStartPreventDefault: false,
    navigation: {
      nextEl: '.js_main-slider-next',
      prevEl: '.js_main-slider-prev',
    },
    pagination: {
      el: '.js_main-slider-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 7000,
    },
  });

  addLinksSlider();
  addDoubleSlider(pageName);
}

// add gallery slider
function addGallerySlider(pageNameStr) {
  const gallerySlider = new Swiper(`.js_${pageNameStr}-gallery-slider`, {
    loop: true,
    speed: 1000,
    touchStartPreventDefault: false,
    effect: 'fade',
    pagination: {
      el: `.js_${pageNameStr}-gallery-slider-pagination`,
      clickable: true,
    },
  });

  gallerySlider.on('slideChange', () => {
    const slideIndxEl = document.querySelector(`.js_${pageNameStr}-gallery-slider-indx`);
    showSlideIndex(this, slideIndxEl);
  });
}
// add sliders for pages: concept, story
function addPageSliders(pageName) {
  addDoubleSlider(pageName);
  addLinksSlider();
}

// add sliders for product pages : lounge-chair page ...
function addProductSliders(pageName) {
  addGallerySlider(pageName);
  addLinksSlider();
}

// add sliders depending on the date attribute
function addAllSliders() {
  const containerEl = document.querySelector('.js_container');
  const dataPageName = containerEl.dataset.pageName;
  const dataGroupName = containerEl.dataset.groupName;
  if (dataGroupName === 'main') {
    addMainSliders(dataPageName);
  }
  if (dataGroupName === 'page') {
    addPageSliders(dataPageName);
  }
  if (dataGroupName === 'product') {
    addProductSliders(dataPageName);
  }
}
addAllSliders();
export { addAllSliders as default };
