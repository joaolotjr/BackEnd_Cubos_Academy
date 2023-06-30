const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

// usando fo of
/* 
for(num of original){

    if (num % 2 == 0){
        pares.push(num);
    }
    else if(num % 2 != 0){
        impares.push(num);
    }
}
*/

// Usando while


/*
let i = 0;
while(i < original.length)
{
    if (original[i] % 2 == 0){
        pares.push(original[i]);
    }
    else if(original[i] % 2 != 0){
        impares.push(original[i]);
    }
    i++;
}
*/

//usando for de C

for(i = 0; i < original.length; i++){

    if (original[i] % 2 == 0){
        pares.push(original[i]);
    }
    else if(original[i] % 2 != 0){
        impares.push(original[i]);
    }
}


console.log(pares)
console.log(impares)