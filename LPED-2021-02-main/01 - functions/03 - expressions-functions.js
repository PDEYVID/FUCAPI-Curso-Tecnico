

//expressao de funcao
// - Não é bem uma função. É uma constante que foi atribuido uma função
//    sem nome ( Funcao anonima)
// - Utiliza-se const, para não trocar o valor da variável. 
//    Caso soma troque de valor, a funcao se perde 
// console.log(soma(1,1))

const soma = function(num1,num2){
    return num1+num2;
}

//console.log("funcao declarativa: "+soma2(2,2))
function soma2(num1,num2){
    return num1+num2;
}
console.log( ola() )
//declaracao da funcao
function ola(){
    return "ola"
}

// HOISTING

/* O que significa hoisting?

- Alguns tradutores de livros sobre JavaScript, traduzem hoisting 
como içamento ou elevação. Pois é justamente isso o que acontece.
- Na hora de interpretar o código, se o JavaScript encontra funções literais, ele as move para o início do arquivo. 
*/ 

var i;