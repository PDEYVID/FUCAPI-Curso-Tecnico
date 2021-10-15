/*function somaUm(num) {
    return num + 1
}*/
numeros = [1, 2, 3, 4, 5]; // vetor com array 
// arrow function 
const somaUm = num => num + 1
numeros = numeros.map(somaUm)
console.log(numeros)


// arrow function -> eleva o numero ao quadrado
quadrado = [];
for (let i = 0; i < numeros.length; i++) {
    quadrado.push(numeros[i] * 2)

    console.log(numeros)
}
console.log(quadrado)


// map -> gerar um array com os quadrados dos numeros
quadrado = [];
numeros.push(5)
quadrado = numeros.map(function (num) {
    return num * 2

})
console.log(quadrado)




