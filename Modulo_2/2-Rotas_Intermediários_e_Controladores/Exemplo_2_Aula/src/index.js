const express = require('express');

const carros = require ('./bancodedados');
const { encontraCarros, filtrarCarros } = require('./controladores/carros');

const app = express();

// http://localhost:3000/professores
app.get('/carros', filtrarCarros)

// http://localhost:3000/professores/2
app.get('/carros/:id', encontraCarros )

app.listen(3000);