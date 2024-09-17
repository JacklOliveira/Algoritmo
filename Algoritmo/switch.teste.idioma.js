const prompt=require("prompt-sync")();
const idiomas=prompt("escolha o idioma configurado:")
switch(idiomas){
    case "1":
        console.log('pt para idioma configurado para o portugues');
        break;
    case "2":
        console.log('en para o idioma configurado para o english');
        break;
    case "3":
        console.log('es para o idioma confugurado em español');
        break;
    case "4":
        console.log('fr para o idioma configurado em français');
    case "5":
        console.log('jp para o idioma configurado em 設定された言語')
        break;
        default:
            console.log ('o idioma escolhido é invalido.')
}