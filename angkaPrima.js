function angkaPrima(angka) {
  if (angka === 2){
    return true
  } else if (angka === 3){
    return true
  } else if (angka === 5){
    return true
  } else if (angka === 7){
    return true
  } else if (angka % 2 === 0 || angka % 3 === 0 || angka % 5 === 0 || angka % 7 === 0){
    return false
  } else {
    return true
  }
}

/*
function angkaPrima(angka) {
  return angka === 2 ? true : (angka === 3 ? true : (angka === 5 ? true : (angka === 7 ? true : (angka % 2 === 0 || angka % 3 === 0 || angka % 5 === 0 || angka % 7 === 0 ? false : true))))
}
*/

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false