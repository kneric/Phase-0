// mengakses nilai dalam array

/*
Buatlah sebuah fungsi dengan nama balikString. Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.
*/

function balikString(kata) {
  var hasil = '';
  for (x = kata.length-1; x >= 0; x--){
    hasil += kata[x];
  }
return hasil;
}

console.log(balikString('Hello'));
