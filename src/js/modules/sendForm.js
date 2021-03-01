import { popupFormOuterEl, popupFormEl, inputEls } from './common';

// send form (fetch)

async function handleFormSubmit(e) {
  e.preventDefault();
  e.stopPropagation();
  const form = e.currentTarget;
  const url = form.action;
  const formData = new FormData(form);

  try {
    await fetch(url, {
      method: 'POST',
      body: formData,
    });
    popupFormOuterEl.classList.add('popup-outer--thanks');
    inputEls.forEach((inputEl) => {
      inputEl.parentElement.classList.remove('input-change');
    });
    form.reset();
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

popupFormEl.addEventListener('submit', handleFormSubmit);
