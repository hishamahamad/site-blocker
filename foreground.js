const blockedSites = [
    "www.espncricinfo.com",
    "www.youtube.com"
];

if (blockedSites.includes(window.location.hostname)) {    
    history.back();
}
