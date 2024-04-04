'use strict';

/* hero page event */
// hero - typing event
const content = "Growing front-end developer ";
const text = document.querySelector(".slogan");
let i=0; 

function textEvent(){
  if(i<content.length){
    text.textContent += content.charAt(i);
    i++;
  }
  if(i>=content.length){
    clearInterval(typing);
    setInterval(() => {
      text.classList.toggle('done')
    }, 700);
  }
}
const typing = setInterval(textEvent,100);

// hero - mouse cursor image
const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');
const star = document.querySelector('.star');
const hero = document.querySelector('.hero');
hero.addEventListener('mousemove',function(e){
  // console.log(e.pageX, e.pageY);
  cursor.style = `left: ${e.pageX+10}px; top: ${e.pageY+10}px; opacity:1;`
  cursor2.style = `left: ${e.pageX+20}px; top: ${e.pageY - 10}px; opacity:1;`
})
setInterval(()=>{
  star.classList.remove('on');
  setTimeout(()=>{
    star.classList.add('on');
  },500)
},3000)

// hero - water drop event
hero.addEventListener('click',(e)=>{
  const drop = document.createElement('img');
  const drops = hero.querySelectorAll('.waterDrop');
  // console.log(drop);
  hero.appendChild(drop);
  drop.classList.add('waterDrop');
  // console.log('drops : ', drops);
  // console.log('attr : ', drop.getAttribute("class"))
  drop.setAttribute("src","./images/waterdrop.png");
  drop.setAttribute("alt"," ");
  drop.style = `left: ${e.pageX}px; top:${e.pageY}px;`
  if(drops.length >= 10) {
    for(let i = 0; i< drops.length; i++){
      setTimeout(() => {
        hero.removeChild(drops[i]);
      }, 3000);
    }
  }
})

// hero - title click event
const title = document.querySelector('.title');
title.addEventListener('click',()=>{
  wrap.style.top = innerHeight*(-1) + 'px';
  page = 1;
  parts.forEach((part,idx) => {
    part.classList.remove('now')
    pages[idx].classList.remove('now');
  });
  setTimeout(()=>{
    parts[page].classList.add('now');
  },300);
  pages[page].classList.add('now');
})

// scroll event
const wrap = document.querySelector('#wrap');
const pages = document.querySelectorAll('.page');
const about = document.querySelector('#about');
const container = document.querySelector('.container')
let parts = Object.values(container.children);
let page = 0;
let scrolling = false;
document.addEventListener('mousewheel', (e)=>{
    e.preventDefault();
  if (!scrolling) {
    scrolling = true;
    // console.log('scroll:',scr);
    // console.log(e.deltaY)
    if(e.deltaY > 0){
      // console.log('+++')
      page++;
    } else if(e.deltaY < 0) {
      // console.log('---')
      page--;
    }
    if(page < 0){
      page = 0;
    } else if(page >= container.children.length) {
      page = container.children.length - 1;
    }
    wrap.style.top = page*innerHeight*(-1)+'px';
    pages.forEach((part,idx) => {
      part.classList.remove('now');
      parts[idx].classList.remove('now');
    });
    pages[page].classList.add('now'); //pagenation evnet
    setTimeout(()=>{
      parts[page].classList.add('now');
      scrolling = false;
    },300);
  }
}, {passive:false});
if(page==1){
  about.classList.add('on');
}

// nav-click event
pages.forEach((part, idx) => {
  part.addEventListener('click', ()=>{
    page = idx;
    wrap.style.top = page*innerHeight*(-1)+'px';
    pages.forEach((item, idx) => {
      item.classList.remove('now')
      parts[idx].classList.remove('now');
    })
    part.classList.add('now');
    setTimeout(()=>{
      parts[page].classList.add('now');
    },300)
  })
})


// about
// about - qr
const qrBtn = document.querySelector('.qr_btn');
const qrArea = document.querySelector('.qr_area');

qrBtn.addEventListener('click',()=>{
  qrArea.classList.add('on');
  // gsap.set(qrArea,);
  gsap.to(qrArea, {
    left : 0,
    duration : 0.7
  })
})
qrArea.addEventListener('click',()=>{
  gsap.to(qrArea, {
    left : 440,
    duration : 0.5
  })
  setTimeout(()=>{
    qrArea.classList.remove('on');
  },500)
})
// console.log(qr.classList.contains('on'));

// portfolio - tap menu
const pofol_taps = document.querySelectorAll('.portfolio dl dt');
const pofol_Els = document.querySelectorAll('.portfolio dl dd')
// console.log('pofol : ', pofol_taps[0])

pofol_taps.forEach((tap,idx) => {
  tap.addEventListener('click',()=>{
    pofol_taps.forEach(tap => tap.classList.remove('now'))
    pofol_Els.forEach(el => {
      el.classList.remove('now');
    })
    pofol_taps[idx].classList.add('now');
    pofol_Els[idx].classList.add('now');
  })
})


// pofol_taps.forEach((tap,idx) => {
//   tap.addEventListener('click',()=>{
//     tap.classList.add('now');
//     pofol_taps.filters(item => item != tap).forEach(other => other.classList.remove('now'))
//     pofol_Els[idx].classList.add('now');
//     pofol_Els.forEach((el, index) => {
//       if(idx != index){
//         el.classList.remove('now'); // 포폴내용의 인덱스와 클릭한 탭제목의 인덱스가 틀리면 now 날리기
//       };
//     } )
//   })
// })