const lista = [12,28,27,1000,20];

// copiar apartir daqui

let menorDeMaior = Number.POSITIVE_INFINITY;
cont = 0;

for(i=0; i<lista.length; i++){
    if(lista[i] >= 18){
        if(lista[i] < menorDeMaior){
            menorDeMaior = lista[i]
            cont++;
        }
    }
}
if(cont == 0){
    console.log(`CRESCA E APARECA`)
}
else{
    console.log(menorDeMaior)
}
