const express = require('express');
const {senhaValidacao, contaValidacao} = require ('./intermediarios');
const { listarContas, criarConta, atualizarConta, excluirConta, consultarSaldo, extrato} = require('./controladores/contas')
const { depositar, sacar, transferir } = require('./controladores/transacoes')

const rotas = express();

rotas.get('/contas', senhaValidacao, listarContas);
rotas.post('/contas', criarConta);
rotas.put('/contas/:numeroConta/usuario', atualizarConta);
rotas.delete('/contas/:numeroConta', excluirConta)

rotas.post('/transacoes/depositar', depositar)
rotas.post('/transacoes/sacar', sacar)
rotas.post('/transacoes/transferir', transferir)

rotas.get('/contas/saldo', contaValidacao, consultarSaldo)
rotas.get('/contas/extrato', contaValidacao, extrato)

module.exports = rotas;