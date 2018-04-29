// menyusun barisan bintang

var rows1; // input the number of rows

// do loops to display asterisks in the console.
rows1 = 0
var x = rows1

for (rows1; rows1 <= x && rows1>0; rows1--){
  console.log('*')
}

// menyusun barisan bintang dengan nested looping

var rows2; // input the number of rows

// do loops to display asterisks in the console.
rows2 = 3
var x = rows2 + 1

for (rows2; rows2 <= x && rows2 > 0; rows2--) {
  console.log('*')
  for (rows2; rows2 <= x; rows2++) {
    console.log('*')
  }
}

while (rows2 <= x && rows2 > 0){
  
}