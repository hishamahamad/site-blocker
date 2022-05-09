const blockedSites = [
    "www.espncricinfo.com",
    "www.youtube.com"
];

const runTheBlocker = () => {
    if (blockedSites.includes(window.location.hostname)) {    
        history.back();
    }
}

setInterval(runTheBlocker, 1000);
