const express = require('express');

const rotas = express();

rotas.get('/', (req, res) => {
    res.send('Tudo OK !!')
})

module.exports = rotas;