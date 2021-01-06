// custom cursor 

// set position 
function setPosition(element, e) {
    let x = e.clientX;
    let y = e.clientY;
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
}

function addCustomCursor() {
    const areaEls = document.querySelectorAll('.js_swipe-area');
    const lnkEls = document.querySelectorAll('a');
    const cursorEl = document.querySelector('.js_cursor');
    let areaEl;
    let dataVal;
    let cursorActiveFlag = true;
    let areaElFlag = true;
    function showCustomCursor(parent) {
        if(cursorActiveFlag) {
            parent.style.cursor = 'none';
            if(parent.classList.contains('js_main-slider')) {
                cursorEl.classList.add('cursor--light');
            }else {
               cursorEl.classList.add('cursor--dark');
            }
            dataVal = parent.getAttribute('data-text');
            cursorEl.innerHTML = dataVal;
            return cursorActiveFlag = false; 
        };
        return;
    };
    function  hideCustomCursor(parent) {
        if(!cursorActiveFlag) {
            cursorEl.className = 'cursor circle-el js_cursor';
            cursorActiveFlag = true;
            if(parent !== undefined) {
                parent.style.cursor = 'auto';
            }
        }
        return;
    }
    document.addEventListener('mousemove', (e) => {
        setPosition(cursorEl, e)
    });
    areaEls.forEach(item => {
        item.addEventListener('mousemove', () => {
            areaEl = item
            showCustomCursor(areaEl);
            areaElFlag = false;      
        });
        item.addEventListener('mouseout', () => {
           if(!areaElFlag) {
               hideCustomCursor(areaEl);
               return areaElFlag = true;
           }
           return;
        });

    });
    document.addEventListener('wheel', (e) => {
       let containerEl = document.elementFromPoint(e.x, e.y);
       if(containerEl.classList.contains('js_swipe-area')) {
            showCustomCursor(containerEl);
            areaElFlag = false; 
       }else {
            if(!areaElFlag) {
                containerEl.style.cursor = 'auto';
                cursorEl.className = 'cursor circle-el js_cursor';
                areaElFlag = true;
            };
            cursorActiveFlag = true;
       }
    });
    document.addEventListener('mousedown', (e) => {
        if(!cursorActiveFlag) {
            cursorEl.classList.add('cursor--active');
            if(cursorEl.classList.contains('cursor--inactive')) {
                cursorEl.classList.remove('cursor--inactive');
            };
        }
    });
    document.addEventListener('mouseup', (e) => {
        if(!cursorActiveFlag) {
            cursorEl.classList.add('cursor--inactive');
            if(cursorEl.classList.contains('cursor--active')) {
                cursorEl.classList.remove('cursor--active');
            };
        }
    });
    lnkEls.forEach(lnkEl => {
        lnkEl.addEventListener('click', () => {
            if(!areaElFlag) {
                hideCustomCursor(areaEl);
                return areaElFlag = true;
            }
            return;
        })
    });
}
addCustomCursor();
export { addCustomCursor };