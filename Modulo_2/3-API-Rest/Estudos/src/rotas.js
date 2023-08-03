const express = require('express');
const instrutores = require('./controladores/instrutores');

const rotas = express();

rotas.get('/instrutores', instrutores.listarInstrutores)
rotas.get('/instrutores/:id', instrutores.obterInstrutor)

module.exports = rotas;