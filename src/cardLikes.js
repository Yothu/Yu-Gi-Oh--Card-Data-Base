const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cOGEfAnTEwb10Y4bv0g7/likes/';

const getLikes = async () => {
  const response = await fetch(`${URL}`);
  const data = await response.json();
  console.log(data);
  const likesCount = data[0].likes;
  const itemID = data[0].item_id;
  console.log(likesCount, itemID);
  // return likesCount;
}

const addLike = async (cardID) => {
  const response = await fetch(`${URL}`, {
    method: 'POST',
    body: JSON.stringify(cardID),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const msg = await response.status;
  console.log(msg);
}

export {
  getLikes, addLike
};