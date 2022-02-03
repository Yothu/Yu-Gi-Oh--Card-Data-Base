const popupCommentCounter = (commentContainer) => {
  const comContTitle = document.querySelector('.comments-container-title');
  const comments = commentContainer.querySelectorAll(':scope > .comment-element');
  comContTitle.innerHTML = `Comments (${comments.length})`;
};

export default popupCommentCounter;
