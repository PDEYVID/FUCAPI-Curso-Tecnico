class Conta {
    /* declaração dos atributos*/
    nome;
    cpf;
    agencia;
    saldo;

    /* método construtor */
    constructor(nome, cpf, agencia, saldo) {
        this.nome = nome;
        this.cpf = cpf;
        this.agencia = agencia;
        this.saldo = saldo
    }
    /* retorna uma string, com as info. do obj*/
    toString() {
        return `Nome: ${this.nome}\n` +
            `CPF: ${this.cpf}\n` +
            `Agencia: ${this.agencia}\n` +
            `Saldo: ${this.saldo}\n`
    }

    /*metodo deposita(): aumenta o saldo*/
    deposita(valor) {
        //validação do valor
        if (valor <= 0) {
            //console.log('valor invalido') // impressão
            return;
        }
        // aumenta o saldo
        this.saldo += valor;
        console.log(`foi depositado ${valor} reais na sua conta ${this.nome}`)
    }
    saque(valorSaque) {
        // verificação caso não tenha saldo suficiente
        if (valorSaque > this.saldo) {
            //mensage
            console.log('saldo invalido')
            return;
        }
        //caso valorsaque negativo
        if (valorSaque <= 0) {
            console.log("valor invalido!")
            return;
        }

        if (typeof (valorSaque) != 'number') {
            console.log("valor invalido!")
            return;
        }
        //realizar saque
        this.saldo -= valorSaque;
        console.log(`${this.nome} ,saque de ${valorSaque} realizado com sucesso`)
    }
    transferepara(contaDestino = new Conta(), valor){
        if(valor <=0){
            console.log("valor invalidp!")
            return;
        }
        //caso conta(que envia) não tenha saldo saldo sufi
        if(this.saldo < valor){
            console.log("não tem valor suficiente p/ transferir")
            return;
        }
        //verificar se contaDestino e conta
        if((contaDestino instanceof Conta) == false){
            console.log("Conta invalida!")
            return;

        }
        // fazer transferencia
        this.saque(valor)
        contaDestino.deposita(valor)
        console.log("transferencia realizada com sucesso")
    }

}
let c1 = new Conta('Ricardo', 111111, 1001, 80)
let c2 = new Conta('Alice', 2323232, 1111, 0)
let c3 = new Conta('Gohan', 22222, 1111, 123)

/* TESTANDO A CLASSE CONTA*/ 

c1.deposita(70); //chamada do medodo
c2.deposita(80);
c3.deposita(1000);
c1.deposita(-50)

console.log(c1.toString())
console.log(c2.toString())
console.log(c3.toString())

c1.saque(20);
c1.saque(-50);
c2.saque(30);
c2.saque(-60);
c3.saque(40);
c3.saque(-30);

c1.deposita(400);
//transferencia de 200 reais c1 para c2

c1.transferepara(c2,200) 

console.log(c1.toString())
console.log(c2.toString())
console.log(c3.toString())