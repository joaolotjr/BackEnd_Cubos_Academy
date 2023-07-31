
const imoveis = require("../dados/imoveis")


const get = (req, res) => {
    console.log(`Server on`)
    res.send(imoveis)
}

const getPorId = (req, res) =>{
    console.log(`Rota para encontrar um imovel`)
    const imovelEncontrado = imoveis.find((imovel) => {
        return imovel.id === Number(req.params.id);
    })
    res.send(imovelEncontrado)
}


module.exports = {get, getPorId}