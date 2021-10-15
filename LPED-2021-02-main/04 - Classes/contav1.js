
function criarConta(nome,cpf,agencia,saldo){
    /*criando objeto conta */
    let conta = {
        /* atributo : parametro */ 
        nome: nome,
        cpf: cpf,
        agencia: agencia,
        saldo: saldo,
        /* adicionando a função (método) depositar */
        depositar: function(valor){
            this.saldo +=valor
        }
    }
    return conta;
}



/* c1 e c2 são objetos */
c1 = criarConta('Ricardo',1111111,1001,0)
c2 = criarConta('Alice',88888,1001,0)

/*
function depositar(conta,valor){
    conta.saldo += valor
}*/

/* realizando deposito */
c1.depositar(100)
c2.depositar(200)

console.log(c1)
console.log(c2)




