import { addAllSliders } from './sliders.js';
import { addCustomCursor } from './custom-cursor.js';
import { shineNavLnk } from './header.js';
import {addAnchorScroll, locoScrollPlugin, holdBody, addLocoEvents } from './animation.js';
import { pageTransInterval } from './common.js';


// init Barba.js plugin
import barba from '@barba/core';

const transitionEl = document.querySelector('.js_page-transition');
// barba plugin options 
barba.hooks.after(data => {
   let name = data.next.namespace; 
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
