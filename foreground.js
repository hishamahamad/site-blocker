if (window.location.hostname === "www.espncricinfo.com" && window.location.pathname === "/") {
    const blankSection = document.createElement("div");
    blankSection.setAttribute("style", "margin: 5rem");
    document.getElementsByClassName("home-page-wrapper")[0].replaceChildren(blankSection);
    console.log("ESPNCricinfo feed is now hidden!");
}
