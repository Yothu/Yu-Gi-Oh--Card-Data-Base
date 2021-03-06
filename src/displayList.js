import displayCommentpopup from './displayCommentPopup.js';
import loadImage from './load-image-module.js';
import { getLikes, addLike } from './cardLikes.js';
import updateCardCounter from './updateCardCounter.js';

const displayList = async (array) => {
  const listContainer = document.getElementById('list-container');
  listContainer.innerHTML = '';
  const likesPerCard = await getLikes();

  for (let j = 0; j < 15; j += 4) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let i = 0; i < 4; i += 1) {
      let cardLikes = 0;
      likesPerCard.forEach((obj) => {
        if ((array[i + j].id).toString() === obj.item_id) {
          cardLikes = obj.likes;
        }
      });

      const card = document.createElement('div');
      card.classList.add('col-12', 'col-sm-6', 'col-lg-3', 'card', 'pt-2');
      card.setAttribute('id', `card-${array[i + j].id}`);
      card.innerHTML = `
        <div class="card-img-top w-80 align-self-center"></div>
        <div class="card-body d-flex flex-column align-items-center px-0 gap-2">
          <div class="card-title d-flex justify-content-between align-items-center">  
            <h3 class="font-itc-stone-serif-small-caps-bold text-white font-25px m-0 font-sm-18px font-md-20px">${array[i + j].name}</h3>
            <div class="card-text d-flex align-items-center">
              <i class="far fa-heart pe-1 m-0"></i>
              <p class="likes-counter text-white m-0">${cardLikes}</p>
            </div>
          </div>
          <a href="#card-${array[i + j].id}" class="item-comment-button fw-bolder btn mt-2 text-white">Comments</a>
        </div>
        `;
      const cardImageContainer = card.querySelector('.card-img-top');
      const cardImage = loadImage(array[i + j].card_images[0].image_url,
        cardImageContainer, array[i + j].name);
      cardImage.classList.add('card-img-top');

      const cardHeart = card.querySelector('i');
      cardHeart.addEventListener('click', async () => {
        const objCardId = {
          item_id: `${array[i + j].id}`,
        };
        await addLike(objCardId);
      });

      const itemCommentBtn = card.querySelector('.item-comment-button');
      itemCommentBtn.addEventListener('click', () => {
        const cardId = array[i + j].id;
        const cardName = array[i + j].name;
        const cardType = array[i + j].type;
        const cardDesc = array[i + j].desc;
        const cardRace = array[i + j].race;
        const cardImage = array[i + j].card_images[0].image_url;

        displayCommentpopup(cardId, cardName, cardType, cardDesc, cardRace, cardImage);
      });

      row.appendChild(card);
    }

    listContainer.appendChild(row);
  }

  updateCardCounter();
};

export default displayList;