const sidebarMenu = document.querySelector('.sidebar-container');
const openButton = document.querySelector('.menu-item--burger');
const closeButton = document.querySelector('.navigation-header--close-image');

const openSidebarMenu = function () {
  console.log('click')
  if (sidebarMenu.classList.contains('sidebar-container')) {
    sidebarMenu.classList.remove('sidebar-container')
    sidebarMenu.classList.add('sidebar-container--opened')
  } else {
    sidebarMenu.classList.remove('sidebar-container--opened')
    sidebarMenu.classList.add('sidebar-container')
  }
};

const closeSidebarMenu = function () {
  if (sidebarMenu.classList.contains('sidebar-container--opened')) {
    sidebarMenu.classList.remove('sidebar-container--opened')
    sidebarMenu.classList.add('sidebar-container')
  }
};

const resizeScreenWidth = function (event) {
  if (event.target.innerWidth > 1440) {
    if (sidebarMenu.classList.contains('sidebar-container--opened')) {
      sidebarMenu.classList.remove('sidebar-container--opened')
      sidebarMenu.classList.add('sidebar-container')
    }
  }
};

const clickOnWindow = function (event) {
  if (
    sidebarMenu.classList.contains('sidebar-container--opened') &&
    event.pageX > 320
  ) {
    sidebarMenu.classList.remove('sidebar-container--opened')
    sidebarMenu.classList.add('sidebar-container')
  }
};

openButton.addEventListener('click', openSidebarMenu);
closeButton.addEventListener('click', closeSidebarMenu);
window.addEventListener('click', clickOnWindow);
window.addEventListener('resize', resizeScreenWidth);
