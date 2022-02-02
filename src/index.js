import './style.css';
import './font-style.css';
import loadImage from './load-image-module.js';
import {
  getCardsApiData, monsters, spells, traps,
} from './getCardsApiData.js';
import displayList from './displayList.js';

import logo from './components/images/monster-cards-logo.png';

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

const loadPage = async () => {
  await getCardsApiData(baseUrl);
  displayList(monsters);
};

loadPage();

// const basicURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
// let gameId = ''; YugiOh GameID: cOGEfAnTEwb10Y4bv0g7

const addGame = async () => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.text();
  console.log(data);
}

// addGame();
