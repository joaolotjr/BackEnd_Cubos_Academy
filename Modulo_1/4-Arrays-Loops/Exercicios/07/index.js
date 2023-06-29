const nomes = ["Ana", "Joana", "Carlos", "amanda", "Lucas","Aline"];

let TemA = [];

for(i=0; i< nomes.length; i++){
    for(encontraA of nomes[i]){        
        if(encontraA =="A" || encontraA =="a"){
           TemA.push(nomes[i]);
           break;

        }
        break;
    }
}

console.log(TemA)