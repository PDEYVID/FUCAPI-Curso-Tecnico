import { Moveis } from "./Moveis.js";

 export class Cama extends Moveis{
    #espuma;
    #pesoSuportado;
    #marca;

    constructor(espuma, pesoSuportado, marca){
       this.#espuma = espuma;
       this.#pesoSuportado = pesoSuportado;
       this.#marca = marca;
    }

    toString() {
        return `Espuma: ${this.espuma}\n` +
            `Peso Suportado: ${this.pesoSuportado}\n` +
            `Marca: ${this.marca}\n`
    }
    
    get espuma(){
        return this.#espuma
    }
    set espuma(espumamacia){
        this.#espuma = espumamacia
    }
    get pesoSuportado(){
        return this.#pesoSuportado
    }
    set pesoSuportado(peso){
        this.#pesoSuportado = peso
    }
    get marca(){
        return this.#marca
    }
    set marca(box){
        this.#marca = box
    }     
}