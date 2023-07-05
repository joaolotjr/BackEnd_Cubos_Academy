const pessoa = {
    nome: "joao",
    idade : 21,
    profissao: "Estudante",
    altura: 170
}

function apresentacao (pessoa) {

    if (pessoa.idade < 30){
        console.log(`Ola! Meu nome é ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos, ${pessoa.altura/100}m de altura e sou ${pessoa.profissao}.`)
    }else if( pessoa.idade <65){
        console.log(`Ola! Meu nome é ${pessoa.nome}, sou um(a) adulto(a) de ${pessoa.idade} anos, ${pessoa.altura/100}m de altura e sou ${pessoa.profissao}.`)
    }else {
        console.log(`Ola! Meu nome é ${pessoa.nome}, sou um(a) idoso(a) de ${pessoa.idade} anos, ${pessoa.altura/100}m de altura e sou ${pessoa.profissao}.`)
    }
    
}

apresentacao(pessoa);
