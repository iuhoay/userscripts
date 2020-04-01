// ==UserScript==
// @name         Trello show card number
// @namespace    https://github.com/iuhoay/userscripts
// @version      1.0.1
// @license      MIT
// @description  Trello show card number
// @author       iuhoay
// @match        https://trello.com/b/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  'use strict';

  GM_addStyle(".card-short-id { display: inline-block; color: red; margin-right: .5rem;}")
})();
