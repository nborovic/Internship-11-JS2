'use strict'

UpdateFavouritesCount();

function UpdateFavouritesCount() {
    let counter = 0;
    let items = document.querySelectorAll(".offers__item");
    
    items.forEach(item => {
        if (item.querySelector(".item__heart-full").style.opacity == "1")
            counter++;
    });

    let favouritesElement = document.querySelector(".favourite__count");
    if(favouritesElement == undefined) return; // Ako je item otvoren u posebnom window-u, da ne vraca error

    favouritesElement.innerText = `${counter}`;
}