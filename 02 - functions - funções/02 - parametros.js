
function soma(numero1, numero2){
    return numero1+numero2
}
//NaN -> num1 e num2  são undefined(indefinidos)
console.log( soma() );
// NaN -> num2 e indefinido
console.log( soma(2));
console.log( soma (2,3));
console.log( soma(2,"a")) //2a


//ORDEM DOS PARAMETROS E IMPORTANTE -> ASSINATURA DA FUNÇÃO

function nomeIdade(nome, idade){
    return `meu nome e ${nome} e minha idade e ${idade}`
}

console.log( nomeIdade("karen",20) )
console.log( nomeIdade(30,"fabio") )

// numero -> tem um valor padrão 1.
function multiplica(numero1, numero2=1) {
        return  numero1 * numero2; 
}
//neste exemplo estamos chamando funcoes dentro de outra chamada
//                                 9            5
let result = multiplica(     soma(4,5) , soma(3,2))

console.log(result)

console.log(multiplica ( soma(4,5) ));

/* boa pratica -> faça funções com poucos argumentos 
                -> caso sua função tenha muito argumentos*/
