const section = document.querySelector(".section");
const menuIcon = document.getElementById("menu");
const menuList = document.getElementById("hiddenmenu");
const menuClosebtn = document.getElementById("close");
const mainLogo = document.getElementById("logo");

menuIcon.addEventListener("click", function () {
  menuIcon.style.visibility = "hidden";
  menuList.hidden = true;
});

menuClosebtn.addEventListener("click", function () {
  menuList.hidden = false;
  menuIcon.style.visibility = "visible";
});

//if menuList hidden is true (display:block), the logo disappears.

menuClosebtn.addEventListener("click", function () {
  menuList.hidden = false;
});

//(mainLogo.style.visibility = "hidden"), line 12

// menuClosebtn.addEventListener("click", () => (menuList.hidden = false));

/*Studied from this document.https://dev.to/sakaz22/hiding-and-revealing-things-with-javascript-pageyoffset-4f2i*/
//The designer's idea for the landing page is enabling a (hidden) dropdown menu to be displayed when users scroll (down).
// In the beginning I tried, using ScrollTop (https://stackoverflow.com/questions/36448800/how-to-show-or-hide-a-menu-when-i-scroll-down-or-up)
//Then I came to know there are other functions like ScrollOffset and PageYOffset.
//Then I discovered a developer's comment 'And using pageYOffset is a px based rule - might not be the best option when doing responsive work. The Intersection ratio is an alternative to consider...'
//Today I will study the differences between ScrollTop, ScrollOffset, pageYOffset...
