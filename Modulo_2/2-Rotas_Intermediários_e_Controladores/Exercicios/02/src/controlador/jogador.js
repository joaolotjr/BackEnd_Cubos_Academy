const jogadores = require("../bancodedados");

let cont = 0
const jogador = (req, res) => {

    if(cont >= jogadores.length){
        cont = 0;
        res.send(`É a vez de ${jogadores[cont]} jogar!`)
        cont++;
    }
    else{
        console.log(`Server on`)
        res.send(`É a vez de ${jogadores[cont]} jogar!`)
        cont++;
    }
   
}

const removerjogador = (req, res) =>{
    const {indice} = req.query

    if(indice >= jogadores.length){
        return res.send(`Não existe jogador no índice informado (${indice}) para ser removido.`)        
    }
    else{
        jogadores.splice(indice, 1)
        res.send(jogadores)
    }   
}

const adiconarjogador = (req, res) =>{
    const {nome, indice} = req.query
    let nomeNovo = nome[0].toUpperCase() + nome.substr(1).toLowerCase();

    if(nome && indice){
        if(indice >= jogadores.length){
           return res.send(`O índice informado (${indice}) não existe no array. Novo jogador não foi adicionado.`)
        }
        else{
            //console.log(jogadores)
            jogadores.splice(indice, 0, nomeNovo);
            return res.send(jogadores)
        }        
    }
    else if(nome){
        jogadores.push(nomeNovo)
        //console.log(jogadores)
        return res.send(jogadores)
    }      
}




module.exports = {jogador, removerjogador, adiconarjogador};