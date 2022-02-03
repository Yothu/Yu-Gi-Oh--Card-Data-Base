const countCards = () => {
  const listContainer = document.querySelector('#list-container');
  const cardsShown = listContainer.querySelectorAll('.card');
  return cardsShown.length;
};

export default countCards;