// header 동작
const header = document.querySelector('header');
document.addEventListener('wheel',(e)=>{
  if(e.deltaY > 0){
    console.log('yes')
    gsap.to('header',{
      y : '-150px',
      duration : 0.4
    })
  } else {
    gsap.to('header',{
      y : 0,
      duration : 0.4
    })
  }
})


// main.html - slide 설정
var swiper_home = new Swiper(".homeSwiper", {
  // spaceBetween: 30,
  effect: "fade",
  loop : true,
  autoplay: {//자동슬라이드 (false-비활성화)  
  delay: 2500, // 시간 설정  
  disableOnInteraction: false, // false-스와이프 후 자동 재생  
},
  navigation: {
    nextEl: "#home .swiper-button-next",
    prevEl: "#home .swiper-button-prev",
  },
  pagination: {
    el: "#home .swiper-pagination",
    clickable: true,
  },
});
const main_h2 = document.querySelector('#edam .title h2');
gsap.to(main_h2, {
  // transform : 'rotateY(-180deg)',
  // duration : 0.3
})

// artist$.html - header 배경
const artist_header = document.querySelector('.artist_page #header');
console.log(artist_header);

window.addEventListener('scroll', function(){
  if(this.scrollY<=666){
    console.log(this.scrollY)
    artist_header.style = 'background-color: transparent !important;'
  }else {
    artist_header.style = 'color:#111;background-color: #fff !important;'
  }
});

// artist$.html - tap menu 전환
const artists = document.querySelectorAll('#artists .artist');
// console.log(artists);
const tapMenu1Els = document.querySelectorAll('#artist1 .works dt');
const tapContent1Els = document.querySelectorAll('#artist1 .works dd');
const tapMenu2Els = document.querySelectorAll('#artist2 .works dt');
const tapContent2Els = document.querySelectorAll('#artist2 .works dd');
const tapMenu3Els = document.querySelectorAll('#artist3 .works dt');
const tapContent3Els = document.querySelectorAll('#artist3 .works dd');
const tapMenu1 = [];
const tapMenu2 = [];
const tapMenu3 = [];
const tapMenus = [];
tapMenu1.push(tapMenu1Els, tapContent1Els);
tapMenu2.push(tapMenu2Els, tapContent2Els);
// console.log(tapMenu2)
tapMenu3.push(tapMenu3Els, tapContent3Els);
tapMenus.push(tapMenu1, tapMenu2, tapMenu3);
// console.log(tapMenus[0][0])
// console.log(tapMenus[1][0].length)
for(let i=0; i<tapMenus.length; i++){  
    if(tapMenus[i][0].length > 0){
      console.log(tapMenus[i][0]);
      tapMenus[i][0].forEach((dt, index) =>{
        // console.log(dt)
        dt.addEventListener('click',()=>{
          tapMenus[i][0].forEach((dtEl, idx) => {
            dtEl.classList.remove('on')
            tapMenus[i][1][idx].classList.remove('on')
          })
          dt.classList.add('on')
          // dt.classList.add('on')
          tapMenus[i][1][index].classList.add('on')
        })
      })
    }
}

// tapMenu1Els.forEach((tap,idx) =>{
//   tap.addEventListener('click',()=>{
//     tapMenu1Els.forEach((it,idx) => {
//     it.classList.remove('on');
//     tapContent1Els[idx].classList.remove('on');
//   });
//   tap.classList.add('on');
//   tapContent1Els[idx].classList.add('on');
// })
// })

//  artist1.html - album slide img
const alb_sliders1 = document.querySelectorAll('#artist1 .album .swiper-slide');

alb_sliders1.forEach((item, idx) => {
  item.style.background = `url(../images/album_${idx+1}.png) no-repeat center/cover`
})
// artist1.html - album slide 설정
var swiper_art1_alb = new Swiper("#artist1 .albumSwiper ", {
  spaceBetween: 30,
  loop : true,
  slidesPerView : 4,
  navigation: {
    nextEl: "#artist1 .album .swiper-button-next",
    prevEl: "#artist1 .album .swiper-button-prev",
  },
  pagination: {
    el: "#artist1 .album .swiper-pagination",
    clickable: true,
  },
});
// drama slide img
const drm_sliders1 = document.querySelectorAll('#artist1 .drama .swiper-slide');

drm_sliders1.forEach((item, idx) => {
  item.style.background = `url(../images/art1_d${idx+1}.png) no-repeat center/cover`
})
// artist1.html - drama slide 설정
var swiper_art1_drm = new Swiper("#artist1 .dramaSwiper ", {
  spaceBetween: 30,
  loop : true,
  slidesPerView : 4,
  navigation: {
    nextEl: "#artist1 .drama .swiper-button-next",
    prevEl: "#artist1 .drama .swiper-button-prev",
  },
  pagination: {
    el: "#artist1 .drama .swiper-pagination",
    clickable: true,
  },
});

//  artist1.html - movie slide img
const mv_sliders1 = document.querySelectorAll('#artist1 .movie .swiper-slide');

mv_sliders1.forEach((item, idx) => {
  item.style.background = `url(../images/art1_m${idx+1}.png) no-repeat center/cover`
})
// artist1.html - movie slide 설정
var swiper_art1_mv = new Swiper("#artist1 .movieSwiper ", {
  spaceBetween: 30,
  slidesPerView : 3
});

// **artist2 page
// artist2.html - drama slide img
const drm_sliders2 = document.querySelectorAll('#artist2 .drama .swiper-slide');

