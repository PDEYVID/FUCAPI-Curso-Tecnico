/* 

Criar uma funcao imprimirTabuada(n) onde n é um numero, e a 
saída imprime no console a tabuada de n, de 1 até 10

- Utilize a funcao imprimirTabuada, para imprimir as tabuadas do 1 até 
o 10 0; A cada numero insira uma linha de seperação '----------'

*/

function imprimirTabuada(n){
    let i;
    for( i = 1 ; i <= 10 ; i++){
        let result = n*i;
        console.log(n +" x " + i + " = " + result)
    }
}



for(let i = 1 ; i <=100 ; i++){
    imprimirTabuada(i)
    console.log('-----------')
}



for(let i = 1 ; i <=100 ; i ++){
    let j;
    for( j = 1 ; j <= 10 ; j++){
        let result = i*j;
        console.log(i +" x " + j + " = " + result)
    }
    console.log('--------------')
}

