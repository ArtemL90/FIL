import LocomotiveScroll from 'locomotive-scroll';
import {
  htmlEl,
  bodyEl,
  headerEl,
} from './common';

// locomotive scroll plugin
const locoScrollPlugin = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  getDirection: true,
  resetNativeScroll: true,
  tablet: {
    smooth: false,
  },
  smartphone: {
    smooth: false,
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
    const headerElHeight = headerEl.offsetHeight;
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
    if (htmlEl.classList.contains('has-scroll-smooth')) {
      locoScrollPlugin.start();
      bodyEl.classList.remove('is-fixed');
    } else {
      const body = bodyEl;
      const scrollY = body.style.top;
      body.style.top = '';
      bodyEl.classList.remove('is-fixed');
      const coordY = parseInt(scrollY || '0', 10) * -1;
      window.scrollTo(0, coordY);
    }
    return;
  }
  bodyEl.classList.add('is-fixed');
  if (htmlEl.classList.contains('has-scroll-smooth')) {
    locoScrollPlugin.stop();
  } else {
    const body = bodyEl;
    const scrollY = htmlEl.style.getPropertyValue('--scroll-y');
    body.style.top = `-${scrollY}`;
  }
}
if (!htmlEl.classList.contains('has-scroll-smooth')) {
  window.addEventListener('scroll', () => {
    htmlEl.style.setProperty('--scroll-y', `${window.scrollY}px`);
  });
}

// preloader
document.addEventListener('DOMContentLoaded', () => {
  const preloaderEl = document.querySelector('.js_preloader');
  function removePreloader() {
    preloaderEl.classList.add('preloader--hidden');
    holdBody();
  }
  removePreloader();
});

window.addEventListener('resize', () => {
  window.location.reload();
  return false;
});

export {
  holdBody,
  addAnchorScroll,
  locoScrollPlugin,
  addLocoEvents,
};
