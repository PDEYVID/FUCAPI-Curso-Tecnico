/*1- CRIANDO UMA CLASS */
export class Retangulob{
    /*ATRIBUTOS PRIVADOS - não podem ser acessados fora da classe
    ENCAPSULAMENTO
        -ATRIBUTOS SÃO PRIVADOS
        -MÉTODOS SÃP PÚBLICOS
        
        OBS: ATRIBUTOS PRIV. SÃO ACESSICWI DENTRO DA CLASSE(METODOS)*/
    
    #LadoA;
    #LadoB;

    constructor(ladoA, ladoB) {
        this.#LadoA = ladoA
        this.#LadoB = ladoB;
    }
    /*metodos especiais: getters e setter  
    -> sevem para manipular os atibutos privados
    GET- RETORNA UMA VALOR DE UM ATRIBUTO
    SET- MODIFICAR O VALOR DE UM ATRIBUTO*/

    /*chamar os atributos privados*/
    get ladoA() {
        console.log('metodo get')
        return this.#LadoA;
    }
    /*chamar os atributos privados*/
    set ladoA(novoLado) {
        // aux -> armazena lado antigo
        let aux = this.#LadoA
        // troca p/ novo lado
        this.#LadoA = novoLado;
        console.log(`trocou o ladoA de ${aux} para ${this.#LadoA}`)
    }

    get ladoB() {
        return this.#LadoB;
    }
    set ladoB(novoLado) {
        let aux = this.#LadoB
        this.#LadoB = novoLado;
        console.log(`trocou p ladoB de ${aux} para ${this.#LadoB}`)
    }

}

/*
    //CHAMANDO METODO
    r1.ladoA = 3;

    console.log(r1)

    //CHAMANDO GET LADOB
    console.log(r1.ladoB)

    //console.log(r1.#ladoA)
    //console.log(r1.#ladoB)*/