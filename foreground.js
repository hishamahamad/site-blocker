document.addEventListener('DOMContentLoaded', function() {
    if (window.location.hostname === "www.espncricinfo.com" && window.location.pathname === "/") {
        const blankSection = document.createElement("div");
        const text = document.createTextNode("Your feed has been whitewashed. Get it? ;-P");
        blankSection.setAttribute("style", "margin: 10rem; font-size: 3rem; text-align: center;");
        blankSection.appendChild(text);

        const targetElement = document.getElementsByTagName("body")[0];
        targetElement.replaceChildren(blankSection);
        console.log("ESPNCricinfo feed is now hidden!");
    }
}, false);
