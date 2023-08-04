let { instrutores, identificadorInstrutor, aulas, identificadorAula } = require('../bancodedados');

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


module.exports = {
    adicinarAularInstrutor
}