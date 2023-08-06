import { apiID } from './getApiData.js';
import { getComment } from './getComment.js';

const addComment = async (id, name, userComment) => {
  fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiID}/comments`,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username: name,
        comment: userComment,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  )
    .then(() => {
      const submitBtn = document.querySelector('#addCommentForm #submit');
      document.querySelector('#name').value = '';
      document.querySelector('#comment').value = '';
      getComment(id);
      submitBtn.disabled = false;
      submitBtn.style.opacity = 1;
      submitBtn.style.pointerEvents = 'all';
    });
};

export default addComment;
