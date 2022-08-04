console.log('aula3');

const { parse } = require('path');
const { exit } = require('process');
//Import da biblioteca da entrada de dados
var readline = require('readline');

//Instancia do objeto entradaDados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Entrada de dados do valor1 
entradaDados.question('Digite o numero1: \n', function(valor1){
    //Declarando a variavel e convertendo o valor digitado pelo usuario em float
    let numero1 = parseFloat(valor1);

    //Type off e usado para conferir o tipo da variavel, ex se e boolean, inteiro, float e etc...
    console.log(typeof(numero1));

        //Entrada de dados do valor2
        entradaDados.question('Digite o valor numero 2 \n', function(valor2){
            //Declarando a variavel e convertendo para float
            let numero2 = parseFloat(valor2);
            
            //Conferindo se o resultando ira dar NaN com o isNaN, que retorna um valor TRUE se for dar NaN
            if(isNaN(numero1) || isNaN(numero2)){
                console.log('Um dos valores inseridos nao e um numero');
                //Exit para encerrar o programa
                exit();
            }

                entradaDados.question('Digite a operacao matematica que deseja: \n somar[ + ] \n subtrair[ - ] \n multiplicar[ * ] \n dividir[ / ] \n ', function(op){
                    //Declarando a variavel e vai receber o tipo de operacao matematica e convertendo o texto digitado em letra maiuscula{toUpperCase()}
                    let operacao = op.toUpperCase();
                    let resultado;
                    let check = false;

                    switch(operacao)
                    {
                        case 'SOMAR': case '+':
                            resultado = somar(numero1, numero2);
                            break;
                        case 'SUBTRAIR': case '-':
                            resultado = numero1 - numero2;
                            break;
                        case 'MULTIPLICAR': case '*':
                            resultado = numero1 * numero2;
                            break;
                        case 'DIVIDIR': case '/':
                            resultado = divisao(numero1, numero2);
                            if(numero2 == 0)
                            check = true;
                            break;
                        default:
                            console.log('Nao foi selecionado uma opcao valida');
                            check = true
                            break;
                    }

                    if(check)
                        console.log('');
                    else
                        console.log(`O resultado e: ${resultado.toFixed(2)}`);

                    
                    
            

                    

                    
                    

                })
        })

        //Funcoes da calculadora 

        //Modelo de funcao Arrow Function para somar os valores
        const somar = (valor1, valor2) => parseFloat(valor1) + parseFloat(valor2);

        //Modelo de funcao Arrow Function para subtrair os valores
        const subtrair = (valor1, valor2) => parseFloat(valor1) - parseFloat(valor2);

        //Modelo de funcao Arrow Function para multiplicar os valores
        const multiplicacao = (valor1, valor2) => parseFloat(valor1) * parseFloat(valor2);

        //Modelo de funcao Arrow Function para dividir os valores
        const divisao = (valor1, valor2) =>{
            if(valor2 == 0)
            console.log('E impossivel dividir por 0')
            else
            parseFloat(valor1) / parseFloat(valor2);
        }
        

});