//https://stackoverflow.com/questions/48606092/select-and-change-the-image-source-of-nth-elment-using-jquery-or-css
//study the last comments, forEach
//https://github.com/vimeo/player.js/
var iframe = document.querySelectorAll('iframe');
const iframeList = Array.from(iframe);
console.log(iframe[0]);
console.log(iframeList);
var player1 = new Vimeo.Player(iframeList[0]);
var player2 = new Vimeo.Player(iframeList[1]);
var player3 = new Vimeo.Player(iframeList[2]);
var player4 = new Vimeo.Player(iframeList[3]);

console.log(player1);

const videoThumb = document.querySelectorAll('.open-video');
const listThumb = Array.from(videoThumb);

const realVideo = document.querySelectorAll('.plyr__video-embed');
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

listThumb[0].addEventListener('click', function () {
  listRealvideos[0].style.display = 'block';
});

listThumb[1].addEventListener('click', function () {
  listRealvideos[1].style.display = 'block';
});

listThumb[2].addEventListener('click', function () {
  listRealvideos[2].style.display = 'block';
});

listThumb[3].addEventListener('click', function () {
  listRealvideos[3].style.display = 'block';
});

const singleVid1 = document.getElementById('player');
const singleVid2 = document.getElementById('player2');
const singleVid3 = document.getElementById('player3');
const singleVid4 = document.getElementById('player4');

window.addEventListener("click", function(event){
  if(event.target == singleVid1) {
   vimeoPause1();
   singleVid1.style.display = 'none';
  }
  if (event.target == singleVid2) {
   singleVid2.style.display = 'none';
   vimeoPause2();
 }
 if (event.target == singleVid3) {
   singleVid3.style.display = 'none';
   vimeoPause3();
 }
 if (event.target == singleVid4) {
   singleVid4.style.display = 'none';
   vimeoPause4();
 }
 });

const close1 = document.querySelector('.closebtn1');
const close2 = document.querySelector('.closebtn2');
const close3 = document.querySelector('.closebtn3');
const close4 = document.querySelector('.closebtn4');

// Only for Mobile: When the user clicks on <span> (x), close the modal
close1.addEventListener("touchend", function() {
  singleVid1.style.display = 'none';
  vimeoPause1();  
});

close2.addEventListener("touchend", function() {
  singleVid2.style.display = 'none';
  vimeoPause2();  
});

close3.addEventListener("touchend", function() {
  singleVid3.style.display = 'none';
  vimeoPause3();  
});

close4.addEventListener("touchend", function() {
  singleVid4.style.display = 'none';
  vimeoPause4();  
});


//OLD
// window.onclick = function (event) {
//   if (event.target == singleVid1) {
//     singleVid1.style.display = 'none';
//     vimeoPause1();
//   }
//   if (event.target == singleVid2) {
//     singleVid2.style.display = 'none';
//     vimeoPause2();
//   }
//   if (event.target == singleVid3) {
//     singleVid3.style.display = 'none';
//     vimeoPause3();
//   }
//   if (event.target == singleVid4) {
//     singleVid4.style.display = 'none';
//     vimeoPause4();
//   }
// };
