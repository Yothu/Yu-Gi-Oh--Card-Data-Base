import appCode from './apiCode.js';

const getComments = async (id) => {
  try {
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appCode}/comments?item_id=${id}`;
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    }
    return false;
  } catch (error) {
    return false;
  }
};

export default getComments;
