const express = require('express');

const senhaValidacao = require ('./intermediario');
const carros = require ('./bancodedados');
const { encontraCarros, filtrarCarros } = require('./controladores/carros');

const app = express();

//app.use(senhaValidacao)

// http://localhost:3000/professores
app.get('/carros',senhaValidacao, filtrarCarros)

// http://localhost:3000/professores/2
app.get('/carros/:id',senhaValidacao, encontraCarros )

app.listen(3000);