const celular = 99918888;

let celularString = String(celular);

if(celularString.length == 11){ // completo

    console.log(`(${celularString.slice(0,2)}) 9 ${celularString.slice(3,7)}-${celularString.slice(7,11)}`)
}
else if(celularString.length == 10){//com DD sem 9

    console.log(`(${celularString.slice(0,2)}) 9 ${celularString.slice(2,7)}-${celularString.slice(7,11)}`)

}else if(celularString.length == 9) {// sem DD com 9

    console.log(`9 ${celularString.slice(1,5)}-${celularString.slice(5,9)}`)

}
else if(celularString.length == 8){// sem DD sem 9 
    console.log(`9 ${celularString.slice(0,4)}-${celularString.slice(4,8)}`)

}

