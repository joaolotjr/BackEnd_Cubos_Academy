const filaDeDentro = ["Jose", "Joao"];
const filaDeFora = ["Joana", "Roberta"];

while (filaDeDentro.length <= 4 ){

    if( filaDeFora.length == 0 ){break}

    else {filaDeDentro.push(filaDeFora.shift())}
}

console.log(filaDeDentro);
console.log(filaDeFora);