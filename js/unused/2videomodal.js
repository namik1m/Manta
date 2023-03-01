import Plyr from './plyr.js';
const player = new Plyr('#player');
console.log(player);

const footer = document.querySelector('.footer');
const videoThumb = document.querySelectorAll('.open-video');
const realVideo = document.querySelectorAll('.plyr__video-embed');
const iFrames = document.querySelectorAll('iframe');
console.log(iFrames[0]);
var player1 = new Vimeo.Player(iFrames[0]);
console.log(player1);
var isPausedByModal = false;

var indx = 0;
const listThumb = Array.from(videoThumb);
const listRealvideos = Array.from(realVideo);
console.log(listThumb);
console.log(listRealvideos);
console.log(realVideo[1]);

listThumb.forEach(function (thumb, indx) {
  thumb.addEventListener('click', function () {
    listRealvideos[indx++].style.display = 'block';
  });
});

function vimeoPlay1() {
  player1.play();
}

function vimeoPause1() {
  player1.pause();
}

const closeBtn = document.querySelectorAll('.closebtn');
const closeBtnList = Array.from(closeBtn);
console.log(closeBtnList);

closeBtnList.forEach(function (btn, indx) {
  btn.addEventListener('click', function () {
    listRealvideos[indx++].style.display = 'none';
  });
});

const singleVid1 = document.getElementById('player');
const singleVid2 = document.getElementById('player2');
const singleVid3 = document.getElementById('player3');
const singleVid4 = document.getElementById('player4');
const singleVid5 = document.getElementById('player5');
const singleVid6 = document.getElementById('player6');
const singleVid7 = document.getElementById('player7');
const singleVid8 = document.getElementById('player8');
const singleVid9 = document.getElementById('player9');
const singleVid10 = document.getElementById('player10');
const singleVid11 = document.getElementById('player11');
const singleVid12 = document.getElementById('player12');
const singleVid13 = document.getElementById('player13');
const singleVid14 = document.getElementById('player14');
const singleVid15 = document.getElementById('player15');
const singleVid16 = document.getElementById('player16');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == singleVid1) {
    singleVid1.style.display = 'none';
    vimeoPause1();
  }
  if (event.target == singleVid2) {
    singleVid2.style.display = 'none';
  }
  if (event.target == singleVid3) {
    singleVid3.style.display = 'none';
  }
  if (event.target == singleVid4) {
    singleVid4.style.display = 'none';
  }
  if (event.target == singleVid5) {
    singleVid5.style.display = 'none';
  }
  if (event.target == singleVid6) {
    singleVid6.style.display = 'none';
  }
  if (event.target == singleVid7) {
    singleVid7.style.display = 'none';
  }
  if (event.target == singleVid8) {
    singleVid8.style.display = 'none';
  }
  if (event.target == singleVid9) {
    singleVid9.style.display = 'none';
  }
  if (event.target == singleVid10) {
    singleVid10.style.display = 'none';
  }
  if (event.target == singleVid11) {
    singleVid11.style.display = 'none';
  }
  if (event.target == singleVid12) {
    singleVid12.style.display = 'none';
  }
  if (event.target == singleVid13) {
    singleVid13.style.display = 'none';
  }
  if (event.target == singleVid14) {
    singleVid14.style.display = 'none';
  }
  if (event.target == singleVid15) {
    singleVid15.style.display = 'none';
  }
  if (event.target == singleVid16) {
    singleVid16.style.display = 'none';
  }
};

/*http://jsfiddle.net/varit05/foq92ktw/*/
