
//https://stackoverflow.com/questions/48606092/select-and-change-the-image-source-of-nth-elment-using-jquery-or-css 
//study the last comments, forEach
//https://github.com/vimeo/player.js/
var iframe = document.querySelectorAll('iframe');
const iframeList = Array.from(iframe);
console.log(iframe[0]);
console.log(iframeList)
var player1 = new Vimeo.Player(iframeList[0]);
var player2 = new Vimeo.Player(iframeList[1]);
var player3 = new Vimeo.Player(iframeList[2]);
var player4 = new Vimeo.Player(iframeList[3]);
var player5 = new Vimeo.Player(iframeList[4]);

console.log(player1)

const videoThumb = document.querySelectorAll(".open-video");
const listThumb = Array.from(videoThumb);

const realVideo = document.querySelectorAll(".plyr__video-embed");
const listRealvideos = Array.from(realVideo);

function vimeoPlay1() {
  player1.play();
}
  
function vimeoPause1() {
  player1.pause();
}

function vimeoPause2() {
  player2.pause();
}

function vimeoPause3() {
  player3.pause();
}

function vimeoPause4() {
  player4.pause();
}

function vimeoPause5() {
  player5.pause();
}


listThumb[0].addEventListener("click", function(){
  listRealvideos[0].style.display = "block";
})

listThumb[1].addEventListener("click", function(){
  listRealvideos[1].style.display = "block";
})

listThumb[2].addEventListener("click", function(){
  listRealvideos[2].style.display = "block";
})

listThumb[3].addEventListener("click", function(){
  listRealvideos[3].style.display = "block";
})

listThumb[4].addEventListener("click", function(){
  listRealvideos[4].style.display = "block";
})


//2nd attempt but then still had an issue: 1.두ㄴㅐ - 첫 2.중지
// listThumb.forEach(function(thumb, indx) {
//     thumb.addEventListener("click", function(){
//         listRealvideos[indx++].style.display = "block";

//     })
// })

//1st attempt
// listThumb.forEach(function(thumb) {
//     thumb.addEventListener("click", function(){
//         realVideo[indx++].style.display = "block";
//     })
// })
//The reason why the code above is not working:
//forEach can be two ways: 
//1)forEach(callback)
//2) forEach(callback, thisArg)
//callback accepts 3 paremeter; currentValue, currentIndex, listObj
// currentIndex was not defined. That's why it didn't work.
//Studied from: https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Browser_Compatibility


const closeBtn = document.querySelectorAll(".closebtn");
const closeBtnList = Array.from(closeBtn);
console.log(closeBtnList);

// closeBtnList.forEach(function(btn, indx) {
//   btn.addEventListener("click", function(){
//       listRealvideos[indx++].style.display = "none";
//   })
// })

const singleVid1= document.getElementById("player");
const singleVid2= document.getElementById("player2");
const singleVid3= document.getElementById("player3");
const singleVid4= document.getElementById("player4");
const singleVid5= document.getElementById("player5");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target ==singleVid1) {
    singleVid1.style.display = "none";
    vimeoPause1() 
  }
  if (event.target ==singleVid2) {
    singleVid2.style.display = "none";
    vimeoPause2() 
  }
  if (event.target ==singleVid3) {
    singleVid3.style.display = "none";
    vimeoPause3() 
  }
  if (event.target ==singleVid4) {
    singleVid4.style.display = "none";
    vimeoPause4() 
  }
  if (event.target ==singleVid5) {
    singleVid5.style.display = "none";
    vimeoPause5() 
  }

};




