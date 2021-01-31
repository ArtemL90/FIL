//import { containerEl, bodyEl, pageTransInterval } from './common.js';

// init sliders
// init Swiper Plugin
import Swiper from 'swiper/bundle';
// add slide index
function showSlideIndex(sliderName, indxEl) {
  let slideIndxEl = indxEl;
  let slideIndxNum = '0' +  String(sliderName.realIndex + 1);
  slideIndxEl.textContent = slideIndxNum;
}


// add  double slider
function addDoubleSlider(pageNameStr) {
  let sliderTxt= new Swiper('.js_' + pageNameStr + '-double-slider-info', {
    loop: true,
    effect: 'fade',
    noSwipingClass: 'swiper-no-swiping',
  });

  let sliderBg = new Swiper('.js_' + pageNameStr + '-double-slider-bg', {
    loop: true,
    effect: 'fade',
    touchStartPreventDefault: false,    
    pagination: {
      el: '.js_' + pageNameStr + '-double-slider-pagination',
      clickable: true,  
    },
    
  });
  sliderBg.on('slideChange', function () {
    let slideIndxEl = document.querySelector('.js_' + pageNameStr + '-double-slider-indx');
    showSlideIndex(this, slideIndxEl);
  });
  sliderBg.controller.control = sliderTxt;
}
// add links slider
function addLinksSlider()  {
  let  lnksSlider = new Swiper('.js_lnks-slider', {
    // Optional parameters
    slidesPerView: 6,
    touchStartPreventDefault: false,
    spaceBetween: 40,
    loop: true,
  });
}


// add sliders for main page
function addMainSliders(pageName) {
  let  mainSlider = new Swiper('.js_main-slider', {
      // Optional parameters
      loop: true,
      effect: 'fade',
      touchStartPreventDefault: false,
      navigation: {
        nextEl: '.js_main-slider-next',
        prevEl: '.js_main-slider-prev',
      },
      pagination: {
        el: '.js_main-slider-pagination',
        clickable: true,
      },
  });

  addLinksSlider();
  addDoubleSlider(pageName);
};


// add gallery slider 
function addGallerySlider(pageNameStr) {
  let gallerySlider = new Swiper('.js_' + pageNameStr + '-gallery-slider', {
    loop: true,
    touchStartPreventDefault: false,
    effect: 'fade',
    pagination: {
      el: '.js_' + pageNameStr + '-gallery-slider-pagination',
      clickable: true,  
    }, 
  });

  gallerySlider.on('slideChange', function () {
      let slideIndxEl = document.querySelector('.js_' + pageNameStr + '-gallery-slider-indx');
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
  let containerEl = document.querySelector('.js_container');
  let dataPageName = containerEl.dataset.pageName
  let dataGroupName = containerEl.dataset.groupName
  
  if( dataGroupName == 'main') {
    addMainSliders(dataPageName);
  }
  if( dataGroupName == 'page') {
    addPageSliders(dataPageName);
  }
  if( dataGroupName == 'product') {
    addProductSliders(dataPageName)
  }
}
addAllSliders();
export { addAllSliders };

