

//declaração da função
// tem 1 parametro, e Não tem retorno
function imprimeTexto(texto){
    console.log(texto)
}

//chamada da função
imprimeTexto("boa noite")
imprimeTexto("seja bem vindo!")
//declaração da funcao
function soma(){
    //return -> retorna o valor para a chamada (call)
    return 2+2;
}
// não esquecer de fazer a chamada da função : '()'
console.log(soma())

function saudacao(nome){
    //template string
    return `seja bem vindo ${nome}`
}

console.log( saudacao("leao") )
console.log( saudacao("carla") )
console.log( saudacao(2))