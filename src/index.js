import './style.css';
import './font-style.css';
import loadImage from './load-image-module.js';


import logo from './components/images/monster-cards-logo.png';
const headerImageContainer = document.querySelector('.header-logo-container');


const headerLogo = loadImage(logo, headerImageContainer, 'logo');
headerLogo.classList.add('header-logo');
