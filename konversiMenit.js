function konversiMenit(menit) {
  jam = Math.floor(menit / 60)
  sisa = menit % 60
  x = String(sisa)
  if (x.length < 2) {
    console.log(jam + ':' + '0' + sisa)
  } else {
    console.log(jam + ':' + sisa)
  }
}


// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00