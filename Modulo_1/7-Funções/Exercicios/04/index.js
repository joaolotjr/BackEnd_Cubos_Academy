const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    
    depositar: function (valorDeposito){//deposito em centavos

        this.saldo += valorDeposito;
        const novoDeposito = {
            tipo: "Depósito",
            valor: valorDeposito, //aqui será o valor informado no argumento do método depositar
        }
        this.historicos.push(novoDeposito)
        console.log(`Deposito de R$${(valorDeposito/100).toFixed(2)} realizado para o cliente: ${this.nome}`)
    },
    sacar: function (valorSaque) {
        if(valorSaque > this.saldo ){
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`)
        }
        else{
            this.saldo -= valorSaque;
            const novoSaque = {
                tipo: "Saque",
                valor: valorSaque, //aqui será o valor informado no argumento do método sacar
            }
            this.historicos.push(novoSaque)
            console.log(`Saque de R$${(valorSaque/100).toFixed(2)} realizado para o cliente: ${this.nome}`)            
        }
    },
    extrato: function (){
        console.log(`Extrato de ${this.nome} - Saldo: R$${(this.saldo/100).toFixed(2)}`)
        console.log(`Histórico:`)

        for(i = 0; i < this.historicos.length; i++){
            console.log(`${this.historicos[i].tipo} de $${(this.historicos[i].valor/100).toFixed(2)}`)
        }        
    }
}
/*
contaBancaria.depositar(30); //deposito em centavos
contaBancaria.sacar(25);
console.log(contaBancaria.historicos)
console.log(contaBancaria)
console.log(contaBancaria.extrato())

*/

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());