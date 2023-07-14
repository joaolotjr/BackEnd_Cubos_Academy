const texto = "  Cuidado, pois usuarios as . vezes deixam espacos vazios no fim do texto sem querer ";

// copiar apartir daqui


let listaComUmEspacoSo = "", leng = (texto.length - 1)

for(i=0 ; i<texto.length ; i++){
    if(texto[i] == " " && texto[i+1] == " "){
        i++;
    }
    else if(i == 0 && texto[i] == " " ){
                
    }
    else if(i == leng && texto[i] == " "){
        
    }
    else{
        listaComUmEspacoSo += texto[i];
    }
}

//console.log(listaComUmEspacoSo)

let contador = 0, NumeroDePalavras = 0

for(i=0; i<listaComUmEspacoSo.length; i++){
    if(listaComUmEspacoSo[i] == " "){
        contador++
    }    
}

if(listaComUmEspacoSo.length > 0 && contador == 0){
    console.log(1)
}
else if(texto.length === 0){
    console.log(0)
}
else if(contador > 0){
    console.log(`${contador + 1}`)
}
else{console.log(contador)}









