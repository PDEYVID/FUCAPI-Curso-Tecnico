

class Conta{
    /* declaração dos atributos */
    nome;
    cpf;
    agencia;
    saldo;

    /* método construtor */
    constructor(nome,cpf,agencia,saldo){
        this.nome = nome;
        this.cpf = cpf;
        this.agencia = agencia;
        this.saldo = saldo
    }
   
     /* retorna uma string, com as info. do obj*/
     toString(){
        return `Nome: ${this.nome}\n`+
                `CPF: ${this.cpf}\n`+
                `Agencia: ${this.agencia}\n`+
                `Saldo: ${this.saldo}\n`
    }

    /* método deposita(): aumenta o saldo */
    deposita(valor){
        //validação do valor
        //console.log(valor)
        if(valor <=0) {
            console.log('Valor invalido!');
            return ; // quebrar o código 
        }
        // aumentar o saldo
        this.saldo += valor;
        console.log(`Foi depositado ${valor} reais na sua conta ${this.nome}`)
    }

    saque(valorSaque){
        // verificação caso nao tenha saldo suficiente
        if(valorSaque > this.saldo){
            //mensage 
            console.log("Saldo insuficiente!")
            return;
        }
        //caso valorSaque negativo
        if(valorSaque <= 0 ){
            console.log("Valor negativo!")
            return;
        }
        if(typeof(valorSaque) !='number'){
            console.log("Valor invalido!")
            return;
        }
        //realizar saque
        this.saldo -= valorSaque;
        console.log(`${this.nome} ,saque de ${valorSaque} realizado com`+
                                ` sucesso!`)

        
    }
    //paramatros com valor padrão -> ver aula de funcoes
    transferePara( contaDestino = new Conta(),valor=0){
        if(valor <=0 ){
            console.log("Valor invalido!")
            return;
        }
        // caso conta(que envia) não tenha saldo sufic.
        if(this.saldo < valor){
            console.log("Nao tem valor suficiente p/ transferir")
            return;
        }
        //verificar se contaDestino é conta
        if( (contaDestino instanceof Conta) == false  ){
            console.log("Conta inválida!")
            return;
        }

        //fazer transferencia
        this.saque(valor)
        contaDestino.deposita(valor)
        console.log("Transferencia realizada com sucesso")
        
    }

}
let c1 = new Conta('Ricardo',111111,1001,50)
let c2 = new Conta('Alice',2323232,1111,0)
//Exercicio : Instancie uma nova conta

/* TESTANDO A CLASSE CONTA */
//deposita 70 reais em c1
c1.deposita(70);
c2.deposita(80);
c1.deposita(-40);

console.log(c1.toString())
console.log(c2.toString())

c1.saque(10);
c1.saque(-20)
c1.saque(1000);
c1.saque('dasdas')
c2.saque(20)


c1.deposita(400)
//transferencia de 200 reais de c1 para c2
console.log(c1.toString())
console.log(c2.toString())

c1.transferePara(c2,200) 

console.log(c1.toString())
console.log(c2.toString())
