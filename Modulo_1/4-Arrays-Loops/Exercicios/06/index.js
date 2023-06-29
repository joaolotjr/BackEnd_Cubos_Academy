const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let soma = 0;

for(num of numeros){
    if(num % 2 == 0){
        soma += num;
    }
}

console.log(soma);