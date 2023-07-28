const express = require('express');

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda", "Elena"];
let cont = 0;

const servidor = express();

servidor.get('/', (req, res) => {
    if(cont >= jogadores.length ){
        cont = 0;
      }    
    res.send(`É a vez de ${jogadores[cont]} jogar!`);
      cont ++;
})

servidor.listen(3000);