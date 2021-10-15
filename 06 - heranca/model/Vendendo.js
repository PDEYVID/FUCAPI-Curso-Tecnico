import { Funcionario } from "./Funcionario";

export class Vendedor extends Funcionario{
#totaldeVendas;

    constructor(nome, cpf, salario) {
        super(nome, cpf, salario); // construstor de funcionarios
        this.#totaldeVendas = 0;
    }
    get totalVendas() {
        return this.#totaldeVendas;
    }
    set totalVendas(total) {
        this.#totaldeVendas = total;
    }
    get toString() {
        return `Vendendor {${super.toString2}},` +
            `totalVendas: ${this.#totaldeVendas}`
    }
    get calculaSalario(){
        return this.salario + this.#totaldeVendas*0.01;
    }
}