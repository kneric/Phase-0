/*
Problem
Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya.
*/
function pasanganTerbesar(num) {
  var numStr = String(num);
  var numArr = numStr.split('');
  var urut = numStr.split('');
  urut.sort(function (a, b) {
    return a < b
  });
  var angkaTerbesarArr = urut.slice(0, 1);
  var posisi = numStr.indexOf(angkaTerbesarArr);
  var angkaSebelahnya = numArr.slice(posisi + 1, posisi + 2);
  return Number(angkaTerbesarArr + angkaSebelahnya);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99