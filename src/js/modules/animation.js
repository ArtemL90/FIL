import LocomotiveScroll from 'locomotive-scroll';
import { bodyEl, pageTransInterval } from './common';

// locomotive scroll plugin
const locoScrollPlugin = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  getDirection: true,
  reloadOnContextChange: true,
  tablet: {
    smooth: true,
  },
  smartphone: {
    smooth: true,
  },

});
// events loco plugin
function addLocoEvents() {
  const currentLnksSliders = {
    el: document.querySelectorAll('.js_lnks-slider'),
    activeClass: 'products-lnks__slider-container--active',
  };
  const currentTextBlockEls = {
    el: document.querySelectorAll('.js_text-block'),
    activeClass: 'trans-txt-block',
  };
  const currentBrandsEls = {
    el: document.querySelectorAll('.js_brands'),
    activeClass: 'concept__team-brands--active',
  };

  function addScrollAnim(elements) {
    elements.el.forEach((element) => {
      if (element != null) {
        element.classList.remove(elements.activeClass, 'visible');
        locoScrollPlugin.on('scroll', () => {
          if (element.classList.contains(elements.activeClass)) {
            return;
          }
          if (element.classList.contains('visible')) {
            element.classList.add(elements.activeClass);
          }
        });
      }
    });
  }
  // text block scroll anim
  addScrollAnim(currentTextBlockEls);
  // brands anim  concept
  addScrollAnim(currentBrandsEls);
  // lnks slider scroll anim
  addScrollAnim(currentLnksSliders);
}

// add anchor scroll with loco plugin
function addAnchorScroll() {
  const toScrollEl = document.querySelector('.js_scroll-section');
  if (toScrollEl != null) {
    const scrollBtnEl = document.querySelector('.js_scroll');
    const headerElHeight = document.querySelector('.js_header').offsetHeight;
    scrollBtnEl.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      locoScrollPlugin.scrollTo(toScrollEl, {
        offset: -(headerElHeight + 100),
      });
    });
  }
}

// hold body
function holdBody() {
  if (bodyEl.classList.contains('is-fixed')) {
    locoScrollPlugin.start();
    bodyEl.classList.remove('is-fixed');
    return;
  }
  bodyEl.classList.add('is-fixed');
  locoScrollPlugin.stop();
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
  holdBody, addAnchorScroll, locoScrollPlugin, addLocoEvents,
};
