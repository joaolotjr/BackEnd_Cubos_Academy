const express = require('express');
const fs = require('fs/promises')

const app = express();

app.use(express.json());

const conteudo = async (req, res) => {

    const texto = 'Tudo bem?'
    await fs.writeFile('./src/b.txt', texto)

        
    res.json(`Pagina Inicial`)
}

app.post('/', async ( req, res ) =>{
    const {nome, idade} = req.body;

    try{
        const teste = await fs.readFile('./src/usuarios.json')
    
        const pessoas = JSON.parse(teste);

     pessoas.push({nome, idade})

     //console.log(pessoas)

     const pessoasStringify = JSON.stringify(pessoas)

      //console.log(pessoasStringify)

      await fs.writeFile('./src/usuarios.json', pessoasStringify);

     return res.json('Pessoa Cadastrada com sucesso')
        
    } catch (erro){
        return res.json(`Deu erro: ${erro.message}`)
    }
    finally{
        console.log('isso sempre sera executado')
    }
})

app.get('/', conteudo)

app.listen(3000)
