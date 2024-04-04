$(function(){
  // ★★★★ 일부 동의 후 전체 동의 클릭 시 '전체동의' 해결(+) => 선택자 파악 부족


  //1. 전체 동의하기 기능
  $('.all_check').click(function(){
    console.log('엥' + $('input:checked').length)
    if($('input:checked').length >= 0 && $('input:checked').length < $('input').length){
      $('input').prop('checked',true);
      $('.agree').addClass('off').removeClass('on');
      $('.checked').addClass('on').removeClass('off');
      
    } else {
      $('input').prop('checked',false);
      $('.agree').addClass('on').removeClass('off');
      $('.checked').addClass('off').removeClass('on');
    };
    console.log('전체 동의시 체크된 갯수' + $('input:checked').length);
  });

  //1-1. input 하나라도 check 해제시 : 모두 동의 해제 
  $('label').click(function(){
    // console.log('prop체크' + $('input').prop('checked').);
    // console.log($('.all_check').attr('class'))
    if($('.all_check .checked').attr('class').indexOf('on')>-1 && $('input:checked').length === $('input').length) {
      console.log('wow');
/* ↑ input.length:5
 */
$('.all_check .agree').removeClass('off').addClass('on');
$('.all_check .checked').removeClass('on').addClass('off');
};
});

  //1-2. input 모두 check => 전체동의 hightlite
  $('label').click(function(e){
  if(!$(this).prev().prop('checked')){
    /* ↑ input 체크 안된 상태(!)에서 클릭시  */
    // console.log($('input:checked').length + "라벨 클릭 ")
    if($('input:checked').length === $('input').length - 1) { /* 클릭전 체크 수가 4일때 (클릭 후 5 = all_check) */
          $('.all_check .checked').removeClass('off').addClass('on');
          $('.all_check .agree').removeClass('on').addClass('off');
          // $('body').css('background','skyblue'); /* 확인용 */
    };
  };
  /* 
  ex) input 4개만 check 되어 있는 상황
  - input.length:5
  - input:checked.length:4
  => label(=>input) click 이벤트 시
  - 위 상황에서 클릭!
  => input:checked.length:4 당시에 클릭, 클릭 후 1개 추가 된 것
  => 4개의 값이 적용됨 => 클릭전 상태 반영
  */
  });

  //2. 각각 동의
  const inputEls = $('input');
  // console.log(inputEls);
  for(let input of inputEls) {
    $(input).click(function(){
        $($(input).next().children('.agree')).toggleClass('on off')
        $($(input).next().children('.checked')).toggleClass('on off')
      // }
    })
  }


  //3. 이벤트 동의
  //3-1. 이벤트 alert : red 글씨
  $('.event .box label').click(function(){
    if($('#event').prop('checked')){
      console.log($('input#event').prop('checked'));
      $('.event .box .alert').addClass('on')
    } else {
      $('.event .box .alert').removeClass('on')
    };
  });

  // 3-2. 이벤트 체크사항 : ✔--hightlight
  $('#event').click(function(){
    if($('#event').prop('checked')){
      // console.log('wow');
      $('.event .box .alert').removeClass('on')
      $('.event .box p i').addClass('on');
      // $('body').css('background','red');
    } else {
      $('.event .box p i').removeClass('on');
    };
  });
});


