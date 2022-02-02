const removeHTMLComments = () => {
  const commentContainer = document.querySelector('.popup-comments-container');
  commentContainer.innerHTML = '';
};

export default removeHTMLComments;
