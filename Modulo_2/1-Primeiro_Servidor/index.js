const { uniq } = require('lodash');
const {arrayLetras, arrayNumeros} = require('./array')

console.log(arrayLetras);
console.log(arrayNumeros)

const arrayNumeroUnico = uniq(arrayNumeros)
const arrayLetrasUnica = uniq(arrayLetras)

console.log(arrayNumeroUnico);
console.log(arrayLetrasUnica);
/*
const arrayUnico = uniq(array);



console.log(arrayUnico);

*/