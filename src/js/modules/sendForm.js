import {popupFormOuterEl, inputEls} from './popup'

const popupFormEl = document.querySelector('.js_popup-request');

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.currentTarget;
    const url = form.action;
    const formData = new FormData(form);
    
    try {
        const request = await fetch(url, {
            method: 'POST',
            body: formData
        });

        form .reset();
        popupFormOuterEl.classList.add('popup-outer--thanks');
        for(let inputEl of inputEls) {
            inputEl.parentElement.classList.remove('input-change');
        };
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

popupFormEl.addEventListener('submit', handleFormSubmit);
