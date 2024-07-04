import {sidebarMenu} from "./side-menu.js";

const feedbackFormContainer = document.querySelector('.feedback-container');
const feedbackButtonSidebar = document.querySelector('.button--opened-chat');
const feedbackButtonNav = document.querySelector('.round-button--chat');
const closeButton = document.querySelector('.feedback-button');
const whiteBackground = document. querySelector('.page-spacer');

const openFeedbackForm = function () {
    feedbackFormContainer.classList.remove('feedback-container');
    feedbackFormContainer.classList.add('feedback-container--opened');
    sidebarMenu.classList.remove('sidebar-container--opened');
    sidebarMenu.classList.add('sidebar-container');
    whiteBackground.classList.remove('page-spacer');
    whiteBackground.classList.add('page-spacer--opened');
};

const closeFeedbackForm = function () {
  feedbackFormContainer.classList.remove('feedback-container--opened');
  feedbackFormContainer.classList.add('feedback-container');
  whiteBackground.classList.remove('page-spacer--opened');
  whiteBackground.classList.add('page-spacer');
}

feedbackButtonSidebar.addEventListener('click', openFeedbackForm);
feedbackButtonNav.addEventListener('click', openFeedbackForm);
closeButton.addEventListener('click', closeFeedbackForm);
whiteBackground.addEventListener('click', closeFeedbackForm);
