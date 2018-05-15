/*
Problem
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false.
*/

function checkAB(str) {
  var strArr = [];
  var ketemu = false;
  for (var i = 0; i < str.length; i++){
      strArr.push (str[i]);
    }
  for (var j = 0; j < strArr.length; j++){
    if (strArr[j] === 'a' && strArr[j+4] === 'b'){
      ketemu = true;
    } else if (strArr[j] === 'b' && strArr[j+4] === 'a'){
      ketemu = true;
      
    }
  }
  return ketemu
}



// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false