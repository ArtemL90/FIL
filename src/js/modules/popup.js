import {
  closeBtns,
  footerBtn,
  popupOuterEl,
  popupFormOuterEl,
  inputEls,
  blurEl,
} from './common';
import { holdBody } from './animation';
import {
  updateCustomCursor,
} from './custom-cursor';
// popup form
// open popup
function hidePopup() {
  popupOuterEl.classList.remove('popup-outer--active');
  blurEl.classList.remove('is-blur');
  holdBody();
}

closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    hidePopup();
  });
});
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
function addPopubBtn(buttonElement) {
  buttonElement.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    popupFormOuterEl.classList.remove('popup-outer--thanks');
    popupOuterEl.classList.add('popup-outer--active');
    blurEl.classList.add('is-blur');
    updateCustomCursor();
    holdBody();
  });
}
addPopubBtn(footerBtn);

popupOuterEl.addEventListener('mouseup', (e) => {
  if (e.target === popupOuterEl) {
    hidePopup();
  }
});

export { popupFormOuterEl, inputEls, addPopubBtn };
