const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

export const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

export const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

export const details = async (id) => {
  // Clear image src
  document.querySelector('#modal-img').src = '';

  // Fetcth data from API
  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json())
    .then((json) => {
      // Declaring Variables to be used
      const img = document.getElementById(id).querySelector('img').src;
      const name = `<h1>${json.meals[0].strMeal}</h1>`;
      const origin = `<span>Origin Location: </span> <span>${json.meals[0].strArea}</span>`;
      const category = `<span>Category: </span> <span>${json.meals[0].strCategory}</span>`;
      const ingredientsArr = [];
      const allIngredients = Object.keys(json.meals[0]).filter((key) => key.includes('strIngredient'));
      allIngredients.forEach((ing) => {
        if (json.meals[0][ing]) { ingredientsArr.push(json.meals[0][ing]); }
      });
      const ingredients = `<span>Ingredients: </span> <span>${ingredientsArr.join(', ')}.</span>`;
      const instructions = `<p><h2>Instructions</h2> <span>${json.meals[0].strInstructions}</span></p>`;

      // Adding variables to DOM
      const mealDetails = document.querySelector('#meal-details');
      mealDetails.innerHTML = '';
      mealDetails.className = id;
      document.querySelector('#modal-img').src = img;
      mealDetails.innerHTML += name;
      const subDetails = document.createElement('div');
      subDetails.className = 'sub-details';
      subDetails.innerHTML += origin;
      subDetails.innerHTML += category;
      subDetails.innerHTML += ingredients;
      if (json.meals[0].strYoutube) {
        const youTube = `<span>Youtube: </span> <span>${json.meals[0].strYoutube}</span>`;
        subDetails.innerHTML += youTube;
      }
      mealDetails.appendChild(subDetails);
      mealDetails.innerHTML += instructions;
    });
};