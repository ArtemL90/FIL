//import sal from 'sal.js';
import jump from 'jump.js';
import LocomotiveScroll from 'locomotive-scroll';

// fix the body
const bodyEl = document.querySelector('body');

const locoScrollPlugin = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  getDirection: true,
});

locoScrollPlugin.on('scroll', () => {
  const containerEl = document.querySelector('.js_container');

  if(containerEl.classList.contains('main')) {
    // text block scroll anim
    const textBlockEls = document.querySelectorAll('.js_text-block');
    textBlockEls.forEach(textBlockEl => {
      if(textBlockEl.classList.contains('visible')) {
        textBlockEl.classList.add('trans-txt-block');
      }
    })

  }
  // lnks slider scroll anim
  if(!containerEl.classList.contains('products')) {
    const lnksSlider = document.querySelector('.js_lnks-slider');
    if(lnksSlider.classList.contains('visible')) {
      lnksSlider.classList.add('products-lnks__slider-container--active');
    }else {
      lnksSlider.classList.remove('products-lnks__slider-container--active');
    }
  }
  if(containerEl.classList.contains('concept')) {
    const brandsEl = document.querySelector('.js_brands');
    if(brandsEl.classList.contains('visible')) {
      brandsEl.classList.add('concept__team-brands--active');
    }else {
      brandsEl.classList.remove('concept__team-brands--active');
    }
  }
  /* footer scroll anim
  const footerEl = document.querySelector('.js_footer');
  if(footerEl.classList.contains('visible')) {
    footerEl.classList.add('footer--active');
  }else {
    footerEl.classList.remove('footer--active');
  }*/
});

function holdBody() {
  bodyEl.classList.toggle('is-fixed')
  if(bodyEl.classList.contains('is-fixed')) {
    locoScrollPlugin.stop()
    console.log('stop')
  }else {
    locoScrollPlugin.start();
  }
  document.querySelector('.js_cursor').className = 'cursor circle-el js_cursor';
};

// preloader
const pageTransInterval = 1500;

document.addEventListener("DOMContentLoaded", () => {
  const preloaderEl = document.querySelector('.js_preloader');
  function removePreloader() {
      preloaderEl.classList.add('preloader--hidden');
      holdBody();
  }
  setTimeout(removePreloader, pageTransInterval);
  setTimeout(addTtlAnim, pageTransInterval)
  //setTimeout(sal, pageTransInterval);
  
});

// SMOOTH SCROLL FUNCTIONALITY
function addSmoothScroll() {
  const containerEl = document.querySelector('.js_container');
  const toScrollEl = document.querySelector('.js_scroll-section');
  if(containerEl.hasAttribute('data-scroll')) {
    const scrollBtnEl = document.querySelector('.js_scroll');
    const headerElHeight = document.querySelector('.js_header').offsetHeight;
    scrollBtnEl.addEventListener('click', (e) => {
      e.preventDefault();
      locoScrollPlugin.scrollTo(toScrollEl,{
        'offset': - (headerElHeight + 100)
      })
    })
  }
}
addSmoothScroll();

export { holdBody, pageTransInterval, addSmoothScroll, locoScrollPlugin}



