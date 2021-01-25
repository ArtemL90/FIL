import { addAllSliders } from './sliders.js';
import { addCustomCursor } from './custom-cursor.js';
import { shineNavLnk } from './header.js';
import { pageTransInterval, addSmoothScroll } from './animation.js';

// init Barba.js plugin
import barba from '@barba/core';

const transitionEl = document.querySelector('.js_page-transition');
// barba plugin options 

barba.hooks.after(data => {
   let name = data.next.namespace; 
   window.scrollTo(0, 0)
   addAllSliders();
   addCustomCursor();
   shineNavLnk();
   addSmoothScroll();
});
// delay func
function delay(n) {
   n = n || 2000;
   return new Promise(done => {
      setTimeout(() => {
         done();
      }, n);
   });
};

barba.init({
   sync: true,
      
   transitions: [{
      async leave(data) {
         const done = this.async();
         transitionEl.classList.remove('is-loaded');
         await delay(pageTransInterval);
         done();
         
      },
      async enter(data) {
         transitionEl.classList.add('is-loaded');
      }
   }]
});
