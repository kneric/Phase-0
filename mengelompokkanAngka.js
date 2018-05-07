function mengelompokkanAngka(arr) {
  var genap = [];
  var ganjil = [];
  var tampung = [];
  var a;
  var b;
  var result =[];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] % 3 === 0){
      a = arr.splice(arr[i],1)
      tampung.push (a);
    } else if (arr[i] % 2 === 0){
      genap.push(arr[i]);
    } else {
      ganjil.push(arr[i]);
    }
    console.log (i, genap)
    console.log (i, ganjil)
    console.log (i, tampung)
  }
  if (tampung != []){
    var kelipatan3 = [];
    for (var j = 0; j < tampung.length; j++) {
      b = Number(tampung[j]);
      kelipatan3.push(b);
    }
  }
  
  result = [genap, ganjil, kelipatan3];
  return result;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
// console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
// console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
// console.log(mengelompokkanAngka([])); // [ [], [], [] ]