const nome = 'Guido Cerqueira';

let nickname = "@" + nome.toLowerCase();
nickname = nickname.replace(/ /g,"")
nickname = nickname.slice(0,13)

console.log(nickname)



