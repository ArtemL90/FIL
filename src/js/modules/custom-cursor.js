import { cursorEl } from './common';

// set position
function setPosition(element, e) {
  const x = e.clientX;
  const y = e.clientY;
  const currentEl = element;
  currentEl.style.left = `${x}px`;
  currentEl.style.top = `${y}px`;
}

// custom cursor
function addCustomCursor() {
  if (window.screen.width <= 1024) {
    return;
  }
  const areaEls = document.querySelectorAll('.js_swipe-area');
  let areaEl;
  let dataVal;
  let cursorActiveFlag = true;
  let areaElFlag = true;
  function showCustomCursor(parent) {
    const currentParent = parent;
    if (cursorActiveFlag) {
      currentParent.style.cursor = 'none';
      if (currentParent.classList.contains('js_main-slider')) {
        cursorEl.classList.add('cursor--light');
      } else {
        cursorEl.classList.add('cursor--dark');
      }
      dataVal = currentParent.getAttribute('data-text');
      cursorEl.innerHTML = dataVal;
      cursorActiveFlag = false;
      return cursorActiveFlag;
    }
    return false;
  }
  function hideCustomCursor(parent) {
    const currentParent = parent;
    cursorEl.className = 'cursor circle-el js_cursor';
    cursorActiveFlag = true;
    if (currentParent !== undefined) {
      currentParent.style.cursor = 'auto';
    }
  }
  document.addEventListener('mousemove', (e) => {
    setPosition(cursorEl, e);
  });
  areaEls.forEach((item) => {
    item.addEventListener('mousemove', () => {
      areaEl = item;
      showCustomCursor(areaEl);
      areaElFlag = false;
    });
    item.addEventListener('mouseout', () => {
      if (!areaElFlag) {
        if (!cursorActiveFlag) {
          hideCustomCursor(areaEl);
          areaElFlag = true;
          return areaElFlag;
        }
      }
      return false;
    });
  });
  document.addEventListener('wheel', (e) => {
    const containerEl = document.elementFromPoint(e.x, e.y);
    if (containerEl.classList.contains('js_swipe-area')) {
      showCustomCursor(containerEl);
      areaElFlag = false;
    } else {
      if (!areaElFlag) {
        hideCustomCursor(areaEl);
        areaElFlag = true;
      }
      cursorActiveFlag = true;
    }
  });
  document.addEventListener('mousedown', () => {
    if (!cursorActiveFlag) {
      cursorEl.classList.add('cursor--active');
      if (cursorEl.classList.contains('cursor--inactive')) {
        cursorEl.classList.remove('cursor--inactive');
      }
    }
  });
  document.addEventListener('mouseup', () => {
    if (!cursorActiveFlag) {
      cursorEl.classList.add('cursor--inactive');
      if (cursorEl.classList.contains('cursor--active')) {
        cursorEl.classList.remove('cursor--active');
      }
    }
  });
}

function updateCustomCursor() {
  cursorEl.className = 'cursor circle-el js_cursor';
}

export { addCustomCursor, updateCustomCursor };
