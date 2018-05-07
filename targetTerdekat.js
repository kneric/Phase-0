/*
KEMUNGKINAN KASUS:
* ada X sebelum O && ada X setelah O  >>> ada 2 selisih jarak X-O. compare mana yg lebih dekat
* ada X sebelum O && tidak ada X setelah O  >>> selisih jarak X-O = negatif(X-O<0) 
* tidak ada X sebelum O && ada X setelah O  >>> selisih jarak X-O = positif
* tidak ada X setelah O && tidak ada X setelah O  >>> X-O = -1
*/

function targetTerdekat(arr) {
  var posisiO = arr.indexOf('o')
  var posisiX = arr.indexOf('x')

  if (posisiX - posisiO > 0) {
    return posisiX - posisiO
  } else if (posisiX === -1) {
    return 0
  } else if (posisiX - posisiO < 0) {
    var setelahO = arr.splice(posisiO, targetTerdekat.length - posisiO)
    var posisiX2 = setelahO.indexOf('x')
    if (posisiX2 === -1) {
      return -posisiX
    } else if (posisiX2 > 0) {
      if (-posisiX < posisiX2) {
        return -posisiX
      } else {
        return posisiX2
      }
    }
  } else {
    return 0
  }
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2

console.log(targetTerdekat(['x', '', 'o', '']))





// function targetTerdekat(arr) {
//   return arr.indexOf('x') - arr.indexOf('o') > 0 ? arr.indexOf('x') - arr.indexOf('o') : (arr.length - 1) + (arr.indexOf('x') - arr.indexOf('o'));
// }

// // TEST CASES
// console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
// console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
// console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
// console.log(targetTerdekat(['', '', 'o', ''])); // 0
// console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2