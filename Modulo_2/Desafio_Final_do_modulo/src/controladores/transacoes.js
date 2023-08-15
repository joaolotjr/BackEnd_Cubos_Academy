let { contas, saques, depositos, transferencias } = require('../bancodedados.js');
const {format} = require('date-fns');

const depositar = (req, res) => {
    const {numero_conta, valor} = req.body;

    if(!numero_conta){
        return res.status(404).json({ mensagem: 'O número da conta é obrigatório'})
    }

    const conta = contas.find((conta) =>{
        return conta.numero === numero_conta;
    })

    if(!conta){
        return res.status(404).json({ mensagem: 'Conta não encontrada'})
    }

    if(!valor){
        return res.status(400).json({ mensagem: 'Obrigatório o valor do deposito!'})
    }
    if(valor <= 0 ){
        return res.status(400).json({ mensagem: 'Não é permitido valor do depósito negativo ou zerado.'})
    }

    conta.saldo += valor;

    const date = new Date();
    const dateFormat = format(date, 'yyyy-MM-dd HH:mm:ss');
    
    const deposito = {
        data: dateFormat,
        numero_conta,
        valor
    }

    depositos.push(deposito);
    return res.status(200).json({ mensagem: 'Depósito realizado com sucesso'})

}

const sacar = (req, res) =>{
    const {numero_conta, valor, senha} = req.body;

    if(!numero_conta){
        return res.status(404).json({ mensagem: 'O número da conta é obrigatório'})
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
    if(!valor){
        return res.status(400).json({ mensagem: 'Obrigatório o valor do saque!'})
    }
    if(valor <= 0 ){
        return res.status(400).json({ mensagem: 'Não é permitido valor do saque negativo ou zerado.'})
    }

    if( valor > conta.saldo){
        return res.status(400).json({ mensagem: 'Não é permitido sacar um valor maior do que contido na conta.'})
    }

    conta.saldo -= valor;
        
    const date = new Date();
    const dateFormat = format(date, 'yyyy-MM-dd HH:mm:ss');
    

    const saque = {
        data: dateFormat,
        numero_conta,
        valor
    }

    saques.push(saque);
    return res.status(200).json({ mensagem: 'Saque realizado com sucesso'})
}

const transferir = (req, res) =>{
    const {numero_conta_origem, numero_conta_destino, valor, senha} = req.body;

    if(!numero_conta_origem){
        return res.status(404).json({ mensagem: 'O número da conta de origem é obrigatório'})
    }
    if(!numero_conta_destino){
        return res.status(404).json({ mensagem: 'O número da conta de destino é obrigatório'})
    }

    const conta_origem = contas.find((conta_origem) =>{
        return conta_origem.numero === numero_conta_origem;
    })
    if(!conta_origem){
        return res.status(404).json({ mensagem: 'Conta de origem não encontrada'})
    }

    const conta_destino = contas.find((conta_destino) =>{
        return conta_destino.numero === numero_conta_destino;
    })
    if(!conta_destino){
        return res.status(404).json({ mensagem: 'Conta de destino não encontrada'})
    }
    if(numero_conta_origem === numero_conta_destino){
        return res.status(400).json({ mensagem: 'Conta de destino e origem iguais'})        
    }

    if(!senha){
        return res.status(401).json({ mensagem: 'Obrigatório informar senha da conta de origem'})
    }

    if(senha != conta_origem.usuario.senha){
        return res.status(401).json({ mensagem: 'Senha da conta de origem incorreta'})
    }

    if(!valor){
        return res.status(400).json({ mensagem: 'Obrigatório o valor da transferência!'})
    }
    if(valor <= 0 ){
        return res.status(400).json({ mensagem: 'Não é permitido valor da transferência negativo ou zerado.'})
    }

    if( valor > conta_origem.saldo){
        return res.status(400).json({ mensagem: 'Saldo na conta insuficinete para realizar a transação'})
    }

    conta_origem.saldo -= valor;
    conta_destino.saldo += valor;

    const date = new Date();
    const dateFormat = format(date, 'yyyy-MM-dd HH:mm:ss');
    
    const transferencia = {
        data: dateFormat,
        numero_conta_origem,
        numero_conta_destino,        
        valor
    }

    transferencias.push(transferencia);
    return res.status(200).json({ mensagem: 'Transferência realizado com sucesso'})
}

module.exports = {
    depositar,
    sacar,
    transferir    
}