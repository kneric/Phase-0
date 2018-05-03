// mengakses nilai dalam array

function balikString(kata) {
  var hasil = '';
  for (x = kata.length-1; x >= 0; x--){
    hasil += kata[x];
  }
return hasil;
}

console.log(balikString('Hello'))
