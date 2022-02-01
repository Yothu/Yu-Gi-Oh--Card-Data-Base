import loadImage from './load-image-module.js';

const createPopupOuterContainer = () => {
  const popUpOuterContainer = document.createElement('div');
  popUpOuterContainer.classList.add('pop-up-background');

  // DELETE - IMAGE CONTAINER
  const asd = document.getElementById('asd');
  asd.appendChild(popUpOuterContainer);
  // DELETE

  return popUpOuterContainer;
};

const createPopupInnerContainer = (popOutCont) => {
  const popUpInnerContainer = document.createElement('div');
  popUpInnerContainer.classList.add('pop-up-container', 'm-3', 'border', 'border-3', 'border-dark', 'bg-white');
  popOutCont.appendChild(popUpInnerContainer);

  return popUpInnerContainer;
};

const createPopupImageContainer = (popInnCont) => {
  const popUpImageContainer = document.createElement('div');
  popUpImageContainer.classList.add('d-flex', 'flex-column', 'p-3', 'align-items-center');
  popInnCont.appendChild(popUpImageContainer);

  return popUpImageContainer;
};

const createPopupCrossIcon = (popImgCont) => {
  const popupCrossIcon = document.createElement('img');
  popupCrossIcon.classList.add('cross-pop', 'p-1', 'align-self-end');
  popupCrossIcon.src = 'https://img.icons8.com/external-tal-revivo-bold-tal-revivo/344/external-close-cross-symbol-for-discontinued-and-invalid-basic-bold-tal-revivo.png';
  popupCrossIcon.setAttribute('alt', 'cross-icon');
  popImgCont.appendChild(popupCrossIcon);

  return popupCrossIcon;
};

const createSeparator = (popInnCont) => {
  const separator = document.createElement('hr');
  separator.classList.add('border', 'border-3', 'border-dark');
  popInnCont.appendChild(separator);
};

const createCardInfoContainer = (popInnCont) => {
  const cardInfoContainer = document.createElement('div');
  popInnCont.appendChild(cardInfoContainer);

  return cardInfoContainer;
};

const createPopupNameContainer = (popCardInfoCont) => {
  const popNameCont = document.createElement('div');
  popNameCont.classList.add('name-container', 'd-flex');
  popCardInfoCont.appendChild(popNameCont);

  return popNameCont;
};

const createPopupTypeContainer = (popCardInfoCont) => {
  const popTypeCont = document.createElement('div');
  popTypeCont.classList.add('type-container', 'd-flex');
  popCardInfoCont.appendChild(popTypeCont);

  return popTypeCont;
};

const createPopupDescriptionContainer = (popCardInfoCont) => {
  const popDescCont = document.createElement('div');
  popDescCont.classList.add('desription-container', 'd-flex');
  popCardInfoCont.appendChild(popDescCont);

  return popDescCont;
};

const createPopupRaceContainer = (popCardInfoCont) => {
  const popRaceCont = document.createElement('div');
  popRaceCont.classList.add('race-container', 'd-flex');
  popCardInfoCont.appendChild(popRaceCont);

  return popRaceCont;
};

const createPopupNameLabel = (popNameCont) => {
  const popNameLabel = document.createElement('p');
  popNameLabel.innerText = 'Name:';
  popNameCont.appendChild(popNameLabel);
};

const createPopupCardName = (name, popNameCont) => {
  const popCardName = document.createElement('p');
  popCardName.innerHTML = `${name}`;
  popNameCont.appendChild(popCardName);
};

const createPopupTypeLabel = (popTypeCont) => {
  const popTypeLabel = document.createElement('p');
  popTypeLabel.innerText = 'Type:';
  popTypeCont.appendChild(popTypeLabel);
};

const createPopupCardType = (type, popTypeCont) => {
  const popCardType = document.createElement('p');
  popCardType.innerHTML = `${type}`;
  popTypeCont.appendChild(popCardType);
};

const createPopupCardDescription = (description, popDescCont) => {
  const popCardDesc = document.createElement('p');
  popCardDesc.innerHTML = `${description}`;
  popDescCont.appendChild(popCardDesc);
};

const createPopupRaceLabel = (popRaceCont) => {
  const popRaceLabel = document.createElement('p');
  popRaceLabel.innerText = 'Race:';
  popRaceCont.appendChild(popRaceLabel);
};

const createPopupCardRace = (race, popRaceCont) => {
  const popCardRace = document.createElement('p');
  popCardRace.innerHTML = `${race}`;
  popRaceCont.appendChild(popCardRace);
};

const displayCommentpopup = (name, type, description, race, image) => {
  const popOutCont = createPopupOuterContainer();
  const popInnCont = createPopupInnerContainer(popOutCont);
  const popImgCont = createPopupImageContainer(popInnCont);

  createPopupCrossIcon(popImgCont);
  loadImage(image, popImgCont, 'card-image');
  createSeparator(popInnCont);

  const popCardInfoCont = createCardInfoContainer(popInnCont);

  const popNameCont = createPopupNameContainer(popCardInfoCont);
  createPopupNameLabel(popNameCont);
  createPopupCardName(name, popNameCont);

  const popTypeCont = createPopupTypeContainer(popCardInfoCont);
  createPopupTypeLabel(popTypeCont);
  createPopupCardType(type, popTypeCont);

  const popDescCont = createPopupDescriptionContainer(popCardInfoCont);
  createPopupCardDescription(description, popDescCont);

  const popRaceCont = createPopupRaceContainer(popCardInfoCont);
  createPopupRaceLabel(popRaceCont);
  createPopupCardRace(race, popRaceCont);
};

export default displayCommentpopup;
