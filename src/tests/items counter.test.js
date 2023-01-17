/* @jest-environment jsdom */

import { categoryCounter } from '../modules/itemsCounter.js';

describe('Provide count for number of categories items loaded on the homepage in navigation bar', () => {
  test('Retrieve number of categories', () => {
    document.body.innerHTML = '<div id="meal-container"></div>';
    expect(categoryCounter()).toEqual(0);
  });

  test('Retrieve number of categories', () => {
    document.body.innerHTML = '<ul><li id="all-movies">All Movies</li></ul>';
    document.body.innerHTML = '<div id="meal-container"> <div>Chicken</div> <div>Beef</div> </div>';
    expect(categoryCounter()).toEqual(2);
  });
});