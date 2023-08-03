const express = require('express');
const instrutores = require('./controladores/instrutores');

const rotas = express();

rotas.get('/instrutores', instrutores.listarInstrutores)
rotas.get('/instrutores/:id', instrutores.obterInstrutor)
rotas.post('/instrutores', instrutores.cadastrarInstrutor)
rotas.put('/instrutores/:id', instrutores.atualizarInstrutor)

module.exports = rotas;