import displayCommentsOnPopup from './displayCommentsOnPopup.js';

const displayCommentpopup = (id, name, type, description, race, image) => {
  const popUpOuterContainer = document.createElement('div');
  popUpOuterContainer.classList.add('pop-up-background', 'd-flex', 'justify-content-center');

  popUpOuterContainer.innerHTML = `
    <div class="pop-up-container m-3 border border-3 text-align-center">
      <div class="popupImageContainer d-flex flex-column p-3 align-items-center">
        <img class="cross-pop p-1 align-self-end" alt="cross-icon" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/344/external-close-cross-symbol-for-discontinued-and-invalid-basic-bold-tal-revivo.png">
        <img class="y-card" alt="card-image" src="${image}">
      </div>
      <hr class="border border-3 border-dark">
      <div class="p-3">
        <div class="name-container d-flex align-items-center">
          <p class="text-white pe-3">Name:</p>
          <p class="text-white font-matrix-regular-small-caps font-50px">${name}</p>
        </div>
        <div class="type-container d-flex align-items-center">
          <p class="text-white pe-3">Type:</p>
          <p class="text-white font-itc-stone-serif-small-caps-bold font-35px">${type}</p>
        </div>
        <div class="race-container d-flex align-items-center">
          <p class="text-white pe-3">Race:</p>
          <p class="text-white font-matrix-book font-20px">${race}</p>
        </div>
        <div class="description-container d-flex">
          <p class="text-white font-itc-stone-serif-it-italic font-20px">${description}</p>
        </div>
      </div>
      <div class="popup-comments-container"></div>
    </div>
  `;

  const popComCnt = popUpOuterContainer.querySelector('.popup-comments-container');
  displayCommentsOnPopup(id, popComCnt);

  const popupCross = popUpOuterContainer.querySelector('.cross-pop');
  popupCross.addEventListener('click', () => {
    popUpOuterContainer.remove();
  });

  const cardsContainer = document.getElementById('list-container');
  cardsContainer.appendChild(popUpOuterContainer);
};

export default displayCommentpopup;
