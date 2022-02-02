import './style.css';
import './font-style.css';
import displayList from './displayList.js';
import loadImage from './load-image-module.js';
import logo from './components/images/monster-cards-logo.png';
import {
  getCardsApiData, monsters, spells, traps,
} from './getCardsApiData.js';

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
