// const videoThumb = document.querySelector(".open-video");
// const realVideo = document.querySelector(".plyr__video-embed"); 
const span = document.getElementsByClassName("closebtn")[0];
const videoThumb1 = document.getElementById("d1");
const videoThumb2 = document.getElementById("d2");
const realVideo1 = document.querySelector(".plyr__video-embed"); 
const realVideo2 = document.querySelector(".vid2");
const footer = document.querySelector(".footer");

videoThumb1.addEventListener("click", function () {
    realVideo1.style.display = "block";
  });


  videoThumb2.addEventListener("click", function () {
    realVideo2.style.display = "block";
  });  

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  realVideo1.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == realVideo1) {
    realVideo1.style.display = "none";
  }
};

