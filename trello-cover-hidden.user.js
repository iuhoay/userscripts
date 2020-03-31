// ==UserScript==
// @name         Trello cover hide
// @namespace    https://github.com/iuhoay/userscripts
// @version      0.1
// @description  Hidden list cover
// @author       iuhoay
// @match        https://trello.com/b/*
// ==/UserScript==

(function() {
  'use strict';


  // Your code here...
  function removeCover() {
    var covers = document.querySelectorAll('.list-card-cover');

    covers.forEach(cover => {
      cover.classList.add('hide');
    })
  }

  function init() {
    removeCover();
  }

  setInterval(init, 500);
})();
