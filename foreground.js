if (window.location.hostname === "www.espncricinfo.com" && window.location.pathname === "/") {
    document.getElementsByClassName("home-page-wrapper")[0].replaceChildren({});
    console.log("ESPNCricinfo feed is now hidden!");
}
