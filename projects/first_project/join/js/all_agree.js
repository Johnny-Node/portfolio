'use strict';

// console.log('wow');
const all_check = document.querySelector('.all_check');
const inputEls = document.querySelectorAll('input');
console.log(typeof inputEls);   //nodeList
// let input_array = new Array(inputEls);
// console.log(input_array)

for(let input of inputEls) {
  // input.checked;
  console.log(input.getAttribute());
}

let vals = inputEls.map(input => {
  return input.prototype.checked;
})
console.log(vals);

all_check.addEventListener('click',function(){
  console.log(input);
});