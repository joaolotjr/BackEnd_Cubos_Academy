const express = require('express');
const knex = require('./conexao')

const app = express();

app.use(express.json());

app.get('/', async(req,res) => {
/*
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

    */

    //const agenda = await knex('agenda').insert(guido).returning(['id', 'nome']);
    const agenda = await knex('agenda').insert([joao, Maria]).returning('*');

    return res.json(agenda)


});

app.put('/:id', async (req,res) => {
    const {nome, email, telefone} = req.body;
    const {id} = req.params;

    const agendaAtualizada = await knex('agenda')
    .update({nome, email, telefone})
    .where({id})// ou .where('id', id)
    .returning('*'); 

    return res.json(agendaAtualizada)



});


app.delete('/:id', async (req,res) => {
    const {id} = req.params;

    const agendaExcluida = await knex('agenda')
    .del()
    .where({id})// ou .where('id', id)
    .returning('*'); 

    return res.json(agendaExcluida)
});


app.post('/:id/anotacoes', async (req,res) => {
    const {id} = req.params;
    const{ nota } = req.body;

    const anotacao = await knex('anotacoes')
    .insert({
        agenda_id: id,
        nota
    })
    .returning('*'); 

    return res.json(anotacao)
});

app.listen(3000);