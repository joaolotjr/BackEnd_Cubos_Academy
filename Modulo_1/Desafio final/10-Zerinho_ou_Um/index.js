const jogadores = [
    {
      "nome": "Herman",
      "jogada": 1
    },
    {
      "nome": "Rhodes",
      "jogada": 0
    },
    {
      "nome": "Beach",
      "jogada": 0
    },
    {
      "nome": "Laurel",
      "jogada": 0
    },
    {
      "nome": "Beatrice",
      "jogada": 0
    },
    {
      "nome": "Alison",
      "jogada": 0
    },
    {
      "nome": "Saundra",
      "jogada": 0
    },
    {
      "nome": "Klein",
      "jogada": 0
    }
  ]

  // copiar apartir daqui

   let jogadores0 = "", jogadores1 = "";
   let cont0=0,cont1=0;
   

  for(i = 0; i < jogadores.length; i++){

    if(jogadores[i].jogada == 0){
      jogadores0 = jogadores[i].nome; 
      cont0++;
      //console.log(jogadores0)          
    }
    if(jogadores[i].jogada == 1){
      jogadores1 = jogadores[i].nome; 
      cont1++;
      //console.log(jogadores1)

    }
    
  }

 if(cont0 == 1){
  console.log(jogadores0)
  cont0++
 }
 else if(cont1 == 1){
  console.log(jogadores1)
 }
 else{console.log(`NINGUEM`)}