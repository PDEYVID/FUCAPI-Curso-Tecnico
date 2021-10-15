
//expressão de funcao
/* - não e bem uma função; o soma e uma constante que foi atribuido uma funcao
 sem nome (funcao anonima)*/
 // - utiliza-se conts, para não trocar o valor da varial.
 // caso soma troque de valor, a funcao se perde

 const soma = function(num1, num2){
    return num1+num2;
}

console.log(soma(1,1))

console.log(  ola())

// declaração da função
function ola(){
    return "ola"
}

/*Hoisting
O que significa hoisting?

Alguns tradutores de livros sobre JavaScript, 
traduzem hoisting como içamento ou elevação. 
Pois é justamente isso o que acontece.

Na hora de interpretar o código, se o JavaScript encontra funções literais, 
ele as move para o início do arquivo. 
Então o código que escrevemos acima, é interpretado assim pelo JavaScript.*/