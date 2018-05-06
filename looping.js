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