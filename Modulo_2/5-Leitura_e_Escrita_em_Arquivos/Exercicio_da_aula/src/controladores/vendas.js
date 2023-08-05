const produtos = require('../bancodedados')

const fs = require('fs/promises')

const listagemProdutos = async (req, res) => {
    return res.status(200).json(produtos)
}

const vendas = async (req, res) => {
    const { produto_id, quantidade } = req.body

    const produtoEncontrado = produtos.find((produto) => {
        return produto.id === Number(produto_id)
    });

    if(!produtoEncontrado){
        return res.status(404).json('Produto não foi encontrado')
    }

    try{
        const vendas = await fs.readFile('./src/vendas.json')

        const parseVendas = JSON.parse(vendas)
        
        parseVendas.vendas.push({
            produto: produtoEncontrado,
            quantidade

        });
        //console.log(parseVendas)
        await fs.writeFile('./src/vendas.json', JSON.stringify(parseVendas))

        return res.status(201).json('vendas registradas com sucesso')

    }catch (erro) {
        return res.status(500).json('Erro no Servidor')
    }

}

module.exports = {
    listagemProdutos, 
    vendas
}