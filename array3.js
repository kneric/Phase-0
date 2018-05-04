// array join, split, slice, splice, & sort

function dataHandling2(input){
  input.splice(1, 4, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung', '21/05/1989', 'Pria', 'SMA Internasional Metro');
  console.log(input);
  var pisah = input[3].split('/');
  var bulan = Number(pisah[1]);
  var join = pisah.join('-');
  switch (bulan) {
    case bulan = 1:
      bulan = 'Januari';
      break;
    case bulan = 2:
      bulan = 'Februari';
      break;
    case bulan = 3:
      bulan = 'Maret';
      break;
    case bulan = 4:
      bulan = 'April';
      break;
    case bulan = 5:
      bulan = 'Mei';
      break;
    case bulan = 6:
      bulan = 'Juni';
      break;
    case bulan = 7:
      bulan = 'Juli';
      break;
    case bulan = 8:
      bulan = 'Agustus';
      break;
    case bulan = 9:
      bulan = 'September';
      break;
    case bulan = 10:
      bulan = 'Oktober';
      break;
    case bulan = 11:
      bulan = 'November';
      break;
    case bulan = 12:
      bulan = 'Desember';
      break;
  };
  console.log(bulan);
  console.log(pisah.sort(function (a,b) {return Number(a)<Number(b)}));
  console.log(join);
  console.log(input[1].slice(0, 15))
}
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);


/*
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
  */