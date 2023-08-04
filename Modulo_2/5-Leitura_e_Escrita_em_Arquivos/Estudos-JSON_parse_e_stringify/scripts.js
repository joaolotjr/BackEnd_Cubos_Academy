const fs = require('fs/promises');


(async function() {
    const arquivoJson = await fs.readFile('teste.json')

    const pessoas = JSON.parse(arquivoJson)

    pessoas.push({
        nome: 'Guido',
        idade: 31
    });

    const arrayJson = JSON.stringify(pessoas)

    //console.log(arquivoJson.toString())
    console.log(arrayJson)
})();