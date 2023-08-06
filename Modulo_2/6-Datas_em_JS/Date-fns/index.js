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

//----------  Date-fns - isAfter - isBefore
/*
const isAfter = require('date-fns/isAfter');

const result1 = isAfter(new Date(2014, 8, 1, 1, 23, 45), new Date(2013, 8, 1, 1, 23, 45))
console.log(result1);
*/

//----------  Date-fns - startOf e endOf
/*
const startOfHours = require('date-fns/startOfHour')


const result1 = startOfHours(new Date(2014, 8, 1, 1, 23, 45))

console.log(result1);
*/

//----------  Atenção ao converter para outras Timezones
const { zonedTimeToUtc, utcToZonedTime, format } = require('date-fns-tz')

// Set the date to "2018-09-01T16:01:36.386Z"
const utcDate = zonedTimeToUtc('2018-09-01 18:01:36.386', 'Europe/Berlin')

// Obtain a Date instance that will render the equivalent Berlin time for the UTC date
const date = new Date('2018-09-01T16:01:36.386Z')
const timeZone = 'Europe/Berlin'
const zonedDate = utcToZonedTime(date, timeZone)
// zonedDate could be used to initialize a date picker or display the formatted local date/time

// Set the output to "1.9.2018 18:01:36.386 GMT+02:00 (CEST)"
const pattern = 'd.M.yyyy HH:mm:ss.SSS \'GMT\' XXX (z)'
const output = format(zonedDate, pattern, { timeZone: 'Europe/Berlin' })


const date2 = new Date(2021, 0, 1, 13);
console.log(date)
console.log(+date)

console.log(date.getUTCHours())
















