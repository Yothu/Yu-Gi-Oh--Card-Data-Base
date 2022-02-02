const appCode = 'oY7NrmeQIcmEQ8n2GjZY';
const baseUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appCode}/comments`;

const getComUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appCode}/comments?item_id=11714098`;

const getComments = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appCode}/comments?item_id=${id}`;
  const response = await fetch(url);

  const data = await response.json();

  if (data.error === undefined) {
    return data;
  }

  return false;
};

const createComment = async (url, id, user, comment) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      item_id: `${id}`,
      username: `${user}`,
      comment: `${comment}`,
    }),
  });
  // console.log('asd:', await response);
  // console.log('createCommentResult:', await response.json());
};

// console.log('getComments Module');

// createComment(baseUrl, '11714098', 'John Carmack', '2 nice 2 be true');
getComments(11714098);

export default getComments;
