import countCards from './countCards.js';

const updateCardCounter = () => {
  const countedCards = countCards();
  const cardsCounter = document.getElementById('cards-counter');
  cardsCounter.textContent = `Cards shown: ${countedCards}`;
};

export default updateCardCounter;