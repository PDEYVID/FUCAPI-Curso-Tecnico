

/* 
dois tipos de passagem de parametros:
    - passagem de valor
    - passagem de referencia( endereço de memoria)
*/

function square(x){
    x = x*x; // alterando apenas na funcao
    return x;
}

let y = 3;
let result = square(y); // passagem de valor
console.log(y)
console.log(result)

//Passagem de parametro de objetos

let computador = {
    ligado: false
}

function ligar( maquina){
    maquina = {
        ligado:true // nao altera o valor do computador
    }
    console.log('Ligar(): ' + 'maquina.ligado =' + maquina.ligado)
}
ligar(computador)
console.log('computador:'+computador.ligado)





