const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

const adultos = [], jovens = [];

for(i = 0; i < usuarios.length; i){
    if(usuarios[i].idade > 17){
       adultos.push(usuarios.shift()) 
    }
    else if(usuarios[i].idade < 18){
        jovens.push(usuarios.shift())
    }
}

console.log(adultos)
console.log(jovens)

