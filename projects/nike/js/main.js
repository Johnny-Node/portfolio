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
    $('.party_info').stop().slideDown().addClass('on');
  })
  
  
  $('.party').mouseleave(()=>{
    $('.party_info').mouseenter(()=> $('.party_info').stop().slideDown())
    if($('.party_info').hasClass('on')){
      $('.party .title iconify-icon').removeClass('on');
      $('.party_info').stop().slideUp();
      console.log('not on')
    }
  })
  
  $('.party_info').mouseenter(()=>{
    $('.party .title iconify-icon').addClass('on');
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
//(mobile)전체메뉴 아이콘 클릭 이벤트
  $('.menuBtn').click(()=>{
    $('.m_sub_menu_area').removeClass('off').animate({
    right : 0
    },300);
    $('.m_sub_bg').fadeIn(500);
    $('#wrap').addClass('behind');
  })
//(mobile)전체메뉴 닫기
  $('.m_sub_bg').click(()=>{
      $('.m_sub_menu_area').animate({
        right : '-100%'
      },300,()=>{
        $('.m_sub_menu_area').addClass('off');
      });    
      $('.m_sub_bg').fadeOut(500);
      $('#wrap').removeClass('behind');
  })
  $('.m_sub_close').click(()=>{
    $('.m_sub_menu_area').animate({
      right : '-100%'
    },300,()=>{
      $('.m_sub_menu_area').addClass('off');
    }); 
    $('.m_sub_bg').fadeOut(500);
    $('#wrap').removeClass('behind');
  })
// (mobile) 메뉴 이동 (depth 증가)
    $('.m_sub_depth a').click((e)=>{
      $(e.currentTarget).next().animate({
        left : 0
      },300,()=>{
        $('.m_sub_menu_area').css('overflow-y','hidden');
      })
  })

  //(mobile) 메뉴 되돌리기 (depth 감소)
  $('.m_sub_back').click((e)=>{
    console.log($(e.currentTarget).parent())
    $(e.currentTarget).parent().animate({
      left : '100%'
    },300,()=>{
      if($(e.currentTarget).parent().hasClass('m_sub_category')){
        $('.m_sub_menu_area').css('overflow-y','');
      }
    })
  })


// ariMax - slide
  var swiper1 = new Swiper(".airMax-swiper", {   
    slidesPerView: 1,
    loop: true,
    pagination: {
      clickable: true
    },
    navigation: {
      nextEl: "#airMax .swiper-button-next",
      prevEl: "#airMax .swiper-button-prev",
    },
    breakpoints : {
      600 : {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
// trend - slide
  var swiper2 = new Swiper(".trend-swiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      clickable: true
    },
    navigation: {
      nextEl: "#trend .swiper-button-next",
      prevEl: "#trend .swiper-button-prev",
    },
    breakpoints : {
      600 : {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
// spring - slide
  var swiper3 = new Swiper(".spring-swiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      clickable: true
    },
    navigation: {
      nextEl: "#spring .swiper-button-next",
      prevEl: "#spring .swiper-button-prev",
    },
    breakpoints : {
      600 : {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
// sport - slide
  var swiper4 = new Swiper(".sport-swiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      clickable: true
    },
    navigation: {
      nextEl: "#sport .swiper-button-next",
      prevEl: "#sport .swiper-button-prev",
    },
    breakpoints : {
      600 : {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  })
})
