function balikKata(kata) {
  panjang = kata.length
  x = 0
  
  for (x = 0; x <= panjang; x++)
  console.log(kata[panjang - x])
}


console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS