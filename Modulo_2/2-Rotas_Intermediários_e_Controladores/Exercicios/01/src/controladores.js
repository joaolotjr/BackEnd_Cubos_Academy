const somar = (req, res) =>{

    const {num1, num2} = req.query
    let resultado = (Number(num1) + Number(num2));

    console.log(`cheguei no controlador de listagem do professor`)

    if(num1 && num2){ 
        console.log(resultado)
        res.send(`${resultado}`)
    }
    else if(num1){ 
        res.send(`Esta faltando o num2, sendo num1 = ${num1}`)
    }
    else if(num2){ 
        res.send(`Esta faltando o num1, sendo num2 = ${num2}`)
    }
    else{
        res.send(`Esta faltando os numeros, num1 e num2`)
    }       
}

const subtrair = (req, res) =>{

    const {num1, num2} = req.query
    let resultado = (Number(num1) - Number(num2));

    console.log(`cheguei no controlador de listagem do professor`)

    if(num1 && num2){ 
        console.log(resultado)
        res.send(`${resultado}`)
    }
    else if(num1){ 
        res.send(`Esta faltando o num2, sendo num1 = ${num1}`)
    }
    else if(num2){ 
        res.send(`Esta faltando o num1, sendo num2 = ${num2}`)
    }
    else{
        res.send(`Esta faltando os numeros, num1 e num2`)
    }       
}

const multiplicar = (req, res) =>{

    const {num1, num2} = req.query
    let resultado = (Number(num1) * Number(num2));

    console.log(`cheguei no controlador de listagem do professor`)

    if(num1 && num2){ 
        console.log(resultado)
        res.send(`${resultado}`)
    }
    else if(num1){ 
        res.send(`Esta faltando o num2, sendo num1 = ${num1}`)
    }
    else if(num2){ 
        res.send(`Esta faltando o num1, sendo num2 = ${num2}`)
    }
    else{
        res.send(`Esta faltando os numeros, num1 e num2`)
    }       
}

const dividir = (req, res) =>{

    const {num1, num2} = req.query
    let resultado = (Number(num1) / Number(num2));

    console.log(`cheguei no controlador de listagem do professor`)

    if(num1 && num2){ 
        console.log(resultado)
        res.send(`${resultado}`)
    }
    else if(num1){ 
        res.send(`Esta faltando o num2, sendo num1 = ${num1}`)
    }
    else if(num2){ 
        res.send(`Esta faltando o num1, sendo num2 = ${num2}`)
    }
    else{
        res.send(`Esta faltando os numeros, num1 e num2`)
    }       
}



module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}