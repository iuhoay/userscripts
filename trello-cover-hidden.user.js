// ==UserScript==
// @name         Trello cover hide
// @namespace    https://github.com/iuhoay/userscripts
// @version      1.0.0
// @license      MIT
// @description  Hidden list cover
// @author       iuhoay
// @match        https://trello.com/b/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  GM_addStyle(".list-card-cover { display: none;}")
})();
