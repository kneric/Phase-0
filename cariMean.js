function cariMean(arr) { 
  var hasil = null
  var x;
  for (x = arr.length - 1; x >= 0; x--){
    hasil = (hasil + arr[x])
  };
  return Math.round(hasil/arr.length);
  
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7