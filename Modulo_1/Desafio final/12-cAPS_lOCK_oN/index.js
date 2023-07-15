const input = 'aBAaAXI';

//1º - palavra toda maiuscula -> retornar toda minuscula
//2º - Primeira minuscula e resto maiuscula -> inverter todas as letras
//3º else - saira igual a entrada


// copiar apartir daqui

if(input == input.toUpperCase()){
    console.log(input.toLocaleLowerCase())
}

else if(input[0] == input[0].toLowerCase() && input.slice(1) == input.slice(1).toUpperCase()){ 
    console.log(`${input[0].toUpperCase()}${input.slice(1).toLowerCase()}`)
}

else{console.log(input)}

/*
lógica com monitor:

if(input[0] == input[0].toUpperCase()){
    console.log(`A primeira letra maiuscula`)
}
if(input.slice(1) == input.slice(1).toUpperCase()){
    console.log(`O resto da palavra é MAIUSCULA`)
}

*/