// criar o obrjeto conta e vou retorna essa conta
function criarConta(nome, cpf, agencia, saldo) {

    let conta = {
        //atributos do objeto conta

        //atributo: paramentro
        nome: nome,
        cpf: cpf,
        agencia: agencia,
        saldo: saldo,

        //função (metodo) para depositar
        depositar: function(valor){
            this.saldo +=valor
        }
    }

    return conta;
}
// c1 e c2 são contas (objetos) 
let c1 = criarConta('ricardo', 11111, 1001, 0)
let c2 = criarConta('alice', 88888, 1001, 0)

//funcao para depositar na conta
/*function depositar(conta, valor) {
    conta.saldo += valor;
}*/

// realizar depositos
c1.depositar(100);
c1.depositar(450);
c2.depositar(200);

//impressão dos dados
console.log(c1);
console.log(c2);