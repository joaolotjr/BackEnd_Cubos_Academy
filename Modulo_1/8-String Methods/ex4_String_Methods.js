//Transforme "jose messias junior"
//em Jose Messias Junior 
// ou seja, priemiras letras dos nomes em maiuscula

const nomee = "jose messias junior"

function primiraMaiuscula (nomeUnico) { // coloca a string com a primeira letra maiuscula
    const maiuscula = nomeUnico[0].toUpperCase() + nomeUnico.substr(1);
    return maiuscula;
}

//console.log(primiraMaiuscula (nomee))

function imprimiComInicialMaiuscula (nome){

    let nomesSeparados = nome.split(" ");
    let nomesJuntos = []; //,
    for(i = 0; i < nomesSeparados.length; i++ ){
        nomesJuntos.push(primiraMaiuscula(nomesSeparados[i]))//=  primiraMaiuscula(nomesSeparados)
}

let nomesjuntosMaiuscula = nomesJuntos.join(" ");
console.log(nomesjuntosMaiuscula)

}

imprimiComInicialMaiuscula(nomee);