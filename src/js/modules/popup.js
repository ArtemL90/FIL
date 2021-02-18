// import {containerEl, bodyEl, pageTransInterval} from './common.js';
import { holdBody } from './animation';
// popup form
const buttonElements = document.querySelectorAll('.js_popup-btn');
const closeElements = document.querySelectorAll('.js_close-btn');
const popupFormOuterEl = document.querySelector('.js_popup-outer');
const inputEls = document.querySelectorAll('.js_popup-input');
const blurEl = document.querySelector('.js_blur');

// open popup
function addPopupClass(elementParent) {
  for (const element of elementParent) {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      holdBody();
      if (popupFormOuterEl.classList.contains('popup-outer--active')) {
        if (popupFormOuterEl.classList.contains('popup-outer--active')) {
          popupFormOuterEl.classList.remove('popup-outer--active');
        }
        blurEl.classList.remove('is-blur');
        return;
      }
      popupFormOuterEl.classList.remove('popup-outer--thanks');
      popupFormOuterEl.classList.add('popup-outer--active');
      blurEl.classList.add('is-blur');
    });
  }
}
// input anim
for (const inputEl of inputEls) {
  inputEl.addEventListener('mouseleave', (e) => {
    inputEl.parentElement.classList.remove('popup-request__itm-outer--active');
    if (e.target.value.length) {
      e.target.parentElement.classList.add('input-change');
      return;
    }
    e.target.parentElement.classList.remove('input-change');
  });
  inputEl.addEventListener('click', (e) => {
    e.target.parentElement.classList.remove('input-change');
    e.target.parentElement.classList.add('popup-request__itm-outer--active');
  });
}

addPopupClass(buttonElements);
addPopupClass(closeElements);

// close popup
popupFormOuterEl.addEventListener('mouseup', function (e) {
  if (e.target != this) {
    return;
  }
  if (this.classList.contains('popup-outer--active')) {
    this.classList.remove('popup-outer--active');
  }
  blurEl.classList.remove('is-blur');
  holdBody();
});

export { popupFormOuterEl, inputEls };
