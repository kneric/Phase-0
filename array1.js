// mengakses nilai dalam array

function balikString(kata) {
  var hasil = " ";
  for (x = kata.length; x >= 0; x--){
    hasil += kata.charAt(x);
  }
return hasil;
}

console.log(balikString('Hello'))
