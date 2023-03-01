const menuIcon = document.getElementById("menu");
const menuList = document.getElementById("hiddenmenu");
const menuClosebtn = document.getElementById("close");

menuIcon.addEventListener("click", function () {
  menuIcon.style.visibility = "hidden";
  menuList.style.visibility = "visible";
});

menuClosebtn.addEventListener("click", function () {
  menuList.style.visibility = "hidden";
  menuIcon.style.visibility = "visible";
});
