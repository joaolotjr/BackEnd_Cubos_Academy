const numeros = [54, 22, 14, 87, 10, 284];

let cont = 0;

for(let i = 0; i<numeros.length; i++){

    if(numeros[i] == 10){
        console.log(i);
        cont++;
    }   
}

if(cont == 0){
    console.log(-1)
}
