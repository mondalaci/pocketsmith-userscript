// ==UserScript==
// @name         Make PocketSmith more useable
// @namespace    mondalaci_PocketSmith
// @version      0.1
// @description  Make PocketSmith more useable
// @author       László Monda
// @match        https://*.pocketsmith.com/*
// @noframes
// ==/UserScript==

setInterval(() => { // Keepalive session
    const httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'https://my.pocketsmith.com/user/read_notices?_no_redirect=1');
    httpRequest.send(null);
}, 29*60*1000);

const backgroundColor = '#b2d3d6';

$('<style>').text(`
body {background-color: ${backgroundColor}}
body > .content::after {background-color: ${backgroundColor}}

/* main menu (dashboard, transactions, calendar, ...) */
.main-menu {height:34px}
body > .sidebar, body > .sidebar ~ .breadcrumb {top: 34px}

/* breadcrumb (graph icons, magnifier icon) */
body > .breadcrumb {height:30px}
.breadcrumb h1 {padding:0.5rem 1rem}
.breadcrumb .graph-buttons > a {line-height: 2.8rem}
.new_saved_search {margin-top: -10px}

/* graph container */
body > .graph-container {top:-34px; height:350px}

/* toolbar (add, tools, export, ...) */
body                       > .fixed.flight.toolbar {height:32px; padding:0.2rem}
body:not([position-fixed]) > .fixed.flight.toolbar {top:-75px}
body.position-fixed        > .fixed.flight.toolbar {top:64px}

/* page header (date, merchant, amount, ...) */
.page-header {background-color: ${backgroundColor}}
body:not([position-fixed]) > .page-header {top:-75px}
body.position-fixed        > .page-header {top:96px}

/* transaction list */

body:not([position-fixed]) > .transactions_content .list-view-outer {top:-81px}
body.position-fixed        > .transactions_content .list-view-outer {top:-140px}
.list-view-outer {padding:0; background-color:${backgroundColor}}
.list-view-outer:first {padding: 8px 0px 0px 0px}
.transactions-table-footer {height:3.6rem; line-height:3rem}
body.compact .transactions-table .row .cell, body.compact .list-view .row .cell {padding:0.5em 6px}
.transactions-table-header .row .cell {line-height: 2.5rem}
.transactions-table .row .cell .currency-code-info {display: inline-block !important}

`).appendTo($('body'));

$('body').append($(`<div
style="background-color: ${backgroundColor};
z-index: 1;
position: absolute;
width: calc(100% - 280px);
height: 1000px;
top: 400px;
left: 280px;
"></div>`));
