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

        // Creating div element for meal data
        const itemData = document.createElement('div');
        itemData.className = 'item-data';

        // Meal img container
        const itemImg = document.createElement('div');
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
        likesContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg>`;

        // Add likes data to it's container
        const likesData = document.createElement('div');

        // Adding likes data to meal item in DOM
        try {
          const mealLikes = likes.find((arr) => arr.item_id === i.idMeal).likes;
          likesData.innerHTML += `<span class="likes-count">${mealLikes}</span> <span> Likes</span>`;
        } catch { likesData.innerHTML += '<span class="likes-count">0</span> <span> Likes</span>'; }

        likesContainer.appendChild(likesData);

        // Append div with likes data to body
        itemData.appendChild(likesContainer);

        // Append div with meal data to body
        item.appendChild(itemData);

        // Create comment button and append to body
        const commentBtn = document.createElement('button');
        commentBtn.innerHTML = 'Comments';
        item.appendChild(commentBtn);
        commentBtn.classList.add('show-modal');

        // Append meal item to catgorgy container
        itemContainer.appendChild(item);
      });
    });
};