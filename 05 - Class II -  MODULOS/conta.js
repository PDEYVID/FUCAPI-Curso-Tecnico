 export class Conta{
    /* declaração dos atributos */
    #nome;
    #cpf;
    #agencia;
    #saldo;
    #limiteCartao;
    /*atributo estatico
        - e um atributo da classe.
        - todas as instacias tem o mesmo valor
        - nao ultilizamos o this*/

        static MAX_SAQUE=3000; // atributo estatico

    /* método construtor */
    constructor(nome,cpf,agencia,saldo){
        this.#nome = nome;
        this.#cpf = cpf;
        this.#agencia = agencia;
        this.#saldo = saldo
    }
   
     /* retorna uma string, com as info. do obj*/
      get toString(){
        return `Nome: ${this.#nome}\n`+
                `CPF: ${this.#cpf}\n`+
                `Agencia: ${this.agencia}\n`+
                `Saldo: ${this.#saldo}\n`+
                `limite cartao: ${this.#limiteCartao}\n`
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
        this.#saldo += valor;
        console.log(`Foi depositado ${valor} reais na sua conta ${this.#nome}`)
    }

    saque(valorSaque){
        // verificação caso nao tenha saldo suficiente
        if(valorSaque > this.#saldo){
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
        if (valorSaque > Conta.MAX_SAQUE) {
            console.log(`Maximo valor p/ saque: ${Conta.MAX_SAQUE}`)
            return;
        }
        //realizar saque
        this.#saldo -= valorSaque;
        console.log(`${this.#nome} ,saque de ${valorSaque} realizado com`+
                                ` sucesso!`)   
    }
    //paramatros com valor padrão -> ver aula de funcoes
    transferePara( contaDestino = new Conta(),valor=0){
        if(valor <=0 ){
            console.log("Valor invalido!")
            return;
        }
        // caso conta(que envia) não tenha saldo sufic.
        if(this.#saldo < valor){
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
        compraCartao(valor) {
            if (typeof (valor) != 'number') {
                console.log("Valor invalido");
                return
            }
            //verificacao limiteCartao
            if (this.#limiteCartao < valor) {
                console.log("saldo insuficiente")
                return;
            }
            this.#limiteCartao = this.#limiteCartao - valor;
            console.log(`compra de R$ ${valor} realizada`)
        }

        get limiteCartao() {
            return this.#limiteCartao;
        }
        set limiteCartao(limite) {
            return this.#limiteCartao = limite;
        }

}
