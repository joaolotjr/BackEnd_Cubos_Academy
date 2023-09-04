const express = require('express');
const pool = require('./conexao')


const app = express();

app.use(express.json())

app.get('/:id', async (req, res) =>{
    const { id } = req.params
    
     try{       
            //const query = `select * from empresas where nome = $1 or nome = $2 `;
            //const params = ['Google','Facebook']

            const query = `update empresas set site = $1 where id = $2`
            const params = ['www.cakewalk.com', 1]
            const resultado = await pool.query(query, params)              
            return res.json(resultado.rows)
        }
     catch (error) {
        console.log(error.message)
        
    }





});

app.listen(3000);