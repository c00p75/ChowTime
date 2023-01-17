// API ID
export const apiID = 'pYx7rzgo6Q89JrdGHIcu';

// Defining variable to store likes data
let likes;

export const likeData = async () => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiID}/likes/`)
    .then((response) => response.json())
    .then((json) => {
      try { likes = json; } catch { likes = null; }
    });
};

export const retrieveData = async (category) => {
  await likeData();
  const itemContainer = document.getElementById(`${category}`).querySelector('.category');
  itemContainer.innerHTML = '';
  await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((response) => response.json())
    .then((json) => {
      // Add meal counter
      let counter = 0;
      json.meals.forEach((i) => {
        // Creating meal item element
        const item = document.createElement('div');
        item.id = i.idMeal;
        item.className = 'meal-item-container';

        // Creating div element for meal data
        const itemData = document.createElement('div');
        itemData.className = 'item-data';

        // Meal img container
        const itemImg = document.createElement('div');
        itemImg.className = 'img-container';
        const imageObjectURL = i.strMealThumb;
        const image = new Image();
        image.src = imageObjectURL;
        itemImg.appendChild(image);
        item.appendChild(itemImg);

        // Increment counter
        counter += 1;
        const count = document.createElement('span');
        count.className = 'count';
        count.innerHTML = counter;
        itemImg.appendChild(count);

        // Retrieve item name
        const itemTitle = document.createElement('span');
        itemTitle.className = 'meal-title';
        itemTitle.innerHTML = i.strMeal;
        itemData.appendChild(itemTitle);

        const likesContainer = document.createElement('div');
        likesContainer.className = 'likes';
        likesContainer.innerHTML = `<span><svg class="like-btn" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg></span>`;

        // Add likes data to it's container
        const likesData = document.createElement('div');

        // Adding likes data to meal item in DOM
        try {
          const mealLikes = likes.find((arr) => arr.item_id === i.idMeal).likes;
          likesData.innerHTML += `<span class="likes-count">${mealLikes}</span> <span> Likes</span>`;
        } catch { likesData.innerHTML += '<span class="likes-count">0</span> <span> Likes</span>'; }

        likesContainer.appendChild(likesData);

        // Create comment button and append to body
        const commentBtn = document.createElement('span');
        commentBtn.innerHTML = `<svg class="comment-btn show-modal" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-square-text" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
      </svg>`;
        commentBtn.classList.add('show-modal');
        commentBtn.classList.add('comments');
        likesContainer.appendChild(commentBtn);

        // Append div with likes data to body
        itemData.appendChild(likesContainer);

        // Append div with meal data to body
        item.appendChild(itemData);

        // Append meal item to catgorgy container
        itemContainer.appendChild(item);
      });
    });
};