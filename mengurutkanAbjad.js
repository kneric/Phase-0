function urutkanAbjad(str) {
  var arr = str.split('')
  arr.sort(function (a, b) {
    return a > b
  })
  var strBalik = arr.join('')
  return strBalik
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'