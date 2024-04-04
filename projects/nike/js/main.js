// header - menu
$(function(){
  var subMenu = false;
  var onMainMenu = false;
  for(let i=0; i<$('.gnb>li').length; i++){
    $('.gnb>li').eq(i).mouseenter(()=> {
      if(subMenu){
        $('.lnb').eq(i).show();
      }
      $(`.lnb:not(:eq(${i}))`).hide();
      $('.gnb').addClass('on');
    })
    $('.gnb').mouseenter((e)=> {
      $(e.target).siblings().stop().slideDown();
      subMenu = true;
      onMainMenu = true;
    })
    $('.gnb').mouseleave(()=> {
      $('.lnb').stop().slideUp();
      subMenu = false;
      onMainMenu = false;
    })
  }

  // main - video
  setTimeout(()=>{
    $('div.main img').fadeIn(1000)
    $('div.main .text').delay(1000).fadeIn(1000);
    $('div.main .text iconify-icon').delay(2000).fadeIn(600);
  },6000)
  


  // cont1 피지컬2 party_inpo area
  $('.party').mouseenter(()=>{
    $('.party .title iconify-icon').addClass('on');
    $('.party_info').stop().slideDown();
    $('.party_info').addClass('on');    
  })
  
  $('.party').mouseleave(()=>{
    $('.party .title iconify-icon').removeClass('on');
    $('.cont1 .contents img').mouseenter(()=>{
      $('.party_info').stop().slideUp();
      $('.party_info').removeClass('on');
    })
    $('.cont1 .contents .text').mouseenter(()=>{
      $('.party_info').stop().slideUp();
      $('.party_info').removeClass('on');
    })
    $('.party_info').mouseenter(()=>{
    $('.party .title iconify-icon').addClass('on');
    $('.party_info').addClass('on');
  })
  })
  $('.party_info').mouseleave(()=>{
    $('.party .title iconify-icon').removeClass('on');
    if(!$('.party .title iconify-icon').hasClass('on')){
      $('.party_info').stop().slideUp();
      $('.party_info').removeClass('on');
    }
  })

  // iconic slide
  $('.side_slide_wrapper').prepend($('.side_slide_wrapper .slide').last());
  $('.side_slide_wrapper .slide').eq(0).addClass('prev');
  $('.side_slide_wrapper .slide').eq(0).siblings().removeClass('prev');
  // console.log('slide : ' , $('.side_slide_wrapper .slide'));
  // console.log('slide[last] : ' , $('.side_slide_wrapper .slide').last());
  $('.center_slide_wrapper .btns .btn').click(function(e) {
    if($(e.target).hasClass('next')){ //next_btn event
      $('.center_slide_wrapper .slides').animate({
        left : '-100%'
      },600,'easeInOutCirc', function(){
        $('.center_slide_wrapper .slides').css('left',0)
        $('.center_slide_wrapper .slides').append($('.center_slide_wrapper .slide').eq(0));
        // $('.center_slide_wrapper .slide').eq(0).addClass('now');
      })
      // side_slide
      $('.side_slide_wrapper .slide').eq(1).removeClass('now').addClass('prev');
      $('.side_slide_wrapper').delay(200).animate({
        left : "-33.3333%"
      },400,function(){
        $('.side_slide_wrapper .slide').eq(2).removeClass('prev').addClass('now');
        $('.side_slide_wrapper .slide').eq(0).removeClass('prev');
        $('.side_slide_wrapper').append($('.side_slide_wrapper .slide').eq(0));
        $('.side_slide_wrapper .slide').eq(0).addClass('prev');
      //   $('.side_slide_wrapper .slide').eq(0).siblings().removeClass('prev')
        $('.side_slide_wrapper').css('left','0');
      })
    } else { //prev_btn event
      $('.center_slide_wrapper .slides').prepend($('.center_slide_wrapper .slide').last());
      $('.center_slide_wrapper .slides').css('left','-100%');
      $('.center_slide_wrapper .slides').animate({
        left : 0
      },600,'easeInOutCirc', function(){
        ;
      })
      // slide_slide
      $('.side_slide_wrapper').prepend($('.side_slide_wrapper .slide').last().addClass('prev'));
      $('.side_slide_wrapper .slide').eq(2).removeClass('now');
      $('.side_slide_wrapper').css('left','-33.3333%')
      $('.side_slide_wrapper').delay(200).animate({
        left : 0
      },400,function(){
        $('.side_slide_wrapper .slide').eq(0).siblings().removeClass('prev');
        $('.side_slide_wrapper .slide').eq(1).addClass('now');
      //   $('.side_slide_wrapper .slide').eq(0).removeClass('prev').addClass('now');
        // $('.side_slide_wrapper').css('left',0)
      })
      
  }
})


})  

// ariMax - slide
  var swiper1 = new Swiper(".airMax-swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    pagination: {
      clickable: true
    },
    navigation: {
      nextEl: "#airMax .swiper-button-next",
      prevEl: "#airMax .swiper-button-prev",
    },
  });
// trend - slide
  var swiper2 = new Swiper(".trend-swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    pagination: {
      clickable: true
    },
    navigation: {
      nextEl: "#trend .swiper-button-next",
      prevEl: "#trend .swiper-button-prev",
    },
  });
// spring - slide
  var swiper3 = new Swiper(".spring-swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    pagination: {
      clickable: true
    },
    navigation: {
      nextEl: "#spring .swiper-button-next",
      prevEl: "#spring .swiper-button-prev",
    },
  });
// sport - slide
  var swiper4 = new Swiper(".sport-swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    pagination: {
      clickable: true
    },
    navigation: {
      nextEl: "#sport .swiper-button-next",
      prevEl: "#sport .swiper-button-prev",
    },
  });
