import {sidebarMenu} from "./side-menu.js";

const callFormContainer = document.querySelector('.call-container');
const callButtonSidebar = document.querySelector('.contact-buttons--call-image');
const callButtonNav = document.querySelector('.menu-item--call');
const closeButton = document.querySelector('.call-close-button');

const openCallForm = function () {
    callFormContainer.classList.remove('call-container');
    callFormContainer.classList.add('call-container--opened');
    sidebarMenu.classList.remove('sidebar-container--opened');
};

const closeCallForm = function () {
  callFormContainer.classList.remove('call-container--opened');
  callFormContainer.classList.add('call-container');
}

callButtonSidebar.addEventListener('click', openCallForm);
callButtonNav.addEventListener('click', openCallForm);
closeButton.addEventListener('click', closeCallForm);
