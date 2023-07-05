let idade = 69;

function retornaFaixaEtaria (idade){

    if(idade <= 21){return"jovem"}
    else if(idade > 21 && idade <= 65 ){ return "adulto(a)"}
    else if(idade > 65 ){ return "idoso(a)"}

}

console.log(retornaFaixaEtaria(idade))