function perkalianUnik(arr) {
  var hasil = null;
  var x;
  for (x = arr.length - 1; x >= 0; x--) {
    var sebelum = arr.slice(0, x)
    var setelah = arr.slice(x+1, arr.length-1)
    var y;
    var hasil2 = null;
    for (y = sebelum.length - 1; y >= 0; y--){
      hasil2 = (hasil2 * sebelum[y])
    }
    var z;
    var hasil3 = null;
    for (z = setelah.length - 1; z >= 0; z--) {
      hasil3 = (hasil2 * setelah[y])
    };
    return hasil2 * hasil3;
  }
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]