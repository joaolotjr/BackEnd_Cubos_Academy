let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

//---------Identificador-----------
//
identificador = identificador.padStart(6, "0")
console.log(identificador)

//--------------Nome--------------

function primiraMaiuscula (nomeUnico) { // coloca a string com a primeira letra maiuscula
    const maiuscula = nomeUnico[0].toUpperCase() + nomeUnico.substr(1);
    return maiuscula;
}

function retornaComInicialMaiuscula (nome){

    let nomesSeparados = nome.split(" ");
    let nomesJuntos = []; //,
    for(i = 0; i < nomesSeparados.length; i++ ){
        nomesJuntos.push(primiraMaiuscula(nomesSeparados[i]))//=  primiraMaiuscula(nomesSeparados)
    }
    let nomesjuntosMaiuscula = nomesJuntos.join(" ");
    //console.log(nomesjuntosMaiuscula)
    return nomesjuntosMaiuscula
}
nome = retornaComInicialMaiuscula(nome);
console.log(nome)

//----------------------------------------
//--------------Email--------------

email = email.replace(/ /g, "");

console.log(email)






