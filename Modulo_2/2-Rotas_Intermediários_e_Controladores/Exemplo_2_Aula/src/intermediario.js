const senhaValidacao = (req, res, next) => {
    const {senha} = req.query

    if (!senha){
        return res.send(`Senha não informada`)
    }
    if (senha == 'carros123'){
        next()
    }
    else if(senha != 'carros123'){
        return res.send(`Senha incorreta`)

    }
    
}

module.exports = senhaValidacao;