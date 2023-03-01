
$('.mdc-list-item').on("click",function(){
    var isClicked = $(this).hasClass("list-item-clicked"); // am I clicked?
    $('.mdc-list-item').removeClass("list-item-clicked");  // un-click everything
    if(!isClicked)
        $(this).toggleClass("list-item-clicked"); // click me if needed
})

// const allVideos =  document.querySelector('.inside');
// const theater = document.getElementById('theater');
// const animation = document.getElementById('animation');
// const thVideos =  document.querySelector('.th');
// const aniVideos =  document.querySelector('.ani');
// theater.addEventListener('click', function () {
//     thVideos.style.filter = "brightness(100%)";
//     allVideos.style.filter = "brightness(0%)";
// });