const express = require('express');
const { getCityFromZipcode } = require('utils-playground');
 
const app = express();

app.get('/', async (req, res) =>{
    const cidade =  getCityFromZipcode('30492025')
    const cidade2 =  getCityFromZipcode('17054060')

    const promise = await Promise.all([cidade, cidade2])

    //console.log(promise)

    const [resposta1, resposta2] = promise

    res.send(`A cidade encontrada foi ${resposta1} e ${resposta2}`)
})

app.listen(3000)