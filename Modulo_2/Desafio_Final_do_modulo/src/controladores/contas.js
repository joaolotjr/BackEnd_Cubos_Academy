let { contas, saques, depositos, transferencias } = require('../bancodedados.js');
let idConta = 1

const verificaCPF = (cpf, res) => {

    let acharCPF = contas.find((acharCPF) => {
        return acharCPF.usuario.cpf === cpf;
    })
    if(acharCPF){
        res.status(400).json({mensagem: 'Esse CPF ja foi cadastrado!'})
        return true;
    }
    return false;
}

const verificaEmail = (email, res) => {

    let acharEMAIL = contas.find((acharEMAIL) => {
        return acharEMAIL.usuario.email === email;
    })
    if(acharEMAIL){
        return res.status(400).json({mensagem: 'Esse E-mail já foi cadastrado!'})
    }
}

const listarContas = (req, res) =>{
    return res.status(200).json(contas)
}

const criarConta = (req, res) =>{

    const {nome, cpf, data_nascimento, telefone, email, senha} = req.body;

    if(!nome){
        return res.status(400).json({mensagem: 'O nome é obrigatório!!'})
    }
    if(!cpf){
        return res.status(400).json({mensagem: 'O CPF é obrigatório!!'})
    }
    if(!data_nascimento){
        return res.status(400).json({mensagem: 'A data de nascimento é obrigatória!!'})
    }
    if(!telefone){
        return res.status(400).json({mensagem: 'O telefone é obrigatório!!'})
    }
    if(!email){
        return res.status(400).json({mensagem: 'O email é obrigatório!!'})
    }
    if(!senha){
        return res.status(400).json({mensagem: 'A senha é obrigatória!!'})
    }

    if(verificaCPF(cpf, res)){return;}
    if(verificaEmail(email, res)){return;}

    const conta = {
    numero:  String(idConta++),
    saldo: 0,
    usuario: {
        nome,
        cpf,
        data_nascimento,
        telefone,
        email,
        senha
        }
    }    
    contas.push(conta);
    return res.status(201).json(conta);
}

const atualizarConta = (req, res) =>{
    const {numeroConta} = req.params;
    const {nome, cpf, data_nascimento, telefone, email, senha} = req.body;

    if(!nome && !cpf && !data_nascimento && !telefone && !email && !senha ){
        return res.status(400).json({mensagem: 'Pelo menos um parametro pra alteração é obrigatório!!'})
    }

    const conta = contas.find((conta) =>{
        return conta.numero === numeroConta;
    })

    if(!conta){
        return res.status(404).json({ mensagem: 'Conta não encontrada'})
    }

    if(cpf){
        if(verificaCPF(cpf, res)){
            return;            
        }
    }
    if(email){
        if(verificaEmail(email, res)){
            return;
        }
    }

    if(nome){conta.usuario.nome = nome}
    if(cpf){conta.usuario.cpf = cpf}
    if(data_nascimento){conta.usuario.data_nascimento = data_nascimento}
    if(telefone){conta.usuario.telefone = telefone}
    if(email){conta.usuario.email = email}
    if(senha){conta.usuario.senha = senha}    
    
    return res.status(200).json({ mensagem: 'Conta atualizada com sucesso'})
}

const excluirConta = (req, res) =>{
    const { numeroConta } = req.params;

    const conta = contas.find((conta) => {
        return conta.numero === numeroConta;
    })

    if(!conta){
        return res.status(404).json({ mensagem: 'A conta não existe.'}) 
    }

    contas = contas.filter((conta) => {
        return conta.numero != numeroConta;
    });

    return res.status(200).json({ mensagem: 'Conta excluída com sucesso'});
}

const consultarSaldo = (req, res) => {
    const {numero_conta, senha} = req.query;

    const conta = contas.find((conta) =>{
        return conta.numero === numero_conta;
    })

    const saldo = { saldo: conta.saldo}
    
    return res.status(200).json(saldo);
}

const extrato = (req, res) => {

    const {numero_conta, senha} = req.query;

    
    const saque = saques.filter((saque) => {
        return saque.numero_conta === numero_conta;
    });
    const deposito = depositos.filter((deposito) => {
        return deposito.numero_conta === numero_conta;
    });

    const transferenciasEnviadas = transferencias.filter((transferenciasEnviadas) => {
        return transferenciasEnviadas.numero_conta_origem === numero_conta;
    });

    const transferenciasRecebidas = transferencias.filter((transferenciasRecebidas) => {
        return transferenciasRecebidas.numero_conta_destino === numero_conta;
    });

    const extrato = {
        Depositos: deposito,
        Saques: saque,
        transferenciasEnviadas,
        transferenciasRecebidas
    }

    return res.status(200).json(extrato);
}

module.exports = {
    listarContas,
    criarConta,
    atualizarConta,
    excluirConta,
    consultarSaldo,
    extrato    
}