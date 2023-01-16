function menuToggle() {
    let menuNav = document.getElementById("menu_nav");
    let W = screen.width;
    
    if( W <= 810 & menuNav.style.width == "0vw") {
        menuNav.style.width = "70vw";
    } else {
        menuNav.style.width = '0vw';
    }

}
