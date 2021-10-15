

class Conta{
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
    /* metodo para fazer um saque de um valor */
    saque(valor){
        //caso nao tenha valor suficiente
        if(valor > this.saldo){
            console.log("Não tem saldo suficiente!")
            return;
        }
        //caso valor invalido
        if( valor <= 0 ){
            console.log("Valor invalido")
            return;
        }
        this.saldo -= valor;
        console.log("Saque realizado com sucesso");
    }

    
    deposita(valor){
        if(valor <= 0 ){
            console.log('Valor invalido!')
            return ;
        }
        //aumentar o saldo
        this.saldo += valor;
        console.log(`Foi depositado ${this.saldo} reais na sua conta ${this.nome}`)
    }
    //parâmetros com valores padrões
    transferePara(destino = new Conta(), valor=0){
        if(valor<=0){
            console.log("Valor inválido!")
            return; 
        }
        //caso nao tenha saldo suficiente
        if(this.saldo < valor){
            console.log("Não tem valor suficiente para transferir")
            return;
        }
        if(destino.saldo==undefined){
            console.log("Conta destino inválida")
            return;
        }

        this.saque(valor)
        destino.deposita(valor)
        console.log("Transferencia realizada com sucesso!")
    }


}
let c1 = new Conta('Ricardo',111111,1001,0)
let c2 = new Conta('Alice',2323232,1111,0)

c1.deposita(50) 
c2.deposita(150)

c1.saque(25)
c2.saque(50)


c2.transferePara(c1,10)

console.log( 'Conta 1: \n'+c1.toString() )
console.log( 'Conta 2: \n'+c2.toString() )
