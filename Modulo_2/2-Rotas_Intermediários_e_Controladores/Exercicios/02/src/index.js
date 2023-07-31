const express = require('express');

const jogadores = require("./bancodedados");

const {jogador, removerjogador, adiconarjogador} = require("./controlador/jogador");

const app = express();

app.get('/', jogador)

app.get('/remover', removerjogador)

app.get('/adicionar', adiconarjogador)

app.listen(8000)