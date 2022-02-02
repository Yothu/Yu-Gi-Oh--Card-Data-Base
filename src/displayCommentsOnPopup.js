import getComments from './getComments.js';

const createDisplayComment = ({ username, comment }, date) => {
  const commentElement = document.createElement('div');
  commentElement.classList.add('d-flex', 'p-2', 'text-white', 'flex-column');

  const commentDate = document.createElement('p');
  commentDate.classList.add('text-white', 'font-15px', 'm-0', 'px-1', 'order-1');
  commentDate.innerHTML = `${date}`;
  commentElement.appendChild(commentDate);

  const commentName = document.createElement('p');
  commentName.classList.add('text-white', 'font-20px', 'm-0', 'px-1', 'order-0', 'font-itc-stone-serif-small-caps-bold');
  commentName.innerHTML = `${username}`;
  commentElement.appendChild(commentName);

  const commentComment = document.createElement('p');
  commentComment.classList.add('text-white', 'font-18px', 'm-0', 'px-1', 'order-2', 'font-itc-stone-serif-it-italic');
  commentComment.innerHTML = `${comment}`;
  commentElement.appendChild(commentComment);

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