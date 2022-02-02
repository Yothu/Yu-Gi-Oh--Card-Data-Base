const createComment = async (url, id, user, comment) => {
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
