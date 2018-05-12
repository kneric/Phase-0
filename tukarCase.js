/*
Problem
Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string. Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya. Spasi dan simbol diabaikan.
*/

function tukarBesarKecil(kalimat) {
  var temp = '';
  for (var i = 0; i < kalimat.length; i++) {
    var a = kalimat[i]
    if (a === a.toUpperCase()) {
      temp += a.toLowerCase();
    } else if (a === a.toLowerCase()) {
      temp += a.toUpperCase();
    } else {
      temp += a; // buat karakter spasi
    }
  }
  return temp
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"