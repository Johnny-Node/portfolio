// slide 움직임
let slide_move = setInterval(function(){ 
  $("#slide ul").animate({
    left: "-100vw"
  },600, function(){
    $("#slide ul").append($("#slide ul li").eq(0));
    $("#slide ul").stop().css("left",0);
  })
},4000)


$('#slide .btns .next').click(function(){
  $("#slide ul").animate({
    left: "-100vw"
  },600, function(){
    $("#slide ul").append($("#slide ul li").eq(0));
    $("#slide ul").stop().css("left",0);
  })
  clearInterval(slide_move);
  slide_move = setInterval(function(){ 
    $("#slide ul").animate({
      left: "-100vw"
    },600, function(){
      $("#slide ul").append($("#slide ul li").eq(0));
      $("#slide ul").stop().css("left",0);
    })
  },4000)
})

$('#slide .btns .prev').click(function(){
  $("#slide ul").prepend($("#slide ul li").eq(2));
  $("#slide ul").css("left","-100vw")
  $("#slide ul").animate({
    left: 0
  },600, function(){
    $("#slide ul").stop().css("left",0);
  })
  clearInterval(slide_move);
  slide_move = setInterval(function(){ 
    $("#slide ul").animate({
      left: "-100vw"
    },600, function(){
      $("#slide ul").append($("#slide ul li").eq(0));
      $("#slide ul").stop().css("left",0);
    })
  },4000)
})

// choice popup
$(".choice_content figure").click(function(a){
  a.preventDefault();
  $(".choice_pop").addClass("on");
  $(".choice_pop").removeClass("off");
});
// $(".choice_pop").click(function(){
//   $(".choice_pop").addClass("off");
//   $(".choice_pop").removeClass("on");
// })
$(".choice_pop").click(function(e){
  // console.log(e.target);
  if(e.target.className.indexOf('bg')<0){
    console.log('wow');
    $(".choice_pop").addClass("off");
    $(".choice_pop").removeClass("on");
  }
})

// jajak popup
$('.jajak').click(function(e){
  e.preventDefault();
  $('.jajak_pop').addClass("on");
  $('.jajak_pop').removeClass("off");
  if(e.target.className.indexOf('jajak_pop')>-1){
    // console.log('wow');
    $(".jajak_pop").addClass("off");
    $(".jajak_pop").removeClass("on");
  }
})

// tab menu
$(".menuBtn a").click(function(a){
  a.preventDefault();
});
for(let i=0; i < $(".menuBtn li").length; i++){
  $(".menuBtn li").eq(i).click(function(){
    $(this).addClass("on");
    $(this).siblings().removeClass("on");
    // console.log($(".list .items").eq(i));
    $(".list .items").eq(i).addClass("on");
    $(".list .items").not($(".list .items").eq(i)).removeClass("on");
    // $(".list .items").eq(i).addClass("on");
    // $(".list .items").not($(this).eq(i)).removeClass("on");
    $(".list .more").eq(i).addClass("on");
    $(".list .more").eq(i).removeClass("off");
    $(".list .more").not($(".list .more").eq(i)).removeClass("on");
    $(".list .more").not($(".list .more").eq(i)).addClass("off");
  })
}

