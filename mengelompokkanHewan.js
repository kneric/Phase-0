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