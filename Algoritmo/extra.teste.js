const prompt= require("prompt-sync")();
let texto=prompt("digite um texto:")
console.log(`o tamanho do texto é de :${texto.length}`)

let palavra = prompt('digite a palavra que deseja substituir:')
let nova = prompt("digite a palvra nada:")
console.log(texto.replaceAll(palavra,nova))