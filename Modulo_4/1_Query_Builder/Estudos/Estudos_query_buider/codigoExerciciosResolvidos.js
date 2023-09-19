const express = require('express');
const knex = require('./conexao')

const app = express();

app.use(express.json());

app.get('/', async(req,res) => {

    //const quantidadeMedicamentos = await knex('farmacia').count();

    //const usuarioMaisNovo  = await knex('usuarios').min('idade').debug();
    
    //const somaEstoqueComCategoria = await knex('farmacia')
    //.select('categoria')
    //.sum('estoque')
    //.whereNotNull('categoria')
    //.groupBy('categoria')
    //.debug();

    //const semCategoriaFarmacia = await knex('farmacia')
    //.whereNull('categoria')
    //.count();

    //const quantidadeCategoria = await knex('farmacia')
    //.select('categoria')
    //.count()
    //.whereNotNull('categoria')
    //.groupBy('categoria')
    //.debug();

    const quantidadeUsuarios = await knex('usuarios')
    .select('idade')
    .count()
    .where('idade', '>=', 18)
    .groupBy('idade')
    .debug();

    
    return res.json(quantidadeUsuarios)


})

app.listen(3000);