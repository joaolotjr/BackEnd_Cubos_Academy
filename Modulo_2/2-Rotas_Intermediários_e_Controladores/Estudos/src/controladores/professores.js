const professores = require ('../bancodedados');

const filtrarProfessores = (req, res) =>{
    const {Stack} = req.query
    let resultado = professores;

    console.log(`cheguei no controlador de listagem do professor`)

    if(Stack){ 
        resultado = professores.filter((professor) => {
            return professor.Stack === Stack;
        })

    }
    
    res.send(resultado)
}

const encontraProfessor = (req, res) =>{
    const professoresEncontrado = professores.find((professor) => {
        return professor.id === Number(req.params.id);
    })
    res.send(professoresEncontrado)
}

module.exports = {
    filtrarProfessores,
    encontraProfessor
}