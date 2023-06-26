const valorDaCompra = 100;
const numeroDeParcelas = 10;



if( numeroDeParcelas === 1){
    let dedesconto10 = valorDaCompra * 0.9; //aplicando o desconto de 10%
    console.log(`Você deve pagar ${dedesconto10.toFixed(2)} reais, pois a vista de 10% de desconto`)
}
else if (numeroDeParcelas <= 6){

    const valorDaParcela = valorDaCompra / numeroDeParcelas;

    console.log (`Você deve pagar ${numeroDeParcelas} parcelas de ${valorDaParcela.toFixed(2)} reais`)
}

else if (numeroDeParcelas <= 12){

    let i = 1; // % de juros por mês!

    let M = valorDaCompra * ((1 + i/100) ** numeroDeParcelas)
    const valorDaParcela = M / numeroDeParcelas;

    console.log (`Você deve pagar ${numeroDeParcelas} parcelas de ${valorDaParcela.toFixed(2)} reais, totalizando ${M.toFixed(2)} reais
    `)
}

