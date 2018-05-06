// biar ga bingung, bikin flowchartnya polanya dulu cuy!

// menyusun barisan bintang

var rows1; // input the number of rows
var text1 = '';
rows1 = 3;

for (var x1 = rows1; x1 >= 1; x1--) {
  text1 = ('*');
  console.log(text1);
}


// menyusun barisan bintang dengan nested looping

var rows2; // input the number of rows
rows2 = 3

for (var x2 = rows2; x2 >= 1; x2--) {
  var text2 = '';
  for (var y2 = 0; y2 < rows2; y2++) {
    text2 += '*';
  } console.log(text2);
}

// menyusun barisan tangga bintang dengan nested looping

var rows3; // input the number of rows
rows3 = 3;

for (x3 = rows3; x3 >= 1; x3--) {
  var text3 = '';
  for (y3 = x3; y3 <= rows3; y3++) {
    text3 = text3 + ('*');
  }
  console.log(text3);
}