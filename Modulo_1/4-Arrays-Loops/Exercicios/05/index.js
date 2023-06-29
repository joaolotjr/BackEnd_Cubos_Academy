const original = [1, 4, 12, 21, 53, 88, 112];

let array = [];

for(par of original){
    if(par % 2 == 0){
        array.push(par);
    }
}

console.log(array)
