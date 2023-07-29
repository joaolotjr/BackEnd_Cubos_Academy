 const express = require('express');

 const app = express();

 let t = 0, min = (parseInt(t/60)), seg = (t % 60), timer = 0;
 let continua = true;

 
 function ContagemTempo() {
    //Ao invés de um loop faça uma verificação cada vez que função for chamada.

    if(continua){
    t++;
    console.log(t);
    return;
    }    
    clearInterval(timer);             //Finaliza o cronometro identificado por timer.
    console.log("Cronometro Pausado");
  }

 // let timer = setInterval(ContagemTempo, 1000); //Inicializa o cronometro para chamar ContagemTempo a cada 1s.


app.get('/', (req, res) => {
    min = (parseInt(t/60));
    seg = (t % 60);
    res.send(`Tempo atual do cronômetro: ${min} minutos e ${seg} segundos`)    

})

app.get('/iniciar', (req, res) => {
    res.send(`Cronômetro iniciado!`)
    console.log(`Cronômetro iniciado!`)
    if(continua){
        timer = setInterval(ContagemTempo, 1000);
    }    
})

app.get('/pausar', (req, res) => {

    res.send(`Cronômetro pausado!`)
    continua = false;
})

app.get('/continuar', (req, res) => {
    continua = true;
    res.send(`Cronômetro continuando!`)
    console.log(`Cronômetro continuando!`)
    if(continua){
        timer = setInterval(ContagemTempo, 1000);
    }    
})

app.get('/zerar', (req, res) => {
    t = 0;   
    res.send(`Cronômetro zerado!`) 
    console.log(`Cronômetro zerado!`)
})

 app.listen(8000, () => {
    console.log(`Servidor inicializado na porta 8000`)
 });

