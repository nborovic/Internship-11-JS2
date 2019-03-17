'use strict';

AppendFilters();
AppendItems();

function AppendFilters() {
    let sortList = document.getElementById("sort-list");
    let productList = document.getElementById("product-list");
    let sleeveLengthList = document.getElementById("sleeve-length-list")

    let sortArray = [{type:"Black", count:"1014"}, {type:"White", count:"890"}, {type:"Navy", count:"411"}, {type:"Grey", count:"381"}, 
    {type:"Green", count:"335"}, {type:"Red", count:"256"}, {type:"Multi", count:"253"}, {type:"Blue", count:"170"}, {type:"Pink", count:"116"}, 
    {type:"Beige", count:"99"}, {type:"Purple", count:"68"}, {type:"Yellow", count:"62"}];

    let productArray = [{type:"Black", count:"1014"}, {type:"White", count:"890"}, {type:"Navy", count:"411"}, {type:"Grey", count:"381"}, 
    {type:"Green", count:"335"}, {type:"Red", count:"256"}];

    let sleeveLengthArray = [{type:"Black", count:"1014"}, {type:"White", count:"890"}, {type:"Navy", count:"411"}, {type:"Grey", count:"381"}, 
    {type:"Green", count:"335"}, {type:"Red", count:"256"}];
    
    sortArray.forEach(element => sortList.innerHTML += `<li onclick="SelectOnClick(this, event)" class="dropdown__list__item">${element.type} <span class="list__item__count">(${element.count})</span></li>`);
    productArray.forEach(element => productList.innerHTML += `<li onclick="SelectOnClick(this, event)" class="dropdown__list__item">${element.type} <span class="list__item__count">(${element.count})</span></li>`);
    sleeveLengthArray.forEach(element => sleeveLengthList.innerHTML += `<li onclick="SelectOnClick(this, event)" class="dropdown__list__item">${element.type} <span class="list__item__count">(${element.count})</span></li>`);
}

function AppendItems() {
    let mainOffers = document.querySelector(".main__offers")

    let offersDataArray = [{description: "TALL", brand: "", info: "Wrangler small logo crew neck t-shirt in white", price: "£16.63"},
    {description: "TALL", brand: "", info: "Wrangler logo chest stripe rugby polo in blue/white", price: "£50.63"},
    {description: "TALL", brand: "", info: "Wrangler kobel retro large logo ringer t-shirt in white", price: "£20.97"},
    {description: "TALL", brand: "", info: "Lyle & Scott polo in burgundy", price: "£44.12"},
    {description: "TALL", brand: "COLLUSION", info: "Unisex long sleeve t-shirt with graphic print in neon green", price: "£12.29"},
    {description: "TALL", brand: "ASOS DESIGN", info: "Disney oversized t-shirt with rainbow", price: "£22.42"},
    {description: "TALL", brand: "COLLUSION", info: "Unisex oversized t-shirt with back print", price: "£10.12"},
    {description: "TALL", brand: "ASOS DESIGN", info: "Mickey reloxed t-shirt with retro print", price: "£18.08"}
    ];

    offersDataArray.forEach(element => mainOffers.innerHTML += `
        <div onclick="OpenItemWindow(this)" class="offers__item">
            <img class="item__img" src="./assets/images/offer.jpg" alt="Offer" />
            <button class="item__heart-shape">
                <img class="heart-shape__img" src="./assets/images/heart-shape.png" alt="Hearth Shape">
            </button>
            <button onclick="HeartOnClick(this, event)" class="item__heart-full">
                <img class = "heart-full__img" src="./assets/images/heart-full.png" alt="Hearth Full">
            </button>
            <p class="item__img-description">${element.description}</p>
            <p class="item__paragraph">
                <span class="item__paragraph__brand">${element.brand}</span> ${element.info}
            </p>
            <span class="item__price">${element.price}</span>
        </div>
    `)
}