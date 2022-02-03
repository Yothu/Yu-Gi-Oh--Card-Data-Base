/**
 * @jest-environment jsdom
 */

import countCards from '../countCards.js';

describe('Test the counter of displayed cards on homepage', () => {
  test('Inside the #list-container, there are 3 .card elements, countCard() counts them and returns 3', () => {
    // ARRANGE
    document.body.innerHTML = `
        <div class="main-section">
          <div id="list-container">
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
          </div>
        </div>
        `;
    // ACT
    const cardCounter = countCards();
    // ASSERT
    expect(cardCounter).toBe(3);
  });
});