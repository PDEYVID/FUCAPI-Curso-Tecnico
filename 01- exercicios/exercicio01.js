
/* criar uma função imprimirTabuada(n) onde n e uma numero, e a saida impime
no console a tabuada de n, de 1 ate 10

ultilize a funcao imprimirTabuada, para imprimir sa tabuadas de 1 ate 20*/

function imprimirTabuada(n) {
    let i;
    for (i = 1; i <= 10; i++) {
        let result = n * i;
        console.log(n + " x " + i + "=" + result)
    }
}
console.log(imprimirTabuada(10))



function imprimirTabuada(n1) {
    let i1;
    for (i1 = 1; i1 <= 20; i1++) {
        let result = n1 * i1;
        console.log(n1 + " x " + i1 + "=" + result)
    }
}
console.log(imprimirTabuada(20))