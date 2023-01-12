import { categoryCounter } from './itemsCounter.js';
import { retrieveData } from './getApiData.js';

let totalMealCount = 0;

// Get meal categories
export default async () => {
  fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then((response) => response.json())
    .then((json) => {
      json.meals.forEach((cat) => {
        document.querySelector('#meal-container').innerHTML += `<div id='${cat.strCategory}' class='category-container'><h2>${cat.strCategory}</h2> <div class = 'category'></div> <button class='scroll-right'>❯</button> <button class='scroll-left'>❮</button> </div>`;
      });
    })
    .then(() => {
      document.querySelector('#meal-categories').innerHTML += ` (${categoryCounter()})`;
      const categoryDivs = document.querySelector('#meal-container').childNodes;
      categoryDivs.forEach(async (category) => {
        await retrieveData(category.id);
        const categoryHeader = document.getElementById(category.id).querySelector('h2');
        const mealCount = document.getElementById(category.id).querySelector('.category').childElementCount;
        categoryHeader.innerHTML += ` (${mealCount})`;
        totalMealCount += mealCount;
        document.querySelector('#total-items').innerHTML = `Meals (${totalMealCount})`;
      });
    });
};