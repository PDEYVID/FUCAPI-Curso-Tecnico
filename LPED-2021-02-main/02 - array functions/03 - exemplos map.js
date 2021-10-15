/*function somaUm(num){
    return num+1
}*/
numeros = [1,2,3,4,5];

//arrow function
const somaUm = num => num+1


numeros = numeros.map(somaUm)
console.log(numeros)

quadrado = [];
// arrow function -> eleva o nunmero ao quadrado
const aoQuadrado =  num => num**2
// map -> gerar um array com os quadrados dos numeros
quadrado  = numeros.map(aoQuadrado)
 console.log(quadrado)