drm_sliders2.forEach((item, idx) => {
  item.style.background = `url(../images/art2_d${idx+1}.png) no-repeat center/cover`
})
// artist2.html - drama slide 설정
var swiper_art2_drm = new Swiper("#artist2 .dramaSwiper ", {
  spaceBetween: 30,
  loop : true,
  slidesPerView : 4,
  navigation: {
    nextEl: "#artist2 .drama .swiper-button-next",
    prevEl: "#artist2 .drama .swiper-button-prev",
  },
  pagination: {
    el: "#artist2 .drama .swiper-pagination",
    clickable: true,
  },
});

//  artist2.html - movie slide img
const mv_sliders2 = document.querySelectorAll('#artist2 .movie .swiper-slide');

mv_sliders2.forEach((item, idx) => {
  item.style.background = `url(../images/art2_m${idx+1}.png) no-repeat center/cover`
})
// artist2.html - movie slide 설정
var swiper_art2_mv = new Swiper("#artist2 .movieSwiper ", {
  spaceBetween: 30,
  slidesPerView : 4,
  loop :true,
  navigation: {
    nextEl: "#artist2 .movie .swiper-button-next",
    prevEl: "#artist2 .movie .swiper-button-prev",
  },
  pagination: {
    el: "#artist2 .movie .swiper-pagination",
    clickable: true,
  },
});

//  artist2.html - album slide img
const alb_sliders2 = document.querySelectorAll('#artist2 .album .swiper-slide');

alb_sliders2.forEach((item, idx) => {
  item.style.background = `url(../images/art2_a${idx+1}.png) no-repeat center/cover`
})
// artist1.html - album slide 설정
var swiper_art2_alb = new Swiper("#artist2 .albumSwiper ", {
  spaceBetween: 40,
  loop : true,
  slidesPerView : 3,
  navigation: {
    nextEl: "#artist2 .album .swiper-button-next",
    prevEl: "#artist2 .album .swiper-button-prev",
  },
  pagination: {
    el: "#artist2 .album .swiper-pagination",
    clickable: true,
  },
});

// **artist3 page

//  artist3.html - album slide img
const alb_sliders3 = document.querySelectorAll('#artist3 .album .swiper-slide');

alb_sliders3.forEach((item, idx) => {
  item.style.background = `url(../images/art3_a${idx+1}.png) no-repeat center/cover`
})
// artist3.html - album slide 설정
var swiper_art3_alb = new Swiper("#artist3 .albumSwiper ", {
  spaceBetween: 40,
  loop : true,
  slidesPerView : 3,
  navigation: {
    nextEl: "#artist3 .album .swiper-button-next",
    prevEl: "#artist3 .album .swiper-button-prev",
  },
  pagination: {
    el: "#artist3 .album .swiper-pagination",
    clickable: true,
  },
});
// drama-ost slide img
const drm_sliders3 = document.querySelectorAll('#artist3 .drama .swiper-slide');

drm_sliders3.forEach((item, idx) => {
  item.style.background = `url(../images/art3_ost${idx+1}.png) no-repeat center/cover`
})
// artist3.html - drama-ost slide 설정
var swiper_art3_drm = new Swiper("#artist3 .dramaSwiper ", {
  spaceBetween: 30,
  slidesPerView : 4
});
//  artist2.html - movie-group slide img
const mv_sliders3 = document.querySelectorAll('#artist3 .movie .swiper-slide');

mv_sliders3.forEach((item, idx) => {
  item.style.background = `url(../images/art3_group${idx+1}.jpg) no-repeat center/cover`
})
// artist3.html - movie-group slide 설정
var swiper_art3_mv = new Swiper("#artist3 .movieSwiper ", {
  spaceBetween: 30,
  slidesPerView : 4,
  loop :true,
  navigation: {
    nextEl: "#artist3 .movie .swiper-button-next",
    prevEl: "#artist3 .movie .swiper-button-prev",
  },
  pagination: {
    el: "#artist3 .movie .swiper-pagination",
    clickable: true,
  },
});

// audition page
// tap Menu
const taps = document.querySelectorAll('#audition .content>dl>dt');
const info_dds = document.querySelectorAll('#audition .info>dd');
const faq_dd = document.querySelector('#audition .faq>dd');
console.log(info_dds, faq_dd);
// taps[0].classList.add('on');
// taps[1].classList.remove('on');
// faq_dd.classList.add('hide')
taps.forEach(tap =>{
  tap.nextElementSibling.classList.add('hide');
  if(tap.classList.contains('on')){
    tap.nextElementSibling.classList.remove('hide')
  }
  tap.addEventListener('click',()=>{
    for(let i=0; i<taps.length; i++){
      taps[i].nextElementSibling.classList.add('hide');
      taps[i].classList.remove('on');
    }
    tap.classList.add('on');
    tap.nextElementSibling.classList.remove('hide');
  })
})

const questEls = document.querySelectorAll('.faq ul li .quest');
const askEls = document.querySelectorAll('.faq ul li .ask');
const questArrows = document.querySelectorAll('.faq ul li p iconify-icon')
askEls.forEach(ask => ask.style = 'display:none;')
questEls.forEach((quest,idx) =>{
  var isOpen =false;
  quest.addEventListener('click',()=>{
    console.log(isOpen)
    if(!isOpen){
      askEls[idx].style = 'display : block;'
      questArrows[idx].style = 'transform:rotate(180deg);'
    } else {
      askEls[idx].style = 'display : none;'
      questArrows[idx].style = 'transform:rotate(0deg);'
    };
    isOpen = !isOpen;
  })
})