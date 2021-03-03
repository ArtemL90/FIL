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
      transitionEl.classList.remove('is-loaded');
      await delay(pageTransInterval);
      done();
    },
    async enter() {
      locoScrollPlugin.scrollTo('top', {
        offset: 0,
        duration: 5,
        disableLerp: true,
        callback: transitionEl.classList.add('is-loaded'),
      });
    },
  }],
});

barba.hooks.after((data) => {
  const currentPageName = data.next.container;
  updateCustomCursor();
  shineNavLnk(currentPageName);
  locoScrollPlugin.update();
});
