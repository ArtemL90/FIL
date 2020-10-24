// animate header with scroll
const containerEl = document.querySelector('body');
const headerEl = document.querySelector('.js_header');

containerEl.addEventListener('scroll', function() {
    if(this.scrollTop > 0 ) {
        if(headerEl.classList.contains('header--scroll')) {
            return;
        }
        headerEl.classList.add('header--scroll');
    }else {
        headerEl.classList.remove('header--scroll');
    }
})