import { apiID } from './getApiData.js';

export default async (item) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiID}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `${item}`,
    }),
  })
    .then(() => {
      document.getElementById(`${item}`).querySelector('.likes-count').innerHTML = +document.getElementById(`${item}`).querySelector('.likes-count').innerHTML + 1;
    });
};
