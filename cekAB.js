/*
Problem
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false.
*/

function checkAB(str) {
  var strNoSpace = ''
  var posisiA = [];
  var posisiB = [];
  var jarak = 0;
  var temp = [];
  for (var i = 0; i < str.length; i++){
    if (str[i] !== ' '){
      strNoSpace += str[i];
    }
  }
  for (var j = 0; j < strNoSpace.length; j++){
    if (str[j] === 'a'){
      posisiA.push(strNoSpace.indexOf('a'));
    } else if (str[j] === 'b'){
      posisiB.push(strNoSpace.indexOf('b'));
    }
  }
  for (var k = 0; k < posisiA.length; k++){
    for (var l = 0; l < posisiB.length; l++){
      jarak = Math.abs(posisiA[k]-posisiB[l]);
      temp.push(jarak);
    }
  }
  for (var m =0; m < temp.length; m++){
    if (temp[m] === 3){
      return true;
    } else {
      return false;
    }
  }
}

// TEST CASES
// console.log(checkAB('lane borrowed')); // true
// console.log(checkAB('i am sick')); // false
// console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
// console.log(checkAB('bacon and meat')); // false