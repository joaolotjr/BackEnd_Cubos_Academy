//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 130_00;

let valorFinal = 0;

if (tipoDePagamento === "credito") {

    valorFinal = valorDoProduto - (valorDoProduto * 0.05)
}

else if (tipoDePagamento === "cheque") {

    valorFinal = valorDoProduto - (valorDoProduto * 0.03)
}

else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {

    valorFinal = valorDoProduto - (valorDoProduto * 0.1)
}

console.log(`Valor a ser pago: R$ ${(valorFinal/100).toFixed(2)}`)

