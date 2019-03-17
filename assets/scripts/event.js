'use strict'

ItemHoverEvent();

function ItemHoverEvent() {
    let items = document.querySelectorAll(".offers__item");

    items.forEach(item => {
        item.addEventListener("mouseover", function() { ItemMouseOver(item) });
        item.addEventListener("mouseout", function() { ItemMouseOut(item) })
    });

    function ItemMouseOver(item) {
        let description = item.querySelector(".item__img-description");
    
        description.style.opacity = "1";
        description.style.top = "297px";
    }
    
    function ItemMouseOut(item) {
        let description = item.querySelector(".item__img-description");
    
        description.style.opacity = "0";
        description.style.top = "309px";
    }
}

function HeartOnClick(clickedElement, event) {
    if (clickedElement.style.opacity == "0" || clickedElement.style.opacity == "")
        clickedElement.style.opacity = "1";
    else 
        clickedElement.style.opacity = "0";

    UpdateFavouritesCount();
    event.stopPropagation();
}