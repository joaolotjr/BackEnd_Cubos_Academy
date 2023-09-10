const pool = require('../conexao')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const senhaJwt = require('./senhaJwt')

const cadastrarUsuario = async (req, res) => {

    const { nome, email, senha } = req.body

    try {
        const senhaCriptografada = await bcrypt.hash(senha, 10)


        const novoUsuario = await pool.query(
            'insert into usuarios (nome, email, senha) values ($1, $2, $3) returning *',
            [nome, email, senhaCriptografada]
        )
        
        return res.status(201).json(novoUsuario.rows[0])
        
    } catch (error) {
        return res.status(500).json({mensagem: 'Erro interno do Servidor'})
        
    }

}

const login = async (req, res) =>{
    const { email, senha} = req.body

    try {
        const usuario = await pool.query('select * from usuarios where email = $1', [email])
        if(usuario.rowCount < 1){
            return res.status(404).json({mensagem: 'usuario não foi encontrado'})
        }

        const senhaValida = await bcrypt.compare(senha, usuario.rows[0].senha)
        if(!senhaValida){
            return res.status(400).json({mensagem: 'Email ou senha invalida(s)'})
        }

        const token = jwt.sign({id: usuario.rows[0].id}, senhaJwt, {expiresIn: '8h' })

        const { senha: _, ...usuarioLogado } = usuario.rows[0]

        return res.json({usuario: usuarioLogado, token})

        //return res.json('Usuario Autenticado!')

        
    } catch (error) {
        return res.status(500).json({mensagem: 'Erro interno do Servidor'})        
    }

}

const obterPerfil = async (req, res) => {

    return res.json(req.usuario)

}



module.exports = {
    cadastrarUsuario,
    login,
    obterPerfil
}