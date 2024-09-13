let prompt = require("prompt-sync")();
let maquina= Math.floor(Math.random() * (10 - 1)) + 1;
let escolha=prompt("escolha par ou impar: ")
let numero=parseInt(prompt("digite um numero: "))
let soma= numero+maquina
let avaliacao=""
if (soma%2==0){
    console.log("Par")
    avaliacao="par"
}else {
    console.log("Impar")
    avaliacao="impar"
}

if(avaliacao==escolha){
    console.log(`voce escolheu ${numero}. o computador escolheu ${maquina}. ou seja, ${numero} + ${maquina}${maquina+numero}. voce ganhou` )
}
else{
    console.log(`voce escolheu ${numero}. o computador escolheu ${maquina}. ou seja, ${numero} + ${maquina}=${maquina+numero}. voce perdeu`)
} 