const valorDaCompra = 100;
const numeroDeParcelas = 5;



if( numeroDeParcelas === 1){
    let dedesconto10 = valorDaCompra * 0.9; //aplicando o desconto de 10%
    console.log(`Você deve pagar ${dedesconto10.toFixed(2)} reais, pois a vista de 10% de desconto`)
}
else{

    const valorDaParcela = valorDaCompra / numeroDeParcelas;

    console.log (`Você deve pagar ${numeroDeParcelas} parcelas de ${valorDaParcela.toFixed(2)} reais`)
}

