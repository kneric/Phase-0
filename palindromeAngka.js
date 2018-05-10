/*
Problem
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.
*/
function angkaPalindrome(num) {
  function cekPalindrome(num){
    var balik = '';
    var numStr = String(num);
    for (var i = numStr.length - 1; i >= 0; i--) {
      balik += numStr[i];
    }
    return Number(balik) === num;
  } 
  var hasil = 0;
  for (var j = num +1; j < num * 2; j++){
    hasil = j;
    if (cekPalindrome(j)) {
      break;
    }
  }
  return hasil;
}




// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

// OTHER LOOP
// function angkaPalindrome(num) {
//   function cekPalindrome(num) {
//     var a, no, temp = 0;
//     no = num;

//     while (no > 0) {
//       a = no % 10;
//       no = parseInt(no / 10);
//       temp = temp * 10 + a;
//     }
