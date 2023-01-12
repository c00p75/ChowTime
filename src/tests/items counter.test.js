/* @jest-environment jsdom */

import { movieIDs } from '../modules/retrieve movie data.js';
import itemCounter from '../modules/items counter.js';

jest.mock('../modules/retrieve movie data.js');

describe('Provide count for number of movie items loaded on the homepage in navigation bar', () => {
  test('Retrieve number of items in movie IDs array', () => {
    document.body.innerHTML = '<ul><li id="all-movies">All Movies</li></ul>';
    itemCounter();
    const count = document.querySelector('#all-movies').innerHTML;
    expect(count).toEqual('All Movies (0)');
  });

  test('Retrieve number of items in movie IDs array', () => {
    document.body.innerHTML = '<ul><li id="all-movies">All Movies</li></ul>';
    movieIDs.push('661374');
    itemCounter();
    const count = document.querySelector('#all-movies').innerHTML;
    expect(count).toEqual('All Movies (1)');
  });

  test('Retrieve number of items in movie IDs array', () => {
    document.body.innerHTML = '<ul><li id="all-movies">All Movies</li></ul>';
    movieIDs.push('661374', '877269', '436270', '899112');
    itemCounter();
    const count = document.querySelector('#all-movies').innerHTML;
    expect(count).toEqual('All Movies (5)');
  });
});