const container = document.querySelector('.container');
const body = document.querySelector('body');
const section = document.querySelector('.section');
const menuList = document.getElementById('openSidebarMenu');
const menuFrame = document.getElementById('sidebarMenu');


function check() {
  menuList.checked = true;
}

function uncheck() {
  menuFrame.style.transform = 'translateX(-100%)';
}

//Scrolling page -> The slider menu shows up -> At this status, user can close the menu by scrolling again (doesn't matter if it up-down ward)
//I think i should make a callback function here for closing the menu with another scrolling

// container.addEventListener("wheel", (event) => {
//   console.log("container", event);
// });
//ㄷ도ㅣ는버전
container.addEventListener('scroll', function (e) { 
  console.log('aaaaaa', e.currentTarget.scrollTop);
  if (e.currentTarget.scrollTop >= 0) {
    return check();
  }
}, {passive:false});


menuFrame.addEventListener('wheel', (e) => { 
  //e.preventDefault();
  console.log('menu', e);
  if (e.deltaY < -2) {
    return uncheck(); 
  }
});

// menuFrame.addEventListener('scroll', (e) => { 
//   console.log('menu', e);
//   if (e.currentTarget.scrollTop  < 2 ) {
//     return uncheck(); 
//   }
// });

//According to MDN,
//scrollTop doesn't respond to negative values; instead, it sets itself back to 0.
//If set to a value greater than the maximum available for the element, scrollTop settles itself to the maximum value.




// menuFrame.addEventListener("wheel", (e) => {
//   console.log("menu", e);
//   if (e.deltaY < -2) {
//     return uncheck();

//   }
// });

// menuFrame.addEventListener('scroll', function (e) {
//   console.log("menu",e.currentTarget.scrollTop);
//   if (e.currentTarget.scrollTop < -1) {
//     return uncheck();
//   }
// });






// menuFrame.addEventListener('scroll', function (e) {
//   console.log('bbbbb',e.currentTarget.scrollTop);
//   if (menuFrame.scrollTop >= -1) {
//     return uncheck();
//   }
// });

// menuFrame.addEventListener('scroll', function () {
//   if ((menuList.checked = true)) {
//     return closeMenu();

//   }
// });

// function closeMenu() {
//   if (container.scrollTop >= 1 || container.scrollTop >= -1) {
//     return uncheck();
//   }
// }

// menuFrame.addEventListener('scroll', function () {
//   if ((menuList.checked = true)) {
//     return closeMenu();
//   }
// });

// function closeMenu() {
//   if (menuFrame.scrollTop >= 1 || menuFrame.scrollTop >= -1) {
//     return uncheck();
//   }
// }

/*Studied from this document.https://dev.to/sakaz22/hiding-and-revealing-things-with-javascript-pageyoffset-4f2i*/
//The designer's idea for the landing page is enabling a (hidden) dropdown menu to be displayed when users scroll (down).
// In the beginning I tried, using ScrollTop (https://stackoverflow.com/questions/36448800/how-to-show-or-hide-a-menu-when-i-scroll-down-or-up)
//Then I came to know there are other functions like ScrollOffset and PageYOffset.
//Then I discovered a developer's comment 'And using pageYOffset is a px based rule - might not be the best option when doing responsive work. The Intersection ratio is an alternative to consider...'
//Today I will study the differences between ScrollTop, ScrollOffset, pageYOffset...
