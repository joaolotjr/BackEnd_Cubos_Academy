const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 30_00
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 50_00
        }
    ],
    imprimirResumo: function () {
        let itens = 0, total = 0;

    for (i = 0 ; i < this.produtos.length ; i++ ){

        itens += this.produtos[i].qtd
        total += (this.produtos[i].qtd * this.produtos[i].precoUnit);

    }

    console.log(`Cliente: ${this.nomeDoCliente}`)
    console.log(`Total de itens: ${itens}`)
    console.log(`Total a pagar: R$ ${(total/100).toFixed(2)}`)

    },

    addProduto: function (produto) {
        let temNoCarrinho = false;

        for (i = 0 ; i < this.produtos.length ; i++ ){
            if(this.produtos[i].id == produto.id){
                temNoCarrinho = true
                this.produtos[i].qtd += produto.qtd;
            }                   
        }

        if(!temNoCarrinho) {
            this.produtos.push(produto);
        }
        
    },
    imprimirDetalhes: function () {

        console.log(`Cliente: ${this.nomeDoCliente } /n`)

        for (i = 0 ; i < this.produtos.length ; i++ ){
            if(this.produtos[i].id == produto.id){
                temNoCarrinho = true
                this.produtos[i].qtd += produto.qtd;
            }                   
        }

    }


}


const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

carrinho.addProduto(novaBermuda);
carrinho.imprimirResumo();

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novoTenis);
carrinho.imprimirResumo();















/*
function imprimirResumoDoCarrinho (carrinho) {

    let itens = 0, total = 0;

    for (i = 0 ; i < carrinho.produtos.length ; i++ ){

        itens += carrinho.produtos[i].qtd
        total += (carrinho.produtos[i].qtd * carrinho.produtos[i].precoUnit);

    }

    console.log(`Cliente: ${carrinho.nomeDoCliente}`)
    console.log(`Total de itens: ${itens}`)
    console.log(`Total a pagar: R$ ${(total/100).toFixed(2)}`)

}

function addProdutoAoCarrinho (carrinho, produto){

    let temNoCarrinho = false;

    for (i = 0 ; i < carrinho.produtos.length ; i++ ){
        if(carrinho.produtos[i].id == produto.id){
            temNoCarrinho = true
            carrinho.produtos[i].qtd += produto.qtd;
        }                   
    }

    if(!temNoCarrinho) {

        carrinho.produtos.push(produto);

    }
    
}


*/

