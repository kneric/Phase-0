/*
Problem
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

1. Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

2. Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

3. Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

4. Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/


function changeVocals (str) {
  var strBaru = '';
  for (var i = 0; i < str.length; i++){
    switch (str[i]){
      case 'a':
      strBaru += 'b';
      break;
      case 'A':
      strBaru += 'B';
      break;
      case 'b':
      strBaru += 'c';
      break;
      case 'B':
      strBaru += 'C';
      break;
      case 'c':
      strBaru += 'd';
      break;
      case 'C':
      strBaru += 'D';
      break;
      case 'd':
      strBaru += 'e';
      break;
      case 'D':
      strBaru += 'E';
      break;
      case 'e':
      strBaru += 'f';
      break;
      case 'E':
      strBaru += 'F';
      break;
      case 'f':
      strBaru += 'g';
      break;
      case 'F':
      strBaru += 'G';
      break;
      case 'g':
      strBaru += 'h';
      break;
      case 'G':
      strBaru += 'H';
      break;
      case 'h':
      strBaru += 'i';
      break;
      case 'H':
      strBaru += 'I';
      break;
      case 'i':
      strBaru += 'j';
      break;
      case 'I':
      strBaru += 'J';
      break;
      case 'j':
      strBaru += 'k';
      break;
      case 'J':
      strBaru += 'K';
      break;
      case 'k':
      strBaru += 'l';
      break;
      case 'K':
      strBaru += 'L';
      break;
      case 'l':
      strBaru += 'm';
      break;
      case 'L':
      strBaru += 'M';
      break;
      case 'm':
      strBaru += 'n';
      break;
      case 'M':
      strBaru += 'N';
      break;
      case 'n':
      strBaru += 'o';
      break;
      case 'N':
      strBaru += 'O';
      break;
      case 'o':
      strBaru += 'p';
      break;
      case 'O':
      strBaru += 'P';
      break;
      case 'p':
      strBaru += 'q';
      break;
      case 'P':
      strBaru += 'Q';
      break;
      case 'q':
      strBaru += 'r';
      break;
      case 'Q':
      strBaru += 'R';
      break;
      case 'r':
      strBaru += 's';
      break;
      case 'R':
      strBaru += 'S';
      break;
      case 's':
      strBaru += 't';
      break;
      case 'S':
      strBaru += 'T';
      break;
      case 't':
      strBaru += 'u';
      break;
      case 'T':
      strBaru += 'U';
      break;
      case 'u':
      strBaru += 'v';
      break;
      case 'U':
      strBaru += 'V';
      break;
      case 'v':
      strBaru += 'w';
      break;
      case 'V':
      strBaru += 'W';
      break;
      case 'w':
      strBaru += 'x';
      break;
      case 'W':
      strBaru += 'X';
      break;
      case 'x':
      strBaru += 'y';
      break;
      case 'X':
      strBaru += 'Y';
      break;
      case 'y':
      strBaru += 'z';
      break;
      case 'Y':
      strBaru += 'Z';
      break;
      case 'z':
      strBaru += 'a';
      break;
      case 'Z':
      strBaru += 'A';
      break;
      default:
      strBaru += str[i]  //untuk spasi
      break;
    }
  }
  return strBaru;
}

function reverseWord (str) {
  var reverse = '';
  for (var i = str.length - 1; i >= 0; i--){
    reverse += str[i];
  }
  return reverse;
}

function setLowerUpperCase (str) {
  var temp = '';
  for (var i = 0; i < str.length; i++) {
    var a = str[i];
    if (a === a.toUpperCase()) {
      temp += a.toLowerCase();
    } else if (a === a.toLowerCase()) {
      temp += a.toUpperCase();
    } else {
      temp += a; // buat karakter spasi
    }
  }
  return temp;
}

function removeSpaces (str) {
  var noSpace = '';
  for (var i = 0; i < str.length; i++){
    if (str[i] !== ' ') {
      noSpace += str[i]
    }
  }
  return noSpace;
}

function passwordGenerator (name) {
  var ganti = changeVocals (name)
  var balik = reverseWord (ganti)
  var tukar = setLowerUpperCase (balik)
  var noSpace = removeSpaces (tukar)
  if (noSpace.length < 5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  return noSpace
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'