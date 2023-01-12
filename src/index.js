import './style.css';
// import { retrieveData } from './modules/getApiData.js';
import allCategories from './modules/categoryApi.js';
import postLike from './modules/postLike.js';
import { getComment } from './modules/getComment.js';
import addComment from './modules/postComment.js';
import { openModal, closeModal, details } from './modules/popup.js';

document.querySelector('DOMContentLoaded', allCategories());
// document.querySelector('DOMContentLoaded', retrieveData('Miscellaneous'));
document.querySelector('#meal-container').addEventListener('click', (event) => {
  if (event.target.nodeName === 'svg') {
    console.log(event.target.parentElement.parentElement.parentElement.id);
    postLike(event.target.parentElement.parentElement.parentElement.id);
  }
});

// open popup window
document.querySelector('#meal-container').addEventListener('click', (event) => {
  if (event.target.classList.contains('show-modal')) {
    console.log(event.target);
    const userId = event.target.parentElement.id;
    openModal();
    details(userId);
    getComment(userId);
  }

  if (event.target.classList.contains('scroll-right')) {
    const category = event.target.parentElement.querySelector('.category');
    const elementWidth = (parseFloat(window.getComputedStyle(category).width));
    category.scrollLeft += elementWidth;
  }

  if (event.target.classList.contains('scroll-left')) {
    const category = event.target.parentElement.querySelector('.category');
    const elementWidth = (parseFloat(window.getComputedStyle(category).width));
    category.scrollLeft += -elementWidth;
  }
});

// Post form details
document.querySelector('form').addEventListener('submit', async (event) => {
  event.preventDefault();
  document.querySelector('#addCommentForm #submit').disabled = true;
  const userId = document.querySelector('#meal-details').className;
  const userName = document.querySelector('#name').value;
  const userComment = document.querySelector('#comment').value;
  await addComment(userId, userName, userComment);
  await getComment(userId);
  document.querySelector('#addCommentForm #submit').disabled = false;
});

// close popup window
document.querySelector('.close-modal').addEventListener('click', closeModal);
document.querySelector('.overlay').addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !document.querySelector('.modal').classList.contains('hidden')) { closeModal(); }
});
