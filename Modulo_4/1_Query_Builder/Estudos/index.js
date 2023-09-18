const express = require('express');
const knex = require('./conexao')

const app = express();

app.use(express.json());

app.get('/', async(req,res) => {

    const guido = {
        nome: 'Guido Cerqueira 4',
        email: 'guido4@email.com',
        telefone: '(99) 9999-9996'
    }
    const joao = {
        nome: 'Joao Carlos',
        email: 'JoaoCarlos@email.com',
        telefone: '(99) 9999-9995'
    }
    const Maria = {
        nome: 'maria',
        email: 'Maria@email.com',
        telefone: '(99) 9999-9994'
    }

    //const agenda = await knex('agenda').insert(guido).returning(['id', 'nome']);
    const agenda = await knex('agenda').insert([joao, Maria]).returning('*');

    return res.json(agenda)


})

app.listen(3000);