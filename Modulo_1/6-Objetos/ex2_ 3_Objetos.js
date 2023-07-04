const Prod1 = {
    nome: "caneca",
    preco: 27,
    quantidade: 2
}
const Prod2 = {
    nome: "blusa",
    preco: 20,
    quantidade: 1
}
const Prod3 = {
    nome: "alianca",
    preco: 20_000,
    quantidade: 2
}


const cliente = {
    Nome: "joao",
    Idade: 27,
    Produtos: [Prod1, Prod2, Prod3]
}

console.log(cliente.Nome)
console.log(cliente.Idade)

cliente.Idade = 30;

console.log(cliente.Idade)

console.log(cliente.Produtos[0].nome)

console.log(cliente.Produtos.preco)
