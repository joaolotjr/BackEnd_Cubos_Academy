const express = require('express');
const {filtrarProfessores, encontraProfessor} = require('./controladores/professores');
const professores = require ('./bancodedados');

const app = express();

const primeiroIntermediario = (req, res, next) =>{
    console.log('passei no primeiro intermediário')
    next();
}

const segundoIntermediario = (req, res, next) =>{
    console.log('passei no segundo intermediário')
    next();
}

const intermediarioDaRota = (req, res, next) =>{
    console.log('passei no intermediário da rota')
    next();
}

//app.use(primeiroIntermediario);
//app.use(segundoIntermediario);



app.get('/', (req, res) =>{
    res.send(`Pagina inicial`)
})


// http://localhost:3000/professores
app.get('/professores', intermediarioDaRota, filtrarProfessores)

// http://localhost:3000/professores/2
app.get('/professores/:id', encontraProfessor )


app.listen(3000)