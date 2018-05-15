/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];

  var result = [];

  for (var i in arrPenumpang){
    var nama = arrPenumpang[i][0];
    var departure = arrPenumpang[i][1];
    var arrival = arrPenumpang[i][2];

    for (var j in rute){
      if (departure === rute[j]){
        var start = Number(j)
      }
      if (arrival === rute[j]){
        var finish = Number(j)
      }
    }

    var harga = 2000 * (finish - start);
    var ticket = {
      penumpang: nama,
      naikDari: departure,
      tujuan: arrival,
      bayar: harga
      };
    
    result.push(ticket);
  };

  return result  
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]