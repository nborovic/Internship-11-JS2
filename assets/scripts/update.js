'use strict';

let favourites = [];
let selectedFilters = [];

UpdateFavouritesCount();

function UpdateFavouritesCount() {
    let favouritesElement = document.querySelector(".favourite__count");
    if(favouritesElement == undefined) return; // Ako je item otvoren u posebnom window-u, da ne vraca error
    favouritesElement.innerText = `${favourites.length}`;
}

function UpdateSelectedFiltersCount(dropdown) {
    let filterElement = dropdown.querySelector(".dropdown__top__selected");
    if(filterElement == undefined) return; // Ako je item otvoren u posebnom window-u, da ne vraca error
    filterElement.innerText = `${selectedFilters.length} selected`;
}

function ArrayRemoveItem(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == item) {
            array.splice(i, 1);
            return array;
        }        
    }
}

function DropDownClickOn(clickedElement) {
    let dropdownElement = clickedElement.querySelector(".search-filter__dropdown");

    if (dropdownElement.style.display != "block") {
        let searchFilterImg = clickedElement.querySelector(".search-filter__img ");
        let searchFilterText = clickedElement.querySelector(".search-filter__text");

        document.querySelectorAll(".container__search-filter").forEach(element => DropDownClickOff(element));

        dropdownElement.style.display = "block";
        searchFilterImg.style.transform = "rotate(180deg)";
        searchFilterText.style.color = "#0770CF";

        clickedElement.style.cssText = "border: none; outline: 3px solid #0770CF";

        return true;
    }

    return false;
}

function DropDownClickOff(clickedElement) {
    let dropdownElement = clickedElement.querySelector(".search-filter__dropdown");

    if (dropdownElement.style.display == "block") {
        let searchFilterImg = clickedElement.querySelector(".search-filter__img ");
        let searchFilterText = clickedElement.querySelector(".search-filter__text");
    
        searchFilterImg.style.transform = "rotate(0deg)";
        searchFilterText.style.color = "grey";
        dropdownElement.style.display = "none";
        clickedElement.style.cssText = "border-top: 1px solid grey; border-bottom: 1px solid grey; outline = none";
    }
}

function FilterClickOn(clickedElement) {
    if (clickedElement.style.background != "rgb(7, 112, 207)") {
        let itemCount = clickedElement.querySelector(".list__item__count");

        clickedElement.style.background = "#0770CF";
        clickedElement.style.color = "#fff";
        itemCount.style.color = "#fff";
    
        selectedFilters.push(clickedElement.innerText);
    
        UpdateSelectedFiltersCount(clickedElement.parentNode.parentNode);

        return true;
    }

    return false;
}

function FilterClickOff(clickedElement) {
    if (clickedElement.style.background == "rgb(7, 112, 207)") {
        let itemCount = clickedElement.querySelector(".list__item__count");

        clickedElement.style.background = "#ffffff";
        clickedElement.style.color = "#111111";
        itemCount.style.color = "grey";

        selectedFilters = ArrayRemoveItem(selectedFilters, clickedElement.innerText);

        UpdateSelectedFiltersCount(clickedElement.parentNode.parentNode);
    }
}