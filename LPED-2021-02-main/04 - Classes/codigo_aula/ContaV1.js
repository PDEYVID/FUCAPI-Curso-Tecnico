


function criarConta(nome,cpf,agencia,saldo){
    
    let conta = {
        /*atributos do objeto conta */

        /* atributo : parametro */
        nome: nome,
        cpf: cpf,
        agencia: agencia,
        saldo: saldo,
        /* função (método) para depositar */
        depositar: function(valor){
            this.saldo +=valor
        }
    }

    return conta;
}


/* c1 e c2 são Contas (objetos) */
let c1 = criarConta('Ricardo',111111,1001,0)
let c2 = criarConta('Alice',888888,1001,0)

/*funcao para depositar na conta */
/*
function depositar(conta,valor){
    conta.saldo += valor
}*/

/* realizar depositos */
c1.depositar(100)
c1.depositar(350)
c2.depositar(200)

console.log(c1)
console.log(c2)