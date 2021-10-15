export class Pessoa{
    #nome;
    #cpf;

    constructor(nome, cpf) {
        this.#nome = nome;
        this.#cpf = cpf;
    }
    get nome() {
        return this.#nome;
    }
    set nome(nome) {
        this.#nome = nome;
    }
    get toString(){
        return `Pessoa:{`+ 
                `NOME: ${this.#nome}, CPF: ${this.#cpf} }`;
    }

    get cpf(){
        return this.#cpf;
    }
    set cpf(cpf){
        this.#cpf = cpf;
    }

}