const bancodedados = {
    identificadorInstrutor: 3,
    identificadorAula: 2,
    instrutores: [
        {
            id: 1,
            nome: 'Guido',
            email:'guido@gmail.com',
            status: true
        },
        {
            id: 2,
            nome: 'Dani',
            email:'dani@gmail.com',
            status: true
        },
    ],
    aulas: [
        {
            id: 1,
            id_Istrutor: 1,
            titulo: "frontEnd",
            descricao: "Ensinado frontEnd !!"
        },
        {
            id: 2,
            id_Istrutor: 1,
            titulo: "frontEnd",
            descricao: "Ensinado frontEnd !!"
        }
    ]
}

module.exports = bancodedados;