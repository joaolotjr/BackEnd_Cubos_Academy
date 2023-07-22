const cole = "Fala Comigo"


function invertida (string) {


    let novaString = string.split("")
    //console.log(novaString)

    let inverte = novaString.reverse();
    //console.log(inverte)

    let stringInvertida = inverte.join("")
    return console.log(stringInvertida)
}

invertida(cole)