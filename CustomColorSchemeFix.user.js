// ==UserScript==
// @name         Custom color scheme fix
// @version      0.1
// @description  Just custom color scheme broke all textbox in browser, and I fixed this
// @author       ericsson
// @match        *://*/*
// @icon         https://github.githubassets.com/pinned-octocat.svg
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    //textarea, input, select { color: #000000 !important; background-color: #ffffff !important; }
    GM_addStyle('textarea, input, select { color: #000000; background-color: #ffffff; }')
})();