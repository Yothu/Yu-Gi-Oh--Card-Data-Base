/**
 * @jest-environment jsdom
 */

import updateCardCounter from '../updateCardCounter.js'

describe('Test the counter of displayed cards on homepage', () => {
    test(`Inside the #list-container, there are 4 .card elements, #cards-counter displays 'Cards shown : 4'`, () => {
        //ARRANGE
        document.body.innerHTML = `
        <p id="cards-counter"></p>

        <div class="main-section">
          <div id="list-container">
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
          </div>
        </div>
        `;
        //ACT
        updateCardCounter();
        const cardsCounter = document.getElementById('cards-counter');
        const countedCards = cardsCounter.textContent;
        //ASSERT
        expect(countedCards).toBe('Cards shown: 4');
    });
});