/*Classe conta*/
class Conta {
    /*metodo executa quando cria um objeto*/
    constructor(nome, cpf, agencia, saldo) {
        /*inicializado atributos*/
        this.nome = nome;
        this.cpf = cpf;
        this.agencia = agencia;
        this.saldo = saldo;
    }
    /*retorna uma string, com as info. do obj*/
    toString() {
        return `NOME: ${this.nome}\n` +
            `CPF:${this.cpf}\n` +
            `AGENCIA: ${this.agencia}\n` +
            `SALDO: ${this.saldo}\n`
    }
    //metodo para fazer um saque de um valor
    saque(valor) {
        if (valor > this.saldo) {
            console.log("não tem saldo suficiente!")
            return;
        }
        if (valor <= 0) {
            console.log("Valor invalido")
            return;
        }
        this.saldo -= valor;
        console.log("saque realizado com sucesso")
    }

    deposita(valor) {
        if (valor <= 0) {
            console.log('valor invalido!')
            return;

        }
        //aumenta o saldo
        this.saldo += valor;
        console.log(`foi depositado ${this.saldo} reais na sua conta  ${this.nome}`)
    }
}
let c1 = new Conta('Ricardo', 111111, 1001, 0)
let c2 = new Conta('etevaldo', 10000, 2526, 0)
let c3 = new Conta('c3po', 12345, 2356, 0)

c1.deposita(50)
c2.deposita(100)
c3.deposita(200)

c1.saque(100)
c2.saque(50)
c3.saque(20)

console.log('Conta1: \n' + c1.toString())
console.log('Conta2: \n' + c2.toString())
console.log('Conta3: \n' + c3.toString())

/*console.log(c1)
console.log(c2)
console.log(c3)
console.log(c1.nome)
console.log(c2.nome)
console.log(c3.nome)*/

