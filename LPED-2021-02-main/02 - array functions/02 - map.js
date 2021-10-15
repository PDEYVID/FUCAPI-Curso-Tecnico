/* 

Crie um array numero=[1,2,3] e depois construa um array
que tenha o dobro de cada elemento.

*/
 /* Exemplo sem Array.map() */
let numeros  = [1,2,3]

let dobro = [];

for( let i=0  ; i < numeros.length  ; i++  ){
    dobro.push(  numeros[i] *2  )
}

//console.log(numeros)
console.log(dobro)

dobro = []
numeros.push(4)
// map() -> retorna um array
dobro = numeros.map(   function(num) {
    return num*2
} )
console.log(dobro)







console.log(numeros)