const carros = require("../bancodedados");


const filtrarCarros = (req, res) =>{
    const {marca, cor} = req.query
    let resultado = carros;

    console.log(`cheguei no controlador de listagem do professor`)


    if(marca && cor){ 
        resultado = carros.filter((carros) => {
            return (carros.marca === marca && carros.cor === cor);
        })
    }

    else if(marca){ 
        resultado = carros.filter((carros) => {
            return carros.marca === marca;
        })
    }
    else if (cor){ 
        resultado = carros.filter((carros) => {
            return carros.cor === cor;
        })
    }
    
    res.send(resultado)
}

const encontraCarros = (req, res) =>{
    console.log(`Rota para encontrar um Carro`)
    const CarrosEncontrado = carros.find((carros) => {
        return (carros.id === Number(req.params.id));
    })
    res.send(CarrosEncontrado)
}

module.exports = {
    filtrarCarros,
    encontraCarros
}






