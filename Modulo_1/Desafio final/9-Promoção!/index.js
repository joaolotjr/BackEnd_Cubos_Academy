const precos = [200,150,50,100];

// copiar apartir daqui
const quantItens = precos.length;
let pagar=0, ValorMenorProduto = Number.POSITIVE_INFINITY, pagarSemDesconto = 0;

if(quantItens < 3){
    for( i=0; i<precos.length; i++){
        pagar += precos[i];    
    }
}

else {

    for( i=0; i < quantItens; i++){

        pagarSemDesconto += precos[i];

        if(precos[i] < ValorMenorProduto ){
            ValorMenorProduto = precos[i];
        }    
    }
    pagar = pagarSemDesconto - (ValorMenorProduto/2);
}


console.log(pagar);
