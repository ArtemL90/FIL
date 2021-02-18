import barba from '@barba/core';
import { addAllSliders } from './sliders';
import { addCustomCursor } from './custom-cursor';
import { shineNavLnk } from './header';
import {
  addAnchorScroll, locoScrollPlugin, addLocoEvents,
} from './animation';
import { pageTransInterval } from './common';

// init Barba.js plugin

const transitionEl = document.querySelector('.js_page-transition');
// barba plugin options
barba.hooks.after(() => {
  addAllSliders();
  addCustomCursor();
  shineNavLnk();
  addAnchorScroll();
  locoScrollPlugin.update();
  addLocoEvents();
});
// delay func
function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
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
