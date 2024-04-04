// 가사 첫줄: first, 두번째: second
const firstEl = document.querySelector('.lyrics .first');
const secondEl = document.querySelector('.lyrics .second');
const playerEl = document.querySelector('#player');

let lyric1st = function(firstText) {
    firstEl.textContent = `${firstText}`;
    gsap.to(firstEl,1.2,{
      ease: "power1.inOut",
      opacity: 1
    });
  };
  let lyric2nd = function(secondText) {
    secondEl.textContent = `${secondText}`;
    gsap.to(secondEl,1.2,{
      ease: "power1.inOut",
      opacity: 1
    });
  };
  let lyricHide = function(fadeTime=1.2){
    setTimeout(() => {
      gsap.to(firstEl,fadeTime,{
      ease: "power1.inOut",
      opacity: 0
    });
    gsap.to(secondEl,fadeTime,{
      ease: "power1.inOut",
      opacity: 0
    });
  }, 1);
}

// youtube api control
var tag = document.createElement('script');
var player;
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: '7ihLv8_Vd-4',
    playerVars : {
      autoplay : true,
      loop : true,
      mute : true,
      playlist : '7ihLv8_Vd-4'
    }
  });
}
// function onPlayerReady(event) {
  // player.pauseVideo()
  // player.getVolume(50)
	// player.unMute();//볼륨 크기
  // player.getVolume(50);

// }
// function onPlayerReady(event) {
  player.unMute();
//   //로딩된 후에 실행될 동작을 작성한다(소리 크기,동영상 속도를 미리 지정하는 것등등...)
  // event.target.unMute();
// }
// var timing;
let lyricSet = function(first,second,end,firstText,secondText,fadeTime=1.2){
  firstEl.style = 'opacity : 0;'
  secondEl.style = 'opacity : 0;'
  setInterval(()=>{
    var timing = player.getCurrentTime();
    if(timing >first && timing <first+1){
      // if(!secondText.textContent){
      //   second.style = 'display : none;';
      // } else {
      //   second.style = 'display : block;';
      // }
      lyric1st(`${firstText}`);
    };
    if(timing >second && timing <second+1){
      lyric2nd(`${secondText}`);
    };
    if(timing >end && timing <end+1){
      return lyricHide(fadeTime);
    };
  }, 1000)
}
  
// 동영상 재생시간 함수 : player.getCurrentTime()
  // lyricSet(first,second,end,firstText,secondText)
  lyricSet(1,1.5,13,"최유리 | 숲", "");
  lyricSet(15,18,25.5,"난 저기 숲이 돼볼게", "너는 자그맣기만 한 언덕 위를");
  lyricSet(28,31,36.5,'오르며 날 바라볼래?','나의 작은 마음 한구석이어도 돼');
  lyricSet(40.5,43.5,45.2,'길을 터 보일게,','나를 베어도 돼',0.8);
  lyricSet(46,49,52,'날 지나치지 마','날 보아줘');
  lyricSet(53,55.5,58,'나는 널 들을게,','이젠 말해도 돼',0.8);
  lyricSet(59,60,63,'날 보며', '');
  lyricSet(66,72,76.5,`아, 숲이 아닌 바다이던가 ?`, '옆엔 높은 나무가 있길래');
  lyricSet(78,81.5,83.2,'하나라도 분명히 하고파', '난 이제',0.8);
  lyricSet(84.01,84,91,'물에 가라앉으려나?', '');
  lyricSet(107,110,115,'난 저기 숲이 돼볼래', '나의 옷이 다 눈물에 젖는대도');
  lyricSet(118.5,123,128,'아, 바다라고 했던가?', '그럼 내 눈물 모두 버릴 수 있나?');
  lyricSet(132,135,138,'길을 터 보일게,', '나를 베어도 돼');
  lyricSet(139,142,143.5,'날 밀어내지 마', '날 네게 둬');
  lyricSet(145,148,150.2,'나는 내가 보여,', '난 항상 나를 봐',0.8);
  lyricSet(150.51,151.5,154,'내가 늘 이래', '');
  lyricSet(157.5,163,169,'아, 숲이 아닌 바다이던가?','옆엔 높은 나무가 있길래');
  lyricSet(170,174,176,'하나라도 분명히 하고파','난 이제');
  lyricSet(177.01,177,180.5,'물에 가라앉으려나?', '');
  lyricSet(182,189,193,'나의 눈물 모아 바다로만','흘려보내 나를 다 감추면');
  lyricSet(195,198,200.2,'기억할게, 내가', '뭍에 나와 있어',0.8);
  lyricSet(201.01,210,206,'그때 난 숲이려나?', '');


const mv = document.querySelector('#player');