//----------Date-fns - format
/*
const {format} = require('date-fns');

const date = new Date(2017, 3, 12);

console.log(format(date, "dd/MMM/yyyy"))
*/

//----------Date-fns - parse
/*
const result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
*/

//----------Date-fns - add
/*
const { add } = require('date-fns');
let date = new Date(2018, 2, 13, 12)

console.log(date);
/*console.log(add(date,{
    seconds: 2,
    days: 1,
    years: 1
    }));
*/
date = add(date,{
    seconds: 2,
    days: 1,
    years: 1
    });
console.log(date);
/*

//----------Date-fns - addBusinessDay



















