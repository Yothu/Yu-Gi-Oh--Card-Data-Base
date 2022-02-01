const createPopupOuterContainer = () => {
  const popUpOuterContainer = document.createElement('div');
  popUpOuterContainer.classList.add('pop-up-background');
  return popUpOuterContainer;
};

const createPopupInnerContainer = () => {
  const popUpInnerContainer = document.createElement('div');
  popUpInnerContainer.classList.add('pop-up-container', 'm-3', 'border', 'border-3', 'border-dark', 'bg-white');
  return popUpInnerContainer;
};

const createPopupImageContainer = () => {
  const popUpImageContainer = document.createElement('div');
  popUpImageContainer.classList.add('d-flex', 'flex-column', 'p-3', 'align-items-center');
  return popUpImageContainer;
};

const createPopupCrossIcon = () => {
  const popupCrossIcon = document.createElement('img');
  popupCrossIcon.classList.add('cross-pop', 'p-1', 'align-self-end');
  popupCrossIcon.src = 'https://img.icons8.com/external-tal-revivo-bold-tal-revivo/344/external-close-cross-symbol-for-discontinued-and-invalid-basic-bold-tal-revivo.png';
  popupCrossIcon.setAttribute('alt', 'cross-icon');
  return popupCrossIcon;
};

const displayCommentpopup = (name, type, description, race, image) => {
  const popOutCont = createPopupOuterContainer();

  const popInnCont = createPopupInnerContainer();
  popOutCont.appendChild(popInnCont);

  const popImgCont = createPopupImageContainer();
  popInnCont.appendChild(popImgCont);

  const popCrossIcon = createPopupCrossIcon();
  popImgCont.appendChild(popCrossIcon);
};

export default displayCommentpopup;
