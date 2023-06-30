const numeros = [3, 24, 1, 8, 11, 7, 15];

let menor = Number.POSITIVE_INFINITY;

for(num of numeros){

    if(num < menor){
        menor = num;
    }
}

console.log(menor);



