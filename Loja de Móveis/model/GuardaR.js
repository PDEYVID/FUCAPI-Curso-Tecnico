import { Moveis } from "./Moveis.js";

export class GuardaR extends Moveis{
    
    #qtdPorta;
    #qtdGaveta;
    #marca;

    constructor(nome,preco,marca,qtdPorta, qtdGaveta, marca){
        super("123",200,marca)
       this.#qtdPorta = qtdPorta;
       this.#qtdGaveta = qtdGaveta;
       this.#marca = marca;
    }

    toString() {
        return `Quantidade de porta: ${this.#qtdPorta}\n` +
            `Quantidade de Gaveta: ${this.#qtdGaveta}\n` +
            `Marca: ${this.#marca}\n`
    }
    
    get qtdPorta(){
        return this.#qtdPorta
    }
    set qtdPorta(porta){
        this.#qtdPorta = porta
    }
    get qtdGaveta(){
        return this.#qtdGaveta
    }
    set qtdGaveta(gaveta){
        this.#qtdGaveta = gaveta
    }
    get marca(){
        return this.#marca
    }
    set marca(marca){
        this.#marca = marca
    }

    static verMoveis (ver){
        string+="Deseja deletar este vendedor? \n"
        string+=`    - nome: ${vendedor.nome}}`
        string+=`    - cpf: ${vendedor.cpf}}`
        string+=`    - salario: ${vendedor.salario}}`
    }
}
