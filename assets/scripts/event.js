'use strict';

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
    if (favourites == undefined) return;

    if (clickedElement.style.opacity != "1") {
        clickedElement.style.opacity = "1";
        favourites.push(clickedElement.innerHTML);
    } else {
        clickedElement.style.opacity = "0"
        favourites = ArrayRemoveItem(favourites, clickedElement.innerHTML)
    }
    
    UpdateFavouritesCount();
    event.stopPropagation();
}

function DropdownOnClick(clickedElement) {
    if (DropDownClickOn(clickedElement)) return;
    DropDownClickOff(clickedElement);
}

function SelectOnClick(clickedElement) {
    if (FilterClickOn(clickedElement)) return;
    FilterClickOff(clickedElement);
}

function SelectAllOnClick(clickedElement) {
    let allImg = clickedElement.querySelector(".all__img");
    let allText = clickedElement.querySelector(".all__text");
    let filters = clickedElement.parentNode.parentNode.querySelectorAll(".dropdown__list__item");

    if (allImg.style.display != "inline-block") {
        clickedElement.style.border = "1px solid #0770CF";
        allImg.style.display = "inline-block";
        allText.style.color = "#0770CF";
        filters.forEach(filter => FilterClickOn(filter));
    } else {
        clickedElement.style.border = "1px solid #111"
        allImg.style.display = "none";
        allText.style.color = "#111";
        filters.forEach(filter => FilterClickOff(filter));
    }
}