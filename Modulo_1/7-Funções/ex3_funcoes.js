const pessoa = {
    nome: "joao",
    idade : 21,
    profissao: "Estudante",
    altura: 170
}

function retornaFaixaEtaria (pessoa){
    if (pessoa.idade < 30){
        return (`jovem`)
    }else if( pessoa.idade <65){
        return (`adulto(a)`)
    }else {
        return (`idoso(a)`)
    }
}

function apresentacao (pessoa) {

    console.log(`Ola! Meu nome é ${pessoa.nome}, sou um(a) ${retornaFaixaEtaria(pessoa)} de ${pessoa.idade} anos, ${pessoa.altura/100}m de altura e sou ${pessoa.profissao}.`)
}

apresentacao(pessoa);
