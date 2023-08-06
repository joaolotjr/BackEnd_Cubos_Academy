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

//---------- Date-fns - addBusinessDay
/*
const { addBusinessDays } = require("date-fns")
const result = addBusinessDays(new Date(2014, 8, 1), 10)

console.log(result);
*/

//---------- Date-fns - difference
/*
const differenceInHours = require("date-fns/differenceInHours")
let result = differenceInHours(
    new Date(2023, 6, 2, 19, 0),
    new Date(2023, 6, 2, 6, 50)
);
console.log(result);
*/

//---------- Date-fns - set
/*
const set = require('date-fns/set')

let result = set(new Date(2014, 8, 1, 1, 23, 45), { hours: 12 })
console.log(result);
*/

//---------- Date-fns - isSame
/*
const isSameDay = require('date-fns/isSameDay');

let result = isSameDay(new Date(2014, 8, 1, 1, 23, 45), new Date(2014, 8, 1, 15, 23, 45))
console.log(result)
*/


















