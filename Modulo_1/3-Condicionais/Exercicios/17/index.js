//valor do produto comprado.
const valorDoProduto = 1000_00;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300_00;

// OBS: Melhorar esse anunciado pq ta bem ruim, misturando centavos com real
// Esse valorPago, foi feito em pagamento a vista pela fernanda? Ou ja são as parcelas pagas?
// São coisas que mudam a lógica toda.

//Com isso fiz a quantidade de parcelas faltante, contando que ela paga a mesma parcela desde o começo.

 let valorParcelas = valorDoProduto / quantidadeDoParcelamento;

 let quantidadeDeParcelasPagas = valorPago / valorParcelas;

 let restaParcela = quantidadeDoParcelamento - quantidadeDeParcelasPagas 

 console.log(`Restam ${restaParcela} parcelas de R$${valorParcelas/100}`)











