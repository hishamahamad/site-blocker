const runTheBlocker = () => {
    let blockedSites = [
        "www.espncricinfo.com",
        "www.youtube.com"
    ];
    if (blockedSites.includes(window.location.hostname)) {    
        history.back();
    }
}

setInterval(runTheBlocker, 1000);
