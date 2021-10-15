
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