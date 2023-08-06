const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

export const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.querySelector('body').classList.add('freeze');
};

export const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  document.querySelector('body').classList.remove('freeze');
  document.getElementById('modal-img-container').innerHTML = '<img id="modal-img" src="" alt="Meal image">';
  document.querySelector('#name').innerHTML = '';
  document.querySelector('#comment').innerHTML = '';
};

export const details = async (id) => {
  // Clear image src
  document.querySelector('#modal-img').src = '';

  // Add image to modal
  const img = document.getElementById(id).querySelector('img').src;
  document.querySelector('#modal-img').src = img;

  // Fetcth data from API
  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json())
    .then((json) => {
      // Declaring Variables to be used
      if (json.meals[0].strYoutube) {
        document.getElementById('modal-img-container').innerHTML = `
        <h1>${json.meals[0].strMeal}</h1>
        <iframe src="${json.meals[0].strYoutube.replace('watch?v=', 'embed/')}" frameborder="0" allowfullscreen></iframe>
        `;
      }
      const ingredientsArr = [];
      const allIngredients = Object.keys(json.meals[0]).filter((key) => key.includes('strIngredient'));
      allIngredients.forEach((ing) => {
        if (json.meals[0][ing]) { ingredientsArr.push(json.meals[0][ing]); }
      });
      const ingredients = `<div class='ingredients'><span class="detail-heading">Ingredients: </span> <span class="detail-description">${ingredientsArr.join(', ')}.</span></div>`;
      const otherDetails = `
        <div class="other-details">
          <span class="detail-heading">Origin Location: </span> <span class="detail-description">${json.meals[0].strArea}</span>
          <span class="detail-heading">Category: </span> <span class="detail-description">${json.meals[0].strCategory}</span>
        </div>
      `;
      const instructions = `<details><summary><span class="dropdown">❯</span> Instructions</summary> <div>${json.meals[0].strInstructions}</div>  </details>`;

      // Adding variables to DOM
      const mealDetails = document.querySelector('#meal-details');
      mealDetails.innerHTML = '';
      mealDetails.className = id;
      const subDetails = document.createElement('div');
      subDetails.className = 'sub-details';
      subDetails.innerHTML += ingredients;
      subDetails.innerHTML += otherDetails;
      mealDetails.appendChild(subDetails);
      mealDetails.innerHTML += instructions;
    });
};