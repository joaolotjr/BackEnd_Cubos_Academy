const {getCityFromZipcode, getStateFromZipcode} = require('utils-playground');
/*
const cidade = getCityFromZipcode('41256250')

cidade.then((cidade) => {
    console.log(cidade)
})

cidade.catch((erro)=>{
    console.log(erro)
})
*/
//------------------------------------------------
/*
const cidade = getCityFromZipcode('41256250').then((cidade) => {
    console.log(cidade)
    getStateFromZipcode('41256250').then((uf) => {
        console.log(uf)
        getStateFromZipcode('41256250').then((uf) => {
            console.log(uf)
            getStateFromZipcode('41256250').then((uf) => {
                console.log(uf)
            })
        })
    })
}).catch((erro)=>{
    console.log(erro)
})


getStateFromZipcode('41256250').then((uf) => {
    console.log(uf)
})
*/

//funcao anonima e uso do async/await
/*
(async function (){

    const cidade = await getCityFromZipcode('41256250');
    console.log(cidade)
    const estado = await getStateFromZipcode('41256250')
    console.log(estado)
})()
*/

async function teste(a){
    return '123'
}

const teste = async () =>{
    
}

console.log(teste())




