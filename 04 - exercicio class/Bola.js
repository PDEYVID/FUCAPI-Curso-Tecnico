/*Classe Bola(Bola.js): Crie uma classe que modele uma bola:
Atributos: Cor, tamanho(em cm), material
Métodos: trocaCor e mostraCor*/


class Bola {
    cor;
    tamanho;
    material;

    constructor(cor, tamanho, material) {
        this.cor = cor
        this.tamanho = tamanho
        this.material = material
    }

    tostring() {
        return `cor:${this.cor}\n` +
            `Tamanho: ${this.tamanho}\n` +
            `Material: ${this.material}\n`
    }
    trocacor(c1) {
        this.cor = c1;
    }
    mostrarcor() {

    }

}

let bola0 = new Bola('vermelha', 10, 'plastico')

console.log(bola0.tostring())

bola0.trocacor('roxa')
console.log('bola trocada' + '\n' + bola0.tostring())
