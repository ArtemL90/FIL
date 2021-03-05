import barba from '@barba/core';
import {
  addMainSliders,
  addPageSliders,
  addProductSliders,
} from './sliders';
import {
  addCustomCursor,
  updateCustomCursor,
} from './custom-cursor';
import shineNavLnk from './header';
import { addPopubBtn } from './popup';
import {
  addAnchorScroll,
  locoScrollPlugin,
  addLocoEvents,
} from './animation';
import {
  htmlEl,
  pageTransInterval,
  transitionEl,
} from './common';

// init Barba.js plugin

// delay func
function delay(n) {
  const num = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, num);
  });
}

function addMainEvents() {
  addCustomCursor();
  addLocoEvents();
  addAnchorScroll();
}

function addPageTans() {
  transitionEl.classList.toggle('is-loaded');
}

function updatePageScroll(callback) {
  window.scrollTo(0, 0);
  callback();
}

barba.init({
  views: [
    {
      namespace: 'main',
      afterEnter(data) {
        const dataPageName = data.next.container.dataset.pageName;
        addMainEvents();
        addMainSliders(dataPageName);
      },
    },
    {
      namespace: 'products',
      afterEnter() {
        addMainEvents();
      },
    },
    {
      namespace: 'page',
      afterEnter(data) {
        const dataPageName = data.next.container.dataset.pageName;
        addMainEvents();
        addPageSliders(dataPageName);
      },
    },
    {
      namespace: 'product',
      afterEnter(data) {
        const dataPageName = data.next.container.dataset.pageName;
        const popupBtn = data.next.container.querySelector('.js_popup-btn');
        addMainEvents();
        addProductSliders(dataPageName);
        addPopubBtn(popupBtn);
      },
    },
  ],
  sync: true,
  transitions: [{
    async leave() {
      const done = this.async();
      addPageTans();
      await delay(pageTransInterval);
      done();
    },
    async enter() {
      if (htmlEl.classList.contains('has-scroll-smooth')) {
        locoScrollPlugin.scrollTo(0, {
          offset: 0,
          duration: 1,
          disableLerp: true,
          callback: addPageTans,
        });
      } else {
        updatePageScroll(addPageTans);
      }
    },
  }],
});

barba.hooks.after((data) => {
  const currentPageName = data.next.container;
  updateCustomCursor();
  shineNavLnk(currentPageName);
  locoScrollPlugin.update();
});
