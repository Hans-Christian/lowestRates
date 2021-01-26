const menuBars = document.querySelector(`.menuBars`);
const headerUl = document.querySelector(`.headerList`);
const headerFirstLi = document.querySelector(`.headerList li:first-child`);
const logInButton = document.querySelector(`.headerDivs p`);
const hiddenItems = document.querySelectorAll(`.hiddenItems`);

// When the user clicks on the burger menu, the header list will slide open.
function navShow(){
    headerUl.classList.toggle(`navActive`);
}
menuBars.addEventListener(`click`, navShow);

// When the user clicks on the "Close Menu" list item that's inside the header list, the menu will close.
headerFirstLi.addEventListener(`click`, navShow);


function jumpDown(){
    // Step 2: Jump to the bottom of the page.
    window.scrollTo(0,document.body.scrollHeight);

    // Step 3: The header list will automatically slide open.
    headerUl.classList.toggle(`navActive`);
    
    // Step 4: "Loans", "Finance", and "Debt" will be added to the existing header list.
    hiddenItems.forEach(function(hiddenItem){
        hiddenItem.classList.toggle(`displayItems`);
    })
}

// Step 1: When the user clicks on "Login", the jumpDown function will fire. This function will not execute if the user clicks on the hamburger menu.
logInButton.addEventListener(`click`, jumpDown);

// Step 5: When the user clicks on the "Close Menu" list item, the menu will reset to the original list and jump back to the top of the page.
function jumpUp(){
    hiddenItems.forEach(function (hiddenItem) {
        hiddenItem.classList.remove(`displayItems`);
    })
}
headerFirstLi.addEventListener(`click`, jumpUp);