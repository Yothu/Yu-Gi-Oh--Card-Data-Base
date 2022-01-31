const loadImage = (imageAddress, elementContainer, altText) => {
  const myIcon = new Image();
  myIcon.src = imageAddress;
  myIcon.setAttribute('alt', altText);
  elementContainer.appendChild(myIcon);

  return myIcon;
};

export default loadImage;
