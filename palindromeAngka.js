
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
console.log(angkaPalindrome(172)); // 181

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
