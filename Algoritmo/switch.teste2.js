const prompt=require("prompt-sync")();
const planos=prompt("escolha seu plano:")
switch(planos){
    case "1" :
    console.log('o Plano basico custa R$17.90, com acesso a fimles em 480p, 1 Tela');
      break;
    case "2":
    console.log('o Plano premuim custa R$22.90, com acesso a filmes em 1080o, 4 Telas');
      break;
    case "3":
    console.log('o Plano familia custa 25.90, com acesso a filmes em 4K, ate 6 telas simultaneas')
      break;
   default:
    console.log('O plano selecionado é invalido')}