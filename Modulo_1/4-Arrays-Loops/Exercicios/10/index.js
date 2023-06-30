const numeros = [8, 11, 4, 1];


let maiorDiferenca = Number.NEGATIVE_INFINITY;


for(i=0; i < numeros.length; i++){
    for(j = numeros.length -1; j >= 0 ; j--)
    {
        if((numeros[i]-numeros[j]) > maiorDiferenca ){
            maiorDiferenca = (numeros[i]-numeros[j])
        }
    }    
}

console.log(maiorDiferenca)