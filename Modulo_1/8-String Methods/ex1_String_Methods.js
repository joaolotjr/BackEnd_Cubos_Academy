const string = "97.50";



console.log(string.replace('.',','))



for(i = 0; i < string.length; i++){

    if(string[i] === '.'){
        string[i] += ',';
    }    
}

console.log(string)
