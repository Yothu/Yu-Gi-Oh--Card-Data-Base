import getComments from './getComments.js';

// eslint-disable-next-line camelcase
const createDisplayComment = ({ username, comment }, date) => {
  const commentElement = document.createElement('p');
  commentElement.classList.add('text-white');
  commentElement.innerHTML = `${date} ${username}: ${comment}`;
  return commentElement;
};

const displayCommentsOnPopup = async (id, commentsContainer) => {
  const commentArray = await getComments(id);

  if (commentArray) {
    for (let i = 0; i < commentArray.length; i += 1) {
      const commentElement = createDisplayComment(commentArray[i], commentArray[i].creation_date);
      commentsContainer.appendChild(commentElement);
    }
  }
};

export default displayCommentsOnPopup;