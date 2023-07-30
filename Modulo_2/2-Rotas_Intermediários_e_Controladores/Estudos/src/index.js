const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send(`pagina inicial 1`)


})


app.listen(3000)