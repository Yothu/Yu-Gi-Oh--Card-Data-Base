import './style.css';
import './font-style.css';
import loadImage from './load-image-module.js';


import logo from './components/images/monster-cards-logo.png';
const headerImageContainer = document.querySelector('.header-logo-container');

import cat from './components/images/cat1.jpg';
const cardImageContainer = document.querySelector('.card-img-top');

const headerLogo = loadImage(logo, headerImageContainer, 'logo');
headerLogo.classList.add('header-logo');

const cardImage = loadImage(cat, cardImageContainer, 'fat-cat');
cardImage.classList.add('card-img-top');
