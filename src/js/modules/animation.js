import sal from 'sal.js';
import jump from 'jump.js';
sal();

// fix the body
const bodyEl = document.querySelector('body');
let scrollY;
function holdBody() {
    if(bodyEl.classList.contains('is-fixed')) {
      scrollY = bodyEl.style.top;
      bodyEl.classList.remove('is-fixed');
      bodyEl.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }else {
      scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
      bodyEl.style.top = `-${scrollY}`;
      bodyEl.classList.add('is-fixed');
    }
    window.addEventListener('scroll', () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    });
    document.querySelector('.js_cursor').className = 'cursor circle-el js_cursor';
};
// preloader
const pageTransInterval = 1500;

document.addEventListener("DOMContentLoaded", () => {
  const preloaderEl = document.querySelector('.js_preloader');
  function removePreloader() {
      preloaderEl.classList.add('preloader--hidden');
      holdBody();
  }
  setTimeout(removePreloader, pageTransInterval);
});

;
 
// SMOOTH SCROLL FUNCTIONALITY
function addSmoothScroll() {
  const scrollBtnEl = document.querySelector('.js_scroll')
  scrollBtnEl.addEventListener('click', (e) => {
    e.preventDefault();
    jump('.js_scroll-section');
  })
}

export { holdBody, pageTransInterval, addSmoothScroll }



