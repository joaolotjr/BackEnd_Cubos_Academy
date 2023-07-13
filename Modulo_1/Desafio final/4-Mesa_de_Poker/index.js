const min = 1,max = 1,valores = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// copiar apartir daqui

let lista = [] ;

for(i=0; i<valores.length; i++){
    if(valores[i] >= min && valores[i] <= max){
        lista.push(valores[i])
    }    
}

console.log(lista)

