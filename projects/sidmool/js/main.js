$(function(){
  // gnb
  $('nav>ul>li.hall_menu').mouseenter(function(){
    $('header').css("background","#fafafc");
    $('header .inner>ul').stop().slideDown();
    $('.sub_menu_bg').slideDown();
  });
  $('header .inner>ul').mouseleave(function(){
    $(this).stop().slideUp();
    $('.sub_menu_bg').slideUp();
  });
  // 부메뉴 show-hide
  $('header .inner>ul').hide();
  $('.sub_menu_bg').hide();
  $('header .inner>ul>li').mouseenter(function(){
    $(this).children('ul').css("display","flex");
    $(this).children('ul').show();
    $(this).children('div').show();
  });
  $('header .inner>ul>li').mouseleave(function(){
    $(this).children('ul').css("display","none");
    $(this).children('div').css("display","none");
  });
  
  // slide
  var swiper1 = new Swiper(".mainSwiper", {   
    slidesPerView : 1,
    centeredSlides: true, //센터모드  
    autoplay: {//자동슬라이드 (false-비활성화)  
      delay: 4000, // 시간 설정  
    },
    loop : true,// 슬라이드 반복 여부
    pagination: { // 호출(pager) 여부  
      el: ".mainSwiper .swiper-pagination", //버튼을 담을 태그 설정  
      clickable: true, // 버튼 클릭 여부  
    },   
    navigation: { 
      nextEl: ".mainSwiper .swiper-button-next",   
      prevEl: ".mainSwiper .swiper-button-prev",   
    },
  });
  var swiper2 = new Swiper(".newSwiper", {   
    slidesPerView : 4,
    spaceBetween : 30,
    loop : false,// 슬라이드 반복 여부
    pagination: { // 호출(pager) 여부  
      el: ".new .swiper-pagination", //버튼을 담을 태그 설정  
      clickable: true, // 버튼 클릭 여부  
    },   
    navigation: { 
      nextEl: ".new .swiper-button-next",   
      prevEl: ".new .swiper-button-prev",   
    },
  });
  var swiper3 = new Swiper(".bestSwiper", {   
    slidesPerView : 4,
    spaceBetween : 30,
    loop : false,// 슬라이드 반복 여부
    pagination: { // 호출(pager) 여부  
      el: ".best .swiper-pagination", //버튼을 담을 태그 설정  
      clickable: true, // 버튼 클릭 여부  
    },   
    navigation: { 
      nextEl: ".best .swiper-button-next",   
      prevEl: ".best .swiper-button-prev",   
    },
  });
  var swiper4 = new Swiper(".concernSwiper", {   
    slidesPerView : 4,
    spaceBetween : 30,
    loop : false,// 슬라이드 반복 여부
    pagination: { // 호출(pager) 여부  
      el: ".concern .swiper-pagination", //버튼을 담을 태그 설정  
      clickable: true, // 버튼 클릭 여부  
    },   
    navigation: { 
      nextEl: ".concern .swiper-button-next",   
      prevEl: ".concern .swiper-button-prev",   
    },
  });
  var swiper5 = new Swiper(".typeSwiper", {   
    slidesPerView : 4,
    spaceBetween : 30,
    loop : false,// 슬라이드 반복 여부
    pagination: { // 호출(pager) 여부  
      el: ".type .swiper-pagination", //버튼을 담을 태그 설정  
      clickable: true, // 버튼 클릭 여부  
    },   
    navigation: { 
      nextEl: ".type .swiper-button-next",   
      prevEl: ".type .swiper-button-prev",   
    },
  });
  var swiper6 = new Swiper(".infoSwiper", {   
    slidesPerView : 5,
    spaceBetween : 30,
    loop : false,// 슬라이드 반복 여부
    pagination: { // 호출(pager) 여부  
      el: ".info .swiper-pagination", //버튼을 담을 태그 설정  
      clickable: true, // 버튼 클릭 여부  
    },   
    navigation: { 
      nextEl: ".info .swiper-button-next",   
      prevEl: ".info .swiper-button-prev",   
    },
  });
  var swiper7 = new Swiper(".bbsSwiper", {   
    spaceBetween : 30,
    loop : false,// 슬라이드 반복 여부
    pagination: { // 호출(pager) 여부  
      el: ".bbs .swiper-pagination", //버튼을 담을 태그 설정  
      clickable: true, // 버튼 클릭 여부  
    },   
    navigation: { 
      nextEl: ".bbs .swiper-button-next",   
      prevEl: ".bbs .swiper-button-prev",   
    },
  });
});