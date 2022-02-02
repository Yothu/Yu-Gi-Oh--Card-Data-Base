const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cOGEfAnTEwb10Y4bv0g7/likes/';

const getLikes = async (cardID) => {
  const response = await fetch(`${URL}`);
  const data = await response.json();
  let currentCardLikes = '0';
  data.some((obj) => {
    if (obj.item_id == cardID) {
      currentCardLikes = obj.likes;
    }
  });
  return currentCardLikes;
}

const addLike = async (objCardId) => {
  const response = await fetch(`${URL}`, {
    method: 'POST',
    body: JSON.stringify(objCardId),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const msg = await response.status;
  console.log(msg);
  const cardID = objCardId.item_id;
  const updatedLikes = await getLikes(cardID);
  const cardToUpdate = document.getElementById(`card-${cardID}`);
  cardToUpdate.querySelector('.likes-counter').textContent = `
  Likes: ${updatedLikes}
  `;
  console.log(cardToUpdate);
}

export {
  getLikes, addLike
};