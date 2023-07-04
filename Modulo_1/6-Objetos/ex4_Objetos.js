const Produtos = [ {
    nome: "caneca",
    preco: 27_00,
    quantidade: 2
},
{
    nome: "blusa",
    preco: 20_00,
    quantidade: 1
},
{
    nome: "alianca",
    preco: 20_000_00,
    quantidade: 2
}]


const cliente = {
    Nome: "joao",
    Idade: 27,
    Produtos
}

let total = 0;

for(i = 0; i < Produtos.length; i++){
    total += (Produtos[i].preco * Produtos[i].quantidade);
}

console.log(` Ola ${cliente.Nome}, o total da compra deu ${(total/100).toFixed(2)} reais `)

