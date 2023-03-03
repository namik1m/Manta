# Manta
This is a web development project that I work for a Rotterdam-based filmmaker Davids Danoss.

*****************************************************************************************************
03 March 2023 [EN]
Missions that I want to resolve:

1. Index.html : Opening and close the SidebarMenu with scrolling/wheel event JS. 
//Last time I tried to mix JS scroll and wheel event for open and close menu function. At first, it seems to work, but it doesn't work anymore, after doing the first open/close menu with scrolling :/ 
// scroll event is not recognised after the first attempt. 
// A few assumptions/ideas: I think mixing scroll and wheel is not a good idea. At the moment, I've used a CSS trick to set margin-bottom:2px on the height of container(<main>) to make it scrollable in JS, but it should be possible to succeed the scrolling/wheeling without making this extra space in the bottom. Maybe setting full 100vh or 100% on the container, and using solely 'wheel' could work? Wanna research.
    
2. There are two arrow buttons (position:fixed) in about.html. The page is wide, horizontally scrollable. 
HTML structure:
  main class="container"
     section class="section section1"
     section class="section section2"
     section class="section section3"      
  /main  
container has width 100% and section has 100vw of width.  
The idea is that clicking right arrow, you move from sec1->sec2, sec2->sec3. Clicking a left arrow, move from sec3->sec2, sec2->sec1.
I'd like to learn how to make an efficient logic in JS. Calculating 1++ / 1-- ....
I wrote some inefficient script codes inside of the HTML.

------------------------------------------------------------------------------------------------------------

03 Mar 2023 [KR]
풀고싶은 문제들:

1. 인덱스html에서 JS 혹은 JQuery 스크롤/휠 이벤트로 숨겨진(css상 translateX:-100%)인 풀사이즈메뉴를 열고 닫게 하고싶습니다.
저번에 잘 봐주신 덕분에 첫 시도상 잘 되는듯 하지만, 한번 스크롤로 메뉴 열고닫고를 시도한 후에 작동안하네요ㅠㅠ! (한번 실행 후 더이상 scroll event를 인식하지 않는듯) 
-> 몇가지 추측/아이디어: wheel과 scroll을 섞어써서 그럴까? 차라리 css 컨테이너섹션에서 꼼수처럼 썻던 margin-bottom:2px;을 없애고 (높이를 풀로 100vh or 100%로) JS wheel 만 써보는 방법
-> 혹은 preventDefault(); / passive:false 의 사용같은것과 연관이 되는것인지..

2. about.html 페이지에 position:fixed인 연두색 화살표 아이템들이 있습니다. 이 about.html는 전체 컨테이너 가로사이즈가 굉장히 긴 horizontally-scrolling page입니다.
main class="container"
   section class="section section1"
   section class="section section2"
   section class="section section3"       
/main
이런식의구조이고 container의 width는 100%이고, section의 width는 100vw입니다. 이것은 옳은것같아요.
제가 구현하고싶은 기능은: 이 연두색 오른쪽 화살표를 누를때마다 section1 -> section2, section2 -> section3 
마찬가지로 왼쪽 화살표 클릭시 section3 -> section2, section2 -> section1
현재 저는 html페이지안에 script를 무식하게 썼습니다. 일일히 const로 각 섹션을 지정하는 식으로.
하지만, 효율적인 코드로 ++1 씩 계산되는 하나의 깔끔한 기능을 쓰는 로직을 배우고 싶습니다. forEach? for loop을 사용하는것인지..       
            
JS 섹션 이동 기능: 첨엔 scrollTo/scrollLeft가 더 낫다고 생각했는데 몇차례 시도 후 scrollIntoView가 더 괜찮다고 판단했습니다. (틀릴수도..)

일단 이렇게 내일 공부해보고싶습니다!       
*****************************************************************************************************

