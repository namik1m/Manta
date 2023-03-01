
//https://stackoverflow.com/questions/48606092/select-and-change-the-image-source-of-nth-elment-using-jquery-or-css 
//study the last comments, forEach

const footer = document.querySelector(".footer");
const videoThumb = document.querySelectorAll(".open-video");
const realVideo = document.querySelectorAll(".plyr__video-embed");
var indx = 0;
const listThumb = Array.from(videoThumb);
const listRealvideos = Array.from(realVideo);
console.log(listThumb);
console.log(listRealvideos);
console.log(realVideo[1]);

listThumb.forEach(function(thumb, indx) {
    thumb.addEventListener("click", function(){
        listRealvideos[indx++].style.display = "block";
    })
})

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

console.log(videoThumb);
const span = document.getElementsByClassName("closebtn");
console.log(span);



// When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   realVideo.style.display = "none";
// };


Array.from(span).forEach((el) => {
    "click", function() {
        realVideo.style.display = "none";
    }
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == realVideo) {
    realVideo.style.display = "none";
  }
};

