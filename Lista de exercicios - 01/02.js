/*Modifique a função testeFunc(x,n), onde n é a quantidade de vezes que o
número vai ser mostrado. Ex:
a. testeFunc(“ola”, 2) // chamada da função
b. Saída:
i. ola
ii. ola*/


function testeFunc(x, n) {
    let d = ""
    for (let i = 0; i < n; i++) {

        d += x + '\n'
    }
    return d

}

console.log(testeFunc("ola", 2))



    

