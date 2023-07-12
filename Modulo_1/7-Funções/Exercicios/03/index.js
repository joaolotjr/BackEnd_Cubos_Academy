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
        
    console.log(`Cliente: ${this.nomeDoCliente}`)
    console.log(`Total de itens: ${this.calcularTotalDeItens ()}`)
    console.log(`Total a pagar: R$ ${(this.calcularTotalAPagar () /100).toFixed(2)}`)

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

        console.log(`Cliente: ${this.nomeDoCliente }`)
        console.log(``)

        for (i = 0 ; i < this.produtos.length ; i++ ){
            console.log(`Item ${this.produtos[i].id} - ${this.produtos[i].nome} - ${this.produtos[i].qtd} und - R$ ${((this.produtos[i].precoUnit * this.produtos[i].qtd)/100).toFixed(2)}`)                
        }

        console.log(``)
        console.log(`Total de itens: ${this.calcularTotalDeItens ()} itens`)
        console.log(`Total a pagar: ${(this.calcularTotalAPagar() / 100).toFixed(2) }`)

    }, 
    calcularTotalDeItens: function (){

        let itens = 0;

        for (i = 0 ; i < this.produtos.length ; i++ ){

            itens += this.produtos[i].qtd
            
        }
        return itens;

    },
    calcularTotalAPagar: function (){

        let total = 0;

        for (i = 0 ; i < this.produtos.length ; i++ ){

            total += (this.produtos[i].qtd * this.produtos[i].precoUnit);

        }
        return total;

    },
    calcularDesconto: function(){
        let desconto = 0, des1 = Number.POSITIVE_INFINITY, des2 = 0;

        if(this.calcularTotalDeItens() > 4 ){
            for(i = 0 ; i < this.produtos.length - 1 ; i++ ){
                if(this.produtos[i].precoUnit <= this.produtos[i + 1].precoUnit && des1 > this.produtos[i].precoUnit){
                    des1 = this.produtos[i].precoUnit
                }
                else if (this.produtos[i].precoUnit > this.produtos[i + 1].precoUnit && des1 > this.produtos[i + 1].precoUnit){
                    des1 = this.produtos[i + 1].precoUnit;
                }
                else if(this.produtos.length == 1 ){
                    des1 = this.produtos[i].precoUnit
                }
            }
        }

        if(this.calcularTotalAPagar() > 100_00 ){
            des2 = this.calcularTotalAPagar() * 0.1;
        }

        if(des1 >= des2){
            desconto = des1;
        }
        else if( des1 < des2 ){
            desconto = des2;
        }

        return desconto;
    }


}
/*
carrinho.imprimirDetalhes();

carrinho.imprimirResumo()
*/






const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

carrinho.addProduto(novaBermuda);
carrinho.imprimirResumo();

console.log(`desconto de ${(carrinho.calcularDesconto()/100).toFixed(2)}`);
console.log(``)
const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novoTenis);
carrinho.imprimirResumo();


console.log(`desconto de ${(carrinho.calcularDesconto()/100).toFixed(2)}`);












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

