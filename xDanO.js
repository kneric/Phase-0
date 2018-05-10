/*
Problem
Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.
*/

function xo(str) {
  var x = (str.match(/x/g)).length;
  var o = (str.match(/o/g)).length;
  if (x === o){
    return true;
  } else {
    return false;
  }
}



// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true