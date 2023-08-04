let { instrutores, identificadorInstrutor, aulas, identificadorAula } = require('../bancodedados.js');

const adicinarAularInstrutor = (req, res) => {

    const { idInstrutor } = req.params;
    const {titulo, descricao} = req.body;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor);
    })

    if(!instrutor){
        return res.status(404).json({ mensagem: 'O instrutor não existe.'}) 
    }

    if(!titulo){
        return res.status(400).json({mensagem: 'O titulo é obrigatório!!'})
    }
    if(!descricao){
        return res.status(400).json({mensagem: 'A descricao é obrigatório!!'})
    }

    const aula = {
        id: identificadorAula++,
        id_Istrutor: Number(idInstrutor),
        titulo,
        descricao,      
    }
    aulas.push(aula);    

    return res.status(201).json(aula);
}


const listarAulas = (req, res) => {
    return res.status(200).json(aulas)
}

const obterAula = (req, res) => {

    const {id} = req.params;

    const aula = aulas.find((aula) =>{
        return aula.id === Number(id);
    })

    if(!aula){
        return res.status(404).json({ mensagem: 'Aula não encontrado'})
    }
    return res.status(200).json(aula)
}

const obterAulasInstrutor = (req, res) => {
    const {idInstrutor} = req.params;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor);
    })

    if(!instrutor){
        return res.status(404).json({ mensagem: 'O instrutor não existe.'}) 
    }

    const aulaDoinstrutor = aulas.filter((aulaDoinstrutor) =>{
        return aulaDoinstrutor.id_Istrutor === Number(idInstrutor);
    })
/*
    if(!aula){
        return res.status(404).json({ mensagem: 'Aula não encontrada'})
    }
    */

    return res.status(200).json(aulaDoinstrutor)
}






module.exports = {
    adicinarAularInstrutor,
    listarAulas,
    obterAula,
    obterAulasInstrutor
    
}