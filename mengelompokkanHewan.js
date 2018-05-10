/*
Problem
Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

Urutan hewan dalam array setiap pengelompokan huruf tidak penting.
*/

function groupAnimals(animals) {
  animals.sort(function (a, b) {
    return a > b;
  })
  var hurufA = [];
  var hurufC = [];
  var hurufK = [];
  var hurufU = [];
  var hasil = [];
  var a;
  var c;
  var k;
  var u;

  for (var i = 0; i < animals.length; i++) {
    if (animals[i][0].indexOf('a') == 0) {
      hurufA.push(animals[i]);
    } else if (animals[i][0].indexOf('c') == 0) {
      hurufC.push(animals[i]);
    } else if (animals[i][0].indexOf('k') == 0) {
      hurufK.push(animals[i]);
    } else if (animals[i][0].indexOf('u') == 0) {
      hurufU.push(animals[i]);
    }
  }

  hasil = [hurufA, hurufC, hurufK, hurufU];
  return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]