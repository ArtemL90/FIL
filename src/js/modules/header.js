import {
  headerEl,
  navBackgrs,
  navEls,
  menuBtnEl,
  containerEl,
} from './common';
import { locoScrollPlugin, holdBody } from './animation';
// header
let page;

// add scroll class to header with loco scroll plugin
locoScrollPlugin.on('scroll', (e) => {
  if (e.scroll.y > 0) {
    if (headerEl.classList.contains('header--scroll')) {
      return;
    }
    headerEl.classList.add('header--scroll');
  } else {
    headerEl.classList.remove('header--scroll');
  }
});

// popup menu
function addActiveMenuBackgr() {
  for (let i = 0; i < navBackgrs.length; i += 1) {
    const newPage = navBackgrs[i].getAttribute('data-page');
    const navBackgrsParent = navBackgrs[i].parentNode;
    navBackgrsParent.children[i].classList.remove('active');
    if (page === newPage) {
      navBackgrs[i].classList.add('active');
    }
  }
}
// shine lnk
function shineNavLnk(currentPage) {
  page = currentPage.getAttribute('data-page-name');
  for (let i = 0; i < navEls.length; i += 1) {
    const newPage = navEls[i].getAttribute('data-page');
    const navElsParent = navEls[i].parentNode;
    navElsParent.children[i].classList.remove('active-nav-el');
    if (page === newPage) {
      navEls[i].classList.add('active-nav-el');
    }
  }
  addActiveMenuBackgr();
}
shineNavLnk(containerEl);
// open hidden nav menu
menuBtnEl.addEventListener('click', () => {
  holdBody();
  if (headerEl.classList.contains('header--active')) {
    headerEl.classList.remove('header--active');
  } else {
    headerEl.classList.add('header--active');
  }
});

// add background hover nav
navEls.forEach((navEl) => {
  navEl.addEventListener('mouseenter', (e) => {
    if (headerEl.classList.contains('header--active')) {
      page = e.target.getAttribute('data-page');
      addActiveMenuBackgr();
    }
  });
  navEl.addEventListener('mouseleave', () => {
    if (headerEl.classList.contains('header--active')) {
      page = containerEl.getAttribute('data-page-name');
      addActiveMenuBackgr();
    }
  });
  navEl.addEventListener('click', () => {
    if (headerEl.classList.contains('header--active')) {
      headerEl.classList.remove('header--active');
      holdBody();
    }
  });
});

export { shineNavLnk as default };
