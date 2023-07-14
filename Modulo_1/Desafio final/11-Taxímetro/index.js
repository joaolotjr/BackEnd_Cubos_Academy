const min = 25, km = 11.5;

// copiar apartir daqui

/*
50 cents por minuto de viajem
caso tempo maior que 20 min:
cada min adicionau depois de 20 min, passa a ser 30 cents por min

70 cents por km rodado
caso viagem > 10 km:
cada km adicionado acima de 10km, passa a ser 50 cents

*/

// preço do min rodado

let precomin = 0, precokm = 0, total = 0;  

if(min <= 20){
    precomin = min * 50;
}
else if(min > 20){
    precomin = (1000 + ((min - 20) * 30));
}

if(km <= 10){
    precokm = km * 70;
}
else if( km >10){
    precokm = (700 + ((km - 10) * 50))
}

total = precomin + precokm;

console.log(total);