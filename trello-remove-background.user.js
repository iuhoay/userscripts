// ==UserScript==
// @name         Trello remove background image
// @namespace    https://github.com/iuhoay/userscripts
// @version      0.1
// @license      MIT
// @description  Remove background image.
// @author       iuhoay
// @match        https://trello.com/b/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // Your code here...
  let trelloRoot = document.querySelector('#trello-root');
  let isRemoved = false;
  function init() {
    if (trelloRoot.style.backgroundImage !== '') {
      trelloRoot.style.backgroundImage = '';
      trelloRoot.style.backgroundColor = 'black';
      isRemoved = true;
    }
    if (isRemoved) {
      clearInterval(timer);
    }
  }
  const timer = setInterval(init, 500);
})();
