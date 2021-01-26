const menuBars = document.querySelector(`.menuBars`);
const headerUl = document.querySelector(`.headerList`);
const headerFirstLi = document.querySelector(`.headerList li:first-child`);
const logInButton = document.querySelector(`.headerDivs p`);
const hiddenItems = document.querySelectorAll(`.hiddenItems`);

function navShow(){
    headerUl.classList.toggle(`navActive`);
}

function jumpDown(){
    // Jump to the bottom of the page.
    window.scrollTo(0,document.body.scrollHeight);

    // Open the menu on the side.
    headerUl.classList.toggle(`navActive`);
    
    // When the menu is opened, add the following menu items to the top of the list of existing items:  "Loans ",  "Finance" , and  "Debt".

    hiddenItems.forEach(function(hiddenItem){
        hiddenItem.classList.toggle(`displayItems`);
    })
}

menuBars.addEventListener(`click`, navShow);

headerFirstLi.addEventListener(`click`, navShow);

// Please make sure the JS function only happens when the user clicks on login. If the user simply clicks on the menu on the TOP LEFT hand corner, the JS feature SHOULD NOT BE executed.
logInButton.addEventListener(`click`, jumpDown);

// When the user closes the menu, please make the JS to reset to the original list and jump back to the top of the page.

function jumpUp(){
    hiddenItems.forEach(function (hiddenItem) {
        hiddenItem.classList.remove(`displayItems`);
    })
}

headerFirstLi.addEventListener(`click`, jumpUp);