import { apiID } from './getApiData.js';

export const commentCounter = () => {
  const counter = document.querySelector('#comments-container').childElementCount;
  return counter;
};

export const getComment = async (id) => {
  try {
    await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiID}/comments?item_id=${id}`,
    )
      .then((response) => response.json())
      .then((json) => {
        document.getElementById('comments-container').innerHTML = '';
        json.forEach((i) => {
          const comment = document.createElement('div');
          comment.innerHTML += `<span class="user">${i.username}</span><div class="user-comment">${i.comment}<br><span class="comment-date">${i.creation_date}</span></div>`;
          const commentElement = document.createElement('div');
          const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>`;
          commentElement.innerHTML = icon;
          commentElement.appendChild(comment);

          // Append the comment to the comments container
          document.getElementById('comments-container').appendChild(commentElement);
        });
        document.getElementById('comment-header').innerHTML = `COMMENTS (${commentCounter()}) `;
      });
  } catch {
    document.getElementById('comments-container').innerHTML = '';
    document.getElementById('comment-header').innerHTML = 'COMMENTS (0)';
  }
};
