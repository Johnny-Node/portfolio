// main.html - slide 설정
var swiper1 = new Swiper(".homeSwiper", {
  spaceBetween: 30,
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


// notice 페이지 이동 버튼
const pageBtnEls = document.querySelectorAll('.page-btn');
const pages = document.querySelectorAll('.page');
const prev = document.querySelector('.pagenation .left_btns .prev');
const front = document.querySelector('.pagenation .left_btns .front');
const next = document.querySelector('.pagenation .right_btns .next');
const last = document.querySelector('.pagenation .right_btns .last');

pageBtnEls.forEach((btn,idx) =>{
  btn.addEventListener('click',()=>{
    pages.forEach(page => page.classList.remove('on'));
    pages[idx].classList.add('on');
    btn.classList.add('on');
  });
  prev.addEventListener('click',()=>{
    if(! idx == 0 ){
      btn.classList.remove('on')
      pageBtnEls[idx - 1].classList.add('on')
      console.log(pageBtnEls)
    }
  })
  front.addEventListener('click',()=>{

  })
  next.addEventListener('click',()=>{
    
  })
  last.addEventListener('click',()=>{

  })
})

// artist1.html - tap menu 전환
const tapMenuEls = document.querySelectorAll('#artist1 .works dt');
const tapContentEls = document.querySelectorAll('#artist1 .works dd');
// console.log(tapMenuEls);
tapMenuEls.forEach((tap,idx) =>{
  tap.addEventListener('click',()=>{
    tapMenuEls.forEach((it,idx) => {
      it.classList.remove('on');
      tapContentEls[idx].classList.remove('on');
    });
    tap.classList.add('on');
    tapContentEls[idx].classList.add('on');
  })
})

// album slide img
const alb_sliders1 = document.querySelectorAll('#artist1 .album .swiper-slide');

alb_sliders1.forEach((item, idx) => {
  item.style.background = `url(../images/album_${idx+1}.png) no-repeat center/cover`
})
// artist1.html - album slide 설정
var swiper2 = new Swiper("#artist1 .albumSwiper ", {
  spaceBetween: 20,
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
var swiper2 = new Swiper("#artist1 .dramaSwiper ", {
  spaceBetween: 20,
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
var swiper3 = new Swiper("#artist1 .movieSwiper ", {
  spaceBetween: 20,
  slidesPerView : 3
});

// artist2.html - drama slide img
const drm_sliders2 = document.querySelectorAll('#artist1 .drama .swiper-slide');

drm_sliders2.forEach((item, idx) => {
  item.style.background = `url(../images/art2_d${idx+1}.png) no-repeat center/cover`
})
// artist2.html - drama slide 설정
var swiper2 = new Swiper("#artist2 .dramaSwiper ", {
  spaceBetween: 20,
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
