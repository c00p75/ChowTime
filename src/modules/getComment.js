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
          const comment = `${i.creation_date} ${i.username}: ${i.comment}`;
          const commentElement = document.createElement('p');
          commentElement.innerText = comment;

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
