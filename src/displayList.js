import loadImage from "./load-image-module";

const displayList = (array) => {
  console.log('hello');
  const listContainer = document.getElementById('list-container');
  listContainer.innerHTML = '';

  for (let j = 0; j < 10; j+=3) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let i = 0; i < 3; i+=1) {
      const card = document.createElement('div');
      card.classList.add('col-sm', 'card');
      card.setAttribute('id', `card-${array[i + j].id}`);
      card.innerHTML = `
    <div class="card-img-top"></div>
    <div class="card-body d-flex flex-column align-items-center gap-1">
    <div class="card-title w-100 d-flex justify-content-between">  
    <h5>${array[i+j].name}</h5>
    <div class="card-text d-flex flex-column align-items-end">
    <i class="far fa-heart"></i>
    <p>Likes: 0</p>
    </div>
    </div>
    <a href="#" class="btn btn-primary">Comments</a>
    <a href="#" class="btn btn-primary">Reservations</a>
    </div>
    `;
      const cardImageContainer = card.querySelector('.card-img-top')
      const cardImage = loadImage(array[i+j].card_images[0].image_url_small, cardImageContainer, array[i+j].name)
      cardImage.classList.add('card-img-top');

      row.appendChild(card);
    }

    listContainer.appendChild(row);
  };
}

export default displayList;