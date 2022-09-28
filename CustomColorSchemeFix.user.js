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
    // background color
    GM_addStyle('textarea, input, select { color: #000000; background-color: #ffffff; }')
    // border color (#D1DBEC is flibusta color, but you can use #000000)
    GM_addStyle('textarea, input, select { border-color: #D1DBEC; border-width: 1px; border-style: solid; }')
})();
