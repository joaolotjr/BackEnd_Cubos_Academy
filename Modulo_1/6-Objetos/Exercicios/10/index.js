const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] }
const roberto = { nome: "Roberto", carrinho: [] }

const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }


function addProduto (cliente, produto, quantidade)
{
    cliente.carrinho.push({produto, quantidade})
}

addProduto(jose, tv, 1);
addProduto(jose, caboUsb, 2);
addProduto(jose, webcam, 1);

addProduto(carlos, notebook, 2);

addProduto(patricia, teclado, 1);
addProduto(patricia, caboUsb, 2);
addProduto(patricia, carregador, 1);
addProduto(patricia, mouse, 1);
addProduto(patricia, monitor, 1);

addProduto(renato, webcam, 5);

addProduto(roberto, webcam, 1);
addProduto(roberto, caboUsb, 2);
addProduto(roberto, monitor, 1);

console.dir(jose, {depth: null});
console.dir(carlos, {depth: null});
console.dir(patricia, {depth: null});
console.dir(renato, {depth: null});
console.dir(roberto, {depth: null});



