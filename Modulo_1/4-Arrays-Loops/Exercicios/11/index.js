const original = [5, 7, 10, 13, 17, 21, 26, 34, 100, 118, 245];

let array = [];

for(num of original){
    if((num >=10 && num <=20) || num > 100 ){

        array.push(num)
    }
}

console.log(array)

