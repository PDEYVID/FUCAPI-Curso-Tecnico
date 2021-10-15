

//arrow function (função de seta)
/*
    - Veio com ES6 (EcmaScript 2015)
    - Deixa o código menor. funcoes Podem não ter chaves, parenteses, return...
    - Utilizamos a const
    - Existem várias formas para reproduzir as arrows functions
*/


function apresentar(nome) {
    return `meu nome é ${nome}`
}

//arrow function( 1 parâmetro e 1 comando)
// - 1 parametro -> Nao precisa de parenteses ao redor do parametro
// - 1 comando -> Não precisa dd return e nem de chaves
const apresentarArrow = nome =>  `meu nome é ${nome}`


//arrow function (2 parametros e 1 comando)
const soma = (num1,num2) => num1 + num2;


const somaNumerosPequenos = (num1, num2) => {
    if( num1 > 10 || num2 > 10){
        return "somente numeros menores que 10";
    }

    return num1+num2;
}

console.log( soma(6,6))
console.log( apresentar("jorge eduardo"))
console.log(  apresentar("marcelle") )
console.log(  somaNumerosPequenos(11,9))
console.log( somaNumerosPequenos( 2, 2))


