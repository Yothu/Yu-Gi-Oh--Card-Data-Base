import apiCode from './apiCode.js';

const URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiCode}/likes/`;

let likesPerCard = [];

const getLikes = async () => {
  likesPerCard = [];
  const response = await fetch(`${URL}`);
  const data = await response.json();
  data.forEach((obj) => {
    likesPerCard.push(
      {
        item_id: obj.item_id,
        likes: obj.likes,
      },
    );
  });
  return likesPerCard;
};

const addLike = async (objCardId) => {
  await fetch(`${URL}`, {
    method: 'POST',
    body: JSON.stringify(objCardId),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  await getLikes();

  let cardLikes = 0;
  likesPerCard.forEach((obj) => {
    if ((objCardId.item_id) === obj.item_id) {
      cardLikes = obj.likes;
    }
  });

  const cardID = objCardId.item_id;
  const cardToUpdate = document.getElementById(`card-${cardID}`);
  cardToUpdate.querySelector('.likes-counter').textContent = `
  ${cardLikes}
  `;
};

export {
  getLikes, addLike,
};