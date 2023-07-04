const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

for(i = 0; i < usuarios.length; i++){
    let tenhoPet = "";
    if(usuarios[i].pets.length === 0){
        tenhoPet = "não tenho pets. :("
    }
    
    else if(usuarios[i].pets.length == 0 ){
        tenhoPet =  "tenho 1 pet"
    } 
    
    else if(usuarios[i].pets.length > 0 ){
        tenhoPet = `tenho ${usuarios[i].pets.length } pets`
    }
    

    console.log(`Sou ${usuarios[i].nome} e ${tenhoPet}`)

}

//console.log(usuarios[0].pets.length)