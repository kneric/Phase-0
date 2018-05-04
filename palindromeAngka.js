function angkaPalindrome(num) {
  var hasil = '';
  //var num2 = num + 1;
  var nomor = String(num);
  while (hasil != num){
    for (var x = nomor.length-1; x >= 0; x--){
      hasil += nomor[x]
    }
    if (hasil != num){
      num+1
    }
    
  }
  return(hasil)

}
// TEST CASES
console.log(angkaPalindrome(70)); // 181