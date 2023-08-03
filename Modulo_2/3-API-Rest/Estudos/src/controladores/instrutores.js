const {instrutores} = require('../bancodedados')


const listarInstrutores = (req, res) => {
    return res.status(200).json(instrutores)


}

module.exports = {
    listarInstrutores
}