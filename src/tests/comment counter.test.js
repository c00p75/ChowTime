/* @jest-environment jsdom */

import { commentCounter } from '../modules/getComment.js';

document.body.innerHTML = `
<div id="comments-container">
<p>2023-01-05 vbbfmfbn : dfnfjnjnjv n vvnvsd</p>
<p>2023-01-05 fkf: fefnfm </p>
</div>
`;

describe('Counting number of comments in comments container', () => {
  test('Update comments count', () => {
    expect(commentCounter()).toBe(2);
  });

  test('Update comments count', () => {
    document.body.innerHTML = `
  <div id="comments-container"></div>
  `;
    expect(commentCounter()).toBe(0);
  });
});
