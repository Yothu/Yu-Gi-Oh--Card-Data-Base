import './style.css';
import './font-style.css';
import loadImage from './load-image-module.js';
import {
  getCardsApiData, monsters, spells, traps,
} from './getCardsApiData.js';
import displayList from './displayList.js';

import logo from './components/images/monster-cards-logo.png';
import displayCommentpopup from './displayCommentPopup.js';

const baseUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
const headerImageContainer = document.querySelector('.header-logo-container');
const headerLogo = loadImage(logo, headerImageContainer, 'logo');
headerLogo.classList.add('header-logo');

const monsterNav = document.getElementById('monster-nav');
monsterNav.addEventListener('click', () => {
  displayList(monsters);
});

const trapNav = document.getElementById('trap-nav');
trapNav.addEventListener('click', () => {
  displayList(traps);
});

const spellNav = document.getElementById('spell-nav');
spellNav.addEventListener('click', () => {
  displayList(spells);
});


displayCommentpopup('Name', 'Type', 'Description', 'Race', './components/images/cat1.jpg');

const loadPage = async () => {
  await getCardsApiData(baseUrl);
  displayList(monsters);
};

loadPage();
