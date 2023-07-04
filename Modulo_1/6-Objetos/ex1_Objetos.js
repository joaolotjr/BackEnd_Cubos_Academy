const pessoa = {
    nome: "Joao",
    idade: 27,
    altura: 1.7,
    temCNH: true,
    apelidos: ["Junior", "Ju", "Jr"]

}
let aux = "Não possui"

 if(pessoa.temCNH){ aux = "possui"}


console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}cm de altura, ${aux} CNH e tem os seguintes apelidos :`)

for(let imprimi of pessoa.apelidos){
    console.log(`- ${imprimi}`)
}