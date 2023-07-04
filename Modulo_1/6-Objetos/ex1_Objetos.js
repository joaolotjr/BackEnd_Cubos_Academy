const pessoa = {
    nome: "Joao",
    idade: 27,
    altura: 1.7,
    temCNH: true,
    apelidos: ["Junior", "Ju", "Jr"]

}
let aux = ( pessoa.temCNH ? "possui" : "não possui"); // ternário

 //let aux = "";
 //if(pessoa.temCNH){ aux = "possui"}
 //else { aux = "não possui"}


console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}cm de altura, ${aux} CNH e tem os seguintes apelidos :`)

for(let imprimi of pessoa.apelidos){
    console.log(`- ${imprimi}`)
}