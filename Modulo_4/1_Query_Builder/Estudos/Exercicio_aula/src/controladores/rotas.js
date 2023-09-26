const express = require('express');
const usuarios = require('./controladores/usuarios');

const rotas = express();

rotas.get('/usuarios', usuarios.listar);
