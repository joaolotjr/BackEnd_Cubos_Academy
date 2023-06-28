//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 3_000_00;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 10_000_00;


if(rendaMensalEmCentavos > 2_000_00 && mesesDecorridos <= 60 && totalJaPagoPeloAluno <= 18_000_00 ){

    let pagar = rendaMensalEmCentavos * 0.18; 

    if ( (pagar + totalJaPagoPeloAluno) > 18_000_00){ //caso a parcele passe os 18 mil devidos, sera calculado a nova parcela.

        pagar = 18_000_00 - totalJaPagoPeloAluno;
        
        console.log(`O valor da parcela desse mês é R$ ${pagar/100} reais, e voce quitará a sua dívida com a CUBOS!!!!`)
    }
    

    else console.log(`O valor da parcela desse mês é R$ ${pagar/100} reais`);
}

else if (rendaMensalEmCentavos <= 2_000_00 ){

    console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`);

}

else if( mesesDecorridos > 60){
    console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois, ja se passarem masi de 60 meses, com isso o aluno não deve mais nada.`);

}

else if( totalJaPagoPeloAluno >= 18_000_00){
    console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois, o aluno já quitou a sua dívida de 18 mil reais.`);
}