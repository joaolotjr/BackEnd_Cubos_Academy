let {contas} = require('./bancodedados.js');

const senhaValidacao = (req, res, next) => {
    const {senha_banco} = req.query

    if (!senha_banco){
        return res.status(401).json({mensagem: "Senha não informada"})
        
    }
    if (senha_banco == '123'){
        next()
    }
    else if(senha_banco != 'carros123'){
        return res.status(401).json({mensagem: "Senha incorreta"})
    }    
}

const contaValidacao = (req, res, next) =>{
    const {numero_conta, senha} = req.query;

    if(!numero_conta){
        return res.status(400).json({ mensagem: 'O número da conta é obrigatório'})
    }

    const conta = contas.find((conta) =>{
        return conta.numero === numero_conta;
    })

    if(!conta){
        return res.status(404).json({ mensagem: 'Conta não encontrada'})
    }

    if(!senha){
        return res.status(401).json({ mensagem: 'Obrigatório informar senha da conta'})
    }

    if(senha != conta.usuario.senha){
        return res.status(401).json({ mensagem: 'Senha incorreta'})
    }
    next()
}

module.exports = {
    senhaValidacao,
    contaValidacao
};