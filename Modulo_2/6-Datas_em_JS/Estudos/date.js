// ------------- Data momento atual
//const agora = new Date ();
//console.log(agora)

//------------- Data passando ano, mes dia
/*
const agora = new Date (2020, 0, 15);

console.log(agora)
*/

// -------------  ex1 - copa 2002, 30 junho 8h

//const dataFinalCopa2002 = new Date (2002, 5, 30, 8);
// +dataFinalCopa2002 ou usarr dataFinalCopa2002.getTime() são a msm coisa

//------------ timestamp
/*
const finalMaisUmaHora = +dataFinalCopa2002 + (1000*60*60); // +dataFinalCopa2002 ou usarr dataFinalCopa2002.getTime() são a msm coisa
const maisUmaHoraDate = new Date(finalMaisUmaHora)
console.log(dataFinalCopa2002, maisUmaHoraDate)
*/

//------------ ex2 data completa dos gols da copa
/*
const primeiroGol = +dataFinalCopa2002 + (1000*82*60);
const segundoGol = +dataFinalCopa2002 + (1000*98*60)

const primeiroGolData = new Date(primeiroGol);
const segundoGolData = new Date(segundoGol);

console.log(primeiroGolData, segundoGolData)
*/
//------- comparando datas, dica usar timestamp
/*
const ontem = new Date("2023-06-30T12:22:00.000Z")
const ontem2 = new Date("2023-06-30T12:22:00.000Z")

console.log(+ontem === +ontem2)
*/
//------------Getters e Setters para datas

const hoje = new Date();
console.log(hoje.getDay())

