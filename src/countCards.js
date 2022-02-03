const countCards = () => {
  const cardsShown = document.querySelectorAll('.card');
  return cardsShown.length;
};

export default countCards;