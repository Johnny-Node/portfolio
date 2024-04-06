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



// notice 페이지 이동 버튼
const pageBtnEls = document.querySelectorAll('.page-btn');
const pages = document.querySelectorAll('.page');
const prev = document.querySelector('.pagenation .left_btns .prev');
const front = document.querySelector('.pagenation .left_btns .front');
const next = document.querySelector('.pagenation .right_btns .next');
const last = document.querySelector('.pagenation .right_btns .last');

var currentIdx = 0;
pageBtnEls.forEach((btn,idx) =>{
  btn.addEventListener('click',()=>{
    currentIdx = idx;
    pages.forEach(page => page.classList.remove('on'));
    pageBtnEls.forEach(pageBtn => pageBtn.classList.remove('on'));
    pages[currentIdx].classList.add('on');
    btn.classList.add('on');
  });
})
prev.addEventListener('click',()=>{
  if(currentIdx > 0 ){
    pageBtnEls.forEach(pageBtn => pageBtn.classList.remove('on'));
    pages.forEach(page => page.classList.remove('on'));
    pageBtnEls[currentIdx - 1].classList.add('on');
    pages[currentIdx - 1].classList.add('on');
    currentIdx--;
    // console.log(pageBtnEls)
  }
})
front.addEventListener('click',()=>{
  currentIdx = 0;
  pageBtnEls.forEach(pageBtn => pageBtn.classList.remove('on'));
  pages.forEach(page => page.classList.remove('on'));
  pageBtnEls[currentIdx].classList.add('on');
  pages[currentIdx].classList.add('on');

})
next.addEventListener('click',()=>{
  if(currentIdx < pageBtnEls.length - 1) {
    pageBtnEls.forEach(pageBtn => pageBtn.classList.remove('on'));
    pages.forEach(page => page.classList.remove('on'));
    pageBtnEls[currentIdx + 1].classList.add('on')
    pages[currentIdx + 1].classList.add('on');
    currentIdx++;
  }
  
})
last.addEventListener('click',()=>{
  currentIdx = pageBtnEls.length - 1;
  pageBtnEls.forEach(pageBtn => pageBtn.classList.remove('on'));
  pages.forEach(page => page.classList.remove('on'));
  pageBtnEls[currentIdx].classList.add('on');
  pages[currentIdx].classList.add('on');
})
document.addEventListener('click',(e)=>console.log(currentIdx));
