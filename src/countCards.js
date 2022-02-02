const countCards = () => {
    const cardsShown = document.querySelectorAll('.card');
    console.log(cardsShown);
    return cardsShown.length;
}

export default countCards;