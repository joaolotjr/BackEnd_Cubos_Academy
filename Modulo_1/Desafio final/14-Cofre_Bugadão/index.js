const input = 'cubos\newvelrabsocaeln';

// copiar apartir daqui

let dados = input.trim().split("\n");

//console.log(dados)

const senha = dados[0].split('');
let digitado = dados[1].split('');
let cont = 0;
//console.log(digitado)
   

    for(i = 0; i < senha.length; i++){

        let verifica = digitado.indexOf(senha[i])
        if(verifica == -1){
            return console.log(`NAO`)
        }
        else{
            digitado =  digitado.slice(verifica +1);
        }

    }
    console.log(`SIM`)



    /*

    dentro do for da senha{
        
        const verifica = digitado.indexOf(senha[i])

            if( verifica == -1){
                deu ruim
                return console.log(`NAO`)
                //breck
            }
            else{
            digitado =  digitado.slice(verifica +1);
            
            }
    }
        //fora do for{

        deu bom
        console.log(`SIM`)
        }

        DiCA:
        verificar o não
         
   */
