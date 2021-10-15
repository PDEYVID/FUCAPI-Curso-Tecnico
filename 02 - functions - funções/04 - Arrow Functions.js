                    // função da flexinha
const numeroAleatorio = () => {
    return Math.random()
}  

//Functions declaration

function apresentar(nome){
    return `meu nome e ${nome}`
}
// ARROW FUNCTION (1 PARAMETRO E 1 COMANDO )
// 1 PARAMENTRO -> NÃO PRECISA DE PARENTESES AO REDO DO PARAMETRO
// 2 COMANDO -> NÃO PRECISA DD RETURN E NEM DE CHAVES 
const apresentarArrow = nome => `meu nome e ${nome}`


// ARROW FUNCTION (2 PARAMENTRO E 1 COMANDO)
const soma = (num1, num2) => num1+num2;

const somaNumerosPequenos = (num1, num2) =>{
    if( num1 > 10 || num2 > 10){
        return "somente numeros menores que 10"
    }
    return num1+num2;
}

console.log (  soma(6,6))
console.log (  apresentar("Jorge Eduardo"))
console.log (  apresentar("Marcele"))
console.log (  somaNumerosPequenos(11,9))
console.log (  somaNumerosPequenos (2,2));