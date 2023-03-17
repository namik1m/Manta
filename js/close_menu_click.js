const container = document.querySelector('.container');
const menuList = document.getElementById('openSidebarMenu');
const menuOpenedSection = document.getElementById('sidebarMenu');



function check() {
   menuList.checked = true;
}

function uncheck() {
   menuList.checked = false;
   container.scrollTop = 0; //scrollTop을 원위치로 해야 다시 스크롤 이벤트 발생함
}
  
menuOpenedSection.addEventListener("click", (e) => {
    //console.log("window is clicked");
    uncheck();
})