let ligadoDesligado = "Desligado";

const carro = {

    ligado: false,
    velocidade: 0,

    ligar: function () {

        if(this.ligado){
            console.log(`Este carro já está ligado.`
            )}
        else {
            this.ligado = true
            ligadoDesligado = "Ligado"
            imprimeStatus (carro);
        }
    },

    desligar: function () {
        if(!this.ligado){console.log(`Este carro já está desligado.`) }
        else {
            this.ligado = false;
            this.velocidade = 0;
            ligadoDesligado = "Desligado"
            imprimeStatus (carro);            
        }
    },

    acelerar: function () {
        if(!this.ligado){console.log(`Não é possível acelerar um carro desligado.`)}
        else{
            this.velocidade += 10;
            imprimeStatus (carro);
        }

        
    },

    desacelerar: function () {
        if(!this.ligado){console.log(`Não é possível desacelerar um carro desligado.`)}
        else{
            this.velocidade -= 10;
            imprimeStatus (carro);
        }
    },

};

function imprimeStatus (entrada) {
    console.log(`Carro ${ligadoDesligado}. Velocidade: ${entrada.velocidade}`)
} 


carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();


