const express = require('express');

const app = express();

const {somar, subtrair, multiplicar, dividir } = require('./controladores');

const conteudo = (req, res) => {
    console.log(`Server on`)
    res.send(`Pagina Inicial!`)
}

// http://localhost:3000/somar
app.get('/somar', somar)


// http://localhost:3000/subtrair
app.get('/subtrair', subtrair)

// http://localhost:3000/multiplicar
app.get('/multiplicar', multiplicar)

// http://localhost:3000/dividir
app.get('/dividir', dividir )

app.get('/', conteudo)


app.listen(3000)