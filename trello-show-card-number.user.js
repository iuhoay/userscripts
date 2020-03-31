// ==UserScript==
// @name         Trello show card number
// @namespace    https://github.com/iuhoay/userscripts
// @version      0.1
// @description  Trello show card number
// @author       iuhoay
// @match        https://trello.com/b/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // Your code here...
  function showNumber() {
    var items = document.querySelectorAll('.card-short-id');

    items.forEach(item => {
      item.classList.remove('hide');
      item.style.color = 'red';
      item.style.marginRight = '0.5rem';
    })
  }

  setInterval(showNumber, 500);
})();
