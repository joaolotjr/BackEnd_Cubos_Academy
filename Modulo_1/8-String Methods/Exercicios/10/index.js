const nomeArquivo = 'Foto da Familia.png';

let indexponto = nomeArquivo.lastIndexOf(".");

if(nomeArquivo.includes('jpg', indexponto)  || nomeArquivo.includes('jpeg', indexponto) || nomeArquivo.includes('gif', indexponto) || nomeArquivo.includes('png', indexponto)){
    console.log(`Arquivo válido`)

}
else{
    console.log(`Arquivo inválido`)
}



