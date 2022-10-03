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


$('<style>').text(`
/* main menu */
.main-menu {height:34px}
body > .sidebar, body > .sidebar ~ .breadcrumb {top: 34px}

/* breadcrumb */
body > .breadcrumb {height:30px}
.breadcrumb h1 {padding:0.5rem 1rem}
.breadcrumb .graph-buttons > a {line-height: 2.8rem}
.new_saved_search {margin-top: -10px}

/* graph container */
body > .graph-container {top:-34px; height:350px}

/* toolbar */
body > .toolbar {height:32px; padding:0.2rem}
body.position-fixed > .toolbar {top:64px}
fixed.flight.toolbar {top:-75px}

body.position-fixed > .page-header {top:96px}

.list-view-outer {padding: 0}
.list-view-outer:first {padding: 8px 0px 0px 0px}
.transactions-table-footer {height:3.6rem; line-height:3rem}
.transactions_content .list-view-outer {top:-163px}
body.compact .transactions-table .row .cell {padding:0.5em 0}
.transactions-table-header .row .cell {line-height: 2.5rem}
.transactions-table .row .cell.amount .currency-code-info {display: inline-block}
`).appendTo($('body'));
