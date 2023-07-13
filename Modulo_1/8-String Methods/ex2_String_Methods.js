
const num = "1,257,257,258"

//jeito menor
console.log(num.replace(/,/g,'.'))

//jeito usando for
function alteraVirgulaPPonto (string){

    let SemVirgula = "";


for (i = 0; i< string.length; i++){
    if(string[i] === ","){
        SemVirgula += ".";
    }
    else{
        SemVirgula += string[i]    
    }
}

return SemVirgula
}

console.log(alteraVirgulaPPonto (num));


