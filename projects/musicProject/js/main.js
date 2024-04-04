$(function(){
  // alert
  alert('음소거를 해제하면 음악이 나옵니다 🎵')
  
  $('.sea_box').mousemove((e)=>{
    $('.sea_mouse').css('left',`${e.offsetX}px`).css('top',`${e.offsetY}px`);
  });

  // animation_area 
  $('.tree, .sea_ani').hide();
  var tree_count = 0;
  var drop_count = 0;
  $('.animation_area .tree_box').on({
    click : (e)=>{
      if(tree_count<6){
        console.log('X: ',e.offsetX)
        console.log('Y: ',e.offsetY)
        $('.animation_area .tree_box').append(`<img src='./images/leaf${tree_count+1}.png' alt=' ' class='leaf'>`)
        $('.leaf').eq(tree_count).css('top',`${e.offsetY}px`).css('left',`calc(${e.offsetX}px)`).fadeIn(200).animate({
          top : '110%'
          // transfrom : rotate(tree_count*10 + tree_count*3+'deg')
        },800,()=>{
          $('.tree').eq(tree_count).stop().fadeIn(400);
          tree_count++;
        })
      }
      else {
        // tree_count =0;
        // $('.tree').fadeOut();
      }
    },
    mousemove : (e)=>{
      $('.tree_mouse').css('left',`${e.offsetX}px`).css('top',`${e.offsetY}px`);
    },
    mouseenter : ()=>{$('.tree_mouse').css('opacity',1)},
    mouseleave : ()=>{$('.tree_mouse').css('opacity',0)}
  })
  $('.animation_area .sea_box').on({
    click : (e)=>{
      if(drop_count<4){
        $('.animation_area .sea_box').append(`<img src='./images/drop.png' alt='' class='drop'>`)
        $('.drop').eq(drop_count).css('top',`${e.offsetY}px`).css('left',`calc(${e.offsetX}px)`).fadeIn(300).animate({
          top : '110%'
          // transfrom : rotate(tree_count*10 + tree_count*3+'deg')
        },900,()=>{
          $('.sea_ani').eq(drop_count).stop().fadeIn(400);
          $('.drop').eq(drop_count).stop().hide();
          drop_count++;
        })
      } else {
        // drop_count =0;
        // $('.sea_ani').fadeOut();
      }
    },
    mousemove : (e)=>{
      $('.sea_mouse').css('left',`${e.offsetX}px`).css('top',`${e.offsetY}px`);
    },
    mouseenter : ()=>{$('.sea_mouse').css('opacity',1)},
    mouseleave : ()=>{$('.sea_mouse').css('opacity',0)}

  })
  //area 좌우 이동 버튼
  $('.animation_area .next_btn').click(function(){
    $('.bottom>ul').animate({
      left : "-100%"
    },800, "easeOutCirc")
  });
  $('.card_area>.prev_btn').click(function(){
    console.log('wow')
    $('.bottom>ul').animate({
      left : 0
    },800, "easeOutCirc")
  });
// 앨범 이미지 클릭 : 이미지 좌로 이동, 앨범 텍스트 등장 / 재클릭시 원래대로
  $('.album_img').click(function(){
    if($('.album_img').hasClass('clicked')){
      console.log('has+')
      $('.album_text').animate({
        opacity : 0
      },200)
      setTimeout(function(){
        $('.album_text').removeClass('show');
        $('.album_img').removeClass('clicked');
      }, 400)
    } else { 
      console.log("didn't")
      $('.album_img').addClass('clicked');
      setTimeout(function(){
        $('.album_text').addClass('show');
        $('.album_text').animate({
          opacity : 1
        },200)
      },200)
    }
      console.log($('.album_img').attr('class'));
      console.log($('.album_img').hasClass('clicked'));
    });
    
    $('dt').click((e)=>{
      $('dt').removeClass('choosed');
      $(e.target).addClass('choosed');
      $('.card1>dl>dt.choosed::after').css('opacity',1).css('scale',20);
      $(e.target).next().fadeIn();
    });
})

// photo slide
const photos = document.querySelectorAll('.photo');

$('.photo_btns .next_btn').click(()=>{
  for(let i=0; i<photos.length; i++){
    gsap.fromTo($(photos[i]),{
      opacity : 0,
      duration : 0.5
    },{
      opacity : 1,
      duration : 0.08
    })
    if(photos[i].getAttribute('class').includes('now')){
      $(photos[i]).removeClass('now');
      $(photos[i]).addClass('prev');
    } else if (photos[i].getAttribute('class').includes('next')){
      $(photos[i]).removeClass('next');
      $(photos[i]).addClass('now');
    } else if (photos[i].getAttribute('class').includes('prev')){
      $(photos[i]).removeClass('prev');
      // photos[i].addClass('prev');
    } else {
      $(photos[i]).addClass('next');
    }
  }
})
$('.photo_btns .prev_btn').click(()=>{
  for(let i=0; i<photos.length; i++){
    gsap.fromTo($(photos[i]),{
      opacity : 0,
      duration : 0.5
    },{
      opacity : 1,
      duration : 0.08
    })
    if(photos[i].getAttribute('class').includes('now')){
      $(photos[i]).removeClass('now');
      $(photos[i]).addClass('next');
    } else if (photos[i].getAttribute('class').includes('next')){
      $(photos[i]).removeClass('next');
    } else if (photos[i].getAttribute('class').includes('prev')){
      $(photos[i]).removeClass('prev');
      $(photos[i]).addClass('now');
    } else {
      $(photos[i]).addClass('prev');
    }
  }
})