import { addAllSliders } from './sliders.js';
import { addCustomCursor } from './custom-cursor.js';
import { shineNavLnk } from './header.js';
import { pageTransInterval, addSmoothScroll, locoScrollPlugin, addTtlAnim } from './animation.js';
//import sal from 'sal.js';


// init Barba.js plugin
import barba from '@barba/core';
const bodyEl = document.querySelector('html')
const transitionEl = document.querySelector('.js_page-transition');
// barba plugin options 

barba.hooks.after(data => {
   let name = data.next.namespace; 
   addAllSliders();
   addCustomCursor();
   shineNavLnk();
   addSmoothScroll();
   locoScrollPlugin.update();
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
         locoScrollPlugin.scrollTo('top',{
            'offset': 0,
            'duration': 5,
            'disableLerp': true,
            'callback': transitionEl.classList.add('is-loaded')
         });
      }
   }]
});
