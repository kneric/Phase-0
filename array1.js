// mengakses nilai dalam array

function balikString(kata) {
  var panjang = kata.length;
  var x;


  for (x = 0; x <= panjang; x++)
    console.log(kata[panjang - x])
}

balikString('Hello')