import displayCommentsOnPopup from './displayCommentsOnPopup.js';
import createComment from './createComment.js';
import commentDataIsValid from './checkCommentData.js';
import removeHTMLComments from './deleteComments.js';
import popupCommentCounter from './commentCounter.js';

const displayCommentpopup = (id, name, type, description, race, image) => {
  const popUpOuterContainer = document.createElement('div');
  popUpOuterContainer.classList.add('pop-up-background', 'd-flex', 'justify-content-center');

  popUpOuterContainer.innerHTML = `
    <div class="pop-up-container m-3 border border-3 text-align-center">
      <div class="popupImageContainer d-flex flex-column p-3 align-items-center">
        <a href="#" class="align-self-end"><img class="cross-pop p-1" alt="cross-icon" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/344/external-close-cross-symbol-for-discontinued-and-invalid-basic-bold-tal-revivo.png"></a>
        <img class="y-card" alt="card-image" src="${image}">
      </div>
      <hr>
      <div class="p-3">
        <div class="name-container d-flex align-items-center">
          <p class="text-white pe-3">Name:</p>
          <p class="text-white font-matrix-regular-small-caps font-50px">${name}</p>
        </div>
        <div class="type-container d-flex align-items-center">
          <p class="text-white pe-3">Type:</p>
          <p class="text-white font-itc-stone-serif-small-caps-bold font-25px">${type}</p>
        </div>
        <div class="race-container d-flex align-items-center">
          <p class="text-white pe-3">Race:</p>
          <p class="text-white font-matrix-book font-25px">${race}</p>
        </div>
        <div class="description-container d-flex">
          <p class="text-white font-itc-stone-serif-it-italic font-20px">${description}</p>
        </div>
      </div>
      <hr>
      <div class="popup-comment-section d-flex flex-column align-items-start px-3">
        <h4 class="comments-container-title align-self-center text-white font-30px">Comments</h4>
        <div class="popup-comments-container p-3 d-flex flex-column align-self-stretch"></div>
      </div>
      <hr>
      <div class="popup-comments-form-container d-flex flex-column p-3">
        <h4 class="align-self-center text-white font-30px">Add a comment!</h4>
        <div class="popup-comments-form d-flex flex-column p-3">
          <input type="text" class="comment-user mb-3 w-50" name="contact-user" placeholder="Username" maxlength="30" required>
          <textarea class="comment-message mb-3" name="contact-message" placeholder="Your insights" maxlength="500" required></textarea>
          <button type="button" class="add-comment-btn align-self-start">Post Comment</button> 
        </div>
      </div>
    </div>
  `;

  const popComCnt = popUpOuterContainer.querySelector('.popup-comments-container');

  (async () => {
    await displayCommentsOnPopup(id, popComCnt);
    popupCommentCounter(popComCnt);
  })();

  const popupCross = popUpOuterContainer.querySelector('.cross-pop');
  popupCross.addEventListener('click', () => {
    popUpOuterContainer.remove();
  });

  const addCommentBtn = popUpOuterContainer.querySelector('.add-comment-btn');
  addCommentBtn.addEventListener('click', () => {
    const commentUser = popUpOuterContainer.querySelector('.comment-user').value;
    const commentMessage = popUpOuterContainer.querySelector('.comment-message').value;

    (async () => {
      if (commentDataIsValid(commentUser, commentMessage)) {
        await createComment(id, commentUser, commentMessage);
        removeHTMLComments();
        await displayCommentsOnPopup(id, popComCnt);
        popUpOuterContainer.querySelector('.comment-user').value = '';
        popUpOuterContainer.querySelector('.comment-message').value = '';
        popupCommentCounter(popComCnt);
      }
    })();
  });

  const cardsContainer = document.getElementById('list-container');
  cardsContainer.appendChild(popUpOuterContainer);
};

export default displayCommentpopup;
