const express = require('express');
const {filtrarProfessores, encontraProfessor} = require('./controladores/professores');
const professores = require ('./bancodedados');

const app = express();

app.get('/', (req, res) =>{
    res.send(`Pagina inicial`)
})

app.get('/professores', filtrarProfessores)


app.get('/professores/:id', encontraProfessor )


app.listen(3000)