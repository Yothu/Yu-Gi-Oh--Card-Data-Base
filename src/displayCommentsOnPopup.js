import getComments from './getComments.js';

const createDisplayComment = ({ user, comment }) => {
  const commentElement = document.createElement('p');
  commentElement.innerHTML = `${user}: ${comment}`;
  return commentElement;
};

const displayCommentsOnPopup = async (id, commentsContainer) => {
  const commentArray = await getComments(id);

  if (commentArray) {
    for (let i = 0; i < commentArray.length; i += 1) {
      const commentElement = createDisplayComment(commentArray[i]);
      commentsContainer.appendChild(commentElement);
    }
  }
};

export default displayCommentsOnPopup;