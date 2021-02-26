import {
  buttonElements,
  closeElements,
  popupFormOuterEl,
  inputEls,
  blurEl,
} from './common';
import { holdBody } from './animation';
// popup form

// open popup
function addPopupClass(elementParent) {
  elementParent.forEach((element) => {
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
  });
}
// input anim
inputEls.forEach((inputEl) => {
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
});

addPopupClass(buttonElements);
addPopupClass(closeElements);

// close popup
popupFormOuterEl.addEventListener('mouseup', (e) => {
  if (e.target !== this) {
    return;
  }
  if (this.classList.contains('popup-outer--active')) {
    this.classList.remove('popup-outer--active');
  }
  blurEl.classList.remove('is-blur');
  holdBody();
});

export { popupFormOuterEl, inputEls };
