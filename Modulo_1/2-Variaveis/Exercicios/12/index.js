let M = 90_000, C = 60_000, n = 24;


let i = ((M / C ) ** (1 / n)) - 1;

let i100 = i * 100;

//let i = (((M ** (1 / n))) / C) - 1;  

console.log(`O seu financiamento de ${C} reais teve uma taxa de juros de ${i100.toFixed(3)}%, pois após ${n} meses você teve que pagar ${M} reais.`);
