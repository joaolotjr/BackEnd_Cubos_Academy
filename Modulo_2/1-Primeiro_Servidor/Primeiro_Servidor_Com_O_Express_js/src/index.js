const express = require('express');

const app = express();

app.get('/', (requisicao, resposta) => {
    resposta.send('Ola.... essa é minha rota principal');
});

app.get('/home', (requisicao, resposta) => {
    resposta.send('Ola.... esse é meu primeiro servidos com express');
});

app.get('/array', (requisicao, resposta) => {
    const array = [1, 2, 4, 4, 6, 7, 1];

    resposta.send(array);
});

app.listen(3000); // http://localhost:3000/
