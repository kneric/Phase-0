/*
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
*/

// looping

number1 = 2;
text1 = 'I love coding';

console.log('LOOPING PERTAMA');
while (number1<21){
  console.log(number1+' - '+text1);
  number1+=2;
}

number2 = 20;
text2 = 'I will become fullstack developer';

console.log('LOOPING KEDUA');
while (number2 > 1) {
  console.log(number2 + ' - ' + text2);
  number2 -= 2;
}

// melakukan looping menggunakan for
/*
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
*/

number3 = 1;
text3 = 'I love coding';

console.log('LOOPING PERTAMA');
for (number3; number3 <21; number3 ++){
  console.log(number3+' - '+text3);
}

number4 = 20;
text4 = 'I will become fullstack developer';

console.log('LOOPING KEDUA');
for (number4; number4 >0; number4 --){
  console.log(number4+' - '+text4);
}

//angka ganjil dan genap
/*
Problem
Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
Di dalam perulangan, periksa setiap angka counter:
Apabila angka counter adalah angka genap, tuliskan GENAP
Apabila angka counter adalah angka ganjil, tuliskan GANJIL
Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
Pada 3 perulangan baru ini periksa setiap angka counter:
Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
"3 kelipatan 3" dan seterusnya.
*/

number5 = 1;
text5 = 'counter sekarang = ';

while (number5 < 101){
  console.log(text5+number5);
  if (number5 % 2 === 0){
    console.log('GENAP');
  } else {
    console.log('GANJIL');
  }
  number5++;
}

number6 = 1;
text6 = 'counter sekarang = ';

while (number6 < 101) {
  console.log(text6 + number6);
  if (number6 % 3 === 0) {
    console.log(number6+' KELIPATAN 3');
  }
  number6+=2;
}


number7 = 1;
text7 = 'counter sekarang = ';

while (number7 < 101) {
  console.log(text7 + number7);
  if (number7 % 6 === 0) {
    console.log(number7 + ' KELIPATAN 6');
  }
  number7 += 5;
}

number8 = 1;
text8 = 'counter sekarang = ';

while (number8 < 101) {
  console.log(text8 + number8);
  if (number8 % 10 === 0) {
    console.log(number8 + ' KELIPATAN 10');
  }
  number8 += 9;
}