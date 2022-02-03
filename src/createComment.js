import appCode from './apiCode.js';

const createComment = async (id, user, comment) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appCode}/comments`;

  await fetch(url, {
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
};

export default createComment;
