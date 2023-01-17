import './style.css';
// import { retrieveData } from './modules/getApiData.js';
import allCategories from './modules/categoryApi.js';
import postLike from './modules/postLike.js';
import { getComment } from './modules/getComment.js';
import addComment from './modules/postComment.js';
import { openModal, closeModal, details } from './modules/popup.js';
import { scrollRight, scrollLeft } from './modules/scrollFunctionality.js';

document.querySelector('DOMContentLoaded', allCategories());
// document.querySelector('DOMContentLoaded', retrieveData('Miscellaneous'));
document.querySelector('#meal-container').addEventListener('click', (event) => {
  if (event.target.classList.contains('like-btn')) {
    postLike(event.target.parentElement.parentElement.parentElement.parentElement.id);
    event.target.parentElement.innerHTML = `<svg class="like-btn liked" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
    </svg>`;
  }
});

// open popup window
document.querySelector('#meal-container').addEventListener('click', (event) => {
  if (event.target.classList.contains('show-modal')) {
    const userId = event.target.parentElement.parentElement.parentElement.parentElement.id;
    openModal();
    details(userId);
    getComment(userId);
  }

  if (event.target.nodeName === 'IMG' || event.target.classList.contains('meal-title')) {
    const userId = event.target.parentElement.parentElement.id;
    openModal();
    details(userId);
    getComment(userId);
  }

  if (event.target.classList.contains('scroll-right')) {
    scrollRight(event.target);
  }

  if (event.target.classList.contains('scroll-left')) {
    scrollLeft(event.target);
  }

  if (event.target.classList.contains('category-dropdown')) {
    event.target.classList.toggle('rotate');
    event.target.parentElement.parentElement.querySelector('.category').classList.toggle('show');
    event.target.parentElement.classList.toggle('stick');
  }

  if (event.target.nodeName === 'H2') {
    event.target.querySelector('.category-dropdown').classList.toggle('rotate');
    event.target.parentElement.querySelector('.category').classList.toggle('show');
    event.target.classList.toggle('stick');
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
  document.querySelector('#addCommentForm #submit').disabled = false;
});

// close popup window
document.querySelector('.close-modal').addEventListener('click', closeModal);
document.querySelector('.overlay').addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !document.querySelector('.modal').classList.contains('hidden')) { closeModal(); }
});

document.querySelector('.modal').addEventListener('click', (event) => {
  if (event.target.nodeName === 'SUMMARY') {
    document.querySelector('.modal .dropdown').classList.toggle('rotate');
  }
  if (event.target.id === 'summary') {
    document.querySelector('.modal .dropdown').classList.toggle('rotate');
  }

  if (event.target.classList.contains('dropdown')) {
    event.target.classList.toggle('rotate');
  }
});
