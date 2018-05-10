function ubahHuruf(kata) {
  var huruf = '';
  for (var i = 0; i < kata.length; i++){
    switch (kata[i]){
      case 'w':
        huruf += 'x';
        break;
      case 'o':
        huruf += 'p';
        break;
      case 'd':
        huruf += 'e';
        break;
      case 'e':
        huruf += 'f';
        break;
      case 'v':
        huruf += 'w';
        break;
      case 'l':
        huruf += 'm';
        break;
      case 'p':
        huruf += 'q';
        break;
      case 'r':
        huruf += 's';
        break;
      case 'j':
        huruf += 'k';
        break;
      case 'a':
        huruf += 'b';
        break;
      case 's':
        huruf += 't';
        break;
      case 'c':
        huruf += 'd';
        break;
      case 'i':
        huruf += 'j';
        break;
      case 't':
        huruf += 'u';
        break;
      case 'k':
        huruf += 'l';
        break;
      case 'n':
        huruf += 'o';
        break;
      case 'm':
        huruf += 'n';
        break;
      case 'g':
        huruf += 'h';
        break;
    }
  }
  return huruf;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu