const appCode = 'oY7NrmeQIcmEQ8n2GjZY';

const getComments = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appCode}/comments?item_id=${id}`;
  const response = await fetch(url);

  if (response.status === 200) {
    return response.json();
  }

  return false;
};

getComments(11714098);

export default getComments;
