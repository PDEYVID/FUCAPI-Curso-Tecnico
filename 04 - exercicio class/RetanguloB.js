/*1- CRIANDO UMA CLASS */
class Retangulob {
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

    get ladoA() {
        return this.#LadoA;
    }
    set ladoA(novoLado) {
        this.#LadoA = novoLado;
    }
    get ladoB() {
        return this.#LadoB;
    }
    set ladoB(novoLado) {
        this.#LadoB = novoLado;
    }

    }

    let r1 = new Retangulob(2, 3)

    //CHAMANDO METODO
    r1.ladoA = 3;

    console.log(r1)

    //CHAMANDO GET LADOB
    console.log(r1.ladoB)

    //console.log(r1.#ladoA)
    //console.log(r1.#ladoB)