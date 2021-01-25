import { holdBody } from './animation.js';

const buttonElements = document.querySelectorAll('.js_popup-btn');
const closeElements = document.querySelectorAll('.js_close-btn');
const popupFormOuterEl = document.querySelector('.js_popup-outer');
const inputEls = document.querySelectorAll('.js_popup-input');
const blurEl = document.querySelector('.js_blur');

function addPopupClass(elementParent) {
    for(let element of elementParent) {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            holdBody();
            if(popupFormOuterEl.classList.contains('popup-outer--active')) {
                if(popupFormOuterEl.classList.contains('popup-outer--active')) {
                    popupFormOuterEl.classList.remove('popup-outer--active');
                }
                blurEl.classList.remove('is-blur');
                return
            }
            popupFormOuterEl.classList.remove('popup-outer--thanks');
            popupFormOuterEl.classList.add('popup-outer--active');
            blurEl.classList.add('is-blur'); 
        });    
    }
};

for(let inputEl of inputEls) {
    inputEl.addEventListener('mouseleave',(e) => {
        inputEl.parentElement.classList.remove('popup-request__itm-outer--active')
        if(e.target.value.length) {
            e.target.parentElement.classList.add('input-change')
            return;
        }
        e.target.parentElement.classList.remove('input-change');
    });
    inputEl.addEventListener('click',(e) => {
        e.target.parentElement.classList.remove('input-change');
        e.target.parentElement.classList.add('popup-request__itm-outer--active');
    });
};

addPopupClass(buttonElements);
addPopupClass(closeElements)

popupFormOuterEl.addEventListener('mouseup',function (e){ 
    if (e.target != this) {
         return;
    } 
    if(this.classList.contains('popup-outer--active')) {
        this.classList.remove('popup-outer--active');
    }
    blurEl.classList.remove('is-blur');
    holdBody();              
});

export {popupFormOuterEl, inputEls};