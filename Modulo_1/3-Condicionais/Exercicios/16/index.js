//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 16;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = true;

if(idadeDoAluno >=18 || possuiResponsavel) console.log(`Rematrícula realizada com sucesso`);

else if(idadeDoAluno < 18) console.log(`Não é possível fazer a rematrícula`);