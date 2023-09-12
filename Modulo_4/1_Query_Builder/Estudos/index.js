const express = require('express');
const knex = require('./conexao')

const app = express();

app.use(express.json());

app.get('/', async(req,res) => {


})

app.listen(3000);