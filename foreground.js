if (window.location.hostname === "www.espncricinfo.com" && window.location.pathname === "/") {
    const blankSection = document.createElement("div");
    const text = document.createTextNode("Your feed has been whitewashed. Get it? ;-P");
    blankSection.setAttribute("style", "margin: 20rem");
    blankSection.appendChild(text);
    
    const targetElement = document.getElementsByClassName("home-page-wrapper")[0];
    targetElement.replaceChildren(blankSection);
    console.log("ESPNCricinfo feed is now hidden!");
}
