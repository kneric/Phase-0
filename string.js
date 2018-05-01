// lets form a sentence

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word+' '+second+' '+third+' '+fourth+' '+fifth+' '+sixth+' '+seventh)

// index accessing -1 by 1

var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13] ;
var thirdWord = word[15] + word[16] ; 
var fourthWord = word[18] + word[19] ;
var fifthWord = word[21] + word[22] + word[23] + word[24] ;

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

// breaking sentence (again) using substring

var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substr(5, 15);
var thirdWord3 = word3.substr(17, 19);
var fourthWord3 = word3.substr(21, 23);
var fifthWord3 = word3.substr(25, 29);

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

// breaking sentence (yet again) and count each length

var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word4.substring(0, 3);
var secondWord4 = word4.substring(4, 14);
var thirdWord4 = word4.substring(15, 17);
var fourthWord4 = word4.substring(18, 20);
var fifthWord4 = word4.substring(21, 25);

var firstWord4Length = exampleFirstWord4.length;
var secondWord4Length = secondWord4.length;
var thirdWord4Length = thirdWord4.length;
var fourthWord4Length = fourthWord4.length;
var fifthWord4Length = fifthWord4.length;

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWord4Length);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWord4Length);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWord4Length);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWord4Length);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWord4Length);