
// declaração da função
// tem 1 parametro, e não tem retorno

function imprimeTexto(texto){
    console.log(texto)
}

// chamada da função
imprimeTexto("boa noite")
imprimeTexto("seja bem vindo!")

// 1-declaração da função
function soma(){
    // 2-return -> retorna o valor para a chamada (call)
   return 2+2
}

// 3-não esquece de fazer a chamada da função: '()'
console.log(soma())
                    // 4-parametro da função (nome){
function saudacao(nome){
    // 4.1-template string
    return `seja bem vindo ${nome}` // essa parada conecta com a function usando o return
}

// 5-impressão de dados
console.log(saudacao("link"))
console.log(saudacao("zelda"))
console.log(saudacao(2))