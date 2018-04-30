function xo(str) {
  var index = str.indexOf('x')
  var x = str.charAt(index)
  console.log(x)
  
}



// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true