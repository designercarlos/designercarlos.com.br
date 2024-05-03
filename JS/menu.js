const hbMenu = document.querySelector('.hb-menu');

function closeMenu(event){

    //Prevent instant closing
    if (event.target.tagName == "SUMMARY") {
        event.preventDefault();
    }

    //Close the menu after a delay (for the click in the menu)
    setTimeout(function(){
        hbMenu.style.width = '0vw';
        setTimeout(function(){
            hbMenu.removeAttribute('open');
            hbMenu.removeAttribute('style');
        },300);
    },100);
}

function addListeners(){
    if (hbMenu.open){
        document.addEventListener('click', closeMenu);
    } else {
        document.removeEventListener('click', closeMenu);
    }
}

hbMenu.addEventListener('toggle', addListeners);