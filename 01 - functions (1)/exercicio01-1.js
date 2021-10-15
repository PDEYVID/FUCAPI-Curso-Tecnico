
function imprimirTabuada(n) {
    let i;
    for (i = 1; i <= 10; i++) {
        let result = n * i;
        console.log(n + " x " + i + "=" + result)
    }
}

for (let i = 1; i <= 100; i++) {
    imprimirTabuada(i)
    console.log('-------------')
}

console.log(imprimirTabuada(10))





