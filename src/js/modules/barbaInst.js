import { addAllSliders } from './sliders.js';
import { addCustomCursor } from './custom-cursor.js';
import { shineNavLnk } from './header.js';

// init Barba.js plugin
import barba from '@barba/core';
// barba plugin options 

barba.hooks.after(data => {
   let name = data.next.namespace; 
   window.scrollTo(0, 0)
   addAllSliders();
   addCustomCursor();
   shineNavLnk();
});

barba.init();
