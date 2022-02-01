const traps = [];
const monsters = [];
const spells = [];

const getCardsApiData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  data.data.forEach((card) => {
    if (card.type === 'Spell Card') {
      spells.push(card);
    }
  });

  data.data.forEach((card) => {
    if (card.type === 'Normal Monster') {
      monsters.push(card);
    }
  });

  data.data.forEach((card) => {
    if (card.type === 'Trap Card') {
      traps.push(card);
    }
  });
};

export {
  getCardsApiData, monsters, traps, spells,
};