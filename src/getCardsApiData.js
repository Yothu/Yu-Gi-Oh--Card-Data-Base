const getCardsApiData = async (url) => {
  const response = await fetch(url);
  console.log('response:', await response);
  const data = await response.json();
  console.log('data:', data);
  console.log('Card array:', data.data);
  console.log('Card:', data.data[0]);
  console.log('Card quantity:', data.data.length);
  console.log('id:', data.data[0].id);
  console.log('name:', data.data[0].name);
  console.log('type:', data.data[0].type);
  console.log('description:', data.data[0].desc);
  console.log('race:', data.data[0].race);
  console.log('Image:', data.data[0].card_images[0].image_url);

  const spells = [];
  data.data.forEach(card => {
    if (card.type === 'Spell Card') {
      spells.push(card);
    }
  });
  console.log(spells);

  const monsters = [];
  data.data.forEach(card => {
    if (card.type === 'Normal Monster') {
      monsters.push(card);
    }
  });
  console.log(monsters);

  const traps = [];
  data.data.forEach(card => {
    if (card.type === 'Trap Card') {
      traps.push(card);
    }
  });
  console.log(traps);

}

export default getCardsApiData;