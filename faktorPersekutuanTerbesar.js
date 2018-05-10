function fpb(angka1, angka2) {
  var arr = [angka1, angka2];
  arr.sort(function(a,b){
    return a > b;
  })
  for (var i = arr[0]; i > 0; i--){
    if (arr[1] % arr[0] === 0){
    return arr[0]      ;
    } else if (arr[0] % i === 0 && arr[1] % i === 0){
    return i;
    break;
    }
}
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1