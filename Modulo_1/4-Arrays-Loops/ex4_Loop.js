const palavra = 'paralelepipedo';

let cont = 0;


for (let letra of palavra){
    if(letra === 'a'){
    cont++;

    }

}

if( cont <= 1){ 
    console.log (`Tem ${cont} letra 'a' na palavra ${palavra}`);
}

if( cont > 1){ 
    console.log (`Tem ${cont} letras 'a' na palavra ${palavra}`);
}