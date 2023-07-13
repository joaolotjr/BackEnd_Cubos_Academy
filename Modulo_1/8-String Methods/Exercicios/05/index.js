const numeroCartao = '1111222233334444';

let dadostampados = "" ;


for(i = 0; i < numeroCartao.length; i++){

    if(i >= 4 && i <= 11){
        dadostampados += "*";
    }
    else {
        dadostampados += numeroCartao[i];
    }
}

console.log(dadostampados);