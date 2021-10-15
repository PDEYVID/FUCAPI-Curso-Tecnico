

export class Retangulo{
    /* atributos privados - não podem ser acessados fora da classe 
    ENCAPSULAMENTO: 
        - Atributos são privados
        - Métodos são públicos

    OBS: Atributos priv. são acessiveis DENTRO da classe(métodos)
    */
  
    #ladoA;
    #ladoB;

    constructor(ladoA,ladoB){
        this.#ladoA = ladoA;
        this.#ladoB = ladoB
    }
    /* Métodos especiais: getters e setter 
        Servem para manipular os atributos privado;
        GET: retorna um valor de um atributo
        SET: modifica o valor de um atriubuto
    */
    get ladoA(){
        console.log('método get')
        return this.#ladoA
    }
    set ladoA(novoLado){
        //aux -> armazena lado antigo
        let aux = this.#ladoA;
        // troca p/ novo lado
        this.#ladoA = novoLado

        console.log(`Trocou o ladoA de ${aux}  para ${this.#ladoA}`)
    }

    get ladoB(){
        return this.#ladoB;
    }

    set ladoB(novoLado){
        let aux = this.#ladoB;
        this.#ladoB  = novoLado;
        console.log(`Trocou ladoB de ${aux} para ${this.#ladoB}`) 
    }


}


