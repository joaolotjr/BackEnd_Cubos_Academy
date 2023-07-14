const numeros = [3];

// copiar apartir daqui

soma = 0;

for( i=0; i<numeros.length;i++){
    soma += numeros[i];
}
goleiro = soma % numeros.length;

if(goleiro == 0){
    console.log(numeros.length)
}
else{
    console.log(goleiro)
}







