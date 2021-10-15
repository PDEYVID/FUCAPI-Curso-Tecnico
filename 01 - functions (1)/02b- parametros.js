/* dois tipo de passagem de paramentros:
 - passagem de valor
 - passagem de referencia( endereço de memoria)
*/

function square(x) {
    x = x * x; // alterando apenas na função
    return x;
}

let y = 3;
let result = square(y); // passagem de valor 

console.log(y)
console.log(result)


// passagem de parametro de objetos
let computador = {
    ligado: false
}

// declaração da função
function ligar(maquina) {
    maquina = {
        ligado: true // não altera o valor do computador 
    }
    console.log('Ligar():' + '\n' + 'maquina.ligado = ' + maquina.ligado)
}

ligar(computador)

console.log('computador: ' + computador.ligado)