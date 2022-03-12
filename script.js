let hamBurger = document.getElementById("hamBurger");
let navLinks = document.getElementById("headerLinks");
let insider = document.getElementById("header_links_insider_div");
let container = document.getElementById("container");

let menuOpened = false;

hamBurger.addEventListener("click", ()=>{
    if (!menuOpened) {
        navLinks.style.width = "80vw";
        insider.style.display = "flex";
        container.style.transform = "translate(-80vw, 0vw)";
        menuOpened = true;
    } 
    
    else {
        navLinks.style.width = "0vw";
        insider.style.display = "none";
        container.style.transform = "translate(0vw, 0vw)";
        menuOpened = false;
     }
});