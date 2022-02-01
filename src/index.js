import './style.css';
import './font-style.css';
import loadImage from './load-image-module.js';
import logo from './components/images/monster-cards-logo.png';
import displayCommentpopup from './displayCommentPopup.js';

const headerImageContainer = document.querySelector('.header-logo-container');

const headerLogo = loadImage(logo, headerImageContainer, 'logo');
headerLogo.classList.add('header-logo');

displayCommentpopup('BLUE DRAGON', 'MONSTER', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 'DRAGON', 'https://qph.fs.quoracdn.net/main-qimg-98732885e1731509a4ce78d853dd0173-pjlq');
