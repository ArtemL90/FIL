import LocomotiveScroll from 'locomotive-scroll';
import { bodyEl, pageTransInterval } from './common';

// locomotive scroll plugin
const locoScrollPlugin = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  getDirection: true,
  reloadOnContextChange: true,
  touchMultiplier: 5,
  tablet: {
    smooth: true,
  },
  smartphone: {
    smooth: true,
  },

});

// events loco plugin
function addLocoEvents() {
  const lnksSliders = document.querySelectorAll('.js_lnks-slider');
  const textBlockEls = document.querySelectorAll('.js_text-block');
  const brandsEls = document.querySelectorAll('.js_brands');
  const productLnksActiveClass = 'products-lnks__slider-container--active';
  const brandsActiveClass = 'concept__team-brands--active';
  const textBlockActiveClass = 'trans-txt-block';

  function addScrollAnim(elementsClass, elementActiveClass) {
    elementsClass.forEach((elementClass) => {
      if (elementClass != null) {
        elementClass.classList.remove(elementActiveClass, 'visible');
        locoScrollPlugin.on('scroll', () => {
          if (elementClass.classList.contains(elementActiveClass)) {
            return;
          }
          if (elementClass.classList.contains('visible')) {
            elementClass.classList.add(elementActiveClass);
          }
        });
      }
    });
  }
  // text block scroll anim
  addScrollAnim(textBlockEls, textBlockActiveClass);
  // brands anim  concept
  addScrollAnim(brandsEls, brandsActiveClass);
  // lnks slider scroll anim
  addScrollAnim(lnksSliders, productLnksActiveClass);
}
addLocoEvents();

// add anchor scroll with loco plugin
function addAnchorScroll() {
  const toScrollEl = document.querySelector('.js_scroll-section');
  if (toScrollEl != null) {
    const scrollBtnEl = document.querySelector('.js_scroll');
    const headerElHeight = document.querySelector('.js_header').offsetHeight;
    scrollBtnEl.addEventListener('click', (e) => {
      e.preventDefault();
      locoScrollPlugin.scrollTo(toScrollEl, {
        offset: -(headerElHeight + 100),
      });
    });
  }
}
addAnchorScroll();

// hold body
function holdBody() {
  bodyEl.classList.toggle('is-fixed');
  if (bodyEl.classList.contains('is-fixed')) {
    locoScrollPlugin.stop();
  } else {
    locoScrollPlugin.start();
  }
}
// preloader
document.addEventListener('DOMContentLoaded', () => {
  const preloaderEl = document.querySelector('.js_preloader');
  function removePreloader() {
    preloaderEl.classList.add('preloader--hidden');
    holdBody();
  }
  setTimeout(removePreloader, pageTransInterval);
});

export {
  holdBody, pageTransInterval, addAnchorScroll, locoScrollPlugin, addLocoEvents,
};
