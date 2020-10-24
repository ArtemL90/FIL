// init Swiper Plugin
import Swiper from 'swiper/bundle';

// init sliders
const featureStr = 'feature';
var featureSliderBg;
var featuresliderTxt;

function showSliderIndex(sliderName, sectionName) {
  const slideIndexEl = document.querySelector('.js_' + sectionName + '-slider-indx')
  var sliderIndexNum = '0' +  String(sliderName.realIndex + 1);
  slideIndexEl.textContent = sliderIndexNum;
}

var  mainSlider = new Swiper('.js_main-slider', {
        // Optional parameters
        loop: true,
        effect: 'fade',
        pagination: {
          el: '.js_main-slider-pagination',
          clickable: true,
        },
});

var  lnksSlider = new Swiper('.js_lnks-slider', {
  // Optional parameters
  slidesPerView: 6,
  spaceBetween: 40,
  loop: true,
});

function addDoubleSlider(sliderBg, sliderTxt, sectionName) {

  sliderTxt= new Swiper('.js_' + sectionName + '-slider-info', {
    loop: true,
    effect: 'fade',
    simulateTouch : false,
  });
  
  sliderBg = new Swiper('.js_' + sectionName + '-slider-bg', {
    loop: true,
    effect: 'fade',    
    pagination: {
      el: '.js_' + sectionName + '-slider-pagination',
      clickable: true,  
    },
    
  });
  sliderBg.on('slideChange', function () {
    showSliderIndex(this, featureStr);
  });
  sliderBg.controller.control = sliderTxt;
}

addDoubleSlider( featureSliderBg, featuresliderTxt, featureStr);
