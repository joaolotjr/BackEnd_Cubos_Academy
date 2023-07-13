function imprimirData (dia, mes, ano){

console.log(`${String(dia).padStart(2, "0")}/${`${mes}`.padStart(2, "0")}/${String(ano).padStart(4, "19")}`)

}

imprimirData(1,3,2022)
