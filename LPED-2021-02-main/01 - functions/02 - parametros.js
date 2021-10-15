
let pessoas = [
    { nome: 'Joao', idade: 30, curso: 'Informatica'}, 
    { nome: 'Maria', idade: 20 , idade: 25,curso: 'Mecatronica'},
    { nome: 'Gilberto', idade:22, curso: 'Mecanica'}
];

transformaNegativo(1) // retorna -1
transformaNegativo(-5) // retorna -5
transformaNegativo(1) // retorna -1
transformaNegativo(0.12) // retorna -0.12
transformaNegativo("string") // retorna undefined



media(6,8,7,'A') //média aritmetica: 7
media(5,6,8,'P') // média ponderada: 6.6666






function soma(numero1, numero2){
    return numero1 + numero2
}
// NaN -> num1 e num2 são undefined(indefinidos)
console.log(  soma()  );
// NaN -> num2 é indefinido
console.log( soma(2));
console.log( soma (2,3) );




//ORDEM DOS PARAMETROS É IMPORTANTE -> ASSINATURA DA FUNCAO
function nomeIdade(nome,idade){
    return `meu nome é ${nome} e minha idade é ${idade}`
}


console.log( nomeIdade("karen",20)  )
console.log( nomeIdade(30,"fabio") )

// numero2 -> tem valor padrão 1. 
function multiplica(numero1, numero2=1){
    return numero1 * numero2;
}
//Neste exemplo estamos chamando funcoes dentro de outra chamada
//                             //9          //5
let result = multiplica(  soma(4,5) , soma(3,2) )

console.log(result)

console.log(multiplica(  soma(4,5)   ))

/* boa prática -> faça funcoes com poucos argumentos
                -> caso sua função tenha muitos argumentos,
                é provável que dê para dividir a função em várias
                funções


fazer exercicio 02
*/