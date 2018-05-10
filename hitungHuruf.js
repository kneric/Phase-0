function hitungHuruf(kata) {
  var kataArr = kata.split(' ');
  var temp = [];
  var tampung = [];
  var isSame = Boolean;
  for (var i = 0; i < kataArr.length; i++){
    temp = kataArr[i]
    for (var j = 0; j < temp.length; j++) {
      for (var k = j + 1; k < temp.length; k++) {
        if (temp[j] === temp[k]) {
          tampung.push(temp);
        }
      }
    }
  }
  return (tampung[0] === undefined) ? -1 : tampung[0]
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau