//const input = "3\n0 0\n0 3\n4 0\n";
const input = "5\n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n-9.01 -17.7"

// copiar apartir daqui

//console.log(input)
let dados = input.trim().split("\n");
dados.shift()

//console.log(dados) // [ '0 0', '0 3', '4 0' ]



//init cod
let dist = 0;



function distancia (pontoA, pontoB){

    const cordA = pontoA.split(" ").map((numero) => parseFloat(numero));
    const cordB = pontoB.split(" ").map((numero) => parseFloat(numero)) ;

    return Math.sqrt((cordA[0]-cordB[0])**2 + (cordA[1] - cordB[1])**2)
}
//console.log(distancia(dados[0], dados[1]))

for(i=0; i< dados.length; i++){
    for(j=0; j < dados.length; j++){
        const distEncontrada = distancia(dados[i], dados[j])
        if( distEncontrada > dist){
            dist = distEncontrada;
        }         
    }
}
console.log(dist)


