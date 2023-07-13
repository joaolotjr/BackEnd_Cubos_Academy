const comentario = "Esse covid é muito perigoso!";


const comentarioSeparado = comentario.toUpperCase().split(" ");

if(comentarioSeparado.includes("COVID") || comentarioSeparado.includes("PANDEMIA")){
    console.log(`Comentário bloqueado por conter palavras proibidas`)
}
else{console.log(`Comentário autorizado`)}

