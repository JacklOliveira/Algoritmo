const prompt= require("prompt-sync")();
let numero = prompt("digite um numero:");
if (numero%2==0){
    console.log("Par")
}else {
    console.log("Impar")
}