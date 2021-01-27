const menuBars = document.querySelector(`.menuBars`);
const closeMenu = document.querySelector(`.closeMenu`);
const headerUl = document.querySelector(`.headerList`);
const logInButton = document.querySelector(`.logIn`);
const hiddenItems = document.querySelectorAll(`.hiddenItems`);

// When the user clicks on the burger menu, the header list will slide open.
menuBars.addEventListener(`click`, navShow);

// When the user clicks on the "Close Menu" list item that's inside the header list, the menu will close.
closeMenu.addEventListener(`click`, navShow);

function navShow(){
    headerUl.classList.toggle(`navActive`);
}

// Step 1: When the user clicks on "Login", the jumpDown function will fire. This function will not execute if the user clicks on the hamburger menu.
logInButton.addEventListener(`click`, jumpDown);

function jumpDown(){
    // Step 2: Jump to the bottom of the page.
    window.scrollTo(0,document.body.scrollHeight);

    // Step 3: The header list will automatically slide open.
    headerUl.classList.toggle(`navActive`);
    
    // Step 4: "Loans", "Finance", and "Debt" will be added to the existing header list.
    hiddenItems.forEach(function(hiddenItem){
        hiddenItem.classList.toggle(`displayItems`);
    })

    // Step 5: Added an additional class of "LogInMenuClose" to the "Close Menu" list item. When the user clicks on "Close Menu", the menu will reset to the original list and jump to the top of the page. This event will remove the class of "LogInMenuClose" to prevent page from jumping to the top when "Close Menu" is clicked normally.
    closeMenu.classList.add(`LogInMenuClose`);
    closeMenu.addEventListener(`click`, jumpUp);

    function jumpUp(){
        hiddenItems.forEach(function (hiddenItem) {
            hiddenItem.classList.remove(`displayItems`);            
        })
        if ((closeMenu.classList.contains(`LogInMenuClose`))){
            window.scrollTo(0, 0);
            closeMenu.classList.remove(`LogInMenuClose`);
        }
    }
}

