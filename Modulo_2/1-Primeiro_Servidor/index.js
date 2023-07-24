const { uniq } = require('lodash');

const array = [1, 2, 4, 4, 6, 7, 1];

const arrayUnico = uniq(array);

console.log(arrayUnico);
