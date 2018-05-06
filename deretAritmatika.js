function tentukanDeretAritmatika(arr) {
  var total = 0
  for (var i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  if (total * 2 === arr.length * (arr[0] + arr[arr.length - 1])) {
    return(true)
  } else {
    return(false)
  }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false