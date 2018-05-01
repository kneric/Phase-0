// biar ga bingung, bikin flowchartnya polanya dulu cuy!

// menyusun barisan bintang

var rows1; // input the number of rows
var x = rows1
rows1 = 2

for (x = 1; x <= rows1; x++){
  console.log('*')
}


// menyusun barisan bintang dengan nested looping

var rows2; // input the number of rows
var x2 = rows2
var text2
rows2 = 2

for (x2 = 1; x2 <= rows2; x2++) {
  for (y2 = 1; y2 <= rows2; y2++) {
    text2 = text2 + ('*')
  }
  console.log(text2)
  text2 = ''
}

// menyusun barisan tangga bintang dengan nested looping

var rows3; // input the number of rows
var x3 = rows3
var text3
rows3 = 2

for (x3 = 0; x3 <= rows3; x3++) {
  for (y3 = 0; y3 < x3; y3++) {
    text3 = text3 + ('*')
  }
  console.log(text3)
  text3 = ''
}