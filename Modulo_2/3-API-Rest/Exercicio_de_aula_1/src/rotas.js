const express = require('express');
const instrutores = require('./controladores/instrutores');
const aulas = require('./controladores/aulas');

const rotas = express();

rotas.get('/instrutores', instrutores.listarInstrutores)
rotas.get('/instrutores/:id', instrutores.obterInstrutor)
rotas.post('/instrutores', instrutores.cadastrarInstrutor)
rotas.put('/instrutores/:id', instrutores.atualizarInstrutor)
rotas.patch('/instrutores/:id/status', instrutores.atualizarStatusInstrutores)
rotas.delete('/instrutores/:id', instrutores.excluirInstrutor)


rotas.post('/instrutores/:idInstrutor/aulas', aulas.adicinarAularInstrutor)

module.exports = rotas;